/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/select-philippines-address/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/select-philippines-address/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const axios = __webpack_require__(/*! axios */ "./node_modules/select-philippines-address/node_modules/axios/index.js");

const fetch = (jsonPathName) => axios.get(`https://isaacdarcilla.github.io/philippine-addresses/${jsonPathName}.json`);

/**
 * @param NULL
 * @returns all regions
 */
const regions = async () => {
    try {
        const regions = await fetch('region');
        return regions.data.map((region) => {
            return {
                id: region.id,
                psgc_code: region.psgc_code,
                region_name: region.region_name,
                region_code: region.region_code
            };
        })
    } catch (e) {
        return e.message;
    }
};

/**
 * @param REGION_CODE
 * @returns region base on region code parameter.
 */
const regionByCode = async (code) => {
    try {
        const regions = await fetch('region');
        return regions.data.find( ({region_code}) => region_code === code)
    } catch (e) {
        return e.message;
    }
};

/** Default
 * @param REGION_CODE
 * @returns all provinces base on region code parameter.
 */
const provinces = async (code) => {
    try {
        const provinces = await fetch('province');
        return provinces.data.filter(province => province.region_code === code)
            .map((filtered) => {
                return {
                    psgc_code: filtered.psgc_code,
                    province_name: filtered.province_name,
                    province_code: filtered.province_code,
                    region_code: filtered.region_code
                };
            });
    } catch (e) {
        return e.message;
    }
};

/**
 * @param REGION_CODE
 * @returns all provinces base on region code parameter.
 */
const provincesByCode = async (code) => {
    try {
        const provinces = await fetch('province');
        return provinces.data.filter(province => province.region_code === code)
            .map((filtered) => {
                return {
                    psgc_code: filtered.psgc_code,
                    province_name: filtered.province_name,
                    province_code: filtered.province_code,
                    region_code: filtered.region_code
                };
            });
    } catch (e) {
        return e.message;
    }
};

/**
 * @param PROVINCE_NAME
 * @returns province base on province name parameter.
 */
const provinceByName = async (name) => {
    try {
        const provinces = await fetch('province');
        return provinces.data.find( ({province_name}) => province_name === name)
    } catch (e) {
        return e.message;
    }
};

/**
 * @param PROVINCE_CODE
 * @returns all cities base on province code parameter.
 */
const cities = async (code) => {
    try {
        const cities = await fetch('city');
        return cities.data.filter(city => city.province_code === code)
            .map((filtered) => {
                return {
                    city_name: filtered.city_name,
                    city_code: filtered.city_code,
                    province_code: filtered.province_code,
                    region_desc: filtered.region_desc,
                };
            });
    } catch (e) {
        return e.message;
    }
};

/**
 * @param CITY_CODE
 * @returns all barangays base on city code parameter.
 */
const barangays = async (code) => {
    try {
        const barangays = await fetch('barangay')
        return barangays.data.filter(barangay => barangay.city_code === code)
            .map((filtered) => {
                return {
                    brgy_name: filtered.brgy_name,
                    brgy_code: filtered.brgy_code,
                    province_code: filtered.province_code,
                    region_code: filtered.region_code,
                };
            });
    } catch (e) {
        return e.message;
    }
};

module.exports = { regions, regionByCode, provinces, provincesByCode, provinceByName, cities, barangays };

/***/ }),

/***/ "./node_modules/select-philippines-address/node_modules/axios/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/select-philippines-address/node_modules/axios/index.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/select-philippines-address/node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/select-philippines-address/node_modules/axios/lib/adapters/xhr.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/select-philippines-address/node_modules/axios/lib/adapters/xhr.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/select-philippines-address/node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/select-philippines-address/node_modules/axios/lib/core/settle.js");
var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/select-philippines-address/node_modules/axios/lib/helpers/cookies.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/select-philippines-address/node_modules/axios/lib/helpers/buildURL.js");
var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ "./node_modules/select-philippines-address/node_modules/axios/lib/core/buildFullPath.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/select-philippines-address/node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/select-philippines-address/node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/select-philippines-address/node_modules/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;
    var responseType = config.responseType;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !responseType || responseType === 'text' ||  responseType === 'json' ?
        request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(
        timeoutErrorMessage,
        config,
        config.transitional && config.transitional.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/select-philippines-address/node_modules/axios/lib/axios.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/select-philippines-address/node_modules/axios/lib/axios.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/select-philippines-address/node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/select-philippines-address/node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/select-philippines-address/node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/select-philippines-address/node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/select-philippines-address/node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/select-philippines-address/node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/select-philippines-address/node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/select-philippines-address/node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/select-philippines-address/node_modules/axios/lib/helpers/spread.js");

// Expose isAxiosError
axios.isAxiosError = __webpack_require__(/*! ./helpers/isAxiosError */ "./node_modules/select-philippines-address/node_modules/axios/lib/helpers/isAxiosError.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "./node_modules/select-philippines-address/node_modules/axios/lib/cancel/Cancel.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/select-philippines-address/node_modules/axios/lib/cancel/Cancel.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/select-philippines-address/node_modules/axios/lib/cancel/CancelToken.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/select-philippines-address/node_modules/axios/lib/cancel/CancelToken.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/select-philippines-address/node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/select-philippines-address/node_modules/axios/lib/cancel/isCancel.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/select-philippines-address/node_modules/axios/lib/cancel/isCancel.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/select-philippines-address/node_modules/axios/lib/core/Axios.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/select-philippines-address/node_modules/axios/lib/core/Axios.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/select-philippines-address/node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/select-philippines-address/node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/select-philippines-address/node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/select-philippines-address/node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/select-philippines-address/node_modules/axios/lib/core/mergeConfig.js");
var validator = __webpack_require__(/*! ../helpers/validator */ "./node_modules/select-philippines-address/node_modules/axios/lib/helpers/validator.js");

var validators = validator.validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  var transitional = config.transitional;

  if (transitional !== undefined) {
    validator.assertOptions(transitional, {
      silentJSONParsing: validators.transitional(validators.boolean, '1.0.0'),
      forcedJSONParsing: validators.transitional(validators.boolean, '1.0.0'),
      clarifyTimeoutError: validators.transitional(validators.boolean, '1.0.0')
    }, false);
  }

  // filter out skipped interceptors
  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
      return;
    }

    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
  });

  var promise;

  if (!synchronousRequestInterceptors) {
    var chain = [dispatchRequest, undefined];

    Array.prototype.unshift.apply(chain, requestInterceptorChain);
    chain = chain.concat(responseInterceptorChain);

    promise = Promise.resolve(config);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }

    return promise;
  }


  var newConfig = config;
  while (requestInterceptorChain.length) {
    var onFulfilled = requestInterceptorChain.shift();
    var onRejected = requestInterceptorChain.shift();
    try {
      newConfig = onFulfilled(newConfig);
    } catch (error) {
      onRejected(error);
      break;
    }
  }

  try {
    promise = dispatchRequest(newConfig);
  } catch (error) {
    return Promise.reject(error);
  }

  while (responseInterceptorChain.length) {
    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/select-philippines-address/node_modules/axios/lib/core/InterceptorManager.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/select-philippines-address/node_modules/axios/lib/core/InterceptorManager.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/select-philippines-address/node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected,
    synchronous: options ? options.synchronous : false,
    runWhen: options ? options.runWhen : null
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/select-philippines-address/node_modules/axios/lib/core/buildFullPath.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/select-philippines-address/node_modules/axios/lib/core/buildFullPath.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ "./node_modules/select-philippines-address/node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ "./node_modules/select-philippines-address/node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ "./node_modules/select-philippines-address/node_modules/axios/lib/core/createError.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/select-philippines-address/node_modules/axios/lib/core/createError.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/select-philippines-address/node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/select-philippines-address/node_modules/axios/lib/core/dispatchRequest.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/select-philippines-address/node_modules/axios/lib/core/dispatchRequest.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/select-philippines-address/node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/select-philippines-address/node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/select-philippines-address/node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/select-philippines-address/node_modules/axios/lib/defaults.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData.call(
    config,
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/select-philippines-address/node_modules/axios/lib/core/enhanceError.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/select-philippines-address/node_modules/axios/lib/core/enhanceError.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ "./node_modules/select-philippines-address/node_modules/axios/lib/core/mergeConfig.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/select-philippines-address/node_modules/axios/lib/core/mergeConfig.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/select-philippines-address/node_modules/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
  var defaultToConfig2Keys = [
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',
    'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'
  ];
  var directMergeKeys = ['validateStatus'];

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  }

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  utils.forEach(directMergeKeys, function merge(prop) {
    if (prop in config2) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys)
    .concat(directMergeKeys);

  var otherKeys = Object
    .keys(config1)
    .concat(Object.keys(config2))
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, mergeDeepProperties);

  return config;
};


/***/ }),

/***/ "./node_modules/select-philippines-address/node_modules/axios/lib/core/settle.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/select-philippines-address/node_modules/axios/lib/core/settle.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/select-philippines-address/node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/select-philippines-address/node_modules/axios/lib/core/transformData.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/select-philippines-address/node_modules/axios/lib/core/transformData.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/select-philippines-address/node_modules/axios/lib/utils.js");
var defaults = __webpack_require__(/*! ./../defaults */ "./node_modules/select-philippines-address/node_modules/axios/lib/defaults.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  var context = this || defaults;
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn.call(context, data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/select-philippines-address/node_modules/axios/lib/defaults.js":
/*!************************************************************************************!*\
  !*** ./node_modules/select-philippines-address/node_modules/axios/lib/defaults.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ "./node_modules/select-philippines-address/node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/select-philippines-address/node_modules/axios/lib/helpers/normalizeHeaderName.js");
var enhanceError = __webpack_require__(/*! ./core/enhanceError */ "./node_modules/select-philippines-address/node_modules/axios/lib/core/enhanceError.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/select-philippines-address/node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/select-philippines-address/node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

function stringifySafely(rawValue, parser, encoder) {
  if (utils.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

var defaults = {

  transitional: {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  },

  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');

    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data) || (headers && headers['Content-Type'] === 'application/json')) {
      setContentTypeIfUnset(headers, 'application/json');
      return stringifySafely(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    var transitional = this.transitional;
    var silentJSONParsing = transitional && transitional.silentJSONParsing;
    var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';

    if (strictJSONParsing || (forcedJSONParsing && utils.isString(data) && data.length)) {
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw enhanceError(e, this, 'E_JSON_PARSE');
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/select-philippines-address/node_modules/axios/lib/helpers/bind.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/select-philippines-address/node_modules/axios/lib/helpers/bind.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/select-philippines-address/node_modules/axios/lib/helpers/buildURL.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/select-philippines-address/node_modules/axios/lib/helpers/buildURL.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/select-philippines-address/node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/select-philippines-address/node_modules/axios/lib/helpers/combineURLs.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/select-philippines-address/node_modules/axios/lib/helpers/combineURLs.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/select-philippines-address/node_modules/axios/lib/helpers/cookies.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/select-philippines-address/node_modules/axios/lib/helpers/cookies.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/select-philippines-address/node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "./node_modules/select-philippines-address/node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/select-philippines-address/node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/select-philippines-address/node_modules/axios/lib/helpers/isAxiosError.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/select-philippines-address/node_modules/axios/lib/helpers/isAxiosError.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
module.exports = function isAxiosError(payload) {
  return (typeof payload === 'object') && (payload.isAxiosError === true);
};


/***/ }),

/***/ "./node_modules/select-philippines-address/node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/select-philippines-address/node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/select-philippines-address/node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "./node_modules/select-philippines-address/node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/select-philippines-address/node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/select-philippines-address/node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/select-philippines-address/node_modules/axios/lib/helpers/parseHeaders.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/select-philippines-address/node_modules/axios/lib/helpers/parseHeaders.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/select-philippines-address/node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/select-philippines-address/node_modules/axios/lib/helpers/spread.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/select-philippines-address/node_modules/axios/lib/helpers/spread.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/select-philippines-address/node_modules/axios/lib/helpers/validator.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/select-philippines-address/node_modules/axios/lib/helpers/validator.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var pkg = __webpack_require__(/*! ./../../package.json */ "./node_modules/select-philippines-address/node_modules/axios/package.json");

var validators = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function(type, i) {
  validators[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

var deprecatedWarnings = {};
var currentVerArr = pkg.version.split('.');

/**
 * Compare package versions
 * @param {string} version
 * @param {string?} thanVersion
 * @returns {boolean}
 */
function isOlderVersion(version, thanVersion) {
  var pkgVersionArr = thanVersion ? thanVersion.split('.') : currentVerArr;
  var destVer = version.split('.');
  for (var i = 0; i < 3; i++) {
    if (pkgVersionArr[i] > destVer[i]) {
      return true;
    } else if (pkgVersionArr[i] < destVer[i]) {
      return false;
    }
  }
  return false;
}

/**
 * Transitional option validator
 * @param {function|boolean?} validator
 * @param {string?} version
 * @param {string} message
 * @returns {function}
 */
validators.transitional = function transitional(validator, version, message) {
  var isDeprecated = version && isOlderVersion(version);

  function formatMessage(opt, desc) {
    return '[Axios v' + pkg.version + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return function(value, opt, opts) {
    if (validator === false) {
      throw new Error(formatMessage(opt, ' has been removed in ' + version));
    }

    if (isDeprecated && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new TypeError('options must be an object');
  }
  var keys = Object.keys(options);
  var i = keys.length;
  while (i-- > 0) {
    var opt = keys[i];
    var validator = schema[opt];
    if (validator) {
      var value = options[opt];
      var result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new TypeError('option ' + opt + ' must be ' + result);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw Error('Unknown option ' + opt);
    }
  }
}

module.exports = {
  isOlderVersion: isOlderVersion,
  assertOptions: assertOptions,
  validators: validators
};


/***/ }),

/***/ "./node_modules/select-philippines-address/node_modules/axios/lib/utils.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/select-philippines-address/node_modules/axios/lib/utils.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/select-philippines-address/node_modules/axios/lib/helpers/bind.js");

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};


/***/ }),

/***/ "./node_modules/select-philippines-address/node_modules/axios/package.json":
/*!*********************************************************************************!*\
  !*** ./node_modules/select-philippines-address/node_modules/axios/package.json ***!
  \*********************************************************************************/
/*! exports provided: name, version, description, main, scripts, repository, keywords, author, license, bugs, homepage, devDependencies, browser, jsdelivr, unpkg, typings, dependencies, bundlesize, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"axios\",\"version\":\"0.21.4\",\"description\":\"Promise based HTTP client for the browser and node.js\",\"main\":\"index.js\",\"scripts\":{\"test\":\"grunt test\",\"start\":\"node ./sandbox/server.js\",\"build\":\"NODE_ENV=production grunt build\",\"preversion\":\"npm test\",\"version\":\"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json\",\"postversion\":\"git push && git push --tags\",\"examples\":\"node ./examples/server.js\",\"coveralls\":\"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js\",\"fix\":\"eslint --fix lib/**/*.js\"},\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/axios/axios.git\"},\"keywords\":[\"xhr\",\"http\",\"ajax\",\"promise\",\"node\"],\"author\":\"Matt Zabriskie\",\"license\":\"MIT\",\"bugs\":{\"url\":\"https://github.com/axios/axios/issues\"},\"homepage\":\"https://axios-http.com\",\"devDependencies\":{\"coveralls\":\"^3.0.0\",\"es6-promise\":\"^4.2.4\",\"grunt\":\"^1.3.0\",\"grunt-banner\":\"^0.6.0\",\"grunt-cli\":\"^1.2.0\",\"grunt-contrib-clean\":\"^1.1.0\",\"grunt-contrib-watch\":\"^1.0.0\",\"grunt-eslint\":\"^23.0.0\",\"grunt-karma\":\"^4.0.0\",\"grunt-mocha-test\":\"^0.13.3\",\"grunt-ts\":\"^6.0.0-beta.19\",\"grunt-webpack\":\"^4.0.2\",\"istanbul-instrumenter-loader\":\"^1.0.0\",\"jasmine-core\":\"^2.4.1\",\"karma\":\"^6.3.2\",\"karma-chrome-launcher\":\"^3.1.0\",\"karma-firefox-launcher\":\"^2.1.0\",\"karma-jasmine\":\"^1.1.1\",\"karma-jasmine-ajax\":\"^0.1.13\",\"karma-safari-launcher\":\"^1.0.0\",\"karma-sauce-launcher\":\"^4.3.6\",\"karma-sinon\":\"^1.0.5\",\"karma-sourcemap-loader\":\"^0.3.8\",\"karma-webpack\":\"^4.0.2\",\"load-grunt-tasks\":\"^3.5.2\",\"minimist\":\"^1.2.0\",\"mocha\":\"^8.2.1\",\"sinon\":\"^4.5.0\",\"terser-webpack-plugin\":\"^4.2.3\",\"typescript\":\"^4.0.5\",\"url-search-params\":\"^0.10.0\",\"webpack\":\"^4.44.2\",\"webpack-dev-server\":\"^3.11.0\"},\"browser\":{\"./lib/adapters/http.js\":\"./lib/adapters/xhr.js\"},\"jsdelivr\":\"dist/axios.min.js\",\"unpkg\":\"dist/axios.min.js\",\"typings\":\"./index.d.ts\",\"dependencies\":{\"follow-redirects\":\"^1.14.0\"},\"bundlesize\":[{\"path\":\"./dist/axios.min.js\",\"threshold\":\"5kB\"}]}");

/***/ }),

