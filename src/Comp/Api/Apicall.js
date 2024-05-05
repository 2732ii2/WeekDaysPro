import React from 'react'

export default async function Apicall(page) {
    console.log("page is getted",page);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
    "limit": 10,
    "offset": page?page:0
    });

    const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body
    };
    // text
  try{
    const data= await  fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
    const main=await data.json();
    return main;
  }
  catch(e){
    return e.message;
  }
    // .then((response) => response.json())
    // .then((result) =>  (result))
    // .catch((error) => console.error(error));
}
