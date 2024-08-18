import css from './ShowMoreButton.module.css';

const ShowMoreButton = ({ onClick }) => {
  return (
    <button className={css.showMoreButton} onClick={onClick}>
      Show more
    </button>
  );
};

export default ShowMoreButton;
