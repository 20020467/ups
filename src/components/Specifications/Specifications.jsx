import React, { useState } from "react";
import "../../css/Specifications.css";

const Specifications = () => {
  const [info, setInfo] = useState({
    id: "1",
    productID: "1",

    // Thông số chung
    cong_suat: "650VA/360W",

    // Thông số đầu vào
    dai_dien_ap: "140 - 300VAC ± 5%",
    tan_so_vao: "50Hz/60Hz (tự động cảm ứng)",
    so_pha: "1 pha + tiếp địa",

    //Thông số đầu ra
    dien_ap: "230 VAC +12% - 14%",
    dien_ap_che_do_ac_quy: "230VAC ±10%",
    tan_so_ra: "50Hz ±1% (chế độ ắc quy)",
    dang_song:
      "Sóng sine mô phỏng (chế độ ắc quy) \nóng sine chuẩn (chế độ AC)",
    thoi_gian_chuyen_mach: "2 ms",

    //Thông số ắc quy
    loai_ac_quy: "12V8.2Ah",
    thoi_gian_sac: "2 - 4 tiếng đạt 90% dung lượng",

    //Chức năng bảo vệ
    bv_ngan_mach: "Có",
    bv_xung: "Có",
    canh_bao: "Âm thanh và đèn LED",
    bv_qua_tai:
      "Chế độ line: 100 - 120% trong 5 phút chuyển cảnh báo lỗi \n> 120% chuyển cảnh báo lỗi ngay lập tức \nChế độ ắc quy: 100 - 120% tắt sau 5 giây \n> 120% tắt ngay lập tức",
    quan_ly_ac_quy: "Bảo vệ chống quá sạc của ắc quy, nâng cao tuổi thọ ắc quy",

    //Kết nối
    cong_USB:
      "Báo lỗi mất điện đầu vào, báo lỗi ắc quy yếu, điều khiển tắt UPS, tắt PC",

    //Môi trường hoạt động
    do_on_hd: "< 40 dB",
    nhiet_do_hd: "0˚C - 40˚C",
    do_am_hd: "0 - 90%",
    he_so_cong_suat: "tối đa 0.7",

    //Thông số vật lý
    kich_thuoc: "279 x 101 x 142 mm",
    trong_luong: "4.2kg",
  });

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
            <td colSpan="2">
              <span style={{ color: "rgb(0, 0, 0)" }}>
                <strong>Thông số chung</strong>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>Công suất</span>
            </td>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>{info.cong_suat}</span>
            </td>
          </tr>
          {/* Thông số đầu vào< */}
          <tr>
            <td colSpan="2">
              <span style={{ color: "rgb(0, 0, 0)" }}>
                <strong>Thông số đầu vào</strong>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>Dải điện áp</span>
            </td>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>{info.dai_dien_ap}</span>
            </td>
          </tr>{" "}
          <tr>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>Tần số</span>
            </td>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>{info.tan_so_vao}</span>
            </td>
          </tr>{" "}
          <tr>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>Số pha</span>
            </td>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>{info.so_pha}</span>
            </td>
          </tr>
          {/* Thông số đầu ra */}
          <tr>
            <td colSpan="2">
              <span style={{ color: "rgb(0, 0, 0)" }}>
                <strong>Thông số đầu ra</strong>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>Điện áp</span>
            </td>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>{info.dien_ap}</span>
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>
                Điện áp chế độ ắc quy
              </span>
            </td>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>
                {info.dien_ap_che_do_ac_quy}
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>Tần số</span>
            </td>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>{info.tan_so_ra}</span>
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>Dạng sóng</span>
            </td>
            <td>
              <pre style={{ color: "rgb(0, 0, 0)" }}>{info.dang_song}</pre>
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>
                Thời gian chuyển mạch
              </span>
            </td>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>
                {info.thoi_gian_chuyen_mach}
              </span>
            </td>
          </tr>
          {/* Thông số ắc quy */}
          <tr>
            <td colSpan="2">
              <span style={{ color: "rgb(0, 0, 0)" }}>
                <strong>Thông số ắc quy</strong>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>Loại ắc quy</span>
            </td>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>{info.loai_ac_quy}</span>
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>Thời gian sạc</span>
            </td>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>
                {info.thoi_gian_sac}
              </span>
            </td>
          </tr>
          {/* Chức năng bảo vệ */}
          <tr>
            <td colSpan="2">
              <span style={{ color: "rgb(0, 0, 0)" }}>
                <strong>Chức năng bảo vệ</strong>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>Bảo vệ ngắn mạch</span>
            </td>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>{info.bv_ngan_mach}</span>
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>Bảo vệ xung</span>
            </td>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>{info.bv_xung}</span>
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>Cảnh báo</span>
            </td>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>{info.canh_bao}</span>
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>Bảo vệ quá tải</span>
            </td>
            <td>
              <pre style={{ color: "rgb(0, 0, 0)" }}>{info.bv_qua_tai}</pre>
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>Quản lý ắc quy</span>
            </td>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>
                {info.quan_ly_ac_quy}
              </span>
            </td>
          </tr>
          {/* Kết nối */}
          <tr>
            <td colSpan="2">
              <span style={{ color: "rgb(0, 0, 0)" }}>
                <strong>Kết nối</strong>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>Cổng USB (tùy chọn)</span>
            </td>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>{info.cong_USB}</span>
            </td>
          </tr>
          {/* Môi trường hoạt động */}
          <tr>
            <td colSpan="2">
              <span style={{ color: "rgb(0, 0, 0)" }}>
                <strong>Môi trường hoạt động</strong>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>Độ ồn hoạt động</span>
            </td>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>{info.do_on_hd}</span>
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>Nhiệt độ hoạt động</span>
            </td>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>{info.nhiet_do_hd}</span>
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>Độ ẩm hoạt động</span>
            </td>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>{info.do_am_hd}</span>
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>Hệ số công suất</span>
            </td>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>
                {info.he_so_cong_suat}
              </span>
            </td>
          </tr>
          {/* Thông số vật lý */}
          <tr>
            <td colSpan="2">
              <span style={{ color: "rgb(0, 0, 0)" }}>
                <strong>Thông số vật lý</strong>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>Kích thước</span>
            </td>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>{info.kich_thuoc}</span>
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>Trọng lượng</span>
            </td>
            <td>
              <span style={{ color: "rgb(0, 0, 0)" }}>{info.trong_luong}</span>
            </td>
          </tr>
          {/* <tr>
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
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default Specifications;
