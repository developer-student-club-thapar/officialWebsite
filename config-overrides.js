const path = require('path');

module.exports = {
  paths: function(paths, env) {
    paths.appIndexHtml = path.resolve(__dirname, 'Frontend/public/index.html');
    paths.appBuild = path.resolve(__dirname, 'Frontend/build');
    paths.appIndexJs = path.resolve(__dirname, 'Frontend/src/index.js');
    paths.appSrc = path.resolve(__dirname, 'Frontend/src');
    return paths;
  },
};
