import { useQuery } from "@tanstack/react-query";

import { messageError } from "../../utils/messageError";
import { QUESTIONS_PATH } from "../../constants/paths";
import { api } from "../../lib/axios";
import { QuestionTypes } from "../../@types/QuestionTypes";

interface UseQuestionsProps {
  page: number;
  filter?: string;
}

interface FetchQuestionsProps {
  page: number;
  filter?: string;
}

export async function fetchQuestions({ page, filter }: FetchQuestionsProps) {
  try {
    const currentPage = page - 1;
    const params = {
      limit: currentPage,
      offset: currentPage,
      filter,
    };

    const { data, headers } = await api.get<QuestionTypes[]>(QUESTIONS_PATH, {
      params,
    });

    // total count mock to create pagination
    const totalCount = Number(headers["x-total-count"]) || 125;

    return { questions: data, totalCount };
  } catch (error) {
    messageError({
      error,
      messageError: "Service Unavailable. Please try again later!",
    });
  }
}

export const useQuestions = ({ page, filter }: UseQuestionsProps) => {
  return useQuery({
    queryKey: ["questions", filter, page],
    queryFn: () => fetchQuestions({ page, filter }),
    staleTime: 60000, // 1 minute
    refetchInterval: 600000, // 10 minutes
  });
};
