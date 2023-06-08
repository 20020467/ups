import React, { useEffect, useState } from "react";
import Header from "../../components/header/header";
import SideBar from "../../components/sidebar/SideBar";
import Product from "../product/Product";
import Footer from "../../components/footer/footer";
import "../../css/home.css";
import { useParams } from "react-router-dom";

import axios from "axios";

function ProductCategory() {
  const [products, setProducts] = useState([]);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const getAllProduct = async () => {
      try {
        const product = await axios.get(
          "https://miencongnghe.vn/api/category/" + id
        );
        console.log(product.data);
        setProducts(product.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllProduct();
  }, []);

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
                    {products.length > 0 ? (
                      <div>
                        {products.map((item, index) => {
                          return (
                            <div className="col l-3 m-6 c-6" key={index}>
                              <Product product={item} />
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="col l-3 m-6 c-6">
                        <p>Sản phẩm sắp ra mắt!</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductCategory;
