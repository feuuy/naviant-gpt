"use server";

import ollama from "ollama";
import prisma from "@/lib/prisma";

export async function generateResponse(formData: FormData) {
  const prompt = formData.get("prompt") as string;

  const messages = await prisma.message.findMany({ orderBy: { id: "asc" } });
  const formattedMessages = messages.map(({ role, content }) => ({
    role: role as "user" | "assistant",
    content: content as string,
  }));

  const res = await ollama.chat({
    model: "llama3.1:8b-instruct-q4_0",
    messages: [...formattedMessages, { role: "user", content: prompt }],
    stream: true,
  });

  return res;
}
