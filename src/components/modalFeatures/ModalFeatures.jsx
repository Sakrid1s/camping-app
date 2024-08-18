import BookingForm from '../bookingForm/BookingForm.jsx';
import Categories from '../categories/Categories.jsx';
import css from './ModalFeatures.module.css';

const ModalFeatures = ({ details, adults, transmission, engine }) => {
  return (
    <div className={css.modalFeaturesSection}>
      <div className={css.categoriesVehicle}>
        <Categories
          details={details}
          adults={adults}
          transmission={transmission}
          engine={engine}
        />
      </div>
      <BookingForm />
    </div>
  );
};

export default ModalFeatures;
