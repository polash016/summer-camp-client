import React, { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import {
  Card,
  Typography,
  CardBody,
  Button,
  Avatar,
  Dialog,
  DialogHeader,
  DialogBody,
  Textarea,
  DialogFooter,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Swal from "sweetalert2";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";

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
  const [open, setOpen] = React.useState(false);
  const [selectedId, setSelectedId] = useState(null)
 
  const handleOpen = (id) => {
    setOpen(!open);
    setSelectedId(id)
  };
  const { data: courses = [], refetch } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      //    const res = await fetch(`http://localhost:5000/classes/instructor?email=${user?.email}`)
      const res = await axiosSecure.get("/classes/instructorClass");

      return res.data;
    },
  });
  
  const handleApprove = (id) => {
    
    axiosSecure.patch(`/classes/instructor/${id}`)
          .then(data => {
            console.log(data.data)
            if(data.data.modifiedCount){
                refetch()
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: 'Status Updated',
                    showConfirmButton: false,
                    timer: 1500,
                  });
            }
          })
    
    
  }

  const handleDeny = (id) => {
    axiosSecure.put(`/classes/instructor/${id}`)
    .then(data => {
      console.log(data.data)
      if(data.data.modifiedCount){
          refetch()
          Swal.fire({
              position: "center",
              icon: "success",
              title: 'Status Updated',
              showConfirmButton: false,
              timer: 1500,
            });
      }
    })
  };

  const handleFeedback = (e) => {
    console.log(selectedId)
    e.preventDefault();
    const feedback = e.target.elements.feedback.value
    console.log(feedback)
    axiosSecure.put(`/feedback/${selectedId}`,{feedback})
    .then(data => {
      console.log(data.data)
      if(data.data.modifiedCount){
          Swal.fire({
              position: "center",
              icon: "success",
              title: 'Feedback Updated',
              showConfirmButton: false,
              timer: 1500,
            });
      }
    })
    setOpen(false)
  }

 
  // console.log(courses);
  return (
    <div className="w-[90%] ml-12">
      <Helmet>
        <title>Manage Classes</title>
      </Helmet>
      <SectionTitle heading='Manage Classes'></SectionTitle>
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
                        <Button disabled={status === 'Approved' || status === 'Denied'} onClick={() => handleApprove(_id)} size="sm">Approve</Button> <br />
                        <Button disabled={status === 'Approved' || status === 'Denied'} onClick={() => handleDeny(_id)} className="mt-2 mb-2" size="sm">Deny</Button> <br />
                        {/* <Button onClick={()=> handleFeedback(_id)} size="sm">Feedback</Button> */}
                        <>
                    <React.Fragment>
      <Button onClick={()=>handleOpen(_id)} size="sm">
        Feedback 
      </Button>
      <Dialog open={open}>
        <span className="flex items-center justify-between">
          <DialogHeader>New message to @</DialogHeader>
          <XMarkIcon className="mr-3 h-5 w-5" onClick={handleOpen} />
        </span>
        <form onSubmit={(e) => handleFeedback(e, _id)}>
        <DialogBody divider>
          <span className="grid gap-6">
            <Textarea name="feedback" label="Message" />
          </span>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="outlined" color="red" onClick={handleOpen}>
            close
          </Button>
          <Button type="submit" variant="gradient" color="green">
            Send Feedback
          </Button>
        </DialogFooter>
        </form>
      </Dialog>
    </React.Fragment>
                    </>
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
