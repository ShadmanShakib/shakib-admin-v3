import React from "react";
import getMessages from "@/app/(features)/messages/actions/get-messages";
import { MessageList } from "./message-list";
import { MessageDisplay } from "./message-display";
import getMessage from "@features/messages/actions/get-message";
import { getLocale } from "next-intl/server";

export default async function Inbox({
  searchParams,
}: {
  searchParams: { messageId: string };
}) {
  const data = await getMessages();
  const locale = await getLocale();
  // get message with messageId
  const id = searchParams.messageId || data[0].id;
  const message = await getMessage(id);
  return (
    <div className="flex w-full">
      <MessageList data={data} />
      <MessageDisplay message={message} locale={locale} />
    </div>
  );
}
