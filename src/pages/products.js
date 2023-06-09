import { useEffect, useState } from "react";
import Layout from "./components/Layout";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Products() {
  const [products,setProducts] = useState([]);
  const [file, setFile] = useState();
  var bodyFormData = new FormData();

  useEffect(() => {
    axios.get('https://miencongnghe.vn/api/product/getAllProduct').then(response => {
      setProducts(response.data);
    });
  }, []);

  const navigate = useNavigate();

  async function importDataByExcel() {
    //await axios.post('https://miencongnghe.vn/api/product/uploadfile', file);
    if (!file) {
      alert('Vui lòng chọn tệp excel');
      return;
    }
    bodyFormData.append('file', file)
    await axios({
      method: "post",
      url: "https://miencongnghe.vn/api/product/uploadfile",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    }).then(() => {
      alert('Thêm sản phẩm mới thành công');
      axios.get('https://miencongnghe.vn/api/product/getAllProduct').then(response => {
        setProducts(response.data);
      });
    })
  }

  return (
    <Layout>
      <div className="info">
        <button className="btn-primary" onClick={() => navigate('/products/new')}>Thêm sản phẩm mới</button>
        <div className="">
          <input
            type="file"
            name="myImage"
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />
          <button className="btn-primary" onClick={() => importDataByExcel()}>Thêm bằng excel</button>
        </div>
        
      </div>
      
      <table className="basic mt-2">
        <thead>
          <tr>
            <td>Tên sản phẩm</td>
            <td>Tên danh mục</td>
            <td>Tên hãng</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.firm}</td>
              <td>
                <a className="btn-default" href={'/products/edit/'+ product.id}>
                  Sửa
                </a>
                <a className="btn-red" href="">
                  Xóa
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
}