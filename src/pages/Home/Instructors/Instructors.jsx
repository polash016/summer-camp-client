import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import useInstuctors from "../../../hooks/useInstuctors";
import SectionTitle from "../../../SectionTitle/SectionTitle";

const Instructors = () => {
    const [instructors] = useInstuctors()
    return (
      <div className="w-[90%] mx-auto my-6">
        <SectionTitle heading='Top Instructors' ></SectionTitle>
      <div className="grid lg:grid-cols-3">
          {
              instructors.slice(0, 6).map(instructor => <Card key={instructor._id} className="w-96 mb-4">
              <CardHeader floated={false} className="h-80">
                <img className="w-full h-[100%]" src={instructor.instructor_image} />
              </CardHeader>
              <CardBody className="text-center">
                <Typography variant="h4" color="blue-gray" className="mb-2">
                  {instructor.instructor_name}
                </Typography>
                <Typography className="font-medium text-dark my-4" textGradient>
                <span className="font-bold text-xl">Email:</span> <span className="text-black">{instructor.instructor_email}</span>
                </Typography>
                <Typography className="font-medium text-dark" textGradient>
                <span className="font-bold text-xl">Class:</span> <span className="text-black">{instructor.classes_taken}</span>
                </Typography>
                
              </CardBody>
              
            </Card>)
          }
      </div>
      
  </div>
    );
};

export default Instructors;