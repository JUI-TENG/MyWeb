from flask import Flask, request, render_template
import wikipedia
app = Flask(__name__)

@app.route('/', methods=['POST', 'GET'])
def home():
    return render_template('main.html')