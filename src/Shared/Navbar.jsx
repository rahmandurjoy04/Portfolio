import React, { useEffect, useState } from 'react';
import { FaDownload } from 'react-icons/fa';


const Navbar = () => {

    const [activeHash, setActiveHash] = useState(window.location.hash || '');

  useEffect(() => {
    const onHashChange = () => {
      setActiveHash(window.location.hash);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

    const links = <>
      <a href="/#home" className={activeHash === '#home' || activeHash === '' ? 'active' : ''}>Home</a>
      <a href="/#about" className={activeHash === '#about' ? 'active' : ''}>About</a>
      <a href="/#skills" className={activeHash === '#skills' ? 'active' : ''}>Skills</a>
      <a href="/#projects" className={activeHash === '#projects' ? 'active' : ''}>Projects</a>
      <a href="/#contact" className={activeHash === '#contact' ? 'active' : ''}>Contact</a>
    </>


    return (
        <div className="navbar min-w-sm sticky top-0 z-10 bg-secondary shadow-sm">
            <div className='w-11/12 mx-auto flex justify-between items-center'>
                <div className="flex">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu flex menu-sm dropdown-content bg-base-200 text-base-content rounded-box z-20 mt-3 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    {/* Left Div */}
                    <div className='flex space-x-4 justify-center items-center'>
                        <h1 className='text-3xl font-bold'><span className='text-primary text-4xl'>N</span>R</h1>
                    </div>
                </div>
                {/* Middle Div */}
                <div className=" hidden md:flex">
                    <ul className="menu menu-horizontal px-1 flex justify-center items-center gap-4">
                        {
                            links
                        }
                    </ul>
                </div >
                {/* Last Div */}
                <div className=" flex justify-end space-x-3">

                    <button className='btn text-black btn-primary'><FaDownload></FaDownload> Resume</button>

                </div>
            </div>
        </div>
    );
}
export default Navbar;