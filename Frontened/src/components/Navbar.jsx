import logo from "../assets/logo.png"
import { Button } from "./ui/button"

function Navbar() {
  return (
    <>
     <nav className="flex items-center justify-between py-4 px-16 bg-blue-950">
         <img src={logo} alt="" className="w-16 "/>
         <Button className="bg-slate-100 text-black hover:bg-blue-200 ">Login</Button>
     </nav>
    </>
  )
}

export default Navbar