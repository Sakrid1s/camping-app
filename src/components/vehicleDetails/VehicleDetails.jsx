import css from './VehicleDetails.module.css';

const VehicleDetails = ({ campings }) => {
  const { form, length, width, height, tank, consumption } = campings;

  return (
    <div>
      <h2 className={css.vehicleDetailsListTitle}>VehicleDetails</h2>
      <ul className={css.vehicleDetailsList}>
        <li className={css.vehicleDetailsItem}>
          <p>Form</p>
          <p>{form}</p>
        </li>
        <li className={css.vehicleDetailsItem}>
          <p>Length</p>
          <p>{length}</p>
        </li>
        <li className={css.vehicleDetailsItem}>
          <p>Width</p>
          <p>{width}</p>
        </li>
        <li className={css.vehicleDetailsItem}>
          <p>Height</p>
          <p>{height}</p>
        </li>
        <li className={css.vehicleDetailsItem}>
          <p>Tank</p>
          <p>{tank}</p>
        </li>
        <li className={css.vehicleDetailsItem}>
          <p>Consumption</p>
          <p>{consumption}</p>
        </li>
      </ul>
    </div>
  );
};

export default VehicleDetails;
