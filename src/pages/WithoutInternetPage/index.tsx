import { ContainerWithoutInternet } from "./styles";
import withoutSvg from "../../assets/without-internet.svg";

export function WithoutInternetPage() {
  return (
    <ContainerWithoutInternet>
      <img src={withoutSvg} />
      <h1>You are without internet, check your connection!</h1>
    </ContainerWithoutInternet>
  );
}
