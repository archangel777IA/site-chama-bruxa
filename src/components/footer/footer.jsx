import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  // Usar new Date().getFullYear() garante que o ano do copyright esteja sempre atualizado.
  // Esta é uma prática recomendada para evitar manutenção manual.
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footerContainer}>
      <p className={styles.footerText}>
        © {currentYear} Chama a Bruxa. Todos os direitos reservados.
      </p>
      <p className={styles.footerCredit}>
        Feito com magia e código.
      </p>
    </footer>
  );
}

// ESTA LINHA É A SOLUÇÃO DIRETA PARA O ERRO.
// Ela exporta o componente 'Footer' como padrão, tornando-o importável.
export default Footer;