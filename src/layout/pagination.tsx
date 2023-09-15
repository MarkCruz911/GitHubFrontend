import { ArrowLeftIcon,ArrowRightIcon } from '@heroicons/react/24/solid';
import { IconButton, Typography} from '@material-tailwind/react';
import React, { useState } from 'react';

function Pagination() {
    const [active,setActive]= useState(1);

    const next=()=>{
        if(active===10) return;
        const a = active+1;
        setActive(a);
        console.log(active);
    }
    const prev=()=>{
        if(active===1) return;
        const a = active-1;
        setActive(a);
    }

    return (
        <div className='flex items-center gap-8 '>
            <IconButton size='sm' variant='outlined' onClick={prev} disabled={active===1}>
                <ArrowLeftIcon strokeWidth={2} className='h-4 w-4'/>
            </IconButton>

            <Typography className='text-gray-500 font-normal flex items-center gap-3'>
                Page <strong className='text-gray-900 font-semibold'>{active}</strong> of{" "} <strong className='text-gray-900'>10</strong>
            </Typography>

            <IconButton size='sm' variant='outlined' onClick={next} disabled={active===10}>
                <ArrowRightIcon strokeWidth={2} className='h-4 w-4'/>
            </IconButton>
        </div>
    );
}

export default Pagination;