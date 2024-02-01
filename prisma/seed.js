import { PrismaClient } from "@prisma/client";

const medicalSpecialties = [
  {
    name: "Anesthesiology",
    description: "Focuses on providing anesthesia and pain management during surgical procedures.",
  },
  {
    name: "Cardiology",
    description: "Deals with the study and treatment of disorders of the heart and blood vessels.",
  },
  {
    name: "Dermatology",
    description: "Specializes in the diagnosis and treatment of skin, hair, and nail conditions.",
  },
  {
    name: "Emergency Medicine",
    description: "Involves the management of acute and life-threatening medical conditions in the emergency department.",
  },
  {
    name: "Endocrinology",
    description: "Focuses on disorders of the endocrine system, including hormones and glands.",
  },
  {
    name: "Family Medicine",
    description: "Provides comprehensive healthcare for individuals and families, covering a wide range of medical issues.",
  },
  {
    name: "Gastroenterology",
    description: "Deals with the digestive system and its disorders, including the stomach, liver, and intestines.",
  },
  {
    name: "General Surgery",
    description: "Involves surgical procedures for a variety of medical conditions.",
  },
  {
    name: "Hematology",
    description: "Specializes in the study and treatment of blood disorders.",
  },
  {
    name: "Infectious Disease",
    description: "Focuses on the diagnosis and treatment of infections caused by bacteria, viruses, fungi, or parasites.",
  },
  {
    name: "Internal Medicine",
    description: "Provides primary care for adults and often manages complex medical conditions.",
  },
  {
    name: "Nephrology",
    description: "Deals with the kidneys and their disorders.",
  },
  {
    name: "Neurology",
    description: "Specializes in disorders of the nervous system, including the brain, spinal cord, and nerves.",
  },
  {
    name: "Obstetrics and Gynecology (OB/GYN)",
    description: "Focuses on women's health, pregnancy, and childbirth.",
  },
  {
    name: "Ophthalmology",
    description: "Specializes in the diagnosis and treatment of eye disorders.",
  },
  {
    name: "Orthopedic Surgery",
    description: "Involves the diagnosis and treatment of disorders of the musculoskeletal system.",
  },
  {
    name: "Otolaryngology (ENT)",
    description: "Deals with disorders of the ear, nose, and throat.",
  },
  {
    name: "Pathology",
    description: "Involves the study of diseases and their causes through laboratory analysis of bodily fluids, tissues, and organs.",
  },
  {
    name: "Pediatrics",
    description: "Provides medical care to infants, children, and adolescents.",
  },
  {
    name: "Physical Medicine and Rehabilitation",
    description: "Focuses on improving and restoring functional abilities for patients with physical impairments.",
  },
  {
    name: "Psychiatry",
    description: "Specializes in the diagnosis and treatment of mental disorders.",
    medicalsubspeciality: [
      {
        name: "Child and Adolescent Psychiatry",
        description: "Specializes in the diagnosis and treatment of mental health issues in children and adolescents.",
      },
      {
        name: "Geriatric Psychiatry",
        description: "Focuses on the mental health needs of older adults, addressing issues such as dementia, depression, and anxiety in the elderly population.",
      },
      {
        name: "Forensic Psychiatry",
        description: "Involves the application of psychiatric principles to legal issues, often working with the legal system in areas such as criminal cases, civil cases, and court-ordered evaluations.",
      },
      {
        name: "Addiction Psychiatry",
        description: "Specializes in the treatment of individuals struggling with substance abuse or addiction issues.",
      },
      {
        name: "Consultation-Liaison Psychiatry",
        description: "Provides psychiatric assessment and treatment in the general hospital setting, often working with patients who have both medical and psychiatric conditions.",
      },
      {
        name: "Psychosomatic Medicine",
        description: "Focuses on the interplay between mental and physical health, addressing the impact of psychological factors on physical well-being.",
      },
      {
        name: "Community Psychiatry",
        description: "Involves working within community settings to address mental health needs and promote mental health awareness.",
      },
      {
        name: "Emergency Psychiatry",
        description: "Specializes in providing psychiatric care in emergency and crisis situations, such as in emergency departments or crisis intervention settings.",
      },
      {
        name: "Sleep Medicine",
        description: "Addresses sleep-related disorders and disturbances, working with individuals who experience sleep-related issues affecting their mental health.",
      },
      {
        name: "Neuropsychiatry",
        description: "Involves the study and treatment of psychiatric disorders related to brain function and neurological conditions.",
      },
      {
        name: "Psychotherapy and Counseling",
        description: "While not a separate subspecialty, many psychiatrists may choose to focus on various therapeutic modalities, such as cognitive-behavioral therapy (CBT), psychoanalysis, or dialectical behavior therapy (DBT).",
      },
    ],
  },
  {
    name: "Pulmonology",
    description: "Deals with diseases of the respiratory system, including the lungs and airways.",
  },
  {
    name: "Radiology",
    description: "Involves the use of medical imaging technologies for diagnostic and therapeutic purposes.",
  },
  {
    name: "Rheumatology",
    description: "Focuses on disorders of the joints, muscles, and connective tissues.",
  },
  {
    name: "Urology",
    description: "Specializes in the diagnosis and treatment of disorders of the urinary tract and male reproductive system.",
  },
];

const prisma = new PrismaClient();
async function seed() {
  for (const specialty of medicalSpecialties) {
    const { medicalsubspeciality, ...medicalSpecialtyData } = specialty;

    // Create the main MedicalSpecialty
    const createdMedicalSpecialty = await prisma.medicalSpeciality.create({
      data: medicalSpecialtyData,
    });

    // If medicalsubspeciality exists, create PsychiatrySubspecialties
    if (medicalsubspeciality && medicalsubspeciality.length > 0) {
      for (const subspecialty of medicalsubspeciality) {
        await prisma.medicalSubSpeciality.create({
          data: {
            ...subspecialty,
            medicalSpecialityId: createdMedicalSpecialty.id,
          },
        });
      }
    }
  }
}
try {
  await seed();
  await prisma.$disconnect();
} catch (e) {
  console.log(e);
  await prisma.$disconnect();
  process.exit(1);
}
