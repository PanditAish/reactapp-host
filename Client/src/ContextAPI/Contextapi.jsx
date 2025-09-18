import { createContext, useContext, useState } from "react";
import HeroData from "../Component/Home/HeroData";

const HeroContext = createContext();

export const HeroProvider = ( { children } ) =>{

    const [activeData, setActiveData] = useState(HeroData[0]);

     return (
        <HeroContext.Provider value={{ activeData, setActiveData }}>
            { children }
        </HeroContext.Provider>
     )
};

export const useHero = () => useContext(HeroContext);