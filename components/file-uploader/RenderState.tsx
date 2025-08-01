import { cn } from "@/lib/utils";
import { CloudUploadIcon, ImageIcon, UploadIcon } from "lucide-react";
import { Button } from "../ui/button";

export function RenderEmptyState({
  isDragActive,
}: {
  isDragActive: boolean;
}) {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center mx-auto size-12 rounded-full bg-muted mb-4">
        <CloudUploadIcon
          className={cn(
            "size-6 text-muted-foreground",
            isDragActive && "text-primary",
          )}
        />
      </div>
      <p className="text-base text-foreground font-semibold">
        Drop your files here or{" "}
        <span className="text-primary font-bold">click to select files</span>
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
