import StickyNavbar from './Navbar';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import ScrollToTop from "react-scroll-to-top";

const MainLayout = () => {
  return (
    <>
       <StickyNavbar />
       <Outlet />
       <Footer />
       <ScrollToTop smooth color='white' style={{ backgroundColor: "dodgerblue", borderRadius: "50px", padding: "5px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)"}}/>
    </>
  )
}

export default MainLayout
