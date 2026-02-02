"use client";

import SettingsMenu from "@/components/domain/settings/settings-menu";

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="flex relative overflow-hidden justify-between rounded-lg bg-pulsai-gray-light font-mono p-0 border"
      style={{
        height: "calc(100vh - 140px)",
      }}
    >
      <SettingsMenu className="w-90!"/>
      <div className="flex-1 h-full">{children}</div>
    </div>
  );
}
