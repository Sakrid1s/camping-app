import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Container from './components/container/Container.jsx';
import Loader from './components/loader/Loader.jsx';

import HomePage from './pages/homePage/HomePage.jsx';
const CatalogPage = lazy(() => import('./pages/catalogPage/CatalogPage.jsx'));
const FavoritesPage = lazy(() =>
  import('./pages/favoritesPage/FavoritesPage.jsx')
);

import './App.css';
import Navigation from './components/navigation/Navigation.jsx';

function App() {
  return (
    <Container>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </Container>
  );
}

export default App;
