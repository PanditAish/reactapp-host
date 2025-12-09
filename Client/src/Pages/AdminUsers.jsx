import { useEffect, useState } from "react";
import { useAuth } from "../ContextAPI/Auth"; 
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";

const AdminUsers = () => {

  const [users, setUsers] = useState([]);
  const { authorizationToken, API } = useAuth();

  const getAllUsersData = async () =>{
      try{
          const response = await fetch(`${API}/api/admin/users`, {
             method: "GET",
             headers: {
               Authorization: authorizationToken,
             }
          });
          const data = await response.json();
          setUsers(data);

      } catch (error) {
          console.log(error);
      }
  }

  const deleteUser = async (id) => {
      try {
        const response = await fetch(`${API}/api/admin/users/delete/${id}`, {
           method: "DELETE",
           headers: {
            Authorization: authorizationToken,
           }
        });

        if(response.ok) {
           getAllUsersData();
           toast.success("User Deleted successfully");
        } else {
           toast.error("Not Deleted");
        }
      } catch (error) {
        console.log(error);
      }
  }

  useEffect(() =>{
      getAllUsersData();
  }, []);

  return (
    <>
       <div className="bg-white p-2 shadow-md rounded-lg">
       <div className="w-full">
          <table className="min-w-full text-sm text-left border-collapse hidden md:table">
            <thead className="bg-[#6d6d6d] text-sm text-white rounded-md">
              <tr className="rounded-md">
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Phone</th>
                <th className="px-6 py-3">Update</th>
                <th className="px-6 py-3">Delete</th>
              </tr>
            </thead>
            <tbody>
              { users.length > 0 ? (
                users.map((curUser, index) => {

                  const { _id, username, email, phone } = curUser;
                  return (
                    <tr key={index} className="bg-white border-b hover:bg-gray-100">
                      <td className="px-6 py-4 font-medium text-gray-900 capitalize">{username}</td>
                      <td className="px-6 py-4">{email}</td>
                      <td className="px-6 py-4">{phone}</td>
                      <td className="px-6 py-4 cursor-pointer font-medium">
                        <Link to={`/admin/users/${_id}/edit`}>
                          <button className="px-3 py-1 text-sm rounded bg-blue-500 text-white hover:bg-blue-600">
                            Edit
                          </button>
                        </Link>
                      </td>
                      <td className="px-6 py-4 cursor-pointer font-medium">
                        <button onClick={() => deleteUser(_id)} className="px-3 py-1 text-sm rounded bg-red-500 text-white hover:bg-red-600">
                          Delete
                        </button>
                      </td>
                    </tr>
                  )
                }) 
                ) : (
                <tr>
                <td
                  colSpan="5"
                  className="px-6 py-4 text-center text-gray-500"
                >
                  No users found
                </td>
               </tr>
               )
               }
            </tbody>
          </table>
   
        {/* mobileresponsve */}

         <div className="md:hidden space-y-4">
            {users.length > 0 ? (
              users.map((curUser, index) => {
                const { _id, username, email, phone } = curUser;
                return (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-lg shadow border"
                  >
                    <p className="mb-1">
                      <span className="font-semibold">Name: </span>
                      {username}
                    </p>

                    <p className="mb-1 break-all">
                      <span className="font-semibold">Email: </span>
                      {email}
                    </p>

                    <p className="mb-1">
                      <span className="font-semibold">Phone: </span>
                      {phone}
                    </p>

                    <div className="flex gap-2 mt-3">
                      <Link
                        to={`/admin/users/${_id}/edit`}
                        className="flex-1"
                      >
                        <button className="w-full px-3 py-2 rounded bg-blue-500 text-white text-sm">
                          Edit
                        </button>
                      </Link>

                      <button
                        onClick={() => deleteUser(_id)}
                        className="flex-1 px-3 py-2 rounded bg-red-500 text-white text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="text-center text-gray-500">No users found</p>
            )}
          </div>


       </div>
       </div>
    </>
  )
}

export default AdminUsers;
