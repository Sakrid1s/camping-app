import VehicleIcon from '../vehicleIcon/VehicleIcon';
import css from './VehicleEquipment.module.css';

const VehicleEquipment = () => {
  return (
    <div className={css.equipmentSection}>
      <h2 className={css.equipmentTitle}>VehicleEquipment</h2>
      <ul className={css.equipmentList}>
        <VehicleIcon name={'conditioner'} label="AC" />
        <VehicleIcon name={'automatic'} label="Automatic" />
        <VehicleIcon name={'kitchen'} label="Kitchen" />
        <VehicleIcon name={'tv'} label="TV" />
        <VehicleIcon name={'shower'} label="Shower/WC" />
      </ul>
    </div>
  );
};

export default VehicleEquipment;
