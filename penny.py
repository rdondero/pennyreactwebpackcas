#!/usr/bin/env python

#-----------------------------------------------------------------------
# penny.py
# Author: Bob Dondero
#-----------------------------------------------------------------------

import json
import flask
import database
import auth

from top import app

#-----------------------------------------------------------------------

@app.route('/', methods=['GET'])
@app.route('/index', methods=['GET'])
def index():

    return flask.send_file('index.html')

#-----------------------------------------------------------------------

@app.route('/indexprotected', methods=['GET'])
def index_protected():

    auth.authenticate()

    return flask.send_file('indexprotected.html')

#-----------------------------------------------------------------------

@app.route('/getusername', methods=['GET'])
def get_username():

    user_info = auth.authenticate()
    # print(user_info)
    username = user_info['user']

    return username

#-----------------------------------------------------------------------

@app.route('/searchresults', methods=['GET'])
def search_results():

    auth.authenticate()

    author = flask.request.args.get('author')
    if author is None:
        author = ''
    author = author.strip()

    if author == '':
        books = []
    else:
        books = database.get_books(author) # Exception handling omitted

    json_doc = json.dumps(books)
    response = flask.make_response(json_doc)
    response.headers['Content-Type'] = 'application/json'
    return response
