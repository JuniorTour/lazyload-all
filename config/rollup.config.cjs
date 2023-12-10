// rollup.config.js
// commonjs
var common = require('./rollup.cjs');
var terser = require('@rollup/plugin-terser');

module.exports = {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      // When export and export default are not used at the same time, set legacy to true.
      // legacy: true,
      banner: common.banner,
      sourcemap: true,
    },
  ],
  plugins: [common.getCompiler(), terser()],
};
