import { useQuery } from "@tanstack/react-query";

import { QUESTIONS_PATH } from "../../constants/paths";
import { QuestionTypes } from "../../@types/QuestionTypes";
import { messageError } from "../../utils/messageError";
import { api } from "../../lib/axios";

interface UseQuestionProps {
  questionId: string;
}

export async function fetchQuestion(questionId: string) {
  try {
    const { data } = await api.get<QuestionTypes>(
      `${QUESTIONS_PATH}/${questionId}`
    );

    return { question: data };
  } catch (error) {
    messageError({
      error,
      messageError: "Service Unavailable. Please try again later!",
    });
  }
}

export const useQuestion = ({ questionId }: UseQuestionProps) => {
  return useQuery({
    queryKey: ["question", questionId],
    queryFn: () => fetchQuestion(questionId),
    staleTime: 60000 * 5, // 5 minute
    refetchInterval: 600000, // 10 minutes
  });
};
