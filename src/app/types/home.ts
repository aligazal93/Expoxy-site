export type Service = {
  id: number;
  name: string;
  subtitle: string;
  image: string;
};

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

export type Client = {
  logo: string;
};

export type HomeResponse = {
  services: Service[];
  projects: Project[];
  steps: Step[];
  questions: Question[];
  clients: Client[];
};