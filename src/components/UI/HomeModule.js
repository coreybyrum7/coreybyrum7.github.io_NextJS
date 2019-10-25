/* APIs */
import Link from 'next/link';

/* Sass */


const HomeModule = () => (
    <div className="page__section--centered">
        <div className="header--x-large">Hello there.</div>
        <div className="module--centered">
            <Link href="/portfolio">
                <a title="Portfolio">Portfolio</a>
            </Link>
            <Link href="/photos">
                <a title="Portfolio">Photos</a>
            </Link>
        </div>
    </div>
);

export default HomeModule;