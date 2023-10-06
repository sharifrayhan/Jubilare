import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../firebase/Firebase.config";


export const Context = createContext(null);
const auth = getAuth(app);



const AllContext = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
  
  
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('something happened in the on auth state change', currentUser);
            setUser(currentUser)
            setLoading(false)
        });
        return () =>{
            unSubscribe();
        }
    },[])



  return <Context.Provider>{children}</Context.Provider>;
};

AllContext.propTypes = {
    children: PropTypes.node
  };

export default AllContext;
