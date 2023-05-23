import type {Options} from 'tsup';

const options: Options = {
  clean: true,
  dts: true,
  entryPoints: ['src/index.ts'],
  format: ['cjs', 'esm'],
  minify: true,
  outDir: 'dist',
  sourcemap: true,
  target: 'es2019',
};

export default options;
