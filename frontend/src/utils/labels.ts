export const cholesterolLabel = (value: string) =>
  ({
    "1": "Normal",
    "2": "Above Normal",
    "3": "Well Above Normal",
  }[value] || "Unknown");
export const glucoseLabel = (value: string) =>
  ({
    "1": "Normal",
    "2": "Above Normal",
    "3": "Well Above Normal",
  }[value] || "Unknown");