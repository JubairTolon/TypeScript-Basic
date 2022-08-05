import React, { ChangeEvent, FormEvent, useState } from 'react';


interface User {
    name?: string,
    job?: string
}

const Counter = () => {
    const [counter, setCounter] = useState<number>(0);
    const [user, setUser] = useState<User | null>(null);

    const handleIncrease = (): void => {
        setCounter(counter + 1);
    }
    const handleDecncrease = (): void => {
        setCounter(counter - 1);
    }

    const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const userData = {
            name: 'Adam',
            job: "Army"
        }
        setUser(userData);
    }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>): void => {

    }
    return (
        <div>
            <h2>This is counter portion</h2>
            <h3>{counter}</h3>
            <button onClick={handleDecncrease}>Deccrease(-)</button>
            <button onClick={handleIncrease}>Increase(+)</button>
        </div>
    );
};

export default Counter;