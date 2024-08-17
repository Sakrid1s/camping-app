import ShowMoreButton from '../showMoreButton/ShowMoreButton.jsx';
import css from './CatalogItem.module.css';

const CatalogItem = ({ campings }) => {
  const { gallery, name, price, rating, reviews, location, description } =
    campings;

  return (
    <li className={css.catalogItem}>
      <div>
        <img src={gallery[0]} alt="Camping" className={css.catalogItemImage} />
      </div>
      <div>
        <div className={css.catalogItemMainInfo}>
          <h2 className={css.catalogItemTitle}>{name}</h2>
          <p className={css.catalogItemPrice}>€{price}</p>
          <button type="button">fav</button>
        </div>
        <ShowMoreButton />
      </div>
    </li>
  );
};

export default CatalogItem;
