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
  
  function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    return (
      <>
        <div className="flex items-center justify-center flex-col py-[10%] w-[350px] mx-auto">
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
              <Button className="w-full">Login</Button>
            </CardFooter>
           <CardFooter>
           <div className="flex items-center gap-2">
                  <p>Create a new account?</p>
                  <Link to="/register" className="text-red-600">Click here</Link>
               </div>
           </CardFooter>
          </Card>
        </div>
      </>
    );
  }
  
  export default Login;
  