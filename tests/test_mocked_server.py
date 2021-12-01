import unittest
from unittest.mock import MagicMock, patch

import sys
import os

# getting the name of the directory
# where the this file is present.
current = os.path.dirname(os.path.realpath(__file__))

# Getting the parent directory name
# where the current directory is present.
parent = os.path.dirname(current)

# adding the parent directory to
# the sys.path.
sys.path.append(parent)

from app import save_product_testing, Items

INPUT = "INPUT"
EXPECTED_OUTPUT = "EXPECTED_OUTPUT"


class UpdateDBIDsTests(unittest.TestCase):
    def setUp(self):
        self.db_mock = [
            Items(
                id=1,
                username="Woo",
                item_description="that's what's up",
                price=10,
                item_name="bugs",
            )
        ]

    def mock_add_to_db(self, items):
        self.db_mock.append(items)

    def mock_delete_from_db(self, items):
        self.db_mock = [entry for entry in self.db_mock if entry.id != items.id]

    def mock_db_commit(self):
        pass

    def test_update_db_ids_for_user(self):
        with patch("app.Items.query") as mock_query:
            with patch("app.db.session.add", self.mock_add_to_db):
                with patch("app.db.session.delete", self.mock_delete_from_db):
                    with patch("app.db.session.commit", self.mock_db_commit):
                        mock_filtered = MagicMock()
                        mock_filtered.all.return_value = self.db_mock
                        # Hard-coding in some logic from test case 3.
                        # This is because SQLAlchemy is just kinda hard to mock
                        # in some instances
                        mock_filtered.filter.return_value = [
                            Items(
                                id=2,
                                username="Woo",
                                item_description="that's what's up",
                                price=10,
                                item_name="bugs",
                            )
                        ]
                        mock_query.filter_by.return_value = mock_filtered

                        # Now that setup is done...
                        # 1) Try to add the same Item to the DB.
                        save_product_testing("that's what's up", 10, "bugs")
                        self.assertEqual(len(self.db_mock), 2)

                        save_product_testing("that's what's up", 10, "bugs")
                        self.assertEqual(self.db_mock[1].price, 10)


if __name__ == "__main__":
    unittest.main()
