import { HeartIcon } from '@heroicons/react/24/solid';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-2">
            <HeartIcon className="h-6 w-6 text-red-500" />
            <span className="text-lg font-semibold">CardioPredict</span>
          </div>

          <p className="text-sm text-gray-400 text-center max-w-2xl">
            A machine learning-based cardiovascular disease prediction system.
            This is an educational project and should not be used as a substitute for professional medical advice.
          </p>

          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} CardioPredict. Final Year Engineering Project.
          </div>
        </div>
      </div>
    </footer>
  );
}
