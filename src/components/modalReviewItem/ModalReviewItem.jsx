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
          <div className={css.userReview}>
            <div className={css.userAvatarContainer}>
              <span className={css.userAvatar}>{reviewer_name[0]}</span>
            </div>
            <div>
              <h3 className={css.userName}>{reviewer_name}</h3>
              <ul className={css.starList}>{renderStars(reviewer_rating)}</ul>
            </div>
          </div>
          <p className={css.userComment}>{comment}</p>
        </li>
      ))}
    </ul>
  );
};

export default ModalReviewItem;
