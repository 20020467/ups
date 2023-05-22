import React from "react";
import "../../css/product.css";
import { NavLink } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <div className="col l-3 m-6 c-6">
      <div className="item">
        <div className="img-prod">
          <NavLink
            style={{ textDecoration: "none" }}
            to={{
              pathname: "/productDetail",
            }}
            state={product}
          >
            <img alt="logo" src="./PRO910WS.jpg" />
          </NavLink>

          <div className="view-buy">
            <NavLink
              style={{ textDecoration: "none" }}
              to={{
                pathname: "/productDetail",
              }}
              state={product}
            >
              <span className="view-prod">Chi tiết</span>
            </NavLink>
            <NavLink
              style={{ textDecoration: "none" }}
              to={{
                pathname: "/productDetail",
              }}
              state={product}
            >
              <span className="buy-prod">Mua hàng</span>
            </NavLink>
          </div>
        </div>

        <div className="info-prod">
          <h4 className="prod-name">
            <a
              href={{
                pathname: "/productDetail",
              }}
              state={product}
            >
              <span>{product.name}</span>
            </a>
          </h4>
          <p className="code-prod">
            <NavLink
              style={{ textDecoration: "none" }}
              to={{
                pathname: "/productDetail",
              }}
              state={product}
            ></NavLink>
            <span className="bold">Hãng: </span>
            <a
              href={{
                pathname: "/productDetail",
              }}
              state={product}
            >
              {product.theFirm}
            </a>
          </p>
          <NavLink
            style={{ textDecoration: "none", color: "#000" }}
            to={{
              pathname: "/productDetail",
            }}
            state={product}
          >
            <p className="code-prod">
              <span className="bold">Mã SP: </span>
              {product.code}
            </p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Product;
