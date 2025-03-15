import Icon from "./icon";
import { siteName } from "@/lib/metadata";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Brand({
  className,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link
      href="/"
      className={cn("flex items-center gap-2", className)}
      {...props}
    >
      <Icon className="size-8" />
      <span className="font-bold text-xl">{siteName}</span>
    </Link>
  );
}
