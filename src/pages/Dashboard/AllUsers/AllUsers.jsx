import { useQuery } from "@tanstack/react-query";
import { Card, Typography, CardBody, Button } from "@material-tailwind/react";
// import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../SectionTitle/SectionTitle";

const TABLE_HEAD = ["#", "Name", "Email", "Instructor", "Admin"];

const AllUsers = () => {
  // const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`)
      .then((data) => {
        if (data.data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${user.name} is an Admin Now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
  };

  const handleMakeInstructor = (user) => {
    axiosSecure.patch(`/users/instructor/${user._id}`)
        .then((data) => {
          if (data.data.modifiedCount) {
            refetch();
            Swal.fire({
              position: "center",
              icon: "success",
              title: `${user.name} is an Instructor Now`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
  }

  return (
    <div className="w-[90%] ml-16">
      <Helmet>
        <title>All Users</title>
      </Helmet>
      <SectionTitle heading='All Users'></SectionTitle>
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
              {users.map((user, index) => {
                const isLast = index === users.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";
                const { _id, name, email } = user;
                return (
                  <tr key={_id}>
                    <td className={classes}>{index + 1}</td>

                    <td className={classes}>
                      <div>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {name}
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
                      <Typography>
                        {user.role === "instructor" ? (
                          "Instructor"
                        ) : (
                          <Button
                          disabled={user.role === 'admin'}
                            onClick={() => handleMakeInstructor(user)}
                            size="sm"
                          >
                            Make Instructor
                          </Button>
                        )}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography>
                        {user.role === "admin" ? (
                          "Admin"
                        ) : (
                          <Button
                          disabled={user.role === 'instructor'}
                            onClick={() => handleMakeAdmin(user)}
                            size="sm"
                          >
                            Make Admin
                          </Button>
                        )}
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

export default AllUsers;
