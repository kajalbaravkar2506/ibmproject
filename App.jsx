
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import AgeGroupPage from '@/pages/AgeGroupPage';
import NutritionPage from '@/pages/NutritionPage';
import EssentialsPage from '@/pages/EssentialsPage';
import ToysPage from '@/pages/ToysPage';
import ClothesPage from '@/pages/ClothesPage';
import DosAndDontsPage from '@/pages/DosAndDontsPage';
import ContactPage from '@/pages/ContactPage';
import BlogPage from '@/pages/BlogPage';
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-background text-foreground">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/age-groups/:age" element={<AgeGroupPage />} />
            <Route path="/nutrition" element={<NutritionPage />} />
            <Route path="/essentials" element={<EssentialsPage />} />
            <Route path="/toys" element={<ToysPage />} />
            <Route path="/clothes" element={<ClothesPage />} />
            <Route path="/dos-and-donts" element={<DosAndDontsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
  