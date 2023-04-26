import { ShareNetwork, X } from "@phosphor-icons/react";
import * as Dialog from "@radix-ui/react-dialog";
import {
  Description,
  DialogContent,
  Fieldset,
  IconButton,
  Overlay,
  Title,
} from "./styles";
import { useRef, useState } from "react";
import { messageError } from "../../utils/messageError";
import { api } from "../../lib/axios";
import { SHARE_PATH } from "../../constants/paths";
import { message } from "../../utils/message";
import { useStoreState } from "easy-peasy";
import { StateSearchModel } from "../../stores/searchStore";
import { Button } from "../Button";

interface ShareContentProps {
  contentUrl?: string;
}

export function ShareContent({ contentUrl }: ShareContentProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const refInput = useRef<HTMLInputElement>(null);

  const searchValue = useStoreState(
    (state: StateSearchModel) => state.searchStore.searchValue
  );
  const [email, setEmail] = useState("");

  const handleShare = async () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    try {
      if (!regex.test(email)) {
        refInput.current?.focus();
        return message({
          type: "error",
          description:
            "Check if the email field is empty or if the email entered is invalid",
        });
      }
      setIsLoading(true);

      const params = {
        content_url: contentUrl
          ? contentUrl
          : `${import.meta.env.VITE_SHARE_URL}/questions?filter=${searchValue}`,
        destination_email: email,
      };

      await api.post(SHARE_PATH, "", { params });

      message({
        type: "success",
        description: "successfully shared content",
      });
      setEmail("");
      handleCloseModal();
    } catch (error) {
      messageError({ error, messageError: "An error occurred while sharing!" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseModal = () => setOpen(false);

  return (
    <Dialog.Root open={open}>
      <Dialog.Trigger asChild>
        <Button
          onClick={() => setOpen((prevState) => !prevState)}
          placement="icon"
          icon={ShareNetwork}
        />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Overlay />
        <DialogContent>
          <Title>Share the content</Title>
          <Description>
            If you found it interesting, share it with your colleagues!
          </Description>

          <Fieldset>
            <label className="Label" htmlFor="email">
              E-mail:
            </label>
            <input
              ref={refInput}
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Fieldset>

          <div
            style={{
              display: "flex",
              marginTop: 25,
              justifyContent: "flex-end",
            }}
          >
            <Button onClick={handleShare} isLoading={isLoading}>
              Share
            </Button>
          </div>

          <Dialog.Close asChild>
            <IconButton aria-label="Close" onClick={handleCloseModal}>
              <X size={18} />
            </IconButton>
          </Dialog.Close>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
