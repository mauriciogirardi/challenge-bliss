import { styled } from "../../styles";

export const ContainerWithoutInternet = styled("section", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  height: "100vh",

  img: {
    width: "$80",
  },

  h1: {
    width: "350px",
    fontWeight: 400,
    textAlign: "center",
  },
});
