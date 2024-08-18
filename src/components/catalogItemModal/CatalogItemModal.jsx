import Modal from 'react-modal';
import icons from '../../images/icons/icons.svg';
import css from './CatalogItemModal.module.css';
import { useEffect, useState } from 'react';
import ModalFeatures from '../modalFeatures/ModalFeatures.jsx';
import ModalReviews from '../modalReviews/ModalReviews.jsx';

const CatalogItemModal = ({
  isOpen,
  onClose,
  gallery,
  name,
  price,
  rating,
  reviews,
  location,
  description,
  details,
  adults,
  transmission,
  engine,
  campings,
}) => {
  const [activeTab, setActiveTab] = useState(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleTabClick = tabName => {
    setActiveTab(prevTab => (prevTab === tabName ? null : tabName));
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      appElement={document.getElementById('root')}
      className={css.modalContent}
      overlayClassName={css.modalOverlay}
    >
      <div className={css.modalMainInfo}>
        <h2 className={css.modalTitle}>{name}</h2>
        <button onClick={onClose} className={css.closeButton}>
          <svg width="32" height="32" className={css.modalCloseIcon}>
            <use href={`${icons}#icon-close`} />
          </svg>
        </button>
      </div>
      <div className={css.modalSupInfo}>
        <svg width="16" height="16" className={css.modalStarIcon}>
          <use href={`${icons}#icon-star`} />
        </svg>
        <p className={css.modalReview}>
          {rating}({reviews.length} Reviews)
        </p>
        <div className={css.modalLocation}>
          <svg width="16" height="16" className={css.modalLocationIcon}>
            <use href={`${icons}#icon-local`} />
          </svg>
          <p className={css.modalLocation}>{location}</p>
        </div>
      </div>
      <p className={css.modalPrice}>€{price}</p>
      <div className={css.modalImageContainer}>
        <img
          src={gallery[0]}
          alt={`Image of ${name}`}
          className={css.modalImage}
        />
        <img
          src={gallery[1]}
          alt={`Image of ${name}`}
          className={css.modalImage}
        />
        <img
          src={gallery[2]}
          alt={`Image of ${name}`}
          className={css.modalImage}
        />
      </div>
      <p className={css.modalDescription}>{description}</p>
      <div className={css.modalAdditionalInfo}>
        <button
          onClick={() => handleTabClick('features')}
          className={`${css.modalAdditionalFeaturesButton} ${
            activeTab === 'features' ? css.activeTab : ''
          }`}
        >
          Features
        </button>
        <button
          onClick={() => handleTabClick('reviews')}
          className={`${css.modalAdditionalReviewButton} ${
            activeTab === 'reviews' ? css.activeTab : ''
          }`}
        >
          Reviews
        </button>
      </div>

      {activeTab === 'features' && (
        <ModalFeatures
          details={details}
          adults={adults}
          transmission={transmission}
          engine={engine}
          campings={campings}
        />
      )}
      {activeTab === 'reviews' && <ModalReviews campings={campings} />}
    </Modal>
  );
};

export default CatalogItemModal;
