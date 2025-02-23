import { useState } from 'react';
import React from 'react'

export default function LoginApp() {
    const [name, setName] = useState("");//giá trị nhập
    const [dis, setDis] = useState("Bạn chưa đăng nhập");//giá trị hiển thị
    const Display = (username) =>{
        if(username===""){
            setDis("Bạn chưa đăng nhập");
        }else{
            setDis("Welcome " + username);
        }
    }
    const Login = () => {
        Display(name);
    }
    const Logout = () => {
        setName("");
        Display("");
    }
    return (
        <div>
            <div>{dis}</div>
            <input type='text' placeholder='username'
                value={name}//để khi logout input về "" giống name
                onChange={(e)=>{setName(e.target.value)}}//để set name theo giá trị input khi thay đổi
            />
            <button onClick={Login}>Đăng nhập</button>
            <button onClick={Logout}>Đăng xuất</button>
        </div>
    );
}
