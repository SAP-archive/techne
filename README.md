# 2.0 

## Up and running

`npm install`

## Serve it locally

`gulp`

The documentation website is served from the `www` directory with a special request handler for `dist` directory (see browserSync `server.baseDir` opt in `ops/gulp/serve.js`)

## Build production

`gulp docs-build --production`

The documentation website is built to the `www` directory as above. Additionally, compiled CSS is copied to `www/public/css` to create a completely stand-alone static website package.

