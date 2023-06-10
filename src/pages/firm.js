import Layout from "./components/Layout";
import {useEffect, useState} from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import React from 'react'
import axios from "axios";
import { ReactSortable } from "react-sortablejs";
import Spinner from "./components/Spinner";

const Firm = () => {
    const [editedFirm, setEditedFirm] = useState(null);
    const [name,setName] = useState('');
    const [firms,setFirms] = useState([]);
    const [description, setDescription] = useState('');
    const [img, setImages] = useState([]);
    const [isUploading, setIsUploading] = useState(false);
    const MySwal = withReactContent(Swal);

    useEffect(() => {
        fetchFirms();
    }, [])

    async function fetchFirms() {
        await axios.get('http://localhost:8080/api/firm/getAllFirm').then(result => {
            setFirms(result.data.data);
        });
    }

    async function saveFirm(ev){
        ev.preventDefault();
        const data = {
            name,
            description,
            img
        };
        if (editedFirm) {
            data.id = editedFirm.id;
            await axios.put('http://localhost:8080/api/firm/'+ data.id, data);
            setEditedFirm(null);
        } else {
            await axios.post('http://localhost:8080/api/firm/create' , data);
        }
        setName('');
        setDescription('');
        setImages([]);
        fetchFirms();
    }

    function editFirm(firm){
        setEditedFirm(firm);
        setName(firm.name);
        setDescription(firm.description);
        if (firm.img) setImages(firm.img);
    }

    function deleteFirm(firm){
        MySwal.fire({
        title: 'Bạn có chắc không?',
        text: `Bạn có muốn xóa hãng ${firm.name}?`,
        showCancelButton: true,
        cancelButtonText: 'Hủy',
        confirmButtonText: 'Có',
        confirmButtonColor: '#d55',
        reverseButtons: true,
        }).then(async result => {
        if (result.isConfirmed) {
            const {id} = firm;
            await axios.delete('http://localhost:8080/api/firm/'+id).then(() => {
                fetchFirms();
                alert('Xóa thành công')
            })
        }
        });
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
            if (editedFirm) {
                data2.id = editedFirm.id;
                await axios.put('http://localhost:8080/api/firm/'+ data2.id, data2);
                setEditedFirm(null);
            }
        }
        });
    }
    
    return (
        <Layout>
            <h1>Các hãng sản phẩm</h1>
            <label>
                {editedFirm
                ? `Sửa tên hãng ${editedFirm.name}`
                : 'Tạo hãng mới'}
            </label>
            <form onSubmit={saveFirm}>
                <div className="flex gap-1">
                    <input
                        type="text"
                        placeholder={'Nhập tên hãng'}
                        onChange={ev => setName(ev.target.value)}
                        value={name}/>
                </div>

                <label>Mô tả hãng sản phẩm</label>
                <textarea
                    placeholder="Mô tả"
                    value={description}
                    onChange={ev => setDescription(ev.target.value)}
                />

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

                <div className="flex gap-1">
                    {editedFirm && (
                        <button
                        type="button"
                        onClick={() => {
                            setEditedFirm(null);
                            setName('');
                            setDescription('');
                            setImages([]);
                        }}
                        className="btn-default">Hủy</button>
                    )}
                    <button type="submit" className="btn-primary py1">Lưu</button>
                </div>
            </form>
            {!editedFirm && (
                <table className="basic mt-4">
                    <thead>
                        <tr>
                            <td>Tên hãng</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        {firms.length > 0 && firms.map(firm => (
                            <tr key={firm.id}>
                                <td>{firm.name}</td>
                                <td>
                                    <button onClick={() => editFirm(firm)}  className="btn-default mr-1">Sửa</button>
                                    <button onClick={() => deleteFirm(firm)} className="btn-red">Xóa</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </Layout>
    );
}

export default Firm;

