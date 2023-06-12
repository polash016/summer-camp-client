import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import {
  Card,
  Typography,
  CardBody,
  Button,
  Avatar,
} from "@material-tailwind/react";

const TABLE_HEAD = [
  "#",
  "Name",
  "Instructor Name",
  "Instructor Email",
  "Available Seats",
  "Price",
  "Status",
  "Permission & Feedback",
];

const ManageClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  // const {data} = useQuery(['classes', async() => {
  //     const res = await axiosSecure.get('/classes/instructorClass');
  //     return res.data
  // }])
  const { data: courses = [] } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      //    const res = await fetch(`http://localhost:5000/classes/instructor?email=${user?.email}`)
      const res = await axiosSecure.get("/classes/instructorClass");

      return res.data;
    },
  });
  console.log(courses);
  return (
    <div className="w-[90%] ml-8">
      <Card className="h-full w-full">
        <CardBody className=" px-0">
          <table className="mt-4 w-full min-w-max table-auto text-center">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-2xl font-bold leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {courses.map((course, index) => {
                const isLast = index === courses.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";
                const {
                  _id,
                  class_name,
                  class_image,
                  available_seats,
                  instructor_email,
                  instructor_name,
                  price,
                  status,
                } = course;
                return (
                  <tr key={_id}>
                    <td className={classes}>{index + 1}</td>

                    <td className={classes}>
                      <div className="flex justify-center items-center gap-1">
                        <Avatar
                          src={class_image}
                          alt="avatar"
                          variant="square"
                        />
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {class_name}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {instructor_name}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {instructor_email}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {available_seats}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {price}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {status}
                      </Typography>
                    </td>

                    <td className={classes}>
                      <Typography>
                        <Button size="sm">Approve</Button> <br />
                        <Button className="mt-2 mb-2" size="sm">Deny</Button> <br />
                        <Button size="sm">Feedback</Button>
                      </Typography>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
};

export default ManageClasses;
