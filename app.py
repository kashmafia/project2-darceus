import os
import datetime
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
)

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

bp = flask.Blueprint("bp", __name__, template_folder="./build")

db = SQLAlchemy(app)


class Person(UserMixin, db.Model):
    """
    Model for a) User rows in the DB and b) Flask Login object
    """

    buyer_id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(80))
    password = db.Column(db.String(80))

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


class Items(db.Model):
    """
    Model for saved items
    """

    item_id = db.Column(db.Integer, primary_key=True)
    item_description = db.Column(db.String(640))
    item_name = db.Column(db.String(60))
    email = db.Column(db.String(120))
    item_pic = db.Column(BYTEA)
    date = db.Column(db.Date, default=datetime.datetime.utcnow)
    price = db.Column(db.Float, primary_key=True)

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
def load_user(user_name):
    """
    Required by flask_login
    """
    return Person.query.get(user_name)


@bp.route("/")
def home():
    return render_template("index.html")


app.register_blueprint(bp)

# @app.route("/save", methods=["POST"])
# def save():
#     """
#     Receives JSON data from App.js, filters out invalid artist IDs, and
#     updates the DB to contain all valid ones and nothing else.
#     """
#     artist_ids = flask.request.json.get("artist_ids")
#     valid_ids = set()
#     for artist_id in artist_ids:
#         try:
#             access_token = get_access_token()
#             get_song_data(artist_id, access_token)
#             valid_ids.add(artist_id)
#         except KeyError:
#             pass

#     username = current_user.username
#     update_db_ids_for_user(username, valid_ids)

#     response = {"artist_ids": [a for a in artist_ids if a in valid_ids]}
#     return flask.jsonify(response)


# def update_db_ids_for_user(username, valid_ids):
#     """
#     Updates the DB so that only entries for valid_ids exist in it.
#     @param username: the username of the current user
#     @param valid_ids: a set of artist IDs that the DB should update itself
#         to reflect
#     """
#     existing_ids = {
#         v.artist_id for v in Artist.query.filter_by(username=username).all()
#     }
#     new_ids = valid_ids - existing_ids
#     for new_id in new_ids:
#         db.session.add(Artist(artist_id=new_id, username=username))
#     if len(existing_ids - valid_ids) > 0:
#         for artist in Artist.query.filter_by(username=username).filter(
#             Artist.artist_id.notin_(valid_ids)
#         ):
#             db.session.delete(artist)
#     db.session.commit()

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


app.run(host=os.getenv("IP", "0.0.0.0"), port=int(os.getenv("PORT", 8081)), debug=True)
