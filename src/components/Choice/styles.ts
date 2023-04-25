import { styled } from "../../styles";
import * as Checkbox from "@radix-ui/react-checkbox";

export const ContainerChoice = styled("div", {
  display: "flex",
  alignItems: "center",
});

export const CheckboxRoot = styled(Checkbox.Root, {
  backgroundColor: "$gray500",
  width: "$5",
  height: "$5",
  borderRadius: "4px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  border: 0,

  "&:not(:disabled):hover": {
    backgroundColor: "$gray400",
  },

  "&:focus": {
    boxShadow: "0 0 0 2px $gray600",
  },

  "&:disabled": {
    opacity: 0.4,
    cursor: "not-allowed",
  },
});

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  color: "$white",
});

export const CheckboxLabel = styled("label", {
  color: "$gray200",
  paddingLeft: "$3",
  fontSize: "$md",
  lineHeight: 1,
});
