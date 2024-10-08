import CatalogItem from '../catalogItem/CatalogItem';

import css from './CatalogList.module.css';

const CatalogList = ({ campings }) => {
  return (
    <ul className={css.catalogList}>
      {campings.map(camping => (
        <CatalogItem key={camping._id} campings={camping} />
      ))}
    </ul>
  );
};

export default CatalogList;
