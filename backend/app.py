from flask import Flask, request, jsonify, render_template
import numpy as np
import pickle
import pandas as pd
from flask_cors import CORS


app = Flask(__name__)

CORS(app)


pipeline = pickle.load(open("cardio_pipeline.pkl", "rb"))

FEATURE_NAMES = [
    "age_years",
    "height",
    "weight",
    "gender",
    "ap_hi",
    "ap_lo",
    "cholesterol",
    "gluc",
    "smoke",
    "alco",
    "active"
]

# ===================== REST API =====================
@app.route("/api/predict", methods=["POST"])
def api_predict():
    try:
        data = request.get_json()
        print("Incoming JSON:", data)

        features = np.array([[
            float(data["age"]),
            float(data["height"]),
            float(data["weight"]),
            int(data["gender"]),
            int(data["ap_hi"]),
            int(data["ap_lo"]),
            int(data["cholesterol"]),
            int(data["gluc"]),
            int(data["smoke"]),
            int(data["alco"]),
            int(data["active"])
        ]])

        print("Features =", features)

        df = pd.DataFrame(features, columns=FEATURE_NAMES)

        # BMI calculation
        height_m = float(data["height"]) / 100
        bmi = float(data["weight"]) / (height_m ** 2)

        prediction = pipeline.predict(df)[0]
        probability = pipeline.predict_proba(df)[0][1]
        probability_percent = round(probability * 100, 2)

        risk_result = "High Risk" if probability_percent > 50 else "Low Risk"

        return jsonify({
            "prediction": int(prediction),
            "risk_result": risk_result,
            "probability": probability_percent,
            "bmi": round(bmi, 2)
        }), 200

    except Exception as e:
        print("❌ ERROR OCCURRED:", e)
        return jsonify({
            "error": str(e)
        }), 500


if __name__ == "__main__":
    app.run(debug=True)
