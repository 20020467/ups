import React from "react";
import "./footer.css";
import "remixicon/fonts/remixicon.css";

const footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="block-footer-top">
          <div className="row flex-wrap">
            <div className="col-md-3 col-sm-12">
              <p className="tit-ft">Thông tin công ty</p>
              <p className="name-com-ft">
                CÔNG TY TNHH THƯƠNG MẠI DỊCH VỤ MIỀN CÔNG NGHỆ
              </p>
              <div className="editer">
                <p>
                  <span className="bold">Địa chỉ:</span> Tầng 3, Số 5 đường
                  3.6/2, KĐT Gamuda Gardens, Phường Trần Phú, Quận Hoàng Mai,
                  Thành phố Hà Nội, Việt Nam.
                </p>

                <p>
                  <span className="bold">Điện thoại: </span>0878856493
                </p>
                <p>
                  <span className="bold">Email: </span>
                  hotline@miencongnghe.vn
                </p>
                <p>
                  <span className="bold">Mã số thuế: </span>
                  0110361961
                </p>
              </div>
              <div className="social-ft">
                <a href="/">
                  <i className="ri-facebook-circle-fill" aria-hidden="true" />
                </a>
                <a href="/">
                  <i className="ri-twitter-fill" aria-hidden="true" />
                </a>
                <a href="/">
                  <i className="ri-instagram-line" aria-hidden="true" />
                </a>
                <a href="/">
                  <i className="ri-pinterest-fill" aria-hidden="true"></i>
                </a>
              </div>
            </div>

            <div className="col-md-3 col-sm-12 col-xs-6 ">
              <p className="tit-ft">Danh mục sản phẩm</p>
              <ul className="ul-ft">
                <li>
                  <a href="">Bộ Lưu Điện UPS</a>
                </li>
                <li>
                  <a href="">Giải pháp Data Center</a>
                </li>
                <li>
                  <a href="">Ắc quy</a>
                </li>
                <li>
                  <a href="">Giá treo</a>
                </li>
              </ul>
            </div>

            <div className="col-md-3 col-sm-6 col-xs-6 ">
              <p className="tit-ft">Chính sách - quy định</p>
              <ul className="ul-ft">
                <li>
                  <a href="">Chính Sách Bảo Hành</a>
                </li>
                <li>
                  <a href="">Chính Sách Vận Chuyển</a>
                </li>
                <li>
                  <a href="">Chính Sách Đổi - Trả</a>
                </li>
                <li>
                  <a href="">Thông Tin Thanh Toán</a>
                </li>
                <li>
                  <a href="">Bảo Mật Thông Tin Cá Nhân</a>
                </li>
              </ul>
            </div>

            <div className="col-md-3 col-sm-12">
              <p className="tit-ft">Đăng ký nhận khuyến mãi</p>
              <p className="des-form-ft">
                Đảm bảo rằng bạn không bao giờ bỏ lỡ những chương trình khuyến
                mãi của chúng tôi bằng cách đăng ký nhận bản tin qua email
              </p>
              <div className="form-ft">
                <form action="" method="post" id="formSignup">
                  <input
                    type="email"
                    placeholder="Your E-mail"
                    name="email"
                    required=""
                  />
                  <button type="submit">→</button>
                </form>
              </div>
              <div className="pay-ft">
                <img src="img/pay.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
