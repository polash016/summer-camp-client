import { Button } from '@material-tailwind/react';
import error from '../../assets/images/error.jpg'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div
        style={{
            backgroundImage: `url(${error})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16 mt-2">
            <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
                <div className="relative">
                    <div className="absolute">
                        <div className="">
                            <h1 className="my-2 text-gray-800 font-bold text-2xl">
                                Looks like you have found the
                                doorway to the great nothing
                            </h1>
                            <p className="my-2 text-gray-800">Sorry about that! Please visit our hompage to get where you need to go.</p>
                            <Link to='/'><Button className="">Take me Home!</Button></Link>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
            <div>
                <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
            </div>
        </div>
    );
};

export default Error;