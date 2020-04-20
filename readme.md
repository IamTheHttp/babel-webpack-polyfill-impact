# Show case the effects on the bundle-size of babel and webpack

### Key takeaways
- IE-only polyfills add 20% bloat to the provided example
- Chrome-ready webpack bundles have a fraction of a size compared to IE-ready code (1KB vs 27KB)
- Using babel can unexpectedly increase your bundle size (if you suddenly introduce object spread, babel will silently include all needed polyfills) 

### installation
- `git clone`
- `npm install`
- `npm run transpile && webpack`


### files provided (They contain the same content, just used for convenience)
- `src/just-promise.js` A source file containing `new Promise()`
- `promise-with-spread.js` A source file containing `new Promise()` and Object-spread
- `promise-with-spread-just-chrome.js` A source file for chrome-only builds 
- `promise-with-spread-noIE.js` A source file for chrome-only builds

### directories provided
- `./src` source code files
- `./babelify` babel-transpiled code
- `./dist` webpack+babel bundle code
