import MainContainer from "../../components/Main.Container";
import {IPost} from "../../types/posts";

interface IPostComponent {
    post: IPost;
}

export default function Post ({post}: IPostComponent) {

    return (
        <MainContainer>
            <>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </>
        </MainContainer>
    )
}

export async function getServerSideProps({params}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const post = await response.json() as IPost;
    return {
        props: {post}, // will be passed to the page component as props
    }
}