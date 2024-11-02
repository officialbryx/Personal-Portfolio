import logo from "../assets/bryanTiamzonLogo.png";
import { Link } from 'react-scroll'

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img src={logo} alt="logo" style={{ height: '170px', width: '170px' }} />
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <h1>Home</h1>
                <h1>About</h1>
                <h1>Projects</h1>
                <button className="ml-8 px-4 py-2 text-2xl font-medium rounded-lg moving-gradient-bg transition-transform duration-300 hover:scale-105">
                    Contact Me
                </button>
            </div>
        </nav>
    );
}

export default Navbar;