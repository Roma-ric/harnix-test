"use client";

import { Settings, X } from "lucide-react";
import { Button } from "../../ui/button";
import { useState, useEffect, useRef } from "react";
import SettingsMenu from "./settings-menu";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";

const SettingTabletSheet = () => {
  const [open, setOpen] = useState(false);
  const [parentElement, setParentElement] = useState<HTMLElement | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      setIsAnimating(true);
    }
  }, [open]);

  const handleClose = () => {
    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
    setOpen(false);
  };

  const sheetContent =
    (open || isAnimating) && parentElement
      ? createPortal(
          <>
            {/* Overlay */}
            <div
              className={cn(
                "absolute inset-0 z-40",
                open ? "animate-in fade-in-0 bg-black/50 backdrop-blur-[2px]" : "",
              )}
              onClick={handleClose}
              data-state={open ? "open" : "closed"}
            />

            {/* Sheet Content */}
            <div
              className={cn(
                "bg-background absolute z-50 flex flex-col gap-4 shadow-lg transition ease-in-out",
                "data-[state=closed]:duration-300 data-[state=open]:duration-500",
                "data-[state=closed]:animate-out data-[state=open]:animate-in",
                "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right",
                "inset-y-0 right-0 h-full pt-5 w-full xs:border-l xs:max-w-sm",
              )}
              data-state={open ? "open" : "closed"}
              ref={contentRef}
            >
              {/* Close button */}
              <Button
                size="icon"
                className="absolute right-2 top-2 bg-pulsai-gray-dark ring-offset-background transition-opacity focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none z-10"
                onClick={handleClose}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </Button>

              {/* Content */}
              <div className="h-full w-full overflow-y-auto scrollbar-lock-hide">
                <SettingsMenu
                  className="w-full border-none"
                  onLinkClick={handleClose}
                />
              </div>
            </div>
          </>,
          parentElement,
        )
      : null;

  return (
    <div ref={setParentElement} className={`absolute inset-0 ${!open && "pointer-events-none"}`}>
      {/* Trigger Button */}
      <Button
        title="Settings"
        className="absolute right-2 top-2 rounded-full w-10 h-10 flex justify-center items-center border pointer-events-auto lg:hidden z-10"
        onClick={() => setOpen(true)}
      >
        <Settings className="size-5" />
      </Button>

      {sheetContent}
    </div>
  );
};

export default SettingTabletSheet;