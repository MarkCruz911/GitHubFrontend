import Navbar from '../sidebar/navbar';
import RegistroEvidencias from '../component/registroevidencias';

function PageRepositories() {
   
    return (
        <div className='bg-green-900 grid grid-rows-3 grid-flow-col gap-1'>
            <div className='bg-green-900 row-span-3'><Navbar isRepo='repo'/> </div>
            
            <div className='m-4 bg-white row-span-4 col-span-12  rounded-md '>
                <div className='grid grid-rows-6 grid-flow-col gap-4'>
                <RegistroEvidencias></RegistroEvidencias>

                </div>
            </div>
        </div>
    );
}

export default PageRepositories;