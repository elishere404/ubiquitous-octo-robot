import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-500 w-full h-[50px] flex items-center justify-center">
      <nav className="flex space-x-4">
        <Link to="/" className="text-white hover:text-gray-300">Home</Link>
        <Link to="/projects" className="text-white hover:text-gray-300">Projects</Link>
        <Link to="/hobby" className="text-white hover:text-gray-300">Hobby</Link>
      </nav>
    </header>
  );
};

export default Header;
