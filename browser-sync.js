const browserSync = require('browser-sync').create();
const connectSSI = require('connect-ssi');
const files = (process.argv[2])? './dist' : false;

browserSync.init({
  server: 'dist',
  open: false,
  ghostMode: false,
  notify: false,
  files,
  middleware: connectSSI({
    baseDir: 'dist',
    ext: '.html'
  })
});