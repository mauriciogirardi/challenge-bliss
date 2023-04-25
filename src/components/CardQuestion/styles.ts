import { Link } from "react-router-dom";
import { MEDIA_QUERY_SM, styled } from "../../styles";

export const ContainerCardQuestion = styled(Link, {
  backgroundColor: "$gray800",
  borderRadius: "8px",
  padding: "$5",
  color: "$gray100",
  display: "flex",
  alignItems: "flex-start",
  gap: "$4",
  cursor: "pointer",
  textDecoration: "none",
  transition: "background-color 0.2s",

  img: {
    borderRadius: "8px",
    objectFit: "cover",
    width: "120px",
    height: "120px",
  },

  "&:hover": {
    backgroundColor: "$gray600",
  },
});

export const WrapperQuestion = styled("div", {
  p: {
    fontSize: "$lg",
    fontWeight: 500,
    marginBottom: "$3",
  },

  "> div": {
    display: "flex",
    alignItems: "center",
    gap: "$2",

    span: {
      fontSize: "$sm",
    },
  },

  [MEDIA_QUERY_SM]: {
    p: {
      fontSize: "$sm",
    },

    "> div": {
      span: {
        fontSize: "$xs",
      },
    },
  },
});
