import { babel } from '@rollup/plugin-babel'
import uglify from '@lopatnov/rollup-plugin-uglify'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import injectProcessEnv from 'rollup-plugin-inject-process-env'


export default [
  {
    input: 'demo.entry.js',
    output: {
      file: 'dist/js/demo.bundle.min.js',
      format: 'iife',
      compact: true
    },
    plugins: [
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
      }),
      nodeResolve(),
      commonjs(),
      injectProcessEnv({
        NODE_ENV: 'production',
      }),
      uglify()
    ],
  }
]
