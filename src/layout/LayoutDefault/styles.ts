import { styled } from "../../styles";

export const ContainerLayoutDefault = styled("div", {
  maxWidth: "$container",
  margin: "0 auto",
  padding: "0 $2",
});

export const ContainerLoading = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "calc(100vh - 10rem)",
});
