import React from "react";
import getMessages from "@/app/(features)/messages/actions/get-messages";
import { MessageList } from "./message-list";
import { MessageDisplay } from "./message-display";

export default async function Inbox() {
  const data = await getMessages();
  return (
    <div className="flex w-full">
      <MessageList data={data} />
      <MessageDisplay mail={data} />
    </div>
  );
}
