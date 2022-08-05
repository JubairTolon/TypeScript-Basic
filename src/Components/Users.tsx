import React, { useEffect, useState } from 'react';
import userModel from '../Types/Model';
import User from './User';

const Users = () => {
    const [users, setUsers] = useState<userModel[]>([]);

    const [team, setTeam] = useState<userModel[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])

    const handleAddUser = (user: userModel): void => {
        const newTeam = [...team, user];
        setTeam(newTeam)
    }
    return (
        <div>
            <h2>My Users: </h2>
            {/* <User name='Zubayer' age={27} addUser={handleAddUser}></User> */}
            <h2>My users:</h2>
            <h3>Team size: {team.length}</h3>
            {
                users.map(user => <User user={user} addUser={handleAddUser}></User>)
            }
        </div >
    );
};

export default Users;