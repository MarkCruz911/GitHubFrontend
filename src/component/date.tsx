import { Typography } from '@material-tailwind/react';
interface Props{
    date:string
}
function Date(props:Props) {
    return (
        <div>
            <Typography className='text-gray-500 font-semibold my-5' >
                {props.date}
            </Typography>
        </div>
    );
}

export default Date;