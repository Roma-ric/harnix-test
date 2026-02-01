import { Card } from "@/components/ui/card";
import { chats, ChatType } from "@/utils/chats-utils";
import { formatDateTime, getInitials } from "@/utils/utils";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Bot,
  MessageCircleX,
  Paperclip,
  Pencil,
  SendHorizonal,
  SquareUser,
  Trash2Icon,
  Undo2,
} from "lucide-react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import Link from "next/link";
import ChatOptions from "@/components/domain/chats/chat-options";

export default async function ChatsDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const chat = chats.find((chat) => chat.id === id) as ChatType;

  // Fonction pour grouper les messages par date
  const groupMessagesByDate = (messages: typeof chat.messages) => {
    const groups: { [key: string]: typeof messages } = {};

    messages.forEach((message) => {
      const dateKey = formatDateTime(message.createdAt).date;
      if (!groups[dateKey]) {
        groups[dateKey] = [];
      }
      groups[dateKey].push(message);
    });

    return groups;
  };

  const messagesByDate = chat ? groupMessagesByDate(chat.messages) : {};

  return (
    <>
      {chat ? (
        <div className="min-h-full! max-h-full! min-w-full! relative">
          {/* Chat Header */}
          <Card className="top-0 sticky z-30 shadow-none flex  flex-row! items-center justify-between space-x-5 border-t-0 border-x-0 border-b rounded-none p-5 py-0 bg-white">
            <div className="flex items-center cursor-pointer space-x-3 py-3.5 hover:bg-white">
              <Avatar size="lg" className="border">
                <AvatarImage src="" />
                <AvatarFallback>{getInitials(chat?.customer)}</AvatarFallback>
              </Avatar>
              <div className="w-full overflow-hidden text-sm flex flex-col items-start space-x-2 justify-between">
                <div className="font-medium truncate">{chat?.customer}</div>
                <div className="truncate text-gray-500 text-xs max-w-40">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <ChatOptions />
              <Link href={"/chats"} className="cursor-pointer">
                <Button
                  variant={"secondary"}
                  title="Retour"
                  className="rounded-full cursor-pointer w-10 h-10 flex justify-center items-center border"
                >
                  <Undo2 />
                </Button>
              </Link>
              
            </div>
          </Card>
          
          {/* Chat Body */}
          <div className="flex flex-col text-sm space-y-5 p-5 pb-70 overflow-y-auto scrollbar-lock-hide h-[calc(100vh-80px)]">
            {Object.entries(messagesByDate).map(([date, messages]) => (
              <div key={date}>
                {/* Séparateur de date */}
                <div className="sticky top-0 flex items-center justify-center my-4">
                  <div className="bg-gray-200 text-gray-600 text-xs px-3 py-1 rounded-full">
                    {date}
                  </div>
                </div>

                {/* Messages */}
                {messages.map((message) => {
                  if (message.sender === "customer") {
                    return (
                      // Messages du client
                      <div key={message.id} className="w-full mb-4">
                        <div className="max-w-full xs:max-w-[90%] xl:max-w-[85%] 2xl:max-w-2xl flex items-end space-x-3">
                          <Avatar size="lg" className="border z-10">
                            <AvatarImage src="" />
                            <AvatarFallback>
                              {getInitials(chat?.customer)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1 max-w-max rounded-t-lg bg-pulsai-secondary/50 wrap-break-word text-black p-3">
                            {message.content}
                            <div className="text-gray-500 -mb-1.5 text-end text-xs mt-1">
                              {formatDateTime(message.createdAt).time}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      // Message de l'IA ou de l'Agent
                      <div
                        key={message.id}
                        className="w-full flex justify-end mb-3"
                      >
                        <ContextMenu>
                          <ContextMenuTrigger asChild>
                            <div className="max-w-full cursor-context-menu xs:max-w-[90%] xl:max-w-[85%] 2xl:max-w-2xl flex items-end space-x-3">
                              <div
                                className={`flex-1 max-w-max rounded-t-lg ${message.sender === "ai" ? "bg-pulsai-primary/50 text-black" : "bg-pulsai-gray-dark text-white"} wrap-break-word  p-3`}
                              >
                                {message.content}
                                <div className="text-gray-500 -mb-1.5 text-end text-xs mt-1">
                                  {formatDateTime(message.createdAt).time}
                                </div>
                              </div>
                              <Button
                                variant={"secondary"}
                                title={message.sender === "ai" ? "IA" : "Agent"}
                                className="border h-10 w-10 flex justify-center items-center"
                              >
                                {message.sender === "ai" ? (
                                  <Bot className="size-6" />
                                ) : (
                                  <SquareUser className="size-6" />
                                )}
                              </Button>
                            </div>
                          </ContextMenuTrigger>
                          <ContextMenuContent className="divide-y">
                            <ContextMenuItem>
                              <Pencil /> Modifier
                            </ContextMenuItem>
                            <ContextMenuItem variant="destructive">
                              <Trash2Icon /> Supprimer
                            </ContextMenuItem>
                          </ContextMenuContent>
                        </ContextMenu>
                      </div>
                    );
                  }
                })}
              </div>
            ))}
          </div>

          {/* Chat Footer */}
          <Card className="absolute bottom-0 w-full z-50 border-0 border-t px-5 py-3 shadow-none rounded-none">
            <div className="flex items-center bg-pulsai-gray-light rounded-lg pl-3 outline-1 -outline-offset-1 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-pulsai-primary">
              <div className="shrink-0 cursor-pointer p-1 rounded text-base text-pulsai-primary hover:text-pulsai-primary/90 select-none sm:text-sm/6">
                <Paperclip className="" />
              </div>
              <textarea
                id="price"
                name="price"
                placeholder="Envoyer un message..."
                className="block resize-none min-w-0 grow rounded-r-lg py-2 pr-3 pl-2 text-foreground placeholder:text-gray-500 focus:outline-none text-sm/6"
              />
              <div className="grid shrink-0 grid-cols-1 py-1.5 pr-3 pl-3 focus-within:relative">
                <Button className="cursor-pointer bg-pulsai-primary">
                  <SendHorizonal />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      ) : (
        // Chat don't exist
        <div className="flex mx-auto min-h-full! justify-center items-center">
          <div className="flex flex-col text-gray-500 justify-center items-center">
            <MessageCircleX className="size-20 stroke-1" />
            <p className="mt-5 text-center px-5">
              Cette conversation n'existe pas
            </p>
            <Link href={"/chats"} className="cursor-pointer mt-5 bo lg:hidden">
              <Button
                variant={"secondary"}
                className="cursor-pointer flex justify-center items-center border"
              >
                Retour
              </Button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
