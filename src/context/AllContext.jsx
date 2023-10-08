import PropTypes from 'prop-types';
import toast, { Toaster } from 'react-hot-toast';
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/Firebase.config";


export const Context = createContext(null);
const auth = getAuth(app);



const AllContext = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [registerError, setRegisterError] = useState('')
    const [registerSuccess, setRegisterSuccess] = useState('')

    if(registerError){
      alert('This is an error!');
    }
  
    if(registerSuccess){
      alert('Successfully created!');
    }
  
  
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

    const createUser = (email,password) => {
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
  }

  const handleRegister = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('email');
    const url = form.get('url');
    const email = form.get('email');
    const password = form.get('password');
    console.log(email,password)
    setRegisterError('')
    setRegisterSuccess('')

    createUser(email,password)
    .then(result=>{
        console.log(result.user)
        setRegisterSuccess(result.user)

        
    })
    .catch(error=>{
        console.error(error)
        setRegisterError(error.message)
    })
}

  const signIn = (email,password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}


   

    const logOut = () => {
      setLoading(true)
      return signOut(auth);
  }

    const pass = {
      user,
      logOut,
      createUser,
      signIn,
      loading,
      handleRegister,

    
  }



  return <Context.Provider value={pass}>{children}</Context.Provider>;
};

AllContext.propTypes = {
    children: PropTypes.node
  };

export default AllContext;
