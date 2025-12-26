/*
  # Cardiovascular Disease Predictions Table

  ## Overview
  This migration creates the infrastructure for storing cardiovascular disease prediction history.

  ## New Tables
  
  ### `predictions`
  Stores all prediction results from the ML model.
  
  **Columns:**
  - `id` (uuid, primary key) - Unique identifier for each prediction
  - `created_at` (timestamptz) - Timestamp when prediction was made
  - `age` (int) - Patient age in years
  - `height` (int) - Patient height in cm
  - `weight` (numeric) - Patient weight in kg
  - `gender` (text) - Patient gender (Male/Female)
  - `systolic_bp` (int) - Systolic blood pressure
  - `diastolic_bp` (int) - Diastolic blood pressure
  - `cholesterol` (text) - Cholesterol level (Normal/Above Normal/Well Above Normal)
  - `glucose` (text) - Glucose level (Normal/Above Normal/Well Above Normal)
  - `smoking` (boolean) - Smoking status
  - `alcohol` (boolean) - Alcohol consumption status
  - `physical_activity` (boolean) - Physical activity status
  - `bmi` (numeric) - Calculated BMI
  - `risk_result` (text) - Prediction result (Low Risk/High Risk)
  - `probability` (numeric) - Risk probability percentage (0-100)
  
  ## Security
  - RLS enabled on `predictions` table
  - Public can insert predictions (for demo purposes)
  - Public can read predictions (for demo purposes)
  
  ## Notes
  - This is a demo/educational application, so RLS policies are permissive
  - In production, you would restrict based on user authentication
  - All numeric fields use appropriate types for healthcare data
*/

CREATE TABLE IF NOT EXISTS predictions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  age int NOT NULL,
  height int NOT NULL,
  weight numeric(5,2) NOT NULL,
  gender text NOT NULL,
  systolic_bp int NOT NULL,
  diastolic_bp int NOT NULL,
  cholesterol text NOT NULL,
  glucose text NOT NULL,
  smoking boolean DEFAULT false,
  alcohol boolean DEFAULT false,
  physical_activity boolean DEFAULT false,
  bmi numeric(5,2),
  risk_result text NOT NULL,
  probability numeric(5,2) NOT NULL
);

ALTER TABLE predictions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert predictions"
  ON predictions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can read predictions"
  ON predictions
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_predictions_created_at ON predictions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_predictions_risk_result ON predictions(risk_result);