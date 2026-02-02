import { Card } from "@/components/ui/card";
import DesktopSideBar from "@/components/domain/layout/desktop-sidebar";
import Header from "@/components/domain/layout/header";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex relative h-screen max-h-screen justify-between font-mono lg:p-2.5 bg-pulsai-gray-dark">
      <DesktopSideBar className="hidden xl:flex" />
      <Card className="h-full overflow-hidden rounded-none lg:rounded-4xl xl:ml-5 w-full px-2.5 md:px-5 pt-2 lg:pt-5 pb-5 flex flex-col justify-between">
        <Header />
        <div className="flex-1 -mt-5 overflow-y-auto scrollbar-lock-hide">
          {children}
        </div>
      </Card>
      {/* Add Element */}
      <Button
        variant={"secondary"}
        className="fixed bg-pulsai-secondary border-none bottom-3 right-3 md:hidden flex justify-center items-center rounded-full  sm:w-12 sm:h-12  w-10 h-10 z-50"
      >
        <Plus className="size-5" />
      </Button>
    </div>
  );
}
