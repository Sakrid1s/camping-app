import { useDispatch, useSelector } from 'react-redux';
import DocumentTitle from '../../components/documentTitle/DocumentTitle';
import { useEffect } from 'react';
import { fetchCampings } from '../../redux/campings/operations';
import {
  // selectCampings,
  selectIsLoading,
  selectError,
} from '../../redux/campings/selectors.js';
import Loader from '../../components/loader/Loader.jsx';
import Container from '../../components/container/Container.jsx';
import LoadMoreButton from '../../components/loadMoreButton/LoadMoreButton.jsx';
import CatalogList from '../../components/catalogList/CatalogList.jsx';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCampings());
  }, [dispatch]);

  return (
    <Container>
      <DocumentTitle>Catalog</DocumentTitle>
      {isLoading && <Loader />}
      {error && <p>Error: {error}</p>}
      <CatalogList />
      <LoadMoreButton />
    </Container>
  );
};

export default CatalogPage;
