import MainContainer from "../components/Main.Container";
import {IPost} from "../types/posts";
import Link from "next/link";

interface IIndex {
    posts: IPost[];
}

const Index = ({posts}: IIndex) => {
    return (
        <MainContainer>
            <>
               <h1>Posts Page</h1>
                <ul>
                    {posts.map(post =>
                    <li key={post.id}>
                        <Link href={`/posts/${post.id}`}>
                            {post.title}
                        </Link>
                    </li>
                    )}
                </ul>
            </>
        </MainContainer>
    );
};

export default Index;

export async function getStaticProps(context) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json() as IPost[];
    return {
        props: {posts}, // will be passed to the page component as props
    }
}