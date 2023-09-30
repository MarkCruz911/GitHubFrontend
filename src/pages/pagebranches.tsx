import { useEffect, useState } from 'react';
import Navbar from '../sidebar/navbar';
import Title from '../component/title';
import Pagination from '../component/pagination';
import ListBranches from '../component/listBranches';
import TotalDos from '../component/totaldos';
import SubTitle from '../component/subtitle';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { getToken } from '../firebase/authProvider';

function PageBranches() {
    const[pageActual,setPageActual]=useState(1);
    const[branch,setBrach]=useState([{name:"",date:"",protected:false}]);
    const[totalBrach,setTotalBranch]=useState<number>(0);
    const[totalPage,setTotalPage]=useState(0);
    const[token,setToken]=useState("");
    const Total_Per_Page=5;
    let cant=1;
    const {id}=useParams();
    const getBranches=async ()=>{

        console.log(import.meta.env);
        await axios.get(`${import.meta.env.VITE_API_URL}/branches?owner=MarkCruz911&repository=${id}`).then(function(response){
        setBrach(response.data.branches);
        setTotalBranch(response.data.total);    
        cant=response.data.total;
        });
    };

    const getTotalPage=async ()=>{
        setTotalPage(Math.ceil(cant / Total_Per_Page));
        return totalPage;
    }

    useEffect(()=>{
        getBranches();
        setTimeout(()=>{
            getTotalPage();
        },1000);
        getToken(setToken);
    },[]);

    let res=branch;
    const loadRepo=()=>{
        res=res.slice((pageActual-1)*Total_Per_Page,pageActual*Total_Per_Page);
        console.log("branch token",token);
    }
    loadRepo();
    
    console.log(id);
    return (
        <div className='bg-black grid grid-rows-3 grid-flow-col gap-1'>
            <div className='bg-black row-span-3'><Navbar isRepo={'branches'}/> </div>
            
            <div className='m-4 bg-white row-span-4 col-span-12  rounded-md '>
                <div className='grid grid-rows-6 grid-flow-col gap-4'>
                    <div>
                        <Title title={String(id)}/>
                    </div>

                    <div className='grid grid-cols-2'>
                        <div>
                            <SubTitle title={'Branches'}/>
                        </div>
                        <div className='col-end-4'>
                            <TotalDos total={totalBrach}/>
                        </div>
                    </div>

                    {
                        res.map(item=>(
                            <div key={item.name}><ListBranches name={item.name} date={item.date}/></div>        
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

export default PageBranches;