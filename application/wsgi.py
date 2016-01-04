#!/usr/bin/env python
from flask import Flask, render_template, request, json

application = Flask(__name__)


@application.route('/')
def index():
    return render_template('index.html')


@application.route('/skills', methods = ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'])
def skills():
    print (request.method)
    if request.method == 'GET':
        f = open('/data/skills', 'r')
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
        f = open('/data/skills', 'a')
        f.write("\n"+skill)
        f.close

        return json.dumps({'answer': "Save"})


    elif request.method == 'PUT':
        name = request.form['name']
        f = open('/data/skills', 'w')
        f.write(name)
        f.close()

        return json.dumps({'answer': 'Save'})

    elif request.method == 'DELETE':
        f = open('/data/skills', 'w')
        f.write('')
        f.close()

        return json.dumps({'answer': 'All skills have been removed'})

    else:
        return json.dumps({'answer': '404'})


if __name__=="__main__":
    # application.run(debug=True)
    application.run(host='0.0.0.0', debug=True)
    # application.run(host='127.0.0.1', debug=True)
