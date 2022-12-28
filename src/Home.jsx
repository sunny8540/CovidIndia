import React, { useState } from "react";
import Links from "./Links";
function Home(){
    const [nums,setNum]=useState("1");

    function dec(){
        setNum(nums-1);
        function inc(){
            setNum(nums+1);
        }
        return (
            <div>
     <Links />
    <div className="all">
    <button onClick={dec}>- </button>  
<div className="num">     {nums}</div>
     <button onClick={inc}>+</button>  
    </div>
    <a href="geeksforgeeks.png" download="GFG">
         <button type="button">Download</button>
         </a>
    </div>
  )
}

}
export default Home
