import ChatbotIcon from "./components/ChatbotIcon";
import ChatForm from "./components/ChatForm";
import ChatMessage from "./components/ChatMessage";
import { useState, useRef, useEffect } from "react";

const App = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [showChatbot, setShowChatbot] = useState(false);
  const chatBodyRef = useRef();

  const generateBotResponse = async (history) => {
    // 从聊天历史中提取用户最后一条消息
    const lastUserMessage = history.filter(msg => msg.role === 'user').pop()?.content || '';
    
    // 根据Gemini API文档格式化请求
    const formattedRequest = {
      contents: [{
        parts: [{text: lastUserMessage}]
      }]
    };

    console.log("Formatted Request:", formattedRequest);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formattedRequest)
    }

    try {
      const response = await fetch(import.meta.env.VITE_API_URL, requestOptions);
      const data = await response.json();
      if(!response.ok) {
        throw new Error(data.error.message || "Failed to generate response");
      };
      console.log("API Response:", data);
      
      // 从API响应中提取机器人回复
      if (data.candidates && data.candidates[0] && data.candidates[0].content) {
        const botResponse = data.candidates[0].content.parts[0].text;
        
        // 更新聊天历史，替换"Thinking..."为实际回复
        setChatHistory(currentHistory => {
          // 创建一个新的历史记录数组
          const newHistory = [...currentHistory];
          // 找到并替换最后一个model消息（应该是"Thinking..."）
          for (let i = newHistory.length - 1; i >= 0; i--) {
            if (newHistory[i].role === 'model') {
              newHistory[i] = { role: 'model', content: botResponse };
              break;
            }
          }
          return newHistory;
        });
      }
    } catch (error) {
      console.error("Error:", error);
      
      // 错误处理：替换"Thinking..."为错误消息
      setChatHistory(currentHistory => {
        const newHistory = [...currentHistory];
        for (let i = newHistory.length - 1; i >= 0; i--) {
          if (newHistory[i].role === 'model') {
            newHistory[i] = { role: 'model', content: "抱歉，我遇到了问题。请稍后再试。" };
            break;
          }
        }
        return newHistory;
      });
    }
  };

useEffect(() => {
  // 自动滚动到底部
  chatBodyRef.current.scrollTo({ top: chatBodyRef.current.scrollHeight, behavior: "smooth" });
}, [chatHistory]);

  return (
    <div className={`container ${showChatbot ? 'show-chatbot' : ""}`}>
      <button onClick={() => setShowChatbot((prev) => !prev)} id="chatbot-toggler">
        <span className="material-symbols-outlined">mode_comment</span>
        <span className="material-symbols-outlined">close</span>
      </button>
      <div className="chatbot-popup">
        
        {/* Chatbot Header */}
        <div className="chat-header">
          <div className="header-info">
            <ChatbotIcon />
            <h2 className="logo-text">Chatbot</h2>
          </div>
          <button className="material-symbols-outlined">
            keyboard_arrow_down
          </button>
        </div>

        {/* Chatbot Body */}
        <div ref={chatBodyRef} className="chat-body">
          <div className="message bot-message">
            <ChatbotIcon />
            <p className="message-text">
              Hey there <br /> How can I help you today?
            </p>
          </div>
          
          {chatHistory.map((chat, index) => (
            <ChatMessage key={index} chat={chat} />
          ))}

          
        </div>

        {/* Chatbot Footer */}
        <div className="chat-footer">
          <ChatForm chatHistory={chatHistory} setChatHistory={setChatHistory} generateBotResponse={generateBotResponse} />
        </div>

      </div>
    </div>
  );
};

export default App;