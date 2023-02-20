import MainContainer from "../components/Main.Container";
import {IPost} from "../types/posts";

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
                        {post.title}
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