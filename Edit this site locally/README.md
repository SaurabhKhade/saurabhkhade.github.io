# Run this site locally

you can run this site locally with a live server

clone this repository.

```bash
git clone https://github.com/SaurabhKhade/saurabhkhade.github.io.git
```

install packages for live-server and optimised build

```bash
npm install
#or
yarn install
```

start the server locally

```bash
npm start
#or
yarn start
```

create minified version of website by running 

```bash
npm run build
#or
yarn build
```

build directory will be created in the root directory containing all minified files. You can host this file at any static server.

## Note

If you have any other directory structure for javascript and css files, make sure to update the source path in gulpfile before running build command.