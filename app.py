from flask import Flask, request, jsonify
from flask_cors import CORS  
import numpy as np
import pandas as pd
import joblib  

app = Flask(__name__)
CORS(app)  

# Load trained models
diabetes_model = joblib.load("model_diabetes.joblib")  
breast_cancer_model = joblib.load("model_breast_cancer.joblib")  
autism_pipeline = joblib.load("autism_model.joblib")  # Load pipeline instead of just model

@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.json  # Get data from frontend
        disease_type = data.get("disease")  # Identify the disease type

        if disease_type == "Diabetes":
            # Extract features for Diabetes prediction
            features = [
                int(data["age"]),
                1 if data["gender"].lower() == "male" else 0,  # Handle gender case sensitivity
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
            features = [float(data[key]) for key in [
                "radius1", "texture1", "perimeter1", "area1", "smoothness1",
                "compactness1", "concavity1", "concave_points1", "symmetry1", "fractal_dimension1",
                "radius2", "texture2", "perimeter2", "area2", "smoothness2",
                "compactness2", "concavity2", "concave_points2", "symmetry2", "fractal_dimension2",
                "radius3", "texture3", "perimeter3", "area3", "smoothness3",
                "compactness3", "concavity3", "concave_points3", "symmetry3", "fractal_dimension3"
            ]]
            input_array = np.array(features).reshape(1, -1)
            prediction = breast_cancer_model.predict(input_array)

        elif disease_type == "Autism":
            # Define expected feature names
            feature_names = [
                "A1_Score", "A2_Score", "A3_Score", "A4_Score", "A5_Score",
                "A6_Score", "A7_Score", "A8_Score", "A9_Score", "A10_Score",
                "age", "gender", "ethnicity", "jaundice", "autism", "used_app_before", "relation"
            ]
            
            # Create a DataFrame for structured input
            input_df = pd.DataFrame([data["features"]], columns=feature_names)
            
            # Debugging: Print input before transformation
            print("Input DataFrame Before Transformation:")
            print(input_df)

            # Predict using the pipeline (which includes OneHotEncoder & other transformations)
            prediction = autism_pipeline.predict(input_df)

        else:
            return jsonify({"error": "Invalid disease type"}), 400

        return jsonify({"prediction": int(prediction[0])})

    except ValueError as ve:
        return jsonify({"error": f"Invalid data format: {str(ve)}"}), 400
    except KeyError as ke:
        return jsonify({"error": f"Missing required field: {str(ke)}"}), 400
    except Exception as e:
        return jsonify({"error": f"Internal server error: {str(e)}"}), 500

if __name__ == "__main__":
    app.run(debug=True)
