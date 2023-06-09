import React, { useEffect } from "react";
import './sidebar.css';

const SideBar = () => {
    const handleShowSubAsideClick = (event) => {
        const showSubAside = event.target;
        const hasSubAside = showSubAside.closest(".has-sub-aside");
        const ulSubAside = hasSubAside.querySelector(".ul-sub-aside");

        ulSubAside.classList.toggle("active");
        const listCaseAside = ulSubAside.closest(".list-cate-aside");

        if (ulSubAside.style.maxHeight) {
            ulSubAside.style.maxHeight = null;
        } else {
            ulSubAside.style.maxHeight = ulSubAside.scrollHeight + "px";
            listCaseAside.style.maxHeight = listCaseAside.scrollHeight+ ulSubAside.scrollHeight + "px";
        }
    };
    const handleClickA = (event) => {
        const controlAside = event.target;
        const boxTitAside = controlAside.closest(".box-tit-aside");
        const nextElement = boxTitAside.nextElementSibling;
        controlAside.classList.toggle("active");

        if (nextElement.style.maxHeight) {
            nextElement.style.maxHeight = null;
        } else {
            nextElement.style.maxHeight = nextElement.scrollHeight + "px";
        }
    };

    const categories = [{
        _id: "1",
        href: "/",
        name: "Bộ Lưu Điện UPS",
        children: [{
            _id: "1",
            href: "/",
            name: "Bộ Lưu Điện UPS CYBER",
            children: [{
                _id: "1",
                href: "/",
                name: "UPS Cyber Online",
                children: []
            },{
                _id: "1",
                href: "/",
                name: "UPS Offline Cho Máy Tính - SERVER",
                children: []
            }]
        },{
            _id: "1",
            href: "/",
            name: "Bộ Lưu Điện UPS DELTA – TURKEY",
            children: []
        },{
            _id: "1",
            href: "/",
            name: "Bộ Lưu Điện UPS SANTAK",
            children: []
        },{
            _id: "1",
            href: "/",
            name: "Bộ Lưu Điện UPS APC",
            children: []
        }]
    },{
        _id: "1",
        href: "/",
        name: "Giải pháp Data Center",
        children: [{
            _id: "1",
            href: "/",
            name: "BKVM Switch",
            children: [{
                _id: "1",
                href: "/",
                name: "ANGUS",
                children: []
            },{
                _id: "1",
                href: "/",
                name: "KINAN",
                children: []
            },{
                _id: "1",
                href: "/",
                name: "LANBE",
                children: []
            },{
                _id: "1",
                href: "/",
                name: "ATEN",
                children: []
            }]
        },{
            _id: "1",
            href: "/",
            name: "Tủ Rack",
            children: []
        },{
            _id: "1",
            href: "/",
            name: "PDU",
            children: []
        },{
            _id: "1",
            href: "/",
            name: "Network Switch",
            children: []
        }]
    },{
        _id: "1",
        href: "/",
        name: "Ắc quy",
        children: [{
            _id: "1",
            href: "/",
            name: "Ắc quy Globe",
            children: []
        },{
            _id: "1",
            href: "/",
            name: "Ắc quy Vision",
            children: []
        },{
            _id: "1",
            href: "/",
            name: "Ắc quy Long",
            children: []
        }]
    }]
    return (
        <div className="col l-2-4 m-0 c-0">
            {categories.map(value => (
                <div className="block-aside">
                    <div className="box-tit-aside">
                        <div class="inside-tit-aside">
                            <h3 className="tit-aside"><a href={value.href} className="color:#ffff"><i className="ri-menu-2-line"></i> {value.name}</a></h3>
                            <span className="control-aside" onClick={handleClickA}><i className="ri-arrow-down-s-fill"></i></span>    
                        </div>
                    </div>
                
                    <ul className="list-cate-aside">
                        {value.children.map(val1 => {
                            if (val1.children.length > 0) 
                                return (
                                    <li className="has-sub-aside">                                       
                                        <a href={val1.href}><i className="ri-arrow-right-s-fill"></i> {val1.name}</a>
                                        <a className="show-sub-aside" onClick={handleShowSubAsideClick}><i className="ri-arrow-down-s-line"></i></a>                                                                       
                                        <ul className="ul-sub-aside">
                                            {val1.children.map(val2 => (
                                                <li><i className="ri-arrow-right-s-line"></i> <a href={val2.href}>{val2.name}</a></li>
                                            ))}
                                        </ul>                               
                                    </li>
                                )
                            else return (
                                <li><a href={val1.href}><i className="ri-arrow-right-s-fill"></i> {val1.name}</a></li>
                            )
                        })}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default SideBar;
