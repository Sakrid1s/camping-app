import css from './FiltersLocation.module.css';

const FiltersLocation = () => {
  return (
    <div className={css.filtersLocationSection}>
      <p>Location</p>
      <input type="text" placeholder="City" />
    </div>
  );
};

export default FiltersLocation;
