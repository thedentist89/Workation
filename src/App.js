import React from "react";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import Main from "./components/layout/Main";
import "./styles/index.css";

function App() {
  return (
    <div className="bg-gray-200 antialiased">
      <Header />
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
