"use client";

import SettingsMenu from "@/components/domain/settings/settings-menu";
import SettingTabletSheet from "@/components/domain/settings/settings-tablet-sheet";
import { useMediaQuery } from "@/hooks/use-media-query";
import { usePathname } from "next/navigation";

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isUnder1025 = useMediaQuery("(max-width: 1025px)");
  const isUnder640 = useMediaQuery("(max-width: 640px)");
  const pathname = usePathname();

  const showContentPadding = pathname !== "/settings/billing";
  return (
    <div
      className="flex relative overflow-hidden justify-between rounded-lg bg-pulsai-gray-light font-mono p-0 border"
      style={{
        height: `calc(100vh - ${isUnder1025 ? isUnder640 ? "105px" : "115px" : "135px"})`,
      }}
    >
      <SettingsMenu className="hidden lg:block w-75! 2xl:w-90!" />
      <div className={`flex-1 h-full bg-pulsai-gray-dark/5 ${(showContentPadding) && "p-5"} lg:p-5`}>
        {children}
        <SettingTabletSheet />
      </div>
    </div>
  );
}
