export interface Doctor {
    id: number;
    name: string;
    image: string;
    speciality: string;
    departmentIcon: string;
    department: string;
    rating: number;
    feedbackCount: number;
    location: string;
    features: { imageUrl: string }[];
    services: string[];
    thumbsUp: number;
    costRange: string;
    tooltip: string;
  }