/***/ "./node_modules/zipcodes-ph/build/index.js":
/*!*************************************************!*\
  !*** ./node_modules/zipcodes-ph/build/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _zipcodes = __webpack_require__(/*! ./zipcodes.json */ "./node_modules/zipcodes-ph/build/zipcodes.json");

var _zipcodes2 = _interopRequireDefault(_zipcodes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    find: function find(zipcode) {
        return _zipcodes2.default[zipcode] || null;
    },
    reverse: function reverse(location) {
        return Object.keys(_zipcodes2.default).find(function (zipcode) {
            var value = _zipcodes2.default[zipcode];
            if (typeof value === 'string') {
                return value === location;
            }
            return value.includes(location);
        }) || null;
    }
};

/***/ }),

/***/ "./node_modules/zipcodes-ph/build/zipcodes.json":
/*!******************************************************!*\
  !*** ./node_modules/zipcodes-ph/build/zipcodes.json ***!
  \******************************************************/
/*! exports provided: 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1100, 1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110, 1111, 1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1200, 1201, 1202, 1203, 1204, 1205, 1206, 1207, 1208, 1209, 1210, 1211, 1212, 1213, 1214, 1215, 1216, 1217, 1218, 1219, 1220, 1221, 1222, 1223, 1224, 1225, 1226, 1227, 1228, 1229, 1230, 1231, 1232, 1233, 1234, 1235, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1400, 1401, 1402, 1403, 1404, 1405, 1406, 1407, 1408, 1409, 1410, 1411, 1412, 1413, 1420, 1421, 1422, 1423, 1424, 1425, 1426, 1427, 1428, 1440, 1441, 1442, 1443, 1444, 1445, 1446, 1447, 1448, 1470, 1471, 1472, 1473, 1474, 1475, 1476, 1477, 1478, 1479, 1480, 1485, 1489, 1490, 1496, 1500, 1502, 1503, 1504, 1550, 1551, 1552, 1553, 1554, 1555, 1556, 1600, 1601, 1602, 1603, 1604, 1605, 1606, 1607, 1608, 1609, 1610, 1611, 1612, 1620, 1621, 1630, 1631, 1632, 1633, 1634, 1636, 1637, 1638, 1700, 1701, 1702, 1703, 1704, 1705, 1706, 1707, 1708, 1709, 1710, 1711, 1712, 1713, 1714, 1715, 1716, 1717, 1718, 1719, 1720, 1740, 1741, 1742, 1743, 1744, 1745, 1746, 1747, 1748, 1749, 1750, 1751, 1752, 1770, 1771, 1772, 1773, 1774, 1775, 1776, 1777, 1780, 1781, 1799, 1800, 1801, 1802, 1803, 1804, 1805, 1806, 1807, 1808, 1809, 1810, 1811, 1820, 1850, 1860, 1870, 1880, 1900, 1910, 1920, 1930, 1940, 1950, 1960, 1970, 1980, 1990, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2100, 2101, 2102, 2103, 2104, 2105, 2106, 2107, 2108, 2109, 2110, 2111, 2112, 2113, 2114, 2200, 2201, 2202, 2203, 2204, 2205, 2206, 2207, 2208, 2209, 2210, 2211, 2212, 2213, 2300, 2301, 2302, 2303, 2304, 2305, 2306, 2307, 2308, 2309, 2310, 2311, 2312, 2313, 2314, 2315, 2316, 2317, 2400, 2401, 2402, 2403, 2404, 2405, 2406, 2407, 2408, 2409, 2410, 2411, 2412, 2413, 2414, 2415, 2416, 2417, 2418, 2419, 2420, 2421, 2422, 2423, 2424, 2425, 2426, 2427, 2428, 2429, 2430, 2431, 2432, 2433, 2434, 2435, 2436, 2437, 2438, 2439, 2440, 2441, 2442, 2443, 2444, 2445, 2446, 2447, 2500, 2501, 2502, 2503, 2504, 2505, 2506, 2507, 2508, 2509, 2510, 2511, 2512, 2513, 2514, 2515, 2516, 2517, 2518, 2519, 2520, 2600, 2601, 2602, 2603, 2604, 2605, 2606, 2607, 2608, 2609, 2610, 2611, 2612, 2613, 2614, 2615, 2616, 2617, 2618, 2619, 2620, 2621, 2622, 2623, 2624, 2625, 2700, 2701, 2702, 2703, 2704, 2705, 2706, 2707, 2708, 2709, 2710, 2711, 2712, 2713, 2714, 2715, 2716, 2717, 2718, 2719, 2720, 2721, 2722, 2723, 2724, 2725, 2726, 2727, 2728, 2729, 2730, 2731, 2732, 2733, 2800, 2801, 2802, 2803, 2804, 2805, 2806, 2807, 2808, 2809, 2810, 2811, 2812, 2813, 2814, 2815, 2816, 2817, 2818, 2819, 2820, 2821, 2822, 2823, 2824, 2825, 2826, 2900, 2901, 2902, 2903, 2904, 2905, 2906, 2907, 2908, 2909, 2910, 2911, 2912, 2913, 2914, 2915, 2916, 2917, 2918, 2919, 2920, 2921, 2922, 3000, 3001, 3002, 3003, 3004, 3005, 3006, 3007, 3008, 3009, 3010, 3011, 3012, 3013, 3014, 3015, 3016, 3017, 3018, 3019, 3020, 3021, 3022, 3023, 3024, 3100, 3101, 3102, 3103, 3104, 3105, 3106, 3107, 3108, 3109, 3110, 3111, 3112, 3113, 3114, 3115, 3116, 3117, 3118, 3119, 3120, 3121, 3122, 3123, 3124, 3125, 3126, 3127, 3128, 3129, 3130, 3131, 3132, 3133, 3200, 3201, 3202, 3203, 3204, 3205, 3206, 3207, 3300, 3301, 3302, 3303, 3304, 3305, 3306, 3307, 3308, 3309, 3310, 3311, 3312, 3313, 3314, 3315, 3316, 3317, 3318, 3319, 3320, 3321, 3322, 3323, 3324, 3325, 3326, 3327, 3328, 3329, 3330, 3331, 3332, 3333, 3334, 3335, 3336, 3400, 3401, 3402, 3403, 3404, 3405, 3500, 3501, 3502, 3503, 3504, 3505, 3506, 3508, 3509, 3510, 3511, 3512, 3514, 3515, 3516, 3517, 3518, 3519, 3520, 3521, 3522, 3523, 3524, 3525, 3526, 3527, 3528, 3600, 3601, 3602, 3603, 3604, 3605, 3606, 3607, 3608, 3609, 3610, 3700, 3701, 3702, 3703, 3704, 3705, 3706, 3707, 3708, 3709, 3710, 3711, 3712, 3713, 3714, 3800, 3801, 3802, 3803, 3804, 3805, 3806, 3807, 3808, 3809, 3811, 3812, 3813, 3814, 3900, 3901, 3902, 3903, 3904, 3905, 4000, 4001, 4002, 4003, 4004, 4005, 4006, 4007, 4008, 4009, 4010, 4011, 4012, 4013, 4014, 4015, 4016, 4017, 4018, 4019, 4020, 4021, 4022, 4023, 4024, 4025, 4026, 4027, 4028, 4029, 4030, 4031, 4032, 4033, 4100, 4101, 4102, 4103, 4104, 4105, 4106, 4107, 4108, 4109, 4110, 4111, 4112, 4113, 4114, 4115, 4116, 4117, 4118, 4119, 4120, 4121, 4122, 4123, 4124, 4125, 4200, 4201, 4202, 4203, 4204, 4205, 4206, 4207, 4208, 4209, 4210, 4211, 4212, 4213, 4214, 4215, 4216, 4217, 4218, 4219, 4220, 4221, 4222, 4223, 4224, 4225, 4226, 4227, 4228, 4229, 4230, 4231, 4232, 4233, 4234, 4300, 4301, 4302, 4303, 4304, 4305, 4306, 4308, 4309, 4310, 4311, 4312, 4313, 4314, 4315, 4316, 4317, 4318, 4319, 4320, 4321, 4322, 4323, 4324, 4325, 4326, 4327, 4328, 4329, 4330, 4331, 4332, 4333, 4334, 4335, 4336, 4337, 4338, 4339, 4340, 4341, 4342, 4400, 4401, 4402, 4403, 4404, 4405, 4406, 4407, 4408, 4409, 4410, 4411, 4412, 4413, 4414, 4415, 4416, 4417, 4418, 4419, 4420, 4421, 4422, 4423, 4424, 4425, 4426, 4427, 4428, 4429, 4430, 4431, 4432, 4433, 4434, 4435, 4436, 4500, 4501, 4502, 4503, 4504, 4506, 4507, 4508, 4509, 4510, 4511, 4512, 4513, 4514, 4515, 4516, 4517, 4600, 4601, 4602, 4603, 4604, 4605, 4606, 4608, 4609, 4610, 4611, 4612, 4700, 4701, 4702, 4703, 4704, 4705, 4706, 4707, 4708, 4709, 4710, 4711, 4712, 4713, 4714, 4715, 4800, 4801, 4802, 4803, 4804, 4805, 4806, 4807, 4808, 4809, 4810, 4900, 4901, 4902, 4903, 4904, 4905, 5000, 5001, 5002, 5003, 5004, 5005, 5006, 5007, 5008, 5009, 5010, 5011, 5012, 5013, 5014, 5015, 5016, 5017, 5018, 5019, 5020, 5021, 5022, 5023, 5024, 5025, 5026, 5027, 5028, 5029, 5030, 5031, 5032, 5033, 5034, 5035, 5036, 5037, 5038, 5039, 5040, 5041, 5042, 5043, 5044, 5045, 5046, 5100, 5101, 5102, 5103, 5104, 5105, 5106, 5107, 5108, 5109, 5110, 5111, 5200, 5201, 5202, 5203, 5205, 5206, 5207, 5208, 5209, 5210, 5211, 5212, 5214, 5300, 5301, 5302, 5303, 5304, 5305, 5306, 5307, 5308, 5309, 5310, 5311, 5312, 5313, 5314, 5315, 5316, 5317, 5318, 5319, 5320, 5321, 5322, 5400, 5401, 5402, 5403, 5404, 5405, 5406, 5407, 5408, 5410, 5411, 5412, 5413, 5414, 5415, 5416, 5417, 5418, 5419, 5420, 5421, 5500, 5501, 5502, 5503, 5504, 5505, 5506, 5507, 5508, 5509, 5510, 5511, 5512, 5513, 5514, 5515, 5516, 5600, 5601, 5602, 5603, 5604, 5605, 5606, 5607, 5608, 5609, 5610, 5611, 5612, 5613, 5614, 5615, 5616, 5700, 5701, 5702, 5703, 5704, 5705, 5706, 5707, 5708, 5709, 5710, 5711, 5712, 5713, 5714, 5715, 5716, 5717, 5800, 5801, 5802, 5803, 5804, 5805, 5807, 5808, 5809, 5810, 5811, 5812, 5813, 5814, 5815, 5816, 6000, 6001, 6002, 6003, 6004, 6005, 6006, 6007, 6008, 6009, 6010, 6011, 6012, 6013, 6014, 6015, 6016, 6017, 6018, 6019, 6020, 6021, 6022, 6023, 6024, 6025, 6026, 6027, 6029, 6030, 6031, 6032, 6033, 6034, 6035, 6036, 6037, 6038, 6039, 6040, 6041, 6042, 6043, 6044, 6045, 6046, 6047, 6048, 6049, 6050, 6051, 6053, 6100, 6101, 6102, 6103, 6104, 6105, 6106, 6107, 6108, 6109, 6110, 6112, 6113, 6114, 6115, 6116, 6117, 6118, 6119, 6120, 6121, 6122, 6123, 6124, 6125, 6126, 6127, 6128, 6129, 6130, 6131, 6132, 6200, 6201, 6202, 6203, 6204, 6205, 6206, 6208, 6209, 6210, 6211, 6212, 6213, 6214, 6215, 6216, 6217, 6218, 6219, 6220, 6221, 6222, 6223, 6224, 6225, 6226, 6227, 6228, 6229, 6230, 6300, 6301, 6302, 6303, 6304, 6305, 6306, 6307, 6308, 6309, 6310, 6311, 6312, 6313, 6314, 6315, 6316, 6317, 6318, 6319, 6320, 6321, 6322, 6323, 6324, 6325, 6326, 6327, 6328, 6329, 6330, 6331, 6332, 6333, 6334, 6335, 6336, 6337, 6338, 6339, 6340, 6341, 6342, 6343, 6344, 6345, 6346, 6347, 6400, 6401, 6402, 6403, 6404, 6405, 6406, 6407, 6408, 6409, 6410, 6411, 6412, 6413, 6414, 6415, 6416, 6417, 6418, 6419, 6420, 6421, 6422, 6423, 6500, 6501, 6502, 6503, 6504, 6505, 6506, 6507, 6508, 6509, 6510, 6511, 6512, 6513, 6514, 6515, 6516, 6517, 6518, 6519, 6520, 6521, 6522, 6523, 6524, 6525, 6526, 6527, 6528, 6529, 6530, 6531, 6532, 6533, 6534, 6535, 6536, 6537, 6538, 6539, 6540, 6541, 6542, 6543, 6544, 6545, 6546, 6547, 6548, 6549, 6550, 6600, 6601, 6602, 6603, 6604, 6605, 6606, 6607, 6608, 6609, 6610, 6611, 6612, 6613, 6614, 6615, 6616, 6617, 6700, 6701, 6702, 6703, 6704, 6705, 6706, 6707, 6708, 6709, 6710, 6711, 6712, 6713, 6714, 6715, 6716, 6717, 6718, 6719, 6720, 6721, 6722, 6723, 6724, 6725, 6800, 6801, 6802, 6803, 6804, 6805, 6806, 6807, 6808, 6809, 6810, 6811, 6812, 6813, 6814, 6815, 6816, 6817, 6818, 6819, 6820, 6821, 6822, 7000, 7001, 7002, 7003, 7004, 7005, 7006, 7007, 7008, 7009, 7010, 7011, 7012, 7013, 7014, 7015, 7016, 7017, 7018, 7019, 7020, 7021, 7022, 7023, 7024, 7025, 7026, 7027, 7028, 7029, 7030, 7031, 7032, 7033, 7034, 7035, 7036, 7037, 7038, 7039, 7040, 7041, 7042, 7043, 7100, 7101, 7102, 7103, 7104, 7105, 7106, 7107, 7108, 7109, 7110, 7111, 7112, 7113, 7114, 7115, 7116, 7117, 7119, 7120, 7121, 7122, 7123, 7124, 7200, 7201, 7202, 7203, 7204, 7205, 7206, 7207, 7208, 7209, 7210, 7211, 7212, 7213, 7214, 7215, 7300, 7301, 7302, 7303, 7304, 7305, 7306, 7400, 7401, 7402, 7403, 7404, 7405, 7406, 7407, 7408, 7409, 7410, 7411, 7412, 7413, 7414, 7415, 7416, 7500, 7501, 7502, 7503, 7504, 7505, 7506, 7507, 7508, 7509, 8000, 8001, 8002, 8003, 8004, 8005, 8006, 8007, 8008, 8010, 8011, 8012, 8013, 8014, 8015, 8100, 8101, 8102, 8103, 8104, 8105, 8112, 8113, 8116, 8118, 8119, 8120, 8200, 8201, 8202, 8203, 8204, 8205, 8206, 8207, 8208, 8209, 8210, 8300, 8301, 8302, 8303, 8305, 8306, 8307, 8308, 8309, 8310, 8311, 8312, 8313, 8314, 8315, 8316, 8317, 8318, 8400, 8401, 8402, 8403, 8404, 8405, 8406, 8407, 8408, 8409, 8410, 8411, 8412, 8413, 8414, 8415, 8416, 8417, 8418, 8419, 8420, 8421, 8422, 8423, 8424, 8425, 8426, 8427, 8500, 8501, 8502, 8503, 8504, 8505, 8506, 8507, 8508, 8509, 8510, 8511, 8512, 8513, 8600, 8601, 8602, 8603, 8604, 8605, 8606, 8607, 8608, 8609, 8610, 8611, 8700, 8701, 8702, 8703, 8704, 8705, 8706, 8707, 8708, 8709, 8710, 8711, 8712, 8713, 8714, 8715, 8716, 8717, 8718, 8719, 8720, 8721, 8722, 8723, 8800, 8801, 8802, 8803, 8804, 8805, 8806, 8807, 8808, 8809, 8810, 9000, 9001, 9002, 9003, 9004, 9005, 9006, 9007, 9008, 9009, 9010, 9011, 9012, 9013, 9014, 9015, 9016, 9017, 9018, 9019, 9020, 9021, 9022, 9023, 9024, 9025, 9100, 9101, 9102, 9103, 9104, 9200, 9201, 9202, 9203, 9204, 9205, 9206, 9207, 9208, 9209, 9210, 9211, 9212, 9213, 9214, 9215, 9216, 9217, 9218, 9219, 9220, 9221, 9222, 9300, 9302, 9303, 9304, 9305, 9306, 9307, 9308, 9309, 9310, 9311, 9312, 9313, 9314, 9315, 9316, 9317, 9318, 9319, 9320, 9321, 9400, 9401, 9402, 9403, 9404, 9405, 9406, 9407, 9408, 9409, 9410, 9411, 9412, 9413, 9414, 9415, 9416, 9417, 9500, 9501, 9502, 9503, 9504, 9505, 9506, 9507, 9508, 9509, 9510, 9511, 9512, 9513, 9514, 9515, 9516, 9517, 9600, 9601, 9602, 9603, 9604, 9605, 9606, 9607, 9608, 9609, 9610, 9611, 9612, 9613, 9614, 9615, 9616, 9617, 9618, 9700, 9701, 9702, 9703, 9704, 9705, 9706, 9708, 9709, 9710, 9711, 9712, 9713, 9714, 9715, 9716, 9800, 9801, 9802, 9803, 9804, 9805, 9806, 9807, 9808, 9809, 9810, 9811, 0400, 0401, 0410, 0420, 0550, 0560, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"1000\":\"Manila CPO - Ermita\",\"1001\":\"Quiapo\",\"1002\":\"Intramuros\",\"1003\":\"Sta. Cruz South\",\"1004\":\"Malate\",\"1005\":\"San Miguel\",\"1006\":\"Binondo\",\"1007\":\"Paco\",\"1008\":\"Sampaloc East\",\"1009\":\"Sta. Ana\",\"1010\":\"San Nicolas\",\"1011\":\"Pandacan\",\"1012\":\"Tondo South\",\"1013\":\"Tondo North\",\"1014\":\"Sta. Cruz North\",\"1015\":\"Sampaloc West\",\"1016\":\"Sta. Mesa\",\"1017\":\"San Andres Bukid\",\"1018\":\"Port Area (South)\",\"1100\":[\"Central\",\"Piñahan\",\"Project 6\",\"Quezon City CPO\"],\"1101\":[\"Botocan\",\"Diliman\",\"Krus na Ligas\",\"Malaya\",\"Old Capitol Site\",\"San Vicente\",\"Sikatuna Village\",\"Teachers Village\",\"University of the Philippines\",\"UP Village\"],\"1102\":[\"Amihan\",\"Claro\",\"Duyan-Duyan\",\"E. Rodriguez\",\"Kamias\",\"Quirino District/Project 2 & 3\",\"Silangan\"],\"1103\":[\"Kamuning\",\"Laging Handa\",\"Obrero\",\"Paligsahan\",\"Roxas District\",\"Sacred Heart\",\"South Triangle\"],\"1104\":[\"Damayan\",\"Mariblo\",\"Nayon Kaunlaran\",\"Paraiso\",\"Phil-Am / Philam\",\"Santa Cruz\",\"Talayan\",\"West Triangle\"],\"1105\":[\"Alicia\",\"Bagong Pag-asa\",\"Bungad\",\"Del Monte\",\"Katipunan\",\"Masambong\",\"Paltok\",\"Project 7\",\"Ramon Magsaysay\",\"San Antonio\",\"Sto. Cristo\",\"Veterans Village\"],\"1106\":[\"Apolonio Samson\",\"Baesa\",\"Bahay Toro\",\"Balintawak\",\"Balumbato\",\"Project 8\",\"Unang Sigaw\"],\"1107\":[\"New Era\",\"Pasong Tamo\"],\"1108\":[\"Loyola Heights\",\"Pansol\"],\"1109\":[\"Bagong Buhay\",\"Bayanihan\",\"Blue Ridge\",\"Cubao\",\"Dioquino Zobel\",\"Escopa\",\"Mangga\",\"Marilag\",\"Masagana\",\"Milagrosa\",\"Project 4\",\"San Roque\",\"Socorro\",\"Tagumpay\",\"Villa Maria Clara\"],\"1110\":[\"Bagong bayan\",\"Camp Aguinaldo\",\"Libis\",\"St. Ignatius\",\"Talampas\",\"Ugong Norte\",\"White Plains\"],\"1111\":[\"Bagong Lipunan\",\"Crame\",\"Immaculate Conception\",\"Kaunlaran\",\"Pinagkaisahan\",\"San Martin de Porres\"],\"1112\":[\"Damayan Lagi\",\"Horseshoe\",\"Kalusugan\",\"Kristong Hari\",\"Mariana\",\"Valencia\"],\"1113\":[\"Don Manuel\",\"Dona Aurora\",\"Doña Imelda\",\"Dona Josefa\",\"San Isidro\",\"Santol\",\"Santo Nino\",\"Tatalon\"],\"1114\":[\"Gintong Silahis\",\"La Loma\",\"Lourdes\",\"Maharlica\",\"Matalahib\",\"Parang Bundok\",\"St. Peter\",\"Salvacion\",\"San Isidro Labrador\",\"Santa Teresita\",\"Sienna\"],\"1115\":[\"Balingasa\",\"Damar\",\"Manresa\",\"Pag-Ibig sa Nayon\",\"San Jose\"],\"1116\":[\"Bagbag\",\"San Bartolome\",\"Sangandaan\",\"Sauyo\",\"Talipapa\",\"Tandang Sora\"],\"1117\":[\"Capri\",\"Gulod\",\"San Agustin\",\"Santa Lucia\",\"Santa Monica\"],\"1118\":[\"Fairview\",\"Pasong Putik\"],\"1119\":[\"Bagong Silangan\",\"Matandang Balara\",\"Payatas\"],\"1120\":[\"BF Homes\",\"Violago Homes\"],\"1121\":[\"Commonwealth\",\"Fairview North\"],\"1122\":\"Fairview South\",\"1123\":[\"Damong Maliit\",\"Novaliches Town Proper\"],\"1124\":\"Kaligayahan\",\"1125\":[\"Dona Faustina Subd.\",\"Nagkaisang Nayaon\"],\"1126\":[\"Batasan Hills\",\"Capitol Hills/Park\"],\"1127\":\"Holy Spirit\",\"1128\":[\"Culiat\",\"Vasra\"],\"1200\":\"Makati CPO + Buendia Ave\",\"1201\":\"Fort Bonifacio (Camp)\",\"1202\":\"Fort Bonifacio Naval Stn.\",\"1203\":\"San Antonio Village\",\"1204\":\"La Paz-Singkamas-Tejeros\",\"1205\":\"Sta. Cruz\",\"1206\":\"Kasilawan\",\"1207\":\"Olympia & Carmona\",\"1208\":\"Valenzuela, Santiago, Rizal\",\"1209\":\"Bel-air\",\"1210\":\"Poblacion\",\"1211\":\"Guadalupe Viejo\",\"1212\":\"Guadalupe Nuevo\",\"1213\":\"Pinagkaisahan-Pitogo\",\"1214\":\"Cembo\",\"1215\":\"Rembo (West)\",\"1216\":\"Rembo (East)\",\"1217\":\"Comembo\",\"1218\":\"Pembo\",\"1219\":\"Forbes Park North\",\"1220\":\"Forbes Park South\",\"1221\":\"Dasmarinas Village North\",\"1222\":\"Dasmarinas Village South\",\"1223\":\"San Lorenzo Village\",\"1224\":\"Makati Commercial Ctr.\",\"1225\":\"Urdaneta Village\",\"1226\":\"Ayala-Paseo de Roxas\",\"1227\":\"Salcedo Village\",\"1228\":\"Greenbelt\",\"1229\":\"Legaspi Village\",\"1230\":\"Pio del Pilar\",\"1231\":\"Pasong Tamo & Ecology Vill\",\"1232\":\"Magallanes Village\",\"1233\":\"Bangkal\",\"1234\":\"San Isidro\",\"1235\":\"Palanan\",\"1300\":[\"Mall of Asia Complex (MOA)\",\"Pasay City CPO - Malibay\"],\"1301\":\"Domestic Airport P.O.\",\"1302\":\"San Rafael\",\"1303\":\"San Roque\",\"1304\":\"Sta. Clara\",\"1305\":\"San Jose\",\"1306\":\"San Isidro\",\"1307\":\"PICC Reclamation Area\",\"1308\":\"Manila Bay Reclamation\",\"1309\":\"Villamor Airbase\",\"1400\":\"Kaloocan City CPO\",\"1401\":\"Baesa\",\"1402\":\"Sta. Quiteria\",\"1403\":\"Grace Park East\",\"1404\":\"San Jose\",\"1405\":\"1st to 7th Ave. West\",\"1406\":\"Grace Park West\",\"1407\":\"University Hills\",\"1408\":\"Sangandaan\",\"1409\":[\"Kanluran Village\",\"Kaunlaran Village\"],\"1410\":\"Maypajo\",\"1411\":\"Fish Market\",\"1412\":\"Isla de Cocomo\",\"1413\":\"Kapitbahayan East\",\"1420\":\"Kaybiga/Deparo\",\"1421\":\"Bagumbong/Pag-asa\",\"1422\":\"Novaliches North\",\"1423\":\"Lilles Ville Subd.\",\"1424\":\"Capitol Parkland Subd.\",\"1425\":\"Amparo Subdivision\",\"1426\":\"Bankers Village\",\"1427\":[\"Tala Leprosarium\",\"Victory Heights\"],\"1428\":\"Bagong Silang\",\"1440\":\"Valenzuela CPO, Malinta\",\"1441\":\"Karuhatan\",\"1442\":\"Fortune Village, Paseo de Blas, Gen. T de Leon\",\"1443\":\"Dalandan West, Canumay\",\"1444\":\"Arkong Bato, Rincon, Pasolo, Malanday, Mabolo, Polo\",\"1445\":\"Balangkas, Caloong\",\"1446\":\"Lingunan\",\"1447\":\"East Canumay, Lawang Bato Punturin\",\"1448\":\"Mapulang Lupa\",\"1470\":\"Malabon\",\"1471\":\"Flores\",\"1472\":\"Longos\",\"1473\":\"Tonsuya\",\"1474\":\"Acacia\",\"1475\":\"Potrero\",\"1476\":\"Araneta Subdivision\",\"1477\":\"Maysilo\",\"1478\":\"Santolan\",\"1479\":\"Muzon\",\"1480\":\"Dampalit\",\"1485\":\"Navotas\",\"1489\":\"Tangos\",\"1490\":\"Tanza\",\"1496\":\"Valenzuela P.O. Boxes\",\"1500\":\"San Juan CPO\",\"1502\":\"Greenhills PO\",\"1503\":\"Greenhills North\",\"1504\":\"Eisenhower-Crame\",\"1550\":\"Mandaluyong CPO\",\"1551\":\"Vergara\",\"1552\":\"Shaw Boulevard\",\"1553\":\"National Center for Mental Health (Mental Hospital)\",\"1554\":\"East Edsa\",\"1555\":\"Wack Wack Golf Club\",\"1556\":\"Greenhills South\",\"1600\":\"Pasig CPO\",\"1601\":\"San Joaquin\",\"1602\":\"Pinagbuhatan\",\"1603\":\"Kapitolio\",\"1604\":\"Ugong\",\"1605\":\"Ortigas PO\",\"1606\":\"Caniogan\",\"1607\":\"Maybunga\",\"1608\":\"Sta. Lucia\",\"1609\":\"Rosario\",\"1610\":\"Santolan\",\"1611\":\"Manggahan\",\"1612\":\"Green Park\",\"1620\":\"Aguho\",\"1621\":\"Sta. Ana\",\"1630\":\"Western Bicutan\",\"1631\":\"Bicutan\",\"1632\":\"Lower Bicutan\",\"1633\":\"Upper Bicutan\",\"1634\":\"Nichols-Mckinley\",\"1636\":\"Bay Breeze Village\",\"1637\":\"Tukukan\",\"1638\":\"Ligid\",\"1700\":\"Parañaque CPO\",\"1701\":\"Tambo\",\"1702\":\"Baclaran\",\"1703\":\"Marina Subd. (Reclamation)\",\"1704\":\"Santo Niño\",\"1705\":\"NAIA (Airport)\",\"1706\":\"Pulo\",\"1707\":\"San Antonio Valley 11 & 12\",\"1708\":\"Multinational Subd.\",\"1709\":[\"Mervile Park Subd.\",\"Moonwalk Subdivision\",\"South Admiral Village\"],\"1710\":\"Executive Heights Subd.\",\"1711\":\"Better Living Subd.\",\"1712\":\"Miramar Subd.\",\"1713\":\"United Paranaque Subd.\",\"1714\":[\"Aeropark Subdivision\",\"Ireneville 2\"],\"1715\":\"San Antonio Valley 1\",\"1716\":\"Maywood 2\",\"1717\":\"Manila Memorial Park\",\"1718\":\"BF Homes 2\",\"1719\":[\"Ireneville 1 & 3\",\"Maywood 1\"],\"1720\":\"BF Homes 1\",\"1740\":\"Las Pinas CPO\",\"1741\":\"Remarville Subd.\",\"1742\":[\"Zapote\",\"Pulang Lupa\"],\"1743\":\"Cut-cut\",\"1744\":\"Manuyo\",\"1745\":\"Gatchalian Subd.\",\"1746\":\"Verdant Acres Subd.\",\"1747\":\"Talon Moonwalk\",\"1748\":\"Manila Doctor's Village\",\"1749\":\"Angela Village\",\"1750\":\"Almanza\",\"1751\":\"T. S. Cruz Subd.\",\"1752\":\"Soldiers Hills Subd.\",\"1770\":\"Muntinlupa CPO\",\"1771\":\"Bule/Cupang\",\"1772\":\"Bayanan/Putatan\",\"1773\":\"Tunasan\",\"1774\":\"Susana Heights\",\"1775\":\"Pearl Heights\",\"1776\":\"Poblacion\",\"1777\":\"Pleasant Village\",\"1780\":\"Ayala Alabang Subd.\",\"1781\":\"Filinvest Corporate City\",\"1799\":\"Ayala Alabang P.O. Boxes\",\"1800\":\"Marikina CPO\",\"1801\":\"San Roque-Calumpang\",\"1802\":\"Industrial Valley\",\"1803\":[\"Barangka\",\"Tañong\"],\"1804\":\"J de la Pena\",\"1805\":\"Malanday\",\"1806\":\"North/West of Marikina River\",\"1807\":\"Conception 1\",\"1808\":\"Nangka\",\"1809\":\"Parang\",\"1810\":\"Marikina Heights\",\"1811\":\"Conception 2\",\"1820\":[\"Bagong Nayon\",\"Cogeo\",\"Cupang\",\"Langhaya\",\"Mambagat\",\"Mayamot\"],\"1850\":\"San Mateo\",\"1860\":\"Montalban (Rodriguez)\",\"1870\":\"Antipolo\",\"1880\":\"Teresa\",\"1900\":\"Cainta\",\"1910\":\"Pililia\",\"1920\":\"Taytay\",\"1930\":\"Angono\",\"1940\":\"Binangonan\",\"1950\":\"Cardona\",\"1960\":\"Morong\",\"1970\":\"Baras\",\"1980\":\"Tanay\",\"1990\":\"Jala-Jala\",\"2000\":\"San Fernando\",\"2001\":\"Bacolor\",\"2002\":\"Santa Rita\",\"2003\":\"Guagua\",\"2004\":\"Sasmuan (old: Sexmoan)\",\"2005\":\"Lubao\",\"2006\":\"Floridablanca\",\"2007\":\"Basa Air Base\",\"2008\":\"Porac\",\"2009\":\"Angeles City\",\"2010\":\"Mabalacat\",\"2011\":\"Magalang\",\"2012\":\"Arayat\",\"2013\":\"Candaba\",\"2014\":\"San Luis\",\"2015\":\"San Simon\",\"2016\":\"Apalit\",\"2017\":\"Masantol\",\"2018\":\"Macabebe\",\"2019\":\"Minalin\",\"2020\":\"Santo Tomas\",\"2021\":\"Mexico\",\"2022\":\"Santa Ana\",\"2100\":\"Balanga\",\"2101\":\"Pilar\",\"2102\":\"Orion\",\"2103\":\"Limay\",\"2104\":\"Lamao\",\"2105\":\"Mariveles\",\"2106\":\"Bataan Export Processing Zone (BEPZ) Mariveles\",\"2107\":\"Bagac\",\"2108\":\"Morong\",\"2109\":\"Refugee Processing Center (Morong)\",\"2110\":\"Dinalupihan\",\"2111\":\"Hermosa\",\"2112\":\"Orani\",\"2113\":\"Samal\",\"2114\":\"Bucay\",\"2200\":\"Olongapo City\",\"2201\":\"Iba\",\"2202\":\"Botolan\",\"2203\":\"Cabangan\",\"2204\":\"San Felipe\",\"2205\":\"San Narciso\",\"2206\":\"San Antonio\",\"2207\":\"San Marcelino\",\"2208\":\"Castillejos\",\"2209\":\"Subic\",\"2210\":\"Palauig\",\"2211\":\"Masinloc\",\"2212\":\"Candelaria\",\"2213\":\"Sta. Cruz\",\"2300\":\"Tarlac\",\"2301\":\"San Miguel\",\"2302\":\"Gerona\",\"2303\":\"Sta. Ignacia\",\"2304\":\"Mayantoc\",\"2305\":\"San Clemente\",\"2306\":\"Camiling\",\"2307\":\"Paniqui\",\"2308\":\"Mancada\",\"2309\":\"San Manuel\",\"2310\":\"Anao\",\"2311\":\"Ramos\",\"2312\":\"Pura\",\"2313\":\"Victoria\",\"2314\":\"La Paz\",\"2315\":\"Capas\",\"2316\":\"Conception\",\"2317\":\"Bamban\",\"2400\":\"Dagupan City\",\"2401\":\"Lingayen\",\"2402\":\"Labrador\",\"2403\":\"Sual\",\"2404\":\"Alaminos\",\"2405\":\"Anda\",\"2406\":\"Bolinao\",\"2407\":\"Bani\",\"2408\":\"Agno\",\"2409\":\"Mabini\",\"2410\":\"Burgos\",\"2411\":\"Dasol\",\"2412\":\"Infanta\",\"2413\":\"Mangatarem\",\"2414\":\"Urbiztondo\",\"2415\":\"Aguilar\",\"2416\":\"Bugallon\",\"2417\":\"Binmaley\",\"2418\":\"Calasiao\",\"2419\":\"Santa Barbara\",\"2420\":\"San Carlos City\",\"2421\":\"Malasiqui\",\"2422\":\"Basista\",\"2423\":\"Bayambang\",\"2424\":\"Bautista\",\"2425\":\"Alcala\",\"2426\":\"Santo Tomas\",\"2427\":\"Villasis\",\"2428\":\"Urdaneta\",\"2429\":\"Mapandan\",\"2430\":\"Manaoag\",\"2431\":\"San Jacinto\",\"2432\":\"Mangaldan\",\"2433\":\"San Fabian\",\"2434\":\"Sison\",\"2435\":\"Pozorrubio\",\"2436\":\"Binalonan\",\"2437\":\"Laoac\",\"2438\":\"San Manuel\",\"2439\":\"Asingan\",\"2440\":\"Santa Maria\",\"2441\":\"Rosales\",\"2442\":\"Balungao\",\"2443\":\"Umingan\",\"2444\":\"San Quintin\",\"2445\":\"Tayug\",\"2446\":\"Natividad\",\"2447\":\"San Nicolas\",\"2500\":\"San Fernando\",\"2501\":\"Bauang\",\"2502\":\"Caba\",\"2503\":\"Aringay\",\"2504\":\"Agoo\",\"2505\":\"Santo Tomas\",\"2506\":\"Rosario\",\"2507\":\"Damortis\",\"2508\":\"Pugo\",\"2509\":\"Tubao\",\"2510\":\"Burgos\",\"2511\":\"Naguillan\",\"2512\":\"Bagulin\",\"2513\":\"San Gabriel\",\"2514\":\"San Juan\",\"2515\":\"Bacnotan\",\"2516\":\"Santol\",\"2517\":\"Balaoan\",\"2518\":\"Luna\",\"2519\":\"Bangar\",\"2520\":\"Sudepen\",\"2600\":\"Baguio City\",\"2601\":\"La Trinidad\",\"2602\":\"Philippine Military Academy (PMA)\",\"2603\":\"Tuba\",\"2604\":\"Itogon\",\"2605\":\"Bokod\",\"2606\":\"Kabayan\",\"2607\":\"Bugias\",\"2608\":\"Mankayan\",\"2609\":\"Lepanto\",\"2610\":\"Bakun\",\"2611\":\"Kibungan\",\"2612\":\"Atok\",\"2613\":\"Kapangan\",\"2614\":\"Sablan\",\"2615\":\"Tublay\",\"2616\":\"Bontoc\",\"2617\":\"Sadanga\",\"2618\":\"Besao\",\"2619\":\"Sagada\",\"2620\":\"Tadian\",\"2621\":\"Bauko\",\"2622\":\"Sabangan\",\"2623\":\"Barlig\",\"2624\":\"Natonin\",\"2625\":\"Paracelis\",\"2700\":\"Vigan\",\"2701\":\"Santa Catalina\",\"2702\":\"Caoayan\",\"2703\":\"Santa\",\"2704\":\"Narvacan\",\"2705\":\"Santa Maria\",\"2706\":\"San Esteban\",\"2707\":\"Santiago\",\"2708\":\"Binayoyo\",\"2709\":\"Galimuyod\",\"2710\":\"Candon\",\"2711\":\"Salsedo\",\"2712\":\"Santa Lucia\",\"2713\":\"Santa Cruz\",\"2714\":\"Tagudin\",\"2715\":\"Suyo\",\"2716\":\"Alilem\",\"2717\":\"Sugpon\",\"2718\":\"Cervantes\",\"2719\":\"Sicay\",\"2720\":\"Gregorio del Pilar\",\"2721\":\"Quirino\",\"2722\":\"San Emilio\",\"2723\":\"Lidilda\",\"2724\":\"Burgos\",\"2725\":\"Nagbukel\",\"2726\":\"San Vicente\",\"2727\":\"Bantay\",\"2728\":\"San Ildefonso\",\"2729\":\"Santo Domingo\",\"2730\":\"Magsingal\",\"2731\":\"San Juan\",\"2732\":\"Cabugao\",\"2733\":\"Sinait\",\"2800\":\"Bangued\",\"2801\":\"Dolores\",\"2802\":\"Langagilang\",\"2803\":\"Tayum\",\"2804\":\"Peñarubia\",\"2805\":\"Bucay\",\"2806\":\"Pidigan\",\"2807\":\"Langiden\",\"2808\":\"San Quintin\",\"2809\":\"San Isidro\",\"2810\":\"Manabo\",\"2811\":\"Villaviciosa\",\"2812\":\"Pilar\",\"2813\":\"Luba\",\"2814\":\"Tubo\",\"2815\":\"Boliney\",\"2816\":\"Daguioman\",\"2817\":\"Bucloc\",\"2818\":\"Sal-Lapadan\",\"2819\":\"Licuan (Baay)\",\"2820\":\"Malibcong\",\"2821\":\"Lacub\",\"2822\":\"Tineg\",\"2823\":\"San Juan\",\"2824\":\"Lagayan\",\"2825\":\"Danglas\",\"2826\":\"La Paz\",\"2900\":\"Laoag City\",\"2901\":\"San Nicolas\",\"2902\":\"Paoay\",\"2903\":\"Currimao\",\"2904\":\"Badoc\",\"2905\":\"Pinili\",\"2906\":\"Batac\",\"2907\":\"Marcos\",\"2908\":\"Espiritu\",\"2909\":\"Nueva Era\",\"2910\":\"Solsona\",\"2911\":\"Carasi\",\"2912\":\"Piddig\",\"2913\":\"Dingras\",\"2914\":\"Sarrat\",\"2915\":\"Vintar\",\"2916\":\"Bacarra\",\"2917\":\"Pasuquin\",\"2918\":\"Burgos\",\"2919\":\"Pagudpud\",\"2920\":\"Bangui\",\"2921\":\"Dumalneg\",\"2922\":\"Adams\",\"3000\":\"Malolos\",\"3001\":\"Paombong\",\"3002\":\"Hagonoy\",\"3003\":\"Calumpit\",\"3004\":\"Plaridel\",\"3005\":\"Pulilan\",\"3006\":\"Baliuag\",\"3007\":\"Bustos\",\"3008\":\"San Rafael\",\"3009\":\"Dona Remedios Trinidad\",\"3010\":\"San Ildefonso\",\"3011\":\"San Miguel\",\"3012\":\"Angat\",\"3013\":\"Norzagaray\",\"3014\":\"Pandi\",\"3015\":\"Guiguinto\",\"3016\":\"Balagtas\",\"3017\":\"Bulacan\",\"3018\":\"Bocaue\",\"3019\":\"Marilao\",\"3020\":\"Maycauayan\",\"3021\":\"Obando\",\"3022\":\"Santa Maria\",\"3023\":\"San Jose del Monte\",\"3024\":\"Sapang Palay\",\"3100\":\"Cabanatuan City\",\"3101\":\"Santa Rosa\",\"3102\":\"San Leonardo\",\"3103\":\"Penaranda\",\"3104\":\"Gen. Tinio\",\"3105\":\"Gapan\",\"3106\":\"San Isidro\",\"3107\":\"Cabiao\",\"3108\":\"San Antonio\",\"3109\":\"Jaen\",\"3110\":\"Zaragosa\",\"3111\":\"Aliaga\",\"3112\":\"Lucab\",\"3113\":\"Quezon\",\"3114\":\"Talavera\",\"3115\":\"Guimba\",\"3116\":\"Nampicuan\",\"3117\":\"Cuyapao\",\"3118\":\"Talugtog\",\"3119\":\"Munoz\",\"3120\":\"Central Luzon State University (CLSU)\",\"3121\":\"San Jose City\",\"3122\":\"Lupao\",\"3123\":\"Carranglan\",\"3124\":\"Pantabangan\",\"3125\":\"Gen. M. Natividad\",\"3126\":\"Llanera\",\"3127\":\"Rizal\",\"3128\":\"Bongabon\",\"3129\":\"Laur\",\"3130\":\"Fort Magsaysay\",\"3131\":\"Gabaldon\",\"3132\":\"Palayan City\",\"3133\":\"Santo Domingo\",\"3200\":\"Baler\",\"3201\":\"San Luis\",\"3202\":\"Maria Aurora\",\"3203\":\"Dipaculao\",\"3204\":\"Casiguran\",\"3205\":\"Dilasag\",\"3206\":\"Dinalungan\",\"3207\":\"Dingalan\",\"3300\":\"Ilagan\",\"3301\":\"Gamu\",\"3302\":\"Naguillan\",\"3303\":\"Reina Mercedes\",\"3304\":\"Luna\",\"3305\":\"Cauayan\",\"3306\":\"Alicia\",\"3307\":\"Angadanan\",\"3308\":\"San Guillermo\",\"3309\":\"Echague\",\"3310\":\"San Isidro\",\"3311\":\"Santiago\",\"3312\":\"Cordon\",\"3313\":\"Jones\",\"3314\":\"San Agustin\",\"3315\":\"Cabatuan\",\"3316\":\"Aurora\",\"3317\":\"San Miguel (Callang)\",\"3318\":\"San Mateo\",\"3319\":\"Ramon\",\"3320\":\"Roxas\",\"3321\":\"Quirino\",\"3322\":\"Burgos\",\"3323\":\"Mallig\",\"3324\":\"Quezon\",\"3325\":\"Tumauini\",\"3326\":\"Delfin Albano\",\"3327\":\"Santo Tomas\",\"3328\":\"Cabagan\",\"3329\":\"San Pablo\",\"3330\":\"Santa Maria\",\"3331\":\"Benito Soliven\",\"3332\":\"San Mariano\",\"3333\":\"Maconacon\",\"3334\":\"Palanan\",\"3335\":\"Divilacan\",\"3336\":\"Dinapigui\",\"3400\":\"Cabarruguis\",\"3401\":\"Diffun\",\"3402\":\"Saguday\",\"3403\":\"Aglipay\",\"3404\":\"Maddela\",\"3405\":\"Nagtipunan (Abbag)\",\"3500\":\"Tuguegarao\",\"3501\":\"Enrile\",\"3502\":\"Penablanca\",\"3503\":\"Solana\",\"3504\":\"Iguig\",\"3505\":\"Amulung\",\"3506\":[\"Alcala\",\"Baggao\"],\"3508\":\"Gattaran\",\"3509\":\"Lal-lo\",\"3510\":\"Camalaniugan\",\"3511\":[\"Buguey\",\"Gonzaga\"],\"3512\":\"Santa Teresita\",\"3514\":\"Santa Ana\",\"3515\":\"Aparri\",\"3516\":\"Ballesteros\",\"3517\":\"Abulog\",\"3518\":\"Sanchez Mira\",\"3519\":\"Claveria\",\"3520\":\"Calayan\",\"3521\":\"Santa Praxedes\",\"3522\":\"Pamplona\",\"3523\":\"Allacapan\",\"3524\":\"Lasam\",\"3525\":\"Santo Nino\",\"3526\":\"Rizal\",\"3527\":\"Piat\",\"3528\":\"Tuao\",\"3600\":\"Lagawe\",\"3601\":\"Banaue\",\"3602\":\"Mayaoyao / Mayoyao\",\"3603\":\"Hungduan\",\"3604\":\"Kiangan\",\"3605\":\"Lamut\",\"3606\":\"Aguinaldo\",\"3607\":\"Hingyon\",\"3608\":\"Potia\",\"3609\":\"Tinoc\",\"3610\":\"Asipulo\",\"3700\":\"Bayombong\",\"3701\":\"Ambaguio\",\"3702\":\"Bambang\",\"3703\":\"Kasibu\",\"3704\":\"Aritao\",\"3705\":\"Sta. Fe (Imugan)\",\"3706\":\"Dupax del Norte\",\"3707\":\"Dupax del Sur\",\"3708\":\"Kayapa\",\"3709\":\"Solano\",\"3710\":\"Villa Verde (Ibung)\",\"3711\":\"Bagabag\",\"3712\":\"Diadi\",\"3713\":\"Quezon\",\"3714\":\"Alfonso Castañeda\",\"3800\":\"Tabuk\",\"3801\":\"Balbalan\",\"3802\":\"Lubuagan\",\"3803\":\"Pasil\",\"3804\":\"Tinglayan\",\"3805\":\"Tanudan\",\"3806\":\"Pinukpuk\",\"3807\":[\"Conner\",\"Flora\"],\"3808\":\"Liwan (Rizal)\",\"3809\":\"Kabugao\",\"3811\":\"Santa Marcela\",\"3812\":\"Pudtol\",\"3813\":\"Luna\",\"3814\":\"Calanasan\",\"3900\":\"Basco\",\"3901\":\"Mahatao\",\"3902\":\"Ivana\",\"3903\":\"Uyugan\",\"3904\":\"Sabtang\",\"3905\":\"Itbayat\",\"4000\":\"San Pablo City\",\"4001\":\"Alaminos\",\"4002\":\"Nagcarlan\",\"4003\":\"Rizal\",\"4004\":\"Liliw\",\"4005\":\"Majayjay\",\"4006\":\"Botocan\",\"4007\":\"Magdalena\",\"4008\":\"Pagsanjan\",\"4009\":\"Santa Cruz\",\"4010\":\"Pila\",\"4011\":\"Victoria\",\"4012\":\"Calauan\",\"4013\":\"Cavinti\",\"4014\":\"Lumban\",\"4015\":\"Kalayaan\",\"4016\":\"Paete\",\"4017\":\"Pakil\",\"4018\":\"Pangil\",\"4019\":\"Siniloan\",\"4020\":\"Mabitac\",\"4021\":\"Famy\",\"4022\":\"Santa Maria\",\"4023\":\"San Pedro\",\"4024\":\"Binan\",\"4025\":\"Cabuyao\",\"4026\":\"Santa Rosa\",\"4027\":\"Calamba\",\"4028\":\"Canlubang\",\"4029\":\"Camp Vicente Lim\",\"4030\":\"Los Banos\",\"4031\":\"College Los Banos\",\"4032\":\"Luisiana\",\"4033\":\"Bay\",\"4100\":\"Cavite City\",\"4101\":\"Cavite Naval Base\",\"4102\":\"Bacoor\",\"4103\":\"Imus\",\"4104\":\"Kawit\",\"4105\":\"Noveleta\",\"4106\":\"Rosario\",\"4107\":\"Gen. Trias\",\"4108\":\"Tanza\",\"4109\":\"Trece Martirez City\",\"4110\":\"Naic\",\"4111\":\"Ternate\",\"4112\":\"Maragondon\",\"4113\":\"Magallanes\",\"4114\":\"Dasmarinias\",\"4115\":\"Dasmarinias Resettlement Area\",\"4116\":\"Carmona\",\"4117\":\"Gen. Mariano Alvarez\",\"4118\":\"Silang\",\"4119\":\"Amadeo\",\"4120\":\"Tagaytay City\",\"4121\":\"Mendez\",\"4122\":\"Indang\",\"4123\":\"Alfonso\",\"4124\":\"Gen. Aguinaldo (Bailen)\",\"4125\":\"Corregidor\",\"4200\":\"Batangas City\",\"4201\":\"Bauan\",\"4202\":\"Mabini\",\"4203\":\"Tingloy\",\"4204\":\"San Pascual\",\"4205\":\"Alitagtag\",\"4206\":\"Santa Teresita\",\"4207\":\"San Nicolas\",\"4208\":\"Taal\",\"4209\":\"Lemery\",\"4210\":\"San Luis\",\"4211\":\"Agoncillo\",\"4212\":\"Calaca\",\"4213\":\"Balayan\",\"4214\":\"Uy\",\"4215\":\"Calatagan\",\"4216\":\"Lian\",\"4217\":\"Lipa City\",\"4218\":\"Fernando Air Base\",\"4219\":\"Balite\",\"4220\":\"Talisay\",\"4221\":\"Laurel\",\"4222\":\"Cuenca\",\"4223\":\"Mataas na Kahoy\",\"4224\":\"Padre Garcia\",\"4225\":\"Rosario\",\"4226\":\"San Juan\",\"4227\":\"San Jose\",\"4228\":\"Taysan\",\"4229\":\"Lobo\",\"4230\":\"Ibaan\",\"4231\":\"Nasugbu\",\"4232\":\"Tanauan\",\"4233\":\"Malvar\",\"4234\":\"Santo Tomas\",\"4300\":\"Quezon Capitol\",\"4301\":\"Lucena City\",\"4302\":\"Pagbilao\",\"4303\":\"Padre Burgos\",\"4304\":\"Agdangan\",\"4305\":\"Unisan\",\"4306\":[\"Gumaca\",\"Plaridel\"],\"4308\":\"Pitogo\",\"4309\":\"Macalelon\",\"4310\":\"Gen. Luna\",\"4311\":\"Catanuan\",\"4312\":\"Mulanay\",\"4313\":\"San Narciso\",\"4314\":\"San Andres\",\"4315\":\"San Francisco\",\"4316\":\"Lopez\",\"4317\":\"Hondagua\",\"4318\":\"Calauag\",\"4319\":\"Guinayangan\",\"4320\":\"Buenavista\",\"4321\":\"Tagkawayan\",\"4322\":\"Sariaya\",\"4323\":\"Candelaria\",\"4324\":\"San Antonio\",\"4325\":\"Tiaong\",\"4326\":\"Dolores\",\"4327\":\"Tayabas\",\"4328\":\"Lucban\",\"4329\":\"Sampaloc\",\"4330\":\"Mauban\",\"4331\":\"Atimonan\",\"4332\":\"Quezon\",\"4333\":\"Alabat\",\"4334\":\"Perez\",\"4335\":\"Real\",\"4336\":\"Infanta\",\"4337\":\"Panukulan\",\"4338\":\"Gen. Nakar\",\"4339\":\"Polilio\",\"4340\":\"Burdeos\",\"4341\":\"Patnonangan\",\"4342\":\"Jomalig\",\"4400\":\"Naga City\",\"4401\":\"Camaligan\",\"4402\":\"Canaman\",\"4403\":\"Magarao\",\"4404\":\"Bombon\",\"4405\":\"Calabanga\",\"4406\":\"Cabusao\",\"4407\":\"Libmanan\",\"4408\":\"Sipocot\",\"4409\":\"Lupi\",\"4410\":\"Ragay\",\"4411\":\"Del Gallego\",\"4412\":\"Gainza\",\"4413\":\"Milaor\",\"4414\":\"Minalabac\",\"4415\":\"San Fernando\",\"4416\":\"Pamplona\",\"4417\":\"Pasacao\",\"4418\":\"Pili\",\"4419\":\"Ocampo\",\"4420\":\"Tigaon\",\"4421\":\"Sagnay\",\"4422\":\"Goa\",\"4423\":\"San Jose\",\"4424\":\"Presentacion\",\"4425\":\"Lagunoy\",\"4426\":\"Tinambac\",\"4427\":\"Siruma\",\"4428\":\"Garchitorena\",\"4429\":\"Caramoan\",\"4430\":\"Bula\",\"4431\":\"Iriga City\",\"4432\":\"Baao\",\"4433\":\"Buhi\",\"4434\":\"Nabua\",\"4435\":\"Bato\",\"4436\":\"Balatan\",\"4500\":\"Legaspi City\",\"4501\":\"Daraga (Locsin)\",\"4502\":\"Camalig\",\"4503\":\"Guinobatan\",\"4504\":[\"Ligao\",\"Oas\"],\"4506\":\"Polangui\",\"4507\":\"Libon\",\"4508\":\"Sto. Domingo\",\"4509\":\"Bacacay\",\"4510\":\"Malilipot\",\"4511\":\"Tabaco\",\"4512\":\"Malinao\",\"4513\":\"Tiwi\",\"4514\":\"Manito\",\"4515\":\"Jovellar\",\"4516\":\"Pio Duran (Malacbalac)\",\"4517\":\"Rapu-rapu\",\"4600\":\"Daet\",\"4601\":\"Mercedez\",\"4602\":\"Talisay\",\"4603\":\"Vinzons\",\"4604\":\"Labo\",\"4605\":\"Paracale\",\"4606\":[\"Capalonga\",\"Jose Panganiban\"],\"4608\":\"Basud\",\"4609\":\"San Vicente\",\"4610\":\"Imelda\",\"4611\":\"Santa Elena\",\"4612\":\"Tulay na Lupa\",\"4700\":\"Sorsogon\",\"4701\":\"Bacon\",\"4702\":\"Casiguran\",\"4703\":\"Juban\",\"4704\":\"Bulusan\",\"4705\":\"Magallanes\",\"4706\":\"Bulan\",\"4707\":\"Irosin\",\"4708\":\"Matnog\",\"4709\":\"Sta. Magdalena\",\"4710\":\"Gubat\",\"4711\":\"Prieto Diaz\",\"4712\":\"Barcelona\",\"4713\":\"Castilla\",\"4714\":\"Pilar\",\"4715\":\"Donsol\",\"4800\":\"Virac\",\"4801\":\"Bato\",\"4802\":\"San Miguel\",\"4803\":\"Baras\",\"4804\":\"Gigmoto\",\"4805\":\"Viga\",\"4806\":\"Panganiban\",\"4807\":\"Bagamanoc\",\"4808\":\"Caramoran\",\"4809\":\"Pandan\",\"4810\":\"San Andres\",\"4900\":\"Boac\",\"4901\":\"Mogpog\",\"4902\":\"Santa Cruz\",\"4903\":\"Torrijos\",\"4904\":\"Buenavista\",\"4905\":\"Gasan\",\"5000\":\"Iloilo City\",\"5001\":\"Pavia\",\"5002\":\"Santa Barbara\",\"5003\":\"Leganes\",\"5004\":\"Zarraga\",\"5005\":\"New Lucena\",\"5006\":\"Dumangas\",\"5007\":\"Barotac Nuevo\",\"5008\":\"Pototan\",\"5009\":\"Anilao\",\"5010\":\"Banate\",\"5011\":\"Barotac Viejo\",\"5012\":\"Ajuy\",\"5013\":\"Conception\",\"5014\":\"Sara\",\"5015\":\"San Dionisio\",\"5016\":\"Batad\",\"5017\":\"Estancia\",\"5018\":\"Balasan\",\"5019\":\"Carles\",\"5020\":\"Oton\",\"5021\":\"Tigbauan\",\"5022\":\"Guimbal\",\"5023\":\"Miagao\",\"5024\":\"San Joaquin\",\"5025\":\"San Miguel\",\"5026\":\"Leon\",\"5027\":\"Tubungan\",\"5028\":\"Alimodian\",\"5029\":\"Igbaras\",\"5030\":\"Maasin\",\"5031\":\"Cabatuan\",\"5032\":\"Mina\",\"5033\":\"Badiangan\",\"5034\":\"Janiuay\",\"5035\":\"Dingle\",\"5036\":\"San Enrique\",\"5037\":\"Passi\",\"5038\":\"Dueñas\",\"5039\":\"San Rafael\",\"5040\":\"Calinog\",\"5041\":\"Bingawan\",\"5042\":\"Lambunao\",\"5043\":\"Lemery\",\"5044\":\"Buenavista\",\"5045\":\"Jordan\",\"5046\":\"Nueva Valencia\",\"5100\":\"San Jose\",\"5101\":\"Magsaysay\",\"5102\":\"Calintaan\",\"5103\":\"Rizal\",\"5104\":\"Sablayan\",\"5105\":\"Santa Cruz\",\"5106\":\"Mamburao\",\"5107\":\"Paluan\",\"5108\":\"Abra de Ilog\",\"5109\":\"Lubang\",\"5110\":\"Tilik\",\"5111\":\"Looc\",\"5200\":\"Calapan\",\"5201\":\"Baco\",\"5202\":\"San Teodoro\",\"5203\":\"Puerto Galera\",\"5205\":\"Victoria\",\"5206\":\"Pola\",\"5207\":\"Socorro\",\"5208\":\"Mansalay\",\"5209\":\"Gloria\",\"5210\":\"Bansud\",\"5211\":\"Bongabon\",\"5212\":\"Roxas\",\"5214\":\"Bulalacao\",\"5300\":\"Puerto Princesa City\",\"5301\":\"Iwahig Penal Colony\",\"5302\":\"Aborlan\",\"5303\":\"Narra (Panacan)\",\"5304\":\"Quezon\",\"5305\":\"Brooke's Point\",\"5306\":\"Bataraza\",\"5307\":\"Balabac\",\"5308\":\"Roxas\",\"5309\":\"San Vicente\",\"5310\":\"Dumaran\",\"5311\":\"Araceli\",\"5312\":\"Taytay\",\"5313\":\"El Nido (Baquit)\",\"5314\":\"Linapacan\",\"5315\":\"Culion\",\"5316\":\"Coron\",\"5317\":\"Busuanga\",\"5318\":\"Cuyo\",\"5319\":\"Magsaysay\",\"5320\":\"Agutaya\",\"5321\":\"Cagayancillo\",\"5322\":\"Kalayaan\",\"5400\":\"Masbate\",\"5401\":\"Mobo\",\"5402\":\"Uson\",\"5403\":\"Dimasalang\",\"5404\":\"Palanas\",\"5405\":[\"Cataingan\",\"Cawayan\"],\"5406\":\"Pio V. Cruz\",\"5407\":\"Esperanza\",\"5408\":\"Placer\",\"5410\":\"Milagros\",\"5411\":\"Mandaon\",\"5412\":\"Balud\",\"5413\":\"Baleno\",\"5414\":\"Aroroy\",\"5415\":\"Batuan\",\"5416\":\"San Fernando\",\"5417\":\"San Jacinto\",\"5418\":\"Montreal\",\"5419\":\"Claveria\",\"5420\":\"San Pascual\",\"5421\":\"Buenavista\",\"5500\":\"Romblon\",\"5501\":\"San Agustin\",\"5502\":\"Imelda\",\"5503\":\"Calatrava\",\"5504\":\"San Andres\",\"5505\":\"Odiongan\",\"5506\":\"Ferrol\",\"5507\":\"Looc\",\"5508\":\"Santa Fe\",\"5509\":\"Alcantara\",\"5510\":\"San Jose\",\"5511\":\"Magdiwang\",\"5512\":\"Cajidiocan\",\"5513\":\"San Fernando\",\"5514\":\"Corcuera\",\"5515\":\"Banton (Jones)\",\"5516\":\"Conception\",\"5600\":\"Kalibo\",\"5601\":\"Banga\",\"5602\":\"Libacao\",\"5603\":\"Madalag\",\"5604\":\"Numancia\",\"5605\":\"Lezo\",\"5606\":\"Malinao\",\"5607\":\"Nabas\",\"5608\":\"Malay\",\"5609\":\"Buruanga\",\"5610\":\"New Washington\",\"5611\":\"Makato\",\"5612\":\"Tangalan\",\"5613\":\"Ibajay\",\"5614\":\"Balite\",\"5615\":\"Batan\",\"5616\":\"Altavas\",\"5700\":\"San Jose\",\"5701\":\"Belison\",\"5702\":\"Patnongan\",\"5703\":\"Valderama\",\"5704\":\"Bugasong\",\"5705\":\"Lawa-an\",\"5706\":\"Barbasa\",\"5707\":\"Tibiao\",\"5708\":\"Culasi\",\"5709\":\"Sebaste\",\"5710\":\"Libertad\",\"5711\":\"Caluya\",\"5712\":\"Pandan\",\"5713\":\"Sibalom\",\"5714\":\"San Remedio\",\"5715\":\"Hamtic\",\"5716\":\"Tobias Fornier (Dao)\",\"5717\":\"Anini-y\",\"5800\":\"Roxas City\",\"5801\":\"Panay\",\"5802\":\"Puntevedra\",\"5803\":\"Pres. Roxas\",\"5804\":\"Pilar\",\"5805\":\"Ivisan\",\"5807\":\"Mambusao\",\"5808\":\"Jamindan\",\"5809\":\"Ma-ayon\",\"5810\":\"Dao\",\"5811\":\"Cuartero\",\"5812\":\"Dumarao\",\"5813\":\"Dumalag\",\"5814\":\"Tapaz\",\"5815\":\"Panitan\",\"5816\":\"Sapian\",\"6000\":\"Cebu City\",\"6001\":\"Consolacion\",\"6002\":\"Liloan\",\"6003\":\"Compostela\",\"6004\":\"Danao\",\"6005\":\"Carmen\",\"6006\":\"Catmon\",\"6007\":\"Sogod\",\"6008\":\"Borbon\",\"6009\":\"Tabogon\",\"6010\":\"Bogo\",\"6011\":\"San Remegio\",\"6012\":\"Medellin\",\"6013\":\"Daang-Bantayan\",\"6014\":\"Mandaue City\",\"6015\":\"Lapu-Lapu City\",\"6016\":\"Mactan Airport\",\"6017\":\"Cordova\",\"6018\":\"San Fernando\",\"6019\":\"Carcar\",\"6020\":\"Sibonga\",\"6021\":\"Argao\",\"6022\":\"Dalaguete\",\"6023\":\"Alcoy\",\"6024\":\"Boljoon\",\"6025\":\"Oslob\",\"6026\":[\"Ginatilan\",\"Santander\"],\"6027\":\"Samboan\",\"6029\":\"Malabuyoc\",\"6030\":\"Alegria\",\"6031\":\"Badian\",\"6032\":\"Moalboal\",\"6033\":\"Alcantara\",\"6034\":\"Ronda\",\"6035\":\"Dumanjug\",\"6036\":\"Barile\",\"6037\":\"Naga\",\"6038\":\"Toledo City\",\"6039\":\"Pinamungahan\",\"6040\":\"Aloguinsan\",\"6041\":\"Balamban\",\"6042\":[\"Asturias\",\"Bantayan\"],\"6043\":\"Tuburan\",\"6044\":\"Tabuelan\",\"6045\":\"Talisay\",\"6046\":\"Minglanilla\",\"6047\":\"Santa Fe\",\"6048\":\"Pilar\",\"6049\":\"Poro\",\"6050\":\"San Francisco\",\"6051\":\"Todela\",\"6053\":\"Madridejos\",\"6100\":[\"Bacolod City\",\"Kabangkalan\"],\"6101\":\"Bago City\",\"6102\":\"Pulupandan\",\"6103\":\"Villadolid\",\"6104\":\"San Enrique\",\"6105\":\"Pontevedra\",\"6106\":\"Hinigaran\",\"6107\":\"Binalbagan\",\"6108\":\"Himamaylan\",\"6109\":\"Ilog\",\"6110\":\"Candoni\",\"6112\":\"Kauayan\",\"6113\":\"Sipalay\",\"6114\":\"Hinoba-ari\",\"6115\":\"Talisay\",\"6116\":\"Silay City\",\"6117\":\"Silay Hawaiian Central\",\"6118\":\"Enrique Magalona\",\"6119\":\"Victorias\",\"6120\":\"Manapla\",\"6121\":\"Cadiz City\",\"6122\":\"Sagay\",\"6123\":\"Paraiso (Fabrica)\",\"6124\":\"Escalante\",\"6125\":\"Toboso\",\"6126\":\"Calatrava\",\"6127\":\"San Carlos City\",\"6128\":\"Isabela\",\"6129\":\"Murcia\",\"6130\":\"La Carlota City\",\"6131\":\"La Castillana\",\"6132\":\"Moises Padilla\",\"6200\":\"Dumaguete City\",\"6201\":\"Sibulan\",\"6202\":\"San Jose\",\"6203\":\"Amian\",\"6204\":\"Tanjay\",\"6205\":\"Pamplona\",\"6206\":\"Bais City\",\"6208\":[\"Mabinay\",\"Manjuyod\"],\"6209\":\"Bindoy\",\"6210\":\"Ayungon\",\"6211\":\"Tayasan\",\"6212\":\"Jimalalud\",\"6213\":\"La Libertad\",\"6214\":\"Guihulngan\",\"6215\":\"Valencia\",\"6216\":\"Bacung\",\"6217\":\"Dauin\",\"6218\":\"Zamboanguita\",\"6219\":\"Siaton\",\"6220\":\"Sta. Catalina\",\"6221\":\"Bayawan\",\"6222\":\"Basay\",\"6223\":\"Canlaon City\",\"6224\":\"Valle Hermoso\",\"6225\":\"Siquijor\",\"6226\":\"Larena\",\"6227\":\"San Juan\",\"6228\":\"Lazi\",\"6229\":\"Maria\",\"6230\":\"Enrile Villanueva\",\"6300\":\"Tagbilaran City\",\"6301\":\"Baclayon\",\"6302\":\"Albuquerque\",\"6303\":\"Loay\",\"6304\":\"Lila\",\"6305\":\"Dimiao\",\"6306\":\"Valencia\",\"6307\":\"Garcia Hernandez\",\"6308\":\"Jagna\",\"6309\":\"Duero\",\"6310\":\"Guindulman\",\"6311\":\"Anda\",\"6312\":\"Candijay\",\"6313\":\"Mabini\",\"6314\":\"Alicia\",\"6315\":\"Ubay\",\"6316\":\"Loboc\",\"6317\":\"Bilar\",\"6318\":\"Batuan\",\"6319\":\"Carmen\",\"6320\":\"Sierra Bullones\",\"6321\":\"Pilar\",\"6322\":\"Daguhoy\",\"6323\":\"San Miguel\",\"6324\":\"Trinidad\",\"6325\":\"Talibon\",\"6326\":\"Bien Unido\",\"6327\":\"Loon\",\"6328\":\"Calape\",\"6329\":\"Tubigon\",\"6330\":\"Clarin\",\"6331\":\"Sagbayan\",\"6332\":\"Inabanga\",\"6333\":\"Buenavista\",\"6334\":\"Jetafe\",\"6335\":\"Antiquera\",\"6336\":\"Maribujok\",\"6337\":\"Corella\",\"6338\":\"Sikatuna\",\"6339\":\"Dauis\",\"6340\":\"Panglao\",\"6341\":\"Cortez\",\"6342\":\"Balilihan\",\"6343\":\"Catigbi-an\",\"6344\":\"Danao\",\"6345\":\"San Isidro\",\"6346\":\"Carlos P. Garcia (Dao)\",\"6347\":\"Sevilla\",\"6400\":\"Catarman\",\"6401\":\"Bobon\",\"6402\":\"San Jose\",\"6403\":\"Lope de Vega\",\"6404\":\"Lavezares\",\"6405\":\"Allen\",\"6406\":\"Victoria\",\"6407\":\"San Antonio\",\"6408\":\"Capul\",\"6409\":\"San Isidro\",\"6410\":\"Biri\",\"6411\":\"Laoang\",\"6412\":\"Mapanas\",\"6413\":\"Pambujan\",\"6414\":\"Silvino Lubos\",\"6415\":\"San Roque\",\"6416\":\"Rosario\",\"6417\":\"Mondragon\",\"6418\":\"Catubig\",\"6419\":\"San Vicente\",\"6420\":\"La Navas\",\"6421\":\"Palapag\",\"6422\":\"Gamay\",\"6423\":\"Lapineg\",\"6500\":\"Tacloban City\",\"6501\":\"Palo\",\"6502\":\"Tanauan\",\"6503\":\"Tolosa\",\"6504\":\"Tabontabon\",\"6505\":\"Dulag\",\"6506\":\"Julita\",\"6507\":\"Mayorga\",\"6508\":\"La Paz\",\"6509\":\"Macarthur\",\"6510\":\"Abuyog\",\"6511\":\"Javier\",\"6512\":\"Mahaplag\",\"6513\":\"Santa Fe\",\"6514\":\"Pastrana\",\"6515\":\"Dagami\",\"6516\":\"Burauen\",\"6517\":\"Alangalang\",\"6518\":\"San Miguel\",\"6519\":\"Barugo\",\"6520\":\"Babatngon\",\"6521\":\"Baybay\",\"6522\":\"Inopacan\",\"6523\":\"Hindang\",\"6524\":\"Hilongos\",\"6525\":\"Bato\",\"6526\":\"Matalom\",\"6527\":\"Jaro\",\"6528\":\"Tunga\",\"6529\":\"Carigara\",\"6530\":\"Capoocan\",\"6531\":\"Kananga\",\"6532\":\"Matag-Ob\",\"6533\":\"Leyte\",\"6534\":\"Calubian\",\"6535\":\"San Isidro\",\"6536\":\"Tabango\",\"6537\":\"Villaba\",\"6538\":\"Palumpon\",\"6539\":\"Isabel\",\"6540\":\"Merida\",\"6541\":\"Ormoc City\",\"6542\":\"Albuera\",\"6543\":\"Naval\",\"6544\":\"Almeria\",\"6545\":\"Kawayan\",\"6546\":\"Maripipi\",\"6547\":\"Culaba\",\"6548\":\"Caibiran\",\"6549\":\"Biliran\",\"6550\":\"Cabuccayan\",\"6600\":\"Maasin\",\"6601\":\"Macrohon\",\"6602\":\"Padre Burgos\",\"6603\":\"Malitbog\",\"6604\":\"Bomtoc\",\"6605\":\"Tomas Oppus\",\"6606\":\"Sogod\",\"6607\":\"Silago\",\"6608\":\"Hinunangan\",\"6609\":\"Hinundayan\",\"6610\":\"Anahawan\",\"6611\":\"San Juan (Cabalian)\",\"6612\":\"Liloan\",\"6613\":\"San Francisco\",\"6614\":\"Pintuyan\",\"6615\":\"Libagon\",\"6616\":\"St. Bernard\",\"6617\":\"San Ricardo\",\"6700\":\"Catbalogan\",\"6701\":\"Jiabong\",\"6702\":\"Motiong\",\"6703\":\"Wright\",\"6704\":\"Tarangnan\",\"6705\":\"Pagsanjan\",\"6706\":\"Gandara\",\"6707\":\"San Jorge\",\"6708\":\"Matuguinao\",\"6709\":\"Sta. Margarita\",\"6710\":\"Calbayog City\",\"6711\":\"Sto. Nino\",\"6712\":\"Tagapulan\",\"6713\":\"Hinbangan\",\"6714\":\"San Sebastian\",\"6715\":\"Calbiga\",\"6716\":\"Pinabacdao\",\"6717\":\"Villareal\",\"6718\":\"Sta. Rita\",\"6719\":\"Talarora\",\"6720\":\"Basey\",\"6721\":\"Marabut\",\"6722\":\"Daram\",\"6723\":\"San Jose de Bauan\",\"6724\":\"Almagro\",\"6725\":\"Zumarraga\",\"6800\":\"Borongan\",\"6801\":\"Balangkayan\",\"6802\":\"Maydulog\",\"6803\":\"Llorente\",\"6804\":\"Hernani\",\"6805\":\"Gen. McArthur\",\"6806\":\"Can-Avid\",\"6807\":\"Salcedo\",\"6808\":\"Mercedes\",\"6809\":\"Guiuan\",\"6810\":\"Quinapundan\",\"6811\":\"Giporlos\",\"6812\":\"Balangiga\",\"6813\":\"Lawa-an\",\"6814\":\"San Julian\",\"6815\":\"Sulat\",\"6816\":\"Taft\",\"6817\":\"Dolores\",\"6818\":\"Oras\",\"6819\":\"Jipapad\",\"6820\":\"Maslog\",\"6821\":\"San Policarpio\",\"6822\":\"Arteche\",\"7000\":\"Zamboanga City\",\"7001\":\"Ipil\",\"7002\":\"Reseller Lim\",\"7003\":\"Titay\",\"7004\":\"Naga\",\"7005\":\"Kabasalan\",\"7006\":\"Siay\",\"7007\":\"Imelda\",\"7008\":\"Payao\",\"7009\":\"Buug\",\"7010\":\"Mabuhay\",\"7011\":\"Bayog\",\"7012\":\"Talusan\",\"7013\":\"Kumalarang\",\"7014\":\"Lakewood\",\"7015\":\"Dumalinao\",\"7016\":\"Pagadian City\",\"7017\":\"Labangan\",\"7018\":\"Tungawan\",\"7019\":\"Tukuran\",\"7020\":\"Aurora\",\"7021\":\"Midsalip\",\"7022\":\"Don Mariano Marcos\",\"7023\":\"Molave\",\"7024\":\"Ramon Magsaysay\",\"7025\":\"Tambulig\",\"7026\":\"Mahayag\",\"7027\":\"Josefina\",\"7028\":\"Dumingag\",\"7029\":\"San Miguel\",\"7030\":\"Dinas\",\"7031\":\"San Pablo\",\"7032\":\"Dimataling\",\"7033\":\"Pitogo\",\"7034\":\"Tabina\",\"7035\":\"Margo Sa Tubig\",\"7036\":\"Vicencio Sagun\",\"7037\":\"Lapuyan\",\"7038\":\"Malangas\",\"7039\":\"Diplahan\",\"7040\":\"Alicia\",\"7041\":\"Olutanga\",\"7042\":\"Guipos\",\"7043\":\"Tigbad\",\"7100\":\"Dipolog City\",\"7101\":\"Dapitan City\",\"7102\":\"Roxas\",\"7103\":\"Sibutad\",\"7104\":\"Rizal\",\"7105\":\"Pinan\",\"7106\":\"Polanco\",\"7107\":\"Mutia\",\"7108\":[\"Gutalac\",\"Sergio Osmena\"],\"7109\":\"Katipunan\",\"7110\":\"Manukan\",\"7111\":\"Jose Dalman (Ponot)\",\"7112\":\"Sindangan (Leon B. Postigo)\",\"7113\":\"Siayan\",\"7114\":\"Salug\",\"7115\":\"Liloy\",\"7116\":\"Tampilisan\",\"7117\":\"Labason\",\"7119\":\"La Libertad\",\"7120\":\"Siocon\",\"7121\":\"Siraway\",\"7122\":\"Sibuco\",\"7123\":\"Baliguian\",\"7124\":\"Kalawit\",\"7200\":\"Ozamis City\",\"7201\":\"Clarin\",\"7202\":\"Tudela\",\"7203\":\"Sinacaban\",\"7204\":\"Jimenez\",\"7205\":\"Panaon\",\"7206\":\"Aloran\",\"7207\":\"Oroquieta City\",\"7208\":\"Lopez Jaena\",\"7209\":\"Plaridel\",\"7210\":\"Calamba\",\"7211\":\"Baliangao\",\"7212\":\"Sapang Dalaga\",\"7213\":\"Concepcion\",\"7214\":\"Tangub City\",\"7215\":\"Bonifacio\",\"7300\":\"Isabela de Basilan\",\"7301\":\"Lantawan\",\"7302\":\"Lamitan\",\"7303\":\"Maluso\",\"7304\":\"Tipo-tipo\",\"7305\":\"Sumisip\",\"7306\":\"Tuburan\",\"7400\":\"Jolo\",\"7401\":\"Patikul\",\"7402\":\"Panamao\",\"7403\":\"Talipao\",\"7404\":\"Luuk\",\"7405\":\"Pata\",\"7406\":\"Tongkil\",\"7407\":\"Indanan\",\"7408\":\"Parang\",\"7409\":\"Maimbung\",\"7410\":\"Tapul\",\"7411\":\"Lugus\",\"7412\":\"Siasi\",\"7413\":\"Marungas\",\"7414\":\"Panguntaran\",\"7415\":\"Panglima Estino\",\"7416\":\"Kalingalan Kalauang\",\"7500\":\"Bongao\",\"7501\":\"Balimbing\",\"7502\":\"Tandu Bas\",\"7503\":\"Sapa-sapa\",\"7504\":\"South Ubian\",\"7505\":\"Simunol\",\"7506\":\"Sitangkai\",\"7507\":\"Taganak (Turtle Island)\",\"7508\":\"Cagayan de Sulu\",\"7509\":\"Languyan\",\"8000\":\"Davao City\",\"8001\":\"Santa Cruz\",\"8002\":\"Digos\",\"8003\":\"Matanao\",\"8004\":\"Magsaysay\",\"8005\":\"Bansalan\",\"8006\":\"Hagunoy\",\"8007\":\"Padada\",\"8008\":\"Kiblawan\",\"8010\":\"Malalag\",\"8011\":\"Santa Maria\",\"8012\":\"Malita\",\"8013\":\"Don Marcelino\",\"8014\":\"Jose Abad Santos\",\"8015\":\"Sarangani\",\"8100\":\"Tagum\",\"8101\":\"Carmen\",\"8102\":\"Asuncion\",\"8103\":\"San Vicente\",\"8104\":\"New Corella\",\"8105\":\"Panabo\",\"8112\":\"Santo Tomas\",\"8113\":\"Kapalong\",\"8116\":\"San Mariano\",\"8118\":\"Babak\",\"8119\":\"Samal\",\"8120\":\"Kaputian\",\"8200\":\"Mati\",\"8201\":\"Tarragona\",\"8202\":\"Manay\",\"8203\":\"Caraga\",\"8204\":\"Baganga\",\"8205\":\"Cateel\",\"8206\":\"Boston\",\"8207\":\"Lopon\",\"8208\":\"Banaybanay\",\"8209\":\"San Isidro\",\"8210\":\"Gov. Generoso\",\"8300\":\"Tandag\",\"8301\":\"San Miguel\",\"8302\":\"Tago\",\"8303\":\"Bayabas\",\"8305\":\"San Agustin\",\"8306\":\"Marihatag\",\"8307\":\"Lianga\",\"8308\":\"Tagbina\",\"8309\":\"Barobo\",\"8310\":\"Hinatuan\",\"8311\":[\"Bislig\",\"Cagwait\"],\"8312\":\"Lingig\",\"8313\":\"Cortez\",\"8314\":\"Lanuza\",\"8315\":\"Carmen\",\"8316\":\"Madrid\",\"8317\":\"Cantillan\",\"8318\":\"Carrascal\",\"8400\":\"Surigao City\",\"8401\":\"San Francisco\",\"8402\":\"Malimano\",\"8403\":\"Tagana-an\",\"8404\":\"Sison\",\"8405\":\"Placer\",\"8406\":\"Tubod\",\"8407\":\"Mainit\",\"8408\":\"Bacuag\",\"8409\":\"Gigaquit\",\"8410\":\"Claver\",\"8411\":\"Cagdianao\",\"8412\":\"Dinagat\",\"8413\":\"Basilisa (Rizal)\",\"8414\":\"Libjo (Albor)\",\"8415\":\"Loreto\",\"8416\":\"Socorro\",\"8417\":\"Dapa\",\"8418\":\"Del Carmen\",\"8419\":\"Gen. Luna\",\"8420\":\"Pilar\",\"8421\":\"San Isidro\",\"8422\":\"Santa Monica\",\"8423\":\"San Benito\",\"8424\":\"Burgos\",\"8425\":\"Alegria\",\"8426\":\"Tubajon\",\"8427\":\"San Jose\",\"8500\":\"Prosperidad\",\"8501\":\"San Francisco\",\"8502\":\"Bayugan\",\"8503\":\"Sibagat\",\"8504\":\"Rosario\",\"8505\":\"Trento\",\"8506\":\"Bunawan\",\"8507\":\"Loreto\",\"8508\":\"La Paz\",\"8509\":\"Veruela\",\"8510\":\"Talacogon\",\"8511\":\"San Luis\",\"8512\":\"Santa Josefa\",\"8513\":\"Esperanza\",\"8600\":\"Butuan City\",\"8601\":\"Buenavista\",\"8602\":\"Nasipit\",\"8603\":\"Carmen\",\"8604\":\"Magallanes\",\"8605\":\"Cabadbaran\",\"8606\":\"Tubay\",\"8607\":\"Jabonga\",\"8608\":\"Santiago\",\"8609\":\"Kitcharao\",\"8610\":\"La Nieves\",\"8611\":\"Remedios T. Romualdez\",\"8700\":\"Malaybalay\",\"8701\":\"Sumilao\",\"8702\":\"Impasugong\",\"8703\":\"Manolo Fortich\",\"8704\":\"Malitbog\",\"8705\":\"Philips\",\"8706\":\"Libuna\",\"8707\":\"Baungon\",\"8708\":\"Talakag\",\"8709\":\"Valencia\",\"8710\":\"Musuan\",\"8711\":\"San Fernando\",\"8712\":\"Don Carlos\",\"8713\":\"Kadingilan\",\"8714\":\"Maramag\",\"8715\":\"Quezon\",\"8716\":\"Kitaotao\",\"8717\":\"Pangantucan\",\"8718\":\"Kalilangan\",\"8719\":\"Dangcagan\",\"8720\":\"Kibawe\",\"8721\":\"Damulog\",\"8722\":\"Lantapan\",\"8723\":\"Kabanglasan\",\"8800\":\"Nabunturan\",\"8801\":\"Montevista\",\"8802\":\"Mawab\",\"8803\":\"Compostela\",\"8804\":\"New Bataan\",\"8805\":\"Monkayo\",\"8806\":\"Maco\",\"8807\":\"Mabini\",\"8808\":\"Maragusan\",\"8809\":\"Pantukan\",\"8810\":\"Laak\",\"9000\":\"Cagayan de Oro City\",\"9001\":\"Tagoloan\",\"9002\":\"Villanueva\",\"9003\":\"Jasaan\",\"9004\":\"Claveria\",\"9005\":\"Balingasag\",\"9006\":\"Lagonglong\",\"9007\":\"Salay\",\"9008\":\"Binuangan\",\"9009\":\"Sugbongcogon\",\"9010\":\"Kinogitan\",\"9011\":\"Balinguan\",\"9012\":\"Talisayan\",\"9013\":\"Medina\",\"9014\":\"Gingoog City\",\"9015\":\"Magsaysay\",\"9016\":\"Opol\",\"9017\":\"El Salvador\",\"9018\":\"Alubijid\",\"9019\":\"Laguidingan\",\"9020\":\"Gitaum\",\"9021\":\"Libertad\",\"9022\":\"Initao\",\"9023\":\"Naawan\",\"9024\":\"Manticao\",\"9025\":\"Lugait\",\"9100\":\"Mambajao\",\"9101\":\"Mahinog\",\"9102\":\"Guinsiliban\",\"9103\":\"Sagay\",\"9104\":\"Catarman\",\"9200\":\"Iligan City\",\"9201\":\"Linamon\",\"9202\":\"Kauswagan\",\"9203\":\"Matugao\",\"9204\":\"Poona Piagapo\",\"9205\":\"Bacolod\",\"9206\":\"Maigo\",\"9207\":\"Kolambugan\",\"9208\":\"Pantao Ragat\",\"9209\":\"Tubod\",\"9210\":\"Baroy\",\"9211\":\"Lala\",\"9212\":\"Salvador\",\"9213\":\"Sapad\",\"9214\":\"Kapatagan\",\"9215\":\"Karomatan\",\"9216\":\"Nunungan\",\"9217\":\"Baloi\",\"9218\":\"Pantar\",\"9219\":\"Munai\",\"9220\":\"Tangkal\",\"9221\":\"Magsaysay\",\"9222\":\"Tagoloan\",\"9300\":\"Malabang\",\"9302\":\"Blabagan\",\"9303\":[\"Maragong\",\"Sultan Gumander\"],\"9304\":\"Tubaran\",\"9305\":\"Butig\",\"9306\":\"Lumbayanague\",\"9307\":\"Lumbatan\",\"9308\":\"Macador Andong\",\"9309\":\"Bayang\",\"9310\":\"Binidayan\",\"9311\":\"Ganassi\",\"9312\":\"Pagayawan\",\"9313\":\"Pualas\",\"9314\":\"Madamba\",\"9315\":\"Madalum\",\"9316\":\"Bacolod Grande\",\"9317\":\"Tugaya\",\"9318\":\"Balindong\",\"9319\":\"Calanogas\",\"9320\":\"Baumbaran\",\"9321\":\"Tagoloan II\",\"9400\":\"Kidapawan\",\"9401\":\"Makilala\",\"9402\":\"M'lang\",\"9403\":\"Tulunan\",\"9404\":\"Magpet\",\"9405\":\"Pres. Roxas\",\"9406\":\"Matalam\",\"9407\":\"Kabacan\",\"9408\":\"Carmen\",\"9409\":\"Pikit\",\"9410\":\"Midsayap\",\"9411\":\"Libungan\",\"9412\":\"Pigkawayan\",\"9413\":\"Alamada\",\"9414\":\"Antipas\",\"9415\":\"Aleosan\",\"9416\":\"Banisilan\",\"9417\":\"Arakan\",\"9500\":\"Gen. Santos City\",\"9501\":\"Alabel\",\"9502\":\"Maasim\",\"9503\":\"Malungon\",\"9504\":\"Polomolok\",\"9505\":\"Tupi\",\"9506\":\"Koronadal\",\"9507\":\"Tampacan\",\"9508\":\"Norala\",\"9509\":\"Santo Nino\",\"9510\":\"Tantangan\",\"9511\":\"Banga\",\"9512\":\"Surallah\",\"9513\":\"T'boli\",\"9514\":\"Kiamba\",\"9515\":\"Maitum\",\"9516\":\"Malapatan\",\"9517\":\"Glan\",\"9600\":\"Cotabato City\",\"9601\":\"Datu Odin Sinsuat (Dinaig)\",\"9602\":\"Upi\",\"9603\":\"South Upi\",\"9604\":\"Parang\",\"9605\":\"Sultan Kudarat\",\"9606\":\"Kabuntulan\",\"9607\":\"Datu Piang\",\"9608\":\"Maganoy\",\"9609\":\"Ampatuan\",\"9610\":\"Pagalungan\",\"9611\":\"Sultan Sa Barongis\",\"9612\":\"Talayan\",\"9613\":\"Matanog\",\"9614\":\"Barira\",\"9615\":\"Buldon\",\"9616\":\"Buluan\",\"9617\":\"Datu Paglas\",\"9618\":\"Gen. S. K. Datun\",\"9700\":\"Marawi City\",\"9701\":\"Saguiaran\",\"9702\":\"Mulondo\",\"9703\":\"Lumba Bayabao\",\"9704\":\"Tamparan\",\"9705\":\"Poona Bayabao\",\"9706\":\"Masio\",\"9708\":\"Bubong\",\"9709\":\"Kapal\",\"9710\":\"Piagapo\",\"9711\":\"Marangtao\",\"9712\":\"Taraka\",\"9713\":\"Ramain-Ditsaan\",\"9714\":\"Buadiposo Buntong\",\"9715\":\"Maguing\",\"9716\":\"Wao\",\"9800\":\"Takurong\",\"9801\":\"Colombio\",\"9802\":\"Mariano Marcos\",\"9803\":\"Lutayan\",\"9804\":\"Pres. Quirino\",\"9805\":\"Isulan\",\"9806\":\"Esperanza (Ampatuan)\",\"9807\":\"Lebak (Salaman)\",\"9808\":\"Kalamansig\",\"9809\":\"Palimbang\",\"9810\":\"Bagumbayan\",\"9811\":\"Sen. Ninoy Aquino\",\"0400\":\"Int'l Correspondence School\",\"0401\":\"Asian Development Bank\",\"0410\":\"Radio Bible Class\",\"0420\":\"Bible Church on the Air\",\"0550\":\"Feblas Col. of Bible\",\"0560\":\"Far Eastern Broadcasting\"}");

/***/ }),

