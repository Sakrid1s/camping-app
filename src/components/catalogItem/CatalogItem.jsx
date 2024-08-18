import ShowMoreButton from '../showMoreButton/ShowMoreButton.jsx';
import icons from '../../images/icons/icons.svg';
import css from './CatalogItem.module.css';
import Categories from '../categories/Categories.jsx';
import { useState } from 'react';
import CatalogItemModal from '../catalogItemModal/CatalogItemModal.jsx';

const CatalogItem = ({ campings }) => {
  const {
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
  } = campings;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <li className={css.catalogItem}>
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
          <div className={css.catalogPriceFavorite}>
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
        <Categories
          details={details}
          adults={adults}
          transmission={transmission}
          engine={engine}
        />
        <ShowMoreButton onClick={handleOpenModal} />
        <CatalogItemModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          gallery={gallery}
          name={name}
          price={price}
          rating={rating}
          reviews={reviews}
          location={location}
          description={description}
          details={details}
          adults={adults}
          transmission={transmission}
          engine={engine}
          campings={campings}
        />
      </div>
    </li>
  );
};

export default CatalogItem;
