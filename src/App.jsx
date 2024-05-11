import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/global-style.style";
import { ThemeProvider } from "styled-components";
import themes from "./styles/theme";

import Home from "./pages/Home";
import Chats from "./pages/Chats";
import Auth from "./pages/Auth";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={themes}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chats" element={<Chats />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
