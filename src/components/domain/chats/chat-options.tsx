import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical } from "lucide-react";

const ChatOptions = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={"secondary"}
          title="Options"
          className="rounded-full cursor-pointer w-10 h-10 flex justify-center items-center border"
        >
          <EllipsisVertical />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>Créer un ticket</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ChatOptions;
