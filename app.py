from flask import render_template, request, redirect, url_for
from flask import jsonify


@app.route('/')
def index(error=None):
    return render_template('index.html', error=error)