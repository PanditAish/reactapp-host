import { Button, Input, Typography } from "@material-tailwind/react";
import { FaUserCircle } from "react-icons/fa";
import { useHero } from "../ContextAPI/Contextapi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../ContextAPI/Auth";
import { toast } from "react-toastify";

const Register = () => {
  const { activeData } = useHero();
  const navigate = useNavigate();
  const { storeTokenInLS, API }  = useAuth();
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const URL = `${API}/api/auth/register`;

  const handleInput = (e) => {
      let name = e.target.name;
      let value = e.target.value;

      setUser({
        ...user,
        [name]: value,
      })
  };

  const handleSubmit = async(e) =>{
      e.preventDefault();

      try{
          const response = await fetch(URL, {
          method:"POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });

        const raw = await response.clone().text();
        console.log("RAW RESPONSE FROM SERVER:", raw);

        // ✅ JSON safe parse
        let res_data;
        try {
          res_data = JSON.parse(raw);
        } catch (err) {
          console.error("JSON parse failed:", err);
          toast.error("Server invalid response.");
          return;
        }

        console.log("res from server", res_data);


        // let res_data = await response.json();
        // console.log("res from server", res_data.extraDetails);

        if(response.ok) {
           
           storeTokenInLS(res_data.token);
           setUser({ username: "", email: "", phone: "", password: "" });
           toast.success("Registration successful");
           navigate("/");
        } else {
           toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
        }
        //console.log(response);
      } catch(error) {
        console.log("register", error);
      }
  }

  const textColor = activeData?.bgcolor || "#d70654";

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div
        className="shadow-2xl rounded-lg w-80"
        style={{ "--text-color": textColor }}
      >
        <div className="flex flex-col items-center justify-center p-5 rounded-t-lg">
          <FaUserCircle className="text-5xl mb-2 text-[var(--text-color)] transition-colors" />
          <Typography className="text-2xl font-semibold font-sans">
            Sign Up
          </Typography>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="px-7 pt-4 pb-7">
            <div className="flex flex-col gap-6">
              <Input
                type="text"
                variant="standard"
                label="Username"
                placeholder="Email"
                name="username"
                value={user.username}
                onChange={handleInput}
              />
              <Input
                type="email"
                variant="standard"
                label="Email"
                placeholder="Email"
                name="email"
                value={user.email}
                onChange={handleInput}
              />
              <Input
                type="number"
                variant="standard"
                label="Phone"
                placeholder="Phone"
                name="phone"
                value={user.phone}
                onChange={handleInput}
              />
              <Input
                type="password"
                variant="standard"
                label="Password"
                placeholder="Password"
                name="password"
                value={user.password}
                onChange={handleInput}
              />
            </div>
            <Button
              type="submit"
              className="w-full mt-8 bg-[var(--text-color)]"
            >
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
