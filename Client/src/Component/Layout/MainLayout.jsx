import StickyNavbar from './Navbar';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';

const MainLayout = () => {
  return (
    <>
       <StickyNavbar />
       <Outlet />
       <Footer />
    </>
  )
}

export default MainLayout
