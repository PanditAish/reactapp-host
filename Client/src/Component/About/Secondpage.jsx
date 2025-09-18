import { Typography } from "@material-tailwind/react";
import { Fade, Slide } from "react-awesome-reveal";
import { useEffect, useState } from "react";
import heroData from "../Home/HeroData";
import imgA from "../../Assets/images/webabout-img.png";
import { Zoom } from "react-toastify";

const Secondpage = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % heroData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const activeData = heroData[activeIndex];

  return (
    <>
      <div className='py-14 px-26'>
            <div className="">
                <div className="text-center mb-12 mx-auto">
                  <Typography variant="lead" className="text-md mb-3 transition-colors" style={{ color: activeData.bgcolor }}>About</Typography>
                  <Fade delay={200} duration={1000} fraction={0.5}>
                  <Typography variant="h2" className="font-bold font-handwriting text-xl lg:text-3xl mb-4">Who We Are</Typography>
                  </Fade> 
                  <Typography variant="paragraph" className="font-sans text-sm line-clamp-2 text-center px-6 md:px-32">Our team of professionals brings a wealth of industry experience.
                   We are dedicated to delivering superior quality in every project. Enhanced user experiences through responsive design and intuitive interfaces.
                   AishPandit is a leading provider of innovative web services. Our comprehensive suite of web services includes: Web Development, Web Hosting, Web Applications, E-commerce Solutions.</Typography>         
                </div>

                <div className="">
                  <div className="flex flex-col md:flex-row justify-center items-center gap-12"> 
                    <Slide direction="left" duration={2000} triggerOnce>                 
                    <div className="shadow-lg p-5 w-[300px] rounded-md" style={{ backgroundColor: activeData.bgcolor }}>
                      <Typography variant="h3" className="font-bold font-sans text-lg text-white mb-2">Vision</Typography>
                      <Typography variant="paragraph" className="font-sans text-sm line-clamp-2 text-white">Our mission is clear - to be your trusted partner in the digital realm, 
                      guiding you through the complexities of the online landscape with innovative solutions and 
                      unwavering support.</Typography>
                    </div>
                    </Slide>

                    <Fade>
                    <div className="hidden md:block">
                      <img src={imgA} alt="aboutoneimg" className="h-[280px] w-[280px] imgg-shadow"/>
                    </div>
                    </Fade>

                    <Slide direction="right" duration={2000} triggerOnce>
                    <div className="shadow-lg p-5 w-[300px] rounded-md" style={{ backgroundColor: activeData.bgcolor }}>
                      <Typography variant="h3" className="font-bold font-sans text-lg text-white mb-2">Mission</Typography>
                      <Typography variant="paragraph" className="font-sans text-sm line-clamp-2 text-white">our vision is to be a catalyst for your digital success. We aspire to empower 
                      businesses and individuals with innovative online web services that transcend boundaries and
                       drive exceptional growth.</Typography>
                    </div>
                    </Slide>
                  </div>
                </div>
            </div>
        </div>        
    </>
  )
}

export default Secondpage
