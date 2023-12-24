import {
  FcAddColumn,
  FcAddressBook,
  FcBusinessman,
  FcList,
  FcViewDetails,
} from "react-icons/fc";
export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>
                <FcAddressBook size={30} />
                All Book
              </a>
            </li>
            <li>
              <a>
                <FcList size={30} />
                Book List
              </a>
            </li>
            <li>
              <a>
                <FcViewDetails size={30} />
                Book Details
              </a>
            </li>
            <li>
              <a>
                <FcAddColumn size={30} />
                Add Book
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        {/* <img src="/public/Rr.png" sizes="30" alt="" /> */}
        <div className="hidden sm:block w-12 m-2 rounded-full ">
          <img alt="Tailwind CSS Navbar component" src="/public/Rr.png" />
        </div>
        <a className=" text-xl">Internet Library</a>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-auto rounded-full">
              <FcBusinessman size={50} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
