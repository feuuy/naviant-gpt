"use client";

import Form from "next/form";

import { useResponseStore } from "@/hooks/useResponseStore";
import { generateResponse } from "@/server/generateResponse";
import Send from "@/icons/Send";
import Button from "../ui/Button";
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
    <div className="p-4 fixed bottom-0 w-full h-40 bg-gradient-to-t from-white via-white flex items-end">
      <Form
        action={handleFormSubmit}
        className="flex items-center gap-2 p-2 bg-gray-200 w-full rounded-full h-16"
      >
        <textarea
          disabled={isLoading}
          name="prompt"
          placeholder={isLoading ? "Answering..." : "Ask me anything..."}
          className="w-full rounded-full px-4 bg-gray-200 focus:outline-none placeholder:text-gray-400 resize-none"
        />
        <Button isLoading={isLoading}>
          <Send />
        </Button>
      </Form>
    </div>
  );
}
