import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { social } from "@/links";
import Link from "next/link";

export default function SocialIcons({
  className,
  ...props
}: React.HTMLProps<HTMLDivElement>) {
  return (
    <div
      className={cn("flex gap-4 flex-wrap justify-center", className)}
      {...props}
    >
      {social.map(({ name, href, icon: SocialIcon }) => (
        <Button variant="outline" size="icon" key={name} asChild>
          <Link href={href} target="_blank" rel="noopener noreferrer">
            <SocialIcon className="h-5 w-5" />
            <span className="sr-only">{name}</span>
          </Link>
        </Button>
      ))}
    </div>
  );
}
