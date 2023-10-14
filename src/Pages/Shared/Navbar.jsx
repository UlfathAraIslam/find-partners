// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { BiMenu, BiCaretDown } from 'react-icons/bi';

// const Navbar = () => {
//     const [showMenu, setShowMenu] = useState(false);

//     const toggleMenu = () => {
//         setShowMenu(!showMenu);
//     };

//     return (
//         <nav className="bg-gray-800 p-4">
//             <div className="container mx-auto flex items-center sm:justify-between flex-wrap">
//                 <div className="flex items-center flex-shrink-0 text-white mr-6">
//                     <span className="font-semibold text-xl tracking-tight">Logo</span>
//                 </div>
//                 <div className="block lg:hidden" onClick={toggleMenu}>
//                     <button className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
//                         <BiMenu size={20} />
//                     </button>
//                 </div>
//                 <div className={`w-full ${showMenu ? 'block' : 'hidden'} lg:flex lg:items-center lg:w-auto`}>
//                     <div className="text-sm lg:flex-grow">
//                         <Link
//                             to="/solutions"
//                             className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4"
//                         >
//                             Solutions
//                         </Link>
//                         <Link
//                             to="/features"
//                             className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4"
//                         >
//                             Features
//                         </Link>
//                         <Link
//                             to="/blogs"
//                             className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4"
//                         >
//                             Blogs
//                         </Link>
//                         <Link
//                             to="/about"
//                             className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4"
//                         >
//                             About
//                         </Link>
//                     </div>
//                     <div>
//                         <Link
//                             to="/login"
//                             className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white mt-4 lg:mt-0"
//                         >
//                             Login
//                         </Link>
//                     </div>
//                     <div>
//                         <Link
//                             to="/register"
//                             className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white mt-4 lg:mt-0"
//                         >
//                             Register
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiMenu, BiCaretDown } from 'react-icons/bi';
import Logo from '../../assets/logo.png';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <nav className="container z-20 fixed mx-auto">
            <div className="container text-black mx-auto flex items-center justify-between flex-wrap">
                <div className="flex items-center flex-shrink-0 mr-6">
                    <img src={Logo} alt="" />
                </div>
                <div onClick={toggleMenu} className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded">
                        <BiMenu size={20} />
                    </button>
                </div>
                <div className={`w-full ${showMenu ? 'block' : 'hidden'} flex-grow lg:flex lg:items-center lg:w-auto gap-x-4`}>
                    <div className="text-sm lg:flex-grow">
                        <Link
                            to="/"
                            className="block mt-4 lg:inline-block lg:mt-0 mr-6"
                        >
                            Solutions
                            <BiCaretDown size={16} className="inline-block ml-1 text-[#0076CE]" />
                        </Link>
                        <Link
                            to="/"
                            className="block mt-4 lg:inline-block lg:mt-0 mr-6"
                        >
                            Features
                            <BiCaretDown size={16} className="inline-block ml-1 text-[#0076CE]" />
                        </Link>
                        <Link
                            to="/"
                            className="block mt-4 lg:inline-block lg:mt-0 mr-6 "
                        >
                            Blogs
                        </Link>
                        <Link
                            to="/"
                            className="block mt-4 lg:inline-block lg:mt-0 mr-6"
                        >
                            About
                            <BiCaretDown size={16} className="inline-block ml-1 text-[#0076CE]" />
                        </Link>
                    </div>
                    <div className="mr-2">
                        <Link
                            to="/login"
                            className="inline-block text-sm px-4 py-2 border border-[#0076CE] rounded text-[#0076CE] mt-4 lg:mt-0 leading-none"
                        >
                            Login
                        </Link>
                    </div>
                    <div>
                        <Link
                            to="/register"
                            className="inline-block text-sm px-4 py-2 leading-none border rounded mt-4 text-white bg-[#0076CE] lg:mt-0"
                        >
                            Register
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
