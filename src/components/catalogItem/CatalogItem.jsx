import ShowMoreButton from '../showMoreButton/ShowMoreButton.jsx';
import icons from '../../images/icons/icons.svg';
import css from './CatalogItem.module.css';
import Categories from '../categories/Categories.jsx';

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
  } = campings;

  return (
    <li className={css.catalogItem}>
      <div className={css.catalogImageContainer}>
        <img src={gallery[0]} alt="Camping" className={css.catalogItemImage} />
      </div>
      <div>
        <div className={css.catalogItemMainInfo}>
          <h2 className={css.catalogItemTitle}>{name}</h2>
          <p className={css.catalogItemPrice}>€{price}</p>
          <button type="button" className={css.catalogItemFavoriteButton}>
            <svg width="24" height="24" className={css.catalogItemFavoriteIcon}>
              <use href={`${icons}#icon-like`} />
            </svg>
          </button>
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
        <Categories details={details} />
        <ShowMoreButton />
      </div>
    </li>
  );
};

export default CatalogItem;
