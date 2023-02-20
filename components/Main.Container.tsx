import Head from "next/head";
import Link from "next/link";

interface IMineContainer {
    children: JSX.Element;
    pageTitle?: string;
}

const MainContainer = ({children, pageTitle}: IMineContainer) => {
    return (
        <>
            <Head>
                <title>{pageTitle}</title>
            </Head>
            <nav>
                <Link href={'/'}>
                    Home
                </Link>
                <Link href={'/users'}>
                    Users
                </Link>
            </nav>
            <div>
                {children}
            </div>
        </>
    );
};

export default MainContainer;