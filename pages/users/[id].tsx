import MainContainer from "../../components/Main.Container";
import {IUser} from "../../types/users";
import {IPost} from "../../types/posts";
import Link from "next/link";

interface IUserComponent {
    user: IUser;
    userPosts: IPost[]
}

export default function User ({user, userPosts}: IUserComponent) {
    return (
        <MainContainer>
            <>
                <h1>{user.username}</h1>
                <p>User full name: {user.name}</p>
                <ul>
                    {userPosts.map(post =>
                    <li>
                        <Link href={`/posts/${post.id}`}>
                            {post.title}
                        </Link>
                    </li>
                    )}
                </ul>
            </>
        </MainContainer>
    )
}

export async function getServerSideProps({params}) {
    const response = await Promise.all([
        fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${params.id}`)
    ])
    const user = await response[0].json() as IUser;
    const userPosts = await response[1].json() as IPost[];
    return {
        props: {user, userPosts}, // will be passed to the page component as props
    }
}
