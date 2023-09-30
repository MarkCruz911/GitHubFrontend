interface Props{
    login:string,
    avatar_url:string,
    html_url:string
}

function Contribuitor(props:Props) {
    return (
        <div className='flex flex-row m-12'>
            <div className='border-2 border-black p-2'>
            <div className='flex items-center grid grid-row-2'>
                <img src={props.avatar_url} alt='avatar' className='rounded ml-3 h-64 w-64'/>
                <div>
                    <h1 className='h6 text-black font-bold'>
                        {props.login}
                    </h1>
                    <h2  className=' text-blue-500 ' >
                       <a href={props.html_url}>{props.html_url}</a> 
                    </h2>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Contribuitor;