"use client";

import React from "react";
import Form from "next/form";

import { generateResponse } from "@/server/generateResponse";
import Send from "@/icons/Send";

export default function Home() {
  const [response, setResponse] = React.useState<string>("");
  const [isLoading, setisLoading] = React.useState<boolean>(false);

  async function handleFormSubmit(formData: FormData) {
    setisLoading(true);
    const res = await generateResponse(formData);
    for await (const part of res) {
      setResponse((prev) => prev + part.message.content);
    }
    setisLoading(false);
  }

  return (
    <div>
      {response && (
        <div className="md:w-1/3 p-4">
          <p className="whitespace-pre-wrap">{response}</p>
        </div>
      )}
      <div className="fixed bottom-4 w-full px-4">
        <Form
          action={(formData) => {
            setResponse("");
            handleFormSubmit(formData);
          }}
          className="bg-[#3d3c3a] flex items-center gap-2 p-2 rounded-xl w-full md:w-1/3"
        >
          <textarea
            className="bg-transparent focus:outline-none resize-none w-full"
            name="prompt"
            placeholder="Ask me anything..."
          />
          <button
            disabled={isLoading}
            type="submit"
            className={`p-3 text-white rounded-full hover:bg-blue-600 transition-colors ${
              isLoading ? "bg-blue-900 cursor-not-allowed" : "bg-blue-500"
            }`}
          >
            <Send />
          </button>
        </Form>
      </div>
    </div>
  );
}
