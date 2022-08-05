import React, { FC } from 'react';
import userModel from '../Types/Model';


// interface Props {
//     name: string,
//     age: number,
//     addUser: () => void
// }

interface Props {
    user: userModel,
    addUser: (user: userModel) => void

}
const User: FC<Props> = ({ user, addUser }) => {
    return (
        <div>
            <h2>Hello There, I'm {user?.name}</h2>
            <h3>I'm {user?.email} years old</h3>
            <button onClick={() => addUser(user)}>Add me</button>
        </div>
    );
};

export default User;