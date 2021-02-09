from flask import Flask, redirect, url_for, render_template, request
import pandas as pd
# from model_files.ml_model import predict_mpg
import csv
import os

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/tableau")
def tab():
    return render_template("tableau.html")

@app.route("/ml")
def ml():
    return render_template("ml.html")

# @app.route("/", methods=['POST'])
# def predict():
#     vehicle_config = request.get_json()

#     with open('./model_files/model.bin', 'rb') as f_in:
#         model= pickle.load(f_in)
#         f_in.close()

#     predictions = predict_mpg(vehicle_config, model)

#     response = {
#         'mpg_predictions': list(predictions)
#     }

#     return jsonify()

# @app.route("/", methods=['GET'])
# def ping():
#     return "Pinging Model Application!!"        




if __name__ == "__main__":
    app.run(debug=True)