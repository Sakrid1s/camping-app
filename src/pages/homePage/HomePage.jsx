import DocumentTitle from '../../components/documentTitle/DocumentTitle';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <section className={css.homeSection}>
      <DocumentTitle>Home</DocumentTitle>
      <div className={css.mainInfo}>
        <h1 className={css.homeTitle}>Welcome to the Camping App</h1>
        <p className={css.titleDescription}>Your adventure starts here!</p>
      </div>
      <h2 className={css.homeSubtitle}>Explore Our Features</h2>
      <div>
        <div className={css.homeFeatures}>
          <h3 className={css.homeFeaturesSubtitle}>Discover Campsites</h3>
          <p className={css.homeSubtitleDescription}>
            Find the best campsites near you.
          </p>
        </div>
        <div className={css.homeFeatures}>
          <h3 className={css.homeFeaturesSubtitle}>Manage Favorites</h3>
          <p className={css.homeSubtitleDescription}>
            Save your favorite camps.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
