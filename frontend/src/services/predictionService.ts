import { supabase } from '../lib/supabase';

export interface PredictionRecord {
  id: string;
  created_at: string;
  age: number;
  height: number;
  weight: number;
  gender: string;
  systolic_bp: number;
  diastolic_bp: number;
  cholesterol: string;
  glucose: string;
  smoking: boolean;
  alcohol: boolean;
  physical_activity: boolean;
  bmi: number;
  risk_result: string;
  probability: number;
}

export const savePrediction = async (
  data: Omit<PredictionRecord, 'id' | 'created_at'>
): Promise<PredictionRecord> => {
  const { data: prediction, error } = await supabase
    .from('predictions')
    .insert(data)
    .select()
    .single();

  if (error) throw error;
  return prediction;
};

export const getPredictionHistory = async (): Promise<PredictionRecord[]> => {
  const { data, error } = await supabase
    .from('predictions')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(50);

  if (error) throw error;
  return data || [];
};
