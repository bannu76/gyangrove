import { FaLocationDot, FaUser } from "react-icons/fa6";
import { MdOutlineFavorite, MdSearch } from "react-icons/md";

import { IoIosArrowForward } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

import "./index.css";

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
      </div>
    );
  };

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
          <li className="show-tab-item">
            <button className="show-button">Live Shows</button>
          </li>
          <li className="show-tab-item">
            <button className="show-button">Streams</button>
          </li>
          <li className="show-tab-item">
            <button className="show-button">Movies</button>
          </li>
          <li className="show-tab-item">
            <button className="show-button">Plays</button>
          </li>
          <li className="show-tab-item">
            <button className="show-button">Events</button>
          </li>
          <li className="show-tab-item">
            <button className="show-button">Sports</button>
          </li>
          <li className="show-tab-item">
            <button className="show-button">Activities</button>
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <div>
      {renderMobileHeader()}
      {renderDestopHeader()}
    </div>
  );
};

export default Header;
