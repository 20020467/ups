import {useEffect, useState} from "react";
import Spinner from "./Spinner";
import {ReactSortable} from "react-sortablejs";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import withReactContent from "sweetalert2-react-content";
import Swal from 'sweetalert2'

export default function ProductForm({
    id,
    name:existingName,
    description:existingDescription,
    price:existingPrice,
    img:existingImages,
    category:assignedCategory,
    code: existingCode,
    firm: assignedFirm,
    status: assignedStatus,
    origin: existingOrigin,
    guarantee: existingGuarantee,
    wattage: existingWattage,
    feature: existingFeature
}) {
    const [name, setName] = useState(existingName || '');
    const [description, setDescription] = useState(existingDescription || '');
    const [category, setCategory] = useState(assignedCategory || null);
    const [price, setPrice] = useState(existingPrice || 0);
    const [img, setImages] = useState(existingImages || []);
    const [goToProducts, setGoToProducts] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const [categories, setCategories] = useState([]);
    const [firm, setFirm] = useState(assignedFirm || null);
    const [firms, setFirms] = useState([]);
    const [code, setCode] = useState(existingCode || '');
    const [status, setStatus] = useState(assignedStatus || true);
    const [origin, setOrigin] = useState(existingOrigin || '');
    const [guarantee, setGuarantee] = useState(existingGuarantee || 0);
    const [wattage, setWattage] = useState(existingWattage || '');
    const [feature, setFeature] = useState(existingFeature || '');
    const navigate = useNavigate();
    const MySwal = withReactContent(Swal);


    async function getdata() {
        try {
            await axios.get('http://localhost:8080/api/category/getAllCategory').then(result => {
                setCategories(result.data.data);
            })
            await axios.get('http://localhost:8080/api/firm/getAllFirm').then(result => {
                setFirms(result.data.data);
            });
            const p = await axios.get('http://localhost:8080/api/product/p/'+ id).then(result => {
                setFirm(result.data.product.firm);
                setCategory(result.data.product.category);
            })
        } catch(er) {
            console.log(er);
        }
    }

    useEffect(() => {
        getdata();
    }, []);

    async function saveProduct(ev) {
        ev.preventDefault();
        const data = {
            name, description, price, img, category, firm, code, status, origin, guarantee, wattage, feature
        };
        if (id) {
            //update
            await axios.put('http://localhost:8080/api/product/'+ id, {...data,id}).then(() => {
                alert('Lưu thông tin sản phẩm thành công')
            } 
            );
            setGoToProducts(true);
        } else {
            //create
            try {
                await axios.post('http://localhost:8080/api/product/create', data).then(() => {
                    alert('Lưu thông tin sản phẩm thành công');
                    setGoToProducts(true);
                }
                );
            } catch(er) {
                alert('Vui lòng điền đầy đủ thông tin sản phẩm')
            }
            
        }
        
    }

    if (goToProducts) {
        navigate('/products')
    }

    async function uploadImages(ev) {
        if (ev.target.files[0]) {
            setIsUploading(true);
            const data = new FormData();
            data.append('data', ev.target.files[0]);
            const res = await axios.post('http://localhost:8080/api/uploadImg', data);
            setImages(oldImages => {
                return [...oldImages, res.data.links];
            });
            console.log(img);
            setIsUploading(false);
        }
    }

    function updateImagesOrder(img) {
        setImages(img);
    }

    function deleteImg(link){
        MySwal.fire({
        title: 'Bạn có chắc không?',
        text: `Bạn có muốn xóa ảnh này không?`,
        showCancelButton: true,
        cancelButtonText: 'Hủy',
        confirmButtonText: 'Có',
        confirmButtonColor: '#d55',
        reverseButtons: true,
        }).then(async result => {
        if (result.isConfirmed) {
            const updatedLinks = img.filter(link_ => link_ !== link);
            const data = {link: link};
            console.log(data);
            const res = await axios.post('http://localhost:8080/deleteImg', data);
            if (!res.data.success) alert('Xóa ảnh không thành công')
            setImages(updatedLinks);
            const data2 = {
                img: updatedLinks
            };
            if (id) {
                //update
                await axios.put('http://localhost:8080/api/product/'+ id, {...data2,id})
            }
        }
        });
    }
    
    return (
        <form onSubmit={saveProduct}>
          
        <label>Tên sản phẩm</label>
            <input
                type="text"
                placeholder="tên sản phẩm"
                value={name}
                onChange={ev => setName(ev.target.value)}/>

        <label>Danh mục sản phẩm</label>
        <select value={category} onChange={ev => setCategory(ev.target.value)}>
            <option value={null}>Không có</option>
            {categories.length > 0 && categories.map(c => (
                <option key={c.id} value={c.id}>{c.name}</option>
            ))}
        </select>

        <label>Hãng</label>
        <select value={firm} onChange={ev => setFirm(ev.target.value)}>
            <option value={null}>Không có</option>
            {firms.length > 0 && firms.map(c => (
                <option key={c.id} value={c.id}>{c.name}</option>
            ))}
        </select>

        <label>Trạng thái</label>
        <select value={status}
                onChange={ev => setStatus(ev.target.value)}>
          <option value={true} onClick={() => setStatus(true)}>Còn hàng</option>
          <option value={false} onClick={() => setStatus(false)}>Hết hàng</option>
        </select>

        <label>Hình ảnh</label>
        <div className="mb-2 flex flex-wrap gap-1">
            <ReactSortable
                list={img}
                className="flex flex-wrap gap-1"
                setList={updateImagesOrder}>
                {img?.length > 0 && img.map(link => (
                    <div key={link} className="img">
                        <button type="button" onClick={() => deleteImg(link)} className="btn-del">
                            Xóa ảnh
                        </button>
                        <a href={link} className="btn-del">Xem ảnh</a>
                        <img src={link} alt="" className="rounded-lg"/>
                    </div>
                ))}
            </ReactSortable>
            {isUploading && (
                <div className="h-24 w-24 flex items-center">
                    <Spinner />
                </div>
            )}
            <label className="w-24 h-24 cursor-pointer text-center flex flex-col items-center justify-center text-sm gap-1 text-primary rounded-sm bg-white shadow-sm border border-primary">
                <div>
                    Thêm ảnh
                </div>
                <input type="file" onChange={uploadImages} className="hidden"/>
            </label>
        </div>

        <label>Mô tả sản phẩm</label>
        <textarea
            placeholder="Mô tả sản phẩm"
            value={description}
            onChange={ev => setDescription(ev.target.value)}
        />

        <label>Chức năng chính</label>
        <textarea
            placeholder="Chức năng chính của sản phẩm"
            value={feature}
            onChange={ev => setFeature(ev.target.value)}
        />

        <label>Mã sản phẩm</label>
        <input
            type="text"
            placeholder="Nhập mã sản phẩm"
            value={code}
            onChange={ev => setCode(ev.target.value)}/>

        <label>Công suất</label>
        <input
            type="text"
            placeholder="Nhập rõ đơn vị"
            value={wattage}
            onChange={ev => setWattage(ev.target.value)}/>

        <label>Xuất xứ</label>
        <input
            type="text"
            placeholder="Nhập rõ đơn vị"
            value={origin}
            onChange={ev => setOrigin(ev.target.value)}/>
          
        <label>Giá sản phẩm (vnd)</label>
        <input
            type="number" placeholder="Nhập giá sản phẩm"
            value={price}
            onChange={ev => setPrice(ev.target.value)}
        />

        <label>Thời gian bảo hành (tháng)</label>
        <input
            type="number" placeholder="Số tháng có thể bảo hành từ lúc mua"
            value={guarantee}
            onChange={ev => setGuarantee(ev.target.value)}
        />

        <div className="info">
            <button
                type="submit"
                className="btn-primary">
                Lưu
            </button>

            {id && <a href={'/products/edit-info/'+ id} className='btn-primary info'>Sửa thông số kỹ thuật của sản phẩm</a>}
        </div>
        
      </form>
    );
}
