"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import ProfileSheet from "./profile-sheet";
import Notifications from "./notifications";
import MobileSidebar from "./mobile-sidebar";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/utils";

const Header = () => {
  const pathname = usePathname();

  const showInfo = !pathname.startsWith("/chats");

  return (
    <div className="w-full flex space-x-5 justify-between items-center">
      {/* Info */}
      <div
        className={cn(
          "max-w-[16rem] lg:max-w-[20rem] xl:max-w-[24rem] mt-5 h-15 lg:h-full  hidden md:block",
          !showInfo ? "opacity-0 lg:opacity-0" : "opacity-0 lg:opacity-100",
        )}
      >
        <span className="font-semibold text-xl">Bienvenue, Romaric!</span>
        <br />
        <span className="text-sm">
          Consulter la vue d'ensemble de vos activités
        </span>
      </div>

      <div className="border-b md:hidden flex items-center space-x-2 border-pulsai-gray-light/5 pb-4 pt-6">
        {/* Mobile Ménu */}
        <MobileSidebar />
        <h1 className="font-heading text-xl">
          <span className="text-pulsai-primary">Puls</span>
          <span className="text-pulsai-secondary">AI</span>
        </h1>
      </div>

      <div className="flex items-center space-x-3 lg:-mt-5">
        {/* Add Element */}
        <Button
          variant={"secondary"}
          className="border hidden md:flex bg-pulsai-secondary border-none  justify-center items-center rounded-full w-12 h-12"
        >
          <Plus className="size-5 strok" />
        </Button>

        {/* Notifications */}
        <Notifications />

        {/* Profile Card */}
        <ProfileSheet />
      </div>
    </div>
  );
};

export default Header;
