import { useState, useEffect } from "react";
import logo from "../../../assets/images/logo.png";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
  Avatar,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const navList = (
  <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
    <Typography
      as="li"
      variant="small"
      color="blue-gray"
      className="p-1 font-normal text-white"
    >
      <Link to='/allClasses' className="flex items-center">
        All Calsses
      </Link>
    </Typography>
    <Typography
      as="li"
      variant="small"
      color="blue-gray"
      className="p-1 font-normal text-white"
    >
      <a href="#" className="flex items-center">
        Account
      </a>
    </Typography>
    <Typography
      as="li"
      variant="small"
      color="blue-gray"
      className="p-1 font-normal text-blue-600"
    >
      <a href="#" className="flex items-center">
        Blocks
      </a>
    </Typography>
    <Typography
      as="li"
      variant="small"
      color="blue-gray"
      className="p-1 font-normal text-white"
    >
      <a href="#" className="flex items-center">
        Docs
      </a>
    </Typography>
  </ul>
);

const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);
  const {user,logOut} = useAuth()

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const handleLogout = () => {
    logOut()
    .then()
    .catch(err => console.log(err))
  }
  return (
    <div className="max-w-[90%] mx-auto">
      <Navbar
        blurred
        className="max-w-[90%] mx-auto absolute z-10 top-0 bg-opacity-0 border-none py-2 px-4 lg:px-8 lg:py-4 "
      >
        <div className="mx-auto flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="/"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            <img className="w-40 h-10" src={logo} alt="" />
          </Typography>
          <div className="hidden lg:block">{navList}</div>
            <div>
            {user ? <><Avatar src={user.photoURL} alt="avatar" withBorder={true} className="p-0.5 mr-3" /><Button onClick={handleLogout} variant="gradient" size="sm"  className="mb-2">
                <span>Logout</span>
              </Button></> : <Link to='/login'>
              <Button variant="gradient" size="sm" fullWidth className="mb-2">
                <span>Login</span>
              </Button>
            </Link> }
            </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <div className="container mx-auto">
            {navList}
            {/* {user ? <><Avatar src={user.photoURL} alt="avatar" withBorder={true} className="p-0.5" /><Button variant="gradient" size="sm" fullWidth className="mb-2">
                <span>Logout</span>
              </Button></> : <Link to='/login'>
              <Button variant="gradient" size="sm" fullWidth className="mb-2">
                <span>Login</span>
              </Button>
            </Link> } */}
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
