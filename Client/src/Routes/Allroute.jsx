import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Service from "../Pages/Service";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Errorpage from "../Pages/Errorpage";
import Logout from "../Pages/Logout";
import AdminUsers from "../Pages/AdminUsers";
import AdminContacts from "../Pages/AdminContacts";
import AdminLayout from "../Component/Layout/AdminLayout";
import MainLayout from "../Component/Layout/MainLayout";
import AdminUpdate from "../Pages/AdminUpdate";

const Allroute = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="users" element={<AdminUsers />} />
          <Route path="users/:id/edit" element={<AdminUpdate />} />
          <Route path="contacts" element={<AdminContacts />} />
        </Route>
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </>
  );
};

export default Allroute;
