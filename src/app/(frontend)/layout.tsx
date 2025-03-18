import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import "@/globals.css";

export { metadata } from "@/lib/metadata";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <div className="bg-background text-foreground grid grid-rows-[auto_1fr_auto] min-h-screen">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
