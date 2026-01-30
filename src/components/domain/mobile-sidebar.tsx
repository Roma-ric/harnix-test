"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import DesktopSideBar from "./desktop-sidebar";

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant={"secondary"}
          className="border-none flex justify-center items-center w-12 h-12"
        >
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        closeButtonClassName="text-white"
        className="w-full! border-none bg-pulsai-gray-dark xs:max-w-sm"
      >
        <SheetHeader>
          <SheetTitle></SheetTitle>
        </SheetHeader>
        <SheetDescription className="px-3 pb-3 h-full">
          <DesktopSideBar className="w-full!" />
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
