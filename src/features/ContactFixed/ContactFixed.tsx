import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import './ContactFixed.scss';
import { changeLang } from './ContactFixedSlice';

export const ContactFixed: React.FC = () => {
  const dispatch = useAppDispatch();
  const lang = useAppSelector(state => state.contactFixed.lang);

  return (
    <div className="ContactFixed">
       <form 
        onSubmit={(event) => event.preventDefault()}
        className="ContactFixed__section"
       >
          <button
            type="button"
            onClick={() => dispatch(changeLang('eng'))}
            className={
              classNames(
                'ContactFixed__button',
                { 'ContactFixed__button--checked': lang === 'eng' }
              )
            }
          >Eng</button>

          <div className="ContactFixed__shape">
            |
          </div>

          <button
            type="button"
            onClick={() => dispatch(changeLang('est'))}
            className={
              classNames(
                'ContactFixed__button',
                { 'ContactFixed__button--checked': lang === 'est' }
              )
            }
          >Est</button>
       </form>

       <div className="ContactFixed__section">
        <img src="./icons/tel.svg" alt="tel icon" />
          <a href="tel:+37253230044" className='ContactFixed__tel'>
            +372 5323 0044
          </a>
       </div>

       <div className="ContactFixed__section">
        <p className="ContactFixed__address">Tähnase tee 1, Tallinn</p>
       </div>
    </div>
  );
};