import { ContainerWithoutInternet } from "./styles";
import notFoundSvg from "../../assets/404.svg";
import { LayoutDefault } from "../../layout/LayoutDefault";

export function NotFoundPage() {
  return (
    <LayoutDefault hiddenSearch>
      <ContainerWithoutInternet>
        <img src={notFoundSvg} />
      </ContainerWithoutInternet>
    </LayoutDefault>
  );
}
