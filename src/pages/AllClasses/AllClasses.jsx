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


const AllClasses = () => {
    const [classes] = useClasses();
    const {user} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();


    const handleSelect = (course) => {
        
        if(user){
            const selectedClass = {CourseId: course._id, name: course.class_name, image: course.class_image, price:course.price,email: user.email }
            fetch('http://localhost:5000/selectedClass',{
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
                  navigate('/login') //TODO ,{state: {from: location}}
                }
              })
        }
    }
    return (
        <div className="w-[90%] mx-auto">
            <div className="grid lg:grid-cols-3">
                {
                    classes.map(course => <Card key={course._id} className="w-96">
                    <CardHeader floated={false} className="h-80">
                      <img src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="profile-picture" />
                    </CardHeader>
                    <CardBody className="text-center">
                      <Typography variant="h4" color="blue-gray" className="mb-2">
                        {course.class_name}
                      </Typography>
                      <Typography color="blue" className="font-medium" textGradient>
                        {course.instructor_name}
                      </Typography>
                      <Typography color="blue" className="font-medium" textGradient>
                        {course.available_seats}
                      </Typography>
                      <Typography color="blue" className="font-medium" textGradient>
                        {course.price}
                      </Typography>
                    </CardBody>
                    <CardFooter className="flex justify-center gap-7 pt-2">
                      
                        <Typography
                          as="a"
                          variant="lead"
                          color="blue"
                          textGradient
                        >
                          <Button onClick={() => handleSelect(course)}>Select</Button>
                        </Typography>
                     
                    </CardFooter>
                  </Card>)
                }
            </div>
            
        </div>
    );
};

export default AllClasses;