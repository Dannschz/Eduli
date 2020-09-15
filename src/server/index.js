require('ignore-styles');

require('asset-require-hook')({
  extensions: ['jpg', 'svg', 'png', 'gif'],
  name: '/assets/[hash].[ext]',
});

require('./server');