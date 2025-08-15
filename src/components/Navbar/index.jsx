import { CiSearch } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="bg-primary1 shadow-md py-4 px-2">
      <div className="flex justify-between gap-2 items-center px-2">
        <button onClick={toggleSidebar} className="md:hidden cursor-pointer">
          <FiMenu className="text-white/50 text-2xl" />
        </button>
        <div className="flex bg-primary2 items-center text-grayText justify-center gap-2 py-1.5 px-1.5 md:py-2.5 md:px-2.5 min-w-[200px] max-w-xl rounded-md w-[100%] ">
          <CiSearch className="text-xl" />
          <input
            type="text"
            placeholder="Search for something"
            className="bg-transparent text-gray-300 border-none w-full outline-none"
          />
        </div>
        <div className="flex items-center justify-content gap-x-2">
          <div className="relative">
            <div className="absolute bg-red-500 rounded-full w-2 h-2 top-[3px] right-[5px] "></div>
            <IoMdNotificationsOutline className="text-gray-400 text-[25px] md:text-[30px] cursor-pointer" />
          </div>
          <div className="flex items-center gap-3">
            <SignedOut>
              <SignInButton>
                <button
                  className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-md bg-grayText hover:bg-secondary hover:text-primary2 cursor-pointer text-white font-semibold shadow 
             active:scale-95 transition-all duration-200 
             focus:outline-none focus:ring-2 focus:ring-indigo-300 
             text-sm sm:text-base whitespace-nowrap"
                >
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton
                appearance={{
                  elements: {
                    avatarBox:
                      "ring-2 ring-indigo-500 hover:ring-indigo-700 transition duration-200",
                    userButtonPopoverCard:
                      "rounded-xl shadow-lg border border-gray-200",
                  },
                }}
              />
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
