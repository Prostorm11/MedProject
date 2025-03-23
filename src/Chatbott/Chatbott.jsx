import React, { useState, useRef, useEffect } from "react";
import { sendMessageToGroq } from "./Ai";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./Chatbott.css"; // Import the CSS file

function ChatBott() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.trim() === "") return;

    const userMessage = { text: input, sender: "user", timestamp: new Date() };
    setMessages([...messages, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await sendMessageToGroq(input);
      const aiMessage = { text: response, sender: "ai", timestamp: new Date() };
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    } catch (error) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Error processing request.", sender: "ai", timestamp: new Date() }
      ]);
      console.error("Chat error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([]);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="chat-container">
      <header className="chat-header">
        <h1>🤖 Chatbot</h1>
        <button onClick={clearChat} className="clear-chat">Clear Chat</button>
      </header>

      <div className="chat-messages">
        {messages.length === 0 ? (
          <div className="empty-chat">Start a conversation with the AI</div>
        ) : (
          messages.map((message, index) => (
            <div key={index} className={`chat-message ${message.sender}`}>
              <div className="message-header">
                <span className="sender-name">{message.sender === "user" ? "You" : "AI"}</span>
                <span className="message-time">{formatTime(message.timestamp)}</span>
              </div>
              {message.sender === "user" ? (
                <p className="message-text">{message.text}</p>
              ) : (
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    code({ inline, className, children, ...props }) {
                      const match = /language-(\w+)/.exec(className || "");
                      return !inline && match ? (
                        <SyntaxHighlighter style={solarizedlight} language={match[1]} {...props}>
                          {String(children).replace(/\n$/, "")}
                        </SyntaxHighlighter>
                      ) : (
                        <code className={className} {...props}>
                          {children}
                        </code>
                      );
                    },
                  }}
                >
                  {message.text}
                </ReactMarkdown>
              )}
            </div>
          ))
        )}
        {isLoading && <div className="loading">AI is thinking...</div>}
        <div ref={messagesEndRef} />
      </div>

      <div className="chat-input">
        <form onSubmit={handleSubmit} className="input-form">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            disabled={isLoading}
          />
          <button type="submit" disabled={isLoading || input.trim() === ""}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatBott;
