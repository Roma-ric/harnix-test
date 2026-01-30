import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Bell, BellOff } from "lucide-react";

const Notifications = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant={"secondary"} className="border rounded-full w-12 h-12">
          <Bell className="size-5 strok" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        className="space-y-2 mt-2 flex flex-col bg-pulsai-gray-dark border-none text-white justify-center items-center h-50 rounded-4xl"
      >
        <div className="text-center flex flex-col items-center justify-center">
          <BellOff className="size-5 mb-2" />
          <span> Aucune notification disponible </span>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default Notifications;
