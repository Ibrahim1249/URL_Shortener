import { Link } from "react-router-dom"
import logo from "../assets/logo.png"
import { Button } from "./ui/button"

function Navbar() {
  return (
    <>
     <nav className="flex items-center justify-between py-4 px-16 bg-blue-950">
         <img src={logo} alt="" className="w-16 "/>
       <Link to="/login">  <Button className="bg-slate-100 text-black hover:bg-blue-200 ">Login</Button></Link>
     </nav>
    </>
  )
}

export default Navbar