import "./AllInstructor.css";
import useInstuctors from "../../hooks/useInstuctors";
import { Button } from "@material-tailwind/react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";

const AllInstructor = () => {
  

  const [instructors] = useInstuctors();

  return (
    <div className="w-[90%] mx-auto lg:mt-32">
        <Helmet>
            <title>All Instructor</title>
        </Helmet>
        <SectionTitle heading='All Instructor'></SectionTitle>
      <div className="grid md:grid-cols-3">
      {instructors.map((instructor) => (
        <div
          key={instructor._id}
          className="card mt-24"
        >
          <img
            src={instructor.instructor_image}
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
