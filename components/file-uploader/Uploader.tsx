"use client";

import { cn } from "@/lib/utils";
import { useCallback, useState } from "react";
import { FileRejection, useDropzone } from "react-dropzone";
import { toast } from "sonner";
import { Card, CardContent } from "../ui/card";
import { RenderEmptyState } from "./RenderState";
import { v4 as uuidv4 } from "uuid";

interface UploaderState {
  id: string | null;
  file: File | null;
  uploading: boolean;
  progress: number;
  key?: string;
  isDeleting: boolean;
  error: boolean;
  objectUrl?: string;
  fileType: "image" | "video";
}

export function Uploader() {
  const [fileState, setFileState] = useState<UploaderState>({
    id: null,
    file: null,
    uploading: false,
    progress: 0,
    isDeleting: false,
    error: false,
    fileType: "image",
  });

  function uploadFile(file: File) {
    setFileState((prev) => ({
      ...prev,
      uploading: true,
      progress: 0,
    }));

    try {
      
    } catch (error) {
      
    }
  }

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];

      setFileState({
        id: uuidv4(),
        file: file,
        uploading: false,
        progress: 0,
        isDeleting: false,
        error: false,
        fileType: "image",
        objectUrl: URL.createObjectURL(file),
      });
    }
  }, []);

  function rejectedFiles(fileRejection: FileRejection[]) {
    if (fileRejection.length) {
      const tooManyFiles = fileRejection.find(
        (rejection) => rejection.errors[0].code === "too-many-files"
      );

      const fileSizeTooBig = fileRejection.find(
        (rejection) => rejection.errors[0].code === "file-too-large"
      );

      if (fileSizeTooBig) {
        toast.error("File size exceeds the limits");
      }

      if (tooManyFiles) {
        toast.error("Too many files selected");
      }
    }

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
      accept: {
        "image/*": [".png", ".jpg", ".jpeg", ".gif", ".svg"],
      },
      maxFiles: 1,
      multiple: false,
      maxSize: 5 * 1024 * 1024, // 5MB
      onDropRejected: rejectedFiles,
    });

    return (
      <div>
        <Card
          {...getRootProps()}
          className={cn(
            "relative border-2 border-dashed transition-colors duration-200 ease-in-out w-full h-64",
            isDragActive
              ? "border-primary bg-primary/10 border-solid"
              : "border-border hover:border-primary cursor-pointer"
          )}
        >
          <CardContent className="flex items-center justify-center h-full p-4">
            <input {...getInputProps()} />

            {/* <RenderErrorState /> */}
            <RenderEmptyState isDragActive={isDragActive} />
          </CardContent>
        </Card>
      </div>
    );
  }
}
