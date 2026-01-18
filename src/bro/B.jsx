import { useState } from "react";
import './b.css'
function B(){
    const[Task,setTask]=useState([]);
    const[Newtask,setNewtask]=useState("");
    const[color,setcolor]=useState();

    function bc(event){
        setcolor(event.target.value);
    }

    function handleinputchange(event){
        setNewtask(event.target.value); 
    }

    function addTask(){
        if(Newtask.trim()==="") return;
        setTask(T=>([...T,Newtask]));
        setNewtask("");
    }

    function Delete(index){
        setTask(t=>t.filter((_,i)=>i!== index));
    }
    function up(index){
        if(index>0){
        const ui=[...Task];
        [ui[index],ui[index-1]]=[ui[index-1],ui[index]];
        setTask(ui);
        }
    }
    function down(index){
        if(index<Task.length-1){
        const ui=[...Task];
        [ui[index],ui[index+1]]=[ui[index+1],ui[index]];
        setTask(ui);
        }
    }
    return(<div className="content" style={{background:color}}>
    <input type="text" value={Newtask} onChange={handleinputchange} placeholder="enter Task" className="t"/>
    <br></br>
    <button onClick={addTask}>Add</button>
    <ol>
       {Task.map((T,index)=>
        <li key={index}>
            <span className="text">{T}</span>
            <button className="Delete" onClick={()=>Delete(index)}>Delete</button>
            <button className="up" onClick={()=>up(index)}>UP</button>
            <button className="down" onClick={()=>down(index)}>Down</button>
        </li>
    )} 
    </ol>
    <input type="color" onChange={bc} className="c"/>
    </div>);
}
export default B;