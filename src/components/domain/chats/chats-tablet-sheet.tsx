"use client";

import { MessageCircleMore, X } from "lucide-react";
import { Button } from "../../ui/button";
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";
import Chats from "./chats";

const ChatsTabletSheet = () => {
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
                "inset-y-0 right-0 h-full pt-10 w-full xs:border-l xs:max-w-sm",
              )}
              data-state={open ? "open" : "closed"}
              ref={contentRef}
            >
              {/* Close button */}
              <Button
                size="icon"
                className="absolute right-2 top-2 bg-pulsai-gray-dark -none ring-offset-background transition-opacity focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none z-10"
                onClick={handleClose}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </Button>

              {/* Content */}
              <div className="h-full w-full overflow-y-auto scrollbar-lock-hide">
                <Chats className="flex flex-col w-full border-r-0" />
              </div>
            </div>
          </>,
          parentElement,
        )
      : null;

  return (
    <div ref={setParentElement} className="absolute inset-0">
      {/* Trigger Button */}
      <Button
        title="Settings"
        className="absolute right-3 top-3 rounded-full w-10 h-10 flex justify-center items-center border pointer-events-auto md:hidden z-10"
        onClick={() => setOpen(true)}
      >
        <MessageCircleMore className="size-5" />
      </Button>

      {sheetContent}
    </div>
  );
};

export default ChatsTabletSheet;
