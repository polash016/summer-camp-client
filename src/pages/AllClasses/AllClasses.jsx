/* eslint-disable react-hooks/rules-of-hooks */
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useClasses from "../../hooks/useClasses";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../SectionTitle/SectionTitle";
import useAdmin from "../../hooks/useAdmin";
import useInstructorRole from "../../hooks/useInstructorRole";


const AllClasses = () => {
    const [classes] = useClasses();
    const {user} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [isAdmin] = user ? useAdmin() : [false]
    const [isInstructor] = user ? useInstructorRole() : [false]
    const handleSelect = (course) => {
        
        if(user){
            const selectedClass = { CourseId: course._id, name: course.class_name, image: course.class_image, price:course.price,email: user.email }
            fetch('https://a12-summer-camp-school-server.vercel.app/selectedClass',{
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectedClass)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Class Booked. Visit My Selected Class to Complete Payment ',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please Login to Book the Course',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now !'
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login',{state: {from: location}})
                }
              })
        }
    }
    return (
        <div className="w-[90%] mx-auto lg:mt-32">
          <Helmet>
            <title>Crescendo || All Class</title>
          </Helmet>
          <SectionTitle heading='This Semester' subHeading='Available Classes On'></SectionTitle>
            <div className="grid lg:grid-cols-3 text-center">
                {
                    classes.map(course => <Card key={course._id} className="w-96">
                    <CardHeader floated={false} className="h-80">
                      <img className="w-full h-[100%]" src={course.class_image} />
                    </CardHeader>
                    <CardBody className="">
                      <Typography variant="h4" color="blue-gray" className="mb-2">
                        {course.class_name}
                      </Typography>
                      <Typography className="font-medium text-dark" textGradient>
                        <span className="font-bold text-xl">Instructor Name:</span> {course.instructor_name}
                      </Typography>
                      <Typography className="font-medium text-dark my-4" textGradient>
                      <span className="font-bold text-xl">Available Seats:</span> {course.available_seats}
                      </Typography>
                      <Typography className="font-medium text-dark" textGradient>
                      <span className="font-bold text-xl">Price:</span> ${course.price}
                      </Typography>
                    </CardBody>
                    <CardFooter className="flex justify-center gap-7 pt-2">
                      
                        <Typography
                          as="a"
                          variant="lead"
                          color="blue"
                          textGradient
                        >
                         <Button disabled={isAdmin || isInstructor} onClick={() => handleSelect(course)}>Select</Button>
                        </Typography>
                     
                    </CardFooter>
                  </Card>)
                }
            </div>
            
        </div>
    );
};

export default AllClasses;