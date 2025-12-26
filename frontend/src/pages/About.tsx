import {
  HeartIcon,
  ChartBarIcon,
  UserGroupIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';
import Card from '../components/Card';

export default function About() {
  const statistics = [
    { label: 'Global Deaths Annually', value: '17.9M', icon: HeartIcon },
    { label: 'Of Total Deaths', value: '31%', icon: ChartBarIcon },
    { label: 'Preventable Cases', value: '80%', icon: UserGroupIcon },
  ];

  const datasetFeatures = [
    'Age (Years)',
    'Height (cm)',
    'Weight (kg)',
    'Gender (Male/Female)',
    'Systolic Blood Pressure',
    'Diastolic Blood Pressure',
    'Cholesterol Level',
    'Glucose Level',
    'Smoking Status',
    'Alcohol Consumption',
    'Physical Activity',
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">About the Project</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding cardiovascular disease and the importance of early prediction
          </p>
        </div>

        <section className="mb-16">
          <Card>
            <div className="p-8 md:p-12">
              <div className="flex items-center mb-6">
                <HeartIcon className="h-10 w-10 text-red-500 mr-4" />
                <h2 className="text-3xl font-bold text-gray-900">What is Cardiovascular Disease?</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  Cardiovascular disease (CVD) is a group of disorders affecting the heart and blood vessels,
                  including coronary heart disease, cerebrovascular disease, rheumatic heart disease, and other conditions.
                </p>
                <p className="mb-4">
                  It is the leading cause of death globally, claiming an estimated 17.9 million lives each year.
                  CVDs represent 31% of all global deaths, making it one of the most significant public health challenges
                  of our time.
                </p>
                <p>
                  Risk factors include unhealthy diet, physical inactivity, tobacco use, harmful use of alcohol,
                  high blood pressure, diabetes, and high cholesterol levels. Many of these risk factors can be
                  modified through lifestyle changes and medical intervention.
                </p>
              </div>
            </div>
          </Card>
        </section>

        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            {statistics.map((stat, index) => (
              <Card key={index} hover>
                <div className="p-8 text-center">
                  <stat.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <Card>
            <div className="p-8 md:p-12">
              <div className="flex items-center mb-6">
                <ChartBarIcon className="h-10 w-10 text-blue-600 mr-4" />
                <h2 className="text-3xl font-bold text-gray-900">Why Early Prediction Matters</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  Early detection and prediction of cardiovascular disease risk can save lives. Studies show that
                  up to 80% of premature heart disease and stroke cases are preventable through early intervention
                  and lifestyle modifications.
                </p>
                <p className="mb-4">
                  Machine learning models can analyze multiple health parameters simultaneously to identify patterns
                  and risk factors that might be overlooked in traditional assessments. This enables:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Earlier intervention and treatment planning</li>
                  <li>Better resource allocation in healthcare systems</li>
                  <li>Personalized preventive care strategies</li>
                  <li>Reduced healthcare costs through prevention</li>
                  <li>Improved patient outcomes and quality of life</li>
                </ul>
              </div>
            </div>
          </Card>
        </section>

        <section className="mb-16">
          <Card>
            <div className="p-8 md:p-12">
              <div className="flex items-center mb-6">
                <DocumentTextIcon className="h-10 w-10 text-green-600 mr-4" />
                <h2 className="text-3xl font-bold text-gray-900">Dataset Overview</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-6">
                  Our machine learning model is trained on comprehensive medical datasets containing patient
                  information and cardiovascular health indicators. The dataset includes the following features:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {datasetFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-200"
                    >
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                      <span className="font-medium text-gray-800">{feature}</span>
                    </div>
                  ))}
                </div>
                <p>
                  These features are carefully selected based on medical research and their proven correlation
                  with cardiovascular disease risk. The model uses these parameters to calculate the probability
                  of cardiovascular disease presence.
                </p>
              </div>
            </div>
          </Card>
        </section>

        <section className="mb-16">
          <Card>
            <div className="p-8 md:p-12">
              <div className="flex items-center mb-6">
                <UserGroupIcon className="h-10 w-10 text-purple-600 mr-4" />
                <h2 className="text-3xl font-bold text-gray-900">Problem Statement</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  Despite advances in medical technology, cardiovascular disease continues to be a leading cause
                  of mortality worldwide. Traditional risk assessment methods often rely on limited parameters
                  and may not capture the complex interactions between multiple health factors.
                </p>
                <p className="mb-4">
                  There is a critical need for:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Accessible and affordable screening tools</li>
                  <li>Comprehensive risk assessment considering multiple factors</li>
                  <li>Early warning systems for at-risk individuals</li>
                  <li>Data-driven approaches to preventive healthcare</li>
                </ul>
              </div>
            </div>
          </Card>
        </section>

        <section>
          <Card className="bg-gradient-to-r from-blue-600 to-blue-800">
            <div className="p-8 md:p-12 text-white">
              <h2 className="text-3xl font-bold mb-4">Project Objective</h2>
              <p className="text-xl text-blue-100 mb-6">
                To develop an intelligent, machine learning-based cardiovascular disease prediction system
                that can accurately assess disease risk using patient health parameters, enabling early
                intervention and improving healthcare outcomes.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-2">Accuracy</h3>
                  <p className="text-blue-100">Provide reliable predictions using validated ML algorithms</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-2">Accessibility</h3>
                  <p className="text-blue-100">Make risk assessment available to everyone</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-2">Prevention</h3>
                  <p className="text-blue-100">Enable early intervention through timely detection</p>
                </div>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
