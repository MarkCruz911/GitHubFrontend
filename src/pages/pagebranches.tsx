import { useEffect, useState } from 'react';
import Navbar from '../sidebar/navbar';
import DashboardBase from '../component/dashboardBase';

function PageBranches() {
    
    return (
        <div className='bg-green-900 grid grid-rows-3 grid-flow-col gap-1'>
            <div className='bg-green-900 row-span-3'><Navbar isRepo={'branches'}/> </div>
            
            <div className='m-4 bg-white row-span-4 col-span-12  rounded-md '>
                <div >
                    GRAFICAS PARA INTELIGENCIA DE NEGOCIOS
                </div>

                <div >
                    <DashboardBase></DashboardBase>
                </div>
            </div>
        </div>
    );
}

export default PageBranches;