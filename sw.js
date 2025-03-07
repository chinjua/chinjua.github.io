/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2025-01-12/3c5e6b8a.html","0cf5b577eeb260557e29ef3625cbeaf4"],["/2025-01-14/87ed5d02.html","aacd96ddde6b12a40bd98a79853fb7cb"],["/2025-01-19/e909fe23.html","f674b0150df5f58e6fedc065878fba6a"],["/2025-01-20/7cf51cd9.html","c9cb64ab0040c4877f90b2de5daad193"],["/2025-01-24/4de01369.html","ce77b42fd2cae8ffa43c16d90f562dda"],["/2025-01-24/d6b8425a.html","4fc25674898d24eebf51bb1b5191ca5b"],["/2025-01-24/d75529cd.html","dfe67c86b737a7f754c38d489b2cb211"],["/2025-01-28/5785bd01.html","71058ff37e8bf9d137e2cbcc47f971f4"],["/2025-01-29/f1fbb368.html","cbf0256f15e1535083cdca934966e6dd"],["/2025-01-31/cd441837.html","deefe95ee7bd2f5f858dab28ce7908a2"],["/2025-02-07/c19782db.html","7ecd5854844ac58d4b1c140a3a394db5"],["/2025-02-14/613af252.html","fb675a0181fa05815c2916d7a9f3baac"],["/2025-02-14/9397d2f2.html","bb0b04a83518074b154f73a532db8bb4"],["/2025-02-21/8dbfe31c.html","bcc93e914918749cfe4dfbbf21621896"],["/2025-02-21/cf25575a.html","89fbc41f16b0a0894185afcecd4e634c"],["/2025-02-28/435c2042.html","8bf8ce69e46ef78c6664c92fcbf31375"],["/2025-03-07/5e4d0145.html","0a4f2c2fe83e19bcb54f3df7d3a0bca8"],["/404/index.html","f1dc92dcdb0a0d44636bdc87e719755e"],["/about/index.html","10864808da85f88907332047f8b8042b"],["/archives/2025/01/index.html","4c621821e73b9dfccdf56db0319a1b32"],["/archives/2025/02/index.html","7c22e4b704ca287d8ce380f6dc292f08"],["/archives/2025/03/index.html","2beacc4ef0c633a35fa14bc4a5f5fe2a"],["/archives/2025/index.html","47bd0c6bcfe657ad4174e6a3a969648b"],["/archives/2025/page/2/index.html","3cc994bd52602c281bf6558179a478c2"],["/archives/index.html","873e8a40e3c32fc2c1c8ab8c2f8c92a0"],["/archives/page/2/index.html","7974e42c9cd8d9469a10229c2eb7eb82"],["/categories/index.html","a50144957dce3511fb7c278853f74d6e"],["/categories/数学/index.html","5a56a68c373934c062529fc08d9acd22"],["/categories/日常生活/index.html","28864539e2f736840c38554914e54c24"],["/categories/电子书/index.html","6ce69f8256550ae18d2043fe9a7324c3"],["/categories/电子书/page/2/index.html","61d04f047d75d362aca9ec4edcf04f7e"],["/charts/index.html","ee86d2cd0691cbc5049ed2e5cab1dc35"],["/css/ancientPoetry.css","efbbd08e885112646e8c25b19f115796"],["/css/font.css","21d1c0589c7f66c41cf080a685fa49f1"],["/css/footer.css","73bcba9e02c0216f6cc564d2061e8dde"],["/css/ground-glass.css","a78ab5f7ed05b5bd00849ee8fffd14fd"],["/css/index.css","bd617f8a0f2bd7761463466790ce457d"],["/css/shuoshuo.css","b88f102b045c8505dcdedec18cbec7b4"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","a08a350a0e8a0d3208346ba6fba432db"],["/gallery/大年初二/index.html","62d497e531a9242629debe84f87f2a89"],["/gallery/新年快乐！/index.html","9b2e1ce1175d231d76fdfd6fb27824b5"],["/img/alipay.png","989853a2d467e60f240b501f4a6fab5a"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/wechat.png","014fa89c90e7fd667ae7ce7eb3f99905"],["/img/wechatcard.png","b5c6b229feadf044071636ee1fa94a74"],["/index.html","4879755b5489fa6323fe93088512952d"],["/js/duration.js","e09a0f61bd104a1895028cee921987af"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/link/index.html","44f61a3870ab8c51d452d05ff475f85e"],["/live2dw/assets/assets/moc/hibiki.2048/texture_00.png","730252369524e7a1c21308cb84acd465"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/messageboard/index.html","da8451efbcd67a33c88739952eb88897"],["/page/2/index.html","e5b52cf655dacc7a47bb3f805bcc409d"],["/playlist/index.html","03d7583aeef287b7b0b27f98b7f67f25"],["/shuoshuo/index.html","51110d2372874630d7a43dc7b33b7734"],["/sw-register.js","22d6a5219759d482251890da72a9e2b6"],["/tags/index.html","1fd1bcf89a509becefa34b86ff0184f4"],["/tags/几何/index.html","1d014c726d64fceb9a44252f2955ca12"],["/tags/数学/index.html","1c7934a7dc77e04a79b190d2c6b9bdb3"],["/tags/电子书/index.html","a48dcca61dfd162f1aada91a700cf2c9"],["/tags/电子书/page/2/index.html","5cc1252c25fd913f6606e91b63f24067"],["/tags/节日/index.html","93271395d90a1e2e1d88beda981354af"]];
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
