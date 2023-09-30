import { ArrowLeftIcon,ArrowRightIcon } from '@heroicons/react/24/solid';
import { IconButton, Typography} from '@material-tailwind/react';
import { useState,useEffect } from 'react';

interface Props{
    setPageActual:(value:number)=>void,
    total:number,
    page:number
}

function Pagination(props:Props) {
    const [active,setActive]= useState(1);
    const [cant,setCant]=useState(3);

    useEffect(()=>{
        setCant(props.total);
    });

    const next=()=>{
        console.log(cant);
        console.log(active);
        if(active===cant) return;
        //const a = active+1;
        //setActive(a);
        setActive((prev) => {
            props.setPageActual(prev+1);
            return prev + 1;
        });
        //
        //callback and fallBack
        //1: buenas practicas de lenguaje estrutura de airbnb best practice esta en github para hacer buen codigo 
        //Linters: eslint, prettier para mantener un buen codigo. 
        //2: unit test: mocha para hacer pruebas de mis funciones. 
        //

        //props.setPageActual(a);
    };

    const prev=()=>{
        if(active===1) return;
        const a = active-1;
        setActive(a);
        props.setPageActual(a);
    };

    return (
        
        <div className='flex items-center gap-8 '>
            <IconButton size='sm' variant='outlined' onClick={prev} disabled={active===1}>
                <ArrowLeftIcon strokeWidth={2} className='h-4 w-4'/>
            </IconButton>

            <Typography className='text-gray-500 font-normal flex items-center gap-3'>
                Page <strong className='text-gray-900 font-semibold'>{active}</strong> of{" "} <strong className='text-gray-900'>{cant}</strong>
            </Typography>

            <IconButton size='sm' variant='outlined' onClick={next} disabled={active===10}>
                <ArrowRightIcon strokeWidth={2} className='h-4 w-4'/>
            </IconButton>
        </div>
        
    );
}

export default Pagination;