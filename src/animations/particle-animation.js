// Função auto-executável para criar as partículas de poeira flutuante.
(function createFloatingParticles() {
  const particleCount = 100;
  const particleContainer = document.createElement('div');
  particleContainer.id = 'particle-container';
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('span');
    particle.className = 'particle';

    // Define propriedades aleatórias para cada partícula
    const x = Math.random() * 100; // Posição horizontal em porcentagem (vw)
    const y = Math.random() * 100; // Posição vertical em porcentagem (vh)
    const size = Math.random() * 3 + 1; // Tamanho entre 1px e 4px
    const duration = Math.random() * 10 + 10; // Duração da animação entre 10s e 20s
    const delay = Math.random() * 10; // Atraso inicial entre 0s e 10s

    // Aplica os estilos diretamente no elemento
    particle.style.left = `${x}vw`;
    particle.style.top = `${y}vh`;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `${delay}s`;

    particleContainer.appendChild(particle);
  }

  // Adiciona o contêiner de partículas ao corpo do documento
  document.body.appendChild(particleContainer);
})();