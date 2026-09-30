export interface CourseItem {
  id: string;
  language: 'ingles';
  title: string;
  tagline: string;
  description: string;
  duration: string;
  level: string;
  classSize: string;
  highlights: string[];
  popular?: boolean;
  image: string;
}

export interface DifferentialItem {
  id: string;
  number: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  icon: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  companyOrCity: string;
  avatar: string;
  stars: number;
  quote: string;
  result: string;
  courseTaken: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  subtitle: string;
  badge?: string;
  popular?: boolean;
  priceInstallments: string;
  priceTotal: string;
  description: string;
  targetAudience: string;
  features: string[];
  notIncluded?: string[];
  ctaLabel: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  course: string;
  preferredTime: string;
  level: string;
  message: string;
}
