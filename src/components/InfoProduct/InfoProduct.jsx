import React, { useState } from "react";
import "../../css/infoProduct.css";
import Specifications from "../Specifications/Specifications";
import axios from "axios";

// Mô tả sp, Thông số kỹ thuật, tài liệu
const InfoProduct = ({ product }) => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  let fileUrl = "../../file/test.pdf";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileUrl.substring(fileUrl.lastIndexOf("/") + 1);
    link.click();
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
          id="td1"
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
          id="td2"
          className={
            toggleState === 2
              ? "tab-pane fade active-content in"
              : "tab-pane fade"
          }
        >
          <Specifications productID={product.id} />
        </div>
        <div
          id="td3"
          className={
            toggleState === 3
              ? "tab-pane fade active-content in"
              : "tab-pane fade"
          }
        >
          {/* <button onClick={handleDownload}>Tải về</button> */}
        </div>
      </div>
    </div>
  );
};

export default InfoProduct;
