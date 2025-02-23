import React, { useState } from 'react'

export default function CountApp() {
    const [count, setCount] = useState(0);
    const [level, setLevel] = useState(1);
    const UpdateLevel = () => {
        if(count > level*10){
            setLevel(level+1);
            setCount(count-level*10);
        }else{
            alert("Bạn chưa đủ tiền");
        }
    }
    return (
        <>
            <div>Số lần click: {count}</div>
            <div>level: {level}</div>
            <button onClick={()=>setCount(count+level)}>Đào coin</button>  

            <button onClick={UpdateLevel}>Update level</button>   
            <button onClick={()=>{setCount(0);setLevel(1);}}>Reset App</button>   
        </>
    )
}
