import random
import os
import json

import flask
from flask import jsonify, render_template, redirect, flash, request

app = flask.Flask(__name__, static_folder="./build/static")
app.config["SEND_FILE_MAX_AGE_DEFAULT"] = 0

bp = flask.Blueprint("bp", __name__, template_folder="./build")


@bp.route("/")
def home():
    return render_template("index.html")


app.register_blueprint(bp)


app.run(host=os.getenv("IP", "0.0.0.0"), port=int(os.getenv("PORT", 8081)), debug=True)
