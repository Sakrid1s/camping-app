import { useSelector } from 'react-redux';
import DocumentTitle from '../../components/documentTitle/DocumentTitle';
import CatalogItem from '../../components/catalogItem/CatalogItem';
import css from './FavoritesPage.module.css';
import {
  selectFavorites,
  selectCampings,
} from '../../redux/campings/selectors';
import Filters from '../../components/filters/Filters.jsx';

const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);
  const campings = useSelector(selectCampings);

  const favoriteCampings = campings.filter(camping =>
    favorites.includes(camping._id)
  );

  return (
    <section className={css.favoritesPage}>
      <DocumentTitle>Favorites</DocumentTitle>
      <Filters />
      {favoriteCampings.length === 0 ? (
        <p>No favorites yet. Start adding some!</p>
      ) : (
        <ul className={css.favoritesList}>
          {favoriteCampings.map(favorite => (
            <CatalogItem key={favorite._id} campings={favorite} />
          ))}
        </ul>
      )}
    </section>
  );
};

export default FavoritesPage;
