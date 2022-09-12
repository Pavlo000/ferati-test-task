import className from 'classnames';
import './Menu.scss';

type Props = {
  hasOpen: boolean;
}

export const Menu: React.FC<Props> = ({ hasOpen }) => {

  return (
    <div className={className(
      'Menu',
      'Navbar__menu',
      { 'Navbar__menu--open': hasOpen }
    )}>

    </div>
  );
};
