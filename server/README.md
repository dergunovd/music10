# Music10 Server ![Server](https://github.com/dergunovd/music10/workflows/Server/badge.svg)

### Description

TODO

### NPM-scripts

- _prebuild_ - clear old build artifacts
- _build_ - build application
- _format_ - format sources
- _start_ - run application
- _start:dev_ - run application with --watch
- _start:debug_ - run application with debug tools
- _start:prod_ - run application using production params
- _start:forever_ - run application using _forever_
- _lint_ - lint source using eslint
- _test_ - run unit tests using Jest
- _test:watch_ - run unit tests using Jest with --watch
- _test:cov_ - run unit tests using Jest with coverage
- _test:debug_ - run unit tests using Jest with debug tools
- _test:e2e_ - run e2e tests
- _doc_ - generate documentation using compodoc
- _deploy:doc_ - Deploy documentation
- _deploy:coverage_ - Deploy test-coverage result

### Local run

`npm install`

`npm start`

### Deploy

`sudo docker build -t music . && sudo docker run -p 5001:3001 -p 5000:3000 -d --name music music`
