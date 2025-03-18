import Brand from "./brand";
import SocialIcons from "./social-icons";
import { Button } from "@/components/ui/button";
import { siteName } from "@/lib/metadata";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto p-4 space-y-8">
        <div className="flex justify-between items-center max-sm:flex-col gap-4">
          <Brand />
          <SocialIcons />
        </div>

        <div className="max-sm:text-center text-muted-foreground text-sm flex justify-between items-center max-sm:flex-col gap-2">
          <p>
            &copy; {new Date().getFullYear()} {siteName} | Diseño de{" "}
            <Link
              target="_blank"
              className="font-semibold hover:underline focus:underline"
              href="https://www.linkedin.com/in/martinstanicio/"
            >
              Martín Stanicio
            </Link>
          </p>

          <Button variant="ghost" size="sm" asChild>
            <Link href="/admin">Tablero de administrador</Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
