import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { useAuth } from "../ContextAPI/Auth";
import { toast } from "react-toastify";
import { Typography, Input, Button } from '@material-tailwind/react';

const AdminUpdate = () => {

    const [data, setData] = useState({
        username: "",
        email: "",
        phone: "",
    });

    const params = useParams();
    const  { authorizationToken, API } = useAuth();

    const getSingleUserData = async () => {
       try{
          const response = await fetch(`${API}/api/admin/users/${params.id}`, {
             method: "GET",
             headers: {
               Authorization: authorizationToken,
             },
          });
          const data = await response.json();
          setData(data);
       } catch (error) {
          console.log(error);
       }
    };

    useEffect(() =>{
       getSingleUserData();
    }, []);

    const handleInput = (e) =>{
       let name = e.target.name;
       let value = e.target.value;

       setData({
          ...data,
          [name]: value,
       })
    };

    //update data dynamically
    const handleSubmit = async (e) =>{
        e.preventDefault();

        try{
            const response = await fetch(`${API}/api/admin/users/update/${params.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: authorizationToken,
                },
                body: JSON.stringify(data),
            });
            
            if(response.ok) {
                toast.success("Updated Successfully");
            } else {
                toast.error("Not Updated");
            }
        } catch (error) {
            console.log(error);
        }
    };
    
  return (
    <>
       <div className="flex justify-center items-center min-h-[70vh]">
            <div
              className="shadow-2xl rounded-lg w-80 bg-white"
            >
              <div className="flex flex-col items-center justify-center p-5 rounded-t-lg bg-[#81b622] mb-3">
                <Typography className="text-2xl font-semibold font-sans text-white">
                  Update User Data
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
                      value={data.username}
                      onChange={handleInput}
                    />
                    <Input
                      type="email"
                      variant="standard"
                      label="Email"
                      placeholder="Email"
                      name="email"
                      value={data.email}
                      onChange={handleInput}
                    />
                    <Input
                      type="tel"
                      variant="standard"
                      label="Phone"
                      placeholder="Phone"
                      name="phone"
                      value={data.phone}
                      onChange={handleInput}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full mt-8 bg-[#81b622] text-white"
                  >
                    Update
                  </Button>
                </div>
              </form>
            </div>
          </div>
    </>
  )
}

export default AdminUpdate
