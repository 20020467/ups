import React from "react";
import "../../css/product.css";

const Product = ({ product }) => {
  return (
    <div className="col l-3 m-6 c-6">
      <div className="item">
        <div className="img-prod">
          <a href="">
            <img alt="logo" src="./PRO910WS.jpg" />
          </a>
          <div className="view-buy">
            <a className="view-prod">Chi tiết</a>
            <a className="buy-prod">Mua hàng</a>
          </div>
        </div>

        <div className="info-prod">
          <h4 className="prod-name">
            <a href="">{product.name}</a>
          </h4>
          <p className="code-prod">
            <a href=""></a>
            <span className="bold">Hãng: </span>
            {product.theFirm}
          </p>
          <a href="">
            <p className="code-prod">
              <span className="bold">Mã SP: </span>
              {product.code}
            </p>
          </a>
          <a href=""></a>
        </div>
      </div>
    </div>
  );
};

export default Product;
