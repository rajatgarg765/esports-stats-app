import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    server: {
      port: 5173, // Default Vite port
    },
    define: {
      // Expose environment variables to your React app
      'import.meta.env.VITE_GO_BACKEND_URL': JSON.stringify(env.VITE_GO_BACKEND_URL),
    },
  };
});