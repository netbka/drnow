import { PrismaClient } from "@prisma/client";
import omit from "lodash/omit";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const {
    user: { email: userEmail },
  } = event.context;

  //get what triggered the event in defineEventHandler

  // Now you can use the source information
  console.log(event);
  const body = await readBody(event);
  //body["userEmail"] = userEmail;
  //console.log(body);
  return await prisma.user.upsert({
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
