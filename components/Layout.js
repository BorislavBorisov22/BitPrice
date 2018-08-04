import Navbar from './Navbar';
import Head from 'next/head';

const Layout = ({ children }) => {
    return (
        <div>
            <Head>
                <title>Bit Price</title>
                <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css" />
            </Head>
            <Navbar />

            <div className="container">
                {children}
            </div>
        </div>
    )
};

export default Layout;