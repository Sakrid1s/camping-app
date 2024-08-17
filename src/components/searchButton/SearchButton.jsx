import css from './SearchButton.module.css';

const SearchButton = () => {
  return (
    <button type="submit" className={css.searchButton}>
      Search
    </button>
  );
};

export default SearchButton;
