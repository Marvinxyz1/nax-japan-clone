import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SolutionsPage from './pages/SolutionsPage';

gsap.registerPlugin(ScrollTrigger);

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    // Kill existing ScrollTriggers on route change
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    // Re-initialize scroll animations after a small delay
    const timer = setTimeout(() => {
      // Initialize fade-in animations
      const fadeElements = document.querySelectorAll('.fade-in');
      fadeElements.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: el,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // Parallax effect for hero jacket image (only on home page)
      if (location.pathname === '/') {
        const jacket = document.querySelector('.parallax-jacket');
        if (jacket) {
          gsap.to(jacket, {
            x: -200,
            ease: 'none',
            scrollTrigger: {
              trigger: '.hero-section',
              start: 'top top',
              end: 'bottom top',
              scrub: true,
            },
          });
        }
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [location.pathname]);

  return (
    <div className="font-noto">
      <Header />
      <main className="relative">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
