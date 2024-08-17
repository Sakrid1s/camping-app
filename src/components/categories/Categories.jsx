import CategoryIcon from '../categoryIcon/CategoryIcon';
import css from './Categories.module.css';

const Categories = ({ details }) => {
  const {
    airConditioner,
    kitchen,
    beds,
    TV,
    CD,
    radio,
    shower,
    toilet,
    freezer,
    hob,
    microwave,
    gas,
    water,
  } = details;

  return (
    <ul className={css.categoriesList}>
      {airConditioner && (
        <CategoryIcon
          iconName="conditioner"
          label={`${airConditioner} air conditioner`}
        />
      )}
      {kitchen && <CategoryIcon iconName="kitchen" label="kitchen" />}
      {beds && <CategoryIcon iconName="bed" label={`${beds} beds`} />}
      {TV && <CategoryIcon iconName="tv" label="TV" />}
      {CD && <CategoryIcon iconName="cd" label="CD" />}
      {radio && <CategoryIcon iconName="radio" label="radio" />}
      {shower && <CategoryIcon iconName="shower" label="shower" />}
      {toilet && <CategoryIcon iconName="toilet" label="toilet" />}
      {freezer && <CategoryIcon iconName="freezer" label="freezer" />}
      {hob && <CategoryIcon iconName="hob" label={`${hob} hob`} />}
      {microwave && <CategoryIcon iconName="microwave" label="microwave" />}
      {gas && <CategoryIcon iconName="gas" label={`gas`} />}
      {water && <CategoryIcon iconName="water" label={`water`} />}
    </ul>
  );
};

export default Categories;
