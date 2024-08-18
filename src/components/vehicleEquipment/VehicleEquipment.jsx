import css from './VehicleEquipment.module.css';
import VehicleIcon from '../vehicleIcon/VehicleIcon';

const VehicleEquipment = () => {
  return (
    <div>
      <h2 className={css.equipmentTitle}>VehicleEquipment</h2>
      <ul>
        <VehicleIcon name={'ac'} />
        <VehicleIcon name={'kitchen'} />
        <VehicleIcon name={'ac'} />
        <VehicleIcon name={'ac'} />
        <VehicleIcon name={'ac'} />
      </ul>
    </div>
  );
};

export default VehicleEquipment;
