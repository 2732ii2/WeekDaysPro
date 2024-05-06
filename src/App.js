// import logo from './logo.svg';
import timelogo from '../src/Comp/images/hourglass.png';
import { useEffect, useRef, useState } from 'react';
import './App.css';
import Apicall from './Comp/Api/Apicall';
import ImgComp from './Comp/ImgComp';
import Selectbar from './Comp/selectbar/selectbar';
import InnerComp from './Comp/InnerComp';

function App() {
  const [page,setpage]=useState(0);
  const [Data,setData]=useState([]);
  const [filteredData,setFilteredData]=useState(Data?Data:[]);
  console.log(filteredData);
  console.log(Data);
  const [count,setcount]=useState(0);
  const [loading,setloading]=useState(false);
  const ref=useRef(null);
  const [parentNode,setparent]=useState();
  // console.log(parentNode);
  useEffect(() => {
    // console.log("udpated page",page);
    (async () => {
      setloading(true);
      const data = await Apicall(page);
      setloading(false);
      setData(prevData => [...prevData, ...data?.jdList]);
      setcount(data?.totalCount);
    })()
  }, [page]); 
  var c=0;
  function onScroll(e){
    // console.log("",e.target.clientHeight,e.target.scrollTop,e.target.scrollHeight);
    if((e.target.scrollTop+1356)>=e.target.scrollHeight ){
      console.log("getted ");
      c=1
    }
    else{
      c=0;
    }
      if(c===1){
        setpage(page+1)
      }
  }
  
  useEffect(()=>{
    if(parentNode){
      parentNode.addEventListener("scroll",onScroll);
      return ()=>{
        parentNode.removeEventListener("scroll",onscroll);
      }
    }

  },[parentNode,page])

  
  const list=["Product Manager","Frontend","Backend","Android","Tech Lead","Ios"];
  const list1=["Under 50","Under 100","Under 200","1000-5000"];
  const list2=["0-1","1-3"," 3-5","5+"];
  const list3=["Remote","Hybrid"," On-site",];
  const list4=["Under 10 Lpa","Under 20 Lpa","Under 50 Lpa", "50 Lpa +"];


  const [role,setRole]=useState("");
  const [noofemployes,setNoofemployes]=useState("");
  const [exp,setExp]=useState("");
  const [location,setlocation]=useState("");
  const [minbase,setminbase]=useState("");

  useEffect(()=>{
    if(ref.current){
      setparent(ref.current.parentElement);
    }
    console.log(role,noofemployes,exp,location,minbase);
    setFilteredData(Data.filter((e)=>{
      if(e.jobRole == role.toLowerCase())
      {
        return e
      }
    }))

  },[Data,role,noofemployes,exp,location,minbase])
  useEffect(()=>{
    // console.log(role,noofemployes,exp,location,minbase);
    // setFilteredData(Data.filter((e)=>{
    //   if(e.jobRole == role.toLowerCase())
    //   {
    //     return e
    //   }
    // }))
  },[role,noofemployes,exp,location,minbase])
  return (
    <div className="App">
      <header className="App-header">
        <Selectbar listofoptions={list} label={"Role"} updatedstate={role} setupdatedstate={setRole} style={{width:"200px"}} />
        <Selectbar listofoptions={list1} label={"No of Employes"} updatedstate={noofemployes} setupdatedstate={setNoofemployes} style={{width:"250px"}} />
        <Selectbar listofoptions={list2} label={"Experience"} updatedstate={exp} setupdatedstate={setExp} style={{width:"170px"}} />
        <Selectbar listofoptions={list3} label={"Remote"} updatedstate={location} setupdatedstate={setlocation} style={{width:"200px"}} />
        <Selectbar listofoptions={list4} label={"Min Base Pay"} updatedstate={minbase} setupdatedstate={setminbase} style={{width:"200px"}} />
        <input  className='input_' placeholder='search your company' />
      </header>
      <header className="App-header1">
        <Selectbar listofoptions={list} label={"Role"} updatedstate={role} setupdatedstate={setRole} style={{width:"40%"}} />
        <Selectbar listofoptions={list1} label={"No of Employes"} updatedstate={noofemployes} setupdatedstate={setNoofemployes} style={{width:"50%"}} />
        <Selectbar listofoptions={list2} label={"Experience"} updatedstate={exp} setupdatedstate={setExp} style={{width:"45%"}} />
        <Selectbar listofoptions={list3} label={"Remote"} updatedstate={location} setupdatedstate={setlocation} style={{width:"45%"}} />
        <Selectbar listofoptions={list4} label={"Min Base Pay"} updatedstate={minbase} setupdatedstate={setminbase} style={{width:"90%"}} />
        <input  className='input_' placeholder='search your company' />
      </header>
      {
        Data?.length!==0? <div  className='Maincomp'>
        <InnerComp reference={ref} data={filteredData.length?filteredData:Data} />
        {loading?<div className='loader'></div>:null}
        </div>:<div className='loader'></div>
      }
    </div>
  );
}

export default App;
