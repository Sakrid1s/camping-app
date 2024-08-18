import BookingForm from '../bookingForm/BookingForm';
import ModalReviewItem from '../modalReviewItem/ModalReviewItem';
import css from './ModalReviews.module.css';

const ModalReviews = ({ campings }) => {
  return (
    <div className={css.modalReviewSection}>
      <ModalReviewItem campings={campings} />
      <BookingForm />
    </div>
  );
};

export default ModalReviews;
