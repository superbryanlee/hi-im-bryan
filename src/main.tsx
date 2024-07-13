import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename='/hi-im-bryan/'>
      <Routes>
        <Route path='*' element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
