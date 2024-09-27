import React from "react";
import getMessages from "@/app/(features)/messages/actions/get-messages";
import { MessageList } from "./message-list";
import { MessageDisplay } from "./message-display";
import getMessage from "@features/messages/actions/get-message";

export default async function Inbox({
  searchParams,
}: {
  searchParams: { messageId: string };
}) {
  const data = await getMessages();
  // get message with messageId
  const message = await getMessage(searchParams.messageId);
  return (
    <div className="flex w-full">
      <MessageList data={data} />
      <MessageDisplay message={message} />
    </div>
  );
}
