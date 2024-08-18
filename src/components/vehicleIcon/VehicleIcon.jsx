import icons from '../../images/icons/icons.svg';
import css from './VehicleIcon.module.css';

const VehicleIcon = ({ name }) => {
  return (
    <li>
      <svg width="20" height="20" className={css.vehicleIcon}>
        <use href={`${icons}#icon-${name}`} />
      </svg>
    </li>
  );
};

export default VehicleIcon;
