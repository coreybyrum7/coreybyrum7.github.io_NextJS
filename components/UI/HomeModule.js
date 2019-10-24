import Link from 'next/link';

const homeModuleStyle = {
    background: '#fff',
    padding: '2rem'
}

const HomeModule = () => (
    <div style={homeModuleStyle}>
        <Link href="/portfolio">
            <a title="Portfolio">Portfolio</a>
        </Link>
        <Link href="/photos">
            <a title="Portfolio">Photos</a>
        </Link>
    </div>
);

export default HomeModule;