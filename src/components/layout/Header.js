import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { RichText } from 'prismic-reactjs';
import { PrismicLink } from '../prismic-elements';

/**
 * Site header/nav component
 */
const Header = ({ menuDoc }) => {
  if (menuDoc) {
    return (
      <div className="container fixed mx-auto">
      <header className="relative lg:px-8 px-6 bg-gray-500 flex flex-wrap items-center lg:py-0 py-2">
      <div className="flex-1 flex justify-between items-center">
      <RouterLink to="./">    
      <div className="logo gray-500"><svg className="fill-current text-gray-100" width="32" height="36" viewBox="0 0 32 36" xmlns="http://www.w3.org/2000/svg"><path d="M15.922 35.798c-.946 0-1.852-.228-2.549-.638l-10.825-6.379c-1.428-.843-2.549-2.82-2.549-4.501v-12.762c0-1.681 1.12-3.663 2.549-4.501l10.825-6.379c.696-.41 1.602-.638 2.549-.638.946 0 1.852.228 2.549.638l10.825 6.379c1.428.843 2.549 2.82 2.549 4.501v12.762c0 1.681-1.12 3.663-2.549 4.501l-10.825 6.379c-.696.41-1.602.638-2.549.638zm0-33.474c-.545 0-1.058.118-1.406.323l-10.825 6.383c-.737.433-1.406 1.617-1.406 2.488v12.762c0 .866.67 2.05 1.406 2.488l10.825 6.379c.348.205.862.323 1.406.323.545 0 1.058-.118 1.406-.323l10.825-6.383c.737-.433 1.406-1.617 1.406-2.488v-12.757c0-.866-.67-2.05-1.406-2.488l-10.825-6.379c-.348-.21-.862-.328-1.406-.328zM26.024 13.104l-7.205 13.258-3.053-5.777-3.071 5.777-7.187-13.258h4.343l2.803 5.189 3.107-5.832 3.089 5.832 2.821-5.189h4.352z"></path></svg>
      </div>
        </RouterLink>
        </div>

        <label for="menu-toggle" className="pointer-cursor lg:hidden block"><svg className="fill-current text-gray-100" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></label>
        <input className="hidden" type="checkbox" id="menu-toggle" />
        <div className="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
        <nav>
        <ul className="lg:flex items-center justify-between text-base text-gray-100 pt-4 lg:pt-0">
            {menuDoc.data.menu_links.map(menuLink => (
              <MenuLink
                menuLink={menuLink}
                key={menuLink.link.id}
              />
            ))}
          </ul>
        </nav>
        </div>
      </header>
      </div>
    );
  }
  return null;
};

/**
 * Menu link component
 */
const MenuLink = ({ menuLink }) => {
  return (
    <li className="lg:p-4 py-03 px-0 block border-b-2 border-transparent transition duration-500 ease-in-out hover:border-gray-100">
      <PrismicLink link={menuLink.link}>
        {RichText.asText(menuLink.label)}
      </PrismicLink>
    </li>
  );
};

export default Header;
