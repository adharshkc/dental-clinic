import Logo from "../../assets/img/Pasted image (2).png"
// import dotIcon from "../../assets/icons/circle-solid.svg"

const Navbar = () => {
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Promotions', path: '/promotions' },
    { label: 'Blogs', path: '/blogs' },
    { label: 'Contact Us', path: '/contact' },
  ];
  return (
    <nav className="bg-white py-4 px-2 shadow-md">
      <div className=" mx-10 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="logo" width={200} />
        </div>
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.path}
              // href={item.path}
              href="#"
              className="font-extrabold text-lg hover:text-orange-500 transition-colors duration-200 flex"
            >
             {item.label}
            </a>
          ))}
        </div>
        <button className="bg-orange-500 text-white font-extrabold text-lg px-6 py-4 rounded-md hover:bg-orange-600 transition-colors duration-200">
          Appointment
        </button>
        <button className="md:hidden text-gray-600">
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  )
}

export default Navbar