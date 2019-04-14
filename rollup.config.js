import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';
import livereload from 'rollup-plugin-livereload';
import babel from 'rollup-plugin-babel';
import copy from 'rollup-plugin-copy';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/js/main.js',
	output: {
		file: 'dist/main.js',
		format: 'iife',
		sourcemap: true,
	},
	plugins: [
		resolve(), // tells Rollup how to find modules in node_modules
		commonjs(), // converts CommonJS to ES6 modules
		production && uglify(), // minify, but only in production
		!production && livereload(),
		babel({
			exclude: 'node_modules/**',
		}),
		copy({
			targets: {
				'src/static': 'dist',
			},
		}),
	],
};
