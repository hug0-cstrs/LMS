import { cn } from "@/lib/utils";
import {
  CloudUploadIcon,
  ImageIcon,
  Loader2,
  UploadIcon,
  XIcon,
} from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

export function RenderEmptyState({ isDragActive }: { isDragActive: boolean }) {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center mx-auto size-12 rounded-full bg-muted mb-4">
        <CloudUploadIcon
          className={cn(
            "size-6 text-muted-foreground",
            isDragActive && "text-primary"
          )}
        />
      </div>
      <p className="text-base text-foreground font-semibold">
        Drop your files here or{" "}
        <span className="text-primary font-bold cursor-pointer">
          click to select files
        </span>
      </p>
      <Button type="button" size="sm" className="mt-4">
        <UploadIcon className="size-4 mr-2" />
        Upload files
      </Button>
    </div>
  );
}

export function RenderErrorState() {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center mx-auto size-12 rounded-full bg-destructive/30 mb-4">
        <ImageIcon className={cn("size-6 text-destructive")} />
      </div>

      <p className="text-base font-semibold">Upload Failed</p>
      <p className="text-xs mt-1 text-muted-foreground">Something went wrong</p>

      <Button type="button" size="sm" className="mt-4">
        <UploadIcon className="size-4 mr-2" />
        Retry File Selection
      </Button>
    </div>
  );
}

export function RenderUploadedState({
  previewUrl,
  isDeleting,
  handleRemoveFile,
}: {
  previewUrl: string;
  isDeleting: boolean;
  handleRemoveFile: () => void;
}) {
  return (
    <div>
      <Image
        src={previewUrl}
        alt="Uploaded file"
        fill
        className="object-contain p-2"
      />

      <Button
        size="icon"
        variant="destructive"
        className={cn("absolute top-4 right-4 cursor-pointer")}
        disabled={isDeleting}
        onClick={handleRemoveFile}
      >
        {isDeleting ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          <XIcon className="size-4" />
        )}
      </Button>
    </div>
  );
}

export function RenderUploadingState({
  progress,
  file,
}: {
  progress: number;
  file: File;
}) {
  return (
    <div className="flex items-center justify-center text-center flex-col">
      <p>{progress}%</p>
      <p className="mt-2 text-sm font-medium text-muted-foreground">
        Uploading...
      </p>
      <p className="mt-1 text-xs text-muted-foreground truncate max-w-xs">
        {file.name}
      </p>
    </div>
  );
}
