import { terser } from 'rollup-plugin-terser'
import babel from 'rollup-plugin-babel'

export default {
  input: 'src/bratach.js',
  output: [
    {
      file: 'dist/vue-bratach.es.js',
      format: 'es'
    },
  ],
  plugins: [
    babel({
      include: ['src/**/*']
    }),
    terser({
      mangle: false
    })
  ]
}