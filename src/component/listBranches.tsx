import { List,Card, ListItem, ListItemSuffix} from '@material-tailwind/react';
import Date from './date';
interface Props{
    name:string,
    date:string
}

function ListBranches(props:Props) {
    return (
        <Card className='w-full'>
            <List>
                <ListItem ripple={false} className='py-1 pr-4 pl-4'>
                    <div className='pr-5'>{props.name}</div>
                    <ListItemSuffix color="blue-gray" className='pr-5'>
                    <Date date={props.date}/>
                    </ListItemSuffix>
                </ListItem>
            </List>
        </Card>
    );
}

export default ListBranches;