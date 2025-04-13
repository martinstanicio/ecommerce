import { Button } from "./ui/button";
import SimpleIcon from "@/components/simple-icon";
import { cn } from "@/lib/utils";
import { social } from "@/links";
import Link from "next/link";

export default function SocialIcons({
  className,
  ...props
}: React.HTMLProps<HTMLDivElement>) {
  return (
    <div
      className={cn("flex flex-wrap justify-center gap-4", className)}
      {...props}
    >
      {social.map(({ name, href, icon }) => (
        <Button variant="outline" size="icon" key={name} asChild>
          <Link href={href} target="_blank" rel="noopener noreferrer">
            <SimpleIcon icon={icon} />
            <span className="sr-only">{name}</span>
          </Link>
        </Button>
      ))}
    </div>
  );
}
