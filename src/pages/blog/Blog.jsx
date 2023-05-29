import React, { useState, useEffect } from "react";
import "../../css/blog.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import SideBar from "../../components/sidebar/SideBar";
import { useParams } from "react-router-dom";
import axios from "axios";

const Blog = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <Header />
      <div className="main-wraper">
        <div className="clear20"></div>

        <div className="container">
          <div className="grid wide">
            <div className="row">
              <SideBar />
              <div className="col l-7-6 m-12 c-12">Blog</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
