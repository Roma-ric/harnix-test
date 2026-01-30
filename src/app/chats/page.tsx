import { MessageCircleMore } from "lucide-react";

const ChatsPage = () => {
  return (
    <div className="min-h-full! max-h-full! min-w-full! flex justify-center items-center">
      <div className="flex flex-col text-gray-500 justify-center items-center">
        <MessageCircleMore className="size-20 stroke-1" />
        <p className="mt-5"> Appuyer pour ouvrir une discussion</p>
      </div>
    </div>
  );
};

export default ChatsPage;
