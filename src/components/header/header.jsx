import React from 'react';
import styles from './Header.module.css';

// Importando o novo logo da pasta de assets.
import logoSerpente from '../../assets/images/logo-serpente.png';

function Header() {
  return (
    <header className={styles.headerContainer}>
      <img
        src={logoSerpente}
        alt="Logo Chama a Bruxa com uma serpente entrelaçada"
        className={styles.logoImage}
      />
    </header>
  );
}

export default Header;