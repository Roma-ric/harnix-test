import { Ubuntu, Unbounded } from "next/font/google";
import "./globals.css";
import { Card } from "@/components/ui/card";
import NavBar from "@/components/domain/navbar";
import Header from "@/components/domain/header";

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
        <div className="flex h-screen max-h-screen space-x-5 justify-between font-mono p-5 bg-pulsai-gray-dark">
          <NavBar />
          <Card className="h-full rounded-4xl w-full px-10 pt-5 pb-5 flex flex-col justify-between">
            <Header />
            <div className="flex-1 overflow-y-auto hide-scrollbar">
              {children}
            </div>
          </Card>
        </div>
      </body>
    </html>
  );
}
