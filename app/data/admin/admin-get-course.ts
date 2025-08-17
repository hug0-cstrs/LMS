import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";
import "server-only";
import { requireAdmin } from "./require-admin";

export async function adminGetCourse(courseId: string) {
  await requireAdmin();

  const data = await prisma.course.findUnique({
    where: {
      id: courseId,
    },
    select: {
      id: true,
      title: true,
      slug: true,
      description: true,
      duration: true,
      level: true,
      fileKey: true,
      status: true,
      smallDescription: true,
      category: true,
      price: true,
      chapter: {
        select: {
          id: true,
          title: true,
          position: true,
          lessons: {
            select: {
              id: true,
              title: true,
              position: true,
              description: true,
              thumbnailKey: true,
              videoKey: true,
            },
          },
        },
      },
    },
  });

  if (!data) {
    return notFound();
  }

  return data;
}

export type AdminCourseSingularType = Awaited<
  ReturnType<typeof adminGetCourse>
>;
