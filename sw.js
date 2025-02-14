/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2025-01-12/3c5e6b8a.html","031769651a3db70532aeb4d7a045f26d"],["/2025-01-14/87ed5d02.html","699709d4242f1da9564fbef95e428814"],["/2025-01-19/e909fe23.html","11333d22dfcc0edb5be1eee0fda914af"],["/2025-01-20/7cf51cd9.html","e52dcd7f638134e5a474fb258c00114d"],["/2025-01-24/4de01369.html","167eb1c2eae3d8ac5455dbfdd47cc376"],["/2025-01-24/d6b8425a.html","bba6e9a2302ddf3da2bef798f6e536c8"],["/2025-01-24/d75529cd.html","c82229eb1136d98cc94b5525bb612dba"],["/2025-01-28/5785bd01.html","abf6ca2b433d9e7eb1853ac76ca78950"],["/2025-01-29/f1fbb368.html","17f10cc8aa45d6de83ba61bed8850ca5"],["/2025-01-31/cd441837.html","6c45be4c489f9a173237cb666be57bc6"],["/2025-02-07/c19782db.html","cba5dd52fd10d391e31404ecb9dbd991"],["/2025-02-14/613af252.html","9b337528ac42807489fe2263f315b5ed"],["/2025-02-14/9397d2f2.html","b949a88fcabc0d200d83658fb5147ba0"],["/404/index.html","59084b036c293acc07cafb1d27d00914"],["/about/index.html","de9de00ce5ca7f544ead81bd1a2e6625"],["/archives/2025/01/index.html","bc00d3cee206ba7796798a6413eabb30"],["/archives/2025/02/index.html","08e9e7ca5cac575320eae4a1035a2601"],["/archives/2025/index.html","6ebad99b9305f1df20f9e2a839d54218"],["/archives/2025/page/2/index.html","be724d9acbd1de29c15d1ba09512d4ad"],["/archives/index.html","0d0abe1ccc4aa06b600e87bb89075f9e"],["/archives/page/2/index.html","19b2ba517af84828817f6678a03f32a6"],["/categories/index.html","902cc25fc676a2484aa34c8f7e559706"],["/categories/数学/index.html","6275915dc08fe1154bad31bff1ca2b27"],["/categories/日常生活/index.html","2b07c9bfa08a06c4778d29fd0eb7872d"],["/categories/电子书/index.html","ed4ce3eb13feb612f29ff0b9774882f4"],["/charts/index.html","a97809adcab77ca0e6757d9bbb68bee9"],["/css/ancientPoetry.css","efbbd08e885112646e8c25b19f115796"],["/css/font.css","21d1c0589c7f66c41cf080a685fa49f1"],["/css/footer.css","73bcba9e02c0216f6cc564d2061e8dde"],["/css/ground-glass.css","e9aba199658f7e5e4afb60fd6a855bac"],["/css/index.css","3a389a7441ce175a6f088828ec525077"],["/css/shuoshuo.css","b88f102b045c8505dcdedec18cbec7b4"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","e27533429c1143ae0f7b179097a29c6e"],["/gallery/大年初二/index.html","d65e85c5972d9d21fd1f059d8163a486"],["/gallery/新年快乐！/index.html","a59444049aaf781a64f7033ea2861eff"],["/img/alipay.png","989853a2d467e60f240b501f4a6fab5a"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/wechat.png","014fa89c90e7fd667ae7ce7eb3f99905"],["/img/wechatcard.png","b5c6b229feadf044071636ee1fa94a74"],["/index.html","13377da37048d46bcd0e8534ad79f390"],["/js/duration.js","7dcd56afb881b615bb7f6361cf81f11c"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/link/index.html","e4a14a0303f34e2700a289da3c3d9f27"],["/live2dw/assets/assets/moc/hibiki.2048/texture_00.png","730252369524e7a1c21308cb84acd465"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/messageboard/index.html","932b3796ebdb2434d1545f0d800c7e07"],["/page/2/index.html","2877629fefae50a3c2d9360758b752ef"],["/playlist/index.html","0f02f4e1b81d43c161ddfc2dfedcef26"],["/shuoshuo/index.html","233bfecd4d12aaf7e438f23b7e0236b5"],["/sw-register.js","83e4ac1b74cc79d3f9fc2fd2dbfd05db"],["/tags/index.html","6ae5365f0a0455e438f9fcbf91f820da"],["/tags/元宵节/index.html","cf45e99d4f63207a53b2a0495bbcb168"],["/tags/几何/index.html","17a91ff40c69a0358c8b6b6c7e818ab5"],["/tags/数学/index.html","26d02dc715ef725b2411ef96cbf43f3e"],["/tags/电子书/index.html","eef4042416cad1b1ecbd1eaf1d4527d7"]];
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
