import { useQuery } from "@tanstack/react-query";
import {
  Card,
  Typography,
  CardBody,
  IconButton,
  Tooltip,
  Button,
} from "@material-tailwind/react";
import useAuth from "../../../hooks/useAuth";

const TABLE_HEAD = ["#", "Name", "Email", "Instructor", "Admin"];

const AllUsers = () => {
  const { user } = useAuth();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });
  return (
    <div className="w-[90%] ml-8">
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
              {users.map(({ _id, name, email }, index) => {
                const isLast = index === users.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

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
                          <Button size="sm">Make Instructor</Button>
                        )}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography>
                        {user.role === "admin" ? (
                          "Admin"
                        ) : (
                          <Button size="sm">Make Admin</Button>
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
