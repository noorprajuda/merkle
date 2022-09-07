function Navbar() {
  return (
    <>
      <nav className="bg-blue-700 mb-11 px-2 sm:px-4 py-2.5  fixed w-full z-20 top-0 left-0 border-b border-gray-200 ">
        <div className="bg-blue-700 container flex flex-wrap justify-between items-center mx-auto">
          <a href="#" className="bg-blue-700 text-white flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap ">
              Merkle
            </span>
          </a>
          <div className="flex md:order-2">
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
