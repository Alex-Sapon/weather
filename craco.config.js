const path = require('path');

const resolvePath = p => path.resolve(__dirname, p);

module.exports = {
  webpack: {
    alias: {
      '@/components': resolvePath('./src/components'),
      '@/assets': resolvePath('./src/assets'),
      '@/styles': resolvePath('./src/styles'),
      '@/store': resolvePath('./src/store'),
      '@/sagas': resolvePath('./src/sagas'),
      '@/api': resolvePath('./src/api'),
      '@/hooks': resolvePath('./src/hooks'),
      '@/helpers': resolvePath('./src/helpers'),
      '@/constants': resolvePath('./src/constants'),
      '@/types': resolvePath('./src/types'),
    }
  },
};
