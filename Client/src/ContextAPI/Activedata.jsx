import { createContext, useEffect, useState } from "react";
import heroData from "../Component/Home/HeroData";

export const ActiveDataContext = createContext();

export const ActiveDataProvider = ({children}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
       const interval = setInterval(() =>{
         setActiveIndex((prevIndex) => (prevIndex + 1) % heroData.length);
       }, 4000);
       return () => clearInterval(interval);
    },[]);

    const activeData = heroData[activeIndex];

   return (
      <ActiveDataContext.Provider value={activeData}>
        {children}
      </ActiveDataContext.Provider>
   );
}