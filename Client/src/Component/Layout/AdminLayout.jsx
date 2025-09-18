import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  UserCircleIcon,
  InboxIcon,
  PowerIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";
import { Navigate, NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../../ContextAPI/Auth";
 
const AdminLayout = () => {
   const { user, isLoading } = useAuth();

   if(isLoading) {
     return <h1>Loading ...</h1>;
   }

   if(!user.isAdmin) {
     return <Navigate to="/" />
   }
   
  return (
    <>
    <div className="flex h-screen bg-gray-50">
    <Card className="h-full w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" className="text-[#cf4f00] font-handwriting font-bold">
          AishPandit
        </Typography>
      </div>
      <List>
        <NavLink to="/admin">
        <ListItem>
          <ListItemPrefix>
            <PresentationChartBarIcon className="h-5 w-5 text-[#81b622]" />
          </ListItemPrefix>
          Dashboard
        </ListItem>
        </NavLink>

        <NavLink to="/admin/users">
        <ListItem>
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5 text-[#81b622]" />
          </ListItemPrefix>
          Users
        </ListItem>
        </NavLink>

        <NavLink to="/admin/contacts">
        <ListItem>
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5 text-[#81b622]" />
          </ListItemPrefix>
          Contacts
        </ListItem>
        </NavLink>

        <NavLink to="/">
        <ListItem>
          <ListItemPrefix>
            <HomeIcon className="h-5 w-5 text-[#81b622]" />
          </ListItemPrefix>
          Home
        </ListItem>
        </NavLink>
        {/* <ListItem>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem> */}
      </List>
    </Card>
    
    <div className="flex-1 flex flex-col bg-gray-50">
        <header className="flex justify-between items-center bg-[#cf4f00c2] shadow-md px-6 py-3 m-3 rounded-lg">
          {/* Search bar */}
          <input
            type="text"
            placeholder="Search..."
            className="border rounded-md px-3 py-1 w-1/3 focus:outline-none focus:ring-2 focus:ring-black/30"
          />

          {/* Welcome message */}
          <Typography variant="small" color="white">
            Welcome, <span className="font-semibold font-sans text-white">{user.username}</span>
          </Typography>
        </header>

        {/* Page content (changes per route) */}
        <main className="p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
    </>
  );
}

export default AdminLayout;
