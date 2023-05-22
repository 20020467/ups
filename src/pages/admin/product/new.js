import ProductForm from "../components/ProductForm";
import Layout from "../components/Layout";

export default function NewProduct() {
    return (
        <Layout>
            <h1>Thêm sản phẩm mới</h1>
            <ProductForm />
        </Layout>
    );
}