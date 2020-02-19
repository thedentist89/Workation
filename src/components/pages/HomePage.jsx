import React from "react";
import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";
import Main from "../layout/Main";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-200 antialiased xl:flex xl:flex-col xl:h-screen">
      <Header />
      <div className="xl:flex xl:flex-1 xl:overflow-y-hidden">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
};

export default HomePage;
