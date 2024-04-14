import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
  import { Link } from "react-router-dom";

   
  export function LoginForm() {
    return (
       <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray" className="py-4">
          Create an account
        </Typography>
       
        <form className="mt-8 mb-2 w-[100%] p=10 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            
           <input type="text" placeholder="First Name" className="bg-gray-200 py-4 px-3 text-gray-900 text-base rounded-lg font-bold" />
           <input type="text" placeholder="Last Name" className="bg-gray-200 py-4 px-3 text-gray-900 text-base rounded-lg font-bold" />
           <input type="text" placeholder="Email" className="bg-gray-200 py-4 px-3 text-gray-900 text-base rounded-lg font-bold" />
           <input type="password" placeholder="Password" className="bg-gray-200 py-4 px-3 text-gray-900 text-base rounded-lg font-bold" />

         
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center text-xs"
              >
                By proceeding, I agree to all 
                <span
                  className="text-blue-800 text-xs"
                >
                  &nbsp;T&C </span> and<span
                  className="text-blue-800 text-xs"
                >
                 &nbsp;Privacy Policy
                </span>
              </Typography>
              
            }
            containerProps={{ className: "-ml-2.5" }}
          />
                  <Link to="/goals">

          <Button className="mt-40" fullWidth>
            Create an Account
          </Button>
          </Link>

          <img src="https://i.ibb.co/TY322K5/Screenshot-2024-04-13-222304.png" className="py-3" />
          <div className="flex gap-3 justify-center align-middle items-center">
            <div className="">
                <img className="h-12 w-12 p-3 rounded-md border-2 border-black " src="https://banner2.cleanpng.com/20180324/sww/kisspng-google-logo-g-suite-chrome-5ab6e618b3b2c3.5810634915219358967361.jpg" alt="" />
            </div>
            <div className="">
                <img className="h-12 w-12 p-1 rounded-md border-black border-2" src="https://png.pngtree.com/element_our/sm/20180626/sm_5b321c969857d.png" alt="" />
            </div>
          </div>
          <Typography color="gray" className="mt-6 text-center font-normal">
            Already have an account?{" "}
            <Link to="/signin">
            <a className="font-medium text-blue-900 underline">
              Login In
            </a>
            </Link>
          </Typography>
        </form>
      </Card>
    );
  }