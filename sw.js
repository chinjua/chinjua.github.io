/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2025-01-12/3c5e6b8a.html","4f2bdb14e78cc03c34afc322ebc27c97"],["/2025-01-14/87ed5d02.html","5a7611ba3439250e121f20bbdf1a95f1"],["/2025-01-19/e909fe23.html","17d63e730be8d56360818e6d6cbe4a44"],["/2025-01-20/7cf51cd9.html","8cb6d9d4cb05942db67a82924640f1e5"],["/2025-01-24/4de01369.html","7eef4e1101ba96fafb852f2eebe204bf"],["/2025-01-24/d6b8425a.html","4a9fa1e59ffb72783183f6e45867f73e"],["/2025-01-24/d75529cd.html","5db7e1c8acea24c60a9b2c04c44d3d86"],["/2025-01-28/5785bd01.html","747d212e707464e9d25593d48e11d870"],["/2025-01-29/f1fbb368.html","054be8af69e2b2003ae7da6921a7350f"],["/2025-01-31/cd441837.html","bb32931fa8dc3a14af77e90f85829d2e"],["/2025-02-07/c19782db.html","abb6097737e4fdb3079747eea8c64d6c"],["/2025-02-14/613af252.html","e4819697016f73504d33aef8246b60a7"],["/2025-02-14/9397d2f2.html","4cc73023aab737785726970aee8bf977"],["/2025-02-21/8dbfe31c.html","29e98b451bdcc53724b2cced455db0fc"],["/2025-02-21/cf25575a.html","9386f1329acb2a4376bb5a23d501880b"],["/2025-02-28/435c2042.html","1d6bdc1c3a96f00664ac78c881064a73"],["/2025-03-07/5e4d0145.html","9adf30f07b0b9720a938be34a835b716"],["/2025-03-14/63295c7f.html","3f89be98e1657c717d3dd14d3701ed93"],["/2025-03-14/d63e661b.html","ea987d1340cdb919509bdefb45c3f6fa"],["/404/index.html","ca4cf26f432bbfa0989b3d483c6abf2c"],["/about/index.html","6e35719ec80f0b6bc2172f4cca0a4b60"],["/archives/2025/01/index.html","af464742d4e3492afd336dbc36677b53"],["/archives/2025/02/index.html","44ef5d8943c9f3fc91f87ae0e524a8e8"],["/archives/2025/03/index.html","4c4eca7434c92f09631f67187777e7e5"],["/archives/2025/index.html","c6ffb1603b1ded705740daa980d355c6"],["/archives/2025/page/2/index.html","2be1e6e220660fae7de7c0ba5ac4d27d"],["/archives/index.html","3cdd0a5a9eeaebb72c7298ba21122399"],["/archives/page/2/index.html","3c6b667793173b2f6dbdba24a7954c4b"],["/categories/index.html","a2cfca1c7cd8486490b560472820a598"],["/categories/数学/index.html","b6c75071785e0ab47dd3a8211fa6dddd"],["/categories/日常生活/index.html","a6e5d4ffc6ae978e5a5d75373a3a3206"],["/categories/电子书/index.html","f8cf3ddac6c97f92c0c47c1ef1f8ec4e"],["/categories/电子书/page/2/index.html","52dfc002b67306bf21fdb7bdd13496c2"],["/charts/index.html","a277893acc9b390e378808d5c8c8b205"],["/css/ancientPoetry.css","efbbd08e885112646e8c25b19f115796"],["/css/font.css","21d1c0589c7f66c41cf080a685fa49f1"],["/css/footer.css","73bcba9e02c0216f6cc564d2061e8dde"],["/css/ground-glass.css","a78ab5f7ed05b5bd00849ee8fffd14fd"],["/css/index.css","bd617f8a0f2bd7761463466790ce457d"],["/css/shuoshuo.css","b88f102b045c8505dcdedec18cbec7b4"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","9370abaf12f65639515e54133b7255fa"],["/gallery/大年初二/index.html","8cd6e996f42324e6827bb199096cb1eb"],["/gallery/新年快乐！/index.html","e6a128fba6acc6c22b0ff4919db4c7db"],["/img/alipay.png","989853a2d467e60f240b501f4a6fab5a"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/wechat.png","014fa89c90e7fd667ae7ce7eb3f99905"],["/img/wechatcard.png","b5c6b229feadf044071636ee1fa94a74"],["/index.html","a57337a8587c8e137722f2d03529f6f4"],["/js/duration.js","e09a0f61bd104a1895028cee921987af"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/link/index.html","6e7449e893538f37c7133f16bb3e0076"],["/live2dw/assets/assets/moc/hibiki.2048/texture_00.png","730252369524e7a1c21308cb84acd465"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/messageboard/index.html","2cbbd8efc09823ab6cb8d46a31f91d28"],["/page/2/index.html","c4edb0c4807e70e637725267693e147c"],["/playlist/index.html","525a6c694d186d2998e2fe49b71cd25a"],["/shuoshuo/index.html","94825632535340f476c610a64a2aa7cb"],["/sw-register.js","6fd09f99c2a524bcb8fb87eb98529c88"],["/tags/index.html","b8de09601ff336e3344784a044dffcc5"],["/tags/几何/index.html","9c15406fad757b7a6e4a735dbc9eb122"],["/tags/数学/index.html","faff4db744a8fc8b20c81c607468f081"],["/tags/电子书/index.html","0dfaf51cd87fc2b630aca6743dae8e5d"],["/tags/电子书/page/2/index.html","7f4b651182188f9f40a85adf95af9476"],["/tags/节日/index.html","430939c4c0e722b5018aaaec99b32c8a"]];
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
