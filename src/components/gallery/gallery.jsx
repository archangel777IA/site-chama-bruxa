import React from 'react';
import styles from './Gallery.module.css';

// A importação dos arquivos locais permanece comentada.
/*
import artwork1 from '../../assets/images/artwork1.jpg';
import artwork2 from '../../assets/images/artwork2.jpg';
import artwork3 from '../../assets/images/artwork3.jpg';
import artwork4 from '../../assets/images/artwork4.jpg';
*/

// --- ALTERAÇÃO CRÍTICA: Corrigindo as URLs dos placeholders ---
const artworks = [
  { id: 1, src: 'https://placehold.co/300x400/8C5A3B/F0F0F0?text=Arte+1', alt: 'Espaço reservado para a primeira obra de arte' },
  { id: 2, src: 'https://placehold.co/400x300/8C5A3B/F0F0F0?text=Arte+2', alt: 'Espaço reservado para a segunda obra de arte' },
  { id: 3, src: 'https://placehold.co/300x300/8C5A3B/F0F0F0?text=Arte+3', alt: 'Espaço reservado para a terceira obra de arte' },
  { id: 4, src: 'https://placehold.co/300x450/8C5A3B/F0F0F0?text=Arte+4', alt: 'Espaço reservado para a quarta obra de arte' },
];

// As instruções para reverter a mudança quando os arquivos locais funcionarem permanecem as mesmas.
/*
const artworks = [
  { id: 1, src: artwork1, alt: 'Descrição da primeira obra de arte' },
  { id: 2, src: artwork2, alt: 'Descrição da segunda obra de arte' },
  { id: 3, src: artwork3, alt: 'Descrição da terceira obra de arte' },
  { id: 4, src: artwork4, alt: 'Descrição da quarta obra de arte' },
];
*/

function Gallery() {
  return (
    <section id="galeria" className={styles.gallerySection}>
      <h2>Galeria de Arte</h2>
      <div className={styles.galleryGrid}>
        {artworks.map((artwork) => (
          <div key={artwork.id} className={styles.artworkCard}>
            <img src={artwork.src} alt={artwork.alt} className={styles.artworkImage} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;