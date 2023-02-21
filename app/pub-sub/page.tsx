"use client";

import { MouseEventHandler, MouseEvent, useEffect, useState } from "react";

import * as Ably from "ably/promises";
import { configureAbly } from "@ably-labs/react-hooks";

import Logger, { LogEntry } from "../../components/Logger";

export default function PubSub() {
  const [logs, setLogs] = useState<Array<LogEntry>>([]);
  const [channel, setChannel] =
    useState<Ably.Types.RealtimeChannelPromise | null>(null);
  const [messageText, setMessageText] = useState<string>("A message");

  useEffect(() => {
    const ably: Ably.Types.RealtimePromise = configureAbly({
      authUrl: "/api/authentication/token-auth",
    });

    ably.connection.on((stateChange: Ably.Types.ConnectionStateChange) => {
      console.log(stateChange);
    });

    const _channel = ably.channels.get("status-updates");
    _channel.subscribe((message: Ably.Types.Message) => {
      setLogs((prev) => [
        ...prev,
        new LogEntry(
          `✉️ event name: ${message.name} text: ${message.data.text}`,
        ),
      ]);
    });
    setChannel(_channel);

    return () => {
      _channel.unsubscribe();
    };
  }, []); // Only run the client

  const publicFromClientHandler: MouseEventHandler = (
    _event: MouseEvent<HTMLButtonElement>,
  ) => {
    if (channel === null) return;

    channel.publish("update-from-client", {
      text: `${messageText} @ ${new Date().toISOString()}`,
    });
  };

  const publicFromServerHandler: MouseEventHandler = (
    _event: MouseEvent<HTMLButtonElement>,
  ) => {
    fetch("/api/pub-sub/publish", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        text: `${messageText} @ ${new Date().toISOString()}`,
      }),
    });
  };

  return (
    <>
      <p>
        Publish messages on channels and subscribe to channels to receive
        messages. Click the <b>Public from the client</b> to publish a message
        on a channel from the web browser client. Click the{" "}
        <b>Public from the server</b> to publish a message from a serverless
        function.
      </p>

      <section>
        <h3>Publish</h3>
        <div>
          <label htmlFor="message">Message text</label>
          <input
            type="text"
            placeholder="message to publish"
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
          />
        </div>
        <div>
          <button onClick={publicFromClientHandler}>Publish from client</button>
          <button onClick={publicFromServerHandler}>Publish from server</button>
        </div>
      </section>

      <section>
        <h3>Subscribe</h3>
        <Logger logEntries={logs} />
      </section>
    </>
  );
}