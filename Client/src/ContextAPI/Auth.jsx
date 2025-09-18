import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{

   const [token, setToken] = useState(localStorage.getItem('token'));
   const [user, setUser] = useState("");
   const [isLoading, setIsLoading] = useState(true);
   const authorizationToken = `Bearer ${token}`;

   const API = import.meta.env.VITE_APP_URI_API;

   const storeTokenInLS = (serverToken) => {
     setToken(serverToken);
     return localStorage.setItem('token', serverToken);
   };

   let isLoggedIn = !!token;

   //logout functionality
   const logoutUser = () => {
      setToken("");
      return localStorage.removeItem("token");
   };

   //jwt authentication
   const userAuthentication = async () => {
     try{
         setIsLoading(true);
         const response = await fetch(`${API}/api/auth/user`, {
            method:"GET",
            headers: {
               Authorization: authorizationToken,
            },
         });

         if(response.ok) {
            const data = await response.json();
            setUser(data.userData);
            setIsLoading(false);
         } else {
            console.error("Error fetching user data");
            setIsLoading(false);
         }
     } catch (error) {
         console.error("Error fetching user data", error);
     }
   }

   useEffect(() =>{
      if(token) {
      userAuthentication();
      }
   }, [token]);

   return (
    <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, logoutUser, user, authorizationToken, isLoading, API }}>
        {children}
    </AuthContext.Provider>
   )
};

export const useAuth = () => {
   const authContextValue = useContext(AuthContext);
   if(!authContextValue) {
      throw new Error("useAuth used outside of the provider");
   }
   return authContextValue;
}