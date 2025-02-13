/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2025-01-12/3c5e6b8a.html","bb182692e323be6cec323469bd3f7fd0"],["/2025-01-14/87ed5d02.html","39d2b97c2f533f80707ba34dcf0f977a"],["/2025-01-19/e909fe23.html","8b7e4fd2bd8ec78b78eb59aa46900620"],["/2025-01-20/7cf51cd9.html","c5fba69c971a1fa0d00e88e49cd6d395"],["/2025-01-24/4de01369.html","d9ff35ec8b19d47c798365c229214d49"],["/2025-01-24/d6b8425a.html","99839dd1890e0af0be278f88b64328ad"],["/2025-01-24/d75529cd.html","f8c5f5e051b57463d32ad1b194d5c40f"],["/2025-01-28/5785bd01.html","08bee60df1fc9180ba7e9a154f40b352"],["/2025-01-29/f1fbb368.html","b0cb408430455ad41e479f37dd01921d"],["/2025-01-31/cd441837.html","16c6760c2bcc851f2b4a90a4eaef897d"],["/2025-02-07/c19782db.html","f393f899d204fc68e3924d501917e1eb"],["/404/index.html","e26cdf6e7b5543a4e5f956dbe3675d09"],["/about/index.html","dcdebf1492fc7640abd301634e1b4d77"],["/archives/2025/01/index.html","5d3060d617e20359436475fc2882d290"],["/archives/2025/02/index.html","0a8ed3a70ed325847014bd2711a95750"],["/archives/2025/index.html","0b759d0f5ef6245713f530b7373e42b6"],["/archives/2025/page/2/index.html","e363f6cc6bac1de05b6fb35d1a99f8f4"],["/archives/index.html","a839bdbb912c1c1fe31087b476344c20"],["/archives/page/2/index.html","9cf219424723e87c7b53ea92f88a7a1d"],["/categories/index.html","c071c614ef227ad47a1d6490298fb36d"],["/categories/数学/index.html","c0bcb16232dccb93581dca9e00e24155"],["/categories/日常生活/index.html","ac969d094bd342653850bd8fae239b66"],["/categories/电子书/index.html","6ac02a760455e69d405fdd524934e7d3"],["/charts/index.html","1b789dde43a0441485242e1ed0d27931"],["/css/ancientPoetry.css","efbbd08e885112646e8c25b19f115796"],["/css/font.css","21d1c0589c7f66c41cf080a685fa49f1"],["/css/footer.css","73bcba9e02c0216f6cc564d2061e8dde"],["/css/ground-glass.css","e9aba199658f7e5e4afb60fd6a855bac"],["/css/index.css","3a389a7441ce175a6f088828ec525077"],["/css/shuoshuo.css","b88f102b045c8505dcdedec18cbec7b4"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","7804a2371a312866f50887e01056fbf7"],["/gallery/大年初二/index.html","7132c02d35f785f9909459d83eebb970"],["/gallery/新年快乐！/index.html","7a84bf64e7b345b0c8b8036853313dab"],["/img/alipay.png","989853a2d467e60f240b501f4a6fab5a"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/wechat.png","014fa89c90e7fd667ae7ce7eb3f99905"],["/img/wechatcard.png","b5c6b229feadf044071636ee1fa94a74"],["/index.html","40d4bc44b8ecb2474edc17ca7726e512"],["/js/duration.js","7dcd56afb881b615bb7f6361cf81f11c"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/link/index.html","ff29ad2a8fa0bfa45f45decdf839c55b"],["/live2dw/assets/assets/moc/hibiki.2048/texture_00.png","730252369524e7a1c21308cb84acd465"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/messageboard/index.html","253916847ca9f28c3bb238f241a44e1a"],["/page/2/index.html","6f748ddfb925be2dbe2f107fea634762"],["/playlist/index.html","0bc8f2e6bf2e496bde5618e9e9e28785"],["/shuoshuo/index.html","c165bebe64f3eaa3243da7c062046cf5"],["/sw-register.js","b28e61aeff3ccb28010616f19ee4f2e0"],["/tags/index.html","383201e9914615e7d93e595bf17875a4"],["/tags/几何/index.html","d331f9ac7bb3e42046ff7be37ae0cd64"],["/tags/数学/index.html","93d1f941406a56a48ad78b9375ec73c7"],["/tags/电子书/index.html","1ea263dd926787b1dab5502f4971725a"]];
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
