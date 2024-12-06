"use server";

import ollama from "ollama";

export async function generateResponse(formData: FormData) {
  const res = await ollama.chat({
    model: "llama3.1:8b-instruct-q4_0",
    messages: [{ role: "user", content: formData.get("prompt") as string }],
    stream: true,
  });

  return res;
}
