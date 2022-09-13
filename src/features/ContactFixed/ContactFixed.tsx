import { Icon } from '../Icon';
import { Lang } from '../Lang';
import './ContactFixed.scss';


export const ContactFixed: React.FC = () => {

  return (
    <div className="ContactFixed">
       <div 
          className="ContactFixed__section"
        >
          <Lang />
       </div>

       <div className="ContactFixed__section">
          <Icon name='tel' />  
          
          <a 
            href="tel:+37253230044" 
            className='ContactFixed__tel'
          >
            +372 5323 0044
          </a>
       </div>

       <div className="ContactFixed__section">
          <p className="ContactFixed__address">
            Tähnase tee 1, Tallinn
          </p>
       </div>
    </div>
  );
};