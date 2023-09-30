import Navbar from '../sidebar/navbar';
import ListRepositories from '../component/listRepository';
import Title from '../component/title';
import Pagination from '../component/pagination';
import TotalUno from '../component/totaluno';
import {useEffect,useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { getToken } from '../firebase/authProvider';

function PageRepositories() {
    const[pageActual,setPageActual]=useState(1);
    const[cantRepo,setCantRepo]=useState(1);
    const[responses,setResponse]=useState([{title:"",description:"",date:"",status:""}]);
    const[totalPage,setTotalPage]=useState(0);
    const[token,setToken]=useState("");
    const Total_Per_Page=5;
    let cant=1;
    
    const getRepo=async ()=>{
        await axios.get(`${import.meta.env.VITE_API_URL}/repositories?owner=MarkCruz911`).then(function(response){
            setResponse(response.data.repositories); 
            cant=response.data.total;
            setCantRepo(cant);
        });
    }
    
    const getTotalPage=async ()=>{
        setTotalPage(Math.ceil(cant / Total_Per_Page));
        return totalPage;
    }

    useEffect(()=>{
        getRepo();
        setTimeout(()=>{
            getTotalPage();
        },1000)
        getToken(setToken);
    },[]);

    let res=responses;
    const loadRepo=()=>{
        res=res.slice((pageActual-1)*Total_Per_Page,pageActual*Total_Per_Page);
        console.log("Token Abajo");
        console.log(token);
        console.log("iiiiiiiiiiiiiiiiiiiiiiii")
    }

    loadRepo();

    return (
        <div className='bg-black grid grid-rows-3 grid-flow-col gap-1'>
            <div className='bg-black row-span-3'><Navbar isRepo='repo'/> </div>
            
            <div className='m-4 bg-white row-span-4 col-span-12  rounded-md '>
                <div className='grid grid-rows-6 grid-flow-col gap-4'>
                    <div className='grid grid-cols-2'>
                        <div><Title title='Repositories'/></div> 
                        <div><TotalUno total={cantRepo}/></div>
                    </div>

                    {
                        res.map(item=>(
                            <Link to={`/branches/${item.title}`} key={item.title}>
                            <div><ListRepositories title={item.title} description={item.description} date={item.date} status={item.status} /></div>
                            </Link>
                        ))
                    }
                </div>
                
                <div className='grid grid-cols-6 gap-4 m-8 '>
                    <div className='col-start-3 col-span-4'>
                        <Pagination setPageActual={setPageActual} total={totalPage} page={pageActual}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageRepositories;