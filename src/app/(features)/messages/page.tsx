import React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Messages from "./components/messages";
export default function MessagesPage() {
  return (
    <div className="">
      <Messages isCollapsed={false} />
    </div>
  );
}
