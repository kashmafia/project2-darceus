#!/usr/bin/env python
# -*- coding: utf-8 -*-
# pylint: disable=no-member
"""
Server app
"""
import os
import datetime
import json
import bcrypt
from dotenv import load_dotenv, find_dotenv
import flask

import stripe
from flask import jsonify, render_template, redirect, request
from flask.helpers import url_for
from flask_sqlalchemy import SQLAlchemy
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
    """
    Login manager
    """
    return User.query.get(int(user_id))


class User(db.Model, UserMixin):
    """
    User table
    """

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
    item_pic = db.Column(db.String(1000))
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
    """
    Register form
    """

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
    """
    Login form
    """

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
    """
    Main page
    """

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

    print(products)
    print(cart)

    data = json.dumps({"list_item": products, "user_cart": cart, "user_name": username})
    return render_template("index.html", data=data,)


@app.route("/login", methods=["GET", "POST"])
def login():
    """
    Login API
    """

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
    """
    Dashboard API
    """

    return render_template("index.html")


@app.route("/logout", methods=["GET", "POST"])
@login_required
def logout():
    """
    Logout API
    """

    logout_user()
    return redirect(url_for("login"))


@app.route("/register", methods=["GET", "POST"])
def register():
    """
    Register API
    """

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


@app.route("/save_product", methods=["GET", "POST"])
def save_product():
    """
    Seller form API: to save new item for sale
    """

    item_name = flask.request.json.get("company_website")
    item_price = flask.request.json.get("price")
    item_about = flask.request.json.get("about")
    item_image = flask.request.json.get("file_upload")

    username = current_user.username

    print(item_name)
    print(item_price)
    print(item_about)
    print(username)
    print(item_image)

    new_item = Items(
        item_name=item_name,
        price=item_price,
        item_description=item_about,
        username=username,
        item_pic=item_image,
    )
    db.session.add(new_item)
    db.session.commit()

    # response = {"company_website": item_name, "price": item_price, "about": item_about}
    # return flask.jsonify(response)
    return jsonify({"message": "Add items success"})


def save_product_testing(item_name, item_price, item_about):
    """
    Testing API
    """

    username = "gary"

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


@app.route("/add_to_cart", methods=["POST"])
def add_to_cart():
    """
    Cart (add item) API
    """

    new_item = flask.request.json.get("new-item")
    print(new_item)

    username = current_user.username
    user_id = User.query.filter_by(username=username).first().id

    # Check if item already exist
    check_if_item_exist = BuyerItems.query.filter_by(
        item_id=new_item["id"], buyer_id=user_id
    ).first()
    if check_if_item_exist is None:
        # Add new item to table

        new_buyer_item = BuyerItems(item_id=new_item["id"], buyer_id=user_id)
        db.session.add(new_buyer_item)
        db.session.commit()
        return jsonify({"message": "success"})

    return jsonify({"message": "fail"})


@app.route("/remove_from_cart", methods=["POST"])
def remove_from_cart():
    """
    Cart (remove item) API
    """

    remove_item = flask.request.json.get("remove-item")
    print(remove_item)

    username = current_user.username
    user_id = User.query.filter_by(username=username).first().id

    db.session.query(BuyerItems).filter(
        BuyerItems.item_id == remove_item["id"], BuyerItems.buyer_id == user_id
    ).delete()
    db.session.commit()
    return jsonify({"message": "success"})


# Do not remove, Stripe handling api.
@app.route("/create-checkout-session", methods=["POST"])
def create_checkout_session():
    """
    Stripe payment API
    """

    subtotal = flask.request.json.get("subtotal")

    # Create product for this checkout session
    product = stripe.Product.create(
        name=datetime.datetime.now().strftime("%m/%d/%Y, %H:%M:%S")
    )
    price = stripe.Price.create(
        product=f"{product['id']}", unit_amount=int(subtotal) * 100, currency="usd",
    )

    print(subtotal, product["id"], price["id"])

    try:
        checkout_session = stripe.checkout.Session.create(
            line_items=[
                {
                    # Provide the exact Price ID (e.g. pr_1234) of the product you want to sell
                    "price": f"{price['id']}",
                    "quantity": 1,
                },
            ],
            billing_address_collection="auto",
            shipping_address_collection={"allowed_countries": ["US", "CA"],},
            payment_method_types=["card",],
            mode="payment",
            success_url="http://fathomless-ravine-12501.herokuapp.com/",
            cancel_url="http://fathomless-ravine-12501.herokuapp.com/",
        )
    except Exception as exceptions:
        print(exceptions)
        return jsonify({"message": "fail"})
    redirect_link = checkout_session["url"]
    print(redirect_link)
    return jsonify({"message": "success", "link": str(redirect_link)})


if __name__ == "__main__":
    app.run(
        host=os.getenv("IP", "0.0.0.0"), port=int(os.getenv("PORT", 8081)), debug=True
    )
