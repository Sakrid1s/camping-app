import css from './FiltersLocation.module.css';

const FiltersLocation = () => {
  return (
    <div className={css.filtersLocationSection}>
      <p className={css.filtersLocationTitle}>Location</p>
      <input type="text" placeholder="City" className={css.locationInput} />
    </div>
  );
};

export default FiltersLocation;
