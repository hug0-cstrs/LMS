import { Ban, PlusIcon } from "lucide-react";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";

interface iAppProps {
  title: string;
  description: string;
  buttonText: string;
  href: string;
}

export function EmptyState({
  title,
  description,
  buttonText,
  href,
}: iAppProps) {
  return (
    <div className="flex flex-col items-center justify-center flex-1 h-full rounded-md border-dashed border p-8 text-center animate-in fade-in-50">
      <div className="flex size-20 items-center justify-center rounded-full bg-destructive/10">
        <Ban className="size-10 text-destructive" />
      </div>

      <h2 className="mt-6 text-xl">{title}</h2>
      <p className="mb-8 mt-2 text-center text-sm leading-tight text-muted-foreground">
        {description}
      </p>
      <Link href={href} className={buttonVariants()}>
        <PlusIcon className="mr-2 size-4" />
        {buttonText}
      </Link>
    </div>
  );
}
