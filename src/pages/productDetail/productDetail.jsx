import React, { useState, useEffect } from "react";
import "../../css/productDetail.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import SideBar from "../../components/sidebar/SideBar";
import InfoProduct from "../../components/InfoProduct/InfoProduct";
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts";
import { useParams } from "react-router-dom";
import ionicons from "../../img/ionicons-v5-e.svg";
import setting from "../../img/setting.svg";
import ship from "../../img/ship.svg";
import baohanh from "../../img/baohanh.svg";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams();
  console.log(id);

  const [product, setProduct] = useState([]);
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const productInfo = await axios.get(
          `${process.env.REACT_APP_HOST}/api/product/` + id
        );
        setProduct(productInfo.data.product);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, []);

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
                              {product.length > 0 ? (
                                <>
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
                                        <div
                                          className="product-item-img"
                                          style={{
                                            backgroundImage: `url(${image})`,
                                          }}
                                        ></div>
                                        {/* {index + 1} / {product.images.length} */}
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
                                </>
                              ) : (
                                <p>Sản phẩm chưa có ảnh</p>
                              )}
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
                                  {" " + product.firm}
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
                                product.status == true
                                  ? "status-prod-stocking"
                                  : "status-prod-out"
                              }
                            >
                              Tình trạng:{" "}
                              <b>
                                {product.status == true ? (
                                  <span>Còn hàng</span>
                                ) : (
                                  <span>Hết hàng</span>
                                )}
                              </b>
                            </p>
                          </div>

                          {/* Liên hệ */}
                          <div className="box-pri-prod">
                            {product.price === null ? (
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
                                  0878856493
                                </span>
                              </p>
                            ) : (
                              <p className="code-prod">
                                <span className="bold price">
                                  {product.price + "₫"}
                                </span>
                              </p>
                            )}
                          </div>

                          {/* des prod */}
                          <div className="short-des-prod">
                            <ul className="custom-attributes">
                              <li className="cong-suat">
                                <span className="attribute-label">
                                  <span className="attribute-label-text bold">
                                    Công suất:
                                  </span>
                                </span>
                                <span className="attribute-value">
                                  {"  " + product.wattage}
                                </span>
                              </li>

                              <li className="xuat-xu">
                                <span className="attribute-label">
                                  <span className="attribute-label-text bold">
                                    Xuất xứ:
                                  </span>
                                </span>
                                <span className="attribute-value">
                                  {"  " + product.origin}
                                </span>
                              </li>

                              <li className="bao-hanh">
                                <span className="attribute-label">
                                  <span className="attribute-label-text bold">
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
                              <img alt="Bảo hành" src={ionicons}></img>
                              <p>Bảo hành tại nơi sử dụng</p>
                            </div>

                            <div className="line-ridp">
                              <img alt="Sửa chữa" src={setting}></img>
                              <p>Sửa chữa chi phí rẻ nhất</p>
                            </div>

                            <div className="line-ridp">
                              <img alt="Giao hàng" src={ship}></img>
                              <p>Miễn phí giao hàng</p>
                            </div>

                            <div className="line-ridp">
                              <img alt="Chính hãng" src={baohanh}></img>
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
                <RelatedProducts productCategory={product} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
