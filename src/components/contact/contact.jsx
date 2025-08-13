import React from 'react';
import styles from './Contact.module.css';

function Contact() {
  return (
    <section id="contato" className={styles.contactSection}>
      <div className={styles.contactContent}>
        <h2>Entre em Contato</h2>
        <p>
          Gostou do meu trabalho? Quer encomendar uma arte exclusiva ou apenas trocar uma ideia? Me encontre nas redes sociais ou envie um e-mail. A magia acontece quando nos conectamos!
        </p>
        <div className={styles.contactLinks}>
          <a href="mailto:seu-email@exemplo.com" target="_blank" rel="noopener noreferrer">
            E-mail
          </a>
          <a href="https://instagram.com/seu-usuario" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="https://behance.net/seu-usuario" target="_blank" rel="noopener noreferrer">
            Behance
          </a>
        </div>
      </div>
    </section>
  );
}

// ESTA LINHA É A SOLUÇÃO DIRETA PARA O ERRO.
// Ela exporta o componente 'Contact' como padrão, tornando-o importável.
export default Contact;