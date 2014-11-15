import requests

request = requests.post("http://api.justyo.co/yo/", data={'api_token': '8857de65-b94d-45c9-b1d7-752432b7e7d8', 'username': 'SQUAD5'}).text

print request