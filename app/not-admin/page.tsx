import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft, ShieldXIcon } from "lucide-react";
import Link from "next/link";

export default function NotAdminPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="max-w-md w-full">
        <CardHeader className="text-center">
          <div className="bg-destructive/10 p-4 rounded-full w-fit mx-auto">
            <ShieldXIcon className="size-16 text-red-500" />
          </div>
          <CardTitle className="text-2xl font-bold">
            Access Restricted
          </CardTitle>
          <CardDescription className="max-w-xs mx-auto">
            Hey! You are not an admin, which means you are not allowed to access
            this page.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Link
            href="/"
            className={buttonVariants({
              className: "w-full",
            })}
          >
            <ArrowLeft className="mr-1 size-4" />
            Back to Home
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
