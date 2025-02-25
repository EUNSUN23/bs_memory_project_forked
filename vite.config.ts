import { defineConfig as testConfig } from 'vitest/config';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const config = defineConfig({
  plugins: [react()],
});

// Vitest configuration
const tstConfig = testConfig({
  test: {
    environment: 'jsdom',
  },
});

// Merge configurations
export default {
  ...config,
  ...tstConfig,
};
