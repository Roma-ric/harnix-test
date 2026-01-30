"use client";

import { Card } from "@/components/ui/card";
import { NavBarItems } from "@/lib/nav-bar-utils";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavBar = () => {
  const pathname = usePathname();

  return (
    <Card className="min-h-full! max-h-full! p-0 pt-2 w-80 bg-transparent border-none rounded-none shadow-none">
      {/* Logo */}
      <div className="border-b border-pulsai-gray-light/5 pb-4">
        <h1 className="font-heading text-xl">
          <span className="text-pulsai-primary">Puls</span>
          <span className="text-pulsai-secondary">AI</span>
        </h1>
      </div>

      <div className="flex flex-col overflow-y-auto hide-scrollbar justify-between flex-1 w-full space-y-1 text-white">
        {/* Menu */}
        <div className="flex flex-col text-sm space-y-5">
          {NavBarItems.map((item) => (
            <div key={item.label}>
              <h2 className="uppercase px-2 mb-2"> {item.label} </h2>
              <div className="flex flex-col space-y-1">
                {item.children.map((children, index) => (
                  <Link href={children.href} key={`${children.href}-${index}`}>
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
        {/* Alert */}
        <Card className="bg-white/15 h-40 text-white p-5 text-sm rounded-4xl border-none"></Card>
      </div>
    </Card>
  );
};

export default NavBar;
