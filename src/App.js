// import logo from './logo.svg';
import timelogo from '../src/Comp/images/timebottle.jpeg';
import { useEffect, useState } from 'react';
import './App.css';
import Apicall from './Comp/Api/Apicall';

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
                 </div>

            </div>
          })
        }
        
        </div>:<p>loader ....</p>
      }
    </div>
  );
}

export default App;
