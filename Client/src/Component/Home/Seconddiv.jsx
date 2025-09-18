import { Typography } from "@material-tailwind/react";
import { useHero } from "../../ContextAPI/Contextapi";
import ServicesData from '../Home/ServicesData';
import { Slide, Fade } from "react-awesome-reveal";

const Seconddiv = () => {
   const { activeData } = useHero();
   const textColor = activeData?.bgcolor || "#d70654";

  return (
    <div className='py-14 px-10'>
      <div className="" style={{ "--text-color": textColor }}>
          <div className="text-center mb-24 mx-auto">
            <Typography variant="lead" className="text-sm md:text-md mb-3 text-[var(--text-color)] transition-colors">Our Services</Typography>
            <Fade delay={200} duration={1000} fraction={0.5}>
            <Typography variant="h2" className="font-bold font-handwriting text-xl lg:text-3xl">Services I Provide</Typography>
            </Fade>          
          </div>
          {/* card section */}
          <div className="">
            <Slide direction="up" duration={2000} triggerOnce>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-8 place-items-center">
            {
               ServicesData.map(({id, img, name, description}) => {
                  return <>
                    <div key={id} className="max-w-[300px] group rounded-2xl bg-white hover:bg-[var(--text-color)] hover:text-white duration-300 shadow-xl mb-8">
                       <div className="h-[100px]">
                         <img src={img} alt={name} className="rounded-xl max-w-[200px] mx-auto block transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300 shadow-lg"/>
                       </div>
                       <div className="text-center p-4">
                          <Typography variant="h3" className="font-bold font-sans text-lg text-[var(--text-color)] group-hover:text-white mb-3">{name}</Typography>
                          <Typography variant="paragraph" className="text-gray-500 font-sans group-hover:text-white duration-300 text-sm line-clamp-2">{description}</Typography>
                       </div>
                    </div>
                  </>
               })
            }
            </div> 
            </Slide>
          </div>
      </div>
    </div>
  )
}

export default Seconddiv
