import React from 'react';
import {IPost} from "../types/posts";
import Link from "next/link";

import styles from "../stiles/PostList.module.scss"

interface IPostListComponent {
    posts: IPost[]
}

const PostList = ({posts}: IPostListComponent) => {
    return (
        <ul className={styles.post_list}>
            {posts.map(post =>
            <li>
                <Link href={`/posts/${post.id}`} className={styles.post_list__item}>
                    {post.title}
                </Link>
            </li>
            )}
        </ul>
    );
};

export default PostList;