import Classes from "../Classes/Classes";
import Instructors from "../Instructors/Instructors";
import Banner from "../Banner/Banner";
import Footer from "../../Shared/Footer/Footer";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import ConnectSection from "../../../ConnectSection/ConnectSection";

const Home = () => {
  const [darkToggle, setDarkToggle] = useState(false);
  return (
    <div className={`${darkToggle && 'dark' } dark:bg-gray-900 dark: dark:text-white`}>
        <Helmet>
            <title>Crescendo || Home</title>
        </Helmet>
      <Banner></Banner>
      <Classes></Classes>
      <Instructors></Instructors>
      <ConnectSection></ConnectSection>
      <ThemeToggle></ThemeToggle>
    </div>
  );
};

export default Home;
