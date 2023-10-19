
import './App.css';

// import { TextField } from '@mui/material';
import { TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';






function App() {
  const[interst,setinterst]=useState(0)
  const[principle,setprinciple]=useState(0)
  const[rate,setrate]=useState(0)

  const[year,setyear]=useState(0)
  const [isprinciple,setisprinciple]=useState
  (true)
  const [israte,setisrate]=useState
  (true)

  const [isyear,setisyear]=useState
  (true)


  const getvalidate=(e)=>{
    const{name,value}=e.target
    console.log(name,value);

    const getvalidate=(e)=>{
      const {name,value}= e.target
    }
    if(!!value.match(/^[0-9]+$/)){
      // !! this is used to convert into boolean
      if(name=='principle'){
    setprinciple(value)
  setisprinciple(true)}
  else if(name=='rate'){
    setrate(value)
    setisrate(true)
  }
  else{
    setyear(value)
    setisyear(true)
  }
    }
    else{
      if(name=='principle'){setprinciple(value)
      setisprinciple(false)}
    else if (name=='rate'){
      setrate(value)
      setisrate(false)
    }
    else{
      setyear(value)
      setisyear(false)
    }
      

    }

  }
  const handlecalculate=(e)=>{
    e.preventDefault()
    if(!principle || !rate || !year){
      alert('please fill this form')
    }
    else{
      setinterst(principle*rate*year/100)
    }
  
  }
   const handlereset=(e)=>{
    setinterst(0)
    setprinciple(0)
    setrate(0)
    setyear(0)
    setisprinciple(0)
    setisrate(0)
    setisyear(0)
    
   }




  return (
    <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center w-100 bg-info'>
     <div className='bg-light p-5 rounded' style={{width:'500px'}}> <h1>Simple interest App</h1>
     <p>Calculate Simple Interest Easily</p>
     <div className='bg-warning d-flex justify-content-center align-items-center w-100 p-4 rounded-5 flex-column'>
       <h1>₹ {''}{interst}</h1>
       <p>Total Simple interest</p>
  
     </div>
     <form onSubmit={handlecalculate} className='mt-5'>
      <div className='mb-3'>
      
      <TextField value={principle || ""} onChange={(e)=>getvalidate(e)} name='principle' className='w-100' id="outlined-basic" label="Princiciple Amount" variant="outlined" />
     </div> {!isprinciple && <div><p className='text-danger'>Invalid Input</p></div>}
      <div className='mb-3'>
      
      <TextField  name='rate' value={rate|| ""}onChange={(e)=>getvalidate(e)} className='w-100' id="outlined-basic" label="Rate Of Interest" variant="outlined" />
      </div>      {!israte && <div><p className='text-danger'>Invalid Input</p></div>}
      <div className='mb-3'>
      
      <TextField name='year' value={year || ""}onChange={(e)=>getvalidate(e)} className='w-100' id="outlined-basic" label="Year(yr)" variant="outlined" />
      </div>      {!isyear && <div><p className='text-danger'>Invalid Input</p></div>}
      <Stack className='mt-3' direction="row" spacing={2}>
     <Button type='submit' disabled={isprinciple && israte && isyear?false:true} className='bg-success ' style={{width:'200px' ,height:'50px'}} variant="contained">Calculate</Button>
        <Button onClick={handlereset} style={{width:'200px' ,height:'50px'}} variant="outlined">Reset</Button>
  
</Stack>


     </form>
         </div>


    
    </div>
  );
}

export default App;
