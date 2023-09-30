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

function PageContribuitors() {
    const[pageActual,setPageActual]=useState(1);
    const[contribuitor,setContribuitor]=useState([{login:"",avatar_url:"",html_url:""}]);
    const[totalContribuitor,setTotalContribuitor]=useState<number>(0);
    const[totalPage,setTotalPage]=useState(0);
    const[token,setToken]=useState("");  
    const Total_Per_Page=5;
    let cant=1;
    const{id}=useParams();

    const getCommits=async ()=>{
        await axios.get(`${import.meta.env.VITE_API_URL}/contribuitors?owner=MarkCruz911&repository=${id}`).then(function(response){
        setContribuitor(response.data.colaborators);
        console.log(response.data.colaborators)
        setTotalContribuitor(response.data.total); 
         
        cant=response.data.total;
        });
    };

    const getTotalPage=async ()=>{
        setTotalPage(Math.ceil(cant / Total_Per_Page));
        return totalPage;
    };

    useEffect(()=>{
        getCommits();
        setTimeout(()=>{
            getTotalPage();
        },1000);
        getToken(setToken);
    },[]);

    let res=contribuitor;
    const loadRepo=()=>{
        res=res.slice((pageActual-1)*Total_Per_Page,pageActual*Total_Per_Page);
        console.log("token contribuitors",token);
    }

    loadRepo();
    
    return (
        <div className='bg-black grid grid-rows-3 grid-flow-col gap-1'>
            <div className='bg-black row-span-3'><Navbar isRepo={'contribuitors'}/> </div>
            
            <div className='m-4 bg-white row-span-4 col-span-12  rounded-md '>
                <div className='grid grid-rows-2 grid-flow-col gap-4'>
                    <div>
                        <Title title={String(id)}/>
                    </div>
                    <div className='grid grid-cols-2'>
                        <div>
                            <SubTitle title='Contribuitors'/>
                        </div>
                        <div className='col-start-2'>
                            <TotalUno total={totalContribuitor}/>
                        </div>
                    </div>
                </div>

                    <div className='grid grid-cols-3'>
                        {res.map((item,index)=>(
                            <div key={index}><Contribuitor login={item.login} avatar_url={item.avatar_url} html_url={item.html_url}/></div>
                        ))
                    } 
                    </div>
                    
                <div className='grid grid-cols-6 gap-4 m-8 '>
                    <div className='col-start-3 col-span-4'>
                        <Pagination total={totalPage} page={pageActual} setPageActual={setPageActual}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageContribuitors;