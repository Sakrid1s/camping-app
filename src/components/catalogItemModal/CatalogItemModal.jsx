import Modal from 'react-modal';
import icons from '../../images/icons/icons.svg';
import css from './CatalogItemModal.module.css';
import { useEffect } from 'react';

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
}) => {
  useEffect(() => {
    // Забороняє скролінг фону при відкритті модалки
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';

    // Відновлює скролінг фону при закритті модалки
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      appElement={document.getElementById('root')}
      className={css.modalContent}
      overlayClassName={css.modalOverlay}
    >
      <div className={css.catalogImageContainer}>
        <img
          src={gallery[0]}
          alt={`Image of ${name}`}
          className={css.catalogItemImage}
        />
      </div>
      <div>
        <div className={css.catalogItemMainInfo}>
          <h2 className={css.catalogItemTitle}>{name}</h2>
          <div className={css.catalogPriveFavorite}>
            <p className={css.catalogItemPrice}>€{price}</p>
            <button type="button" className={css.catalogItemFavoriteButton}>
              <svg
                width="24"
                height="24"
                className={css.catalogItemFavoriteIcon}
              >
                <use href={`${icons}#icon-like`} />
              </svg>
            </button>
          </div>
        </div>
        <div className={css.catalogItemSupInfo}>
          <svg width="16" height="16" className={css.catalogItemStarIcon}>
            <use href={`${icons}#icon-star`} />
          </svg>
          <p className={css.catalogItemReview}>
            {rating}({reviews.length} Reviews)
          </p>
          <div className={css.catalogItemLocation}>
            <svg width="16" height="16" className={css.catalogItemLocationIcon}>
              <use href={`${icons}#icon-local`} />
            </svg>
            <p className={css.catalogItemLocation}>{location}</p>
          </div>
        </div>
        <p className={css.catalogItemDescription}>{description}</p>
        <button onClick={onClose} className={css.closeButton}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default CatalogItemModal;
