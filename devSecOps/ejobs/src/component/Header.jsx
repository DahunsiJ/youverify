// --------Version 2-------
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/ejobs-logo.svg";
import { CgProfile } from "react-icons/cg";
import { BiDownArrow, BiMenu } from "react-icons/bi";
import { useState } from "react";
import { signoutUser } from "../redux/users/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

function Header({ lightMode }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedInUser = useSelector((state) => state.user);
  const [showNav, setShowNav] = useState(false);

  const handleNavMenu = () => {
    setShowNav(!showNav);
  };

  const handleSignout = () => {
    dispatch(signoutUser());
    navigate('/signin');
  };

  const handleBenefit = () => {
    if (loggedInUser.currentUser?.userType === 'jobSeeker') {
      navigate('/benefit');
    } else if (loggedInUser.currentUser?.userType === 'jobEmployer') {
      toast.info('Not eligible');
    } else {
      toast.info('Signin to continue')
      navigate('/signin');
    }
  };

  const setNavToFalse = () => {
    if (showNav) setShowNav(false);
  };

  const menuItems = [
    { label: "Home", link: "/" },
    { label: "Contacts", link: "/aboutus" },
    { label: "Jobs", link: "/jobs" },
    { label: "Blacklist", link: "/blacklist" },
    { label: "Company", link: "/privacy" },
    { label: "Blogs", link: "/blog" },
    { label: "Benefits", onClick: handleBenefit },
    { label: "eJA", link: "/eja" },
  ];

  return (
    <header className={`relative transition-all  duration-500 p-5 w-full z-50 font-poppins ${lightMode ? 'text-slate-100' : 'text-slate-900'}`}>
      <div className="flex items-center justify-between gap-20">
        <Link to="/">
          <img className="sm:w-52 w-32 h-8 object-contain" src={Logo} alt="eJobs Logo" />
        </Link>

        {/* Mobile menu button */}
        <BiMenu
          onClick={handleNavMenu}
          className="sm:hidden cursor-pointer w-8 h-8"
        />

        {/* Desktop navigation */}
        <nav className="hidden sm:flex sm:gap-5 gap-2 items-center space-x-4">
          {menuItems.map((item) => (
            <li key={item.label} className="font-semibold hover:bg-orange-400 px-4 py-2 hover:text-white list-none text-sm uppercase">
              {item.link ? (
                <Link to={item.link}>{item.label}</Link>
              ) : (
                <button onClick={item.onClick}>{item.label}</button>
              )}
            </li>
          ))}
        </nav>

        {/* User profile or sign-in link */}
        
        {loggedInUser.currentUser ? (
          <div className="transition-all duration-500 hidden sm:block relative">
            <details className="flex flex-col gap-4 items-start justify-center">
              <summary className="list-none flex items-center gap-2 cursor-pointer">
                <CgProfile className="w-6 h-6" />
                <BiDownArrow className="text-current" />
              </summary>
              <div className="absolute bg-white border-1.5 border-gray-400 text-gray-900 px-4 rounded-sm py-2 top-10 right-0 w-40">
                <Link
                  to={loggedInUser.currentUser.userType === 'jobSeeker' 
                    ? `/profile/${loggedInUser.currentUser._id}` 
                    : `/employer/${loggedInUser.currentUser._id}`}
                  className="block uppercase my-2 font-semibold hover:text-gray-400"
                >
                  Profile
                </Link>
                {loggedInUser.currentUser.userType === 'admin' && (
                  <Link to="/dashboard" className="block uppercase my-2 font-semibold hover:text-gray-400">
                    Dashboard
                  </Link>
                )}
                <button 
                  onClick={handleSignout}
                  className="block uppercase my-2 font-semibold hover:text-gray-400 w-full text-left"
                >
                  Logout
                </button>
                <Link 
                  to={`/${loggedInUser.currentUser._id}/notification`}
                  className="block uppercase my-2 font-semibold hover:text-gray-400"
                >
                  Notifications
                </Link>
              </div>
            </details>
          </div>
        ) : (
          <Link to="/signin" className="hidden sm:block font-semibold uppercase">
            Sign in
          </Link>
        )}
      </div>

      {/* Mobile navigation */}
      {showNav && (
        <nav className="sm:hidden fixed inset-0 bg-gray-800 text-white z-50 flex flex-col items-start justify-start p-5 space-y-4">
          <button onClick={handleNavMenu} className="self-end text-2xl">&times;</button>
          {menuItems.map((item) => (
            <li key={item.label} className="font-semibold list-none text-sm uppercase">
              {item.link ? (
                <Link to={item.link} onClick={() => setShowNav(false)}>{item.label}</Link>
              ) : (
                <button onClick={() => { item.onClick(); setShowNav(false); }}>{item.label}</button>
              )}
            </li>
          ))}
          {loggedInUser.currentUser && (
            <div>
              <Link
                to={loggedInUser.currentUser.userType === 'jobSeeker' 
                  ? `/profile/${loggedInUser.currentUser._id}` 
                  : `/employer/${loggedInUser.currentUser._id}`}
                className="font-semibold uppercase"
                onClick={() => setShowNav(false)}
              >
                Profile
              </Link>
              <Link 
                to={`/${loggedInUser.currentUser._id}/notification`}
                className="font-semibold uppercase"
                onClick={() => setShowNav(false)}
              >
                Notifications
              </Link>
              <button 
                onClick={() => { handleSignout(); setShowNav(false); }}
                className="font-semibold uppercase"
              >
                Logout
              </button>
            </div>
          )}
          {!loggedInUser.currentUser && (
            <Link to="/signin" className="font-semibold uppercase" onClick={() => setShowNav(false)}>
              Sign in
            </Link>
          )}
        </nav>
      )}
    </header>
  );
}

export default Header;