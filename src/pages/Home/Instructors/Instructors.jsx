import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import useInstuctors from "../../../hooks/useInstuctors";

const Instructors = () => {
    const [instructors] = useInstuctors()
    return (
      <div className="w-[90%] mx-auto">
      <div className="grid lg:grid-cols-3">
          {
              instructors.slice(0, 6).map(instructor => <Card key={instructor._id} className="w-96">
              <CardHeader floated={false} className="h-80">
                <img src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="profile-picture" />
              </CardHeader>
              <CardBody className="text-center">
                <Typography variant="h4" color="blue-gray" className="mb-2">
                  {instructor.instructor_name}
                </Typography>
                <Typography color="blue" className="font-medium" textGradient>
                  {instructor.instructor_email}
                </Typography>
                <Typography color="blue" className="font-medium" textGradient>
                  {instructor.classes_taken}
                </Typography>
                
              </CardBody>
              
            </Card>)
          }
      </div>
      
  </div>
    );
};

export default Instructors;