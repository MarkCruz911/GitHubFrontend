import Navbar from '../sidebar/navbar';
import Title from '../component/title';
import Pagination from '../component/pagination';
import SubTitle from '../component/subtitle';
import TotalUno from '../component/totaluno';
import Contribuitor from '../component/contribuitor';
import {useState,useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { getToken } from '../firebase/authProvider';
import RegistroCasos from '../component/registrocasos';

function PageContribuitors() {
    
    
    return (
        <div className='bg-green-900 grid grid-rows-3 grid-flow-col gap-1'>
            <div className='bg-green-900 row-span-3'><Navbar isRepo={'contribuitors'}/> </div>
            
            <div className='m-4 bg-white row-span-4 col-span-12  rounded-md '>
                <div className='grid grid-rows-2 grid-flow-col gap-4'>
                    
                    <RegistroCasos></RegistroCasos>



                </div>

            </div>
        </div>
    );
}

export default PageContribuitors;