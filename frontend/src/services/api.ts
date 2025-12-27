import axios from 'axios';

const API_BASE_URL = 'https://cardiovascular-disease-prediction-jkcw.onrender.com';

export interface PredictionInput {
  age: number;
  height: number;
  weight: number;
  gender: number;
  ap_hi: number;
  ap_lo: number;
  cholesterol: string;
  gluc: string;
  smoke: boolean;
  alco: boolean;
  active: boolean;
}

export interface PredictionResult {
  prediction: number;
  risk_result: string;
  probability: number;
  bmi: number;
}

export interface ConfusionMatrix {
  tn: number;
  fp: number;
  fn: number;
  tp: number;
}

export interface ModelMetricsResult {
  algorithm: string;
  accuracy: number;
  precision: number;
  recall: number;
  f1_score: number;
  roc_auc: number;
  confusion_matrix: ConfusionMatrix;
}

// Fetch model metrics from the backend API
export const fetchModelMetrics = async (): Promise<ModelMetricsResult> => {
  try {
    const response = await axios.get<ModelMetricsResult>(`${API_BASE_URL}/api/model-metrics`);
    return response.data;
  } catch (error) {
    console.error(error.response?.data || error.message);
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.error || 'Failed to fetch model metrics');
    }
    throw error;
  }
};

// Send prediction request to the backend API
export const predictCardiovascularDisease = async (
  data: PredictionInput
): Promise<PredictionResult> => {
  try {
    console.log(data);
    
    const response = await axios.post<PredictionResult>(`${API_BASE_URL}/api/predict`, data);
    console.log(response.data);    
    return response.data;
  } catch (error) {
    console.error(error.response?.data || error.message);
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.error || 'Failed to get prediction');
    }
    throw error;
  }
};
