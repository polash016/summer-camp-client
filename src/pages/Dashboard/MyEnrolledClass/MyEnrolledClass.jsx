import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import {
    Card,
    Typography,
    CardBody,
    Avatar
  } from "@material-tailwind/react";
import SectionTitle from '../../../SectionTitle/SectionTitle';
import { Helmet } from 'react-helmet-async';


const TABLE_HEAD = ["#", "Image", "Course Name", "Email", "Price"];
const MyEnrolledClass = () => {
    const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const { data: payment = [] } = useQuery(["payments", user?.email], async() => {
   const res = await axiosSecure.get(`/payments?email=${user?.email}`)
    return res.data
  });
    return (
        <div className="w-[90%] ml-8">
          <Helmet>
            <title>Enrolled Class</title>
          </Helmet>
          <SectionTitle heading='Enrolled Classes'></SectionTitle>
        <Card className="h-full w-full">
          <CardBody className=" px-0">
            <table className="mt-4 w-full min-w-max table-auto text-left">
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
                {payment.map(
                  ({ _id, courseName, email,image, price }, index) => {
                    const isLast = index === payment.length - 1;
                    const classes = isLast
                      ? "p-4"
                      : "p-4 border-b border-blue-gray-50";
  
                    return (
                      <tr key={_id}>
                        <td className={classes}>{index + 1}</td>
  
                        <td className={classes}>
                          <div>
                              
                          <Avatar src={image} alt={name} size="sm" />
                          </div>
                        </td>
                        <td className={classes}>
                          <div>
                              
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {courseName}
                            </Typography>
                          </div>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {email}
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
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>
    );
};

export default MyEnrolledClass;