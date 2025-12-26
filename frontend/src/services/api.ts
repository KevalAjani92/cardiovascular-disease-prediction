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
