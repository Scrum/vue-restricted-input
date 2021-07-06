import babel from 'rollup-plugin-babel';
import { terser } from "rollup-plugin-terser";
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import builtins from 'rollup-plugin-node-builtins';

export default {
    input: 'src/index.js',
    output: [
        {
          file: 'lib/index.js',
          format: 'esm'
        }
    ],
    plugins: [
        resolve(),
        commonjs(),
        builtins(),
        babel({
            presets: [
                [
                  '@babel/env'
                ]
            ]
        }),
        terser()
    ]
};
