/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2025-01-12/3c5e6b8a.html","13098534627ae829ac079c77da324724"],["/2025-01-14/87ed5d02.html","ad0271b147b41c55031173d9edf2c1e7"],["/2025-01-19/e909fe23.html","8409e66a204e56ca3f1936c140b43986"],["/2025-01-20/7cf51cd9.html","bf07c3cd7fead46ddc9a20c25ad9e089"],["/2025-01-24/4de01369.html","235c8831af9a5d585253c1271f6bbb5a"],["/2025-01-24/d6b8425a.html","f6c5c0cc2518a75e0b9637be366fbf35"],["/2025-01-24/d75529cd.html","dfae6c05bb98d182199bf67e03761e0d"],["/2025-01-28/5785bd01.html","38a88b34fd92e0571961e7ba72fd38aa"],["/2025-01-29/f1fbb368.html","5aa8f2c9613a1656259605cdd8f11c25"],["/2025-01-31/cd441837.html","a4264cd36cd7805531baeef4770e29f4"],["/2025-02-07/c19782db.html","902cffc4a44d33eec33b41eac9900958"],["/2025-02-14/613af252.html","97d08a8c1b6c4afe8181e4c1e7119873"],["/2025-02-14/9397d2f2.html","3d3dc33ee68e66991b5f67330bacd28b"],["/2025-02-21/8dbfe31c.html","2f7d182c1c92dac8e6721a07a57ab195"],["/2025-02-21/cf25575a.html","feffa94f57b4ccf697d555ce84291793"],["/2025-02-28/435c2042.html","d9fbbedd580ddc61432a57a4201610e5"],["/2025-03-07/5e4d0145.html","ddc67fb88407a80ec96ff9217df65187"],["/2025-03-14/63295c7f.html","e89d0fd50ea7755342cc1a7a1a7d9d9b"],["/2025-03-14/d63e661b.html","d70bff374a3e11695cf5b82312ffa0b5"],["/404/index.html","c0261cc8f0efbd30fa09badfca0310be"],["/about/index.html","a2ec4d9dfb0a5a73a3b0bbc782949b66"],["/archives/2025/01/index.html","777a967874de4381a72174466104c7ab"],["/archives/2025/02/index.html","4087bf2e6f63c0a6878156703bdebf7f"],["/archives/2025/03/index.html","1f0142dca91f028f8f891fe02bb57cd6"],["/archives/2025/index.html","28aa5a83d11cf99a1616aa23f4b6a1fa"],["/archives/2025/page/2/index.html","d2fd4ce3bc0d0b221b6971471670cb4d"],["/archives/index.html","537ec8169d4d1e96131abdfe935e4533"],["/archives/page/2/index.html","4166a62d4a14b1e17b36cdb9fcccd791"],["/categories/index.html","3eed68d7df07dab6c9093846e8e68c6e"],["/categories/数学/index.html","1d9a55062e794722fa64cd0142700c03"],["/categories/日常生活/index.html","10e63f884e55058150edf4f7fb890907"],["/categories/电子书/index.html","7450d35a95ce7ec07f3e1309812f52f1"],["/categories/电子书/page/2/index.html","f6eb36b4ea422705260ea459442d8da9"],["/charts/index.html","9dfed3423247b1f3ef3564315b232b04"],["/css/ancientPoetry.css","efbbd08e885112646e8c25b19f115796"],["/css/font.css","21d1c0589c7f66c41cf080a685fa49f1"],["/css/footer.css","73bcba9e02c0216f6cc564d2061e8dde"],["/css/ground-glass.css","a78ab5f7ed05b5bd00849ee8fffd14fd"],["/css/index.css","bd617f8a0f2bd7761463466790ce457d"],["/css/shuoshuo.css","b88f102b045c8505dcdedec18cbec7b4"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","56c87314a83c94a26f8fd5d55df56154"],["/gallery/大年初二/index.html","2ff84c26e5a230fa4eda2a87e4ab6415"],["/gallery/新年快乐！/index.html","a77902d6d6e945139e91a9bb0528b12c"],["/img/alipay.png","989853a2d467e60f240b501f4a6fab5a"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/wechat.png","014fa89c90e7fd667ae7ce7eb3f99905"],["/img/wechatcard.png","b5c6b229feadf044071636ee1fa94a74"],["/index.html","214e4be729e1f3f5aacd1a5d2ed40656"],["/js/duration.js","e09a0f61bd104a1895028cee921987af"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/link/index.html","a25cf94ed47507f7241670038f879c81"],["/live2dw/assets/assets/moc/hibiki.2048/texture_00.png","730252369524e7a1c21308cb84acd465"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/maintenance/index.html","8cc0532a88523fbbbc892e3928828193"],["/messageboard/index.html","dbf79d6443b88477497b66d0554e01ad"],["/page/2/index.html","3b362f633bd3b7bde8f7bfa010b24134"],["/playlist/index.html","4e56e0337e93334690fe06792a9067a8"],["/shuoshuo/index.html","48871a36ebe2b195ddae574028ebf077"],["/sw-register.js","546fac517163de196e0535993f688c2c"],["/tags/index.html","398dd3891a8fcb4e4bd3a1a9f9766ebe"],["/tags/几何/index.html","e5c54319aafe4708139c4af82d7a2731"],["/tags/数学/index.html","f5777194bf301a85bc5407aaf2b0b13c"],["/tags/电子书/index.html","f70ad8f7e45680f4f8b9cc28a165625d"],["/tags/电子书/page/2/index.html","9a89ed85ab01004dcecba856609da359"],["/tags/节日/index.html","dea95c716f9f6b98db2963c35785df80"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
