import { Parallax } from 'react-parallax';

import { useAppSelector } from '../../app/hooks';
import text from './FullSATextContent.json';
import './FullScreenArticle.scss';

export const FullScreenArticle: React.FC = () => {
  const lang = useAppSelector(state => state.lang.lang);

  const currentLang = text[lang];

  return (
    <section className="FullScreenArticle">
      <div className="FullScreenArticle__shape" />

      <Parallax
        bgImage={'./images/cars.jpg'}
        bgImageAlt="cars"
        strength={200}
      >
        <div className="container">
          <h2 className="FullScreenArticle__title">
            {currentLang.title}
          </h2>
        </div>
      </Parallax>

      <div className="FullScreenArticle__shape" />
    </section>
  );
};