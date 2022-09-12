import { useAppSelector } from '../../app/hooks';
import text from './NavListTextContent.json';
import './NavList.scss';

export const NavList: React.FC = () => {
  const lang = useAppSelector(state => state.contactFixed.lang);
  const currentLang = text[lang];

  return (
    <ul className="NavList">
      <li className="NavList__item">
        <a href="/" className="NavList__link">
          {currentLang.linkOne}
        </a>
      </li>
      <li className="NavList__item">
        <a href="/" className="NavList__link">
        {currentLang.linkTwo}
        </a>
      </li>
      <li className="NavList__item">
        <a href="/" className="NavList__link">
        {currentLang.linkThree}
        </a>
      </li>
      <li className="NavList__item">
        <div className="NavList__shape" />
      </li>
      <li className="NavList__item">
        <div className="NavList__link NavList__link--facebook" />
      </li>
      <li className="NavList__item">
        <div className="NavList__link NavList__link--instagram" />
      </li>
      <li className="NavList__item">
        <div className="NavList__link NavList__link--linkenin" />
      </li>
    </ul>
  );
}