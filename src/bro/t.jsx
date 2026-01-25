import { useEffect, useState } from "react";
function T(){
    const[color,setcolor]=useState("#fff");
    useEffect(()=>{
        document.body.style.backgroundColor=color;
         if (color === "rgb(255,0,0)") {
      document.title = "Red mode";
    } else if (color === "rgb(0,0,255)") {
      document.title = "Blue mode";
    } else if (color === "rgb(0,255,0)") {
      document.title = "Green mode";
    } else {
      document.title = "Bro-code";
    }
    },[color])
    return(<>
    <button onClick={()=>setcolor("rgb(255,0,0)")} style={{width:"2rem",height:"3rem",margin:"5px",backgroundColor:"red",borderRadius:"50%"}}/>
    <button onClick={()=>setcolor("rgb(0,0,255)")} style={{width:"2rem",height:"3rem",margin:"5px",backgroundColor:"blue",borderRadius:"50%"}}/>
    <button onClick={()=>setcolor("rgb(0,255,0)")} style={{width:"2rem",height:"3rem",margin:"5px",backgroundColor:"green",borderRadius:"50%"}}/>
    <button onClick={()=>setcolor("#fff")}>Reset</button>
    </>);

}
export default T;