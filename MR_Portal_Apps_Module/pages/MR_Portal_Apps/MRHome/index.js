import React, { useState, useEffect } from "react";
import Navbar from "@/components/MR_Portal_Apps/Navbar";
import Hero from "@/components/MR_Portal_Apps/Hero";
import { useRouter } from "next/router";
import { enforceMode, getAppMode, MOBILE } from "@/utils/appMode";
const index = () => {

  const router = useRouter()
  const [mode, setMode] = useState(null)

   useEffect(() => {
    if(window.localStorage){
      const uid = localStorage.getItem("uid");
      if (!uid) {
        router.push("/login");
        return;
      }
      setMode(getAppMode())
      // Ye mobile ka home hai — sirf web mode wale user ko hi web home bhejo.
      enforceMode(router, MOBILE)
    }
  }, []);
  const ab= new Promise((res, rej)=>
  {
    setTimeout(()=> {
      res("! ")
    },404)
  
   
  }
 )
 ab.then((res, rej)=>console.log("promises", res, rej))
 

  return (
    <>
      <main className="w-full overflow-hidden h-screen ">
        <Navbar></Navbar>
        <Hero></Hero>
      </main>
    </>
  );
};

export default index;
