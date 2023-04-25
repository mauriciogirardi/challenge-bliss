import { styled } from "../../styles";

export const ContainerWithoutInternet = styled("section", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  height: "calc(100vh - 8rem)",

  img: {
    width: "50%",
  },
});
