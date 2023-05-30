import Layout from "./components/Layout";
import {useEffect, useState} from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import '../../css/admin.css'

import React from 'react'

const Categories = () => {
    const [editedCategory, setEditedCategory] = useState(null);
    const [parentCategory,setParentCategory] = useState('');
    const [name,setName] = useState('');
    //const [categorys,setCategories] = useState([]);
    const MySwal = withReactContent(Swal);

    // useEffect(() => {
    //     fetchCategories();
    // }, [])

    // function fetchCategories() {
    //     axios.get('/api/category').then(result => {
    //         setCategories(result.data);
    //     });
    // }

    const categories = [{
        _id: "1",
        name: "Ô Long",
        parent: {
            _id: "1",
            name: "Nutifrust",
        }
    },{
        _id: "2",
        name: "Nutifrust",
        parent: ""
    },{
        _id: "3",
        name: "VinaMilk",
        parent: {
            _id: "1",
            name: "Ô Long",
        }
    }]

    async function saveCategory(ev){
        ev.preventDefault();
            const data = {
            name,
            parentCategory,
        };
        if (editedCategory) {
            data._id = editedCategory._id;
            //await axios.put('/api/category', data);
            setEditedCategory(null);
        } else {
            //await axios.post('/api/category', data);
        }
        setName('');
        setParentCategory('');
        //fetchCategories();
    }

    function editCategory(category){
        setEditedCategory(category);
        setName(category.name);
        setParentCategory(category.parent?._id);
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
            // const {_id} = category;
            // await axios.delete('/api/category?_id='+_id);
            // fetchCategories();
        }
        });
    }
    
    return (
        <>
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
                <select
                    onChange={ev => setParentCategory(ev.target.value)}
                    value={parentCategory}>

                    <option value="">Không có danh mục cha</option>
                    {categories.length > 0 && categories.map(category => (
                        <option key={category._id} value={category._id}>{category.name}</option>
                    ))}

                </select>
                <div className="flex gap-1">
                    {editedCategory && (
                        <button
                        type="button"
                        onClick={() => {
                            setEditedCategory(null);
                            setName('');
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
                            <tr key={category._id}>
                                <td>{category.name}</td>
                                <td>{category?.parent?.name}</td>
                                <td>
                                    <button onClick={() => editCategory(category)}  className="btn-default mr-1">Sửa</button>
                                    <button onClick={() => deleteCategory(category)} className="btn-red">Xóa</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
}

export default Categories;

