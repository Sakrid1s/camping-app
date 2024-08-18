import BookingForm from '../bookingForm/BookingForm.jsx';
import Categories from '../categories/Categories.jsx';
import VehicleDetails from '../vehicleDetails/VehicleDetails.jsx';
import css from './ModalFeatures.module.css';

const ModalFeatures = ({ details, adults, transmission, engine, campings }) => {
  return (
    <div className={css.modalFeaturesSection}>
      <div className={css.categoriesVehicle}>
        <Categories
          details={details}
          adults={adults}
          transmission={transmission}
          engine={engine}
        />
        <VehicleDetails campings={campings} />
      </div>
      <BookingForm />
    </div>
  );
};

export default ModalFeatures;
