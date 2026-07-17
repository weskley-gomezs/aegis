/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Metric {
  id: string;
  value: string;
  label: string;
  description: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  category: string;
  iconName: string;
}

export interface Solution {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  bulletPoints: string[];
  gradient: string;
  iconName: string;
}

export interface ProblemComparison {
  id: string;
  problem: string;
  solution: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageSrc: string;
  features: string[];
  projectLink?: string;
}

export interface MethodStep {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  companyName: string;
  text: string;
  avatarSrc: string;
  rating: number;
}

export interface DiagnosisLead {
  name: string;
  email: string;
  whatsapp: string;
  companyName: string;
  role: string;
  companySize: string;
  mainPainPoints: string[];
  additionalInfo?: string;
}
