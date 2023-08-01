export interface QuestionAnswerProps {
  question: string;
  answer: string;
  maxHeight: string;
  index: number;
  isOpen: boolean;
  open: (val: number) => void;
}

export interface ElementProps {
  page: string;
}

export interface DashboardInputProps {
  title: string;
  value: string;
  id: string;
  del: boolean;
  rem: () => void;
}

export interface TestimonyProps {
  username: string;
  testimony: string;
  image: string;
}

export interface SlideProps {
  title: string;
  image: string;
}

export interface QuestionProps {
  next: () => void;
  notify: (notification: NotificationProps) => void;
}

export interface PageProps {
  notify: (notification: NotificationProps) => void;
}

export interface NotificationProps {
  title: string;
  info: string;
}

export interface PlanProps {
  type: string;
  cost: number;
  items: {
    contains: boolean;
    info: string;
  }[];
  index: number;
}
