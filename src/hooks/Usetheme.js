
import React ,{useEffect,useState}
 from "react";
export default function Usetheme(){

    const [darkmode,SetdarKmode]=useState(false);

     const handlecheckchange=e=>{
        SetdarKmode(e.target.checked)
    }
      return{
        darkmode,handlecheckchange
      }
  
     }
     