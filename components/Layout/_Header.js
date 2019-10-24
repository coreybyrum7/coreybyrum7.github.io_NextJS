import Link from 'next/link';

const headerStyle = {
    background: '#000',
    width: '100%',
    padding: 20
}

const linkStyle = {
    marginRight: 15
}

const Header = () => (
    <div style={headerStyle}>
        <Link href="/portfolio">
            <a style={linkStyle} title="Portfolio">Portfolio</a>
        </Link>
        <Link href="/photos">
            <a style={linkStyle}  title="Photos">Photos</a>
        </Link>
        <Link href="/resume.pdf">
            <a style={linkStyle} title="Resume">Resume</a>
        </Link>
    </div>
);

export default Header;