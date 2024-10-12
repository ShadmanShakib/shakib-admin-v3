import React from "react";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type Props = {
  notifications?: any[];
};

export default function Notifications({ notifications }: Props) {
  return (
    <div className="relative">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="icon" className="h-8 w-8">
            <Bell className="h-4 w-4" />

            <span className="sr-only">Toggle notifications</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent side="bottom" className="w-80">
          <div className="">
            {!notifications ? (
              <div className="text-center dark:text-gray-300">
                No notifications
              </div>
            ) : (
              <div className=""></div>
            )}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
