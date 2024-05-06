import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import "./selectbar.css";
export default function Selectbar(props) {
    const {label,listofoptions,updatedstate,setupdatedstate,style}=props
    const [show,setshow]=useState(false);
  return (
    <div className='toplabel' onMouseLeave={()=>setshow(false)} style={style}>
    <div onClick={()=>setshow(!show)} className='label'>
        {updatedstate?updatedstate: label} <span className='arrowdown'> <KeyboardArrowDownIcon style={{color:"rgb(204, 204, 204)"}} /></span>
    </div>
   {show && <div className='options_'>
        {
            listofoptions.map((e,i)=>{
                return <div key={i} onClick={()=>{
                    setupdatedstate(e)
                    setshow(!show)
                }} className='opt'>{e}</div>
            })
        }
    </div>}
    </div>
  )
}
