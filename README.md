# My Portfolio

I am Saurabh Khade a CS Student and a ReactJS Developer. This is my portfolio website. This is a static website hosted on github pages.

[Visit the site &#x21a9;](https://saurabhkhade.github.io/)

## Run this site locally

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

If you have added or removed any files or directories, please check the build script in package.json and update it if required.

```json
{
  "scripts": {
    "start": "live-server .",
    "build": "rm -rf build && mkdir build && mkdir build/style && mkdir build/logic && postcss style/*.css --use autoprefixer|minify --css > build/style/main.css && minify index.html > build/index.html && minify logic/index.js > build/logic/index.js && minify logic/mapandstore.js > build/logic/mapandstore.js && cp -R logic/typed_js_lite.min.js build/logic/ && cp -R img build/img"
  }
}
```