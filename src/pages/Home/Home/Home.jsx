import Classes from "../Classes/Classes";
import Instructors from "../Instructors/Instructors";
import Banner from "../Banner/Banner";
import Footer from "../../Shared/Footer/Footer";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { useState } from "react";

const Home = () => {
  const [darkToggle, setDarkToggle] = useState(false);
  return (
    <div className={`${darkToggle && 'dark' } dark:bg-gray-900 dark: dark:text-white`}>
        
      <Banner></Banner>
      <Classes></Classes>
      <Instructors></Instructors>
      <Footer></Footer>
      <ThemeToggle></ThemeToggle>
    </div>
  );
};

export default Home;
