import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Fade out and remove the splash screen once React has painted
window.addEventListener('load', () => {
    const splash = document.getElementById('splash');
    if (splash) {
        // Add a slight delay to ensure the App is fully hydrated and painted
        setTimeout(() => {
            splash.style.transition = 'opacity 0.6s ease';
            splash.style.opacity = '0';
            setTimeout(() => {
                splash.remove();
            }, 600);
        }, 100);
    }
});
