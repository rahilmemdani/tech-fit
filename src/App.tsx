import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import ScrollToTop from './components/ScrollToTop';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home.tsx'));
const About = lazy(() => import('./pages/About.tsx'));
const WhyTechfit = lazy(() => import('./pages/WhyTechfit.tsx'));
const Services = lazy(() => import('./pages/Services.tsx'));
const Technology = lazy(() => import('./pages/Technology.tsx'));
const Pricing = lazy(() => import('./pages/Pricing.tsx'));
const Contact = lazy(() => import('./pages/Contact.tsx'));

// Loading component
const Loading = () => (
  <div style={{
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    color: '#E31837',
    fontSize: '2rem',
    fontWeight: 'bold'
  }}>
    TECHFIT<span style={{ color: '#fff' }}>ACTIVE...</span>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/why-techfit" element={<WhyTechfit />} />
            <Route path="/services" element={<Services />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
