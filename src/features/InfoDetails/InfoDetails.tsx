import { Icon } from '../Icon';
import './InfoDetails.scss';

export const InfoDetails: React.FC = () => {

  return (
    <div className="InfoDetails">
      <img 
        src="./icons/logo.svg" 
        alt="logo" 
        className="InfoDetails__logo" 
      />

      <div className="InfoDetails__contacts">
        <a 
          href="mailto:info@ferati.ee" 
          className="InfoDetails__contact"
        >
          info@ferati.ee
        </a>

        <a 
          href="tel:+37253230044" 
          className="InfoDetails__contact"
        >
          +372 5323 0044
        </a>

        <a 
          href="https://www.google.com/maps/place/T%C3%A4hnase+tee+1,+Peetri,+75312+Harju+maakond,+%D0%95%D1%81%D1%82%D0%BE%D0%BD%D1%96%D1%8F/@59.4011605,24.8169344,17z/data=!3m1!4b1!4m5!3m4!1s0x4692eb6a4639a0f1:0x5bbadeb669c0efef!8m2!3d59.4011605!4d24.8169344"
          className="InfoDetails__contact"
        >
          Tähnase tee 1, 75312 Tallinn
        </a>
      </div>

      <p className="InfoDetails__more">
        FERATI OÜ<br />
        Registrikood: 14950099<br />
        KMKR nr: EE102323436
      </p>

      <div className="InfoDetails__socials">
        <Icon name='facebook' />
        <Icon name='instagram' />
        <Icon name='linkenin' />
      </div>
    </div>
  );
};
