import { useAppSelector } from '../../app/hooks';
import './IntroDesc.scss';
import text from './IntroDescTextContent.json';

export const IntroDesc: React.FC = () => {
  const lang = useAppSelector(state => state.contactFixed.lang);
  const largeScreen = useAppSelector(state => state.app.hasLargeScreen);

  const currentLang = text[lang];

  return (
    <div className="IntroDesc">
      <ul className="IntroDesc__main-list">
        <li 
          className="IntroDesc__main-item"
        >
          <h2 className="IntroDesc__title">
            {currentLang.title}
          </h2>
          <p className="IntroDesc__article">
            {currentLang.article}
          </p>

          <div className="IntroDesc__we-deliver">
            <h3 className="IntroDesc__title-value">
              {currentLang.titleOfValue}
            </h3>

            <ul className="IntroDesc__values">
              {currentLang.values.map(value => (
                <li 
                  className="IntroDesc__value" 
                  key={value}
                >
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </li>

        {largeScreen && (
          <li 
            className="IntroDesc__main-item"
          >
              <img 
                src="./figures/europeMap.svg"
                alt="europe Map"
                className="IntroDesc__figure"
              />
          </li>
        )}
      </ul>
    </div>
  );
}