/***/ "./resources/js/address.js":
/*!*********************************!*\
  !*** ./resources/js/address.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var select_philippines_address__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! select-philippines-address */ "./node_modules/select-philippines-address/index.js");
/* harmony import */ var select_philippines_address__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(select_philippines_address__WEBPACK_IMPORTED_MODULE_0__);

var zipcodes = __webpack_require__(/*! zipcodes-ph */ "./node_modules/zipcodes-ph/build/index.js");
var businessRegion = document.getElementById("businessRegion");
var businessProvince = document.getElementById("businessProvince");
var businessCity = document.getElementById("businessCity");
var businessBarangay = document.getElementById("businessBarangay");
var newOption = document.createElement("option");
Object(select_philippines_address__WEBPACK_IMPORTED_MODULE_0__["regions"])().then(function (region) {
  return region.map(function (data) {
    businessRegion.innerHTML += "<option value='" + data.region_name + "' data-regCode='" + data.region_code + "'>" + data.region_name + "</option>";
  });
});

//get province
businessRegion.addEventListener('change', function () {
  var regCode = this.options[this.selectedIndex].getAttribute("data-regCode");
  businessProvince.innerHTML = "<option disabled selected>Province</option>";
  Object(select_philippines_address__WEBPACK_IMPORTED_MODULE_0__["provinces"])(regCode).then(function (province) {
    return province.map(function (data) {
      businessProvince.innerHTML += "<option value=" + data.province_name + " data-regCode=" + data.province_code + ">" + data.province_name + "</option>";
    });
  });
});

