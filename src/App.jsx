import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import Loader from './components/loader/Loader';

import HomePage from './pages/homePage/HomePage.jsx';
const CatalogPage = lazy(() => import('./pages/catalogPage/CatalogPage.jsx'));
const FavoritesPage = lazy(() =>
  import('./pages/favoritesPage/FavoritesPage.jsx')
);

import './App.css';

function App() {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
