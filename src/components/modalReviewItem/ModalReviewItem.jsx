import icons from '../../images/icons/icons.svg';
import css from './ModalReviewItem.module.css';

const ModalReviewItem = ({ campings }) => {
  const { reviews } = campings;

  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <li key={i} className={css.iconStar}>
          <svg width="16" height="16">
            <use href={`${icons}#icon-star`}></use>
          </svg>
        </li>
      );
    }

    return stars;
  };

  return (
    <ul className={css.modalReviewList}>
      {reviews.map(({ reviewer_name, reviewer_rating, comment }, index) => (
        <li key={index} className={css.reviewItem}>
          <div>
            <div>
              <span>{reviewer_name[0]}</span>
            </div>
            <div>
              <h3>{reviewer_name}</h3>
              <ul>{renderStars(reviewer_rating)}</ul>
            </div>
          </div>
          <p>{comment}</p>
        </li>
      ))}
    </ul>
  );
};

export default ModalReviewItem;
