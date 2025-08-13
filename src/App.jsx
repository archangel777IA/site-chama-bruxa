import React, { useState } from 'react';
import styles from './App.module.css';

import Header from './components/Header/Header.jsx';
import PDFViewer from './components/PDFViewer/PDFViewer.jsx';
import PortfolioButton from './components/PortfolioButton/PortfolioButton.jsx';

function App() {
  const [isPdfVisible, setIsPdfVisible] = useState(false);

  const handleShowPdf = () => {
    setIsPdfVisible(true);
  };

  // --- NOVA FUNÇÃO ---
  // Esta função será passada para o PDFViewer para que ele possa se "fechar".
  const handleClosePdf = () => {
    setIsPdfVisible(false);
  };

  return (
    <div className={styles.appContainer}>
      <Header />
      <main className={styles.mainContent}>
        {isPdfVisible ? (
          // --- ALTERAÇÃO: Passando a função 'handleClosePdf' como prop ---
          <PDFViewer onClose={handleClosePdf} />
        ) : (
          <div className={styles.buttonContainer}>
            <PortfolioButton onClick={handleShowPdf} />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;