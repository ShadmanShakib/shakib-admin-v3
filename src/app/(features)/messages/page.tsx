import React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ChatLayout } from "./components/chat-layout";
import { ChatMessageList } from "@/components/ui/chat/chat-message-list";
import { ChatList } from "./components/chat-list";
export default function MessagesPage() {
  return (
    <div className="">
      <ChatLayout defaultLayout={[320, 480]} navCollapsedSize={8} />
    </div>
  );
}
