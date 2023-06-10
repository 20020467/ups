import axios from "axios";
import {useEffect, useState} from "react";
import { useNavigate, useParams, useRoutes } from 'react-router-dom';

export default function Info({
    productID,
    cong_suat : ex_cong_suat,
    dai_dien_ap: ex_dai_dien_ap,
    tan_so_vao: ex_tan_so_vao,
    so_pha: ex_so_pha,
    dien_ap: ex_dien_ap,
    dien_ap_che_do_ac_quy: ex_dien_ap_che_do_ac_quy,
    tan_so_ra: ex_tan_so_ra,
    dang_song: ex_dang_song,
    thoi_gian_chuyen_mach: ex_thoi_gian_chuyen_mach,
    loai_ac_quy: ex_loai_ac_quy,
    thoi_gian_sac: ex_thoi_gian_sac,
    bv_ngan_mach: ex_bv_ngan_mach,
    bv_xung: ex_bv_xung,
    canh_bao: ex_canh_bao,
    bv_qua_tai: ex_bv_qua_tai,
    quan_ly_ac_quy: ex_quan_ly_ac_quy,
    cong_USB: ex_cong_USB,
    do_on_hd: ex_do_on_hd,
    nhiet_do_hd: ex_nhiet_do_hd,
    do_am_hd: ex_do_am_hd,
    he_so_cong_suat: ex_he_so_cong_suat,
    kich_thuoc: ex_kich_thuoc,
    trong_luong: ex_trong_luong,
}) {
    const [cong_suat, setCongSuat] = useState(ex_cong_suat || '');
    const [dai_dien_ap, setDaiDienAp] = useState(ex_dai_dien_ap || '');
    const [tan_so_vao, setTSV] = useState(ex_tan_so_vao || '');
    const [so_pha, setSoPha] = useState(ex_so_pha || '');
    const [dien_ap, setDienAp] = useState(ex_dien_ap || '');
    const [dien_ap_che_do_ac_quy, setDACDAQ] = useState(ex_dien_ap_che_do_ac_quy || '');
    const [tan_so_ra, setTSR] = useState(ex_tan_so_ra || '');
    const [dang_song, setDangSong] = useState(ex_dang_song || '');
    const [thoi_gian_chuyen_mach, setTGCM] = useState(ex_thoi_gian_chuyen_mach || '');
    const [loai_ac_quy, setLAQ] = useState(ex_loai_ac_quy || '');
    const [thoi_gian_sac, setTGS] = useState(ex_thoi_gian_sac || '');
    const [bv_ngan_mach, setBVNM] = useState(ex_bv_ngan_mach || '');
    const [bv_xung, setBVX] = useState(ex_bv_xung || '');
    const [canh_bao, setCanhBao] = useState(ex_canh_bao || '');
    const [bv_qua_tai, setBVQT] = useState(ex_bv_qua_tai || '');
    const [quan_ly_ac_quy, setQLAQ] = useState(ex_quan_ly_ac_quy || '');
    const [cong_USB, setCongUSB] = useState(ex_cong_USB || '');
    const [do_on_hd, setDoOnHD] = useState(ex_do_on_hd || '');
    const [nhiet_do_hd, setNhietDoHD] = useState(ex_nhiet_do_hd || '');
    const [do_am_hd, setDoAmHD] = useState(ex_do_am_hd || '');
    const [he_so_cong_suat, setHSCS] = useState(ex_he_so_cong_suat || '');
    const [kich_thuoc, setKichThuoc] = useState(ex_kich_thuoc || '');
    const [trong_luong, setTrongLuong] = useState(ex_trong_luong || '');
    const [goToProducts, setGoToProducts] = useState(false);
    const navigate = useNavigate();
    const {id} = useParams();

    async function saveProduct(ev) {
        ev.preventDefault();
        const data = {
            cong_suat, dai_dien_ap, tan_so_vao, so_pha, dien_ap, dien_ap_che_do_ac_quy, tan_so_ra, dang_song, 
            thoi_gian_chuyen_mach, loai_ac_quy, thoi_gian_sac, bv_ngan_mach, bv_xung, canh_bao, bv_qua_tai,
            quan_ly_ac_quy, cong_USB, do_on_hd, nhiet_do_hd, do_am_hd, he_so_cong_suat, kich_thuoc, trong_luong
        };
        if (productID) {
            //update
            await axios.put('http://localhost:8080/api/info/'+id, data).then(() => {
                alert('Lưu thông số kỹ thuật của sản phẩm thành công')
            });
        } else {
            //create
            await axios.post('http://localhost:8080/api/info/'+id, data).then(() => {
                alert('Tạo thông số kỹ thuật cho sản phẩm thành công')
            });
        }
        setGoToProducts(true);
    }

    if (goToProducts) {
        navigate('/products/edit/'+id)
    }
    
    return (
        <form onSubmit={saveProduct}>
        <h3 className="h3-cl">Thông số chung</h3>
        <label>Công suất</label>
            <input
                type="text"
                placeholder="Công suất"
                value={cong_suat}
                onChange={ev => setCongSuat(ev.target.value)}
            />

        <h3 className="h3-cl">Thông số đầu vào</h3>
        <label>Dải điện áp</label>
            <input
                type="text"
                placeholder="Dải điện áp"
                value={dai_dien_ap}
                onChange={ev => setDaiDienAp(ev.target.value)}
            />
        <label>Tần số</label>
            <input
                type="text"
                placeholder="Tần số vào"
                value={tan_so_vao}
                onChange={ev => setTSV(ev.target.value)}
            />
        <label>Số pha</label>
            <input
                type="text"
                placeholder="Số pha"
                value={so_pha}
                onChange={ev => setSoPha(ev.target.value)}
            />

        <h3 className="h3-cl">Thông số đầu ra</h3>
        <label>Điện áp</label>
            <input
                type="text"
                placeholder="Điện áp"
                value={dien_ap}
                onChange={ev => setDienAp(ev.target.value)}
            />
        <label>Điện áp chế độ ắc quy</label>
            <input
                type="text"
                placeholder="Điện áp chế độ ắc quy"
                value={dien_ap_che_do_ac_quy}
                onChange={ev => setDACDAQ(ev.target.value)}
            />
        <label>Tần số</label>
            <input
                type="text"
                placeholder="Tần số ra"
                value={tan_so_ra}
                onChange={ev => setTSR(ev.target.value)}
            />
        <label>Dạng sóng</label>
            <input
                type="text"
                placeholder="Dạng sóng"
                value={dang_song}
                onChange={ev => setDangSong(ev.target.value)}
            />
        <label>Thời gian chuyển mạch</label>
            <input
                type="text"
                placeholder="Thời gian chuyển mạch"
                value={thoi_gian_chuyen_mach}
                onChange={ev => setTGCM(ev.target.value)}
            />
        
        <h3 className="h3-cl">Thông số ắc quy</h3>
        <label>Loại ắc quy</label>
            <input
                type="text"
                placeholder="Loại ắc quy"
                value={loai_ac_quy}
                onChange={ev => setLAQ(ev.target.value)}
            />
        <label>Thời gian sạc</label>
            <input
                type="text"
                placeholder="Thời gian sạc"
                value={thoi_gian_sac}
                onChange={ev => setTGS(ev.target.value)}
            />
        
        <h3 className="h3-cl">Chức năng bảo vệ</h3>
        <label>Bảo vệ ngắn mạch</label>
            <input
                type="text"
                placeholder="Bảo vệ ngắn mạch"
                value={bv_ngan_mach}
                onChange={ev => setBVNM(ev.target.value)}
            />
        <label>Bảo vệ xung</label>
            <input
                type="text"
                placeholder="Bảo vệ xung"
                value={bv_xung}
                onChange={ev => setBVX(ev.target.value)}
            />
        <label>Cảnh báo</label>
            <input
                type="text"
                placeholder="Cảnh báo"
                value={canh_bao}
                onChange={ev => setCanhBao(ev.target.value)}
            />
        <label>Bảo vệ quá tải</label>
            <textarea
                placeholder="Bảo vệ quá tải"
                value={bv_qua_tai}
                onChange={ev => setBVQT(ev.target.value)}
            />
        <label>Quản lý ắc quy</label>
            <input
                type="text"
                placeholder="Quản lý ắc quy"
                value={quan_ly_ac_quy}
                onChange={ev => setQLAQ(ev.target.value)}
            />
        
        <h3 className="h3-cl">Kết nối</h3>
        <label>Cổng USB (tùy chọn)</label>
            <input
                type="text"
                placeholder="Cổng USB (tùy chọn)"
                value={cong_USB}
                onChange={ev => setCongUSB(ev.target.value)}
            />
        
        <h3 className="h3-cl">Môi trường hoạt động</h3>
        <label>Độ ồn hoạt động</label>
            <input
                type="text"
                placeholder="Độ ồn hoạt động"
                value={do_on_hd}
                onChange={ev => setDoOnHD(ev.target.value)}
            />
        <label>Nhiệt độ hoạt động</label>
            <input
                type="text"
                placeholder="Nhiệt độ hoạt động"
                value={nhiet_do_hd}
                onChange={ev => setNhietDoHD(ev.target.value)}
            />
        <label>Độ ẩm hoạt động</label>
            <input
                type="text"
                placeholder="Độ ẩm hoạt động"
                value={do_am_hd}
                onChange={ev => setDoAmHD(ev.target.value)}
            />
        <label>Hệ số công suất</label>
            <input
                type="text"
                placeholder="Hệ số công suất"
                value={he_so_cong_suat}
                onChange={ev => setHSCS(ev.target.value)}
            />

        <h3 className="h3-cl">Thông số vật lý</h3>
        <label>Kích thước</label>
            <input
                type="text"
                placeholder="Kích thước"
                value={kich_thuoc}
                onChange={ev => setKichThuoc(ev.target.value)}
            />
        <label>Trọng lượng</label>
            <input
                type="text"
                placeholder="Trọng lượng"
                value={trong_luong}
                onChange={ev => setTrongLuong(ev.target.value)}
            />

        <div className="info">
            <button
                type="submit"
                className="btn-primary">
                Lưu
            </button>

            <a href={'/products/edit/'+ id} className='btn-primary info'>Quay lại sửa sản phẩm</a>
        </div>
      </form>
    );
}
