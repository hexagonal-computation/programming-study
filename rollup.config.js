import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import copy from 'rollup-plugin-copy'
import commonjs from 'rollup-plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import { uglify } from 'rollup-plugin-uglify'
import filesize from 'rollup-plugin-filesize'
import progress from 'rollup-plugin-progress'
import { visualizer } from 'rollup-plugin-visualizer'
import json from 'rollup-plugin-json'
import replace from 'rollup-plugin-replace'
import livereload from 'rollup-plugin-livereload'
import reactSvg from 'rollup-plugin-react-svg'

// Convert CJS modules to ES6, so they can be included in a bundle
import postcss from 'rollup-plugin-postcss'
import postcssModules from 'postcss-modules'
import postcssPresetEnv from 'postcss-preset-env'

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH

export default {
  input: ['src/adapter/entry-points/index.tsx'],
  output: {
    dir: 'dist',
    format: 'cjs',
    sourcemap: !production,
  },
  plugins: [
    progress(),
    resolve({
      browser: true,
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    }),
    json(),
    typescript(),
    reactSvg(),
    commonjs({
      include: ['node_modules/**'],
      exclude: ['node_modules/process-es6/**'],
      namedExports: {
        'node_modules/react/index.js': [
          'Children',
          'Component',
          'PropTypes',
          'createElement',
        ],
        'node_modules/react-dom/index.js': ['render'],
      },
    }),
    postcss({
      modules: true,
      plugins: [
        postcssModules({
          generateScopedName: '[local]',
        }),
        postcssPresetEnv({
          stage: 0,
        }),
      ],
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    filesize(),
    replace({
      'process.env.NODE_ENV': production
        ? JSON.stringify('production')
        : JSON.stringify('development'),
    }),
    copy({
      targets: [
        {
          src: 'src/adapter/entry-points/index.html',
          dest: 'dist',
        },
      ],
    }),
    !production &&
      visualizer({
        filename: 'dist/dependencies.html',
      }),
    !production && livereload(),
    production && uglify(),
  ],
}
