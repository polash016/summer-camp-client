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
import { FaEye } from "react-icons/fa";
import SocialLogin from "../../pages/Shared/SocialLogin/SocialLogin";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const [display, setDisplay] = useState(true);
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        Swal.fire({
          title: `Welcome To Crescendo Camp ${user.displayName}`,
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err));
  };
  return (
    <Card className="w-96 mx-auto mt-40">
      <CardHeader
        variant="gradient"
        color="blue"
        className="mb-4 grid h-28 place-items-center"
      >
        <Typography variant="h3" color="white">
          Sign In
        </Typography>
      </CardHeader>
      <form onSubmit={handleLogin}>
        <CardBody className="flex flex-col gap-4">
          <Input name="email" label="Email" size="lg" />
          <Input
            name="password"
            type={display ? "password" : "text"}
            label="Password"
            size="lg"
            icon={
              <button className="text-xl" onClick={() => setDisplay(false)}>
                <FaEye />
              </button>
            }
          />
          <div className="-ml-2.5">
            <Checkbox label="Remember Me" />
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button type="submit" variant="gradient" fullWidth>
            Sign In
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Don&apos;t have an account?
            <Typography
              as="a"
              href="/register"
              variant="small"
              color="blue"
              className="ml-1 font-bold"
            >
              Signup
            </Typography>
          </Typography>
        </CardFooter>
      </form>
      <SocialLogin></SocialLogin>
    </Card>
  );
};

export default Login;
