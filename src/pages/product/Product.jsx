import React from "react";
import "../../css/product.css";

const Product = ({ product }) => {
  return (
    // <div className="col l-3 m-6 c-6">
    <div className="item">
      <div className="img-prod">
        <a
          style={{ textDecoration: "none", width: "100%" }}
          href={"/productDetail/" + product.id}
        >
          <div
            className="product-item-img"
            style={{
              backgroundImage: `url(${product.images[0]})`,
            }}
          ></div>
        </a>

        <div className="view-buy">
          <a
            style={{ textDecoration: "none" }}
            href={"/productDetail/" + product.id}
          >
            <span className="view-prod">Chi tiết</span>
          </a>
          <a
            style={{ textDecoration: "none" }}
            href={"/productDetail/" + product.id}
          >
            <span className="buy-prod">Mua hàng</span>
          </a>
        </div>
      </div>

      <div className="info-prod">
        <h4 className="prod-name">
          <a href={"/productDetail/" + product.id}>
            <span>{product.name}</span>
          </a>
        </h4>
        <p className="code-prod">
          <a
            style={{ textDecoration: "none" }}
            href={"/productDetail/" + product.id}
          >
            <i />{" "}
          </a>
          <span className="bold">Hãng: </span>
          <a href={"/productDetail/" + product.id}>{product.theFirm}</a>
        </p>
        <a
          style={{ textDecoration: "none", color: "#000" }}
          href={"/productDetail/" + product.id}
        >
          <p className="code-prod">
            <span className="bold">Mã SP: </span>
            {product.code}
          </p>
        </a>
        <a
          style={{ textDecoration: "none", color: "#000" }}
          href={"/productDetail/" + product.id}
        >
          {product.price === null ? (
            <p className="code-prod">
              <span className="bold">Liên hệ </span>
            </p>
          ) : (
            <p className="code-prod-price">
              <span className="bold price">{product.price + "₫"}</span>
            </p>
          )}
        </a>
      </div>
    </div>
    // </div>
  );
};

export default Product;
