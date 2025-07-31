import { useState } from "react";

export default function ChatBox({ onClose }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMsg = { role: "user", content: input };
    setMessages([...messages, newMsg]); 

    const res = await fetch("https://ai-bot-backend-xpb3.onrender.com/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input, history: messages }),
    });  

    const data = await res.json();
    setMessages([...messages, newMsg, { role: "bot", content: data.reply }]);
    setInput("");   
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg w-[400px] h-[500px] flex flex-col">

        
        {/* Header */}
        <div className="bg-orange-500 text-white p-3 rounded-t-2xl flex justify-between">
          <span>Chat with Me 🤖</span>
          <button onClick={onClose}>✖</button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-3 space-y-2">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`p-2 rounded-lg max-w-[80%] ${
                msg.role === "user"
                  ? "bg-orange-400 self-end ml-auto"
                  : "bg-gray-400 self-start"
              }`}
            >
              {msg.content}
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="bg-white p-3 flex gap-2">
          <input
            className="border outline outline-2 outline-orange-500 text-black rounded-xl flex-1 p-2"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
          />
          <button
            onClick={sendMessage}
            className="bg-orange-500 text-white px-4 rounded-lg"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
