import className from 'classnames';
import { Lang } from '../Lang';
import { NavList } from '../NavList';
import './Menu.scss';

type Props = {
  hasOpen: boolean;
}

export const Menu: React.FC<Props> = ({ hasOpen }) => {

  return (
    <menu className={className(
      'Menu',
      'Navbar__menu',
      { 'Navbar__menu--open': hasOpen }
    )}>
      <NavList />
      <div className="Menu__lang">
        <Lang />
      </div>
    </menu>
  );
};
