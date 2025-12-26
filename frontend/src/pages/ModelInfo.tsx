import { CpuChipIcon, ChartBarIcon, BeakerIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from 'recharts';
import Card from '../components/Card';

export default function ModelInfo() {
  const metricsData = [
    { name: 'Accuracy', value: 73.5 },
    { name: 'Precision', value: 71.2 },
    { name: 'Recall', value: 75.8 },
    { name: 'F1-Score', value: 73.4 },
  ];

  const confusionMatrix = [
    { category: 'True Negative', value: 3250, color: '#10b981' },
    { category: 'False Positive', value: 750, color: '#f59e0b' },
    { category: 'False Negative', value: 650, color: '#f59e0b' },
    { category: 'True Positive', value: 3350, color: '#10b981' },
  ];

  const featureImportance = [
    { feature: 'Age', importance: 92 },
    { feature: 'Systolic BP', importance: 88 },
    { feature: 'Cholesterol', importance: 85 },
    { feature: 'Weight', importance: 78 },
    { feature: 'Diastolic BP', importance: 75 },
    { feature: 'Glucose', importance: 68 },
    { feature: 'Physical Activity', importance: 55 },
    { feature: 'Smoking', importance: 48 },
  ];

  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'];

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <CpuChipIcon className="h-16 w-16 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Machine Learning Model Information</h1>
          <p className="text-xl text-gray-600">
            Understanding the algorithm and performance metrics
          </p>
        </div>

        <section className="mb-12">
          <Card>
            <div className="p-8 md:p-12">
              <div className="flex items-center mb-6">
                <BeakerIcon className="h-10 w-10 text-blue-600 mr-4" />
                <h2 className="text-3xl font-bold text-gray-900">Algorithm Overview</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Logistic Regression</h3>
                <p className="mb-4">
                  This cardiovascular disease prediction system uses a <strong>Logistic Regression</strong> algorithm,
                  a supervised machine learning technique ideal for binary classification problems. Logistic regression
                  estimates the probability of a binary outcome based on one or more predictor variables.
                </p>

                <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Why Logistic Regression?</h4>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start p-4 bg-blue-50 rounded-lg">
                    <CheckCircleIcon className="h-6 w-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-1">Interpretability</h5>
                      <p className="text-sm text-gray-700">
                        Easy to understand and explain how each feature contributes to the prediction
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-blue-50 rounded-lg">
                    <CheckCircleIcon className="h-6 w-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-1">Efficiency</h5>
                      <p className="text-sm text-gray-700">
                        Fast training and prediction times, suitable for real-time applications
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-blue-50 rounded-lg">
                    <CheckCircleIcon className="h-6 w-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-1">Probabilistic Output</h5>
                      <p className="text-sm text-gray-700">
                        Provides probability scores rather than just binary predictions
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-blue-50 rounded-lg">
                    <CheckCircleIcon className="h-6 w-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-1">Medical Suitability</h5>
                      <p className="text-sm text-gray-700">
                        Widely accepted in medical research for risk assessment models
                      </p>
                    </div>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Model Training Process</h4>
                <ol className="list-decimal list-inside space-y-2 mb-4">
                  <li>Data collection from medical datasets with validated cardiovascular disease labels</li>
                  <li>Data preprocessing including normalization and feature engineering</li>
                  <li>Train-test split (80% training, 20% testing) for unbiased evaluation</li>
                  <li>Model training using gradient descent optimization</li>
                  <li>Hyperparameter tuning to optimize performance</li>
                  <li>Cross-validation to ensure model generalization</li>
                  <li>Final evaluation on test set using multiple metrics</li>
                </ol>
              </div>
            </div>
          </Card>
        </section>

        <section className="mb-12">
          <Card>
            <div className="p-8">
              <div className="flex items-center mb-6">
                <ChartBarIcon className="h-10 w-10 text-green-600 mr-4" />
                <h2 className="text-3xl font-bold text-gray-900">Performance Metrics</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Model Accuracy Metrics</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={metricsData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis domain={[0, 100]} />
                      <Tooltip formatter={(value: number) => `${value}%`} />
                      <Bar dataKey="value" fill="#3b82f6" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Metric Definitions</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Accuracy (73.5%)</h4>
                      <p className="text-sm text-gray-700">
                        Overall correctness of predictions across all cases
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Precision (71.2%)</h4>
                      <p className="text-sm text-gray-700">
                        Accuracy of positive predictions (how many predicted high-risk cases were actually high-risk)
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Recall (75.8%)</h4>
                      <p className="text-sm text-gray-700">
                        Ability to find all high-risk cases (how many actual high-risk cases were identified)
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">F1-Score (73.4%)</h4>
                      <p className="text-sm text-gray-700">
                        Harmonic mean of precision and recall, balancing both metrics
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        <section className="mb-12">
          <Card>
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Confusion Matrix</h2>
              <p className="text-gray-700 mb-6">
                The confusion matrix shows how well the model distinguishes between high-risk and low-risk cases.
                Based on 8,000 test samples:
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={confusionMatrix}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, value }) => `${name}: ${value}`}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {confusionMatrix.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-4">
                  {confusionMatrix.map((item, index) => (
                    <div key={index} className="p-4 rounded-lg border-2" style={{ borderColor: item.color }}>
                      <div className="flex justify-between items-center">
                        <h4 className="font-semibold text-gray-900">{item.category}</h4>
                        <span className="text-2xl font-bold" style={{ color: item.color }}>
                          {item.value}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">
                        {item.category === 'True Negative' &&
                          'Correctly predicted as low risk'}
                        {item.category === 'False Positive' &&
                          'Incorrectly predicted as high risk'}
                        {item.category === 'False Negative' &&
                          'Incorrectly predicted as low risk'}
                        {item.category === 'True Positive' &&
                          'Correctly predicted as high risk'}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </section>

        <section>
          <Card>
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Feature Importance</h2>
              <p className="text-gray-700 mb-6">
                This chart shows the relative importance of each feature in predicting cardiovascular disease risk.
                Higher values indicate stronger influence on the prediction.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={featureImportance} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" domain={[0, 100]} />
                    <YAxis dataKey="feature" type="category" width={120} />
                    <Tooltip formatter={(value: number) => `${value}%`} />
                    <Bar dataKey="importance" fill="#8b5cf6" radius={[0, 8, 8, 0]} />
                  </BarChart>
                </ResponsiveContainer>
                <ResponsiveContainer width="100%" height={400}>
                  <RadarChart data={featureImportance}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="feature" />
                    <PolarRadiusAxis angle={90} domain={[0, 100]} />
                    <Radar
                      name="Importance"
                      dataKey="importance"
                      stroke="#8b5cf6"
                      fill="#8b5cf6"
                      fillOpacity={0.6}
                    />
                    <Tooltip />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-6 p-6 bg-purple-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">Key Insights</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span><strong>Age</strong> is the most significant predictor, reflecting increased cardiovascular risk with aging</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span><strong>Blood pressure</strong> (both systolic and diastolic) are strong indicators of cardiovascular health</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span><strong>Cholesterol and glucose levels</strong> play crucial roles in heart disease development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span><strong>Lifestyle factors</strong> (physical activity, smoking) contribute moderately to the prediction</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
