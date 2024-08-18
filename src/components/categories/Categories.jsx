import CategoryIcon from '../categoryIcon/CategoryIcon';
import css from './Categories.module.css';

const Categories = ({ details, adults, transmission, engine }) => {
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
      {adults > 0 && (
        <CategoryIcon iconName="users" label={`${adults} adults`} />
      )}
      {transmission && <CategoryIcon iconName="automatic" label="automatic" />}
      {engine && <CategoryIcon iconName="petrol" label="petrol" />}
      {kitchen > 0 && <CategoryIcon iconName="kitchen" label="kitchen" />}
      {beds > 0 && <CategoryIcon iconName="bed" label={`${beds} beds`} />}
      {TV > 0 && <CategoryIcon iconName="tv" label="TV" />}
      {CD > 0 && <CategoryIcon iconName="cd" label="CD" />}
      {radio > 0 && <CategoryIcon iconName="radio" label="radio" />}
      {shower > 0 && <CategoryIcon iconName="shower" label="shower" />}
      {toilet > 0 && <CategoryIcon iconName="toilet" label="toilet" />}
      {freezer > 0 && <CategoryIcon iconName="freezer" label="freezer" />}
      {hob > 0 && <CategoryIcon iconName="hob" label={`${hob} hob`} />}
      {microwave > 0 && <CategoryIcon iconName="microwave" label="microwave" />}
      {airConditioner > 0 && (
        <CategoryIcon
          iconName="conditioner"
          label={`${airConditioner} air conditioner`}
        />
      )}
      {gas && gas !== '' && <CategoryIcon iconName="gas" label={`gas`} />}
      {water && water !== '' && (
        <CategoryIcon iconName="water" label={`water`} />
      )}
    </ul>
  );
};

export default Categories;
