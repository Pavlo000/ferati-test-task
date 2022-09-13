import { useAppSelector } from '../../app/hooks';
import text from './FullSATextContent.json';
import './FullScreenArticle.scss';

export const FullScreenArticle: React.FC = () => {
  const lang = useAppSelector(state => state.lang.lang);

  const currentLang = text[lang];

  return (
    <div className="FullScreenArticle">
      <div className="container">
        <div className="FullScreenArticle__shape" />

        <h2 className="FullScreenArticle__title">
          {currentLang.title}
        </h2>
        
        <div className="FullScreenArticle__shape" />
      </div>
    </div>
  );
};