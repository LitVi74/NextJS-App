import React, {useCallback, useState} from 'react';
import {IPost} from "../types/posts";

import styles from "../stiles/PostList.module.scss"
import PopUp from "./PopUp";

interface IPostListComponent {
    posts: IPost[]
}

const PostList = ({posts}: IPostListComponent) => {
    const [chosenPost, setChosenPost] = useState<IPost>(undefined);
    const [isOpenPopUp, setPopUpOpened] = useState(false);


    const handlePostItemClick = useCallback((post) => {
        setChosenPost(post);
        setPopUpOpened(true);
    }, [])

    return (
        <>
            <ul className={styles.post_list}>
                {posts.map(post =>
                <li>
                    <button
                        className={styles.post_list__item}
                        onClick={() => handlePostItemClick(post)}
                    >
                        {post.title}
                    </button>
                </li>
                )}
            </ul>
            <PopUp
                isOpen={isOpenPopUp}
                onClose={() => setPopUpOpened(false)}
            >
                <>
                    <h1>{chosenPost?.title}</h1>
                    <p>{chosenPost?.body}</p>
                </>
            </PopUp>
        </>
    );
};

export default PostList;