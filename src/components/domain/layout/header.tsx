"use client";

import { Button } from "@/components/ui/button";
import { Languages, Plus } from "lucide-react";
import ProfileSheet from "../profile-sheet";
import Notifications from "../notifications";
import TabletSidebar from "./tablet-sidebar";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import PulsAILogo from "../pulsai-logo";

const Header = () => {
  const pathname = usePathname();

  const showInfo = pathname === "/";

  const getPageTitle = () => {
    if (pathname.startsWith("/chats")) {
      return "Conversations";
    } else if (pathname.startsWith("/tickets")) {
      return "Tickets";
    } else if (pathname.startsWith("/campaigns")) {
      return "Campagnes";
    } else if (pathname.startsWith("/custumers")) {
      return "Clients";
    } else if (pathname.startsWith("/stats")) {
      return "Statistiques";
    } else if (pathname.startsWith("/settings")) {
      return "Paramètres";
    }
  };

  return (
    <div className="w-full lg:-mt-6 xl:-mt-3 flex space-x-5 -mt-3 justify-between items-center">
      {/* Info */}
      {showInfo ? (
        <div
          className={cn(
            "max-w-[16rem] lg:max-w-[20rem] xl:max-w-[24rem] mt-5 h-15 lg:h-full opacity-0 lg:opacity-100 hidden xl:block",
          )}
        >
          <span className="font-semibold text-xl">Bienvenue, Romaric!</span>
          <br />
          <span className="text-sm">
            Consulter la vue d'ensemble de vos activités
          </span>
        </div>
      ) : (
        <div
          className={cn(
            "max-w-[16rem] lg:max-w-[20rem] xl:max-w-[24rem] mt-5 h-13! lg:h-full  hidden xl:block",
          )}
        >
          <span className="font-semibold text-xl">{getPageTitle()}</span>
        </div>
      )}

      <div className="border-b xl:hidden flex items-center space-x-2 border-pulsai-gray-light/5 pb-4 pt-6">
        {/* Mobile Ménu */}
        <TabletSidebar />

        {/* Logo */}
        <Link href={"/overview"}>
          <PulsAILogo />
        </Link>
      </div>

      <div className="flex items-center space-x-3">

        {/* Add Element */}
        <Button
          variant={"secondary"}
          className="border hidden md:flex bg-pulsai-secondary border-none  justify-center items-center rounded-full  sm:w-12 sm:h-12  w-10 h-10"
        >
          <Plus className="size-5 strok" />
        </Button>

        <Button
          variant={"secondary"}
          className="border flex justify-center items-center rounded-full  sm:w-12 sm:h-12  w-10 h-10"
        >
          <Languages className="size-5 strok" />
        </Button>
        
        {/* Notifications */}
        <Notifications />

        {/* Profile Sheet */}
        <ProfileSheet />
      </div>
    </div>
  );
};

export default Header;
