import { Link } from 'react-router-dom';
import {
  HeartIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  ClipboardDocumentCheckIcon,
  BeakerIcon,
  CpuChipIcon,
} from '@heroicons/react/24/outline';
import Button from '../components/Button';
import Card from '../components/Card';

export default function Landing() {
  const features = [
    {
      icon: CpuChipIcon,
      title: 'Machine Learning Powered',
      description: 'Advanced ML algorithms trained on extensive medical datasets for accurate predictions',
    },
    {
      icon: ChartBarIcon,
      title: 'Real-time Analysis',
      description: 'Get instant risk assessment based on your health parameters',
    },
    {
      icon: ShieldCheckIcon,
      title: 'Secure & Private',
      description: 'Your health data is processed securely with complete privacy',
    },
  ];

  const technologies = [
    { name: 'React.js', color: 'bg-blue-100 text-blue-800' },
    { name: 'Tailwind CSS', color: 'bg-cyan-100 text-cyan-800' },
    { name: 'Flask API', color: 'bg-green-100 text-green-800' },
    { name: 'Machine Learning', color: 'bg-purple-100 text-purple-800' },
    { name: 'Supabase', color: 'bg-emerald-100 text-emerald-800' },
  ];

  const howItWorks = [
    {
      step: '01',
      title: 'Enter Health Details',
      description: 'Fill in your health parameters including age, blood pressure, cholesterol levels, and lifestyle factors',
      icon: ClipboardDocumentCheckIcon,
    },
    {
      step: '02',
      title: 'ML Model Analysis',
      description: 'Our trained machine learning model analyzes your data using advanced algorithms',
      icon: BeakerIcon,
    },
    {
      step: '03',
      title: 'Get Risk Prediction',
      description: 'Receive detailed cardiovascular disease risk assessment with probability scores',
      icon: ChartBarIcon,
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <HeartIcon className="h-20 w-20 text-red-400 animate-pulse" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Cardiovascular Disease
              <br />
              <span className="text-blue-200">Prediction System</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              AI-powered early detection system for cardiovascular disease risk assessment using machine learning algorithms
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/predict">
                <Button size="lg" className="w-full sm:w-auto">
                  Predict Now
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white/10 border-white text-white hover:bg-white/20">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple three-step process to assess your cardiovascular health risk</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((item, index) => (
              <Card key={index} hover>
                <div className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 mx-auto">
                    <item.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-center">
                    <span className="text-5xl font-bold text-blue-200 mb-4 block">{item.step}</span>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Features</h2>
            <p className="text-xl text-gray-600">Advanced capabilities for accurate predictions</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center" hover>
                <div className="p-8">
                  <div className="flex justify-center mb-4">
                    <feature.icon className="h-12 w-12 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technologies Used</h2>
            <p className="text-xl text-gray-600 mb-8">Built with modern web technologies and machine learning</p>
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className={`px-6 py-3 rounded-full text-sm font-semibold ${tech.color}`}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-red-50 border-t-4 border-red-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-start space-x-4">
              <ShieldCheckIcon className="h-8 w-8 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Medical Disclaimer</h3>
                <p className="text-gray-700 leading-relaxed">
                  This cardiovascular disease prediction system is an educational machine learning project
                  and should not be considered as a replacement for professional medical advice, diagnosis,
                  or treatment. Always consult with qualified healthcare professionals for medical decisions.
                  The predictions provided are based on statistical models and may not reflect individual
                  health conditions accurately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
