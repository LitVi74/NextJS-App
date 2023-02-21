import React from 'react';
import MainContainer from "../components/Main.Container";
import {IUser} from "../types/users";
import Link from "next/link";
import UserList from "../components/UserList";

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
                <UserList users={users} />
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