import React from 'react';
import styles from './About.module.css';

function About() {
  return (
    <section id="sobre" className={styles.aboutSection}>
      <div className={styles.aboutContent}>
        <h2>Sobre a Artista</h2>
        <p>
          Aqui você escreverá um parágrafo cativante sobre a artista. Fale sobre sua jornada, suas inspirações, as técnicas que utiliza e a filosofia por trás de sua arte. A "Bruxinha" é uma persona que mistura o místico com o criativo, e este é o espaço para explorar essa narrativa.
        </p>
        <p>
          Mencione os tipos de trabalho que ela faz, como ilustrações, pinturas, arte digital ou comissões personalizadas.
        </p>
      </div>
    </section>
  );
}

// ESTA LINHA É A SOLUÇÃO PARA O ERRO.
// Ela torna o componente 'About' disponível para outros arquivos.
export default About;