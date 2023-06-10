import NavAdmin from "./NavAdmin";
import {createContext, useEffect, useState} from "react";
import Logo from "./Logo";
import '../../css/layout.css';
import axios from "axios";

export default function Layout({children }) {
  const [showNav, setShowNav] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassWord] = useState("");

  const [isAdmin, setIsAdmin] = useState(true);

  async function signIn() {
    const data = {
      username, password
    }
    await axios.post('http://localhost:8080/api/auth/login', data).then(
      () => {
        setIsAdmin(true);
        alert('Đăng nhập thành công');
        window.localStorage.setItem('isAdmin', 'true');
        return;
      }
    );
    
    // if (res.data.success === true) {
    //   setIsAdmin(true);
    //   alert('Đăng nhập thành công');
    // }
    // //setIsAdmin(true);
    // window.localStorage.setItem('isAdmin', 'true');
  }

  useEffect(()=> {
    console.log("abc")
    const ft = window.localStorage.getItem('isAdmin');
    if (ft) setIsAdmin(true);
  },[])

  if (!isAdmin) {
    return (
      <div id="wrapper">
        <form action="" id="form-login">
            <h1 className="form-heading">Form đăng nhập</h1>
            <div className="form-group">
                <i className="ri-user-line"></i>
                <input type="text" className="form-input" placeholder="Tên đăng nhập" value={username}  onChange={ev => setUsername(ev.target.value)}/>
            </div>
            <div className="form-group">
                <i className="ri-key-2-line"></i>
                <input type="password" className="form-input" placeholder="Mật khẩu" value={password} onChange={ev => setPassWord(ev.target.value)}/>
                <div id="eye">
                    <i className="ri-eye-close-line"></i>
                </div>
            </div>
            <input type="submit" value="Đăng nhập" className="form-submit" onClick={signIn}/>
        </form>
    </div>
    );
  }


  return (
    <div className="bg-bgGray min-h-screen ">
      <div className="block md:hidden flex items-center p-4">
        <button onClick={() => setShowNav(!showNav)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
          </svg>
        </button>
        <div className="flex grow justify-center mr-6">
          <Logo />
        </div>
      </div>
      <div className="flex">
        <NavAdmin show={showNav} />
        <div className="flex-grow p-4">
          {children}
        </div>
      </div>
    </div>
  );
}