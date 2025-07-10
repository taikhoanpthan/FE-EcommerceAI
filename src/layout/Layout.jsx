import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const Layout = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Outlet context={{ searchQuery, setSearchQuery }} />
      <Footer />
    </div>
  );
};

export default Layout;
