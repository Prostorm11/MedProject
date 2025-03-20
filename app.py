from flask import Flask, request, jsonify
from flask_cors import CORS  # Import Flask-CORS
import numpy as np
import joblib  # For loading a trained model

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load your trained machine learning model
model = joblib.load("model_diabetes.joblib")  # Ensure this file exists in your project directory

@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.json  # Get data from frontend

        # Extract features needed for prediction
        features = [
            int(data["age"]),
            1 if data["gender"] == "Male" else 0,
            int(data["Polyuria"]),
            int(data["Polydipsia"]),
            int(data["Vision burning"]),
            int(data["Irritability"]),
            int(data["Partial paresis"]),
            int(data["Alopecia"]),
            int(data["Sudden weight loss"]),
            int(data["Weakness"]),
            int(data["Polyphagia"]),
            int(data["Genital thrush"]),
            int(data["Itching"]),
            int(data["Delayed healing"]),
            int(data["Muscle stiffness"]),
            int(data["Obesity"]),
        ]

        # Convert to NumPy array and reshape for model input
        input_array = np.array(features).reshape(1, -1)

        # Make prediction
        prediction = model.predict(input_array)

        # Return the prediction result
        return jsonify({"prediction": int(prediction[0])})

    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == "__main__":
    app.run(debug=True)
