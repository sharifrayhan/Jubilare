import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/Firebase.config";
import Swal from 'sweetalert2'



export const Context = createContext(null);
const auth = getAuth(app);



const AllContext = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [registerError, setRegisterError] = useState('')
    const [termsError, setTermsError] = useState('')
    const [registerSuccess, setRegisterSuccess] = useState('')
    const [loginError, setLoginError] = useState('')
    const [loginSuccess, setLoginSuccess] = useState('')
    const [googleSuccess, setGoogleSuccess] = useState('')
    console.log(registerSuccess)

  
    
    if(googleSuccess){
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Success',
        showConfirmButton: false,
        timer: 1000
      })
    }

    if(registerSuccess){
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Registration Successfull, Please Login to continue',
        showConfirmButton: false,
        timer: 1000
      })
    }

    const registerSuccessModal = ()=>{
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Registration Successfull, Please Login to continue',
        showConfirmButton: false,
        timer: 1500
      })
    }
  
    if(loginError){
      Swal.fire({
        position: 'top-middle',
        icon: 'error',
        title: 'Invalid Credentials',
        showConfirmButton: false,
        timer: 1500
      })
    }
  
    if(loginSuccess){
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Successfully logged in',
        showConfirmButton: false,
        timer: 1000
      })
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

  const handleRegister = (e, navigate) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const url = form.get('url');
    const email = form.get('email');
    const password = form.get('password');
    const checkbox = form.get('checkbox');
    console.log(email,password)
    setRegisterError('')
    setRegisterSuccess('')
    setTermsError('')

    if (password.length<6){
      setRegisterError('Password Should be at least 6 characters or long');
      return
    }

    else if(!/[A-Z]/.test(password)){
      setRegisterError('Password must contain an uppercase letter');
      return
    }

    else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)){
      setRegisterError('Password must contain a special character');
      return
    }

    else if(!checkbox){
      setTermsError('You have to accept our terms & conditions');
      return 
    }

    createUser(email,password,navigate)
    .then(result=>{
        console.log(result.user)
        setRegisterSuccess(result.user)
        updateProfile(result.user,{
          displayName: name,
          photoURL: url,
        })
        registerSuccessModal()
        navigate('/Login')
        logOut()
      
        
        
        

        
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



    




    const handleLogin = (e, navigate, location) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email,password)
        setLoginError('')
        setLoginSuccess('')

        signIn(email,password, navigate,location)
        .then(result=>{
            console.log(result.user);
            setLoginSuccess(result.user)
            
      
            navigate(location?.state ?  location.state : "/")

        })
        .catch(error=>{
            console.error(error.code)
            setLoginError(error.message)
        })
    }

    const googleProvider = new GoogleAuthProvider()

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }
   

    const logOut = () => {
      setLoading(true)
      setRegisterSuccess('')
      setRegisterError('')
      setTermsError('')
      setLoginSuccess('')
      setLoginError('')
      setGoogleSuccess('')
      return signOut(auth);
  }

    const pass = {
      user,
      logOut,
      createUser,
      signIn,
      loading,
      handleRegister,
      registerError,
      registerSuccess,
      setRegisterSuccess,
      handleLogin,
      loginSuccess,
      googleSignIn,
      termsError,
      setGoogleSuccess

    
  }



  return <Context.Provider value={pass}>{children}</Context.Provider>;
};

AllContext.propTypes = {
    children: PropTypes.node
  };

export default AllContext;
