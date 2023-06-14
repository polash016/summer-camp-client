import Classes from "../Classes/Classes";
import Instructors from "../Instructors/Instructors";
import Banner from "../Banner/Banner";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { Helmet } from "react-helmet-async";
import ConnectSection from "../../../ConnectSection/ConnectSection";

const Home = () => {
  return (
    <div className=' dark:bg-gray-900 dark: dark:text-white'>
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
