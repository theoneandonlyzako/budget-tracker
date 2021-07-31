const APP_PREFIX = 'BudgetTracker-';
const VERSION = 'version_01';
const CACHE_NAME = APP_PREFIX + VERSION;

const FILES_TO_CACHE = [
  "/",
  "./index.html",
  "./css/styles.css",
  "./icons/icon-192x192.png",
  "./icons/icon-512x512.png",
  "./assets/js/db.js",
  "./js/index.js"
];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log('installing cache : ' + CACHE_NAME)
      return cache.addAll(FILES_TO_CACHE)
    })
  )
})

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keyList) {
      let cacheKeeplist = keyList.filter(function (key) {
        return key.indexOf(APP_PREFIX);
      });
      cacheKeeplist.push(CACHE_NAME);

      return Promise.all(
        keyList.map(function (key, i) {
          if (cacheKeeplist.indexOf(key) === -1) {
            console.log('deleting cache : ' + keyList[i]);
            return caches.delete(keyList[i]);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', function (e) {
  console.log('fetch request : ' + e.request.url)
  e.respondWith(
    caches.match(e.request).then(function (request) {
      if (request) { // if cache is available, respond with cache
        console.log('responding with cache : ' + e.request.url)
        return request
      } else {       // if there are no cache, try fetching request
        console.log('file is not cached, fetching : ' + e.request.url)
        return caches.match(e.request)
      }
    })
  )
});

// remove old caches
// self.addEventListener("activate", (event) => {
//   // waitUntil
//   event.waitUntil(
//     // caches.keys
//     caches.keys().then((keyList) => {
//        // will give a Key List
//       return Promise.all(
//         keyList.map((key) => {
//           if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
//             // if nothing in the keep list, delete item 
//             return caches.delete(key);
//           }
//         })
//       );
//     })
//   );
//   //takes control over service worker on the first load
//   self.clients.claim();
// });

// self.addEventListener('activate', function(event) {
//   // waitUntil
//   event.waitUntil(
//     // caches.keys
//     caches.keys().then(function(cacheNames) {
//       // will give a Key List
//       return Promise.all(
//         // filter out APP_PREFIX (.map)
//         cacheNames.filter(function(cacheName) {
//           // Return true if you want to remove this cache,
//           // but remember that caches are shared across
//           // the whole origin
//         }).map(function(cacheName) {
//           return caches.delete(cacheName);
//         })
//       );
//     })
//     // if nothing in the keep list, delete item 
//   );
// });

// self.addEventListener('delete', function() {
//   console.log('deleting cache')

//   // waitUntil
//   // caches.keys
//   // will give a Key List
//   // filter out APP_PREFIX (.map)
//   // make a keep list 
//   // if nothing in the keep list, delete item 
  
// })