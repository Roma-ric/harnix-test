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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Building2, LogOut } from "lucide-react";

const ProfileSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Avatar className=" sm:w-12 sm:h-12  w-10 h-10 cursor-pointer">
          <AvatarImage src="https://lh3.googleusercontent.com/a/ACg8ocL9Rnmlx4OZ-YoremGGwU698V0Bx1rAJWoeCnebSvAuQ1lRxpQ=s288-c-no" />
          <AvatarFallback>AR</AvatarFallback>
        </Avatar>
      </SheetTrigger>
      <SheetContent className="w-full! xs:max-w-sm bg-pulsai-gray-dark text-white xs:text-black border-none xs:border xs:bg-white">
        <SheetHeader className="border-b">
          {/* User Info */}
          <div className="flex items-center space-x-3 w-full">
            <Avatar size="lg">
              <AvatarImage src="https://lh3.googleusercontent.com/a/ACg8ocL9Rnmlx4OZ-YoremGGwU698V0Bx1rAJWoeCnebSvAuQ1lRxpQ=s288-c-no" />
              <AvatarFallback>AR</AvatarFallback>
            </Avatar>
            <div className="max-w-[75%] overflow-hidden text-sm">
              <div className="font-semibold truncate"> Romaric AKODJENOU </div>
              <div className="truncate">romaricakodjenou54@gmail.com</div>
            </div>
          </div>
        </SheetHeader>
        <div className="px-3 text-white xs:text-black ">
          <SheetTitle className="flex items-center space-x-2 text-white xs:text-black!">
            {/* Entreprise / Organisation */}
            <Select defaultValue="geek-house">
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="geek-house">
                  <Building2 className="text-pulsai-primary" />{" "}
                  <span>Geek House Org</span>
                </SelectItem>
              </SelectContent>
            </Select>
          </SheetTitle>
        </div>
        <SheetFooter>
          <Button variant={"secondary"} className="border w-full text-red-500">
            <LogOut /> Se déconnecter
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default ProfileSheet;
