export interface About {
  our_vision: string;
  our_message: string;
  title: string;
  content: string;
  pdf: string;
  image: string;
}


export interface WhyChooseEpoxy {
    title: string;
    content: string;
    icon: string;
}


export interface Steps {
    title: string;
    content: string;
}

export interface AboutResponse {
    about: About;
    why_choose_epoxy: WhyChooseEpoxy[];
    steps: Steps[];
}