import { NavLink } from "react-router-dom";
import errorimg from "../Assets/images/404error.jpg";

const Errorpage = () => {
  return (
    <>
    <div className="bg-gray-50 py-5">
      <div className="flex justify-center items-center">
         <img src={errorimg} alt="error image" className="h-[300px] w-[300px]"/>
      </div>
      <div className="flex justify-center items-center gap-4 mt-5">
        <NavLink to="/" className="border border-gray py-2 px-4 rounded-md bg-white">Home</NavLink>
        <NavLink to="/contact" className="border border-gray py-2 px-4 rounded-md bg-white">Report Problem</NavLink>
      </div>
    </div>
    </>
  )
}

export default Errorpage
