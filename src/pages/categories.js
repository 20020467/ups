import Layout from "./components/Layout";
import {useEffect, useState} from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import React from 'react'
import axios from "axios";
import { ReactSortable } from "react-sortablejs";
import Spinner from "./components/Spinner";

const Categories = () => {
    const [editedCategory, setEditedCategory] = useState(null);
    const [parent,setParent] = useState('');
    const [name,setName] = useState('');
    const [description, setDescription] = useState('');
    const [benefit, setBenefit] = useState('');
    const [Characteristic, setCharacteristic] = useState('');
    const [categories,setCategories] = useState([]);
    const [img, setImages] = useState([]);
    const [isUploading, setIsUploading] = useState(false);
    const MySwal = withReactContent(Swal);

    useEffect(() => {
        fetchCategories();
    }, [])

    async function fetchCategories() {
        axios.get('https://miencongnghe.vn/api/category/getAllCategory').then(result => {
            setCategories(result.data.data);
        });
    }

    async function saveCategory(ev){
        ev.preventDefault();
        const data = {
            name,
            parent,
            benefit,
            Characteristic,
            description,
            img
        };
        if (editedCategory) {
            data.id = editedCategory.id;
            await axios.put('https://miencongnghe.vn/api/category/'+data.id, data);
            setEditedCategory(null);
        } else {
            try {
                await axios.post('https://miencongnghe.vn/api/category/create', data);
            } catch(er) {
                alert('Danh mục đã tồn tại hoặc đang để trống');
            }
        }
        setName('');
        setParent('');
        setBenefit('');
        setCharacteristic('');
        setDescription('');
        setImages([]);
        fetchCategories();
    }

    function editCategory(category){
        setEditedCategory(category);
        setName(category.name);
        setParent(category.parent);
        setBenefit(category.benefit);
        setCharacteristic(category.Characteristic);
        setDescription(category.description);
        if (category.img) setImages(category.img);
    }

    function deleteCategory(category){
        MySwal.fire({
        title: 'Bạn có chắc không?',
        text: `Bạn có muốn xóa danh mục ${category.name}?`,
        showCancelButton: true,
        cancelButtonText: 'Hủy',
        confirmButtonText: 'Có',
        confirmButtonColor: '#d55',
        reverseButtons: true,
        }).then(async result => {
        if (result.isConfirmed) {
            const {id} = category;
            await axios.delete('https://miencongnghe.vn/api/category/'+id);
            fetchCategories();
        }
        });
    }

    async function uploadImages(ev) {
        if (ev.target.files[0]) {
            setIsUploading(true);
            const data = new FormData();
            data.append('data', ev.target.files[0]);
            const res = await axios.post('https://miencongnghe.vn/uploadImg', data);
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
            const res = await axios.post('https://miencongnghe.vn/deleteImg', data);
            if (!res.data.success) alert('Xóa ảnh không thành công')
            setImages(updatedLinks);
            const data2 = {
                img: updatedLinks
            };
            if (editedCategory) {
                data2.id = editedCategory.id;
                await axios.put('https://miencongnghe.vn/api/category/'+data2.id, data2);
            }
        }
        });
    }
    
    return (
        <Layout>
            <h1>Danh mục sản phẩm</h1>
            <label>
                {editedCategory
                ? `Sửa danh mục ${editedCategory.name}`
                : 'Tạo danh mục mới'}
            </label>
            <form onSubmit={saveCategory}>
                <div className="flex gap-1">
                    <input
                        type="text"
                        placeholder={'Nhập tên danh mục'}
                        onChange={ev => setName(ev.target.value)}
                        value={name}/>
                </div>

                <label>Mô tả dòng sản phẩm</label>
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
                        {img?.length > 0 && img.map( link => (
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

                <label>Lợi ích khi mua dòng sản phẩm </label>
                <textarea
                    placeholder=""
                    value={benefit}
                    onChange={ev => setBenefit(ev.target.value)}
                />

                <label>Đặc trưng của dòng sản phẩm</label>
                <textarea
                    placeholder=""
                    value={Characteristic}
                    onChange={ev => setCharacteristic(ev.target.value)}
                />
                <select
                    onChange={ev => setParent(ev.target.value)}
                    value={parent}>

                    <option value="">Không có danh mục cha</option>
                    {categories.length > 0 && categories.map(category => (
                        <option key={category.id} value={category.name}>{category.name}</option>
                    ))}

                </select>
                <div className="flex gap-1">
                    {editedCategory && (
                        <button
                        type="button"
                        onClick={() => {
                            setEditedCategory(null);
                            setName('');
                            setParent('');
                            setBenefit('');
                            setCharacteristic('');
                            setDescription('');
                            setImages([]);
                        }}
                        className="btn-default">Hủy</button>
                    )}
                    <button type="submit" className="btn-primary py1">Lưu</button>
                </div>
            </form>
            {!editedCategory && (
                <table className="basic mt-4">
                    <thead>
                        <tr>
                            <td>Tên danh mục</td>
                            <td>Danh mục cha</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.length > 0 && categories.map(category => (
                            <tr key={category.id}>
                                <td>{category.name}</td>
                                <td>{category.parent}</td>
                                <td>
                                    <button onClick={() => editCategory(category)}  className="btn-default mr-1">Sửa</button>
                                    <button onClick={() => deleteCategory(category)} className="btn-red">Xóa</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </Layout>
    );
}

export default Categories;

