import React, { useState, useEffect, useRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import styles from './PDFViewer.module.css';

// --- ALTERAÇÃO CRÍTICA E FINAL ---
// Esta é a configuração mais fundamental e à prova de falhas.
// Ela aponta para o arquivo que COPIAMOS MANUALMENTE para a pasta 'public'.
// O Vite servirá este arquivo do seu próprio servidor local, eliminando 100% dos problemas de rede e CORS.
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';

function PDFViewer({ onClose }) {
  const [numPages, setNumPages] = useState(null);
  const containerRef = useRef(null);

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  function onDocumentLoadError(error) {
    console.error('Erro detalhado ao carregar o PDF:', error.message);
  }

  const handleFullScreen = () => {
    const elem = containerRef.current;
    if (elem) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      }
    }
  };

  return (
    <div className={styles.pdfContainer} ref={containerRef}>
      <button className={`${styles.controlButton} ${styles.backButton}`} onClick={onClose}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="2" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        Voltar
      </button>

      <button className={`${styles.controlButton} ${styles.fullscreenButton}`} onClick={handleFullScreen}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>
      </button>

      <Document
        // Mantemos a URL do Blob, pois o problema não é o PDF, mas o worker.
        file="https://2jxaxya6u8sxnnit.public.blob.vercel-storage.com/portfolio.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={onDocumentLoadError}
        className={styles.pdfDocument}
        loading={<div className={styles.loading}>Carregando portfólio...</div>}
        error={<div className={styles.error}>Falha ao carregar o PDF.</div>}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            className={styles.pdfPage}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        ))}
      </Document>
    </div>
  );
}

export default PDFViewer;