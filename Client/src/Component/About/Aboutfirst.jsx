import { Typography } from "@material-tailwind/react";
import aboutback from "../../Assets/images/conback.jpg";
import { Fade } from "react-awesome-reveal";

const Aboutfirst = (props) => {
  return (
    <div className="relative">
      <div
        className="relative bg-fixed bg-cover py-14 md:py-20 lg:px-24"
        style={{
          backgroundImage:
            `url(${aboutback})`,
          backgroundPosition: "right",
        }}
      >
        {/* <div className="absolute inset-0 bg-black opacity-0 z-0"></div> */}
        <div className="relative z-10 text-center">
          <Fade delay={100} duration={1000} fraction={0.5}>
            <Typography variant="h1" className="text-4xl font-bold font-handwriting text-white">
             {props.name}
            </Typography>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Aboutfirst;
