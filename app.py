from flask import Flask,render_template, request, redirect, url_for, jsonify
from utils import option_list


app = Flask(__name__)


@app.route('/')
def index():
	data = option_list()
	return render_template('index.html', data=data)


if __name__=="__main__":
	app.run(debug=True)