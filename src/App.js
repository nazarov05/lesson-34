import { useEffect, useState } from "react";
import axios from 'axios'
import './App.css'


function App() {


 
  const [data,setData]= useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/cars')
    .then((res)=>{
      // setData(res.data)
      setData(res.data)
      // console.log(res)
    })

  },[])
 
  return (
    <div className="App">
     
    {
      data.map((item, index)=>{
        return(
          <div className="box" key={index}>
            <div className="img-box">
            <img  src={item.image}></img>
            </div>
          <h1>{item.name}</h1>
          <h1 className="price">{item.price}$</h1>
          <td>{item.year}yil</td>
          
        </div>
        )

      })
    }
   
    </div>
  );
}

export default App;
