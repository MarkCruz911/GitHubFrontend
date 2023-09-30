import { List,Card, ListItem, ListItemSuffix,ListItemPrefix} from '@material-tailwind/react';
import {Bars3Icon} from "@heroicons/react/24/solid";
import Date from './date';

interface Props{
    title:string,
    description:string,
    date:string,
    status:string;
}

function ListRepository(props:Props) {
    return (
        <Card className='w-full'>
            <List>
                <ListItem ripple={false} className='py-1 pr-4 pl-4'>
                           <Bars3Icon className='h-5 w-5'/>
                           <div className='pr-5'>{props.title}</div>
                    <ListItemSuffix color="blue-gray" className='pr-5'>
                           {props.description}
                    </ListItemSuffix>
                    <ListItemSuffix color="blue-gray" className='pr-5'>
                           <Date date={props.date}/>
                    </ListItemSuffix>
                    <ListItemPrefix className=''>
                          {props.status}
                    </ListItemPrefix>
                </ListItem>
            </List>
        </Card>
    );
}

export default ListRepository;