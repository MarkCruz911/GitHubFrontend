import {Card, Typography,List,ListItem,ListItemPrefix} from "@material-tailwind/react";
import {Bars3Icon,ShareIcon,ArrowUpRightIcon,UserGroupIcon} from "@heroicons/react/24/solid";
import Profile from './profile';
import { Link, useParams } from "react-router-dom";






function Navbar() {
    const {id}=useParams();
    
  return (
    <div className='flex flex-row'>
         <Card className='h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl grid grid-row-3 bg-green-900 shadow-blue-gray-900/5 rounded-md ' >
            <Profile/>
            <div >
                <Typography className='text-white font-bold' variant='h5' color='blue-gray'>
                    DASHBOARD    
                </Typography>        
            </div>

            <List className='grid grid-row-3 mb-12'>
                
                    <div>
                        <Link to={`/branches/${id}`}>
                        <ListItem className='text-white grid grid-cols-2 font-semibold active:bg-gray-500 mb-5'>
                            <ListItemPrefix>
                                <ShareIcon className="h-5 w-5" />
                            </ListItemPrefix>
                                GRAFICAS DASHBOARD
                        </ListItem>
                        </Link>

                        <Link to={`/commits/${id}`}>
                        <ListItem className='text-white grid grid-cols-2 font-semibold active:bg-gray-500 mb-5'>
                            <ListItemPrefix>
                                <ArrowUpRightIcon className="h-5 w-5" />
                            </ListItemPrefix>
                                GESTION CRIMINALES
                        </ListItem>
                        </Link>
                        <Link to={`/contribuitors/${id}`}>
                        <ListItem className='text-white grid grid-cols-2 font-semibold active:bg-gray-500 mb-5'>
                            <ListItemPrefix>
                                <UserGroupIcon className="h-5 w-5" />
                            </ListItemPrefix>
                                GESTION DE CASOS
                        </ListItem>
                        </Link>

                        <Link to={`/repositories`}>
                        <ListItem className='text-white grid grid-cols-2 font-semibold active:bg-gray-500 mb-12 pt-8'>
                        <ListItemPrefix>
                            <Bars3Icon className='h-5 w-5'/>
                        </ListItemPrefix>
                                GESTION DE EVIDENCIAS
                        </ListItem>
                        </Link>
                    </div>
                
                
            </List>  
              
        </Card>
    </div>
  );
}

export default Navbar;