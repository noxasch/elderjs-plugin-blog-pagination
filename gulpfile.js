const { src, dest, watch, series, parallel } = require('gulp');
const rollup = require('gulp-rollup-2');
const terser = require('gulp-terser-js');
const commonjs = require('@rollup/plugin-commonjs');

const files = {
  jsPath: './src/**/*',
  jsMain: './src/index.js',
  jsOutput: 'index.js'
}

function jsTask() {
  return src(files.jsPath)
    .pipe(rollup.rollup({
      input: files.jsMain,
      external: ['window'],
      cache: true,
      output: [
        {
          file: files.jsOutput,
          format: 'cjs',
        },
      ],
      plugins: [commonjs()]
    }))
    .pipe(terser())
    .pipe(dest('./'));
};

exports.default = series(parallel(jsTask));
