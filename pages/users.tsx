import React from 'react';
import MainContainer from "../components/Main.Container";
import {IUser} from "../types/users";
import Link from "next/link";

interface IUsersComponent {
    users: IUser[];
}

const Users = ({users}: IUsersComponent) => {
    return (
        <MainContainer>
            <>
                <h1>
                    Users Page
                </h1>
                <ul>
                    {users.map(user =>
                    <li key={user.id}>
                        <Link href={`/users/${user.id}`}>
                            {user.username}
                        </Link>
                    </li>
                    )}
                </ul>
            </>
        </MainContainer>
    );
};

export default Users;

export async function getStaticProps(context) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json() as IUser[];
    return {
        props: {users}, // will be passed to the page component as props
    }
}