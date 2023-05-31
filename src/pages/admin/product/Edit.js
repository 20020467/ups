import React, { useState } from 'react'
import Layout from '../components/Layout';
import ProductForm from '../components/ProductForm';
import { useParams } from 'react-router-dom';

const Edit = () => {
    const [productInfo, setProductInfo] = useState(null);
    
    return (
      <>
        <h1>Edit product</h1>
        {productInfo && (
          <ProductForm {...productInfo} />
        )}
      </>
    );
}

export default Edit