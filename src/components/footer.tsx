import Brand from "./brand";
import SocialIcons from "./social-icons";
import { Button } from "@/components/ui/button";
import { siteName } from "@/lib/metadata";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background w-full border-t">
      <div className="container mx-auto space-y-8 p-4">
        <div className="flex items-center justify-between gap-4 max-sm:flex-col">
          <Brand />
          <SocialIcons />
        </div>

        <div className="text-muted-foreground flex items-center justify-between gap-2 text-sm max-sm:flex-col max-sm:text-center">
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
