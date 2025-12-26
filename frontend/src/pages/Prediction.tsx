import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline';
import Input from '../components/Input';
import Select from '../components/Select';
import Button from '../components/Button';
import Card from '../components/Card';
import { predictCardiovascularDisease, PredictionInput } from '../services/api';
// import { savePrediction } from '../services/predictionService';

export default function Prediction() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<PredictionInput>({
    age: 0,
    height: 0,
    weight: 0,
    gender: 0,
    ap_hi: 0,
    ap_lo: 0,
    cholesterol: '',
    gluc: '',
    smoke: false,
    alco: false,
    active: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.age || formData.age < 1 || formData.age > 120) {
      newErrors.age = 'Age must be between 1 and 120';
    }

    if (!formData.height || formData.height < 50 || formData.height > 250) {
      newErrors.height = 'Height must be between 50 and 250 cm';
    }

    if (!formData.weight || formData.weight < 20 || formData.weight > 300) {
      newErrors.weight = 'Weight must be between 20 and 300 kg';
    }

    if (!formData.gender) {
      newErrors.gender = 'Please select gender';
    }

    if (!formData.ap_hi || formData.ap_hi < 80 || formData.ap_hi > 200) {
      newErrors.ap_hi = 'Systolic BP must be between 80 and 200';
    }

    if (!formData.ap_lo || formData.ap_lo < 40 || formData.ap_lo > 130) {
      newErrors.ap_lo = 'Diastolic BP must be between 40 and 130';
    }

    if (!formData.cholesterol) {
      newErrors.cholesterol = 'Please select cholesterol level';
    }

    if (!formData.gluc) {
      newErrors.glucose = 'Please select glucose level';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Please fix the errors in the form');
      return;
    }

    setIsLoading(true);

    try {
      const result = await predictCardiovascularDisease(formData);

      // await savePrediction({
      //   ...formData,
      //   bmi: result.bmi,
      //   risk_result: result.risk_result,
      //   probability: result.probability,
      // });

      toast.success('Prediction completed successfully!');

      navigate('/result', {
        state: {
          result,
          formData,
        },
      });
    } catch (error) {
      console.error('Prediction error:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to get prediction. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: keyof PredictionInput, value: string | boolean | number) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const genderOptions = [
    { value: '1', label: 'Male' },
    { value: '2', label: 'Female' },
  ];

  const cholesterolOptions = [
    { value: '1', label: 'Normal' },
    { value: '2', label: 'Above Normal' },
    { value: '3', label: 'Well Above Normal' },
  ];

  const glucoseOptions = [
    { value: '1', label: 'Normal' },
    { value: '2', label: 'Above Normal' },
    { value: '3', label: 'Well Above Normal' },
  ];

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <ClipboardDocumentCheckIcon className="h-16 w-16 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cardiovascular Disease Prediction
          </h1>
          <p className="text-xl text-gray-600">
            Fill in your health parameters to get a risk assessment
          </p>
        </div>

        <Card>
          <form onSubmit={handleSubmit} className="p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 pb-3 border-b-2 border-blue-500">
                Personal Information
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  label="Age"
                  type="number"
                  value={formData.age || ''}
                  onChange={(e) => handleInputChange('age', parseInt(e.target.value) || 0)}
                  error={errors.age}
                  required
                  placeholder="Enter your age"
                />
                <Select
                  label="Gender"
                  options={genderOptions}
                  value={formData.gender}
                  onChange={(e) => handleInputChange('gender', e.target.value)}
                  error={errors.gender}
                  required
                />
                <Input
                  label="Height (cm)"
                  type="number"
                  value={formData.height || ''}
                  onChange={(e) => handleInputChange('height', parseInt(e.target.value) || 0)}
                  error={errors.height}
                  required
                  placeholder="e.g., 170"
                />
                <Input
                  label="Weight (kg)"
                  type="number"
                  step="0.1"
                  value={formData.weight || ''}
                  onChange={(e) => handleInputChange('weight', parseFloat(e.target.value) || 0)}
                  error={errors.weight}
                  required
                  placeholder="e.g., 70"
                />
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 pb-3 border-b-2 border-green-500">
                Medical Parameters
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  label="Systolic Blood Pressure"
                  type="number"
                  value={formData.ap_hi || ''}
                  onChange={(e) => handleInputChange('ap_hi', parseInt(e.target.value) || 0)}
                  error={errors.ap_hi}
                  required
                  placeholder="e.g., 120"
                />
                <Input
                  label="Diastolic Blood Pressure"
                  type="number"
                  value={formData.ap_lo || ''}
                  onChange={(e) => handleInputChange('ap_lo', parseInt(e.target.value) || 0)}
                  error={errors.ap_lo}
                  required
                  placeholder="e.g., 80"
                />
                <Select
                  label="Cholesterol Level"
                  options={cholesterolOptions}
                  value={formData.cholesterol}
                  onChange={(e) => handleInputChange('cholesterol', e.target.value)}
                  error={errors.cholesterol}
                  required
                />
                <Select
                  label="Glucose Level"
                  options={glucoseOptions}
                  value={formData.gluc}
                  onChange={(e) => handleInputChange('gluc', e.target.value)}
                  error={errors.gluc}
                  required
                />
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 pb-3 border-b-2 border-purple-500">
                Lifestyle Factors
              </h2>
              <div className="space-y-4">
                <label className="flex items-center p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                  <input
                    type="checkbox"
                    checked={formData.smoke}
                    onChange={(e) => handleInputChange('smoke', e.target.checked)}
                    className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <span className="ml-3 text-gray-700 font-medium">Do you smoke?</span>
                </label>

                <label className="flex items-center p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                  <input
                    type="checkbox"
                    checked={formData.alco}
                    onChange={(e) => handleInputChange('alco', e.target.checked)}
                    className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <span className="ml-3 text-gray-700 font-medium">Do you consume alcohol?</span>
                </label>

                <label className="flex items-center p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                  <input
                    type="checkbox"
                    checked={formData.active}
                    onChange={(e) => handleInputChange('active', e.target.checked)}
                    className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <span className="ml-3 text-gray-700 font-medium">
                    Do you engage in regular physical activity?
                  </span>
                </label>
              </div>
            </div>

            <div className="flex justify-center">
              <Button
                type="submit"
                size="lg"
                isLoading={isLoading}
                className="w-full md:w-auto"
              >
                Get Prediction
              </Button>
            </div>
          </form>
        </Card>

        <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-800 text-center">
            All information provided is processed securely and used only for prediction purposes.
            Results are for informational purposes only and should not replace professional medical advice.
          </p>
        </div>
      </div>
    </div>
  );
}
