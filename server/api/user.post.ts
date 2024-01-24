import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const {
    user: { email: userEmail },
  } = event.context;

  const body = await readBody(event);
  return await prisma.user.upsert({
    where: {
      userEmail,
    },
    update: body,

    create: {
      userEmail,
      lname: body.lname,
      fname: body.fname,
    },
  });
});
