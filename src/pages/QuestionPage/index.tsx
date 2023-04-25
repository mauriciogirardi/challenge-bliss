import { useParams } from "react-router-dom";
import { ButtonVote, ContainerQuestion, WrapperQuestion } from "./styles";
import { LayoutDefault } from "../../layout/LayoutDefault";
import { useQuestion } from "../../services/hooks/useQuestion";
import { Choice } from "../../components/Choice";
import { useEffect, useState } from "react";
import { CardError } from "../../components/CardError";
import { messageError } from "../../utils/messageError";
import { message } from "../../utils/message";
import { api } from "../../lib/axios";
import { QUESTIONS_PATH } from "../../constants/paths";
import { ChoiceData } from "../../@types/QuestionTypes";

export function QuestionPage() {
  const params = useParams<{ id: string }>();
  const questionId = String(params.id);
  const [checkedQuestion, setCheckQuestion] = useState("");
  const { data, isLoading, error } = useQuestion({ questionId });
  const [choices, setChoices] = useState<ChoiceData[]>();
  const [canVote, setCanVote] = useState(true);
  const contentUrl = `${
    import.meta.env.VITE_SHARE_URL
  }/questions/${questionId}`;

  useEffect(() => {
    setChoices(data?.question.choices);
  }, [data]);

  const handleSelectedQuestion = (choice: string) => {
    setCheckQuestion(choice);
  };

  const handleConfirmVote = async () => {
    try {
      const updateChoice = data?.question.choices.map((item) => ({
        ...item,
        votes: item.choice === checkedQuestion ? item.votes + 1 : item.votes,
      }));

      setChoices(updateChoice);

      const updateData = {
        ...data,
        choices,
      };

      await api.put(`${QUESTIONS_PATH}/${questionId}`, updateData);

      message({
        type: "success",
        description: "successfully shared content",
      });
      setCanVote(false);
    } catch (error) {
      messageError({ error, messageError: "Voting error occurred!" });
    }
  };

  if (error) {
    return (
      <LayoutDefault isLoading={isLoading} hiddenSearch>
        <CardError message="There was an error loading the question, if the error persists please contact us!" />
      </LayoutDefault>
    );
  }

  return (
    <LayoutDefault
      isLoading={isLoading}
      showShare
      hiddenSearch
      contentUrl={contentUrl}
    >
      <ContainerQuestion>
        <img src={data?.question.image_url} />
        <WrapperQuestion>
          <p>{data?.question.question}</p>
          <div>
            {choices?.map((choice) => (
              <Choice
                disabled={!canVote}
                checked={choice.choice === checkedQuestion}
                onCheckedChange={() => handleSelectedQuestion(choice.choice)}
                key={choice.choice}
                label={choice.choice}
                value={choice.votes}
              />
            ))}
          </div>

          {checkedQuestion && canVote && (
            <ButtonVote onClick={handleConfirmVote}>Vote</ButtonVote>
          )}
        </WrapperQuestion>
      </ContainerQuestion>
    </LayoutDefault>
  );
}
