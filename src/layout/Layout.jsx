import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import AnimatedLayout from "./AnimatedLayout";

const Layout = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <AnimatedLayout>
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Outlet context={{ searchQuery, setSearchQuery }} />
        <Footer />
      </AnimatedLayout>
    </div>
  );
};

export default Layout;
