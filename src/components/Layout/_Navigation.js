import Link from 'next/link';

const Navigation = () => (
    <div className="navigation">
        <Link href="/portfolio">
            <a title="Portfolio">Portfolio</a>
        </Link>
        <Link href="/photos">
            <a title="Photos">Photos</a>
        </Link>
        <Link href="/resume.pdf">
            <a title="Resume">Resume</a>
        </Link>
    </div>
);

export default Navigation;