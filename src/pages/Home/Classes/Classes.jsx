import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import useClasses from "../../../hooks/useClasses";
import SectionTitle from "../../../SectionTitle/SectionTitle";

const Classes = () => {
  const [classes] = useClasses()
  return (
    <div className="w-[90%] mx-auto">
      <SectionTitle heading='Top Class' subHeading='Our Fabourite'></SectionTitle>
      <div className="grid lg:grid-cols-3 gap-6">
      {
        classes.slice(0,6).map(item =>  <Card key={item._id}
          
            shadow={false}
            className="relative grid h-[30rem] w-full  items-end justify-center overflow-hidden text-center mb-4"
          >
            <CardHeader
            style={{
              backgroundImage: `url(${item.class_image})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
              floated={false}
              shadow={false}
              color="transparent"
              className={`absolute inset-0 m-0 h-full w-full rounded-none `}
            >
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
            </CardHeader>
            
            <CardBody className="relative py-14 px-6 md:px-12">
              <Typography
                variant="h2"
                color="white"
                className="mb-1 font-medium leading-[1.5]"
              >
                {item.class_name}
              </Typography>
              <Typography variant="h5" className="mb-4 text-white">
                By
              </Typography>
              <Typography variant="h5" className="mb-4 text-gray-400">
                {item.instructor_name}
              </Typography>
              <Typography variant="h5" className="mb-4 text-white">
                Only At ${item.price}
              </Typography>
              {/* <Avatar
                size="xl"
                variant="circular"
                alt="candice wu"
                className="border-2 border-white"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              /> */}
            </CardBody>
          </Card>)
      }
      </div>
    </div>
  );
};

export default Classes;
