import * as Dialog from "@radix-ui/react-dialog";
import { keyframes, styled } from "../../styles";

const overlayShow = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});

const contentShow = keyframes({
  from: {
    opacity: 0,
    transform: "translate(-50%, -48%) scale(0.96)",
  },
  to: {
    opacity: 1,
    transform: "translate(-50%, -50%) scale(1)",
  },
});

export const Overlay = styled(Dialog.Overlay, {
  backgroundColor: "rgba(0,0,0,0.5)",
  position: "fixed",
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
});

export const DialogContent = styled(Dialog.Content, {
  backgroundColor: "$gray700",
  borderRadius: "6px",
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  maxWidth: "450px",
  maxHeight: "85vh",
  padding: "25px",
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,

  "&:focus": {
    outline: "none",
  },
});

export const Title = styled(Dialog.Title, {
  color: "$gray100",
});

export const Description = styled(Dialog.Description, {
  color: "$gray200",
  fontSize: "$sm",
});

export const IconButton = styled("button", {
  all: "unset",
  lineHeight: 0,
  position: "absolute",
  top: "15px",
  right: "15px",
  cursor: "pointer",

  "&:hover": {
    svg: {
      color: "$gray200",
    },
  },
});

export const Fieldset = styled("fieldset", {
  marginTop: "15px",
  display: "flex",
  flexDirection: "column",
  border: "none",
  gap: "$1",

  input: {
    outline: 0,
    width: "$full",
    border: 0,
    backgroundColor: "$gray800",
    height: "38px",
    padding: "0 $2",
    color: "$gray100",
    borderRadius: "8px",

    "&:focus": {
      boxShadow: "0 0 0 1px #00B37E",
    },
  },
});
