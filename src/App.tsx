import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layout components
import Layout from './components/layout/Layout';
import ScrollToTop from './components/ScrollToTop';

// Pages
import HomePage from './pages/HomePage';
import TourismPage from './pages/TourismPage';
import ProductsPage from './pages/ProductsPage';
import BudgetPage from './pages/BudgetPage';
import GalleryPage from './pages/GalleryPage';
import NewsPage from './pages/NewsPage';
import NewsDetailPage from './pages/NewsDetailPage';
import NotFoundPage from './pages/NotFoundPage';

import Organization from './pages/profile/OrganizationPage';
import Area from './pages/profile/AreaPage';
import Vision from './pages/profile/VisionPage';
import History from './pages/profile/HistoryPage';
import Officials from './pages/profile/OfficialsPage';
import Demografi from './pages/profile/DemografiPage';
import Economy from './pages/profile/EconomyPage';

import SDGS from './pages/SDGsPage';

// services
import DokumenRPJMDes from './pages/services/DokumenRPJMDesPage';
import DokumenPermenATR from './pages/services/DokumenProfileDesaPage';

function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="profile/organization" element={<Organization />} />
            <Route path="profile/area" element={<Area />} />
            <Route path="profile/vision" element={<Vision />} />
            <Route path="profile/history" element={<History />} />
            <Route path="profile/officials" element={<Officials />} />
            <Route path="profile/demografi" element={<Demografi />} />
            <Route path="profile/economy" element={<Economy />} />

            <Route path="services/dokumen-rpjmdes-sindangjaya" element={<DokumenRPJMDes />} />
            <Route path="services/dokumen-profil-desa-sindangjaya" element={<DokumenPermenATR />} />

            <Route path="tourism" element={<TourismPage />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="budget" element={<BudgetPage />} />
            <Route path="gallery" element={<GalleryPage />} />
            <Route path="news" element={<NewsPage />} />
            <Route path="sdgs" element={<SDGS />} />
            <Route path="news/:id" element={<NewsDetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;