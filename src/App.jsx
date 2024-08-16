import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import './App.css';

import HomePage from './pages/homePage/HomePage.jsx';
import CatalogPage from './pages/catalogPage/CatalogPage.jsx';

import Loader from './components/loader/Loader';

const FavoritesPage = lazy(() =>
  import('./pages/favoritesPage/FavoritesPage.jsx')
);
const NotFoundPage = lazy(() =>
  import('./pages/notFoundPage/NotFoundPage.jsx')
);

function App() {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
