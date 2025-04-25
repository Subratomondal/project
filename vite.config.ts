import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/

//asdf
export default defineConfig({
  base: '/project/',
  plugins: [react()],
});