import React from 'react';
import styles from './PortfolioButton.module.css';

// O componente recebe uma prop 'onClick' que é a função a ser executada quando o botão for clicado.
function PortfolioButton({ onClick }) {
  return (
    <button className={styles.portfolioButton} onClick={onClick}>
      Ver Portfólio
    </button>
  );
}

export default PortfolioButton;