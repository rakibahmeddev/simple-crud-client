import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = <>
    <NavLink to='/' className={({ isActive }) => (isActive ? 'text-white text-base' : 'text-white')}>Home</NavLink>

    <NavLink to='/users' className={({ isActive }) => (isActive ? 'text-white text-base' : 'text-white')}>Users</NavLink>
    <NavLink to='/contact' className={({ isActive }) => (isActive ? 'text-white text-base' : 'text-white')}>Contact</NavLink>
  </>
  return (
    <nav className="h-[70px] relative w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-30 bg-gradient-to-r from-indigo-700 to-violet-500 transition-all">
      {/* Logo */}
      <Link to='/' className='text-white text-4xl font-bold'>CRUD</Link>

      {/* Desktop Menu */}
      <ul className="text-white md:flex hidden items-center gap-10">
      {links}
      </ul>

     

      {/* Mobile Menu Button */}
      <button
        aria-label="menu-btn"
        type="button"
        className="menu-btn inline-block md:hidden active:scale-90 transition"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="#fff"
        >
          <path d="M3 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2z" />
        </svg>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu absolute top-[70px] left-0 w-full bg-gradient-to-r from-indigo-700 to-violet-500 p-6 md:hidden">
          <ul className="flex flex-col space-y-4 text-white text-lg">
           {links}
          </ul>
      
        </div>
      )}
    </nav>
  );
};

export default NavBar;
