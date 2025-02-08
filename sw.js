/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2025/01/12/出售电子书/index.html","5812a5f0e9ed1c6829f1ee7d6f797927"],["/2025/01/14/2025-01-14  新增电子书/index.html","d2b518664e4da52f15d9fa869435b4eb"],["/2025/01/19/1无理数次方/index.html","dea9c87e18fa9893317bb465e0ef0b2e"],["/2025/01/20/电子书资源的处理流程/index.html","1b3775d9f5a264f342f00b6990269e46"],["/2025/01/24/2025-01-24  新增电子书/index.html","037e49f5d2e3f8b26ea69417bf84afd0"],["/2025/01/24/一元四次方程的解法：费拉里法/index.html","0fee1a5c27d88aaa742b7ede40161f94"],["/2025/01/24/如何平分四边形面积/index.html","6209022f3aa5ba8f995a0d6983142944"],["/2025/01/28/新年快乐！/index.html","1055c827d1b224a6ba6e564d69499c37"],["/2025/01/29/晒一下照片/index.html","c1dd70f9ab8eab770ddd26f2acca684f"],["/2025/01/31/2025-01-31  新增电子书/index.html","47f2de30e464eda720aac800b7238fc2"],["/2025/02/07/2025-02-07  新增电子书/index.html","9abfef3c49d7fa99c6ad18a18ed494ce"],["/404/index.html","903647ab83db69f071d46a1a50e49b15"],["/about/index.html","1a3a2f70e47f855fb1e5a12f2f94842a"],["/archives/2025/01/index.html","a19074c8443a1be775a2db12e34495ff"],["/archives/2025/02/index.html","789192fd31362c396b6bc161702d794e"],["/archives/2025/index.html","3965cc3f86ec2adc5337e1dced4320b1"],["/archives/2025/page/2/index.html","0ed2dd5b97b76bd710049a66fadfbedc"],["/archives/index.html","fce8c6ac99861260009f5dd96cedc35f"],["/archives/page/2/index.html","93b0216161cda497ac281285c0e01cf7"],["/categories/index.html","284d00d4fc95765678875297e7860c29"],["/categories/数学/index.html","60c83e70b585c28a08afeb580c5c9dbd"],["/categories/日常生活/index.html","a11758f3af692cc24b99bc2a043220dc"],["/categories/电子书/index.html","c3a7740705b1d533dfb4375c9511ffd7"],["/charts/index.html","bd78401b1c045e477e8d750eb3bdd218"],["/css/ancientPoetry.css","efbbd08e885112646e8c25b19f115796"],["/css/font.css","54d494c34f1d90756712ba9404b1d065"],["/css/footer.css","73bcba9e02c0216f6cc564d2061e8dde"],["/css/ground-glass.css","e9aba199658f7e5e4afb60fd6a855bac"],["/css/index.css","3a389a7441ce175a6f088828ec525077"],["/css/shuoshuo.css","b88f102b045c8505dcdedec18cbec7b4"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","ffcbf72e12b8abe5192b4a11acad72f7"],["/gallery/大年初二/index.html","1300612646c2862e0db0cc00d1e88906"],["/gallery/新年快乐！/index.html","249e81e3c111cef2c39f1f07b4b575ae"],["/img/alipay.png","989853a2d467e60f240b501f4a6fab5a"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/wechat.png","014fa89c90e7fd667ae7ce7eb3f99905"],["/img/wechatcard.png","b5c6b229feadf044071636ee1fa94a74"],["/index.html","3cdbce67ef02af4e74ac0609c570b949"],["/js/duration.js","7dcd56afb881b615bb7f6361cf81f11c"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/link/index.html","1ecc9f4921ed609ff584048d43c71376"],["/messageboard/index.html","474a47dc5b6b43687be305965f1410f5"],["/page/2/index.html","28405280c0f56fe0d331396b5b00c59c"],["/playlist/index.html","1d7bff02f52b1313a89b869de712db49"],["/shuoshuo/index.html","420d084f3c09dd2d483045f367fbc809"],["/sw-register.js","f43d0ad144e223adf4b0247c01cfdaab"],["/tags/index.html","3e7d009c6a1015920a31bb6927fbb6d0"],["/tags/几何/index.html","af8476119f735bb00ed7e7e6f406a5b8"],["/tags/数学/index.html","47899f73660ae69ee920498aad8bf454"],["/tags/电子书/index.html","e9261775cc4060637eea70c6474597a5"]];
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
