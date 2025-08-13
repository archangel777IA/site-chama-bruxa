import React from 'react';
import styles from './LoadingIndicator.module.css';

// O componente recebe o progresso como uma prop.
function LoadingIndicator({ progress }) {
  return (
    <div className={styles.loadingContainer}>
      <p className={styles.loadingText}>Carregando Portfólio...</p>
      <div className={styles.progressBarBackground}>
        {/* A largura da barra de progresso é controlada por uma variável de estilo inline */}
        <div className={styles.progressBarFill} style={{ width: `${progress}%` }}></div>
      </div>
      <p className={styles.progressPercentage}>{Math.round(progress)}%</p>
    </div>
  );
}

export default LoadingIndicator;