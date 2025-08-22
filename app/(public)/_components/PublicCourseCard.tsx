import { PublicCourseType } from "@/app/data/course/get-all-courses";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useConstructUrl } from "@/hooks/use-construct-url";
import { SchoolIcon, TimerIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface iAppProps {
  data: PublicCourseType;
}

export function PublicCourseCard({ data }: iAppProps) {
  const thumbnailUrl = useConstructUrl(data.fileKey);
  return (
    <Link href={`/courses/${data.slug}`} className="block cursor-default">
      <Card className="group relative py-0 gap-0">
        <Badge className="absolute top-2 right-2 z-10">{data.level}</Badge>
        <Image
          src={thumbnailUrl}
          alt="Thumbnail image of course"
          width={600}
          height={400}
          className="object-cover w-full rounded-t-xl aspect-video h-full"
        />

        <CardContent className="p-4">
          <h3 className="font-medium text-lg line-clamp-2 hover:underline group-hover:text-primary transition-colors cursor-pointer">
            {data.title}
          </h3>
          <p className="line-clamp-2 text-sm text-muted-foreground leading-tight mt-2">
            {data.smallDescription}
          </p>
          <div className="mt-4 flex items-center gap-x-5">
            <div className="flex items-center gap-x-2">
              <TimerIcon className="size-6 p-1 rounded-md text-primary bg-primary/10" />
              <p className="text-sm text-muted-foreground">{data.duration}</p>
            </div>
            <div className="flex items-center gap-x-2">
              <SchoolIcon className="size-6 p-1 rounded-md text-primary bg-primary/10" />
              <p className="text-sm text-muted-foreground">{data.category}</p>
            </div>
          </div>

          <div
            className={buttonVariants({
              className: "mt-4 w-full",
            })}
          >
            Learn More
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export function PublicCourseCardSkeleton() {
  return (
    <Card className="group relative py-0 gap-0">
      <div className="absolute top-2 right-2 z-10 flex items-center">
        <Skeleton className="h-6 w-20 rounded-full" />
      </div>
      <div className="w-full relative h-fit">
        <Skeleton className="w-full rounded-t-xl aspect-video" />
      </div>

      <CardContent className="p-4">
        <div className="space-y-2">
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-3/4" />
        </div>

        <div className="mt-4 flex items-center gap-x-5">
          <div className="flex items-center gap-x-2">
            <Skeleton className="size-6 rounded-md" />
            <Skeleton className="h-4 w-8" />
          </div>
          <div className="flex items-center gap-x-2">
            <Skeleton className="size-6 rounded-md" />
            <Skeleton className="h-4 w-8" />
          </div>
        </div>

        <Skeleton className="mt-4 h-10 w-full rounded-md" />
      </CardContent>
    </Card>
  );
}
