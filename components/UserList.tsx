import React from 'react';
import Link from "next/link";
import {IUser} from "../types/users";

import styles from "../stiles/UserList.module.scss"

interface IUserListComponent {
    users: IUser[]
}

const UserList = ({users}: IUserListComponent) => {
    return (
        <ul className={styles.user_list}>
            {users.map(user =>
                <li key={user.id}>
                    <Link href={`/users/${user.id}`} className={styles.user_list__item}>
                        {user.username}
                    </Link>
                </li>
            )}
        </ul>
    );
};

export default UserList;