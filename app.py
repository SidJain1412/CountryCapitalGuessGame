from flask import Flask, render_template, request, redirect, url_for, jsonify
from utils import option_list


app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/getData')
def getData():
    data = option_list()
    return jsonify(data)


if __name__ == "__main__":
    app.run(debug=True)
