import { QuestionTypes } from "../../@types/QuestionTypes";
import { ContainerCardQuestion, WrapperQuestion } from "./styles";

interface CardQuestionProps {
  question: QuestionTypes;
}

export function CardQuestion({ question }: CardQuestionProps) {
  return (
    <ContainerCardQuestion to={`/questions/${question.id}`}>
      <img src={question.thumb_url} />
      <WrapperQuestion>
        <p>{question.question} </p>
        {question.choices.map((choice) => (
          <div key={choice.choice}>
            <span>{choice.choice}:</span>
            <span>{choice.votes}</span>
          </div>
        ))}
      </WrapperQuestion>
    </ContainerCardQuestion>
  );
}
