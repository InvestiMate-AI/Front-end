import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/global.style";
import { ThemeProvider } from "styled-components";
import themes from "./styles/theme";

import Home from "./pages/HomePage";
import Chat from "./pages/ChatPage";
import Auth from "./pages/AuthPage";
import ChatRoom from "./pages/ChatRoomPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={themes}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/chat/:chatRoomId" element={<ChatRoom />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
