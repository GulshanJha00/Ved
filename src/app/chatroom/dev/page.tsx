"use client";

import React, { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import NotSigned from "@/app/NotSigned";
import Loading from "@/app/loading";
import { toast, ToastContainer } from "react-toastify";

// Define the shape of each chat message
interface ChatMessage {
  _id?: string; // MongoDB ID
  id?: string; 
  user: string;
  text: string;
  time: string;
}

// Define socket event types (for better IntelliSense)
interface ServerToClientEvents {
  receiveMessage: (data: ChatMessage) => void;
  previousMessages: (msgs: ChatMessage[]) => void; // <-- add this

}

interface ClientToServerEvents {
  joinRoom: (room: string) => void;
  sendMessage: (data: { room: string; message: string; user: string }) => void;
}

// Socket variable (typed)
let socket: Socket<ServerToClientEvents, ClientToServerEvents> | null = null;

const Page = () => {
  const room = "dev"
  const { user } = useUser();

  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  useEffect(() => {
    if (!socket) {
      socket = io(`${process.env.BACKEND_URI}`);

      socket.on("connect", () => {
        toast.success("Connection Created")
      });

      socket.on("receiveMessage", (data: ChatMessage) => {
        setMessages((prev) => [...prev, data]);
      });

      socket.on("previousMessages", (msgs: ChatMessage[]) => {
        setMessages(msgs);
      });
    }

    if (room && socket) {
      socket.emit("joinRoom", room);
    }

    return () => {
      socket?.off("receiveMessage");
      socket?.off("previousMessages");
    };
  }, [room]);


  const handleSendMessage = () => {
    if (!socket || !inputMessage.trim()) return;

    const msgData = {
      id: crypto.randomUUID(), // can omit if backend generates id
      user: user?.fullName || "Anonymous",
      text: inputMessage,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    // Send to backend
    socket.emit("sendMessage", { room, message: msgData.text, user: msgData.user });

    setInputMessage("");
  };

  // Handle Enter key
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSendMessage();
  };

  return (
    <>
      <SignedIn>
        {!messages ?
          <div className="h-screen w-full overflow-hidden">
            <Loading />
          </div>
          :

          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
            <div className="max-w-5xl mx-auto">
              <div className="bg-slate-800 border-2 border-purple-500 rounded-t-lg p-4 shadow-lg shadow-purple-500/20">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-mono">
                      {`<${room.toUpperCase()}_Chatroom />`}
                    </h1>
                    <p className="text-slate-400 text-sm mt-1 font-mono">{`//`} Real-time group chat</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 bg-slate-700 px-3 py-1 rounded-full">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-400 text-sm font-mono">Online</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat Body */}
              <div className="bg-slate-800/50 border-x-2 border-purple-500 backdrop-blur-sm">
                <div className="h-[500px] overflow-y-auto p-4 space-y-4 custom-scrollbar">
                  {messages.map((msg) => (
                    <div
                      key={msg._id || msg.id}
                      className={`flex ${msg.user === user?.fullName ? "justify-end" : "justify-start"
                        }`}
                    >
                      <div className="max-w-[70%]">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-purple-400 font-semibold text-sm font-mono">
                            {msg.user}
                          </span>
                          <span className="text-slate-500 text-xs font-mono">{msg.time}</span>
                        </div>
                        <div className="bg-slate-700 border border-slate-600 rounded-lg p-3 shadow-lg">
                          <p className="text-slate-200">{msg.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Input */}
                <div className="border-t-2 border-purple-500/30 p-4 bg-slate-800/80">
                  <div className="flex gap-3">
                    <input
                      type="text"
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyDown={handleKeyPress}
                      placeholder="Type your message..."
                      className="flex-1 bg-slate-700 border-2 border-slate-600 focus:border-purple-500 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-500 outline-none transition-all font-mono"
                    />
                    <button
                      onClick={handleSendMessage}
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 font-mono"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="bg-slate-800 border-2 border-t-0 border-purple-500 rounded-b-lg p-3 text-center text-slate-400 font-mono text-sm">
                Connected Room: {room}
              </div>
            </div>
            <ToastContainer />
          </div>
        }


        <style jsx>{`
          .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: #1e293b;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #8b5cf6;
            border-radius: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #a78bfa;
          }
        `}</style>
      </SignedIn>

      <SignedOut>
        {!messages ?
          <div className="h-screen w-full overflow-hidden">
            <Loading />
          </div>
          :
          <NotSigned />
        }
      </SignedOut>
    </>
  );
};

export default Page;
