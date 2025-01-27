import React from 'react';

import Card from '../UI/Card';
import classes from './UserList.module.css';

const UserList = (props) =>{
    return (
        <Card className={classes.users}>
            <ul>
                {props.user1.map( rr => (
                    <li>
                        {rr.name} ({rr.age} Years old)
                    </li>
                ))}
            </ul>
        </Card>        
    );
};

export default UserList;