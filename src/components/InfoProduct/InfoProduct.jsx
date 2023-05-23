import React, { useState } from "react";
import "../../css/infoProduct.css";

const InfoProduct = ({ product }) => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="block-tab-description-prod">
      <ul className="nav nav-tabs">
        <li
          className={toggleState === 1 ? "active-tabs" : ""}
          onClick={() => toggleTab(1)}
        >
          Mô tả sản phẩm
        </li>
        <li
          className={toggleState === 2 ? "active-tabs" : ""}
          onClick={() => toggleTab(2)}
        >
          Thông số kỹ thuật
        </li>
        <li
          className={toggleState === 3 ? "active-tabs" : ""}
          onClick={() => toggleTab(3)}
        >
          Tài liệu
        </li>
      </ul>

      <div className="tab-content">
        <div
          className={
            toggleState === 1
              ? "tab-pane fade active-content in"
              : "tab-pane fade"
          }
        >
          <p>{product.description}</p>
          <pre>{product.feature}</pre>
        </div>

        <div
          className={
            toggleState === 2
              ? "tab-pane fade active-content in"
              : "tab-pane fade"
          }
        >
          tab 2
        </div>
        <div
          className={
            toggleState === 3
              ? "tab-pane fade active-content in"
              : "tab-pane fade"
          }
        >
          tab 3
        </div>
      </div>
    </div>
  );
};

export default InfoProduct;
