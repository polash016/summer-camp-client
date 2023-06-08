import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
  } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";

const Instructors = () => {
    const { data: instructors = [] } = useQuery({
        queryKey: ["instructors"],
        queryFn: async () => {
          const res = await fetch("http://localhost:5000/instructors");
          return res.json();
        },
      });
    return (
        <div className="w-[90%] mx-auto">
            <div className="grid lg:grid-cols-3">
                {
                    instructors.slice(0,6).map(instructor => <Card key={instructor._id} className="w-96">
                    <CardHeader floated={false} className="h-80">
                      <img src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="profile-picture" />
                    </CardHeader>
                    <CardBody className="text-center">
                      <Typography variant="h4" color="blue-gray" className="mb-2">
                        {instructor.instructor_name}
                      </Typography>
                      <Typography color="blue" className="font-medium" textGradient>
                        CEO / Co-Founder
                      </Typography>
                    </CardBody>
                    <CardFooter className="flex justify-center gap-7 pt-2">
                      <Tooltip content="Like">
                        <Typography
                          as="a"
                          href="#facebook"
                          variant="lead"
                          color="blue"
                          textGradient
                        >
                          <i className="fab fa-facebook" />
                        </Typography>
                      </Tooltip>
                      <Tooltip content="Follow">
                        <Typography
                          as="a"
                          href="#twitter"
                          variant="lead"
                          color="light-blue"
                          textGradient
                        >
                          <i className="fab fa-twitter" />
                        </Typography>
                      </Tooltip>
                      <Tooltip content="Follow">
                        <Typography
                          as="a"
                          href="#instagram"
                          variant="lead"
                          color="purple"
                          textGradient
                        >
                          <i className="fab fa-instagram" />
                        </Typography>
                      </Tooltip>
                    </CardFooter>
                  </Card>)
                }
            </div>
            
        </div>
    );
};

export default Instructors;