import { useState, useEffect } from 'react';
import './App.css';
import type { Work } from './types';
// コンポーネントのインポート
import Header from './components/Header';
import Hero from './components/Hero';
import Works from './components/Works';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Footer from './components/Footer';
import WorkModal from './components/WorkModal';
import Research from './components/Research';

function App() {
  // --- 状態管理 ---
const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  const [selectedWork, setSelectedWork] = useState<Work | null>(null);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  // --- イベントハンドラ ---
  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  
  const openModal = (work: Work) => {
    setSelectedWork(work);
    document.body.classList.add('modal-open');
  };

  const closeModal = () => {
    setSelectedWork(null);
    document.body.classList.remove('modal-open');
  };

  // --- 描画 ---
  return (
    <div className="App">
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      <main>
        <Hero />
        <Works onWorkClick={openModal} />
        <Research />
        <Skills />
        <Experience />
      </main>

      <Footer />

      <WorkModal work={selectedWork} onClose={closeModal} />
    </div>
  );
}

export default App;