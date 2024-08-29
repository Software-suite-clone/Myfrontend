import React, { useState } from "react";
import Sidebar from "../Navbar/Sidebar";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Cards from "../Card/Cards";
import ClassPage from "../classpage/ClassPage";

function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showClassPage, setShowClassPage] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const openClassPage = () => {
    setShowClassPage(true);
  };

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={`content ${isSidebarOpen ? "shifted" : ""}`}>
        {!showClassPage ? (
          <Cards isSidebarOpen={isSidebarOpen} openClassPage={openClassPage} />
        ) : (
          <ClassPage />
        )}
      </div>
    </>
  );
}

export default Home;
