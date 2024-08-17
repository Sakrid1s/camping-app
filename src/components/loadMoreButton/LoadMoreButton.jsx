import css from './LoadMoreButton.module.css';

const LoadMoreButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className={css.loadMoreButton}>
      Load more
    </button>
  );
};

export default LoadMoreButton;
