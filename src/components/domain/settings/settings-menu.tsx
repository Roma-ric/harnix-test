"use client";

import { Button } from "@/components/ui/button";
import { SettingsNavigationMenu } from "@/utils/settings-utils";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const SettingsMenu = ({
  className,
  onLinkClick,
}: {
  className?: string;
  onLinkClick?: () => void;
}) => {
  const pathname = usePathname();
  const router = useRouter();

  const isLinkActive = (href: string) => {
    if (href === "/settings") {
      return pathname === "/settings";
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

  return (
    <div
      className={cn(
        "relative min-h-full! max-h-full border-r p-5 pb-0 overflow-y-auto scrollbar-lock-hide bg-white",
        className,
      )}
    >
      <div className="flex flex-col text-sm space-y-5">
        {SettingsNavigationMenu.map((item) => (
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
                    className={`py-5 px-2 w-full cursor-pointer flex items-center justify-start space-x-2 hover:bg-pulsai-gray-dark hover:text-white ${isLinkActive(children.href) && "bg-pulsai-gray-dark text-white"}`}
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
    </div>
  );
};

export default SettingsMenu;