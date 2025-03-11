# AI-Chatbot

<div align="center">
  <img src="public/purple-chat-logo.png" alt="AI-Chatbot Logo" width="150" />
  <p>一个基于Gemini API的智能聊天助手，优雅的紫色界面让每次对话都充满愉悦。</p>
</div>

## ✨ 特色功能

- 🧠 **智能对话**：基于Google Gemini API，提供智能、自然的对话体验
- 💜 **优雅界面**：精心设计的紫色主题UI，视觉体验舒适
- 🚀 **响应迅速**：快速的消息响应，流畅的用户体验
- 📱 **响应式设计**：完美适配各种设备屏幕
- 🔄 **实时反馈**：输入时的"思考中"状态提示

## 🛠️ 技术栈

- **前端框架**：React + Vite
- **样式**：纯CSS，无需额外框架
- **图标**：Google Material Icons
- **AI能力**：Google Gemini API

## 🚀 快速开始

### 前提条件

- Node.js (v14.0.0+)
- Gemini API 密钥

### 安装步骤

1. 克隆仓库
   ```bash
   git clone https://github.com/Marshmallowc/AI-Chatbot.git
   cd AI-Chatbot
   ```

2. 安装依赖
   ```bash
   npm install
   ```

3. 创建环境变量文件
   ```bash
   # 创建.env文件并添加你的Gemini API密钥
   echo "VITE_API_URL=https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro:generateContent?key=YOUR_API_KEY" > .env
   ```

4. 启动开发服务器
   ```bash
   npm run dev
   ```

## 📸 界面预览

<div align="center">
  <img src="public/screenshot-closed.png" alt="聊天界面关闭状态" width="400" />
  <img src="public/screenshot-open.png" alt="聊天界面打开状态" width="400" />
</div>

## 💡 使用提示

- 点击右下角的聊天图标打开对话窗口
- 输入您的问题并按发送按钮或回车键
- 等待AI思考并回复（会显示"Thinking..."状态）
- 点击关闭按钮可以隐藏聊天窗口

## 🤔 常见问题

**Q: 为什么我需要自己的API密钥？**  
A: 出于安全考虑，我们不提供API密钥。您需要从Google获取自己的Gemini API密钥。

**Q: 聊天记录会保存吗？**  
A: 目前版本不保存聊天记录，刷新页面后对话将重置。

## 🔮 未来计划

- [ ] 添加聊天历史保存功能
- [ ] 支持多种语言
- [ ] 添加深色模式
- [ ] 支持语音输入
- [ ] 添加更多自定义选项

## 📄 许可证

本项目采用 MIT 许可证 - 详情请查看 [LICENSE](LICENSE) 文件

## 🙏 致谢

- Google Gemini API 提供强大的AI能力
- 所有为本项目做出贡献的开发者

---

<div align="center">
  <p>用智慧点亮对话，用紫色装点思考 💜</p>
  <p>Made with ❤️ by [Your Name]</p>
</div>
