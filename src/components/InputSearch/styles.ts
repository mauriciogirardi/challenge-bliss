import { MEDIA_QUERY_SM, styled } from "../../styles";

export const ContainerInputSearch = styled("div", {
  display: "flex",
  alignItems: "center",
  backgroundColor: "$white",
  width: "$80",
  padding: "$2 $4",
  borderRadius: "15px",

  svg: {
    color: "$gray400",
  },

  variants: {
    focus: {
      true: {
        boxShadow: "0 0 0 2px #00B37E",
      },
      false: {},
    },
    error: {
      true: {
        boxShadow: "0 0 0 2px #e05959",
      },
      false: {},
    },
  },

  [MEDIA_QUERY_SM]: {
    width: "$full",
  },
});

export const Input = styled("input", {
  backgroundColor: "transparent",
  border: 0,
  width: "$full",
  outline: "transparent",
  paddingLeft: "$2",
  color: "$gray700",

  "&::placeholder": {
    color: "$gray200",
  },
});
