import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Typography,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_IMAGE_HOSTING_TOKEN;

const AddClass = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  const onSubmit = (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("image", data.class_image[0]);
    fetch(img_hosting_url, {
        method: 'POST',
        body: formData
    })
    .then(res => res.json())
    .then(response => {
        console.log(response)
        if(response.success){
            const imgUrl = response.data.display_url;
            const {class_name, instructor_name, instructor_email, available_seats, price, enrolled_students} = data;
            const newClass = {class_name, class_image: imgUrl, instructor_name, instructor_email, available_seats: parseFloat(available_seats), price: parseFloat(price), enrolled_students: parseFloat(enrolled_students)};
            axiosSecure.post('/classes', newClass)
            .then(data => {
                reset()
                if(data.data.insertedId){
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Class Added Successfully',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
    })
  };
  return (
    <div className="mt-8">
      <Card className="w-full mx-auto mt-40">
        <CardHeader
          variant="gradient"
          color="blue"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Add A Class
          </Typography>
        </CardHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardBody className="flex flex-col gap-4">
            <Input
              {...register("class_name", { required: true })}
              label="Name"
              size="lg"
            />
            {errors.name && (
              <span className="text-orange-800">This Field is Required</span>
            )}
            <Input
              {...register("class_image", { required: true })}
              label="Image"
              size="lg"
              type="file"
            />
            {errors.image && (
              <span className="text-orange-800">This Field is Required</span>
            )}
            <div className="flex gap-3">
              <Input
                type="text"
                {...register("instructor_name", {
                  required: true,
                })}
                value={user?.displayName}
                size="lg"
              />

              <Input
                type="text"
                {...register("instructor_email")}
                value={user?.email}
                size="lg"
              />
              
            </div>
            <div className="flex gap-3">
              <Input
                {...register("available_seats", { required: true })}
                label="Available Seats"
                type="number"
                size="lg"
              />
              {errors.available_seats && (
                <span className="text-orange-800">This Field is Required</span>
              )}
              <Input
                {...register("price", { required: true })}
                label="Price"
                type="number"
                size="lg"
              />
              {errors.price && (
                <span className="text-orange-800">This Field is Required</span>
              )}
            </div>
            <input
                type="text"
                {...register("enrolled_students")}
                value={0}
                hidden
                size="lg"
              />
          </CardBody>
          <CardFooter className="pt-0">
            <Button type="submit" variant="gradient" fullWidth>
              Update
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default AddClass;
