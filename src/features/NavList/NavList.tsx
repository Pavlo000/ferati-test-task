import { useAppSelector } from '../../app/hooks';
import text from './NavListTextContent.json';
import './NavList.scss';
import { NavLink } from 'react-router-dom';
import { Icon } from '../Icon';
import { Lang } from '../Lang';

export const NavList: React.FC = () => {
  const lang = useAppSelector(state => state.lang.lang);
  const currentLang = text[lang];

  return (
    <ul className="NavList">
      <li className="NavList__item">
        <NavLink to="/cars" className="NavList__link">
          {currentLang.linkOne}
        </NavLink>
      </li>

      <li className="NavList__item">
        <NavLink to="/services" className="NavList__link">
        {currentLang.linkTwo}
        </NavLink>
      </li>

      <li className="NavList__item">
        <NavLink to="/contact" className="NavList__link">
        {currentLang.linkThree}
        </NavLink>
      </li>

      <li className="NavList__item">
        <div className="NavList__shape" />
      </li>

      <li className="NavList__item">
        <a 
          href="https://www.facebook.com/ferati.ee"
          className="NavList__link"
        >
          <Icon name='facebook' />
        </a>
      </li>

      <li className="NavList__item">
        <a 
          href="https://www.instagram.com/ferati.ee/"
          className="NavList__link"
        >
          <Icon name='instagram' />
        </a>
      </li>

      <li className="NavList__item">
        <a 
          href="https://www.linkedin.com/company/ferati-ee/"
          className="NavList__link"
        >
          <Icon name='linkenin' />
        </a>
      </li>
    </ul>
  );
}