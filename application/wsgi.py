#!/usr/bin/env python
import os
from flask import Flask, render_template, request, json

application = Flask(__name__)


@application.route('/')
def index():
    return render_template('index.html')



if __name__=="__main__":
    # application.run(debug=True)
    application.run(host='0.0.0.0', debug=True)
    # application.run(host='127.0.0.1', debug=True)
