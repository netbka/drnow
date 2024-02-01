import { PrismaClient } from "@prisma/client";
import omit from "lodash/omit";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const {
    user: { email: userEmail },
  } = event.context;

  const body = await readBody(event);

  return await prisma.profile.upsert({
    where: {
      userEmail,
    },
    update: omit(body, ["userEmail"]),

    create: {
      ...body,
      userEmail,
    },
  });
});
