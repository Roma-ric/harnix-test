import { Ubuntu, Unbounded } from "next/font/google";
import "./globals.css";

// Polices PulsAI
const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-ubuntu",
  display: "swap",
});

const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-unbounded",
  display: "swap",
});

export const metadata = {
  title: "PlusAI",
  description:
    "Plateforme CRM intelligente qui combine IA conversationnelle, gestion de tickets et automatisation marketing (campagnes).",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${unbounded.variable} ${ubuntu.variable}`}>
        {children}
      </body>
    </html>
  );
}
