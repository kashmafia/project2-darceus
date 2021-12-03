import unittest
import sys
import json
import os
from flask.helpers import url_for
from flask_login import current_user

# getting the name of the directory
# where the this file is present.
current = os.path.dirname(os.path.realpath(__file__))

# Getting the parent directory name
# where the current directory is present.
parent = os.path.dirname(current)

# adding the parent directory to
# the sys.path.
sys.path.append(parent)

from app import app, db, User, login, logout

uri = os.getenv("DATABASE_URL")  # or other relevant config var
if uri.startswith("postgres://"):
    uri = uri.replace("postgres://", "postgresql://", 1)


class GetLoginDataTests(unittest.TestCase):
    def setUp(self):
        app.config["TESTING"] = True
        app.config["WTF_CSRF_ENABLED"] = False
        app.config["DEBUG"] = False
        app.config["SQLALCHEMY_DATABASE_URI"] = uri
        self.app = app.test_client()
        # comment for CI/CD
        # db.drop_all()
        # db.create_all()

    def test_login(self):
        response = self.app.get("/login", follow_redirects=True)
        self.assertEqual(response.status_code, 200)

    def test_logout(self):
        response = self.app.get("/logout", follow_redirects=True)
        self.assertEqual(response.status_code, 200)


if __name__ == "__main__":
    unittest.main()
