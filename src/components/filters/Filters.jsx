import FiltersLocation from '../filtersLocation/FiltersLocation.jsx';
import VehicleEquipment from '../vehicleEquipment/VehicleEquipment.jsx';
import VehicleType from '../vehicleType/VehicleType.jsx';
import SearchButton from '../searchButton/SearchButton.jsx';

import css from './Filters.module.css';

const Filters = () => {
  return (
    <section className={css.filtersSection}>
      <FiltersLocation />
      <h3>Filters</h3>
      <VehicleEquipment />
      <VehicleType />
      <SearchButton />
    </section>
  );
};

export default Filters;
