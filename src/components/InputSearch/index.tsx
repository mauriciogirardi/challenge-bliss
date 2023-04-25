import { InputHTMLAttributes, useEffect, useRef, useState } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";

import { ContainerInputSearch, Input } from "./styles";

interface InputSearchProps extends InputHTMLAttributes<HTMLInputElement> {
  onClickSearch?: () => void;
}

export function InputSearch({ ...rest }: InputSearchProps) {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const urlParams = window.location.search === "?filter=";
  useEffect(() => {
    urlParams && inputRef.current?.focus();
  }, [urlParams]);

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  return (
    <ContainerInputSearch focus={isFocused}>
      <MagnifyingGlass size={18} weight="bold" />
      <Input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        ref={inputRef}
        {...rest}
      />
    </ContainerInputSearch>
  );
}
