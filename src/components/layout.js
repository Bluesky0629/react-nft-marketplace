import React, { Fragment, useState } from "react";
import Sidebar from "react-sidebar";
import Header from './header';
import SideMenu from "./sidemenu";


const mql = window.matchMedia(`(min-width: 1024px)`);

export default ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [sidebarDocked, setSidebarDocked] = useState(mql.matches);

  mql.addListener(() => {
    setSidebarDocked(mql.matches);
  });

  return (
    <Fragment>
      <div className="all-content">
        <div style={{ width: "100%" }}>
          <Header
            toggleMenu={() => setSidebarOpen(true)}
            toggleSearch={() => setSearchOpen(true)}
          />
        </div>
        <div className="sidebar-contanier">
          <Sidebar
            sidebar={<SideMenu toggleMenu={() => setSidebarOpen(false)} />}
            open={sidebarOpen}
            onSetOpen={setSidebarOpen}
            docked={sidebarDocked}
          >
            <div className="container-fluid">{children}</div>
          </Sidebar>
        </div>
      </div>
    </Fragment>
  );
};
