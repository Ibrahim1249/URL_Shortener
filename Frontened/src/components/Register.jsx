import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { useState } from "react";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate()
  const [isOpen , setIsOpen ] = useState(false)

  const handleRegister = async(data)=>{
     try{
        const response = await axios.post("http://localhost:6969/register" , data)
        console.log(response.data)
        if(response.status === 201){
           alert(response.data.message);
          navigate("/login")
        }else{
          alert( "Login failed:", response.data.message);
          return;
        }
     }catch(error){
       console.log(error)
     }
  }
  return (
    <>
      <div className="flex items-center justify-center flex-col py-[8%] w-[350px] mx-auto">
        <form
          onSubmit={handleSubmit(handleRegister)}
        >
          <Card className="w-full bg-slate-50 border-2">
            <CardHeader>
              <CardTitle className="text-center text-xl font-medium">
                Registration{" "}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <label> Username </label>
              <Input
                className="border border-red-900"
                placeholder="enter your username"
                type="text"
                {...register("username", {
                  required: "username is required",
                  pattern: {
                    value: /^[a-zA-Z0-9_-]{3,16}$/,
                    message: "Invalid username ",
                  },
                })}
              />
              {errors.username && (
                <p className="text-red-500 mt-2">{errors.username.message}</p>
              )}
            </CardContent>
            <CardContent>
              <label> Email </label>
              <Input
                className="border border-red-900"
                placeholder="enter your email"
                type="email"
                {...register("email", {
                  required: "email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Please enter a valid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 mt-2">
                  {errors.email.type === "pattern"
                    ? errors.email.message
                    : "Invalid email"}
                </p>
              )}
            </CardContent>
            <CardContent>
              <label> Password </label>
              <div className="relative ">
              <Input
                id="password"
                className={`border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter your password"
                type={isOpen ? "text" : "password"}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long",
                  },
                  validate: {
                    hasUppercase: (value) =>
                      /[A-Z]/.test(value) ||
                      "Password must contain at least one uppercase letter",
                    hasLowercase: (value) =>
                      /[a-z]/.test(value) ||
                      "Password must contain at least one lowercase letter",
                    hasNumber: (value) =>
                      /\d/.test(value) ||
                      "Password must contain at least one number",
                  },
                })}
              />
               <span onClick={()=>{setIsOpen(!isOpen)}} className="absolute top-1 right-1 p-2 cursor-pointer">{isOpen ? <EyeOpenIcon /> : <EyeClosedIcon/>}</span>
               </div>
              {errors.password && (
                <p className="text-red-500 mt-2">{errors.password.message}</p>
              )}
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full">
                Register
              </Button>
            </CardFooter>
            <CardFooter>
              <div className="flex items-center gap-2">
                <p>Already have an account?</p>
                <Link to="/login" className="text-red-600">
                  Login here
                </Link>
              </div>
            </CardFooter>
          </Card>
        </form>
      </div>
    </>
  );
}

export default Register;
