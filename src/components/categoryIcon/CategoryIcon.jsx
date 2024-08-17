import icons from '../../images/icons/icons.svg';
import css from './CategoryIcon.module.css';

const CategoryIcon = ({ iconName, label }) => {
  return (
    <li className={css.categoryItem}>
      <svg width="20" height="20" className={css.categoryIcon}>
        <use href={`${icons}#icon-${iconName}`} />
      </svg>
      <span className={css.categoryDescription}>{label}</span>
    </li>
  );
};

export default CategoryIcon;
