import Link from 'next/link';
import { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx"
import NavbarItem from './NavbarItem';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <Link href="/">
                        <>My Website</>
                    </Link>
                </div>
                <div className="block lg:hidden">
                    <span
                        className="cursor-pointer text-gray-200 hover:text-gray-400 transition-all"
                        onClick={toggleMenu}>
                        <RxHamburgerMenu size={30} />
                    </span>
                </div>
                <div className={`w-full block flex-grow lg:flex  lg:items-center lg:w-auto ${isOpen ? 'hidden' : 'block'}`}>
                    <div className="text-sm w-[90%] lg:flex justify-center">
                        <NavbarItem />
                    </div>
                </div>
            </nav>

        </>
    );
};

export default Navbar;