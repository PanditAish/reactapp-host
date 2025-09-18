import { useEffect, useState } from 'react';
import { useAuth } from '../ContextAPI/Auth';
import { toast } from "react-toastify";

const AdminContacts = () => {

  const [contactData, setContactData] = useState([]);
  const { authorizationToken, API } = useAuth();

  const getAllContactsData = async () =>{
     try{
         const response = await fetch(`${API}/api/admin/contacts`, {
            method: "GET",
            headers: {
              Authorization: authorizationToken,
            }
         });
         
         const data = await response.json();
         setContactData(data);

     } catch (error) {
         console.log(error);
     }
  };

  //delete contact data
    const deleteContactData = async (id) =>{
      try {
           const response = await fetch(`${API}/api/admin/contacts/delete/${id}`, {
              method: "DELETE",
              headers: {
                 Authorization: authorizationToken,
              }
          });

          if(response.ok) {
            getAllContactsData();
            toast.success('deleted Successfully');
          } else {
            toast.error("Not Deleted");
          }
      } catch (error) {
          console.log(error);
      }
  }

  useEffect(() =>{
    getAllContactsData();
  }, []);


  return (
    <>
     <div className="bg-white p-2 shadow-md rounded-lg">
       <div className="overflow-x-auto w-full">
          <table className="min-w-full text-sm text-left border-collapse">
            <thead className="bg-[#6d6d6d] text-sm text-white rounded-md">
              <tr className="rounded-md">
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Message</th>
                <th className="px-6 py-3">Delete</th>
              </tr>
            </thead>
            <tbody>
              { 
                contactData.map((curContact, index) => {

                  const { _id, username, email, message } = curContact;
                  return (
                    <tr key={index} className="bg-white border-b hover:bg-gray-100">
                      <td className="px-6 py-4 font-medium text-gray-900 capitalize">{username}</td>
                      <td className="px-6 py-4">{email}</td>
                      <td className="px-6 py-4">{message}</td>
                      <td className="px-6 py-4 cursor-pointer font-medium">
                        <button onClick={() => deleteContactData(_id)} className="px-3 py-1 text-sm rounded bg-red-500 text-white hover:bg-red-600">
                          Delete
                        </button>
                      </td>
                    </tr>
                  )
                }) 
                
               }
            </tbody>
          </table>
       </div>    
    </div>
    </>
  )
}

export default AdminContacts;
