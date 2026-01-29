"use client";

import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { NavBarItems } from "@/lib/nav-bar-utils";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { LogOut, Moon, Sun } from "lucide-react";
import { useState } from "react";
import { ThemeSwitch } from "./theme-switch";

const NavBar = () => {
  const [isDark, setIsDark] = useState(false);

  const pathname = usePathname();

  return (
    <Card className="min-h-full! p-5 bg-pulsai-gray-dark w-80">
      {/* Logo */}
      <div className="border-b border-pulsai-gray-light/5 pb-4">
        <h1 className="font-heading text-xl">
          <span className="text-pulsai-primary">Puls</span>
          <span className="text-pulsai-secondary">AI</span>
        </h1>
      </div>
      <div className="flex flex-col justify-between flex-1 w-full space-y-1 text-white">
        {/* Menu */}
        <div className="flex flex-col space-y-1">
          {NavBarItems.map((item, index) => (
            <Link href={item.href} key={`${item.href}-${index}`}>
              <Button
                variant={"ghost"}
                className={`py-5 px-2 w-full flex items-center justify-start space-x-2 text-sm ${pathname === item.href && "bg-accent text-accent-foreground"}`}
              >
                <item.icon className="size-5 min-w-5 min-h-5" />
                <span> {item.label} </span>
              </Button>
            </Link>
          ))}
        </div>

        {/* User */}
        <Popover>
          <PopoverTrigger asChild>
            <div className="border cursor-pointer rounded-md bg-pulsai-secondary hover:bg-pulsai-secondary/80 transition-colors delay-100 duration-100 ease-in flex items-center justify-center space-x-2 border-pulsai-gray-light/5 px-3 py-2">
              <Avatar size="lg">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>AR</AvatarFallback>
              </Avatar>
              <div className="text-black max-w-full text-xs overflow-hidden">
                <span className="font-semibold"> Romaric AKODJENOU </span>{" "}
                <br />
                <span className="truncate"> romaricakodjenou54@gmail.com </span>
              </div>
            </div>
          </PopoverTrigger>
          <PopoverContent className="space-y-2 flex flex-col justify-between h-50">
            <div className="w-full flex justify-end"></div>

            <Button variant={"ghost"} className="border w-full text-red-500">
              <LogOut /> Se déconnecter
            </Button>
          </PopoverContent>
        </Popover>
      </div>
    </Card>
  );
};

export default NavBar;
