import Classes from "../../Classes/Classes";
import Instructors from "../../Instructors/Instructors";
import Banner from "../Banner/Banner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Classes></Classes>
            <Instructors></Instructors>
        </div>
    );
};

export default Home;