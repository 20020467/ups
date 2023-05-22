import React, { useState } from "react";
import Header from "../../components/header/header";
import SideBar from "../../components/sidebar/SideBar";
import Product from "../product/Product";
import "../../css/home.css";
// import "../../css/grid.css";

function Home() {
  const [products, setProducts] = useState([
    {
      img: "",
      name: "BỘ LƯU ĐIỆN UPS PROLINK PRO910WS 10000VA",
      theFirm: "China",
      code: "PRO910WS",
    },
    {
      img: "",
      name: "BỘ LƯU ĐIỆN UPS PROLINK PRO910WS 10000VA",
      theFirm: "China",
      code: "PRO910WS",
    },
    {
      img: "",
      name: "BỘ LƯU ĐIỆN UPS PROLINK PRO910WS 10000VA",
      theFirm: "China",
      code: "PRO910WS",
    },
    {
      img: "",
      name: "BỘ LƯU ĐIỆN UPS PROLINK PRO910WS 10000VA",
      theFirm: "China",
      code: "PRO910WS",
    },
    {
      img: "",
      name: "BỘ LƯU ĐIỆN UPS PROLINK PRO910WS 10000VA",
      theFirm: "China",
      code: "PRO910WS",
    },
  ]);

  return (
    <div>
      <Header />
      <div className="main-wraper">
        <div className="clear20"></div>

        <div className="container">
          <div className="grid wide">
            <div className="row">
              <SideBar />
              <div className="col l-7-6 m-12 c-12">
                <div className="content">
                  <div className="row">
                    {products.map((item, index) => {
                      return <Product key={index} product={item} />;
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
