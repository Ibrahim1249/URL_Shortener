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
  function Login() {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const navigate = useNavigate()


      const handleLoginUser = async(data)=>{
        try{
          const response = await axios.post("http://localhost:6969/login" , data)
         if(response.status === 200){
           navigate("/" , {state: {user : response.data.userData}})
         }else {
          console.log("Login failed:", response.data.message);
        }
       }catch(error){
         console.log(error)
       }
      }
    return (
      <>
        <div className="flex items-center justify-center flex-col py-[8%] w-[350px] mx-auto">
          <form onSubmit={handleSubmit(handleLoginUser)}>
          <Card className="w-full bg-slate-50 border-2">
            <CardHeader>
              <CardTitle className="text-center text-xl font-medium">Login </CardTitle>
            </CardHeader>
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
              <Input
                id="password"
                className={`border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter your password"
                type="password"
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
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full">Login</Button>
            </CardFooter>
           <CardFooter>
           <div className="flex items-center gap-2">
                  <p>Create a new account?</p>
                  <Link to="/register" className="text-red-600">Click here</Link>
               </div>
           </CardFooter>
          </Card>
          </form>
        </div>
      </>
    );
  }
  
  export default Login;
  