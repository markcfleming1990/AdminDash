import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import "./App.css";

const App = () => {
  const activeMenu = true;
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div
            className="fixed right-4 bottom-4"
            style={{ zIndex: "1000" }}
          >
            {/* on hover tool tip window */}
            <TooltipComponent content="settings" position="top">
              <button type="button"
              className="text-3xl p-3
               hover:drop-shadow-xl
               hover:bg-light-gray text-white"
               style={{ background: 'blue',  
               borderRadius:'50%' }}>
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {/* sets up toggling sidebar */}
          {activeMenu ? (
            <div className="w-72 fixedsidebar
            dark:bg-secondary-dark-bg
            bg-white">
              Sidebar
              </div>
          ) : (
            <div className="w-0 
            dark:bg-secondary-dark-gb">
              Sidebar w-0
            </div>
          )}
          <div className={
            // put duplicate code in a string like below to follow DRY.
            `dark:bg-main-bg bg-main-bg min-h
            w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}` 
          }>
            <div className='fixed md:static
            bg-main-bg dark:bg-main-dark-bg
            navbar w-full'>
              NavBar
            </div>
          </div>

          <div>
            <Routes>
              <Route path="/" element="ECommerce" />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
