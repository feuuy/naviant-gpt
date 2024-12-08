"use server";

import ollama from "ollama";

export async function getLocalModels() {
  return await ollama.list();
}
