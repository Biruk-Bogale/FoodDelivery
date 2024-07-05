import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const MobileNav = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Menu className="text-oranhe-500" />
        </SheetTrigger>

        <SheetContent className="space-y-3">
          <SheetTitle>
            <span>Welcoome to MernEats.com</span>
          </SheetTitle>
          <Separator />

          <SheetDescription className="flex">
            <Button className="flex-1 font-bold bg-orange-500">Log In</Button>
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
