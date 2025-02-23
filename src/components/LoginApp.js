import { useState } from 'react';
import React from 'react'

export default function LoginApp() {
    const [name, setName] = useState("");
    const [dis, setDis] = useState("Bạn chưa đăng nhập");
    const Display = (username) =>{
        if(username===""){
            setDis("Bạn chưa đăng nhập");
        }else{
            setDis("Welcome " + username);
        }
    }
    const Logout = () => {
        setName("");
        Display("");
    }
    return (
        <div>
            <div>{dis}</div>
            <button onClick={()=>setName("phuc")}>Nhập phuc</button>
            <button onClick={()=>Display(name)}>Đăng nhập</button>
            <button onClick={Logout}>Đăng xuất</button>
        </div>
    );
}
