/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a7001a9095bfdb9a67087dc40540cf74"
  },
  {
    "url": "assets/css/0.styles.1eab4a7b.css",
    "revision": "e8ae5260496c0d33b7059bcaee3264d8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.3d737b62.js",
    "revision": "529a600d1ef716d7fc471c8c821f0fac"
  },
  {
    "url": "assets/js/3.3918a260.js",
    "revision": "8fff4e5913674c04618edac2065f99a8"
  },
  {
    "url": "assets/js/4.00cb3c3f.js",
    "revision": "c9d644599b3785ee941702c91cb66340"
  },
  {
    "url": "assets/js/5.59349796.js",
    "revision": "d6ee6074bb3e34e8aac8409f0323a96e"
  },
  {
    "url": "assets/js/6.856effe9.js",
    "revision": "c3b7c67acef9e36c443b56bdf430266a"
  },
  {
    "url": "assets/js/7.b23df174.js",
    "revision": "e6f7e025e5bc6bf28243378d4cfc6a47"
  },
  {
    "url": "assets/js/8.be894d0e.js",
    "revision": "dc1329041e9b40160b04c9faf274d6c5"
  },
  {
    "url": "assets/js/9.0164cc35.js",
    "revision": "526468ce8062c14500b0852ffdb7d50d"
  },
  {
    "url": "assets/js/app.d00b680c.js",
    "revision": "41b8557aa2cd8d91232509b09e6f56cb"
  },
  {
    "url": "docs/index.html",
    "revision": "2a99ee6a4c9ff23d99bf7bad505fe9dc"
  },
  {
    "url": "examples/index.html",
    "revision": "12c38c9955340bc6aa403b5136faa1fd"
  },
  {
    "url": "img/logo.svg",
    "revision": "28d6b8558ec07881ead686ce89d8f63a"
  },
  {
    "url": "index.html",
    "revision": "b61b1b108eebdd86435d4ba49b03edba"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
