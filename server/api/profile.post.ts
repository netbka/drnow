import { PrismaClient } from "@prisma/client";
import omit from "lodash/omit";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  try {
    const {
      user: { id: user_id },
    } = event.context;

    let body = await readBody(event);

    const newSubspecialties = body.subSpecAdd.map(({ id }) => id);
    const removedSubspecialties = body.profilesMedicalSubSpecialities.map(({ id }) => id);
    //console.log(removedSubspecialties);
    body = omit(body, ["user_id", "subSpecAdd", "speciality", "profilesMedicalSubSpecialities", "id"]);
    //console.log(body);
    // body.medicalSubSpecialities = {
    //   connect: newSubspecialties,
    //   disconnect: removedSubspecialties,
    // };
    //console.log(newSubspecialties);
    //let subSpecAdd =
    //body = omit(body, ["speciality"]);
    //   medicalSubSpecialities: {
    //   connect: newSubspecialties.map((id) => ({ id })),
    //   disconnect: removedSubspecialties.map((id) => ({ id })),
    // },

    // const result = await prisma.profile.upsert({
    //   where: {
    //     user_id: user_id,
    //   },
    //   update: omit(body, ["user_id"]),

    //   create: {
    //     ...body,
    //     user_id,
    //   },
    // });
    const result = await prisma.profile.update({
      where: {
        user_id: user_id,
      },
      data: {
        ...body,
        profilesMedicalSubSpecialities: {
          connect: newSubspecialties.map((id) => ({ id })),
          disconnect: removedSubspecialties.map((id) => ({ id })),
        },
      },
    });
    return result;
  } catch (error) {
    console.log("error on submit", error);
  } finally {
    await prisma.$disconnect();
  }
});
