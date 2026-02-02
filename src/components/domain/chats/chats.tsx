"use client"

import { Search } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useMemo, useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { cn, formatUnreadCount, getInitials, getTimeAgo } from "@/utils/utils";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { chats } from "@/utils/chats-utils";
import { ChatType } from "@/types/chats.types";
import { usePathname } from "next/navigation";

const Chats = ({className}:{className?: string}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [activeTab, setActiveTab] = useState<"all" | "unread">("all");
  const pathname = usePathname();

  const filteredChats = useMemo(() => {
    const matchesSearch = chats.filter((chat) =>
      chat.customer.toLowerCase().includes(searchTerm.trim().toLowerCase()),
    );

    if (activeTab === "unread") {
      return matchesSearch.filter((chat) => chat.nbUnreadMessage > 0);
    }

    if (activeTab === "all") {
      return matchesSearch;
    }
  }, [searchTerm, activeTab]);

  const activeChat = pathname.split('/chats/')[1];

  const ChatRender = ({ chat }: { chat: ChatType }) => {
    return (
      <Link href={`/chats/${chat.id}`}>
        <div className={cn(`flex items-center cursor-pointer space-x-3 w-full py-4 `, activeChat === chat.id ? "border-y border-y-pulsai-gray-dark" : "")}>
          <Avatar size="lg" className="border">
            <AvatarImage src="" />
            <AvatarFallback>{getInitials(chat.customer)}</AvatarFallback>
          </Avatar>
          <div className="max-w-full w-full overflow-hidden text-sm">
            <div className="flex w-full items-center space-x-2 justify-between">
              <div className="font-medium truncate">{chat.customer}</div>
              <div className="text-xs min-w-10 -mr-2 truncate text-gray-500">
                {getTimeAgo(chat.lastMessageAt)}
              </div>
            </div>
            <div className="flex w-full items-center space-x-2 justify-between">
              <div className="truncate text-gray-500 text-xs">
                {chat.lastMessageText}
              </div>
              {chat.nbUnreadMessage > 0 && (
                <Badge className="flex bg-pulsai-secondary text-black w-5 h-5 items-center justify-center">
                  <span className="mt-0.5">
                    {formatUnreadCount(chat.nbUnreadMessage)}
                  </span>
                </Badge>
              )}
            </div>
          </div>
        </div>
      </Link>
    );
  };

  return (
    <div className={cn("relative min-h-full! max-h-full border-r p-5 pb-0 overflow-y-auto scrollbar-lock-hide bg-white", className)}>
      <div className="flex items-center bg-pulsai-gray-light rounded-lg pl-3 outline-1 -outline-offset-1 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-pulsai-primary">
        <div className="shrink-0 text-base text-foreground select-none sm:text-sm/6">
          <Search className="text-gray-500 w-5" />
        </div>
        <input
          id="price"
          type="search"
          name="price"
          placeholder="Recherche..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="block min-w-0 grow rounded-r-lg py-2 pr-3 pl-2 text-foreground placeholder:text-gray-500 focus:outline-none text-sm"
        />
      </div>

      <Tabs
        defaultValue="all"
        value={activeTab}
        onValueChange={(value) => setActiveTab(value as "all" | "unread")}
        className="w-full mt-5 space-y-4 flex-1 overflow-y-auto"
      >
        <TabsList className="overflow-x-auto w-full h-10! scrollbar-lock-hide border">
          {["Toutes", "Non lues"].map((label, i) => (
            <TabsTrigger
              key={i}
              value={["all", "unread"][i]}
              className="text-xs data-[state=active]:font-semibold rounded!"
            >
              {label}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="all" className="divide-y overflow-y-auto scrollbar-hide">
          {filteredChats &&
            filteredChats.map((chat) => (
              <div key={chat.id}>
                <ChatRender chat={chat} />
              </div>
            ))}
        </TabsContent>
        <TabsContent value="unread" className="divide-y overflow-y-auto scrollbar-hide">
          {filteredChats &&
            filteredChats.map((chat) => (
              <div key={chat.id}>
                <ChatRender chat={chat} />
              </div>
            ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Chats;
/**
 *
 */
