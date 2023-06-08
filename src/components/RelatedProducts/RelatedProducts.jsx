import React, { useState, useRef, useEffect } from "react";
import "../../css/relatedProducts.css";
import Product from "../../pages/product/Product.jsx";

// Gợi ý sản phẩm liên quan
const RelatedProducts = ({ productCategory }) => {
  const [products, setProducts] = useState([
    {
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
    },
    {
      id: 2,
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
    {
      id: 6,
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
      id: 7,
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

  const slideRef = useRef();
  const [width, setWidth] = useState(0);
  const [start, setStart] = useState(0);
  const [change, setChange] = useState(9);

  useEffect(() => {
    if (!slideRef.current) return;
    const scrollWidth = slideRef.current.scrollWidth;
    const childrenElementCount = slideRef.current.childElementCount;
    const width = scrollWidth / childrenElementCount;
    setWidth(width);
  }, []);

  //Drag

  const dragStart = (e) => {
    setStart(e.clientX);
  };

  const dragOver = (e) => {
    let touch = e.clientX;
    setChange(start - touch);
  };
  const dragEnd = (e) => {
    if (change > 0) {
      slideRef.current.scrollLeft += width + 200;
    } else {
      slideRef.current.scrollLeft -= width + 200;
    }
  };

  return (
    <div className="block-list-prod-best">
      <h3 class="tit-prod-best">Sản phẩm liên quan</h3>
      <div className="block-slider-prod-top">
        <div
          className="slider-prod-top"
          ref={slideRef}
          draggable={true}
          onDragStart={dragStart}
          onDragOver={dragOver}
          onDragEnd={dragEnd}
        >
          {products?.map((product, index) => {
            return (
              <div className="item-product-relate">
                <Product key={index} product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
