# import unittest
# import sys
# import os

# # getting the name of the directory
# # where the this file is present.
# current = os.path.dirname(os.path.realpath(__file__))

# # Getting the parent directory name
# # where the current directory is present.
# parent = os.path.dirname(current)

# # adding the parent directory to
# # the sys.path.
# sys.path.append(parent)

# INPUT = "INPUT"
# EXPECTED_OUTPUT = "EXPECTED_OUTPUT"


# class GetSongDataTests(unittest.TestCase):
#     def setUp(self):
#         self.success_test_params = [
#             {INPUT: {}, EXPECTED_OUTPUT: (None, None, None, None),},
#             {
#                 INPUT: {"name": "Song Name"},
#                 EXPECTED_OUTPUT: ("Song Name", None, None, None),
#             },
#             {
#                 INPUT: {
#                     "name": "Song Name",
#                     "artists": [{"name": "Artist"}],
#                     "album": {"images": [{"url": "image_url"}]},
#                     "preview_url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
#                 },
#                 EXPECTED_OUTPUT: (
#                     "Song Name",
#                     "Artist",
#                     "image_url",
#                     "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
#                 ),
#             },
#         ]

#     def test_extract_song_data(self):
#         for test in self.success_test_params:
#             self.assertEqual(extract_song_data(test[INPUT]), test[EXPECTED_OUTPUT])
