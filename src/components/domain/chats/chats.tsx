import { Search } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useMemo, useState } from "react";
import { chats } from "@/utils/chats-utils";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { getInitials, getTimeAgo } from "@/utils/utils";
import Link from "next/link";

const Chats = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredChats = useMemo(() => {
    if (!searchTerm.trim()) return chats;

    return chats.filter((chat) =>
      chat.customer.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [searchTerm, chats]);

  return (
    <div className="relative min-h-full! max-h-full! w-90 border-r p-5 overflow-y-auto hide-scrollbar bg-white">
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
          className="block min-w-0 grow rounded-r-lg py-2 pr-3 pl-2 text-base text-foreground placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
        />
      </div>

      <Tabs
        defaultValue="all"
        className="w-full mt-5 space-y-4 flex-1 overflow-y-auto"
      >
        <TabsList className="overflow-x-auto w-full h-10! hide-scrollbar border">
          {["Toutes", "Non lues", "En attente"].map((label, i) => (
            <TabsTrigger
              key={i}
              value={["all", "unread", "pending"][i]}
              className="text-xs data-[state=active]:font-semibold rounded!"
            >
              {label}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="all" className="divide-y overflow-y-auto">
          {filteredChats.map((chat) => (
            <div key={chat.id}>
              <Link href={`/chats/${chat.id}`}>
                <div className="flex items-center cursor-pointer space-x-3 w-full py-4 hover:bg-white">
                  <Avatar size="lg" className="border">
                    <AvatarImage src="" />
                    <AvatarFallback>
                      {getInitials(chat.customer)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="max-w-full w-full overflow-hidden text-sm">
                    <div className="flex w-full items-center space-x-2 justify-between">
                      <div className="font-medium truncate">
                        {chat.customer}
                      </div>
                      <div className="text-xs min-w-10 truncate text-gray-500">
                        {getTimeAgo(chat.lastMessageAt)}
                      </div>
                    </div>
                    <div className="truncate text-gray-500 text-xs">
                      {chat.lastMessageText}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </TabsContent>
        <TabsContent value="unread"></TabsContent>
        <TabsContent value="pending"></TabsContent>
      </Tabs>
    </div>
  );
};

export default Chats;
/**
 *
 */
