import { Logout } from "../firebase/authProvider";

function Profile() {
    return (
        <div className='flex flex-row'>
            <div className='flex items-center grid grid-row-2'>
                <img src='https://avatars.githubusercontent.com/u/85602094?v=4' alt='avatar' className='rounded h-64 w-64'/>
                
                <div>
                    <h1 className='h6 text-white font-bold'>
                        Marco Antonio Cruz Rojas
                    </h1>
                    <h2 className=' text-gray-500 font-semibold' >
                        markcruz9111@gmail.com
                    </h2>
                </div>
                <button className="bg-red-500 text-white rounded-lg" onClick={()=>Logout()}>
                    Logout
                </button>
            </div>
        </div>
    );
}

export default Profile;