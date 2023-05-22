import React, { useState } from "react";
import Header from "../../components/header/header";
import SideBar from "../../components/sidebar/SideBar";
import Product from "../product/Product";
import "../../css/home.css";
// import "../../css/grid.css";

function Home() {
  const [products, setProducts] = useState([
    {
      price: 7600000,
      images: [
        "https://res.cloudinary.com/dx67cp5hj/image/private/s--MPvlQdI1--/v1684596388/ezqvjuhd9ouorf8cyceq.png",
        "https://res.cloudinary.com/dx67cp5hj/image/private/s--D9mrQM7u--/v1684596394/fb9avoubep3evduoasnm.png",
        // "https://res.cloudinary.com/dx67cp5hj/image/private/s--axjIjyXO--/v1684596400/czz22q2r0afn1gyjyagc.png",
        // "https://res.cloudinary.com/dx67cp5hj/image/private/s--xI3XnEmU--/v1684596403/z5j5ffyuk7sq3qzvwuda.png",
        // "https://res.cloudinary.com/dx67cp5hj/image/private/s--hS-KP_-2--/v1684596407/ndaltv0pq4nqe7pdkk54.png",
      ],
      name: "BỘ LƯU ĐIỆN UPS PROLINK PRO910WS 10000VA",
      theFirm: "Prolink",
      code: "PRO910WS",
      origin: "China",
      status: "Còn hàng",
      wattage: "10kVA",
      guarantee: 24,
    },
    {
      price: 7600000,
      images: [
        "https://res.cloudinary.com/dx67cp5hj/image/private/s--MPvlQdI1--/v1684596388/ezqvjuhd9ouorf8cyceq.png",
        "https://res.cloudinary.com/dx67cp5hj/image/private/s--D9mrQM7u--/v1684596394/fb9avoubep3evduoasnm.png",
        "https://res.cloudinary.com/dx67cp5hj/image/private/s--axjIjyXO--/v1684596400/czz22q2r0afn1gyjyagc.png",
        "https://res.cloudinary.com/dx67cp5hj/image/private/s--xI3XnEmU--/v1684596403/z5j5ffyuk7sq3qzvwuda.png",
        "https://res.cloudinary.com/dx67cp5hj/image/private/s--hS-KP_-2--/v1684596407/ndaltv0pq4nqe7pdkk54.png",
      ],
      name: "BỘ LƯU ĐIỆN UPS PROLINK PRO910WS 10000VA",
      theFirm: "Prolink",
      code: "PRO910WS",
      origin: "China",
      status: "Hết hàng",
      wattage: "10kVA",
      guarantee: 24,
    },
    {
      price: 7600000,
      images: [
        "https://res.cloudinary.com/dx67cp5hj/image/private/s--MPvlQdI1--/v1684596388/ezqvjuhd9ouorf8cyceq.png",
        "https://res.cloudinary.com/dx67cp5hj/image/private/s--D9mrQM7u--/v1684596394/fb9avoubep3evduoasnm.png",
        "https://res.cloudinary.com/dx67cp5hj/image/private/s--axjIjyXO--/v1684596400/czz22q2r0afn1gyjyagc.png",
        "https://res.cloudinary.com/dx67cp5hj/image/private/s--xI3XnEmU--/v1684596403/z5j5ffyuk7sq3qzvwuda.png",
        "https://res.cloudinary.com/dx67cp5hj/image/private/s--hS-KP_-2--/v1684596407/ndaltv0pq4nqe7pdkk54.png",
      ],
      name: "BỘ LƯU ĐIỆN UPS PROLINK PRO910WS 10000VA",
      theFirm: "Prolink",
      code: "PRO910WS",
      origin: "China",
      status: "Còn hàng",
      wattage: "10kVA",
      guarantee: 24,
    },
    {
      price: 7600000,
      images: [
        "https://res.cloudinary.com/dx67cp5hj/image/private/s--MPvlQdI1--/v1684596388/ezqvjuhd9ouorf8cyceq.png",
        "https://res.cloudinary.com/dx67cp5hj/image/private/s--D9mrQM7u--/v1684596394/fb9avoubep3evduoasnm.png",
        "https://res.cloudinary.com/dx67cp5hj/image/private/s--axjIjyXO--/v1684596400/czz22q2r0afn1gyjyagc.png",
        "https://res.cloudinary.com/dx67cp5hj/image/private/s--xI3XnEmU--/v1684596403/z5j5ffyuk7sq3qzvwuda.png",
        "https://res.cloudinary.com/dx67cp5hj/image/private/s--hS-KP_-2--/v1684596407/ndaltv0pq4nqe7pdkk54.png",
      ],
      name: "BỘ LƯU ĐIỆN UPS PROLINK PRO910WS 10000VA",
      theFirm: "Prolink",
      code: "PRO910WS",
      origin: "China",
      status: "Còn hàng",
      wattage: "10kVA",
      guarantee: 24,
    },
    {
      price: 7600000,
      images: [
        "https://res.cloudinary.com/dx67cp5hj/image/private/s--MPvlQdI1--/v1684596388/ezqvjuhd9ouorf8cyceq.png",
        "https://res.cloudinary.com/dx67cp5hj/image/private/s--D9mrQM7u--/v1684596394/fb9avoubep3evduoasnm.png",
        "https://res.cloudinary.com/dx67cp5hj/image/private/s--axjIjyXO--/v1684596400/czz22q2r0afn1gyjyagc.png",
        "https://res.cloudinary.com/dx67cp5hj/image/private/s--xI3XnEmU--/v1684596403/z5j5ffyuk7sq3qzvwuda.png",
        "https://res.cloudinary.com/dx67cp5hj/image/private/s--hS-KP_-2--/v1684596407/ndaltv0pq4nqe7pdkk54.png",
      ],
      name: "BỘ LƯU ĐIỆN UPS PROLINK PRO910WS 10000VA",
      theFirm: "Prolink",
      code: "PRO910WS",
      origin: "China",
      status: "Còn hàng",
      wattage: "10kVA",
      guarantee: 24,
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
