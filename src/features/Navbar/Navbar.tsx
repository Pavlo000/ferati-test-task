import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { NavList } from '../NavList';
import './Navbar.scss';

type Props = {
  handlerClick: () => void;
  hasMenu: boolean;
}

export const Navbar: React.FC<Props> = ({ 
  handlerClick, 
  hasMenu, 
}) => {
  const largeScreen = useAppSelector(state => state.app.hasLargeScreen);
  return (
    <nav className="Navbar">
      <NavLink to='/'>
        <img src="./icons/logo.svg" className="Navbar__logo" alt="logo" />
      </NavLink>

      {hasMenu ? ( 
        <button className="Navbar__icon-cross" onClick={handlerClick}>
          <img src="./icons/cross.svg" alt="cross" />
        </button>
      ) : (
        <button className="Navbar__icon-menu" onClick={handlerClick}>
          <img src="./icons/menu.svg" alt="menu" />
        </button>
      )}

      {largeScreen && <NavList />}
    </nav>
  );
};
