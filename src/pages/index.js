/* APIs */
import Head from 'next/head'

/* Components */
import Layout from '../components/Layout/Layout';
import HomeModule from '../components/UI/HomeModule';

/* Styles */
import '../styles/scss/styles.scss';

export default function Index() {
    return (
        <div>      
            <Head>
                <title>Corey Byrum</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Layout>
                <HomeModule />
            </Layout>
        </div>
    );
}