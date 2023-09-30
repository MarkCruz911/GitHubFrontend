import { useEffect, useState } from 'react';
import { CheckAuthState } from './firebase/authProvider';

const PrivateRoute=():boolean=> {
    const [isAuthenticated, setIsAuthenticated]=useState<boolean>(false);

    useEffect(()=>{
        CheckAuthState(setIsAuthenticated);
        console.log("aquiiiiiiiiiiiiiiiiii");
        console.log(isAuthenticated);
    },[]);

    if(isAuthenticated){
        console.log("verdadero hola");
        console.log(isAuthenticated);
        return true;
    }else{
        console.log("falso hola");
        console.log(isAuthenticated);
        return false;
    }
}

export default PrivateRoute;