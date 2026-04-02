// React Components  >  Chat Components > Chat input (User message input);Text input + send button;Bottom input with sparkles icon

import React from "react";
import { Send } from "lucide-react";

const ChatInput = ({ value, onChange, onSend, placeholder }) => {
  return (
    <div className="space-y-3">
      <div className="rounded-xl border border-white/10 bg-black/35 p-2">
        <input
          value={value}
          onChange={onChange}
          placeholder={placeholder ?? "Ask about the menu, reviews, anything..."}
          className="w-full bg-transparent px-2 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none"
        />
      </div>
      <div className="flex justify-end">
        <button
          type="button"
          onClick={onSend}
          className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-violet-500"
        >
          Send
          <Send className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;