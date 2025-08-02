import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export const fileUploadSchema = z.object({
  fileName: z.string().min(1, { message: "File name is required" }),
  contentType: z.string().min(1, { message: "Content type is required" }),
  size: z.number().min(1, { message: "Size is required" }),
  isImage: z.boolean(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const validation = fileUploadSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json({ error: "Error Request Body" }, { status: 400 });
    }

    const { fileName, contentType, size, isImage } = validation.data;
    
  } catch (error) {
    
  }
}