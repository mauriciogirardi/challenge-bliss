import { useStoreActions, useStoreState } from "easy-peasy";
import { useEffect, useState } from "react";
import { Warning } from "@phosphor-icons/react";

import { ContainerListPage, Empty, GridListPage } from "./styles";
import { ActionsSearchModel } from "../../stores/searchStore";
import { StateSearchModel } from "../../stores/searchStore";
import { LayoutDefault } from "../../layout/LayoutDefault";
import { CardQuestion } from "../../components/CardQuestion";
import { useQuestions } from "../../services/hooks/useQuestions";
import { useDebounce } from "../../utils/hooks/useDebounce";
import { Pagination } from "../../components/Pagination";
import { CardError } from "../../components/CardError";
import { urlParams } from "../../utils/urlParams";

export function ListPage() {
  const [page, setPage] = useState(1);
  const searchValue = useStoreState(
    (state: StateSearchModel) => state.searchStore.searchValue
  );
  const setSearchValue = useStoreActions(
    (actions: ActionsSearchModel) => actions.searchStore.setSearchValue
  );

  const debounceValue = useDebounce(searchValue, 500);
  const filterParam = urlParams("filter");

  useEffect(() => {
    if (filterParam) setSearchValue(filterParam);
  }, [filterParam, setSearchValue]);

  const { data, error, isLoading } = useQuestions({
    page,
    filter: debounceValue,
  });

  const questions = data?.questions;
  const hasQuestions = questions && questions.length > 0;

  if (error) {
    return (
      <LayoutDefault isLoading={isLoading}>
        <CardError message="There was an error loading the questions, if the error persists please contact us!" />
      </LayoutDefault>
    );
  }

  return (
    <LayoutDefault isLoading={isLoading}>
      {hasQuestions ? (
        <>
          <ContainerListPage>
            <GridListPage>
              {questions.map((question) => (
                <CardQuestion key={question.id} question={question} />
              ))}
            </GridListPage>
          </ContainerListPage>
          <Pagination
            onPageChange={setPage}
            totalCountRegister={data?.totalCount ?? 0}
            currentPage={page}
          />
        </>
      ) : (
        <Empty>
          <Warning size={38} />
          <p>Could not find any questions.</p>
        </Empty>
      )}
    </LayoutDefault>
  );
}
