import { styled } from "../../styles";

export const ContainerCardError = styled("div", {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  height: "calc(100vh - 8rem)",
  gap: "$3",

  img: {
    width: "$80",
  },
});

export const WrapperError = styled("div", {
  width: "$80",

  p: {
    textAlign: "center",
    color: "$gray400",
  },
});
