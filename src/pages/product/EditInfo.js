import React, { useState } from 'react'
import Layout from '../components/Layout';
import { useParams } from 'react-router-dom';
import Info from '../components/Info';

const Edit_Info = () => {
    const [productInfo, setProductInfo] = useState(null);
    
    return (
      <Layout>
        <h1>Sửa thông số kỹ thuật của sản phẩm</h1>
        {!productInfo && (
          <Info {...productInfo} />
        )}
      </Layout>
    );
}

export default Edit_Info