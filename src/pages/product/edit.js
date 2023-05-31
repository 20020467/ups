import React, { useState } from 'react'
import Layout from '../components/Layout';
import ProductForm from '../components/ProductForm';
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
    const [productInfo, setProductInfo] = useState(null);
    const navigate = useNavigate();
    return (
      <Layout>
        <h1>Sửa thông tin của sản phẩm</h1>
        {!productInfo && (
          <ProductForm {...productInfo} />
        )}
      </Layout>
    );
}

export default Edit