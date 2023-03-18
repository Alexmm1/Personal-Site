import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
          <header>
        <span class="name">Alexander Mayeux</span>
            <nav className="links" >
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/portfolio">Portfolio</Link>
            </nav>
            </header>
            <Outlet />
        </>
    )
};

export default Navbar;