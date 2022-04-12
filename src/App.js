import React,{useState, useEffect} from 'react'
import "./App.css"

const App = () => {

 // https://fakestoreapi.com/products
 const [fake, setFake]=useState([]);
console.log(fake);
useEffect(() =>{
  fakeStore();
},[])

 const fakeStore=async()=>{
   const response =await fetch("https://fakestoreapi.com/products ");
   //console.log(response);
   const jsonData = await response.json();
  // console.log(jsonData);
  setFake(jsonData);

 }

   //fakeStore()
 

  return (
  

    <>

    <h2>Fake API Store</h2>
    <div className="container">

   {fake.map((values)=>{
     return(

      <>

      <div className="box">
    <div className="content">
    <h5>{values.title}</h5>
    <p>{values.description}</p>
    </div>

   <img src={values.image} alt=" "  />

    </div>
      </>
     )

   })}

    
    </div>
    </>
  )
}

export default App