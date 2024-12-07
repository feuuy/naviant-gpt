"use client";

import Form from "next/form";

import { useResponseStore } from "@/hooks/useResponseStore";
import { generateResponse } from "@/server/generateResponse";
import Send from "@/icons/Send";
import Button from "./Button";
import { createMessage } from "@/server/createMessage";

export default function TextArea() {
  const { isLoading, setResponse, setIsLoading, resetResponse } =
    useResponseStore();

  async function handleFormSubmit(formData: FormData) {
    resetResponse();
    setIsLoading(true);
    const res = await generateResponse(formData);
    let messageContent = "";
    for await (const part of res) {
      messageContent += part.message.content;
      if (part.done) {
        await createMessage("user", formData.get("prompt") as string);
        await createMessage(part.message.role, messageContent);
      }
      setResponse(useResponseStore.getState().response + part.message.content);
    }
    setIsLoading(false);
  }

  return (
    <Form action={handleFormSubmit}>
      <textarea
        disabled={isLoading}
        name="prompt"
        placeholder={isLoading ? "Answering..." : "Ask me anything..."}
      />
      <Button isLoading={isLoading}>
        <Send />
      </Button>
    </Form>
  );
}
