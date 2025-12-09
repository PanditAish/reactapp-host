import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  IconButton,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  UserCircleIcon,
  InboxIcon,
  HomeIcon,
  Bars3Icon,
  XMarkIcon
} from "@heroicons/react/24/solid";
import { Navigate, NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../../ContextAPI/Auth";
import { useState } from "react";

const AdminLayout = () => {
  const { user, isLoading } = useAuth();
  const [openSidebar, setOpenSidebar] = useState(false);

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  if (!user.isAdmin) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex min-h-screen bg-gray-50">

      {/* ---------------------- MOBILE HEADER ---------------------- */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-[#cf4f00c2] flex items-center justify-between px-4 py-3 z-50">
        <Typography className="text-white text-xl font-bold">AishPandit</Typography>

        {/* Hamburger Button */}
        <button onClick={() => setOpenSidebar(true)}>
          <Bars3Icon className="h-7 w-7 text-white" />
        </button>
      </div>

      {/* ---------------------- SIDEBAR ---------------------- */}
      <div
        className={`
          fixed top-0 left-0 h-full w-64 bg-white shadow-xl transform 
          ${openSidebar ? "translate-x-0" : "-translate-x-full"}
          transition-transform duration-300 z-50 md:translate-x-0 md:static md:w-72
        `}
      >
        {/* Close button (mobile only) */}
        <div className="md:hidden flex justify-between items-center p-4 bg-gray-100">
          <Typography className="text-[#cf4f00] text-lg font-bold">
            Menu
          </Typography>
          <button onClick={() => setOpenSidebar(false)}>
            <XMarkIcon className="h-6 w-6 text-black" />
          </button>
        </div>

        <Card className="h-full w-full shadow-none px-4">
          <div className="hidden md:block p-4">
            <Typography variant="h5" className="text-[#cf4f00] font-bold">
              AishPandit
            </Typography>
          </div>

          <List>
            <NavLink to="/admin">
              <ListItem onClick={() => setOpenSidebar(false)}>
                <ListItemPrefix>
                  <PresentationChartBarIcon className="h-5 w-5 text-[#81b622]" />
                </ListItemPrefix>
                Dashboard
              </ListItem>
            </NavLink>

            <NavLink to="/admin/users">
              <ListItem onClick={() => setOpenSidebar(false)}>
                <ListItemPrefix>
                  <UserCircleIcon className="h-5 w-5 text-[#81b622]" />
                </ListItemPrefix>
                Users
              </ListItem>
            </NavLink>

            <NavLink to="/admin/contacts">
              <ListItem onClick={() => setOpenSidebar(false)}>
                <ListItemPrefix>
                  <InboxIcon className="h-5 w-5 text-[#81b622]" />
                </ListItemPrefix>
                Contacts
              </ListItem>
            </NavLink>

            <NavLink to="/">
              <ListItem onClick={() => setOpenSidebar(false)}>
                <ListItemPrefix>
                  <HomeIcon className="h-5 w-5 text-[#81b622]" />
                </ListItemPrefix>
                Home
              </ListItem>
            </NavLink>
          </List>
        </Card>
      </div>

      {/* BACKDROP for mobile */}
      {openSidebar && (
        <div
          onClick={() => setOpenSidebar(false)}
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
        ></div>
      )}

      {/* ---------------------- MAIN CONTENT ---------------------- */}
      <div className="flex-1 flex flex-col pt-14 md:pt-0">
        <header className="hidden md:flex justify-between items-center bg-[#cf4f00c2] shadow-md px-6 py-3 m-3 rounded-lg">
          <input
            type="text"
            placeholder="Search..."
            className="border rounded-md px-3 py-1 w-1/3 focus:outline-none focus:ring-2 focus:ring-black/30"
          />

          <Typography variant="small" color="white">
            Welcome,
            <span className="font-semibold text-white">{user.username}</span>
          </Typography>
        </header>

        <main className="p-4 md:p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
