import { ContactFixed } from '../ContactFixed';
import text from './HeaderTextContent.json';
import './Header.scss';
import { useAppSelector } from '../../app/hooks';

export const Header: React.FC = () => {
  const lang = useAppSelector(state => state.lang.lang);
  const largeScreen = useAppSelector(state => state.app.hasLargeScreen);

  const currentLang = text[lang];


  return (
    <header className="Header">
      <div className="Header__wrapper">
        <video autoPlay loop muted className="Header__video">
          <source src="./video/Audi-RS6.mp4" type="video/mp4" />
          <source src="./video/Audi-RS6.ogg" type="video/ogg" />
        </video>
      </div>

      <h1 className="Header__title">
        {currentLang.title}
      </h1>

      {largeScreen && <ContactFixed />}

    </header>
  );
}