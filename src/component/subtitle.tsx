import { Typography } from '@material-tailwind/react';

interface props{
    title:string;
}

function SubTitle(props:props) {
    return (
        <div>
            <Typography className='text-gray-700 font-semibold ml-12  mt-10 text-3xl'>
                {props.title}
            </Typography>
        </div>
    );
}

export default SubTitle;