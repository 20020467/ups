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
  const product = {
    id: 1,
    price: 7600000,
    images: [
      "https://res.cloudinary.com/dx67cp5hj/image/private/s--MPvlQdI1--/v1684596388/ezqvjuhd9ouorf8cyceq.png",
      "https://res.cloudinary.com/dx67cp5hj/image/private/s--D9mrQM7u--/v1684596394/fb9avoubep3evduoasnm.png",
      // "https://res.cloudinary.com/dx67cp5hj/image/private/s--axjIjyXO--/v1684596400/czz22q2r0afn1gyjyagc.png",
      // "https://res.cloudinary.com/dx67cp5hj/image/private/s--xI3XnEmU--/v1684596403/z5j5ffyuk7sq3qzvwuda.png",
      // "https://res.cloudinary.com/dx67cp5hj/image/private/s--hS-KP_-2--/v1684596407\ndaltv0pq4nqe7pdkk54.png",
    ],
    name: "BỘ LƯU ĐIỆN UPS PROLINK PRO910WS 10000VA",
    theFirm: "Prolink",
    code: "PRO910WS",
    origin: "China",
    status: "Còn hàng",
    wattage: "10kVA",
    guarantee: 24,
    description:
      "Bộ lưu điện UPS PRO700SFC là dòng sản phẩm tích hợp chức năng ổn định điện áp tự động AVR ổn định điện áp đầu ra ở chế độ điện lưới. Công nghệ sạc thông minh 3 bước cho thời gian sạc đến 90% dung lượng ắc quy chỉ 2 đến 4 tiếng, phù hợp sử dụng ở những nơi có nguồn điện thường xuyên biến động. Hệ thống cảnh báo nâng cao ngay lập tức đưa ra cảnh báo về tình trạng quá tải đầu ra, nhiệt độ cao hoặc pin yếu, giúp đủ thời gian để khắc phục tình trạng tắt hệ thống trước khi cạn ắc quy. UPS được cấu tạo cho phép dải điện áp đầu vào rộng, chuẩn ổ cắm đầu ra kiểu Universal tương thích với nhiều loại phích cắm khác nhau.",
    feature:
      "- Tích hợp công nghệ sạc nhanh, sạc ắc quy đến 90% dung lượng trong 2-4 tiếng \n - Bộ vi xử lý với độ tin cậy cao \n - Ổn định điện áp với công nghệ AVR 2 boot 1 buck \n - Tự động khởi động lại sau khi có điện lưới \n - Dạng sóng đầu ra là sóng sine mô phỏng \n - Chức năng sạc ở chế độ tắt (sạc ở chế độ tắt không có điện áp đầu ra, đầu vào UPS kết nối vào nguồn điện lưới) \n - Khởi động nguội (khởi động UPS bằng nguồn điện từ ắc quy, không cần nguồn điện lưới) \n - Tùy chọn thêm cổng giao tiếp USB",
  };
  const { id } = useParams();
  console.log(id);

  const [productfetch, setProductFetch] = useState();
  const [slideIndex, setSlideIndex] = useState(1);

  //  useEffect(() => {
  //    const getAllProduct = async () => {
  //      try {
  //        const product = await axios.get(
  //          "http://localhost:8080/api/product/" + id
  //        );
  //        setProductFetch(product)
  //      } catch (error) {
  //        console.log(error);
  //      }
  //    };
  //    getAllProduct();
  //  }, []);

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
                                product.status === "Còn hàng"
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
