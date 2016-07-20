var path = require('path');
var cooking = require('cooking');
var Components = require('./components.json');

cooking.set({
  use: 'vue',
  entry: Components,
  dist: './lib/',
  template: false,

  clean: true,
  format: 'umd',
  moduleName: ['BHMINT', '[name]'],
  extractCSS: '[name]/style.css',
  extends: ['vue', 'lint', 'saladcss']
});

cooking.add('resolve.alias', {
  'main': path.join(__dirname, 'src'),
  'packages': path.join(__dirname, 'packages')
});
cooking.add('output.filename', '[name]/index.js');

var externals = {};
Object.keys(Components).forEach(function (key) {
  externals[`packages/${key}/index.js`] = {
    root: `BHMINT.index.${key}`,
    commonjs: `bh-mint-ui/lib/${key}`,
    commonjs2: `bh-mint-ui/lib/${key}`,
    amd: `bh-mint-ui/lib/${key}`
  };
  externals[`packages/${key}/style.css`] = {
    root: `BHMINT.index.${key}/style.css`,
    commonjs: `bh-mint-ui/lib/${key}/style.css`,
    commonjs2: `bh-mint-ui/lib/${key}/style.css`,
    amd: `bh-mint-ui/lib/${key}/style.css`
  };
});

cooking.add('externals', Object.assign({
  vue: {
    root: 'Vue',
    commonjs: 'vue',
    commonjs2: 'vue',
    amd: 'vue'
  }
}, externals));

cooking.add('preLoader.js.exclude', /node_modules|lib/);
cooking.add('preLoader.vue.exclude', /node_modules|lib/);

module.exports = cooking.resolve();
