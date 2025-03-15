import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Facebook, Github, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: Twitter,
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: Instagram,
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: Facebook,
  },
  {
    name: "GitHub",
    href: "https://github.com",
    icon: Github,
  },
];

export default function SocialIcons({
  className,
  ...props
}: React.HTMLProps<HTMLDivElement>) {
  return (
    <div
      className={cn("flex gap-4 flex-wrap justify-center", className)}
      {...props}
    >
      {socialLinks.map((social) => (
        <Button variant="outline" size="icon" key={social.name} asChild>
          <Link href={social.href} target="_blank" rel="noopener noreferrer">
            <social.icon className="h-5 w-5" />
            <span className="sr-only">{social.name}</span>
          </Link>
        </Button>
      ))}
    </div>
  );
}
