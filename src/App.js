// import logo from './logo.svg';
import timelogo from '../src/Comp/images/hourglass.png';
import { useEffect, useRef, useState } from 'react';
import './App.css';
import Apicall from './Comp/Api/Apicall';
import ImgComp from './Comp/ImgComp';

function App() {
  const [page,setpage]=useState(0);
  const [Data,setData]=useState([]);
  const [count,setcount]=useState(0);
  const [loading,setloading]=useState(false);
  const ref=useRef(null);
  const [parentNode,setparent]=useState();
  console.log(parentNode);
  useEffect(() => {
    console.log("udpated page",page);
    (async () => {
      setloading(true);
      const data = await Apicall(page);
      setloading(false);
      setData(prevData => [...prevData, ...data?.jdList]);
      setcount(data?.totalCount);
    })()
  }, [page]); 

  function onScroll(e){
    console.log("",e.target.clientHeight,e.target.scrollTop,e.target.scrollHeight);
    var c=0;
    if((e.target.scrollTop+1356)>=e.target.scrollHeight ){
      console.log("getted ");
      c=1
    }
    setTimeout(() => {
      if(c===1){
        setpage(page+1)
      }
    }, 500);
  }
  
  useEffect(()=>{
    if(parentNode){
      parentNode.addEventListener("scroll",onScroll);
      return ()=>{
        parentNode.removeEventListener("scroll",onscroll);
      }
    }

  },[parentNode,page])

  useEffect(()=>{
    if(ref.current){
      setparent(ref.current.parentElement);
    }

  },[Data])
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      {
        Data?.length!==0? <div  className='Maincomp'>
        {
          Data.map((e,i)=>{
            if(i==Data?.length-1){
               return  <div  ref={ref}  key={i} className='SameDivs'>
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
                <button className='apply'>Easy Apply</button>
                <button className='referral'> Unlock referrals asks </button>

              </div>
            }
            else
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
              <button className='apply'>Easy Apply</button>
              <button className='referral'> Unlock referrals asks </button>

            </div>
          })
        }
        {loading?<div className='loader'></div>:null}
        </div>:<div className='loader'></div>
      }
    </div>
  );
}

export default App;
