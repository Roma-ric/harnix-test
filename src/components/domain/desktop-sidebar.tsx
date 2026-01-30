"use client";

import { Card } from "@/components/ui/card";
import { DesktopSideBarItems } from "@/utils/nav-bar-utils";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { OverviewKPIs } from "@/utils/overview-utils";
import { ArrowRight } from "lucide-react";
import { cn } from "@/utils/utils";
import { Dispatch, SetStateAction } from "react";

const DesktopSideBar = ({
  className,
  setOpen,
}: {
  className?: string;
  setOpen?: Dispatch<SetStateAction<boolean>>;
}) => {
  const pathname = usePathname();

  const kpiAlert = OverviewKPIs[2];
  return (
    <Card
      className={cn(
        "min-h-full! max-h-full! p-0 pt-2 w-80 bg-transparent border-none rounded-none shadow-none flex flex-col",
        className,
      )}
    >
      {/* Logo */}
      <Link href={"/"} {...(setOpen && { onClick: () => setOpen(false) })}>
        <div className="border-b border-pulsai-gray-light/5 pb-4">
          <h1 className="font-heading text-xl">
            <span className="text-pulsai-primary">Puls</span>
            <span className="text-pulsai-secondary">AI</span>
          </h1>
        </div>
      </Link>

      <div className="flex flex-col overflow-y-auto hide-scrollbar justify-between flex-1 w-full space-y-1 text-white">
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
                    {...(setOpen && { onClick: () => setOpen(false) })}
                  >
                    <Button
                      variant={"ghost"}
                      className={`py-5 px-2 w-full flex items-center justify-start space-x-2 hover:bg-pulsai-secondary hover:text-accent-foreground ${pathname === children.href && "bg-pulsai-secondary text-accent-foreground"}`}
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
        <Link
          href={"/tickets"}
          {...(setOpen && { onClick: () => setOpen(false) })}
        >
          <Card
            className={`relative overflow-hidden w-full 2xl:w-[20rem] font-mono p-5 bg-linear-to-tr from-pulsai-gray-light to-white`}
          >
            <div className="flex items-center space-x-2 -mt-1">
              <kpiAlert.icon className={`text-${kpiAlert.className} w-5`} />
              <span className="font-extralight mt-1"> {kpiAlert.label} </span>
            </div>
            <div className="font-bold text-4xl -mt-4">{kpiAlert.count}</div>
            <kpiAlert.icon
              className={`absolute -bottom-4 -right-4 text-${kpiAlert.className} size-20 opacity-10`}
            />
            <Button className="absolute right-0 bg-pulsai-gray-dark top-[23%] w-min -mr-5">
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
