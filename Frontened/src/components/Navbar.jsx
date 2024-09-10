import { Link } from "react-router-dom"
import logo from "../assets/logo.png"
import { Button } from "./ui/button"
import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";

import { ProfileDrawer } from "./profile-drawer";

function Navbar() {
  const [user,setUser] = useState()
  const location = useLocation()
  useEffect(()=>{
    if(location.state && location.state.user){
       setUser(location.state.user)
    }else{
     console.log("No data is available ")
    }
   },[location])
 
  console.log(user)
  return (
    <>
     <nav className="flex items-center justify-between py-4 px-16 bg-blue-950">
         <img src={logo} alt="" className="w-16 "/>
      {user ? <ProfileDrawer user={user} setUser={setUser}/> : <Link to="/login">  <Button className="bg-slate-100 text-black hover:bg-blue-200 ">Login</Button></Link>}
     </nav>
    </>
  )
}

export default Navbar