export type Service = {
  id: number;
  name: string;
  subtitle: string;
  image: string;
};

export interface HomeSection {
  title: string;
  subtitle: string;
  content: string;
  images: string[];
}


export type Project = {
  id: number;
  name: string;
  subtitle: string;
  image: string;
};

export type Step = {
  title: string;
  content: string;
};

export type Question = {
  title: string;
  content: string;
};

export type Category = {
  id: number;
  title: string;
};

export type Client = {
  logo: string;
};

export interface Design {
  code: string;
  name: string;
  subtitle: string;
  image: string;
  category: Category;
}

export interface Slide {
  head_title: string;
  title: string;
  content: string;
  image: string;
}

export interface Information {
  logo?: string;
  phone?: string;
  whatsapp?: string;
  email?: string;
  address?: string;
  facebook?: string;
  instagram?: string;
  tiktok?: string;
  snapchat?: string;
  twitter?: string;
  small_about?: string;
}

export type HomeResponse = {
  home_section: HomeSection;
  services: Service[];
  projects: Project[];
  steps: Step[];
  questions: Question[];
  clients: Client[];
  informations: Information;
  categories: Category[];
  designs: Design[];
  slide: Slide;
};