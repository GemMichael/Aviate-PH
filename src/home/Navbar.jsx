import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    }

    return (
        <nav className="fixed top-0 z-50 w-full bg-white/30 backdrop-blue-md  px-[24px] xl:px-0">
            <div className="flex flex-wrap items-center justify-between max-w-[1160px] w-full py-5 mx-auto">
                <div className="lg:text-[28px] text-2xl font-black text-blue-500">Aviate PH ✈</div>
                <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center justify-center w-10 h-10 p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded={isMenuOpen ? 'true' : 'false'} onClick={toggleMenu}>
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className={`items-center justify-between w-full gap-16 md:flex lg:w-auto lg:order-1 transition-all duration-300 ease-in-out ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-sticky">
                    <ul className="flex flex-col items-center w-[90%] justify-center gap-4 md:gap-[30px] p-4 mt-4 font-medium absolute md:left-1/2 md:-translate-x-1/2  z-20 bg-[#141414]/[20%]  border backdrop-blur-2xl md:backdrop-blur-0 border-[#222222] md:bg-transparent rounded-lg md:p-0 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                        <li className="text-center">
                            <a href="/" className="block text-center text-black rounded md:bg-transparent" onClick={closeMenu}>Home</a>
                        </li>
                        <li className="text-center">
                        <Link to="/landinglist" className="block text-center text-black rounded md:bg-transparent"  onClick={closeMenu}>All Flying School in the PH</Link>
                        </li>
                        <li className="text-center">
                            <a href="#portfolio" className="block text-center text-black rounded md:bg-transparent"  onClick={closeMenu}>Aviation News</a>
                        </li>
                        <li className="text-center">
                        <Link to="/landingdiscovery" className="block text-center text-black rounded md:bg-transparent"  onClick={closeMenu}>Discovery Flights/ Simulator</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;