import icons from '../../images/icons/icons.svg';
import css from './VehicleIcon.module.css';

const VehicleIcon = ({ name, label }) => {
  return (
    <li className={css.vehicleIconItem}>
      <svg width="32" height="32" className={css.vehicleIcon}>
        <use href={`${icons}#icon-${name}`} />
      </svg>
      <span className={css.iconDescription}>{label}</span>
    </li>
  );
};

export default VehicleIcon;
