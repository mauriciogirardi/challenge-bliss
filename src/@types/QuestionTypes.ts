export type ChoiceData = {
  choice: string;
  votes: number;
};

export type QuestionTypes = {
  id: number;
  question: string;
  image_url: string;
  thumb_url: string;
  published_at: string;
  choices: ChoiceData[];
};
