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
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
    .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser)
        updateUserProfile(data.name, data.photoURL)
        .then(() => {
            const savedUser = {name: data.name, email: data.email}
            fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(savedUser)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){
                    reset()
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "User Updated Succesfully",
                        showConfirmButton: false,
                        timer: 1500,
                      });
                      navigate('/')
                }
            })
        })
        // .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
  };

  const password = watch("password");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card className="w-96 mx-auto mt-48">
        <CardHeader
          variant="gradient"
          color="blue"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Sign Up
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input
            {...register("name", { required: true })}
            label="Name"
            size="lg"
          />
          {errors.name && (
            <span className="text-orange-800">This Field is Required</span>
          )}
          <Input
            {...register("email", { required: true })}
            label="Email"
            size="lg"
          />
          {errors.email && (
            <span className="text-orange-800">This Field is Required</span>
          )}
          <Input
            type="password"
            {...register("password", {
              required: true,
              minLength: 7,
              pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
            })}
            label="Password"
            size="lg"
          />
          {errors.password?.type === "required" && (
            <span className="text-orange-800">Password is Required</span>
          )}
          {errors.password?.type === "minLength" && (
            <span className="text-orange-800">
              Password should be more than 7 characters
            </span>
          )}
          {errors.password?.type === "pattern" && (
            <span className="text-orange-800">
              Password should have one Uppercase letter, one LowerCase letter,
              one Number & one Special Character
            </span>
          )}
          <Input
            type="password"
            {...register("confirmPassword", {
              required: "Confirm Password is required",
              validate: (value) =>
                value === password || "Passwords does not match",
            })}
            label="Confirm Password"
            size="lg"
          />
          {errors.confirmPassword && (
            <span className="text-orange-800">
              {errors.confirmPassword.message}
            </span>
          )}
          <Input
            {...register("photoURL", { required: true })}
            label="Photo Url"
            size="lg"
          />
          {errors.photoURL && (
            <span className="text-orange-800">This Field is Required</span>
          )}
          <div className="-ml-2.5">
            <Checkbox label="Remember Me" />
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button type="submit" variant="gradient" fullWidth>
            Sign Up
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Already have an account?
            <Typography
              as="a"
              href="/login"
              variant="small"
              color="blue"
              className="ml-1 font-bold"
            >
              Sign in
            </Typography>
          </Typography>
        </CardFooter>
      </Card>
    </form>
  );
};

export default Registration;
