import { useSelector } from 'react-redux';
import { selectCampings } from '../../redux/campings/selectors';
import CatalogItem from '../catalogItem/CatalogItem';

// import css from './CatalogList.module.css';

const CatalogList = () => {
  const campings = useSelector(selectCampings);

  return (
    <ul>
      {campings.map(camping => (
        <CatalogItem key={camping._id} campings={camping} />
      ))}
    </ul>
  );
};

export default CatalogList;
