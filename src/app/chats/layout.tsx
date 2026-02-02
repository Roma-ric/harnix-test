"use client";

import Chats from "@/components/domain/chats/chats";
import MobileRestriction from "@/components/domain/mobile-restriction";
import { useMediaQuery } from "@/hooks/use-media-query";

export default function ChatsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isUnder1025 = useMediaQuery("(max-width: 1025px)");
  const isUnder640 = useMediaQuery("(max-width: 640px)");

  return (
    <>
      <div
        className="hidden md:flex relative overflow-hidden justify-between rounded-lg bg-pulsai-gray-light font-mono p-0 border"
        style={{
          height: `calc(100vh - ${isUnder1025 ? (isUnder640 ? "105px" : "115px") : "135px"})`,
        }}
      >
        <Chats className="hidden md:flex md:flex-col w-90!" />
        <div className="flex-1 h-full">{children}</div>
      </div>

      {/* Notice Taille d'ecran */}
      <MobileRestriction />
    </>
  );
}
