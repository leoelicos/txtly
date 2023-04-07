# txtly

![idb](https://img.shields.io/badge/7.0.2-0?label=idb&style=for-the-badge&labelColor=white&color=black) ![webpack](https://img.shields.io/badge/5.73.0-0?label=webpack&style=for-the-badge&labelColor=white&color=black) ![workbox-webpack-plugin](https://img.shields.io/badge/6.5.3-0?label=workbox-webpack-plugin&style=for-the-badge&labelColor=white&color=black) ![codemirror](https://img.shields.io/badge/1.0.0-0?label=code-mirror-themes&style=for-the-badge&labelColor=white&color=black)

![babel-loader](https://img.shields.io/badge/8.2.5-0?label=babel-loader&style=flat-square&labelColor=gray&color=black) ![css-loader](https://img.shields.io/badge/6.7.1-0?label=css-loader&style=flat-square&labelColor=gray&color=black) ![style-loader](https://img.shields.io/badge/3.3.1-0?label=style-loader&style=flat-square&labelColor=gray&color=black) ![webpack-cli](https://img.shields.io/badge/4.10.0-0?label=webpack-cli&style=flat-square&labelColor=gray&color=black) ![webpack-dev-server](https://img.shields.io/badge/4.9.3-0?label=webpack-dev-server&style=flat-square&labelColor=gray&color=black) ![webpack-pwa-manifest](https://img.shields.io/badge/4.3.0-0?label=webpack-pwa-manifest&style=flat-square&labelColor=gray&color=black) ![concurrently](https://img.shields.io/badge/7.2.2-0?label=concurrently&style=flat-square&labelColor=gray&color=black) ![nodemon](https://img.shields.io/badge/2.0.18-0?label=nodemon&style=flat-square&labelColor=gray&color=black)

## Introduction

This progressive web app allows users to edit a text file using CodeMirror, which prettifies code such as Javascript. The app allows data to persist whether the user is online or offline, and implements an assets cache to store data.

This Node application uses npm packages `idb` and `code-mirror-themes`.

I made this app in order to learn how to implement an IndexedDB to store persistent data, and also to learn how to make a progressive web app that implements caching strategies like Cache-First using service workers.

## Usage

- The app is deployed at https://txtly.herokuapp.com/
- The repo is at https://github.com/leoelicos/txtly

## Development and Testing

### 0. Download Node

| Programs | Download links                  |
| -------- | ------------------------------- |
| `Node`   | https://nodejs.org/en/download/ |

### 1. Git clone and go inside

```sh
git clone https://github.com/leoelicos/txtly.git

cd txtly
```

### 2. Install dependencies

```sh

npm install
cd server && npm install
cd ..

```

## Usage

1. Start the server: `npm start`

2. Access the app by going to http://localhost:3000

## Video Demo

https://user-images.githubusercontent.com/99461390/176977890-28eec4aa-222b-4319-aae7-37f28dc6d862.mp4

Video is also available on [YouTube](https://www.youtube.com/watch?v=nz5ANwI0pWI)

## Screenshots

### The application's `manifest.json` file:

![a manifest file in the browser.](https://user-images.githubusercontent.com/99461390/176977908-5300be5d-5871-4583-872d-6eb61f796122.jpg)

### The application's registered service worker:

![registered service worker in the browser.](https://user-images.githubusercontent.com/99461390/176977917-fcb42a99-12f7-43d6-985d-ef31d07d6f15.jpg)

### The application's IndexedDB storage:

![IndexedDB storage named 'txtly' in the browser.](https://user-images.githubusercontent.com/99461390/176977919-715ef991-2743-4c50-8f03-4c23c364b8a4.png)

## Credits

- BCS Resources

## License

&copy; Leo Wong <leoelicos@gmail.com>

Licensed under the [MIT License](./LICENSE).

```

```
