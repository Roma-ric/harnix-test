"use client";

import { Card } from "@/components/ui/card";
import { DesktopSideBarItems } from "@/utils/nav-bar-utils";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Siren } from "lucide-react";
import PulsAILogo from "../pulsai-logo";
import { cn } from "@/lib/utils";

const DesktopSideBar = ({
  className,
  onLinkClick,
}: {
  className?: string;
  onLinkClick?: () => void;
}) => {
  const pathname = usePathname();
  const router = useRouter();

  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    } else {
      return pathname.startsWith(href);
    }
  };

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (onLinkClick) {
      e.preventDefault();
      onLinkClick();
      setTimeout(() => {
        router.push(href);
      }, 300);
    }
  };

  const kpiAlert = {
    label: "Alertes",
    count: 3,
    icon: Siren,
    description: "Vous avez des tickets en retard",
    className: "red-500",
  };

  return (
    <Card
      className={cn(
        "min-h-full! max-h-full! p-0 pt-2 w-80 bg-transparent border-none rounded-none shadow-none flex flex-col",
        className,
      )}
    >
      {/* Logo */}
      <div className="border-b border-pulsai-gray-light/5 pb-4 cursor-pointer">
        <Link href={"/"} onClick={(e) => handleLinkClick(e, "/")}>
          <PulsAILogo />{" "}
        </Link>
      </div>

      <div className="flex flex-col overflow-y-auto scrollbar-hide justify-between flex-1 w-full space-y-5 text-white">
        {/* Menu */}
        <div className="flex flex-col text-sm space-y-5">
          {DesktopSideBarItems.map((item) => (
            <div key={item.label}>
              <h2 className="uppercase px-2 mb-2"> {item.label} </h2>
              <div className="flex flex-col space-y-1">
                {item.children.map((children, index) => (
                  <Link
                    href={children.href}
                    key={`${children.href}-${index}`}
                    onClick={(e) => handleLinkClick(e, children.href)}
                  >
                    <Button
                      variant={"ghost"}
                      className={`py-5 px-2 w-full cursor-pointer flex items-center justify-start space-x-2 hover:bg-pulsai-secondary hover:text-accent-foreground ${isLinkActive(children.href) && "bg-pulsai-secondary text-accent-foreground"}`}
                    >
                      <children.icon className="size-5 min-w-5 min-h-5" />
                      <span> {children.label} </span>
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* KPI Alert */}
        <Link href={"/tickets"} onClick={(e) => handleLinkClick(e, "/tickets")}>
          <Card
            className={`relative cursor-pointer overflow-hidden w-full 2xl:w-[20rem] font-mono p-5 bg-linear-to-tr from-pulsai-gray-light to-white`}
          >
            <div className="flex items-center space-x-2 -mt-1">
              <kpiAlert.icon className={`text-${kpiAlert.className} w-5`} />
              <span className="font-extralight mt-2"> {kpiAlert.label} </span>
            </div>
            <kpiAlert.icon
              className={`absolute -bottom-4 -right-4 text-${kpiAlert.className} size-20 opacity-10`}
            />
            <Button className="absolute cursor-pointer right-0 bg-pulsai-gray-dark top-[23%] w-min -mr-5">
              <ArrowRight className="mr-5" />
            </Button>
            {kpiAlert.description && (
              <div className="text-xs -mt-4 truncate">
                {" "}
                {kpiAlert.description}{" "}
              </div>
            )}
          </Card>
        </Link>
      </div>
    </Card>
  );
};

export default DesktopSideBar;
