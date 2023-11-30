import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Todo = () => {
  const navigate= useNavigate();
    const [item,setItem]=useState('');
    const [date,setDate]=useState('');
    const [time,setTime]=useState('');
    const [data,setData]=useState([]);
    const [list,setList]=useState([]);
    function additem(){
        if(!item){
          alert("enter an item");
          return;
        }
        
    const items={
        id:Math.floor(Math.random()*1000),
        value1:item,
        value2:date,
        value3:time,
    }

    setData(oldList=>[...oldList,items]);
    setItem("");
    setDate("");
    }
    const Home = () =>{
      navigate('/home');
    }
    function deleteitem(id){
 const array=data.filter(a=>a.id!==id);
 setData(array);
    }
  return (
    <>
    <h1>todoList</h1>
    <input type="text" placeholder='add an item...' value={item} onChange={(e)=>{setItem(e.target.value)}}></input>
    <input type="date" value={date} onChange={(e)=>{setDate(e.target.value)}}></input>
    <input type="time" value={time} onChange={(e)=>{setTime(e.target.value)}}></input>
    <button onClick={additem}>Add</button>
    <button onClick={Home}>Back to Home</button>
    
    <ul>
    { data.map( a=>(
    <li key={a.id}>{a.value1}  {a.value2}  {a.value3}<button onClick={()=>deleteitem(a.id)}>❌</button></li> 
    )
    )
    }
    </ul>
    </>
  )
}

export default Todo