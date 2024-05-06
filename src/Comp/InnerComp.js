import React from 'react'
import ImgComp from './ImgComp'
import timelogo from './images/hourglass.png';

export default function InnerComp({data,reference}) {
  return (
    <>
    
    {
          data.map((e,i)=>{
            if(i==data?.length-1){
               return  <div  ref={reference}  key={i} className='SameDivs'>
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
    </>
  )
}
