import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const {
    user: { email: userEmail },
  } = event.context;

  //console.log("userEmail", userEmail);
  return await prisma.user.findUnique({
    where: {
      userEmail,
    },
  });
});
