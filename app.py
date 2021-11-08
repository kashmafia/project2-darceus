import os
import datetime
from dotenv import load_dotenv, find_dotenv
import json
import flask
from flask import jsonify, render_template, redirect, flash, request
from flask_sqlalchemy import SQLAlchemy
from flask_login import (
    login_user,
    current_user,
    LoginManager,
    UserMixin,
    login_required,
)

load_dotenv(find_dotenv())

uri = os.getenv("DATABASE_URL")  # or other relevant config var
if uri.startswith("postgres://"):
    uri = uri.replace("postgres://", "postgresql://", 1)

app = flask.Flask(__name__, static_folder="./build/static")
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["SEND_FILE_MAX_AGE_DEFAULT"] = 0
app.config["SQLALCHEMY_DATABASE_URI"] = uri

bp = flask.Blueprint("bp", __name__, template_folder="./build")

db = SQLAlchemy(app)


class Buyer(UserMixin, db.Model):
    """
    Model for a) User rows in the DB and b) Flask Login object
    """

    buyer_id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80))
    email = db.Column(db.String(80))
    password = db.Column(db.String(80))
    balance = db.Column(db.Integer)

    def __repr__(self):
        """
        Determines what happens when we print an instance of the class
        """
        return f"<Buyer {self.buyer_id}>"

    def get_username(self):
        """
        Getter for username attribute
        """
        return self.username


class Seller(UserMixin, db.Model):
    """
    Model for saved artists
    """

    seller_id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), nullable=False)
    email = db.Column(db.String(80))
    password = db.Column(db.String(80))
    balance = db.Column(db.Integer)

    def __repr__(self):
        """
        Determines what happens when we print an instance of the class
        """
        return f"<Seller {self.seller_id}>"


class Items(db.Model):
    """
    Model for saved artists
    """

    item_id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), nullable=False)
    email = db.Column(db.String(80))
    date = db.Column(db.Date, default=datetime.datetime.utcnow)

    def __repr__(self):
        """
        Determines what happens when we print an instance of the class
        """
        return f"<Item {self.item_id}>"


class BuyerItems(db.Model):
    """
    Model for saved artists
    """

    item_id = db.Column(db.Integer, primary_key=True)
    buyer_id = db.Column(db.Integer)
    username = db.Column(db.String(80), nullable=False)

    def __repr__(self):
        """
        Determines what happens when we print an instance of the class
        """
        return f"<Buyer {self.buyer_id}>"


class SellerItems(db.Model):
    """
    Model for saved artists
    """

    item_id = db.Column(db.Integer, primary_key=True)
    seller_id = db.Column(db.Integer)
    username = db.Column(db.String(80), nullable=False)

    def __repr__(self):
        """
        Determines what happens when we print an instance of the class
        """
        return f"<Buyer {self.buyer_id}>"


db.create_all()
login_manager = LoginManager()
login_manager.login_view = "login"
login_manager.init_app(app)


@login_manager.user_loader
def load_buyer(user_name):
    """
    Required by flask_login
    """
    return Buyer.query.get(user_name)


@login_manager.user_loader
def load_seller(user_name):
    """
    Required by flask_login
    """
    return Seller.query.get(user_name)


@bp.route("/")
def home():
    return render_template("index.html")


app.register_blueprint(bp)


app.run(host=os.getenv("IP", "0.0.0.0"), port=int(os.getenv("PORT", 8081)), debug=True)
