import classNames from "classnames";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { changeLang } from "./LangSlice";

import './Lang.scss';

export const Lang: React.FC = () => {
  const dispatch = useAppDispatch();
  const lang = useAppSelector(state => state.lang.lang);

  return (
    <div className="Lang">
          <button
            type="button"
            onClick={() => dispatch(changeLang('eng'))}
            className={
              classNames(
                'Lang__button',
                { 'Lang__button--checked': lang === 'eng' }
              )
            }
          >
            Eng
          </button>

          <div className="Lang__shape">
            |
          </div>

          <button
            type="button"
            onClick={() => dispatch(changeLang('est'))}
            className={
              classNames(
                'Lang__button',
                { 'Lang__button--checked': lang === 'est' }
              )
            }
          >
            Est
          </button>
    </div>
  );
};
