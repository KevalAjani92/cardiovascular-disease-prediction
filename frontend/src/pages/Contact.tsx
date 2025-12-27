import {
  EnvelopeIcon,
  AcademicCapIcon,
  UserIcon,
  BuildingLibraryIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";
import Card from "../components/Card";

export default function Contact() {
  const contactInfo = [
    {
      icon: UserIcon,
      label: "Student Name",
      value: "Keval Ajani",
      description: "B.Tech CSE, ML Project",
    },
    {
      icon: BuildingLibraryIcon,
      label: "Institution",
      value: "Darshan University",
      description: "Department of Computer Science and Engineering",
    },
    // {
    //   icon: AcademicCapIcon,
    //   label: 'Project Guide',
    //   value: 'Prof. Guide Name',
    //   description: 'Assistant Professor',
    // },
    {
      icon: EnvelopeIcon,
      label: "Email",
      value: "kevalajani9206@gmail.com",
      description: "For inquiries and collaboration",
      link: "mailto:your.email@example.com",
    },
    {
      icon: CodeBracketIcon,
      label: "GitHub Repository",
      value: "github.com/KevalAjani92/cardiovascular-disease-prediction",
      description: "View source code",
      link: "https://github.com/KevalAjani92/cardiovascular-disease-prediction",
    },
  ];

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <EnvelopeIcon className="h-16 w-16 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Contact Information
          </h1>
          <p className="text-xl text-gray-600">
            Get in touch for questions, feedback, or collaboration opportunities
          </p>
        </div>

        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            {contactInfo.map((item, index) => (
              <Card key={index} hover>
                <div className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
                        <item.icon className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-gray-500 mb-1">
                        {item.label}
                      </h3>
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lg font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-lg font-semibold text-gray-900">
                          {item.value}
                        </p>
                      )}
                      <p className="text-sm text-gray-600 mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <Card className="bg-gradient-to-r from-blue-600 to-blue-800">
            <div className="p-8 md:p-12 text-white">
              <h2 className="text-3xl font-bold mb-4">About This Project</h2>
              <p className="text-xl text-blue-100 mb-6">
                This Cardiovascular Disease Prediction System is developed as
                part of the
                <span className="font-semibold"> Machine Learning </span>
                course in Semester 6 to demonstrate the practical application of
                supervised learning techniques in healthcare prediction.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-2">Project Type</h3>
                  <p className="text-blue-100">
                    Semester 6 – Machine Learning Subject Project 
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-2">Academic Year</h3>
                  <p className="text-blue-100">2024-2025</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-2">Domain</h3>
                  <p className="text-blue-100">Machine Learning & Healthcare</p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        <section className="mb-12">
          <Card>
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Technologies Used
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Frontend
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      React.js (TypeScript)
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      Tailwind CSS
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      React Router DOM
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      Recharts (Visualization)
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      Headless UI
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      HeroIcons
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Backend & ML
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      Flask API (Python)
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      Scikit-learn
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      Logistic Regression Model
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      Axios (API Client)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </section>

        <section>
          <Card>
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Project Features
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Interactive prediction interface with form validation",
                  "Real-time cardiovascular disease risk assessment",
                  "Comprehensive visualization of results with charts",
                  "Prediction history tracking with Supabase",
                  "Detailed model information and performance metrics",
                  "Responsive design for all devices",
                  "Professional UI/UX with Tailwind CSS",
                  "Educational content about cardiovascular health",
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                      {index + 1}
                    </div>
                    <p className="text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </section>

        <div className="mt-12 text-center">
          <Card className="bg-blue-50 border border-blue-200">
            <div className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Acknowledgments
              </h3>
              <p className="text-gray-700">
                Special thanks to the project guide, department faculty, and
                everyone who contributed to making this project successful. This
                system demonstrates the potential of AI in improving healthcare
                accessibility and early disease detection.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
