import { useRef } from 'react';

const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {

    const inputRef = useRef();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const userMessage = inputRef.current.value.trim();
        if(!userMessage) return;
        inputRef.current.value = "";

        // 更新聊天历史
        setChatHistory((history) => [
            ...history,
            { role: 'user', content: userMessage }
        ]);

        // 模拟模型思考
        setTimeout(() => {
            setChatHistory((history) => [
            ...history,
            { role: 'model', content: 'Thinking...' }
            ]);

            // 生成模型回复
        generateBotResponse([...chatHistory, { role: 'user', content: userMessage }]);
        
        }, 600);
        
        
    };

    return (
        <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
        <input ref={inputRef} type="text" placeholder="Message..."className="message-input" required />
      <button className="material-symbols-outlined">arrow_upward</button>
      </form>
    )
}

export default ChatForm;