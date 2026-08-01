export interface FaqItem {
  title: string;
  content: string;
}

export interface FaqResponse {
  questions: FaqItem[];
}