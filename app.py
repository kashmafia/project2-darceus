from enum import unique
import os
import datetime
import bcrypt
from dotenv import load_dotenv, find_dotenv
import json
import flask
from flask import jsonify, render_template, redirect, flash, request
from flask.helpers import url_for
<<<<<<< HEAD
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
=======

import stripe

stripe.api_key = os.getenv("STRIPE_SECRET_KEY")
>>>>>>> 354ca04ff083709581b7eef0991bfa4bdd2b9040

app = flask.Flask(__name__, static_folder="./build/static")
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["SEND_FILE_MAX_AGE_DEFAULT"] = 0
app.config["SQLALCHEMY_DATABASE_URI"] = uri
app.config["SECRET_KEY"] = b"\x03q\xd5=\x0c\x1e]/"

bp = flask.Blueprint("bp", __name__, template_folder="./build")
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)

login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = "login"


@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(250), nullable=False, unique=True)
    password = db.Column(db.String(250), nullable=False)


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


@app.route("/")
def home():
    return render_template("home.html")


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
                return redirect(url_for("dashboard"))
    return flask.render_template(
        "login.html",
        form=form,
    )


@app.route("/dashboard", methods=["GET", "POST"])
def dashboard():
    return render_template("dashboard.html")


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

# Do not remove, Stripe handling api.
# @app.route("/create-checkout-session", methods=["POST"])
# def create_checkout_session():
#     try:
#         checkout_session = stripe.checkout.Session.create(
#             line_items=[
#                 {
#                     # Provide the exact Price ID (e.g. pr_1234) of the product you want to sell
#                     "price": "price_1JrXhtJ2O3RVC57ZFhuSMEgu",
#                     "quantity": 1,
#                 },
#             ],
#             payment_method_types=[
#                 "card",
#             ],
#             mode="payment",
#             success_url=request.base_url + "/success.html",
#             cancel_url=url_for('home', _external=True),
#         )
#     except Exception as e:
#         return str(e)

#     return redirect(checkout_session.url, code=303)


if __name__ == "__main__":
    app.run(debug=True)
