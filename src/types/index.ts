export interface PricingPlan {
  name: string;
  price: number;
  period: string;
  highlight: boolean;
  features: string[];
  buttonText: string;
  tag?: string; 
}

export interface User{
  name:string;
  email:string;
  id:string;
}

export type ToastType = "success" | "error" | "warning" | "info";

export interface ToastMessage {
  id: number;
  type: ToastType;
  message: string;
}

export type ToastContextType = {
  show: (type: ToastType, message: string) => void;
};


export type EmailType = {
  id: string;
  subject: string;
  type: string;
  tone: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  status?: string;
  wordCount?: number;
  charCount?: number;
  version?: number;
  tags?: string[];
  actions?: string[];
};


