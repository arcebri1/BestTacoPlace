from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/tableau')
def tab():
    return render_template('tableau.html')

@app.route('/ml')
def ml():
    return render_template('ml.html')

@app.route('/map')
def map():
    return render_template('map.html')

if __name__ == '__main__':
    app.debug = True
    app.run()