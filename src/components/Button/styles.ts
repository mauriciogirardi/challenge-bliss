import { styled } from "../../styles";

export const ComponentButton = styled("button", {
  all: "unset",
  width: "$full",
  height: "$10",
  borderRadius: "8px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "$white",
  gap: "$1",
  fontWeight: 500,
  transition: "all 0.2s",

  "&:disabled": {
    cursor: "not-allowed",
    opacity: "0.5",
  },

  variants: {
    placement: {
      solid: {
        backgroundColor: "$green500",

        "&:not(:disabled):hover": {
          backgroundColor: "$green300",
        },
      },

      outline: {
        background: "transparent",
        border: "1px solid $green500",
        color: "$green500",

        "&:not(:disabled):hover": {
          borderColor: "$green300",
          color: "$green300",
        },
      },

      icon: {
        background: "transparent",
        width: "min-content",
        height: "min-content",
        borderRadius: "0",

        "&:not(:disabled):hover": {
          color: "$gray200",
        },
      },
    },
  },
});
