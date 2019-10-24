/* APIs */
import Link from 'next/link';
/* Components */
import Layout from '../components/Layout/Layout';
import HomeModule from '../components/UI/HomeModule';
/* Styles */
import '../styles/scss/styles.scss';

export default function Index() {
    return (
        <Layout>
            <HomeModule />
        </Layout>
    );
}