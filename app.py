from flask import Flask, request, jsonify
from flask_cors import CORS  
import numpy as np
import joblib  

app = Flask(__name__)
CORS(app)  

# Load trained models
diabetes_model = joblib.load("model_diabetes.joblib")  
breast_cancer_model = joblib.load("model_breast_cancer.joblib")  

@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.json  # Get data from frontend
        disease_type = data.get("disease")  # Identify the disease type
        
        if disease_type == "Diabetes":
            # Extract features for Diabetes prediction
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
            input_array = np.array(features).reshape(1, -1)
            prediction = diabetes_model.predict(input_array)
        
        elif disease_type == "Breast Cancer":
            # Extract features for Breast Cancer prediction
            features = [
                float(data["radius1"]), float(data["texture1"]), float(data["perimeter1"]), float(data["area1"]), float(data["smoothness1"]),
                float(data["compactness1"]), float(data["concavity1"]), float(data["concave_points1"]), float(data["symmetry1"]), float(data["fractal_dimension1"]),
                float(data["radius2"]), float(data["texture2"]), float(data["perimeter2"]), float(data["area2"]), float(data["smoothness2"]),
                float(data["compactness2"]), float(data["concavity2"]), float(data["concave_points2"]), float(data["symmetry2"]), float(data["fractal_dimension2"]),
                float(data["radius3"]), float(data["texture3"]), float(data["perimeter3"]), float(data["area3"]), float(data["smoothness3"]),
                float(data["compactness3"]), float(data["concavity3"]), float(data["concave_points3"]), float(data["symmetry3"]), float(data["fractal_dimension3"])
            ]
            input_array = np.array(features).reshape(1, -1)
            prediction = breast_cancer_model.predict(input_array)

        else:
            return jsonify({"error": "Invalid disease type"})

        return jsonify({"prediction": int(prediction[0])})

    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == "__main__":
    app.run(debug=True)
