# rollup-simple

A simple Rollup ES6 JS build with babel, uglify, local server, live reload and sourcemaps. Using all the latest web tech as of Oct 2018 :)

## Getting started

Clone this repository and install its dependencies:

```bash
git clone https://github.com/felixturner/rollup-simple
cd rollup-simple
npm install
```

`npm run build` builds `src/main.js` to `dist/main.js`, along with a sourcemap file for debugging.

`npm run dev` launches a local server with live reload as your source files change. Navigate to [localhost:5000](http://localhost:5000).

Public files go in `dist` folder.

## TODO

- Add eslint
- Copy files to dist from a static folder

## Inspired by

- [rollup-starter-app](https://github.com/rollup/rollup-starter-app)
- [My LIGHTWEIGHT build tooling setup](https://www.youtube.com/watch?v=govQMsfzgZA)

## License

[MIT](LICENSE).
