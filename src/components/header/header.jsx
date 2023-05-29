import React, { useRef} from 'react'
import './header.css';

const Header = () => {
    const spCnRef = useRef(null);
    const spSnRef = useRef(null);
    const mySidenavRef = useRef(null);

    const handleSpSnClick = () => {
        if (spSnRef.current) {
            spSnRef.current.style.display = 'none';
        }
        if (spCnRef.current) {
            spCnRef.current.style.display = 'block';
        }
        document.body.classList.add('push-left');
        if (mySidenavRef.current) {
            mySidenavRef.current.style.width = '280px';
        }
    };

    const handleSpCnClick = () => {
        if (spCnRef.current) {
            spCnRef.current.style.display = 'none';
        }
        if (spSnRef.current) {
            spSnRef.current.style.display = 'block';
        }
        document.body.classList.remove('push-left');
        if (mySidenavRef.current) {
            mySidenavRef.current.style.width = '0';
        }
    };

    function toggleSubMenu(id) {
        const subMenu = document.getElementById(id);
        const subMenuP = subMenu.closest(".sub-menu-mb");
        if (subMenu.style.maxHeight) {
            subMenu.style.maxHeight = null;
        } else {
            subMenu.style.maxHeight = subMenu.scrollHeight + "px";
            subMenuP.style.maxHeight = subMenuP.scrollHeight+ subMenu.scrollHeight + "px";
        }
    }

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
        <header>
            <div className="header-top">
                <div className="flex-bw">
                    <div className=''>
                        
                    </div>
                </div>
            </div>
            <div className='header-bottom'>
            <ul className="ul-main-menu hide1199">
                <li><a href='/'>Home</a></li>
				<li><a href='/'>Giới thiệu</a></li>
                {categories.map(value => (
                    <li className="has-sub">
                        <a href={value.href}>{value.name} <i class="ri-arrow-down-s-line"></i></a>
                        <ul className="ul-sub-menu">
                            {value.children.map(val1 => {
                                if (val1.children.length > 0) 
                                    return (
                                        <li className="has-sub-2">
                                            <a href={val1.href}>{val1.name}</a>                                  
                                            <ul className="ul-sub-menu-2">
                                                {val1.children.length > 0 && val1.children.map(val2 => (
                                                    <li><a href={val2.href}>{val2.name}</a></li>
                                                ))}
                                            </ul>                               
                                        </li>
                                    )
                                else return (
                                    <li><a href={val1.href}>{val1.name}</a></li>
                                )
                            })}
                        </ul>
                    </li>
                ))}
                <li><a href='/'>Dự án</a></li>
                <li><a href='/'>Tin tức</a></li>
                <li><a href='/'>Liên hệ</a></li>
            </ul>
            <div className="show1199">
				<div className="flex-bw">
					<div className="block-search-top">
						<form id="searchtop2" method="post" action="">
							<input  type="text" 
                                    placeholder="Nhập từ khóa bạn muốn tìm ..." 
                                    name="textsearch" 
                                    id="textsearchMB" 
                                    oninvalid="this.setCustomValidity('Vui lòng nhập từ khóa')" 
                                    oninput="this.setCustomValidity('')" 
                                    required 
                            />
							<button type="submit" id="buttonMB"><i class="ri-search-line"></i></button>
						</form>
					</div>
					
                    <span className="b_span" onClick={handleSpSnClick} ref={spSnRef}>
                        <i class="ri-menu-line"></i>
                    </span>
                    <span className="b_span" onClick={handleSpCnClick} ref={spCnRef} style={{ display: 'none' }}>
                        <i class="ri-close-line"></i>
                    </span>
				</div>
                <div ref={mySidenavRef} className="sidenav">
                    <ul className="menu-mobile" id="accordion">
						<li><a href="/">Home</a></li>   
						<li><a href="gioi-thieu">Giới thiệu</a></li>
                        {categories.map(value => (
                            <li className="hassub-mb">
                                <p className="phelp">
                                    <a href={value.href}>{value.name}</a>
                                    <a className="a-icon"  onClick={() => toggleSubMenu(value.name)}><i class="ri-arrow-down-s-line"></i></a>
                                </p>
                                <ul className="sub-menu-mb " id={value.name}>
                                    {value.children.map(val1 => {
                                        if (val1.children.length > 0) 
                                            return (
                                                <li className="hassub-mb">
                                                    <p class="phelp">
                                                        <a href={val1.href}>{val1.name}</a>
                                                        <a className="a-icon"  onClick={() => toggleSubMenu(val1.name)}><i class="ri-arrow-down-s-line"></i></a>
                                                    </p>                                 
                                                    <ul className="sub-menu-mb " id={val1.name}>
                                                        {val1.children.length > 0 && val1.children.map(val2 => (
                                                            <li><a href={val2.href}>{val2.name}</a></li>
                                                        ))}
                                                    </ul>                               
                                                </li>
                                            )
                                        else return (
                                            <li><a href={val1.href}>{val1.name}</a></li>
                                        )
                                    })}
                                </ul>
                            </li>
                        ))}
                        <li><a href="du-an">Dự án</a></li>
						<li><a href="tin-tuc">Tin tức</a></li>
						<li><a href="lien-he">Liên hệ</a></li>
                    </ul>
                </div>
            </div>              
        </div>
        </header>
    )
}

export default Header