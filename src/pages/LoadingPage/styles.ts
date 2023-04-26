import { styled } from "../../styles";

export const ContainerLoadingPage = styled("div", {
  height: "100vh",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",

  img: {
    width: "400px",
  },

  "@bp1": {
    img: {
      width: "$full",
    },
  },
});

export const WidgetRepeatAction = styled("div", {
  backgroundColor: "$gray700",
  padding: "$5",
  borderRadius: "8px",
  width: "$80",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  gap: "$5",

  h3: {
    fontWeight: 400,
    fontSize: "$md",
    textAlign: "center",
  },
});
