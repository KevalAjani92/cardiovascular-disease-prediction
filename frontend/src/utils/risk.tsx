import { CheckCircleIcon, ExclamationTriangleIcon } from "@heroicons/react/24/outline";

type RiskLevel = {
  label: string;
  color: string;
  bg: string;
  icon: JSX.Element;
};

const getRiskLevel = (probability: number): RiskLevel => {
  if (probability <= 30) {
    return {
      label: "Low Risk",
      color: "text-green-700",
      bg: "bg-green-100",
      icon: <CheckCircleIcon className="h-20 w-20 text-green-600 mb-4" />,
    };
  }

  if (probability <= 50) {
    return {
      label: "Borderline",
      color: "text-yellow-700",
      bg: "bg-yellow-100",
      icon: <ExclamationTriangleIcon className="h-20 w-20 text-yellow-600 mb-4" />,
    };
  }

  if (probability <= 70) {
    return {
      label: "Moderate Risk",
      color: "text-orange-700",
      bg: "bg-orange-100",
      icon: <ExclamationTriangleIcon className="h-20 w-20 text-orange-600 mb-4" />,
    };
  }

  return {
    label: "High Risk",
    color: "text-red-700",
    bg: "bg-red-100",
    icon: <ExclamationTriangleIcon className="h-20 w-20 text-red-600 mb-4" />,
  };
};
export default getRiskLevel;