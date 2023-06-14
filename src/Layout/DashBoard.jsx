import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import { BsBuilding, BsBuildingAdd } from "react-icons/bs";
import {
  PresentationChartBarIcon,
} from "@heroicons/react/24/solid";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useInstructorRole from "../hooks/useInstructorRole";
import { FaHome, FaSchool, FaUserAlt } from "react-icons/fa";

const DashBoard = () => {
    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructorRole()
    // const isInstructor = true;
  return (
    <div className="flex justify-around dashboard">
      <Card className="flex-none fixed top-4 left-4 h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 p-4">
          <Typography variant="h5" color="blue-gray">
            Dashboard
          </Typography>
        </div>
        <List>
          {
            isAdmin ? <><NavLink  to="/dashboard/manageClasses">
            <ListItem>
              <ListItemPrefix>
                <BsBuilding className="h-5 w-5" />
              </ListItemPrefix>
              Manage Classes
            </ListItem>
          </NavLink>
          <NavLink  to="/dashboard/allUsers">
            <ListItem>
              <ListItemPrefix>
                <FaUserAlt className="h-5 w-5" />
              </ListItemPrefix>
              Manage Users
            </ListItem>
          </NavLink></>
           : isInstructor ?
           <><NavLink  to="/dashboard/addClass">
            <ListItem>
              <ListItemPrefix>
              <BsBuildingAdd></BsBuildingAdd>
              </ListItemPrefix>
              Add A Class
            </ListItem>
          </NavLink>
          <NavLink  to="/dashboard/myClasses">
            <ListItem>
              <ListItemPrefix>
                <FaSchool className="h-5 w-5" />
              </ListItemPrefix>
              My Classes
            </ListItem>
          </NavLink>
          </> :
          <><NavLink  to="/dashboard/bookedClasses">
          <ListItem>
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            My Selected Classes
          </ListItem>
        </NavLink>
        <NavLink  to="/dashboard/enrolledClass">
          <ListItem>
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            My Enrolled Classes
          </ListItem>
        </NavLink>
        <NavLink  to="/dashboard/paymentHistory">
          <ListItem>
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            Payment History
          </ListItem>
        </NavLink></>
          }
          
          <NavLink  to="/">
            <ListItem>
              <ListItemPrefix>
                <FaHome></FaHome>
              </ListItemPrefix>
              Home
            </ListItem>
          </NavLink>
        </List>
      </Card>

      <div className=" grow w-full max-w-[60rem]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
