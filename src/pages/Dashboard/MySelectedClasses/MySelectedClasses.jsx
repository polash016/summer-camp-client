import useSelectedClasses from '../../../hooks/useSelectedClasses';
import {
  Card,
  Typography,
  CardBody,
  Avatar,
  IconButton,
  Tooltip,
  Button,
} from "@material-tailwind/react";
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import SectionTitle from '../../../SectionTitle/SectionTitle';
import { Helmet } from 'react-helmet-async';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
 
const TABLE_HEAD = ["#", "Image", "Name","Price", "Delete", "Pay"];

const MySelectedClasses = () => {
    const [courses,refetch] = useSelectedClasses();
    const [axiosSecure] = useAxiosSecure()
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
             axiosSecure.delete(`/selectedClass/${id}`)
                .then((data) => {
                  if(data.data.deletedCount>0){
                      refetch()
                      Swal.fire(
                          'Deleted!',
                          'Your file has been deleted.',
                          'success'
                        )
                  }
                  
                });
            }
          });
    }
    return (
        <div className="w-[90%] ml-16">
          <Helmet>
            <title>Selected Class</title>
          </Helmet>
          <SectionTitle heading='Selected Classes'></SectionTitle>
             <Card className="h-full w-full">
      
      <CardBody className=" px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
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
            {courses.map(({_id, image, name, price }, index) => {
              const isLast = index === courses.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
              return (
                <tr key={_id}>
                    <td className={classes}>{index + 1}</td>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <Avatar src={image} alt={name} size="sm" />
                      
                    </div>
                  </td>
                  <td className={classes}>
                    <div>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {name}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {price}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Tooltip content="Delete Class">
                      <IconButton onClick={() => handleDelete(_id)} variant="text" color="blue-gray">
                        <FaTrashAlt className='h-4 w-4 text-blue-600'></FaTrashAlt>
                      </IconButton>
                    </Tooltip>
                  </td>
                  <td className={classes}>
                    <Typography>
                      <Link to={`/dashboard/payment/${_id}`}><Button size="sm">Pay</Button></Link>
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

export default MySelectedClasses;