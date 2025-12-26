import { useLocation, useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { GaugeComponent } from 'react-gauge-component';

import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  HeartIcon,
  ArrowLeftIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import Card from "../components/Card";
import Button from "../components/Button";
import { PredictionInput, PredictionResult } from "../services/api";
import { cholesterolLabel, glucoseLabel } from "../utils/labels";
import getRiskLevel from "../utils/risk";

interface LocationState {
  result: PredictionResult;
  formData: PredictionInput;
}

export default function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as LocationState;

  useEffect(() => {
    if (!state?.result) {
      navigate("/predict");
    }
  }, [state, navigate]);

  if (!state?.result) {
    return null;
  }

  const { result, formData } = state;
  const risk = getRiskLevel(result.probability);
  const isHighRisk = result.probability > 50;

  const bmiCategory = (bmi: number) => {
    if (bmi < 18.5) return "Underweight";
    if (bmi < 25) return "Normal";
    if (bmi < 30) return "Overweight";
    return "Obese";
  };

  const chartData = [
    {
      name: "Risk Probability",
      value: result.probability,
      color:
        result.probability <= 30
          ? "#22c55e"
          : result.probability <= 50
          ? "#eab308"
          : result.probability <= 70
          ? "#f97316"
          : "#ef4444",
    },
  ];

  const recommendations = isHighRisk
    ? [
        "Consult with a cardiologist for comprehensive evaluation",
        "Monitor blood pressure and cholesterol levels regularly",
        "Adopt a heart-healthy diet low in saturated fats and sodium",
        "Engage in at least 150 minutes of moderate exercise per week",
        "Quit smoking and limit alcohol consumption",
        "Manage stress through relaxation techniques",
        "Take prescribed medications as directed by your doctor",
        "Schedule regular health check-ups",
      ]
    : [
        "Continue maintaining a healthy lifestyle",
        "Regular physical activity and balanced diet",
        "Monitor blood pressure and cholesterol periodically",
        "Avoid smoking and excessive alcohol consumption",
        "Maintain a healthy weight",
        "Schedule annual health check-ups",
        "Stay informed about cardiovascular health",
      ];

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link to="/predict">
            <Button variant="outline" className="flex items-center">
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              New Prediction
            </Button>
          </Link>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Prediction Results
          </h1>
          <div className="flex items-center justify-center text-gray-600">
            <ClockIcon className="h-5 w-5 mr-2" />
            <span>{new Date().toLocaleString()}</span>
          </div>
        </div>

        
        <Card className={`mb-8 border-2 ${risk.bg}`}>
          <div className={`p-8 bg-gradient-to-r ${risk.bg}`}>
            <div className="flex flex-col items-center justify-center text-center">
              {risk.icon}

              <h2 className={`text-3xl font-bold mb-2 ${risk.color}`}>
                {risk.label}
              </h2>

              <p className="text-xl text-gray-700 mb-4">
                Cardiovascular Disease Probability:{" "}
                {result.probability.toFixed(2)}%
              </p>

              <div className="w-full max-w-md bg-gray-200 rounded-full h-4 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-1000"
                  style={{
                    width: `${result.probability}%`,
                    backgroundColor:
                      result.probability <= 30
                        ? "#22c55e" // green
                        : result.probability <= 50
                        ? "#eab308" // yellow
                        : result.probability <= 70
                        ? "#f97316" // orange
                        : "#ef4444", // red
                  }}
                />
              </div>
            </div>
          </div>
        </Card>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
         <Card>
  <div className="p-6 flex flex-col items-center">
    <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
      <HeartIcon className="h-6 w-6 text-red-500 mr-2" />
      Risk Indicator
    </h3>

    <div style={{ width: 300 }}>
      <GaugeComponent
        value={result.probability}
        minValue={0}
        maxValue={100}
        type="radial"
        arc={{
          subArcs: [
            { limit: 30, color: "#22c55e" }, // Low
            { limit: 50, color: "#eab308" }, // Borderline
            { limit: 70, color: "#f97316" }, // Moderate
            { limit: 100, color: "#ef4444" }, // High
          ],
          width: 0.3,
          padding: 0.02,
        }}
        pointer={{
          color: "#111827",
          length: 0.8,
          width: 15,
          elastic: true,
        }}
        labels={{
          valueLabel: {
            formatTextValue: (value: number) => `${value.toFixed(1)}%`,
            style: { fontSize: "24px", fill: "#111827" },
          },
          tickLabels: {
            type: "inner",
            ticks: [
              { value: 0 },
              { value: 30 },
              { value: 50 },
              { value: 70 },
              { value: 100 },
            ],
          },
        }}
      />
    </div>

    <p className={`mt-4 text-lg font-semibold ${risk.color}`}>
      {risk.label}
    </p>
  </div>
</Card>


          <Card>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Health Metrics
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-700 font-medium">BMI</span>
                  <span className="text-gray-900 font-semibold">
                    {result.bmi.toFixed(1)} ({bmiCategory(result.bmi)})
                  </span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-700 font-medium">
                    Blood Pressure
                  </span>
                  <span className="text-gray-900 font-semibold">
                    {formData.ap_hi}/{formData.ap_lo} mmHg
                  </span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-700 font-medium">Cholesterol</span>
                  <span className="text-gray-900 font-semibold">
                    {cholesterolLabel(formData.cholesterol)}
                  </span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-700 font-medium">Glucose</span>
                  <span className="text-gray-900 font-semibold">
                    {glucoseLabel(formData.gluc)}
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <Card>
          <div className="p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              {isHighRisk ? "Recommended Actions" : "Preventive Measures"}
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {recommendations.map((recommendation, index) => (
                <div
                  key={index}
                  className="flex items-start p-4 bg-gray-50 rounded-lg"
                >
                  <div
                    className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5 ${
                      isHighRisk
                        ? "bg-red-100 text-red-600"
                        : "bg-green-100 text-green-600"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <p className="text-gray-700">{recommendation}</p>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <div className="mt-8 p-6 bg-yellow-50 rounded-lg border border-yellow-200">
          <div className="flex items-start">
            <ExclamationTriangleIcon className="h-6 w-6 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-yellow-900 mb-2">
                Important Notice
              </h4>
              <p className="text-sm text-yellow-800">
                This prediction is generated by a machine learning model for
                educational and informational purposes only. It should not be
                used as a substitute for professional medical advice, diagnosis,
                or treatment. Always consult with qualified healthcare
                professionals for medical decisions and personalized care.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/predict">
            <Button size="lg" className="w-full sm:w-auto">
              Make Another Prediction
            </Button>
          </Link>
          {/* <Link to="/history">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              View History
            </Button>
          </Link> */}
        </div>
      </div>
    </div>
  );
}
