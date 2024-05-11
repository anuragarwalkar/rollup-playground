import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';

export default [
  {
    input: 'src/index.ts', // Entry point for TypeScript + React
    output: {
      name: 'agm-awesome-utils-tutorial',
      file: pkg.browser,
      format: 'umd',
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        declaration: true, // Generate declaration files (.d.ts)
        declarationDir: 'dist/types', // Output directory for declaration files
      }),
      babel({ // Babel plugin for React
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        exclude: 'node_modules/**',
        presets: ['@babel/preset-env', '@babel/preset-react'],
      }),
    ],
  },
  {
    input: 'src/index.ts', // Entry point for TypeScript + React
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
    plugins: [
      typescript({
        declaration: true, // Generate declaration files (.d.ts)
        declarationDir: 'dist/types', // Output directory for declaration files
      }),
      babel({ // Babel plugin for React
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        exclude: 'node_modules/**',
        presets: ['@babel/preset-env', '@babel/preset-react'],
      }),
    ],
  },
];
