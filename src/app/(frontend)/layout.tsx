import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/sonner";
import "@/globals.css";

export { metadata } from "@/lib/metadata";

type Props = { children: React.ReactNode };

export default async function FrontendLayout({ children }: Props) {
  return (
    <html lang="es">
      <body>
        <div className="bg-background text-foreground grid min-h-screen grid-rows-[auto_1fr_auto]">
          <Navbar />
          {children}
          <Footer />
        </div>
        <Toaster richColors closeButton duration={8000} theme="light" />
      </body>
    </html>
  );
}
