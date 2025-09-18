import { Button, Input, Typography } from "@material-tailwind/react";
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import { useHero } from "../../ContextAPI/Contextapi";
import contactBg from "../../Assets/images/backgroundimg1.jpg";
import { Slide } from "react-awesome-reveal";
import { useAuth } from "../../ContextAPI/Auth";

const Contactpage = () => {
  const { activeData } = useHero();
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });

  const [ userData, setUserData] = useState(true);

  const { user, API } = useAuth();

  if(userData && user) {
     setContact({
        username: user.username,
        email: user.email,
        message: "",
     });

     setUserData(false);
  }

  const handleInput = (e) => {
      let name = e.target.name;
      let value = e.target.value;

      setContact({
        ...contact,
        [name]: value,
      })
  };

  const handleSubmit = async (e) =>{
      e.preventDefault();
      console.log(contact);

      try{
          const response = await fetch(`${API}/api/form/contact`, {
              method: "POST",
              headers: {
                'Content-Type': "application/json",
              },
              body: JSON.stringify(contact),
          });

          if(response.ok) {
             setContact({username: "", email: "",  message: ""});
             alert("Message send successfully");
          }
      } catch (error) {
          console.log(error);
      }
  }

  const textColor = activeData?.bgcolor || "#d70654";

  return (
    <div className="flex justify-center items-center md:min-h-[60vh] bg-gray-50 px-4 py-20">
    <Slide direction="left" delay={0.2} duration={1000}>
    <div className="flex flex-col md:flex-row shadow-2xl rounded-lg overflow-hidden max-w-5xl w-full">
      <div className="md:w-1/2 w-full bg-cover bg-center flex flex-col justify-center items-center p-8 text-white"
          style={{
            backgroundImage:
              `url(${contactBg})`,
          }}
        >
          <div className="p-6 rounded-xl text-center">
            <Typography variant="h2" className="text-2xl font-bold mb-3">Get in Touch</Typography>
            <p className="text-sm leading-relaxed">
              Have questions or feedback? We’d love to hear from you. 
              Fill out the form and our team will get back to you as soon as possible.
            </p>
          </div>
        </div>

      <div className="md:w-1/2 w-full bg-white p-8" style={{ "--text-color": textColor }}>
        <div className="flex flex-col items-center justify-center mb-6 p-5">
          <FaUserCircle className="text-5xl text-[var(--text-color)] transition-colors" />
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
                value={contact.username}
                onChange={handleInput}
              />
              <Input
                type="email"
                variant="standard"
                label="Email"
                placeholder="Email"
                name="email"
                value={contact.email}
                onChange={handleInput}
              />
              <Input
                 type="text"
                 variant="standard"
                 label="Message"
                 placeholder="Message"
                 name="message"
                 value={contact.message}
                 onChange={handleInput}
                />
            </div>
            <Button
              type="submit"
              className="w-full mt-8 bg-[var(--text-color)]"
            >
              Send
            </Button>
          </div>
        </form>
      </div>
    </div>
    </Slide>
    </div>
  );
};

export default Contactpage;

