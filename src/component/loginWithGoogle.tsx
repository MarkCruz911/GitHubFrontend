import Login from '../firebase/authProvider';

function LoginWithGoogle() {
    const login=()=>{
        Login();
    }
    return (
        <div className='bg-blue-50 h-screen w-screen flex flex-col justify-center items-center'>
            <h1  className='font-mono text-5xl px-5 mx-5 my-4' >INICIAR SESION CON GITHUB</h1>
            <button className='text-black border-2 border-black shadow-lg shadow-green-500 rounded-lg py-2 px-2 uppercase mx-2' onClick={()=>login()}>
                Login with GitHub
            </button>
        </div>
    );
}

export default LoginWithGoogle;