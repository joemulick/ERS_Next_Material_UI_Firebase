import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
    <div>
        <Link href="/">
          <a style={linkStyle}>Footer Home</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>Footer About</a>
        </Link>
    </div>
)

export default Header