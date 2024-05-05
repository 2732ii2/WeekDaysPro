// import logo from './logo.svg';
import timelogo from '../src/Comp/images/hourglass.png';
import { useEffect, useState } from 'react';
import './App.css';
import Apicall from './Comp/Api/Apicall';
import ImgComp from './Comp/ImgComp';

function App() {
  const [page,setpage]=useState(0);
  const [Data,setData]=useState([]);
  const [count,setcount]=useState(0);
  console.log(Data,count);
  useEffect(()=>{
   (async ()=>{
    const data= await Apicall(page)
    // console.log(data);
    setData(data?.jdList);
    setcount(data?.totalCount);
   })()
  },[page])
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      {
        Data.length!==0? <div className='Maincomp'>
        {
          Data.map((e,i)=>{
            return <div key={i} className='SameDivs'>
              <div className='smallSlit'>
                <ImgComp src={timelogo} style={{width:"15px",height:"15px"}} />
                <p className='posted'> Posted on {i+1} days ago </p>
              </div>
              <div className='mainslit_'>
             { e?.logoUrl ?<ImgComp src={e?.logoUrl} style={{width:"40px",height:"55px",marginTop:"-15px",border:"1px solid rgba(0,0,0,.1)",borderRadius:"2px"}} />:null}
               <div className='insideslit'>
                  <p className='companyName'>{e?.companyName}</p>
                  <p className='jobRole'>{`${e?.jobRole} Developer`}</p>
                  <p className='location'>{e?.location}</p>
               </div>
              </div>
              <p className='estimation'>Estimated Salary :{!e?.minJdSalary ?" ₹10": `₹${e?.minJdSalary }`} - {!e?.maxJdSalary ?"- ": `${e?.maxJdSalary }`} LPA </p>
              <p className='aboutComp'>About Company: </p>
              <p className='aboutUs'>About us </p>
              <p className='desc'>{e?.jobDetailsFromCompany}
              
              <strong className='view'>View job</strong>
              </p>
            </div>
          })
        }
        
        </div>:<p>loader ....</p>
      }
    </div>
  );
}

export default App;
