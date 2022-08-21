import * as React from "react"

import {useEffect} from "react";
import {navigate} from "gatsby";

const IndexPage = ( ) => {

 useEffect(()=>{
   navigate('/home/')
 },[])
  return    <></>


}

export default IndexPage
