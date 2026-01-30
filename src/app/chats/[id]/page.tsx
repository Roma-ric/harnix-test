import { Card } from "@/components/ui/card";
import { chats } from "@/utils/chats-utils";
import { getInitials, getTimeAgo } from "@/utils/utils";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { EllipsisVertical, Undo2 } from "lucide-react";
import Link from "next/link";

export default async function ChatsDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const chat = chats.find((chat) => chat.id === id);

  return (
    <div className="min-h-full! max-h-full! min-w-full!">
      <Card className="shadow-none flex  flex-row! items-center justify-between space-x-5 border-t-0 border-x-0 border-b rounded-none p-5 py-0 bg-white">
        <div className="max-w-full flex items-center cursor-pointer space-x-3 py-3.5 hover:bg-white">
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
          <Link href={"/chats"} className="cursor-pointer">
            <Button
              variant={"secondary"}
              className="rounded-full w-10 h-10 flex justify-center items-center border"
            >
              <Undo2 />
            </Button>
          </Link>
          <Button
            variant={"secondary"}
            className="rounded-full cursor-pointer w-10 h-10 flex justify-center items-center border"
          >
            <EllipsisVertical />
          </Button>
        </div>
      </Card>
    </div>
  );
}
