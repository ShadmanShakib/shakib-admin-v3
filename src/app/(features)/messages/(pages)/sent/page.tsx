import React from "react";
import { getSendMessages } from "../../actions/get-send-messages";
import SendMessageList from "./components/send-message-list";
import { MessageDisplay } from "../inbox/message-display";
import getMessage from "@features/messages/actions/get-message";
import { getLocale } from "next-intl/server";
export default async function Sent({
  searchParams,
}: {
  searchParams: { messageId: string };
}) {
  const messages = await getSendMessages();
  const message = await getMessage(searchParams.messageId || messages[0].id);
  const locale = await getLocale();
  return (
    <div className="flex w-full">
      <SendMessageList messages={messages} />
      <MessageDisplay message={message} locale={locale} />
    </div>
  );
}
