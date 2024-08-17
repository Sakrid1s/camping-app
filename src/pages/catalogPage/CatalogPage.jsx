import { useDispatch, useSelector } from 'react-redux';
import DocumentTitle from '../../components/documentTitle/DocumentTitle';
import { useEffect } from 'react';
import { fetchCampings } from '../../redux/campings/operations';
import {
  selectIsLoading,
  selectError,
  selectCampings,
  selectPage,
  selectItemsPerPage,
  selectHasMoreItems,
} from '../../redux/campings/selectors.js';
import Loader from '../../components/loader/Loader.jsx';
import LoadMoreButton from '../../components/loadMoreButton/LoadMoreButton.jsx';
import CatalogList from '../../components/catalogList/CatalogList.jsx';
import { loadMore, resetPage } from '../../redux/campings/campingsSlice.js';

import css from './CatalogPage.module.css';
import Filters from '../../components/filters/Filters.jsx';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const items = useSelector(selectCampings);
  const page = useSelector(selectPage);
  const perPage = useSelector(selectItemsPerPage);
  const hasMoreItems = useSelector(selectHasMoreItems);

  useEffect(() => {
    dispatch(resetPage());
    dispatch(fetchCampings());
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(loadMore());
  };

  const displayedItems = items.slice(0, page * perPage);

  return (
    <section className={css.catalogSection}>
      <DocumentTitle>Catalog</DocumentTitle>
      {isLoading && <Loader />}
      {error && <p>Error: {error}</p>}
      <Filters />
      <CatalogList campings={displayedItems} />
      {hasMoreItems && <LoadMoreButton onClick={handleLoadMore} />}
    </section>
  );
};

export default CatalogPage;
