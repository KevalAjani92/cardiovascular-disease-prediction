import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ClockIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ArrowPathIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';
import Card from '../components/Card';
import Button from '../components/Button';
import { getPredictionHistory, PredictionRecord } from '../services/predictionService';
import toast from 'react-hot-toast';

export default function History() {
  const [predictions, setPredictions] = useState<PredictionRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    setIsLoading(true);
    try {
      const data = await getPredictionHistory();
      setPredictions(data);
    } catch (error) {
      console.error('Failed to fetch history:', error);
      toast.error('Failed to load prediction history');
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen py-12 bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <ArrowPathIcon className="h-12 w-12 text-blue-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading prediction history...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <ClockIcon className="h-16 w-16 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Prediction History</h1>
          <p className="text-xl text-gray-600">View all your previous cardiovascular risk assessments</p>
        </div>

        {predictions.length === 0 ? (
          <Card>
            <div className="p-12 text-center">
              <DocumentTextIcon className="h-20 w-20 text-gray-400 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">No Predictions Yet</h3>
              <p className="text-gray-600 mb-8">
                You haven't made any predictions yet. Start by creating your first assessment.
              </p>
              <Link to="/predict">
                <Button size="lg">Make Your First Prediction</Button>
              </Link>
            </div>
          </Card>
        ) : (
          <>
            <div className="mb-6 flex justify-between items-center">
              <p className="text-gray-600">
                Total predictions: <span className="font-semibold text-gray-900">{predictions.length}</span>
              </p>
              <Link to="/predict">
                <Button>New Prediction</Button>
              </Link>
            </div>

            <div className="hidden md:block mb-8">
              <Card>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date & Time
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Age / Gender
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          BP (mmHg)
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          BMI
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Risk Result
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Probability
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {predictions.map((prediction) => (
                        <tr key={prediction.id} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {formatDate(prediction.created_at)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {prediction.age} yrs / {prediction.gender}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {prediction.systolic_bp}/{prediction.diastolic_bp}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {prediction.bmi.toFixed(1)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span
                              className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                                prediction.risk_result === 'High Risk'
                                  ? 'bg-red-100 text-red-800'
                                  : 'bg-green-100 text-green-800'
                              }`}
                            >
                              {prediction.risk_result === 'High Risk' ? (
                                <ExclamationTriangleIcon className="h-4 w-4 mr-1" />
                              ) : (
                                <CheckCircleIcon className="h-4 w-4 mr-1" />
                              )}
                              {prediction.risk_result}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                            {prediction.probability.toFixed(2)}%
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>

            <div className="md:hidden space-y-4">
              {predictions.map((prediction) => (
                <Card key={prediction.id}>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                          prediction.risk_result === 'High Risk'
                            ? 'bg-red-100 text-red-800'
                            : 'bg-green-100 text-green-800'
                        }`}
                      >
                        {prediction.risk_result === 'High Risk' ? (
                          <ExclamationTriangleIcon className="h-4 w-4 mr-1" />
                        ) : (
                          <CheckCircleIcon className="h-4 w-4 mr-1" />
                        )}
                        {prediction.risk_result}
                      </span>
                      <span className="text-lg font-bold text-gray-900">
                        {prediction.probability.toFixed(2)}%
                      </span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Date:</span>
                        <span className="text-gray-900 font-medium">{formatDate(prediction.created_at)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Age / Gender:</span>
                        <span className="text-gray-900 font-medium">
                          {prediction.age} yrs / {prediction.gender}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Blood Pressure:</span>
                        <span className="text-gray-900 font-medium">
                          {prediction.systolic_bp}/{prediction.diastolic_bp} mmHg
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">BMI:</span>
                        <span className="text-gray-900 font-medium">{prediction.bmi.toFixed(1)}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
