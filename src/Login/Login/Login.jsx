import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Button,
  } from "@material-tailwind/react";
import { useState } from "react";
import { FaBeer, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
    const [display, setDisplay] = useState(true)
    return (
        <Card className="w-96 mx-auto mt-48">
      <CardHeader
        variant="gradient"
        color="blue"
        className="mb-4 grid h-28 place-items-center"
      >
        <Typography variant="h3" color="white">
          Sign In
        </Typography>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        <Input label="Email" size="lg" />
        <Input type={display ? 'password': 'text'} label="Password" size="lg" icon={<button onClick={() => setDisplay(false)}><FaEye /></button> } />
        <div className="-ml-2.5">
          <Checkbox label="Remember Me" />
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <Button variant="gradient" fullWidth>
          Sign In
        </Button>
        <Typography variant="small" className="mt-6 flex justify-center">
          Don't have an account?
          <Typography
            as="a"
            href='/register'
            variant="small"
            color="blue"
            className="ml-1 font-bold"
          >
            Signup
          </Typography>
        </Typography>
      </CardFooter>
    </Card>
    );
};

export default Login;