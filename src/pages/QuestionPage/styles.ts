import { MEDIA_QUERY, styled } from "../../styles";

export const ContainerQuestion = styled("section", {
  display: "flex",
  alignItems: "flex-start",
  gap: "$10",

  img: {
    borderRadius: "8px",
    objectFit: "cover",
  },

  [MEDIA_QUERY]: {
    flexDirection: "column",
    img: {
      width: "100%",
    },
  },
});

export const WrapperQuestion = styled("main", {
  marginTop: "$4",

  "> div": {
    display: "flex",
    flexDirection: "column",
    gap: "$4",
  },

  p: {
    fontSize: "$lg",
    marginBottom: "$4",
  },

  [MEDIA_QUERY]: {
    padding: "0 $5",
    marginBottom: "$10",
  },

  "> button": {
    marginTop: "$10",
  },
});
