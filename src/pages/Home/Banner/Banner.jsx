import { Carousel, Typography, Button } from "@material-tailwind/react";
import bannerImg1 from '../../../assets/images/banner1.jpg';
import bannerImg2 from '../../../assets/images/banner2.jpg';
import bannerImg3 from '../../../assets/images/banner3.jpg';

const Banner = () => {
    return (
        <Carousel autoplay autoplayDelay={3000} loop className="rounded-xl w-[90%] mx-auto">
      <div className="relative h-full w-full">
        <img
          src={bannerImg1}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Learn Music With Nature
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Discover the harmonious blend of melodies and the soothing sounds of the environment. Immerse yourself in the rhythm of the earth and unlock your musical potential. Join us on this musical adventure.
            </Typography>
            <div className="flex justify-center gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src={bannerImg2}
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Learn Music With Nature
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Discover the harmonious blend of melodies and the soothing sounds of the environment. Immerse yourself in the rhythm of the earth and unlock your musical potential. Join us on this musical adventure.
            </Typography>
            <div className="flex justify-center gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative  h-full w-full">
        <img
          src={bannerImg3}
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full text-center place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Learn Music With Nature
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
             Discover the harmonious blend of melodies and the soothing sounds of the environment. Immerse yourself in the rhythm of the earth and unlock your musical potential. Join us on this musical adventure.
            </Typography>
            <div className="flex gap-2 justify-center">
              <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
    );
};

export default Banner;