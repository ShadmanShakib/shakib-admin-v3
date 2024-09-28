"use client";
import React from "react";
import { useTranslations } from "next-intl";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { X, Trash2 } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Button } from "@/components/ui/button";
interface Props {
  disabled: boolean;
  onDelete: any;
}

export default function ConfirmDialog({ disabled, onDelete }: Props) {
  const [isOpen, setOpen] = React.useState(false);
  const t = useTranslations("");
  const handleDelete = async () => {
    await onDelete();
    setOpen(false);
  };
  return (
    <Dialog onOpenChange={setOpen} open={isOpen}>
      <DialogTrigger asChild>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              onClick={() => setOpen(true)}
              variant="ghost"
              size="icon"
              disabled={disabled}
            >
              <Trash2 className="h-4 w-4" />
              <span className="sr-only">Move to trash</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Move to trash</TooltipContent>
        </Tooltip>
      </DialogTrigger>
      <DialogContent>
        <div className="">
          <h1>{t("Common.confirm_dialog")}</h1>
          <div className="flex items-center gap-5 mt-6">
            <DialogClose asChild>
              <Button>
                <X />
              </Button>
            </DialogClose>
            <Button onClick={handleDelete}>
              <Trash2 className="text-red-500" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
