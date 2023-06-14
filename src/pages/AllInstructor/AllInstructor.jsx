
import ph1 from "../../assets/images/banner3.jpg";
import "./AllInstructor.css";
import useInstuctors from "../../hooks/useInstuctors";
import { Button } from "@material-tailwind/react";

const AllInstructor = () => {
  

  const [instructors] = useInstuctors();

  return (
    <div>
      <div className="w-[90%] mx-auto grid md:grid-cols-3">
      {instructors.map((instructor) => (
        <div
          key={instructor._id}
          className="card mt-24"
        >
          <img
            src={ph1}
            alt="Nike-Shoe"
            className="sneaaker-img"
          />
          
          <ul className="sizes-box">
            <li>{instructor.instructor_name}</li>
          </ul>
          <ul className="sizes-box">
            <li>{instructor.instructor_email}</li>
          </ul>
          <div className="button-box">
            <Button className="w-full rounded-full">Send Email</Button>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default AllInstructor;
