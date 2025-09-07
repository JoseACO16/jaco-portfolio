import "./globals.css";

export const metadata = {
  title: "JACO | Portafolio",
  description: "Portafolio de José Andrés Castillo Orozco",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
