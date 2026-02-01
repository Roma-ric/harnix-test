import { Ubuntu, Unbounded } from "next/font/google";
import "./globals.css";
import { Card } from "@/components/ui/card";
import DesktopSideBar from "@/components/domain/layout/desktop-sidebar";
import Header from "@/components/domain/layout/header";
import { Button } from "@/components/ui/button";
import { MonitorSmartphone, Plus } from "lucide-react";
import MobileRestriction from "@/components/domain/mobile-restriction";

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
        <div className="hidden sm:flex relative h-screen max-h-screen justify-between font-mono p-2 sm:p-5 bg-pulsai-gray-dark">
          <DesktopSideBar className="hidden xl:flex" />
          <Card className="h-full overflow-hidden rounded sm:rounded-4xl xl:ml-5 w-full px-5 xs:px-7 lg:px-10 pt-2 lg:pt-5 pb-5 flex flex-col justify-between">
            <Header />
            <div className="flex-1 -mt-5 overflow-y-auto scrollbar-lock-hide">
              {children}
            </div>
          </Card>
          {/* Add Element */}
          <Button
            variant={"secondary"}
            className="fixed bg-pulsai-secondary border-none bottom-3 right-3 md:hidden flex justify-center items-center rounded-full w-12 h-12 z-50"
          >
            <Plus className="size-5" />
          </Button>
        </div>

        {/* Notice Taille d'ecran */}
        <MobileRestriction />
      </body>
    </html>
  );
}
