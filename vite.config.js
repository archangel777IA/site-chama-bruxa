import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// O plugin vite-plugin-static-copy foi removido.
// A configuração volta a ser a padrão e mais simples.

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});