"use client";

import { MouseEventHandler, MouseEvent, useState, useEffect } from "react";

import Logger, { LogEntry } from "../../components/Logger";

import * as Ably from "ably/promises";
import { assertConfiguration, configureAbly } from "@ably-labs/react-hooks";

export default function Authentication() {
  const [logs, setLogs] = useState<Array<LogEntry>>([]);
  const [connectionState, setConnectionState] = useState("unknown");

  useEffect(() => {
    const handleConnectionStateChange = (
      stateChange: Ably.Types.ConnectionStateChange,
    ) => {
      setLogs((prev) => [
        ...prev,
        new LogEntry(
          `Connection state change: ${stateChange.previous} -> ${stateChange.current}`,
        ),
      ]);

      setConnectionState(stateChange.current);
    };

    const ably: Ably.Types.RealtimePromise = configureAbly({
      authUrl: "/api/authentication/token-auth",
    });
    ably.connection.on(handleConnectionStateChange);

    return () => {
      ably.connection.off();
    };
  }, []); // Only run the client

  const connectionToggle: MouseEventHandler = (
    _event: MouseEvent<HTMLButtonElement>,
  ) => {
    const ably = assertConfiguration();

    if (connectionState === "connected") {
      ably.connection.close();
    } else if (connectionState === "closed") {
      ably.connection.connect();
    }
  };

  return (
    <>
      <p>
        Authenticate and establish a persistent bi-direction connection to the
        Ably platform.
      </p>

      <section>
        <h3 className="text-3x mt-4 font-bold underline">
          Connection status: <span>{connectionState}</span>
        </h3>

        <div>
          <button
            onClick={connectionToggle}
            className="mt-4 px-3 py-3 text-indigo-600 bg-indigo-50 rounded-lg duration-150 hover:bg-indigo-100 active:bg-indigo-200"
          >
            {connectionState === "connected" ? "Disconnect" : "Connect"}
          </button>
        </div>

        <Logger logEntries={logs} />
      </section>
    </>
  );
}
