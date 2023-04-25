import { ToastPosition, TypeOptions, toast } from "react-toastify";

interface MessageProps {
  description: string;
  type?: TypeOptions;
  position?: ToastPosition;
}

export function message({
  description,
  type = "success",
  position = "top-right",
}: MessageProps) {
  return toast(description, {
    position,
    type,
    autoClose: 2000,
    hideProgressBar: true,
    theme: "colored",
  });
}
