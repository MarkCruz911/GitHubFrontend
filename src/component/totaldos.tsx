import { Typography } from '@material-tailwind/react';

interface Props{
    total:number
}

function TotalDos(props:Props) {
    return (
        <div>
            <Typography className='font-bold mt-14 mr-12'>
               TOTAL {props.total}
            </Typography>
        </div>
    );
}

export default TotalDos;