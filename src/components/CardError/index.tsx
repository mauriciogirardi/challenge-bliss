import { ContainerCardError, WrapperError } from "./styles";
import errorSvg from "../../assets/error.svg";

interface CardErrorProps {
  message: string;
}

export function CardError({ message }: CardErrorProps) {
  return (
    <ContainerCardError>
      <img src={errorSvg} />
      <WrapperError>
        <p>{message}</p>
      </WrapperError>
    </ContainerCardError>
  );
}
