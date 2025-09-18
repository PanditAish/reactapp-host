import { BrowserRouter } from "react-router-dom";
import Allroute from "./Routes/Allroute";
//import StickyNavbar from "./Component/Layout/Navbar";
import { HeroProvider } from "./ContextAPI/Contextapi";
//import { Footer } from "./Component/Layout/Footer";
import { ActiveDataProvider } from "./ContextAPI/Activedata";
import { AuthProvider } from "./ContextAPI/Auth.jsx";

export default function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
      <HeroProvider>
        <ActiveDataProvider>
          {/* <StickyNavbar /> */}
          <Allroute />
          {/* <Footer /> */}
        </ActiveDataProvider>
      </HeroProvider>
    </AuthProvider>
    </BrowserRouter>
  );
}
