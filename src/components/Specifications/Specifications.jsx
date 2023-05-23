import React from "react";
import "../../css/Specifications.css";

const Specifications = () => {
  return (
    <div className="editer">
      <table
        border="1"
        cellPadding="1"
        cellSpacing="1"
        style={{ width: "858px" }}
        width="630"
      >
        <tbody>
          <tr>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>
                <strong>MODEL</strong>
              </span>
            </td>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>
                <strong>PRO902S</strong>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>Dung lượng</span>
            </td>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>2000VA/1600W</span>
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>Công nghệ</span>
            </td>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>Online</span>
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>Số pha</span>
            </td>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>1 pha vào/1 pha ra</span>
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>Biến áp cách ly</span>
            </td>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>Tùy chọn</span>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <span style={{ color: "rgb(0, 0, 0)" }}>
                <strong>THÔNG TIN NGUỒN VÀO</strong>&nbsp;
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>Điện áp AC vào</span>
            </td>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>
                208/220/230/240VAC hoặc 110/115/120/127VAC
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>Dải điện áp</span>
            </td>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>
                – Ngưỡng chuyển mạch điện lưới thấp: 160/140/120/110VAC ±5% hoặc
                80/70/60/50VAC ±5%
              </span>
              <p>
                <span style={{ color: "rgb(0, 0, 0)" }}>
                  – Ngưỡng hồi phục điện lưới thấp: 168/148/128/118VAC ±5% hoặc
                  84/74/64/54VAC ±5%
                </span>
              </p>

              <p>
                <span style={{ color: "rgb(0, 0, 0)" }}>
                  – Ngưỡng hồi phục điện lưới thấp (Auto-restart):&nbsp;168VAC
                  ±5% or 84VAC ±5% (80%~ 100% Load); 148VAC ±5% or 74VAC ±5%
                  (0%~ 80% Load)
                </span>
              </p>

              <p>
                <span style={{ color: "rgb(0, 0, 0)" }}>
                  – Ngưỡng chuyển mạch điện lưới cao: 300VAC ±5% hoặc 150VAC ±5%
                </span>
              </p>

              <p>
                <span style={{ color: "rgb(0, 0, 0)" }}>
                  – Ngưỡng hồi phục điện lưới cao: 300VAC ±5% or 150VAC ±5%
                </span>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>Dải tần số</span>
            </td>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>
                40~70Hz (Auto Sensing)
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>Hệ số công suất</span>
            </td>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>≥ 0.98 (100% load)</span>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <span style={{ color: "rgb(0, 0, 0)" }}>
                <strong>THÔNG SỐ NGUỒN RA</strong>&nbsp;
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>Điện áp AC ngõ ra</span>
            </td>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>
                208/220/230/240VAC or 110/115/120/127VAC
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>
                Điều chỉnh điện áp AC (chế độ Ắc quy)
              </span>
            </td>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>±1%</span>
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>Dải tần số đồng bộ</span>
            </td>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>47~53Hz or 57~63Hz</span>
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>
                Dải tần số chế độ Ắc quy
              </span>
            </td>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>
                50Hz ±0.25Hz or 60Hz ±0.3Hz
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>
                Thời gian chuyển mạch từ chế độ AC sang Ắc quy
              </span>
            </td>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>0</span>
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>
                Thời gian chuyển mạch từ Inverter sang Bypass
              </span>
            </td>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>4ms</span>
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>Dạng sóng</span>
            </td>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>sóng sin chuẩn</span>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <span style={{ color: "rgb(0, 0, 0)" }}>
                <strong>ẮC QUY</strong>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>Số lượng Ắc quy</span>
            </td>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>4x12V9Ah</span>
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>Thời gian nạp sạc</span>
            </td>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>
                9 giờ đạt 90% dung lượng
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>Dòng nạp sạc</span>
            </td>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>1A</span>
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>Điện áp nạp sạc</span>
            </td>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>54.7VDC ±1%</span>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <span style={{ color: "rgb(0, 0, 0)" }}>
                <strong>HIỆU SUẤT</strong>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>Chế độ AC</span>
            </td>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>&gt; 89.3%</span>
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>Chế độ Ắc quy</span>
            </td>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>88.2%</span>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <span style={{ color: "rgb(0, 0, 0)" }}>
                <strong>CHỈ THỊ &amp; CẢNH BÁO</strong>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>Màn hình LCD</span>
            </td>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>
                Hiển thị trạng thái UPS, mức tải, mức Ắc quy, điện áp vào/ra, bộ
                định thời ngắt sạc, các điều kiện xảy ra lỗi.
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>Chế độ Ắc quy</span>
            </td>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>
                Phát âm thanh mỗi 4 giây.
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>Ắc quy yếu</span>
            </td>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>
                Phát âm thanh mỗi giây.
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>Quá tải</span>
            </td>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>
                Phát âm thanh 2 lần mỗi giây.
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>Lỗi</span>
            </td>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>
                Phát âm thanh liên tục.
              </span>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <span style={{ color: "rgb(0, 0, 0)" }}>
                <strong>KÍCH THƯỚC</strong>&nbsp;
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>
                Kích thước sản phẩm (mm) LxWxH
              </span>
            </td>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>397 x 145 x 220</span>
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>khối lượng</span>
            </td>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>17.2 kg</span>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <span style={{ color: "rgb(0, 0, 0)" }}>
                <strong>MÔI TRƯỜNG</strong>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>Độ ồn</span>
            </td>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>&lt;40dB</span>
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>Độ ẩm hoạt động</span>
            </td>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>
                0% – 90% không ngưng tụ
              </span>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <span style={{ color: "rgb(0, 0, 0)" }}>
                <strong>QUẢN LÝ</strong>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>USB/RS-232</span>
            </td>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>
                Hỗ trợ Windows 2000/2003/XP/Vista/2008/7,Linux,Unix và MAC
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Specifications;
