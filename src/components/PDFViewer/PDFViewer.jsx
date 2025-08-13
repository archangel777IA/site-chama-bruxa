import React, { useState, useEffect, useRef } from 'react'; // --- CORREÇÃO CRÍTICA: Remoção da vírgula extra ---
import { Document, Page, pdfjs } from 'react-pdf';
import styles from './PDFViewer.module.css';

// A configuração do worker usando o CDN da cdnjs permanece como a solução mais robusta.
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

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
      } else if (elem.mozRequestFullScreen) { // Firefox
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) { // Chrome, Safari and Opera
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { // IE/Edge
        elem.msRequestFullscreen();
      }
    }
  };

  // A solução CSS-first para o dimensionamento, que é mais robusta, é mantida.
  return (
    <div className={styles.pdfContainer} ref={containerRef}>
      <button className={`${styles.controlButton} ${styles.backButton}`} onClick={onClose}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        Voltar
      </button>

      <button className={`${styles.controlButton} ${styles.fullscreenButton}`} onClick={handleFullScreen}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>
      </button>

      <Document
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