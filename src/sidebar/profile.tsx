import React from 'react';
import { Avatar, Typography } from "@material-tailwind/react";

function Profile() {
    return (
        <div className='flex flex-row'>
            <div className='flex items-center grid grid-row-2'>
                <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGfAyml4A6uSPGKH5TquQQO_hnPsnPMlcjBHVwWbbg&s' alt='avatar' className='rounded'>
                </Avatar>
                <div>
                    <Typography className='h6 text-white font-bold'>
                        Marco Antonio Cruz Rojas
                    </Typography>
                    <Typography className=' text-gray-500 font-semibold' >
                        markcruz9111@gmail.com
                    </Typography>
                </div>
            </div>
            
        </div>
    );
}

export default Profile;