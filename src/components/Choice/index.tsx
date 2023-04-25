import { Check } from "@phosphor-icons/react";
import {
  CheckboxIndicator,
  CheckboxLabel,
  CheckboxRoot,
  ContainerChoice,
} from "./styles";
import { CheckboxProps } from "@radix-ui/react-checkbox";

interface ChoiceProps extends CheckboxProps {
  label: string;
  value: number;
}

export function Choice({ label, value, ...rest }: ChoiceProps) {
  return (
    <ContainerChoice>
      <CheckboxRoot {...rest}>
        <CheckboxIndicator>
          <Check weight="bold" size={17} />
        </CheckboxIndicator>
      </CheckboxRoot>
      <CheckboxLabel htmlFor="c1">
        {label}: {value}
      </CheckboxLabel>
    </ContainerChoice>
  );
}
