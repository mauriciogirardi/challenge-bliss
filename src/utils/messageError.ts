import { AppError } from "./AppError";
import { message } from "./message";

interface MessageErrorProps {
  error: unknown;
  messageError: string;
}

export function messageError({ error, messageError }: MessageErrorProps) {
  const isAppError = error instanceof AppError;
  const title = isAppError ? error.message : messageError;
  message({
    description: title,
    type: "error",
  });
}
