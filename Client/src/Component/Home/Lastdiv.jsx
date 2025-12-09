import { Typography } from "@material-tailwind/react";
import { Fade } from "react-awesome-reveal";
import { useHero } from "../../ContextAPI/Contextapi";
import imgone from "../../Assets/images/Canvalogo.png";
import imgtwo from "../../Assets/images/Figmalogo.png";
import imgthree from "../../Assets/images/visualstudio.png";
import imgfour from "../../Assets/images/postmanimg.png";
import imgfive from '../../Assets/images/devtool.jpg';
import imgsix from '../../Assets/images/res-viewer.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Lastdiv = () => {
  const { activeData } = useHero();
  const textColor = activeData?.bgcolor || "#d70654";

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
      <div className="py-14 px-10 mb-2">
        <div className="" style={{ "--text-color": textColor }}>
          <div className="text-center md:mb-8 mx-auto">
            <Typography
              variant="lead"
              className="text-sm md:text-md mb-3 text-[var(--text-color)] transition-colors"
            >
              My Favorite Tools
            </Typography>
            <Fade delay={200} duration={1000} fraction={0.5}>
              <Typography
                variant="h2"
                className="font-bold font-handwriting text-2xl lg:text-3xl"
              >
                Exploring the Tools
              </Typography>
            </Fade>
          </div>

          <div className="w-3/4 mx-auto">
            <Slider {...settings}>
              {[imgone, imgtwo, imgthree, imgfour, imgfive, imgsix].map((img, index) => (
                <>
                  <div key={index} className="flex items-center justify-center h-[150px] w-full">
                    <div
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
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lastdiv;
