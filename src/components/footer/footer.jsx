import React from 'react'
import './footer.css';
import 'remixicon/fonts/remixicon.css'

const footer = () => {
  return (
    <footer>
        <div className='footer-top'>
            <div className='block-footer-top'>
                <div className='row flex-wrap'>
                    <div className='col-md-3 col-sm-12'>
                        <p className='tit-ft'>Thông tin công ty</p>
                        <p className='name-com-ft'>CÔNG TY CP CÔNG NGHỆ ELCO VIỆT NAM</p>
                        <div className='editer'>
                            <p><span class="bold">Địa chỉ:</span> Số 68 Phố Trạm, Phường Long Biên, Quận Long Biên, TP Hà Nội</p>
                            <p>VP Hà Nội: Số 202/16/59 Đường Cổ Linh - Phường Long Biên - Quận Long Biên - TP Hà Nội</p>
                            <p>VP HCM: Số 13 Nguyễn Trọng Quyền, Phường Tân Thới Hòa - Quận Tân Phú - TP HCM</p>
                            <p><span class="bold">Điện thoại: </span>0978470323</p>
                            <p>Email: Info@elco.com.vn</p>
                            <p> </p>
                            
                            <p> </p>
                        </div>
                        <div class="social-ft">
                            <a href="/"><i className="ri-facebook-circle-fill" aria-hidden="true"/></a>
                            <a href="/"><i className="ri-twitter-fill" aria-hidden="true"/></a>
                            <a href="/"><i className="ri-instagram-line" aria-hidden="true"/></a>
                            <a href="/"><i className="ri-pinterest-fill" aria-hidden="true"></i></a>
                        </div>
                    </div>
                    
                    <div className="col-md-3 col-sm-12 col-xs-6 ">
                        <p className="tit-ft">Danh mục sản phẩm</p>
                        <ul className="ul-ft">
                            <li><a href="">Bộ Lưu Điện UPS</a></li>
                            <li><a href="">Giải pháp Data Center</a></li>
                            <li><a href="">Ắc quy</a></li>
                            <li><a href="">Giá treo</a></li>
                        </ul>
                    </div>
                    
                    <div className="col-md-3 col-sm-6 col-xs-6 ">
                        <p className="tit-ft">Chính sách - quy định</p>
                        <ul className="ul-ft">
                            <li><a href="">Chính Sách Bảo Hành</a></li>
                            <li><a href="">Chính Sách Vận Chuyển</a></li>
                            <li><a href="">Chính Sách Đổi - Trả</a></li>
                            <li><a href="">Thông Tin Thanh Toán</a></li>
                            <li><a href="">Bảo Mật Thông Tin Cá Nhân</a></li>
                        </ul>
                    </div>
                    
                    <div className="col-md-3 col-sm-12">
                        <p className="tit-ft">Đăng ký nhận khuyến mãi</p>
                        <p className="des-form-ft">Đảm bảo rằng bạn không bao giờ bỏ lỡ những chương trình khuyến mãi của chúng tôi bằng cách đăng ký nhận bản tin qua email</p>
                        <div className="form-ft">
                            <form action="" method="post" id="formSignup">
                                <input type="email" placeholder="Your E-mail" name="email" required=""/>
                                <button type="submit">→</button>
                            </form>
                        </div>
                        <div classname="pay-ft"><img src="img/pay.png" alt='' /></div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default footer