import { useState } from 'react';
import React from 'react'

export default function LoginApp() {
    const [name, setName] = useState("");
    const [dis, setDis] = useState("Bạn chưa đăng nhập");
    const Display = () =>{
        if(name===""){
            setDis("Bạn chưa đăng nhập");
        }else{
            setDis("Welcome " + name);
        }
    }
    return (
        <div>
            <div>{dis}</div>
            <input type='text' placeholder='username'/>
            <button onClick={()=>setName("phuc")}>Nhập phuc</button>
            <button onClick={Display}>Đăng nhập</button>
            <button onClick={()=>{setName("");Display();}}>Đăng xuất</button>
        </div>
    );
}
