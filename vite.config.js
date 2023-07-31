module.exports = {
    build: {
      assetsInlineLimit: 0,
      rollupOptions: {
        output: {
          entryFileNames: '[name].js', // Keep original filenames for JS files (optional)
          chunkFileNames: '[name].js', // Keep original filenames for JS chunks (optional)
          assetFileNames: '[name][extname]', // Keep original filenames for assets (images, etc.)
        },
      },
    },
};