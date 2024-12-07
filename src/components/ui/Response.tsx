"use client";

import Markdown from "react-markdown";

import { useResponseStore } from "@/hooks/useResponseStore";

export default function Response() {
  const { response } = useResponseStore();

  if (!response) return null;

  return <Markdown className="whitespace-pre-wrap">{response}</Markdown>;
}
