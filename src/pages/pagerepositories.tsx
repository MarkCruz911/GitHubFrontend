import Navbar from '../sidebar/navbar';
import ListRepositories from '../component/listRepository';
import Title from '../component/title';
import Pagination from '../component/pagination';
import TotalUno from '../component/totaluno';
import {useEffect,useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { getToken } from '../firebase/authProvider';
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