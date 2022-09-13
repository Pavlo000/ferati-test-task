import { InfoDetails } from '../InfoDetails';
import text from './ContactUsTextContent.json';
import './ContactUs.scss';
import { useAppSelector } from '../../app/hooks';

export const ContactUs: React.FC = () => {
  const lang = useAppSelector(state => state.lang.lang);
  const currentLang = text[lang];

  return (
    <div className="ContactUs">
      <h3 className="ContactUs__title">
        {currentLang.title}
      </h3>

      <form 
        className="ContactUs__form" 
        autoComplete="off"
        onSubmit={(event) => event.preventDefault()}
      >
        <input
          type="text"
          name="name"
          className="ContactUs__input"
          placeholder={currentLang.placeHolderName}
        />
        <input
          type="email"
          name="email"
          className="ContactUs__input"
          placeholder={currentLang.placeHolderEmail}
        />
        <input
          type="text"
          name="phone"
          className="ContactUs__input"
          placeholder={currentLang.placeHolderNumber}
        />
        <input
          type="textarea"
          name="messsage"
          className="ContactUs__input ContactUs__input--textarea"
          placeholder={currentLang.placeHolderMessage}
        />

        <button 
          type="submit"
          className="ContactUs__button"
        >
          {currentLang.button}
        </button>
      </form>

      <div className="ContactUs__InfoDetails">
        <InfoDetails />
      </div>
    </div>
  )
} 