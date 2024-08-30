import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Expose server to all network interfaces
    port: 3000,        
    proxy: {
      '/api': {
        target: 'http://chat-app-backend-service:5000', 
        changeOrigin: true,
        secure: false,     
      },
	    '/socket.io': {
        target: 'htpp://chat-app-backend-service:5000',
        changeOrigin: true,
		    ws:true,
        secure: false,
      },
    },
  },
});
