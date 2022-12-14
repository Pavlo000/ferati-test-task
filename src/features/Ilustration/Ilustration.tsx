import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useAppSelector } from '../../app/hooks';
import './Ilustration.scss';
import text from './IlustrationTextContent.json';

type Props = {
  hasReverse: boolean;
};

export const Ilustration: React.FC<Props> = ({ hasReverse }) => {
  const lang = useAppSelector(state => state.lang.lang);
  const [currentLang, setCurrentLang] = useState<any>(null);

  useEffect(() => {
    if (hasReverse) {
      setCurrentLang(text.secondVersion[lang]);
    } else {
      setCurrentLang(text.firstVersion[lang]);
    }
  }, [hasReverse, lang]);

  return (
    <section className={classNames(
      'Ilustration',
      {'Ilustration--reverse': hasReverse } 
    )}>
      <div
        className="
          Ilustration__block
        "
      >
        <h3 className="Ilustration__title">
          {currentLang && currentLang.title}
        </h3>
        <Link
          to={hasReverse ? '/ordering' : '/cars'} 
          className="Ilustration__link"
        >
          <h3 className="Ilustration__name-link">
            {currentLang && currentLang.link}
          </h3>
          
          <img 
            src="./icons/arrow--right.svg" 
            alt="arrow right"
            className="Ilustration__arrow"
          />
        </Link>
      </div>

      <div
        className="
          Ilustration__block
        "
      >
        <div className="Ilustration__img-container">
          {hasReverse ? (
            <img
            src="./images/cars-reverse.jpg"
            alt="cars direct"
            className="Ilustration__img"
          />
          ) : (
            <img
            src="./images/cars-direct.jpg"
            alt="cars direct"
            className="Ilustration__img"
          />
          )}
        </div>
      </div>
    </section>
  );
};
