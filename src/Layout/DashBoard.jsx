import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
} from "@heroicons/react/24/solid";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useInstructorRole from "../hooks/useInstructorRole";

const DashBoard = () => {
    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructorRole()
    // const isInstructor = true;
  return (
    <div className="flex justify-around">
      <Card className="flex-none fixed top-4 left-4 h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 p-4">
          <Typography variant="h5" color="blue-gray">
            Dashboard
          </Typography>
        </div>
        <List>
          {
            isAdmin ? <><Link  to="/dashboard/manageClasses">
            <ListItem>
              <ListItemPrefix>
                <PresentationChartBarIcon className="h-5 w-5" />
              </ListItemPrefix>
              Manage Classes
            </ListItem>
          </Link>
          <Link  to="/dashboard/allUsers">
            <ListItem>
              <ListItemPrefix>
                <PresentationChartBarIcon className="h-5 w-5" />
              </ListItemPrefix>
              Manage Users
            </ListItem>
          </Link></>
           : isInstructor ?
           <><Link  to="/dashboard/addClass">
            <ListItem>
              <ListItemPrefix>
                <PresentationChartBarIcon className="h-5 w-5" />
              </ListItemPrefix>
              Add A Class
            </ListItem>
          </Link>
          <Link  to="/dashboard/myClasses">
            <ListItem>
              <ListItemPrefix>
                <PresentationChartBarIcon className="h-5 w-5" />
              </ListItemPrefix>
              My Classes
            </ListItem>
          </Link>
          </> :
          <><Link  to="/dashboard/bookedClasses">
          <ListItem>
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            My Selected Classes
          </ListItem>
        </Link>
        <Link  to="/dashboard/enrolledClass">
          <ListItem>
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            My Enrolled Classes
          </ListItem>
        </Link>
        <Link  to="/dashboard/paymentHistory">
          <ListItem>
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            Payment History
          </ListItem>
        </Link></>
          }
          
          <Link  to="/">
            <ListItem>
              <ListItemPrefix>
                <PresentationChartBarIcon className="h-5 w-5" />
              </ListItemPrefix>
              Home
            </ListItem>
          </Link>
        </List>
      </Card>

      <div className=" grow w-full max-w-[60rem]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
