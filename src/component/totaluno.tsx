
interface Props{
    total:number
}


function TotalUno(props:Props) {
    return (
            
        <div className='bg-black rounded-full h-8 w-8 mt-8'>
            <h1 className='text-white pl-2'>{props.total}</h1>
        </div>
      
    );
}

export default TotalUno;