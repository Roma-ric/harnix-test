"use client";

import Chats from "@/components/domain/chats/chats";

export default function ChatsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="flex relative overflow-hidden justify-between rounded-lg bg-pulsai-gray-light font-mono p-0 border"
      style={{
        height: "calc(100vh - 160px)",
      }}
    >
      <Chats className="hidden lg:flex lg:flex-col w-90!"/>
      <div className="flex-1 h-full">{children}</div>
    </div>
  );
}
