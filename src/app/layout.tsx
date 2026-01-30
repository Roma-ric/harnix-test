import { Ubuntu, Unbounded } from "next/font/google";
import "./globals.css";
import { Card } from "@/components/ui/card";
import DesktopSideBar from "@/components/domain/desktop-sidebar";
import Header from "@/components/domain/header";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

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
        <div className="flex relative h-screen max-h-screen justify-between font-mono p-2 sm:p-5 bg-pulsai-gray-dark">
          <DesktopSideBar className="hidden md:flex" />
          <Card className="h-full rounded sm:rounded-4xl md:ml-5 w-full px-5 xs:px-7 lg:px-10 pt-2 lg:pt-5 pb-5 flex flex-col justify-between">
            <Header />
            <div className="flex-1 overflow-y-auto hide-scrollbar">
              {children}
            </div>
          </Card>
          {/* Add Element */}
          <Button
            variant={"secondary"}
            className="fixed bg-pulsai-secondary border-none bottom-5 right-5 md:hidden flex justify-center items-center rounded-full w-12 h-12"
          >
            <Plus className="size-5" />
          </Button>
        </div>
      </body>
    </html>
  );
}
