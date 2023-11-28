import RegistroCriminal from '../component/registrocriminal';
import Navbar from '../sidebar/navbar';


function PageCommits() {
    
    return (
        <div className='bg-green-900 grid grid-rows-3 grid-flow-col gap-1'>
            <div className='bg-green-900 row-span-3'><Navbar /> </div>
            
            <div className='m-4 bg-white row-span-4 col-span-12  rounded-md '>
                <div className='grid grid-rows-6 grid-flow-col gap-4'>
                    <div>
                        <RegistroCriminal></RegistroCriminal>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageCommits;