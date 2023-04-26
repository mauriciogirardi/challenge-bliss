import { ChangeEvent } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";

import { Broom } from "@phosphor-icons/react";
import { ContainerHeader, Wrapper } from "./styles";
import { ActionsSearchModel, StateSearchModel } from "../../stores/searchStore";
import { InputSearch } from "../InputSearch";
import { queryClient } from "../../lib/queryClient";
import { Link } from "react-router-dom";
import { ShareContent } from "../ShareContent";
import { Button } from "../Button";

interface HeaderProps {
  hiddenSearch?: boolean;
  showShare?: boolean;
  contentUrl?: string;
}

export function Header({ hiddenSearch, showShare, contentUrl }: HeaderProps) {
  const setSearchValueStore = useStoreActions(
    (actions: ActionsSearchModel) => actions.searchStore.setSearchValue
  );
  const searchValue = useStoreState(
    (state: StateSearchModel) => state.searchStore.searchValue
  );

  const invalidateQueries = () =>
    queryClient.invalidateQueries({
      queryKey: ["questions"],
    });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValueStore(value);
    if (!value) invalidateQueries();
  };

  const handleClearText = () => {
    setSearchValueStore("");
    invalidateQueries();
  };

  return (
    <ContainerHeader>
      <h3>Bliss</h3>
      <Wrapper>
        {hiddenSearch && searchValue && (
          <Button onClick={handleClearText} placement="icon" icon={Broom} />
        )}
        {hiddenSearch && (
          <InputSearch
            placeholder="Search question"
            value={searchValue}
            onChange={handleChange}
          />
        )}

        {!hiddenSearch && <Link to="/questions">back to list</Link>}
        {(searchValue || showShare) && <ShareContent contentUrl={contentUrl} />}
      </Wrapper>
    </ContainerHeader>
  );
}
