import { useState } from 'react';
import React from 'react'

export default function Nhap() {
    const [name, setName] = useState("");
    const [dis, setDis] = useState("Chưa nhập")
    return (
        <>
            <input type='text' placeholder='cần hiển thị'
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={()=>setDis(name)}>Hiển thị</button>    
            <div>Tên của bạn: {dis}</div>
        </>
    )
}
