import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useHero } from "../../ContextAPI/Contextapi";
import { useAuth } from "../../ContextAPI/Auth";

const StickyNavbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { activeData } = useHero();
  
  const { isLoggedIn } = useAuth();

  const textColor = activeData?.bgcolor || "#d70654";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      className={`sticky top-0 z-50 mx-auto w-full max-w-full rounded-none px-4 py-2 lg:px-24 lg:py-4 transition-shadow duration-300 border-0 ${
        isScrolled ? "shadow-md bg-white/50 backdrop-blur" : "bg-white/50"
      }`}
    >
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography as="a" href="#" className="mr-4 cursor-pointer font-bold font-handwriting text-base block antialiased lg:text-xl" style={{ color: textColor}}>
          AishPandit
        </Typography>
        <div className="hidden lg:flex items-center gap-6" style={{ '--text-color': textColor }}>
          <Typography as="a" href="/" className="cursor-pointer text-[var(--text-color)] hover:text-[#727272] transition-colors">
            Home
          </Typography>
          <Typography as="a" href="/about" className="cursor-pointer text-[var(--text-color)] hover:text-[#727272] transition-colors">
            About
          </Typography>
          <Typography as="a" href="/service" className="cursor-pointer text-[var(--text-color)] hover:text-[#727272] transition-colors">
            Service
          </Typography>
          <Typography as="a" href="/contact" className="cursor-pointer text-[var(--text-color)] hover:text-[#727272] transition-colors">
            Contact
          </Typography>
        </div>
        <div className="lg:flex items-center gap-6">
        {
          isLoggedIn ? (
            <>
              {user?.isAdmin === true && (
                <NavLink
                  to="/admin"
                  className="hidden lg:inline-block bg-gradient-to-r from-black/70 to-black/75 rounded-md py-1 px-3 text-white shadow-xl hover:bg-black/80"
                >
                  Admin Panel
                </NavLink>
               )}
              <NavLink to="/logout" className="hidden lg:inline-block bg-gradient-to-r from-black/70 to-black/75 rounded-md py-1 px-3 text-white shadow-xl hover:bg-black/80">Logout</NavLink>
            </>
          ) :
          (
            <>
              <NavLink to="/login" className="hidden lg:inline-block bg-gradient-to-r from-black/70 to-black/75 rounded-md py-1 px-3 text-white shadow-xl hover:bg-black/80">Login</NavLink>
              <NavLink to="/register" className="hidden lg:inline-block bg-gradient-to-r from-black/70 to-black/75 rounded-md py-1 px-3 text-white shadow-xl hover:bg-black/80">Sign Up</NavLink>
            </>
          )
        }
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav} className="lg:hidden">
        <div className="flex flex-col gap-2 mt-2">
          <Typography as="a" href="/" className="cursor-pointer text-gray-700">
            Home
          </Typography>
          <Typography as="a" href="/about" className="cursor-pointer text-gray-700">
            About
          </Typography>
          <Typography as="a" href="/service" className="cursor-pointer text-gray-700">
            Service
          </Typography>
          <Typography as="a" href="/contact" className="cursor-pointer text-gray-700">
            Contact
          </Typography>
          {
          isLoggedIn ? (
            <NavLink to="/logout" className="text-center bg-gradient-to-r from-black/70 to-black/75 rounded-md py-1 px-3 text-white shadow-xl hover:bg-black/80">Logout</NavLink>
          ) :
          (
            <>
              <NavLink to="/login" className="text-center bg-gradient-to-r from-black/70 to-black/75 rounded-md py-1 px-3 text-white shadow-xl hover:bg-black/80">Login</NavLink>
              <NavLink to="/register" className="text-center bg-gradient-to-r from-black/70 to-black/75 rounded-md py-1 px-3 text-white shadow-xl hover:bg-black/80">Sign Up</NavLink>
            </>
          )
        }
        </div>
      </Collapse>
    </Navbar>
  );
}

export default StickyNavbar;
