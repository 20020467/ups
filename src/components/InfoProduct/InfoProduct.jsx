import React from "react";
import "../../css/infoProduct.css";

const InfoProduct = ({ product }) => {
  console.log(product);

  return (
    <div className="block-tab-description-prod">
      <ul className="nav-tabs">
        <li>Mô tả sản phẩm</li>
        <li>Chức năng</li>
        <li>Thông số kỹ thuật</li>
      </ul>
      <div className="tab-content"></div>
    </div>
  );
};

export default InfoProduct;
