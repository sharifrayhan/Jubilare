import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
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


    const [cards, setCards] = useState([])

    
    useEffect(() => {
        fetch('services.json')
            .then(result => result.json())
            .then(data => setCards(data) )
    }, []);

    const logOut = () => {
      setLoading(true)
      return signOut(auth);
  }

    const pass = {
      user,
      logOut,
      cards
    
  }



  return <Context.Provider value={pass}>{children}</Context.Provider>;
};

AllContext.propTypes = {
    children: PropTypes.node
  };

export default AllContext;
