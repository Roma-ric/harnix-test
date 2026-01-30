import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Building2, LogOut } from "lucide-react";

const ProfileCard = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Avatar className="w-12 h-12 cursor-pointer">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>AR</AvatarFallback>
        </Avatar>
      </SheetTrigger>
      <SheetContent className="">
        <SheetHeader className="border-b">
          <SheetTitle className="flex items-center space-x-2">
            <Building2 className="text-pulsai-primary" />{" "}
            <span>Geek House Org</span>
          </SheetTitle>
          <SheetDescription>
            Lorem ipsum, dolor sit amet consectetur elit.
          </SheetDescription>
        </SheetHeader>
        <SheetDescription className="px-3">
          <div className="flex items-center space-x-3">
            <Avatar size="lg">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>AR</AvatarFallback>
            </Avatar>
            <div className="text-black max-w-full text-sm overflow-hidden">
              <span className="font-semibold"> Romaric AKODJENOU </span>
              <br />
              <span className="truncate">romaricakodjenou54@gmail.com</span>
            </div>
          </div>
        </SheetDescription>
        <SheetFooter>
          <Button variant={"ghost"} className="border w-full text-red-500">
            <LogOut /> Se déconnecter
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default ProfileCard;
