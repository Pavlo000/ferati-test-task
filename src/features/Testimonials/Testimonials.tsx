import { useAppSelector } from '../../app/hooks';
import './Testimonials.scss';
import text from './TestimonialsTextContent.json';

export const Testimonials: React.FC = () => {
  const lang = useAppSelector(state => state.contactFixed.lang);
  const currentLang = text[lang];

  const listOfCars = () => {
    const count = 9;
    const arrayOfCars = [];
    
    for (let i = 1; i <= count; i++) {
      arrayOfCars.push(i);
    };

    return arrayOfCars;
  };

  return (
    <div className="Testimonials">
      <img 
        src="./icons/social.svg"
        alt="social"
      />

      <ul className="Testimonials__list">
          {listOfCars().map(numCar => (
            <li className="Testimonials__item" key={numCar}>
              <img 
                src={`./images/social-${numCar}.jpg`} 
                alt={`car ${numCar}`}
                className="Testimonials__photo"
              />
            </li>
          ))}
      </ul>

      <a href="/" className="Testimonials__link">
        {currentLang.link}
      </a>
    </div>
  );
};
