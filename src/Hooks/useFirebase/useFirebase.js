import { useState } from "react";
import initializeAuthentication from "../../Firebase/firebase.init"


initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState([]);
}