import { styled } from "../../styles";

export const ContainerPagination = styled("div", {
  marginBottom: "$8",
});

export const WrapperPagination = styled("div", {
  display: "flex",
  alignItems: "flex-end",
  gap: "$2",
  justifyContent: "flex-end",

  span: {
    color: "$gray400",
    fontSize: "$lg",
    display: "block",
  },
});

export const ButtonPagination = styled("button", {
  padding: "$1 $2",
  borderRadius: "4px",
  border: 0,
  backgroundColor: "$gray600",
  color: "$white",
  fontWeight: "bold",
  cursor: "pointer",

  "&:hover": {
    backgroundColor: "$gray500",
  },

  "&:disabled": {
    cursor: "not-allowed",
    backgroundColor: "$green500",
    opacity: "0.5",
  },
});
