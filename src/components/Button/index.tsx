import {
  ButtonHTMLAttributes,
  ForwardRefExoticComponent,
  ReactNode,
} from "react";
import { ComponentButton } from "./styles";
import { IconProps } from "@phosphor-icons/react";
import { Loading } from "../Loading";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  placement?: "solid" | "outline" | "icon";
  icon?: ForwardRefExoticComponent<IconProps>;
  sizeIcon?: number;
  isLoading?: boolean;
  disabled?: boolean;
}

export function Button({
  children,
  placement = "solid",
  sizeIcon = 24,
  icon: Icon,
  isLoading,
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <ComponentButton
      {...rest}
      placement={placement}
      disabled={isLoading || disabled}
    >
      {isLoading ? (
        <Loading durAnimation="2s" durRotate="2s" color="white" />
      ) : (
        <>
          {!!Icon && <Icon size={sizeIcon} weight="light" />}
          {children}
        </>
      )}
    </ComponentButton>
  );
}
