"use server";

import prisma from "@/lib/prisma";

export async function createMessage(role?: string, content?: string) {
  return await prisma.message.create({
    data: { role, content },
  });
}
