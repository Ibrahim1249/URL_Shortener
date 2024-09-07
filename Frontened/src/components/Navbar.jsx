import logo from "../assets/logo.jpeg"
import { Button } from "./ui/button"

function Navbar() {
  return (
    <>
     <nav className="flex items-center justify-between py-4 px-16 bg-slate-200">
         <img src={logo} alt="" className="w-16 "/>
         <Button>Login</Button>
     </nav>
    </>
  )
}

export default Navbar