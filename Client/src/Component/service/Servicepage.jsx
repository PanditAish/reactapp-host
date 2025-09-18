import img1 from "../../Assets/images/UI-UX-Designer.jpeg";
import img2 from "../../Assets/images/frontend1.jpg";
import img3 from "../../Assets/images/backend1.png";
import { useContext, useEffect, useState } from "react";
import { ActiveDataContext } from "../../ContextAPI/Activedata";
import { Typography } from "@material-tailwind/react";
import { Fade, Slide } from "react-awesome-reveal";

const serviceData = [
  {
    id: 1,
    name: "UI and UX Design",
    images: img1,
    description:
      "We start designing a web app with the analysis of target audience and planning convenient, quick and frictionless user journeys. Along the way, our UI designers join in to wrap the interface into a stylish cover.",
  },
  {
    id: 2,
    name: "Front-end Development",
    images: img2,
    description:
      "Our front-end developers can implement any design idea and ensure all interface elements work properly. We work with all most-used JavaScript frameworks, such as React.",
  },
  {
    id: 3,
    name: "Back-end Development",
    images: img3,
    description:
      "Our developers accurately implement the business logic of your web app on the back end. We rely on proven frameworks and ensure fast and quality coding in Java, Python, Node.js, PHP.",
  },
];

const Servicepage = () => {
  const activeData = useContext(ActiveDataContext);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % serviceData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextCard = () => setIndex((prev) => (prev + 1) % serviceData.length);
  const prevCard = () => setIndex((prev) => (prev - 1 + serviceData.length) % serviceData.length);

  const service = serviceData[index];

  return (
    <div className="py-14 px-26 bg-gray-50">
      <div className="text-center md:mb-12 mx-auto">
        <Typography
          variant="lead"
          className="text-sm md:text-md mb-3 transition-colors"
          style={{ color: activeData.bgcolor }}
        >
          Our Services
        </Typography>
        <Fade delay={200} duration={1000} fraction={0.5}>
          <Typography
            variant="h2"
            className="font-bold font-handwriting text-xl lg:text-3xl mb-4"
          >
            What We Offer
          </Typography>
        </Fade>
      </div>

      <Slide direction="up" duration={2000} triggerOnce>
      <div className="p-4" >
        <div className="flex flex-col md:flex-row items-center gap-8 bg-[#E1FFBB] rounded-2xl shadow-xl p-6 max-w-5xl mx-auto" >
        {/* Left side image */}
        <div className="w-full md:w-1/2">
          <img
            src={service.images}
            alt={service.name}
            className="w-full h-72 object-cover rounded-xl shadow-xl"
          />
        </div>

        {/* Right side text */}
        <div className="w-full md:w-1/2 text-left">
          <Typography
            variant="h3"
            className="font-bold text-xl lg:text-2xl mb-4 "
          >
            {service.name}
          </Typography>
          <Typography variant="paragraph" className="text-gray-800 text-md">
            {service.description}
          </Typography>
        </div>
      </div>
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={prevCard}
          className="px-4 py-2 text-white rounded-lg transition shadow-lg"
          style={{ backgroundColor: activeData.bgcolor }}
        >
          Prev
        </button>
        <button
          onClick={nextCard}
          className="px-4 py-2 rounded-lg transition shadow-lg bg-white border border-gray-200"
          style={{ color: activeData.bgcolor }}
        >
          Next
        </button>
      </div>
  
      </div>
      </Slide>
    </div>
  );
};

export default Servicepage;
