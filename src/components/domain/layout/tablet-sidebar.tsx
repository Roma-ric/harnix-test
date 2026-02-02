"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "../../ui/button";
import DesktopSideBar from "./desktop-sidebar";
import { useState } from "react";

const TabletSidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant={"secondary"}
          className="border-none flex justify-center items-center  sm:w-12 sm:h-12  w-10 h-10"
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
        <div className="px-3 pb-3 h-full">
          <DesktopSideBar className="w-full!" onLinkClick={() => setOpen(false)} />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default TabletSidebar;