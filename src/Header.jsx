import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="absolute left-0 right-0 top-0 z-10 flex items-center justify-between bg-white px-4 py-5 drop-shadow-md lg:px-10">
      <Link
        className="text-lg font-bold tracking-wide sm:text-xl"
        to="/region/all"
      >
        Where in the world?
      </Link>
      <button className="flex items-center gap-2 border-b border-b-transparent px-3 py-2 text-sm transition-all duration-300 hover:border-b hover:border-black">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
            />
          </svg>
        </span>
        Dark Mode
      </button>
    </header>
  );
}

export default Header;
