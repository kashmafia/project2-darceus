import os
import datetime
import bcrypt
from dotenv import load_dotenv, find_dotenv
import json
import flask

import stripe
from flask import jsonify, render_template, redirect, flash, request
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.dialects.postgresql import BYTEA
from flask_login import (
    login_user,
    current_user,
    LoginManager,
    UserMixin,
    login_required,
    logout_user,
)

from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField
from wtforms.validators import InputRequired, Length, ValidationError
from flask_bcrypt import Bcrypt

load_dotenv(find_dotenv())

uri = os.getenv("DATABASE_URL")  # or other relevant config var
if uri.startswith("postgres://"):
    uri = uri.replace("postgres://", "postgresql://", 1)
from flask.helpers import url_for


stripe.api_key = os.getenv("STRIPE_SECRET_KEY")

app = flask.Flask(__name__, static_folder="./build/static")
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["SEND_FILE_MAX_AGE_DEFAULT"] = 0
app.config["SQLALCHEMY_DATABASE_URI"] = uri
app.config["SECRET_KEY"] = b"\x03q\xd5=\x0c\x1e]/"

bp = flask.Blueprint("bp", __name__, template_folder="./build")
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)

login_manager = LoginManager()
login_manager.login_view = "login"
login_manager.init_app(app)


@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))


class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(250), nullable=False, unique=True)
    password = db.Column(db.String(250), nullable=False)

    def __repr__(self):
        """
        Determines what happens when we print an instance of the class
        """
        return f"<Buyer {self.id}>"

    def get_username(self):
        """
        Getter for username attribute
        """
        return self.username


class Items(db.Model):
    """
    Model for saved items
    """

    id = db.Column(db.Integer, primary_key=True)
    item_description = db.Column(db.String(640))
    item_name = db.Column(db.String(60))
    username = db.Column(db.String(120))
    item_pic = db.Column(db.String(120))
    date = db.Column(db.Date, default=datetime.datetime.utcnow)
    price = db.Column(db.Float)

    def __repr__(self):
        """
        Determines what happens when we print an instance of the class
        """
        return f"<Item {self.id}>"


class BuyerItems(db.Model):
    """
    Model for saved artists
    """

    id = db.Column(db.Integer, primary_key=True)
    item_id = db.Column(db.Integer)
    buyer_id = db.Column(db.Integer)

    def __repr__(self):
        """
        Determines what happens when we print an instance of the class
        """
        return f"<Buyer {self.buyer_id}>"


class SellerItems(db.Model):
    """
    Model for saved artists
    """

    id = db.Column(db.Integer, primary_key=True)
    item_id = db.Column(db.Integer)
    seller_id = db.Column(db.Integer)

    def __repr__(self):
        """
        Determines what happens when we print an instance of the class
        """
        return f"<Buyer {self.seller_id}>"


class RegisterForm(FlaskForm):
    username = StringField(
        validators=[InputRequired(), Length(min=4, max=250)],
        render_kw={"placeholder": "Username"},
    )
    password = PasswordField(
        validators=[InputRequired(), Length(min=4, max=250)],
        render_kw={"placeholder": "Password"},
    )

    submit = SubmitField("Register")

    def validate_username(self, username):
        existing_user_username = User.query.filter_by(username=username.data).first()

        if existing_user_username:
            raise ValidationError(
                "That Username already exists. Please choose a different one."
            )


class LoginForm(FlaskForm):
    username = StringField(
        validators=[InputRequired(), Length(min=4, max=250)],
        render_kw={"placeholder": "Username"},
    )
    password = PasswordField(
        validators=[InputRequired(), Length(min=4, max=250)],
        render_kw={"placeholder": "Password"},
    )

    submit = SubmitField("Login")


db.create_all()


@bp.route("/")
def home():

    # check if current_user is anonymous
    if current_user.is_anonymous:
        return redirect("/login")

    # get user's favorite artists and update the list of Artist Name
    username = current_user.username
    user_id = User.query.filter_by(username=username).first().id
    print(username, user_id)

    # Get list of items for sales and list of item that current user are saving in their cart
    list_item = Items.query.all()
    user_cart = BuyerItems.query.filter_by(buyer_id=user_id).all()

    # make a dictionary of user cart for faster look up
    item_in_cart = {}
    for item in user_cart:
        item_in_cart[item.item_id] = item.buyer_id

    # Query list_item and send all item to client side
    products = []
    cart = []
    for item in list_item:
        # serialize item into dict and save it to products
        product = {}
        product["id"] = item.id
        product["description"] = item.item_description
        product["name"] = item.item_name
        product["seller"] = item.username
        product["image"] = item.item_pic
        product["price"] = item.price
        products.append(product)

        # if item's id is in user's cart, add product to their cart
        if item.id in item_in_cart:
            cart.append(product)

    data = json.dumps({"list_item": products, "user_cart": cart, "user_name": username})
    return render_template("index.html", data=data,)


@app.route("/login", methods=["GET", "POST"])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(username=form.username.data).first()
        if user:
            if bcrypt.check_password_hash(
                user.password, form.password.data.encode("utf-8")
            ):
                login_user(user)
                USER = form.username.data
                # return dashboard(form.username.data)
                return redirect(url_for("bp.home"))
    return flask.render_template("login.html", form=form,)


@app.route("/dashboard", methods=["GET", "POST"])
def dashboard():
    return render_template("index.html")


@app.route("/logout", methods=["GET", "POST"])
@login_required
def logout():
    logout_user()
    return redirect(url_for("login"))


@app.route("/register", methods=["GET", "POST"])
def register():
    form = RegisterForm()

    if form.validate_on_submit():
        hashed_password = bcrypt.generate_password_hash(form.password.data).decode(
            "utf-8"
        )
        new_user = User(username=form.username.data, password=hashed_password)
        db.session.add(new_user)
        db.session.commit()
        return redirect(url_for("login"))

    return flask.render_template("register.html", form=form)


app.register_blueprint(bp)


@app.route("/save_product", methods=["POST"])
def save_product():
    item_name = flask.request.json.get("company_website")
    item_price = flask.request.json.get("price")
    item_about = flask.request.json.get("about")
    item_image = flask.request.json.get("file_upload")

    username = current_user.username

    print(item_name)
    print(item_price)
    print(item_about)
    print(username)

    new_item = Items(
        item_name=item_name,
        price=item_price,
        item_description=item_about,
        username=username,
    )  # item_pic needs to be added back when kash db is working
    db.session.add(new_item)
    db.session.commit()

    # response = {"company_website": item_name, "price": item_price, "about": item_about}
    # return flask.jsonify(response)
    return jsonify({"message": "Add items success"})


# Do not remove, Stripe handling api.
@app.route("/create-checkout-session", methods=["POST"])
def create_checkout_session():
    try:
        checkout_session = stripe.checkout.Session.create(
            line_items=[
                {
                    # Provide the exact Price ID (e.g. pr_1234) of the product you want to sell
                    "price": "price_1JrXhtJ2O3RVC57ZFhuSMEgu",
                    "quantity": 1,
                },
            ],
            payment_method_types=["card",],
            mode="payment",
            success_url=request.base_url + "/success.html",
            cancel_url=url_for("home", _external=True),
        )
    except Exception as e:
        return str(e)

    return redirect(checkout_session.url, code=303)


app.run(host=os.getenv("IP", "0.0.0.0"), port=int(os.getenv("PORT", 8081)), debug=True)
