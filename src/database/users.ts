"use server";

import { prisma } from "@/database/database";

export async function users() {
  return prisma.user.findMany();
}

export async function createUser({ name }: { name: string }) {
  console.log(name);
  return prisma.user.create({
    data: {
      name,
    },
  });
}
