import { useEffect, useState } from "react";
import initializeAuthentication from "../../Firebase/firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";



initializeAuthentication();
const useFirebase = () => {
    const [email, setEmail] = useState('');
    const [isLogIn, setIsLogIn] = useState('false')
    const [password, setPassword] = useState('');
    const [user, setUser] = useState({});
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true);


    const handleEmailChange = e => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const handlRegister = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('password must be 6 Charecter')
            return
        }
        isLogIn ? processLogIn(email, password) : createNewUser(email, password);

    }

    const processLogIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setError('')
            })
            .catch(error => {
                setError(error.message)
            })

    }
    const verifyMail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {

            })
    }

    const createNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user
                setError('')
                verifyMail()
            })
            .catch(error => {
                setError(error.message)
            })
    }




    const auth = getAuth();
    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user)
            })
            .finally(() => setIsLoading(false));
    }

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        })
        return () => unsubscribe;
    }, [])

    return {
        user,
        error,
        logOut,
        isLoading,
        handlRegister,
        handlePasswordChange,
        handleEmailChange,
        signInUsingGoogle
    }
}

export default useFirebase;