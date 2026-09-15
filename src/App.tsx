import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { GalleryPage } from './pages/GalleryPage'
import { CarpentryPage } from './pages/CarpentryPage'
import { MaterialsPage } from './pages/MaterialsPage'
import { ProcessPage } from './pages/ProcessPage'
import { ContactPage } from './pages/ContactPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="carpentry" element={<CarpentryPage />} />
          <Route path="materials" element={<MaterialsPage />} />
          <Route path="process" element={<ProcessPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="kitchens" element={<Navigate to="/gallery" replace />} />
          <Route path="styles" element={<Navigate to="/gallery#styles" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
