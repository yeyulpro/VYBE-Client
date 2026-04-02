// React Components  >  Chat Components > Chat message (User input + AI response);Individual AI/User message bubble
import React from "react";
import { Sparkles } from "lucide-react";

const ChatMessage = ({ message, role = "assistant", highlight = "" }) => {
  const isUser = role === "user";
  if (!message) return null;

  if (isUser) {
    return (
      <div className="flex justify-end">
        <div className="max-w-[70%] rounded-2xl bg-violet-600 px-4 py-2 text-sm text-white">
          {message}
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-black/30 p-3">
      <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet-500/15">
        <Sparkles className="h-4 w-4 text-violet-300" />
      </span>
      <p className="text-sm text-zinc-200">
        {highlight ? <span className="text-violet-300">{highlight}</span> : null}
        {highlight ? " " : null}
        {message}
      </p>
    </div>
  );
};
export default ChatMessage;
