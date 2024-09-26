import React from "react";
import getMessages from "@/app/(features)/messages/actions/get-messages";
import { MessageList } from "./message-list";
import { MessageDisplay } from "./message-display";

export default async function Inbox({
  searchParams,
}: {
  searchParams: { messageId: string };
}) {
  const data = await getMessages();
  // get message with id= messageId
  const message = data.find((item) => item.id === searchParams.messageId);
  return (
    <div className="flex w-full">
      <MessageList data={data} />
      <MessageDisplay message={message} messageId={searchParams.messageId} />
    </div>
  );
}
