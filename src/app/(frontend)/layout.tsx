import "@/globals.css";

export { metadata } from "@/lib/metadata";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-background text-foreground">{children}</body>
    </html>
  );
}
