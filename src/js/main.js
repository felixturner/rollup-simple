import { foo } from './foo.js';
var span = document.querySelector('#foo');
span.textContent = `hello ${foo()}`; //ES6 style
