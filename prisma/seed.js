import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function seed() {}
try {
  await seed();
  await prisma.$disconnect();
} catch (e) {
  await prisma.$disconnect();
  process.exit(1);
}
