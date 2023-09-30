import { List,Card, ListItem, ListItemSuffix} from '@material-tailwind/react';
import Date from './date';

interface Props{
    name:string,
    description:string,
    user:string,
    date:string
}

function ListCommits(props:Props) {
    return (
        <Card className='w-full'>
            <List>
                <ListItem ripple={false} className='py-1 pr-4 pl-4'>
                    <div>
                        <div className='pr-5 mb-8'>{props.name}</div>
                        <div className='pr-5'>{props.user}</div>
                    </div>
                    <ListItemSuffix>
                        {props.description}
                    </ListItemSuffix>
                    <ListItemSuffix color="blue-gray" className='pr-5'>
                    <Date date={props.date}/>
                    </ListItemSuffix>
                </ListItem>
            </List>
        </Card>
    );
}

export default ListCommits;