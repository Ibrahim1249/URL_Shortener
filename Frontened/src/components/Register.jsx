import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";


function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
  return (
    <>
      <div className="flex items-center justify-center flex-col py-[8%] w-[350px] mx-auto">
        <Card className="w-full bg-slate-50 border-2">
          <CardHeader>
            <CardTitle className="text-center text-xl font-medium">Registration </CardTitle>
          </CardHeader>
          <CardContent>
            <label> Username </label>
            <Input
              className="border border-red-900"
              placeholder="enter your username"
              type="text"
              {...register("username" , {
                required : "username is required" ,
                pattern : {
                   value : /^[a-zA-Z0-9_-]{3,16}$/ , message : "Invalid username "
                }
             })}
            />
          </CardContent>
          <CardContent>
            <label> Email </label>
            <Input
              className="border border-red-900"
              placeholder="enter your email"
              type="email"
              {...register("email" , {
                required : "email is required" ,
                pattern : {
                   value : /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ , message : "Invalid email address"
                }
             })}
      
            />
          </CardContent>
          <CardContent>
            <label> Password </label>
            <Input
              className="border border-red-900"
              placeholder="enter your password"
              type="password"
              {...register("password" , {
                required : "password is required" ,
                pattern : {
                   value : /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/ , message : "Invalid password"
                }
             })}
            />
          </CardContent>
          <CardFooter>
            <Button className="w-full">Register</Button>
          </CardFooter>
         <CardFooter>
         <div className="flex items-center gap-2">
                <p>Already have an account?</p>
                <Link to="/login" className="text-red-600">Login here</Link>
             </div>
         </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default Register;
