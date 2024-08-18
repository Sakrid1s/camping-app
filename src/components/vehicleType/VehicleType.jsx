import VehicleIcon from '../vehicleIcon/VehicleIcon';
import css from './VehicleType.module.css';

const VehicleType = () => {
  return (
    <div className={css.typeSection}>
      <h2 className={css.typeTitle}>VehicleType</h2>
      <ul className={css.typeList}>
        <VehicleIcon name={'van'} label="Van" />
        <VehicleIcon name={'integrated'} label="Fully Integrated" />
        <VehicleIcon name={'alcove'} label="Alcove" />
      </ul>
    </div>
  );
};
export default VehicleType;
