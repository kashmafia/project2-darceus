import random
import os
import json

import flask
from flask import jsonify, render_template, redirect, flash, request
from flask.helpers import url_for

import stripe

stripe.api_key = os.getenv("STRIPE_SECRET_KEY")

app = flask.Flask(__name__, static_folder="./build/static")
app.config["SEND_FILE_MAX_AGE_DEFAULT"] = 0

bp = flask.Blueprint("bp", __name__, template_folder="./build")


@bp.route("/")
def home():
    return render_template("index.html")


app.register_blueprint(bp)

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
