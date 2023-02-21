import Head from "next/head";
import Link from "next/link";
import styles from "../stiles/MainContainer.module.scss";

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
            <nav className={styles.navigate}>
                <Link href={'/'} className={styles.navigate__link}>
                    Home
                </Link>
                <Link href={'/users'} className={styles.navigate__link}>
                    Users
                </Link>
            </nav>
            <div className={styles.container}>
                {children}
            </div>
        </>
    );
};

export default MainContainer;