#!/usr/bin/env python
import os
from flask import Flask, render_template, request, json
import subprocess

application = Flask(__name__)


@application.route('/')
def index():
    return render_template('index.html')

@application.route('/app', methods=['GET', 'POST', 'PATCH', 'PUT', 'DELETE'])
def app():
    print(request.method    )
    return 'ssss'


@application.route('/skills', methods = ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'])
def skills():
    f = open('application/skills', 'r')
    skiill = f.read()
    print(skiill)
    return "skiill"




@application.route('/messages', methods = ['POST'])
def api_message():

    if request.headers['Content-Type'] == 'text/plain':
        return "Text Message: " + request.data

    elif request.headers['Content-Type'] == 'application/json':
        return "JSON Message: " + json.dumps(request.json)

    elif request.headers['Content-Type'] == 'application/octet-stream':
        f = open('./binary', 'wb')
        f.write(request.data)
        f.close()
        return "Binary message written!"

    else:
        return "415 Unsupported Media Type ;)"

if __name__=="__main__":
    # application.run(debug=True)
    application.run(host='0.0.0.0', debug=True)
    # application.run(host='127.0.0.1', debug=True)
