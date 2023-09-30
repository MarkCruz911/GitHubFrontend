
import { Auth } from "./firebaseConfig";
import { onAuthStateChanged, signInWithPopup,GithubAuthProvider, signOut } from "firebase/auth";



const Login = ()=>{
    const provider = new GithubAuthProvider();
    provider.addScope('repo repo:status repo_deployment read:org user');
    signInWithPopup(Auth,provider).then((result)=>{
        console.log(result);
    }).catch((error)=>{
        console.log("no se puede autenticar");
        console.log(error.message);
    })
}

export function CheckAuthState(setIsAuthenticated:React.Dispatch<React.SetStateAction<boolean>>){
    const isAuth=false;
    onAuthStateChanged(Auth,(user)=>{
        if(user){
            console.log("ingresamos a true");
            setIsAuthenticated(true);
        }else{
            console.log("ingresamos a false");
            setIsAuthenticated(false);
        }
    });
    console.log("devolvemos ",isAuth);
    
}
export const Logout=async()=>{
    try{
        await Auth.signOut();
        signOut(Auth);
        console.log("Sesion cerrada exitosamente");
    }catch(err){
        console.log("Error al cerrar sesion",err);
    }
}

export const getToken = (setToken:React.Dispatch<React.SetStateAction<string>>)=>{
    Auth.currentUser?.getIdToken().then(function(token){
        console.log(token);
        console.log("token arriba");
        setToken(token);
    }).catch(function(err){
        console.log(err);
    });
}

export default Login;

