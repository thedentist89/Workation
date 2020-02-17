import React from "react";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import Main from "./components/layout/Main";
import "./styles/index.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-200 antialiased xl:flex xl:flex-col xl:h-screen">
      <Header />
      <div className="xl:flex xl:flex-1 xl:overflow-y-hidden">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default App;
