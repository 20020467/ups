import React from "react";
import "../../css/productDetail.css";
import Header from "../../components/header/header";
import SideBar from "../../components/sidebar/SideBar";
import { useLocation } from "react-router-dom";

const ProductDetail = () => {
  const location = useLocation();
  const product = location.state;

  // Sử dụng dữ liệu sản phẩm ở đây
  console.log(product);
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
                <div className="block-info-prod-detail">
                  <div className="grid wide">
                    <div className="row">
                      {/* image */}
                      <div className="colD l-32">
                        <div className="detail">
                          <div className="LSSlideOuter">
                            <div className="LSSlideWrapper"></div>
                            <div className="LSPager LSGallery"></div>
                          </div>
                        </div>
                      </div>

                      {/* Detail */}
                      <div className="colD l-45">
                        <div className="detail">
                          <h1 className="name-prod-detail">{product.name}</h1>
                          <div className="code-status">
                            <div className="cate-of-prod">
                              <i></i>" Hãng: "
                              <b>
                                <a href="">Prolink</a>
                              </b>
                            </div>
                          </div>
                          <div className="code-status"></div>
                          <div className="short-des-prod"></div>
                        </div>
                      </div>

                      {/* copy right */}
                      <div className="colD l-23">
                        <div className="detail">copy right</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="block-tab-description-prod"></div>
                <div className="clear40"></div>
                <div className="block-list-prod-best"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