//get city
businessProvince.addEventListener('change', function () {
  var regCode = this.options[this.selectedIndex].getAttribute("data-regCode");
  businessCity.innerHTML = "<option disabled selected>City/Municipality</option>";
  Object(select_philippines_address__WEBPACK_IMPORTED_MODULE_0__["cities"])(regCode).then(function (province) {
    return province.map(function (data) {
      businessCity.innerHTML += "<option value=" + data.city_name + " data-regCode=" + data.city_code + ">" + data.city_name + "</option>";
    });
  });
});
//get brgy and zipcode
businessCity.addEventListener('change', function () {
  var regCode = this.options[this.selectedIndex].getAttribute("data-regCode");
  businessBarangay.innerHTML = "<option disabled selected>Barangay</option>";
  Object(select_philippines_address__WEBPACK_IMPORTED_MODULE_0__["barangays"])(regCode).then(function (province) {
    return province.map(function (data) {
      businessBarangay.innerHTML += "<option value=" + data.brgy_name + " data-regCode=" + data.brgy_code + ">" + data.brgy_name + "</option>";
      console.log(data);
    });
  });
});

//get zipcode

/***/ }),

/***/ 1:
/*!***************************************!*\
  !*** multi ./resources/js/address.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\projects\test\bplo_applications\resources\js\address.js */"./resources/js/address.js");


/***/ })

/******/ });