import { Ubuntu, Unbounded } from "next/font/google";
import "./globals.css";
import { Card } from "@/components/ui/card";
import NavBar from "@/components/domain/navbar";

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
  title: "Harnix Test",
  description: "Test d'intégration - Harnix",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${unbounded.variable} ${ubuntu.variable}`}>
        <div className="flex min-h-screen space-x-5 justify-between font-mono p-5">
          <NavBar />
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
