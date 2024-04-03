import { FaLocationDot, FaUser } from "react-icons/fa6"; // location,use icons
import { MdOutlineFavorite, MdSearch } from "react-icons/md"; // favorite, search icons

import { IoIosArrowForward } from "react-icons/io"; // arrow icon
import { GiHamburgerMenu } from "react-icons/gi"; // nav bar icon

import "./index.css";

const showTypes = [
  { name: "Live Shows" },
  { name: "Streams" },
  { name: "Movies" },
  { name: "Plays" },
  { name: "Events" },
  { name: "Sports" },
  { name: "Activitites" },
];

// Responsive Mobile Header

const Header = () => {
  const renderMobileHeader = () => {
    return (
      <div className="header-container-mobile">
        <div className="brand-user-container">
          <h3 className="brand-name">BookUsNow</h3>
          <div className="search-user-favourite-container">
            <button className="mobile-icon-button">
              <MdSearch />
            </button>
            <button className="mobile-icon-button">
              <MdOutlineFavorite />
            </button>

            <button className="mobile-icon-button">
              <FaUser />
            </button>
          </div>
        </div>
        <div className="location">
          <FaLocationDot size={12} />
          <p>Mumbai,India</p>
          <IoIosArrowForward />
        </div>
        <ul className="show-tab-container">
          {showTypes.map((item) => (
            <li key={showTypes.indexOf(item)} className="show-tab-item">
              <button className="show-button">{item.name}</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  // Responsive Desktop Header

  const renderDestopHeader = () => (
    <div className="header-container-desktop">
      <div className="brand-user-container-desktop">
        <h1 className="brand-name">BookUsNow</h1>
        <div className="category-search-container">
          <div className="categories">
            <GiHamburgerMenu />
            <p>Categories</p>
          </div>
          <div className="search-container">
            <input className="search-input" type="search" />
            <button className="search-button">
              <MdSearch />
            </button>
          </div>
        </div>
        <div className="sign-fav-container">
          <button className="favourite-container">
            <MdOutlineFavorite />
            <p>Favorites</p>
          </button>
          <button className="favourite-container">Sign In</button>
        </div>
      </div>

      <div className="location-showlist-container">
        <div className="location">
          <FaLocationDot size={12} />
          <p>Mumbai,India</p>
          <IoIosArrowForward />
        </div>
        <ul className="show-tab-container">
          {showTypes.map((item) => (
            <li key={showTypes.indexOf(item)} className="show-tab-item">
              <button className="show-button">{item.name}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div className="header">
      {renderMobileHeader()}
      {renderDestopHeader()}
    </div>
  );
};

export default Header;
