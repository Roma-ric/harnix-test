"use client";

import Chats from "@/components/domain/chats/chats";
import { MessageCircleMore } from "lucide-react";

const ChatsPage = () => {
  return (
    <div className="flex min-h-full! max-h-full! relative overflow-hidden">
      <Chats className="flex flex-col lg:hidden w-90 border-r-0" />
      <div className="flex mx-auto lg:min-w-full! justify-center items-center">
        <div className="flex flex-col text-gray-500 justify-center items-center">
          <MessageCircleMore className="size-20 stroke-1" />
          <p className="mt-5 text-center px-5">
            {" "}
            Appuyer pour ouvrir une discussion
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatsPage;
