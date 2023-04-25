import { styled } from "@stitches/react";
import { MEDIA_QUERY_SM } from "../../styles";

export const ContainerHeader = styled("header", {
  maxWidth: "$container",
  margin: "0 auto",
  padding: "$6 0",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  h3: {
    backgroundImage:
      "linear-gradient(to bottom, $green500, $green300, $gray900)",
    backgroundClip: "text",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    color: "black",
    fontSize: "$4xl",
  },

  [MEDIA_QUERY_SM]: {
    gap: "$10",
  },
});

export const Wrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$5",

  a: {
    color: "$gray100",
    textDecoration: "none",
    fontWeight: 500,
    border: "1px solid $gray100",
    padding: "$1 $2",
    borderRadius: "8px",
    transition: "all 0.2s",

    "&:hover": {
      borderColor: "$green300",
      color: "$green300",
    },
  },
});

export const ButtonClear = styled("button", {
  all: "unset",
  cursor: "pointer",
  lineHeight: 0,

  svg: {
    color: "$gray200",
  },

  "&:hover svg": {
    color: "$white",
  },
});
