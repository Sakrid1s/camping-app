import css from './VehicleType.module.css';
import icons from '../../images/icons/icons.svg';

const VehicleType = () => {
  return (
    <div>
      <h2 className={css.typeTitle}>VehicleType</h2>
      <ul>
        <svg>
          <use></use>
        </svg>
        <svg>
          <use></use>
        </svg>
        <svg>
          <use></use>
        </svg>
      </ul>
    </div>
  );
};
export default VehicleType;
