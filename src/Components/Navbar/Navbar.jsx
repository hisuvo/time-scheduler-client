import { Link } from "react-router";

const Navbar = () => {
  return (
    <header className="px-4 py-2 border dark:bg-gray-100 dark:text-gray-800">
      <div className="container flex justify-between h-16 mx-auto">
        <button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">
          Add Task
        </button>

        <div className="items-center flex-shrink-0 hidden lg:flex">
          <Link to={"signin"}>
            <button className="self-center px-8 py-3 rounded">Sign in</button>
          </Link>
          <Link to={"signup"}>
            <button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">
              Sign up
            </button>
          </Link>
        </div>

        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-gray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
