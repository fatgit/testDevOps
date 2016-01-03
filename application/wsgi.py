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
    print(request.method)
    return 'ssss'


@application.route('/skills', methods = ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'])
def skills():
    print (request.method)
    if request.method == 'GET':
        f = open('application/skills', 'r')
        skills = f.read()
        file_split = skills.split('\n')
        print(file_split)
        text =''
        for i in file_split:
            text += i + '<br>'
        f.close

        return json.dumps({'answer': skills})

    elif request.method == 'POST':
        skill = request.form['name']
        f = open('application/skills', 'a')
        f.write("\n"+skill)
        f.close

        return json.dumps({'answer': "Save"})


    elif request.method == 'PUT':
        name = request.form['name']
        f = open('application/skills', 'w')
        f.write(name)
        f.close()

        return json.dumps({'answer': 'Save'})

    elif request.method == 'DELETE':
        f = open('application/skills', 'w')
        f.write('')
        f.close()

        return json.dumps({'answer': 'All skills have been removed'})

    return "skiill"


if __name__=="__main__":
    # application.run(debug=True)
    application.run(host='0.0.0.0', debug=True)
    # application.run(host='127.0.0.1', debug=True)
