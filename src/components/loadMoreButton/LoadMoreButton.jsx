import css from './LoadMoreButton.module.css';

const LoadMoreButton = () => {
  return (
    <>
      <button type="button" className={css.loadMoreButton}>
        Load more
      </button>
    </>
  );
};

export default LoadMoreButton;
