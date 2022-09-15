import { useAppSelector } from '../../app/hooks';
import text from './IntroductionTextContent.json';
import './Introduction.scss';
import { IntroDesc } from '../IntroDesc';

export const Introduction: React.FC = () => {
  const lang = useAppSelector(state => state.lang.lang);

  const currentLang = text[lang];

  return (
    <section className="Introduction">
      <article className="Introduction__article">
        <div className="Introduction__cars">
          <img 
            src="./icons/mercedes.svg" 
            alt="mercedes"
            className="Introduction__car"
          />
          <img 
            src="./icons/bmw.svg" 
            alt="bmw"
            className="Introduction__car"
          />
          <img 
            src="./icons/audi.svg" 
            alt="audi"
            className="Introduction__car"
          />
          <img 
            src="./icons/porshe.svg" 
            alt="porshe"
            className="Introduction__car"
          />
          <img 
            src="./icons/bentley.svg" 
            alt="bentley"
            className="Introduction__car"
          />
          <img 
            src="./icons/maserati.svg" 
            alt="maserati"
            className="Introduction__car"
          />
          <img 
            src="./icons/rangeRover.svg" 
            alt="rangeRover"
            className="Introduction__car"
          />

          <div className="Introduction__more">
            {'& '}
            more
          </div>
        </div>
      </article>

      <article className="Introduction__article">
        <div className="Introduction__ideas">
            <h3 className="Introduction__title">
              {currentLang.title}
            </h3>

            <ul className="Introduction__list">
              <li className="Introduction__item">
                <p className="Introduction__subtitle">01</p>

                <p className="Introduction__phrase">
                  {currentLang['01']}
                </p>
              </li>

              <li className="Introduction__item">
                <p className="Introduction__subtitle">02</p>

                <p className="Introduction__phrase">
                  {currentLang['02']}
                </p>
              </li>

              <li className="Introduction__item">
                <p className="Introduction__subtitle">03</p>

                <p className="Introduction__phrase">
                  {currentLang['03']}
                </p>
              </li>

              <li className="Introduction__item">
                <p className="Introduction__subtitle">04</p>

                <p className="Introduction__phrase">
                  {currentLang['04']}
                </p>
              </li>
            </ul>
        </div>
      </article>

      <article className="Introduction__article">
        <IntroDesc />
      </article>
    </section>
  );
};