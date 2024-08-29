import React, { useState } from "react";
import Sidebar from "../Navbar/Sidebar";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Cards from "../Card/Cards";
import ClassPage from "../classpage/ClassPage";

function Home() {
  const [isSidebarOpenn, setIsSidebarOpen] = useState(false);
  const [showClassPage, setShowClassPage] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpenn);
  };

  const openClassPage = () => {
    setShowClassPage(true);
  };

  return (
    <>
      <Navbar className='navbar1' toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpenn} toggleSidebar={toggleSidebar} />
      <div >
        {!showClassPage ? (
          <Cards isSidebarOpen={isSidebarOpenn} openClassPage={openClassPage} />
        ) : (
          <ClassPage />
        )}
      </div>
    </>
  );
}

export default Home;
