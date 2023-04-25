import { styled } from "@stitches/react";
import { MEDIA_QUERY } from "../../styles";

export const ContainerListPage = styled("section", {
  marginBottom: "$5",
});

export const GridListPage = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "$5",

  [MEDIA_QUERY]: {
    gridTemplateColumns: "repeat(1, 1fr)",
  },
});

export const Empty = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "$2",

  height: "calc(100vh - 6rem)",

  p: {
    color: "$gray400",
    fontSize: "$lg",
  },

  svg: {
    color: "orange",
  },
});
