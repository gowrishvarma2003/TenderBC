// Navbar.js

const Navbar = () => {
    return (
      <nav className="bg-gray-800 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="text-white font-bold text-lg">
              <a href="/">TenderBC</a>
            </div>
            <ul className="flex space-x-8 ml-0 mr-20">
              <li>
                <a href="/" className="text-white hover:text-gray-300 mx-10">Home</a>
              </li>
              <li>
                <a href="/mytenders" className="text-white hover:text-gray-300 mx-10">MyTenders</a>
              </li>
              <li>
                <a href="/mybids" className="text-white hover:text-gray-300 mx-10">Mybids</a>
              </li>
              <li>
                <a href="/" className="text-white hover:text-gray-300 mx-10">Profile</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  