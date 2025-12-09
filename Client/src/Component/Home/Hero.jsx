import HeroData from "./HeroData";
import { useHero } from "../../ContextAPI/Contextapi";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { Button, Typography } from "@material-tailwind/react";
import { Slide } from "react-awesome-reveal";
import { UpdateFollower } from "react-mouse-follower";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const { activeData, setActiveData } = useHero();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % HeroData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setActiveData(HeroData[currentIndex]);
  }, [currentIndex]);

  const handleActiveData = (data, index) => {
    setCurrentIndex(index);
    setActiveData(data);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          className="overflow-x-hidden"
          initial={{ backgroundColor: activeData.bgcolor }}
          animate={{ backgroundColor: activeData.bgcolor }}
          transition={{ duration: 0.8 }}
        >
          <div className="lg:px-24 lg:py-10 mx-auto w-full max-w-full grid grid-cols-1 md:grid-cols-2 min-h-[580px]">
            <div className="flex flex-col justify-center md:py-0 xl:max-w-[460px] order-2 md:order-1 relative z-40">
              <div className="text-center space-y-6 md:text-left">
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 10,
                    followSpeed: 0.5,
                    scale: 5,
                    mixBlendMode: "difference",
                  }}
                >
                  <div key={activeData.id + "-title"}>
                    <Slide direction="left" delay={0.2} duration={1000}>
                      <Typography
                        variant="h1"
                        className="font-bold font-handwriting text-3xl lg:text-4xl xl:text-6xl text-white leading-5"
                      >
                        {activeData.title}
                      </Typography>
                    </Slide>
                  </div>
                </UpdateFollower>

                <div key={activeData.id + "-subtitle"}>
                  <Slide direction="left" delay={0.4} duration={2000}>
                    <Typography
                      variant="paragraph"
                      className="leading-loose font-sans text-white text-sm md:text-md px-6 md:px-0"
                    >
                      {activeData.subtitle}
                    </Typography>
                  </Slide>
                </div>

                <div key={activeData.id + "-button"}>
                  <Slide delay={0.4} duration={2000}>
                      <Button
                        color="white"
                        size="sm"
                        style={{ color: activeData.bgcolor }}
                        className="shadow-md"
                      >
                        Explore More
                      </Button>
                  </Slide>
                </div>

                {/* image switcher */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
                  className="grid grid-cols-3 gap-8"
                >
                  {HeroData.map((data, index) => {
                    return (
                      <>
                        <div
                          key={data.id || index}
                          onClick={() => handleActiveData(data, index)}
                          className="cursor-pointer space-y-3 hover:scale-105 transition-all duration-200"
                        >
                          <div key={data.id} className="flex justify-center">
                            <img
                              src={data.image}
                              alt={data.title}
                              loading="lazy"
                              className={`w-[80px] img-shadow ${
                                activeData.image === data.image
                                  ? "opacity-100 scale-110"
                                  : "opacity-50"
                              }`}
                            />
                          </div>
                        </div>
                      </>
                    );
                  })}
                </motion.div>
              </div>
            </div>
            <div className="flex flex-col justify-end items-center relative order-1 md:order-2">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeData.id}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.0, ease: "easeInOut" }}
                  exit={{ opacity: 0, x: -100, transition: { duration: 0.4 } }}
                  src={activeData.image}
                  alt={activeData.title}
                  className="w-[200px] md:w-[480px] img-shadow relative z-10"
                />
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeData.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
                  exit={{ opacity: 0, transition: { duration: 0.4 } }}
                  className="text-white/5 text-[15vw] md:text-[100px] lg:text-[130px] max-w-full truncate font-sans font-extrabold absolute top-14 md:top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  {activeData.subject}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Hero;
