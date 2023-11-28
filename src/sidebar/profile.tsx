import { Logout } from "../firebase/authProvider";

function Profile() {
    return (
        <div className='flex flex-row'>
            <div className='flex items-center grid grid-row-2'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrO_ER2tPJVZV4tgJwcv0wZl00AAtO78YqgQ&usqp=CAU' alt='avatar' className='rounded h-64 w-64'/>
                
                <div>
                    <h1 className='h6 text-white font-bold'>
                        POLICIA BOLIVIANA
                    </h1>
                    <h2 className=' text-gray-500 font-semibold' >
                        #la policia de todos los bolivianos
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