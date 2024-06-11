import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Hero } from './pages/hero/hero'
import { About } from './pages/about/about'
import { Portfolio } from './pages/portfolio/portfolio'
import { Testimonials } from './pages/testimonials/testimonials'
import { Contact } from './pages/contact/contact'
import { Footer } from './pages/footer/footer'
import { useEffect } from 'react'
import 'animate.css';
import Extra1 from './pages/extra1/extra1'
import { Faq } from './pages/Faq/Faq'

function App() {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const viewport = document.querySelector('meta[name=viewport]');
      if (viewport) {
        viewport.setAttribute('content', viewport.content + `, height=${window.innerHeight}`);
      }
    }
  }, []);

  return (
    <div>
      <Hero />
      <About />
      <Portfolio />
      <Extra1 />
      <Testimonials />
      <Faq />
      <Contact />  
      <Footer />
    </div>
  )
}

export default App
