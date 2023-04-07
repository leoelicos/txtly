import { warmStrategyCache } from 'workbox-recipes'
import { CacheFirst, StaleWhileRevalidate } from 'workbox-strategies'
import { registerRoute } from 'workbox-routing'
import { CacheableResponsePlugin } from 'workbox-cacheable-response'
import { ExpirationPlugin } from 'workbox-expiration'
import { precacheAndRoute } from 'workbox-precaching/precacheAndRoute'

precacheAndRoute(self.__WB_MANIFEST)

const pageCache = new CacheFirst({
  cacheName: 'page-cache',
  plugins: [
    new CacheableResponsePlugin({
      statuses: [0, 200]
    }),
    new ExpirationPlugin({
      maxAgeSeconds: 30 * 24 * 60 * 60
    })
  ]
})

warmStrategyCache({
  urls: ['/index.html', '/'],
  strategy: pageCache
})

registerRoute(({ request }) => request.mode === 'navigate', pageCache)

const cacheName = 'asset-cache'
const matchCallback = ({ request }) => ['style', 'script', 'worker'].includes(request.destination)
registerRoute(
  matchCallback,
  new StaleWhileRevalidate({
    cacheName,
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200]
      })
    ]
  })
)
