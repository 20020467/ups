import React, { useEffect, useState } from "react";
import Header from "../../components/header/header";
import SideBar from "../../components/sidebar/SideBar";
import Product from "../product/Product";
import Footer from "../../components/footer/footer";
import "../../css/home.css";
import axios from "axios";
// import "../../css/grid.css";
import Slideshow from "../../components/slideshow/slideshow";
import img1 from "../../img/banner1.png";
import img2 from "../../img/banner2.png";
import img3 from "../../img/banner3.jpg";
import img4 from "../../img/banner4.jpg";

const collection = [
  { src: img1, caption: "Caption one" },
  { src: img2, caption: "Caption two" },
  { src: img3, caption: "Caption three" },
  { src: img4, caption: "Caption four" },
];
function Home() {
  const [products, setProducts] = useState([
    {
      id: 1,
      price: null,
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
    },
    {
      id: 2,
      price: null,
      images: [
        "https://res.cloudinary.com/dx67cp5hj/image/private/s--MPvlQdI1--/v1684596388/ezqvjuhd9ouorf8cyceq.png",
        "https://res.cloudinary.com/dx67cp5hj/image/private/s--D9mrQM7u--/v1684596394/fb9avoubep3evduoasnm.png",
        "https://res.cloudinary.com/dx67cp5hj/image/private/s--axjIjyXO--/v1684596400/czz22q2r0afn1gyjyagc.png",
        "https://res.cloudinary.com/dx67cp5hj/image/private/s--xI3XnEmU--/v1684596403/z5j5ffyuk7sq3qzvwuda.png",
        "https://res.cloudinary.com/dx67cp5hj/image/private/s--hS-KP_-2--/v1684596407\ndaltv0pq4nqe7pdkk54.png",
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
      id: 3,
      price: 7600000,
      images: [
        "https://res.cloudinary.com/dx67cp5hj/image/private/s--MPvlQdI1--/v1684596388/ezqvjuhd9ouorf8cyceq.png",
        "https://res.cloudinary.com/dx67cp5hj/image/private/s--D9mrQM7u--/v1684596394/fb9avoubep3evduoasnm.png",
        "https://res.cloudinary.com/dx67cp5hj/image/private/s--axjIjyXO--/v1684596400/czz22q2r0afn1gyjyagc.png",
        "https://res.cloudinary.com/dx67cp5hj/image/private/s--xI3XnEmU--/v1684596403/z5j5ffyuk7sq3qzvwuda.png",
        "https://res.cloudinary.com/dx67cp5hj/image/private/s--hS-KP_-2--/v1684596407\ndaltv0pq4nqe7pdkk54.png",
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
      id: 4,
      price: 7600000,
      images: [
        "https://res.cloudinary.com/dx67cp5hj/image/private/s--MPvlQdI1--/v1684596388/ezqvjuhd9ouorf8cyceq.png",
        "https://res.cloudinary.com/dx67cp5hj/image/private/s--D9mrQM7u--/v1684596394/fb9avoubep3evduoasnm.png",
        "https://res.cloudinary.com/dx67cp5hj/image/private/s--axjIjyXO--/v1684596400/czz22q2r0afn1gyjyagc.png",
        "https://res.cloudinary.com/dx67cp5hj/image/private/s--xI3XnEmU--/v1684596403/z5j5ffyuk7sq3qzvwuda.png",
        "https://res.cloudinary.com/dx67cp5hj/image/private/s--hS-KP_-2--/v1684596407\ndaltv0pq4nqe7pdkk54.png",
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
      id: 5,
      price: 7600000,
      images: [
        "https://res.cloudinary.com/dx67cp5hj/image/private/s--MPvlQdI1--/v1684596388/ezqvjuhd9ouorf8cyceq.png",
        "https://res.cloudinary.com/dx67cp5hj/image/private/s--D9mrQM7u--/v1684596394/fb9avoubep3evduoasnm.png",
        "https://res.cloudinary.com/dx67cp5hj/image/private/s--axjIjyXO--/v1684596400/czz22q2r0afn1gyjyagc.png",
        "https://res.cloudinary.com/dx67cp5hj/image/private/s--xI3XnEmU--/v1684596403/z5j5ffyuk7sq3qzvwuda.png",
        "https://res.cloudinary.com/dx67cp5hj/image/private/s--hS-KP_-2--/v1684596407\ndaltv0pq4nqe7pdkk54.png",
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

  //  useEffect(() => {
  //    const getAllProduct = async () => {
  //      try {
  //        const product = await axios.get(
  //          "http://localhost:8080/api/product/getAllProduct"
  //        );
  //        console.log(product)
  //      } catch (error) {
  //        console.log(error);
  //      }
  //    };
  //    getAllProduct();
  //  }, []);

  return (
    <div>
      <Header />
      <Slideshow
        input={collection}
        ratio={`3.35:1`}
        mode={`automatic`}
        timeout={`6000`}
      />
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
                      return (
                        <div className="col l-3 m-6 c-6" key={index}>
                          <Product product={item} />
                        </div>
                      );
                    })}
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

export default Home;
