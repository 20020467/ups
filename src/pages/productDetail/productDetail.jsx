import React, { useState, useEffect, useRef } from "react";
import "../../css/productDetail.css";
import Header from "../../components/header/header";
import SideBar from "../../components/sidebar/SideBar";
import InfoProduct from "../../components/InfoProduct/InfoProduct";
import { useLocation } from "react-router-dom";

const ProductDetail = () => {
  const location = useLocation();
  const product = location.state;

  const [slideIndex, setSlideIndex] = useState(1);

  const plusSlides = (n) => {
    setSlideIndex((prev) => prev + n);
    slideShow(slideIndex + n);
  };

  const slideShow = (n) => {
    if (n > product.images.length) {
      setSlideIndex(1);
    }
    if (n < 1) {
      setSlideIndex(product.images.length);
    }
  };

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
                            <div className="product-page-img">
                              {product.images.map((image, index) => (
                                <div
                                  className="mySlides"
                                  key={index}
                                  style={{
                                    display:
                                      index + 1 === slideIndex
                                        ? "block"
                                        : "none",
                                  }}
                                >
                                  <div className="numbertext">
                                    {index + 1} / {product.images.length}
                                    {/* <img src={image} alt="sản phẩm" /> */}
                                    <div
                                      className="product-item-img"
                                      style={{
                                        backgroundImage: `url(${image})`,
                                      }}
                                    ></div>
                                  </div>
                                </div>
                              ))}

                              <a
                                // href="/productDetail/#!"
                                className="prev"
                                onClick={() => plusSlides(-1)}
                              >
                                &#10094;
                              </a>
                              <a
                                // href="/productDetail/#!"
                                className="next"
                                onClick={() => plusSlides(1)}
                              >
                                &#10095;
                              </a>

                              <div className="slider-img">
                                {product.images.map((image, index) => (
                                  <div
                                    key={index}
                                    className={`slider-box ${
                                      index + 1 === slideIndex && "active"
                                    }`}
                                    onClick={() => setSlideIndex(index + 1)}
                                  >
                                    <img src={image} alt="sản phẩm" />
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div className="product-page-details"></div>
                          </div>
                        </div>
                      </div>

                      {/* Detail */}
                      <div className="colD l-45">
                        <div className="detail">
                          <h1 className="name-prod-detail">{product.name}</h1>

                          {/* theFirm */}
                          <div className="code-status">
                            <p className="cate-of-prod">
                              <i></i> Hãng:
                              <b>
                                <a style={{ color: "#ed1c24" }} href="">
                                  {" " + product.theFirm}
                                </a>
                              </b>
                            </p>
                          </div>

                          {/* code - status */}
                          <div className="code-status">
                            <p className="code-prod-detail">
                              <span className="bold">Mã sản phẩm: </span>
                              {" " + product.code}
                            </p>
                            <p
                              className={
                                product.status == "Còn hàng"
                                  ? "status-prod-stocking"
                                  : "status-prod-out"
                              }
                            >
                              Tình trạng:{" "}
                              <b>
                                <span>{product.status}</span>
                              </b>
                            </p>
                          </div>

                          {/* Liên hệ */}
                          <div className="box-pri-prod">
                            <p className="code-prod">
                              <span className="bold">Liên hệ:</span>
                              <span
                                style={{
                                  color: "#a40606",
                                  fontWeight: "700",
                                  marginLeft: 15,
                                }}
                              >
                                {"  "}
                                0358179025
                              </span>
                            </p>
                          </div>

                          {/* des prod */}
                          <div className="short-des-prod">
                            <ul className="custom-attributes">
                              <li className="cong-suat">
                                <span className="attribute-label">
                                  <span className="attribute-label-text">
                                    Công suất:
                                  </span>
                                </span>
                                <span className="attribute-value">
                                  {"  " + product.wattage}
                                </span>
                              </li>

                              <li className="xuat-xu">
                                <span className="attribute-label">
                                  <span className="attribute-label-text">
                                    Xuất xứ:
                                  </span>
                                </span>
                                <span className="attribute-value">
                                  {"  " + product.origin}
                                </span>
                              </li>

                              <li className="bao-hanh">
                                <span className="attribute-label">
                                  <span className="attribute-label-text">
                                    Bảo hành:
                                  </span>
                                </span>
                                <span className="attribute-value">
                                  {"  " + product.guarantee + " tháng"}
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* copy right */}
                      <div className="colD l-23">
                        <div className="detail">
                          <div className="block-commitment">
                            <p className="tit-right-idp">Chính sách bán hàng</p>

                            <div className="line-ridp">
                              <img src="./img/ionicons-v5-e.svg"></img>
                              <p>Bảo hành tại nơi sử dụng</p>
                            </div>

                            <div className="line-ridp">
                              <img src="./img/setting.svg"></img>
                              <p>Sửa chữa chi phí rẻ nhất</p>
                            </div>

                            <div className="line-ridp">
                              <img src="./img/ship.svg"></img>
                              <p>Miễn phí giao hàng</p>
                            </div>

                            <div className="line-ridp">
                              <img src="./img/baohanh.svg"></img>
                              <p>Cam kết hàng chính hãng 100%</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <InfoProduct product={product} />
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
