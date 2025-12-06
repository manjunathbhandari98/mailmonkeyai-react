export interface PricingPlan {
  name: string;
  price: number;
  period: string;
  highlight: boolean;
  features: string[];
  buttonText: string;
  tag?: string; 
}