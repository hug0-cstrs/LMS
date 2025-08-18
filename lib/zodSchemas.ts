import { description } from "@/components/sidebar/chart-area-interactive";
import { z } from "zod";

export const courseLevels = ["Beginner", "Intermediate", "Advanced"] as const;

export const courseStatus = ["Draft", "Published", "Archived"] as const;

export const courseCategories = [
  "Web Development",
  "Mobile Development",
  "AI",
  "Data Science",
  "DevOps",
  "Cybersecurity",
  "Game Development",
  "UI/UX Design",
  "Other",
] as const;

export const courseSchema = z.object({
  title: z
    .string()
    .min(3, { message: "Title must be at least 3 characters" })
    .max(100, { message: "Title must be less than 100 characters" }),

  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters" }),

  fileKey: z.string().min(1, { message: "File key is required" }),

  price: z.number().min(1, { message: "Price must be positive number" }),

  duration: z
    .number()
    .min(1, { message: "Duration must be at least 1 hour" })
    .max(500, { message: "Duration must be less than 500 hours" }),

  level: z.enum(courseLevels, { message: "Invalid course level" }),

  category: z.enum(courseCategories, { message: "Invalid course category" }),

  smallDescription: z
    .string()
    .min(3, { message: "Small description must be at least 3 characters" })
    .max(200, {
      message: "Small description must be less than 200 characters",
    }),

  slug: z.string().min(3, { message: "Slug must be at least 3 characters" }),

  status: z.enum(courseStatus, { message: "Invalid course status" }),
});

export const chapterSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  courseId: z.string().uuid({ message: "Invalid course ID" }),
});

export const lessonSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  courseId: z.string().uuid({ message: "Invalid course ID" }),
  chapterId: z.string().uuid({ message: "Invalid chapter ID" }),
  description: z
    .string()
    .min(3, { message: "Description must be at least 3 characters" })
    .optional(),
  thumbnailKey: z.string().optional(),
  videoKey: z.string().optional(),
});

export type CourseSchemaType = z.infer<typeof courseSchema>;
export type ChapterSchemaType = z.infer<typeof chapterSchema>;
export type LessonSchemaType = z.infer<typeof lessonSchema>;
