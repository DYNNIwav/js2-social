import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'account/login.html'),
        register: resolve(__dirname, 'account/register.html'),
        post: resolve(__dirname, 'post/index.html'),
        createPost: resolve(__dirname, 'post/create.html'),
        editPost: resolve(__dirname, 'post/edit.html'),
        profile: resolve(__dirname, 'profile/index.html'),
      },
    },
  },
});
