import Layout from "./components/Layout";
import { useNavigate } from "react-router-dom";
export default function Products() {
  // const [products,setProducts] = useState([]);

  // useEffect(() => {
  //   axios.get('/api/products').then(response => {
  //     setProducts(response.data);
  //   });
  // }, []);

  const products = [{
    _id: "1",
    title: "Bộ Lưu Điện UPS Cyber Offline 600VA SES600",
    category: "Bộ Lưu Điện UPS",
    firm: "Prolink",
  },{
    _id: "2",
    title: "Bộ Lưu Điện UPS Cyber Offline 600VA SES600",
    category: "Bộ Lưu Điện UPS",
    firm: "Prolink",
  },{
    _id: "3",
    title: "Bộ Lưu Điện UPS Cyber Offline 600VA SES600",
    category: "Bộ Lưu Điện UPS",
    firm: "Prolink",
  }]
  const navigate = useNavigate();

  return (
    <Layout>
      <button className="btn-primary" onClick={() => navigate('/admin/products/new')}>Thêm sản phẩm mới</button>
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
            <tr key={product._id}>
              <td>{product.title}</td>
              <td>{product.category}</td>
              <td>{product.firm}</td>
              <td>
                <a className="btn-default" href="">
                  
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