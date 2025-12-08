import { Typography } from "@material-tailwind/react"
import imgg from "../../Assets/images/desingmidimg.png";
import { Slide } from 'react-awesome-reveal';
import { useHero } from "../../ContextAPI/Contextapi";

const Middlediv = () => {

  const { activeData } = useHero();
  const textColor = activeData?.bgcolor || "#d70654";

  return (
    <>
      <div className="bg-[#ecf87f] py-10 lg:px-24 bg-fixed bg-cover">
        <div className="grid grid-cols-1 md:grid-cols-2">
        <Slide direction="left" duration={2000}>
        <div className="px-9">
          <img src={imgg} alt="middledivimg" className="w-[400px] img-shadow"/>
        </div>
        </Slide>
        <Slide direction="right" duration={3000}>
        <div className="pb-5 md:py-12 px-9" style={{ "--text-color": textColor }}>
          <Typography variant="lead" className="text-center md:text-left text-sm md:text-md mb-3 text-[var(--text-color)] transition-colors font-sans">About Us</Typography>
          <Typography variant="h2" className="text-center md:text-left font-bold font-handwriting text-xl lg:text-3xl mb-3">Web Development Projects</Typography>
          <Typography variant="paragraph" className="text-center md:text-left text-sm text-gray-800 leading-6 font-sans">Achieving project goals in spite of time and budget constraints, as well as changing requirements, 
          is our top priority. 
          You set goals, we drive the project to fulfill them. we deliver transformative solutions that drive real results. 
          Each project highlights our strategic approach and the value we bring to clients.
          We help you provide high availability and trouble-free functionality of your web app. We advance your web-based software to keep it efficient, 
          competitive on the market, and compliant with all your evolving business needs</Typography>
        </div>
        </Slide>
        </div>
      </div>
    </>
  )
}

export default Middlediv;
