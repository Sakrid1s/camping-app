import DocumentTitle from '../../components/documentTitle/DocumentTitle';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <section className={css.homeSection}>
      <DocumentTitle>Home</DocumentTitle>
      <h1>Welcome to the Camping App</h1>
      <p>Your adventure starts here!</p>
      <h2>Explore Our Features</h2>
      <div>
        <div>
          <h3>Discover Campsites</h3>
          <p>Find the best campsites near you.</p>
        </div>
        <div>
          <h3>Manage Favorites</h3>
          <p>Save your favorite camps.</p>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
