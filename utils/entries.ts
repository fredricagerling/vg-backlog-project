import { Entry, Game } from "@prisma/client";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getEntries(year: number){
  return await prisma.entry.findMany({
    where: {
      yearId: year,
    },
    include: {
      game: true,
      Console: true,
    },
  });
}
