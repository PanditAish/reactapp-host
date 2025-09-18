import { Typography } from "@material-tailwind/react";
import { useContext } from "react";
import { Fade } from "react-awesome-reveal";
import { ActiveDataContext } from "../../ContextAPI/Activedata";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Img1 from "../../Assets/images/nodejs.png";
import Img2 from "../../Assets/images/mangodb.png";
import Img3 from "../../Assets/images/Reactjs.png";
import Img4 from "../../Assets/images/expressjs.png";
import Img5 from "../../Assets/images/Wordpress1.png";
import Img6 from "../../Assets/images/bootstrap1.png";

const Aboutsecond = () => {
  const activeData = useContext(ActiveDataContext);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="py-14 px-26 bg-[#E1FFBB]">
        <div className="">
          <div className="text-center mb-9 md:mb-12 mx-auto">
            <Typography
              variant="lead"
              className="text-sm md:text-md mb-3 transition-colors"
              style={{ color: activeData.bgcolor }}
            >
              Technologies
            </Typography>
            <Fade delay={200} duration={1000} fraction={0.5}>
              <Typography
                variant="h2"
                className="font-bold font-handwriting text-lg lg:text-3xl md:mb-4"
              >
                We Majorly Use For Website & App Development
              </Typography>
            </Fade>
          </div>
        </div>
        <div className="">
          <div className="w-3/4 mx-auto">
            <Slider {...settings}>
              {[Img1, Img2, Img3, Img4, Img5, Img6].map(
                (img, index) => (
                  <>
                    <div className="flex items-center justify-center md:h-[150px] w-full">
                      <div
                        key={index}
                        className="flex items-center justify-center p-4 shadow-xl rounded-xl bg-white"
                      >
                        <img
                          src={img}
                          alt={`tool-${index + 1}`}
                          className="h-[50px] w-[50px] object-contain"
                        />
                      </div>
                    </div>
                  </>
                )
              )}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutsecond;
