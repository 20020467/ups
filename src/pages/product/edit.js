import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout';
import ProductForm from '../components/ProductForm';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Edit = () => {
    const [productInfo, setProductInfo] = useState(null);

    const navigate = useNavigate();

    const {id} = useParams();
    useEffect(() => {
      fetchProducts();
    }, [])

    async function fetchProducts() {
        axios.get('http://localhost:8080/api/product/'+ id).then(result => {
            setProductInfo(result.data.product);
        });
    }
    return (
      <Layout>
        <h1>Sửa thông tin của sản phẩm</h1>
        {productInfo && (
          <ProductForm {...productInfo} />
        )}
      </Layout>
    );
}

export default Edit