import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout';
import { useParams } from 'react-router-dom';
import Info from '../components/Info';
import axios from 'axios';

const Edit_Info = () => {
    const [productInfo, setProductInfo] = useState(null);
    const {id} = useParams();
    useEffect(() => {
      fetchInfo();
    }, [])

    async function fetchInfo() {
        axios.get('http://localhost:8080/api/info/'+ id).then(result => {
            setProductInfo(result.data);
        });
    }

    return (
      <Layout>
        <h1>Sửa thông số kỹ thuật của sản phẩm</h1>
        {productInfo && (
          <Info {...productInfo} />
        )}
        {!productInfo && (
          <Info {...productInfo}/>
        )}
      </Layout>
    );
}

export default Edit_Info