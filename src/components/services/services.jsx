import React from 'react';
import styles from './Services.module.css';

function Services() {
  return (
    <section id="servicos" className={styles.servicesSection}>
      <h2>Serviços e Comissões</h2>
      <p className={styles.introText}>
        Além das obras disponíveis na galeria, ofereço serviços de arte personalizada para dar vida à sua visão.
      </p>
      <div className={styles.servicesList}>
        <div className={styles.serviceItem}>
          <h3>Ilustração Digital</h3>
          <p>Criação de personagens, retratos estilizados e arte para redes sociais.</p>
        </div>
        <div className={styles.serviceItem}>
          <h3>Pintura em Tela</h3>
          <p>Obras originais em acrílico ou óleo, com temas que exploram o místico e o surreal.</p>
        </div>
        <div className={styles.serviceItem}>
          <h3>Comissões Abertas</h3>
          <p>Traga sua ideia e vamos transformá-la em uma peça de arte única e pessoal.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;