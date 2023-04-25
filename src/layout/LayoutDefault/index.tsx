import { ReactNode } from "react";
import { ContainerLayoutDefault, ContainerLoading } from "./styles";
import { Loading } from "../../components/Loading";
import { Header } from "../../components/Header";

interface LayoutDefaultProps {
  children: ReactNode;
  isLoading?: boolean;
  hiddenSearch?: boolean;
  showShare?: boolean;
  contentUrl?: string;
}

export function LayoutDefault({
  children,
  isLoading,
  hiddenSearch = false,
  showShare,
  contentUrl,
}: LayoutDefaultProps) {
  return (
    <ContainerLayoutDefault>
      <Header
        hiddenSearch={!hiddenSearch}
        showShare={showShare}
        contentUrl={contentUrl}
      />
      <>
        {isLoading ? (
          <ContainerLoading>
            <Loading size={68} />
          </ContainerLoading>
        ) : (
          <>{children}</>
        )}
      </>
    </ContainerLayoutDefault>
  );
}
