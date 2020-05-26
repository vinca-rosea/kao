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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/milligram/dist/milligram.min.css":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/milligram/dist/milligram.min.css ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/*!\n * Milligram v1.3.0\n * https://milligram.github.io\n *\n * Copyright (c) 2017 CJ Patoilo\n * Licensed under the MIT license\n */\n\n*,*:after,*:before{box-sizing:inherit}html{box-sizing:border-box;font-size:62.5%}body{color:#606c76;font-family:'Roboto', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;font-size:1.6em;font-weight:300;letter-spacing:.01em;line-height:1.6}blockquote{border-left:0.3rem solid #d1d1d1;margin-left:0;margin-right:0;padding:1rem 1.5rem}blockquote *:last-child{margin-bottom:0}.button,button,input[type='button'],input[type='reset'],input[type='submit']{background-color:#9b4dca;border:0.1rem solid #9b4dca;border-radius:.4rem;color:#fff;cursor:pointer;display:inline-block;font-size:1.1rem;font-weight:700;height:3.8rem;letter-spacing:.1rem;line-height:3.8rem;padding:0 3.0rem;text-align:center;text-decoration:none;text-transform:uppercase;white-space:nowrap}.button:focus,.button:hover,button:focus,button:hover,input[type='button']:focus,input[type='button']:hover,input[type='reset']:focus,input[type='reset']:hover,input[type='submit']:focus,input[type='submit']:hover{background-color:#606c76;border-color:#606c76;color:#fff;outline:0}.button[disabled],button[disabled],input[type='button'][disabled],input[type='reset'][disabled],input[type='submit'][disabled]{cursor:default;opacity:.5}.button[disabled]:focus,.button[disabled]:hover,button[disabled]:focus,button[disabled]:hover,input[type='button'][disabled]:focus,input[type='button'][disabled]:hover,input[type='reset'][disabled]:focus,input[type='reset'][disabled]:hover,input[type='submit'][disabled]:focus,input[type='submit'][disabled]:hover{background-color:#9b4dca;border-color:#9b4dca}.button.button-outline,button.button-outline,input[type='button'].button-outline,input[type='reset'].button-outline,input[type='submit'].button-outline{background-color:transparent;color:#9b4dca}.button.button-outline:focus,.button.button-outline:hover,button.button-outline:focus,button.button-outline:hover,input[type='button'].button-outline:focus,input[type='button'].button-outline:hover,input[type='reset'].button-outline:focus,input[type='reset'].button-outline:hover,input[type='submit'].button-outline:focus,input[type='submit'].button-outline:hover{background-color:transparent;border-color:#606c76;color:#606c76}.button.button-outline[disabled]:focus,.button.button-outline[disabled]:hover,button.button-outline[disabled]:focus,button.button-outline[disabled]:hover,input[type='button'].button-outline[disabled]:focus,input[type='button'].button-outline[disabled]:hover,input[type='reset'].button-outline[disabled]:focus,input[type='reset'].button-outline[disabled]:hover,input[type='submit'].button-outline[disabled]:focus,input[type='submit'].button-outline[disabled]:hover{border-color:inherit;color:#9b4dca}.button.button-clear,button.button-clear,input[type='button'].button-clear,input[type='reset'].button-clear,input[type='submit'].button-clear{background-color:transparent;border-color:transparent;color:#9b4dca}.button.button-clear:focus,.button.button-clear:hover,button.button-clear:focus,button.button-clear:hover,input[type='button'].button-clear:focus,input[type='button'].button-clear:hover,input[type='reset'].button-clear:focus,input[type='reset'].button-clear:hover,input[type='submit'].button-clear:focus,input[type='submit'].button-clear:hover{background-color:transparent;border-color:transparent;color:#606c76}.button.button-clear[disabled]:focus,.button.button-clear[disabled]:hover,button.button-clear[disabled]:focus,button.button-clear[disabled]:hover,input[type='button'].button-clear[disabled]:focus,input[type='button'].button-clear[disabled]:hover,input[type='reset'].button-clear[disabled]:focus,input[type='reset'].button-clear[disabled]:hover,input[type='submit'].button-clear[disabled]:focus,input[type='submit'].button-clear[disabled]:hover{color:#9b4dca}code{background:#f4f5f6;border-radius:.4rem;font-size:86%;margin:0 .2rem;padding:.2rem .5rem;white-space:nowrap}pre{background:#f4f5f6;border-left:0.3rem solid #9b4dca;overflow-y:hidden}pre>code{border-radius:0;display:block;padding:1rem 1.5rem;white-space:pre}hr{border:0;border-top:0.1rem solid #f4f5f6;margin:3.0rem 0}input[type='email'],input[type='number'],input[type='password'],input[type='search'],input[type='tel'],input[type='text'],input[type='url'],textarea,select{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border:0.1rem solid #d1d1d1;border-radius:.4rem;box-shadow:none;box-sizing:inherit;height:3.8rem;padding:.6rem 1.0rem;width:100%}input[type='email']:focus,input[type='number']:focus,input[type='password']:focus,input[type='search']:focus,input[type='tel']:focus,input[type='text']:focus,input[type='url']:focus,textarea:focus,select:focus{border-color:#9b4dca;outline:0}select{background:url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"14\" viewBox=\"0 0 29 14\" width=\"29\"><path fill=\"#d1d1d1\" d=\"M9.37727 3.625l5.08154 6.93523L19.54036 3.625\"/></svg>') center right no-repeat;padding-right:3.0rem}select:focus{background-image:url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"14\" viewBox=\"0 0 29 14\" width=\"29\"><path fill=\"#9b4dca\" d=\"M9.37727 3.625l5.08154 6.93523L19.54036 3.625\"/></svg>')}textarea{min-height:6.5rem}label,legend{display:block;font-size:1.6rem;font-weight:700;margin-bottom:.5rem}fieldset{border-width:0;padding:0}input[type='checkbox'],input[type='radio']{display:inline}.label-inline{display:inline-block;font-weight:normal;margin-left:.5rem}.container{margin:0 auto;max-width:112.0rem;padding:0 2.0rem;position:relative;width:100%}.row{display:flex;flex-direction:column;padding:0;width:100%}.row.row-no-padding{padding:0}.row.row-no-padding>.column{padding:0}.row.row-wrap{flex-wrap:wrap}.row.row-top{align-items:flex-start}.row.row-bottom{align-items:flex-end}.row.row-center{align-items:center}.row.row-stretch{align-items:stretch}.row.row-baseline{align-items:baseline}.row .column{display:block;flex:1 1 auto;margin-left:0;max-width:100%;width:100%}.row .column.column-offset-10{margin-left:10%}.row .column.column-offset-20{margin-left:20%}.row .column.column-offset-25{margin-left:25%}.row .column.column-offset-33,.row .column.column-offset-34{margin-left:33.3333%}.row .column.column-offset-50{margin-left:50%}.row .column.column-offset-66,.row .column.column-offset-67{margin-left:66.6666%}.row .column.column-offset-75{margin-left:75%}.row .column.column-offset-80{margin-left:80%}.row .column.column-offset-90{margin-left:90%}.row .column.column-10{flex:0 0 10%;max-width:10%}.row .column.column-20{flex:0 0 20%;max-width:20%}.row .column.column-25{flex:0 0 25%;max-width:25%}.row .column.column-33,.row .column.column-34{flex:0 0 33.3333%;max-width:33.3333%}.row .column.column-40{flex:0 0 40%;max-width:40%}.row .column.column-50{flex:0 0 50%;max-width:50%}.row .column.column-60{flex:0 0 60%;max-width:60%}.row .column.column-66,.row .column.column-67{flex:0 0 66.6666%;max-width:66.6666%}.row .column.column-75{flex:0 0 75%;max-width:75%}.row .column.column-80{flex:0 0 80%;max-width:80%}.row .column.column-90{flex:0 0 90%;max-width:90%}.row .column .column-top{align-self:flex-start}.row .column .column-bottom{align-self:flex-end}.row .column .column-center{-ms-grid-row-align:center;align-self:center}@media (min-width: 40rem){.row{flex-direction:row;margin-left:-1.0rem;width:calc(100% + 2.0rem)}.row .column{margin-bottom:inherit;padding:0 1.0rem}}a{color:#9b4dca;text-decoration:none}a:focus,a:hover{color:#606c76}dl,ol,ul{list-style:none;margin-top:0;padding-left:0}dl dl,dl ol,dl ul,ol dl,ol ol,ol ul,ul dl,ul ol,ul ul{font-size:90%;margin:1.5rem 0 1.5rem 3.0rem}ol{list-style:decimal inside}ul{list-style:circle inside}.button,button,dd,dt,li{margin-bottom:1.0rem}fieldset,input,select,textarea{margin-bottom:1.5rem}blockquote,dl,figure,form,ol,p,pre,table,ul{margin-bottom:2.5rem}table{border-spacing:0;width:100%}td,th{border-bottom:0.1rem solid #e1e1e1;padding:1.2rem 1.5rem;text-align:left}td:first-child,th:first-child{padding-left:0}td:last-child,th:last-child{padding-right:0}b,strong{font-weight:bold}p{margin-top:0}h1,h2,h3,h4,h5,h6{font-weight:300;letter-spacing:-.1rem;margin-bottom:2.0rem;margin-top:0}h1{font-size:4.6rem;line-height:1.2}h2{font-size:3.6rem;line-height:1.25}h3{font-size:2.8rem;line-height:1.3}h4{font-size:2.2rem;letter-spacing:-.08rem;line-height:1.35}h5{font-size:1.8rem;letter-spacing:-.05rem;line-height:1.5}h6{font-size:1.6rem;letter-spacing:0;line-height:1.4}img{max-width:100%}.clearfix:after{clear:both;content:' ';display:table}.float-left{float:left}.float-right{float:right}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/style.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./src/style.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body{background-color: #433d3c;\r\n    }\r\n.button {\r\n    font-family: 'Noto Sans JP', sans-serif;\r\n    background-color: #a99e93;\r\n    border-color: #a99e93;\r\n    color:#e8d3c7 !important;\r\n    margin:.5em;\r\n}\r\n.button-utility {\r\n    color:#433d3c !important;\r\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/kao.moji/data/kaomoji.json":
/*!*************************************************!*\
  !*** ./node_modules/kao.moji/data/kaomoji.json ***!
  \*************************************************/
/*! exports provided: Angry/Mad, Bear, Beg, Blush, Bow, Bunny/Rabbit, Bye/Hi/Hello, Cat, Confused, Crying, Cute/Kawaii, Dancing, Depressed, Determined, Devil, Disappointed, Eating/Drinking, Evil, Excited, Fall, Feminine, Flower, Funny, Glasses/Sunglasses, Grin, Gross, Happy, Heart, Helpless, Hide, Hit, Hug, Hurry, Kiss, Laughing, Lenny face, Love, Magic, Middle finger, Monkey, Music, Nervous, Peace sign, Poop, Roger, Roll, Running, Sad, Saliva, Salute, Scared, Shake, Sheep, Shocked, Shrug, Shy/Embarrassed, Sleep, Smiling, Smug, Sparkles/Stars, Spin, Sulk, Surprised, Sweat, Table flip, That's it, Thumbs up, Tired, Try my best, Unicode, Vomit, Weird, Wink, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"Angry/Mad\":[\"ಠ_ಠ\",\"⋋_⋌\",\"눈_눈\",\"ಠ⌣ಠ\",\"ಠ▃ಠ\",\"ఠ ͟ಠ\",\"ノಠ_ಠノ\",\"(¬_¬)\",\"(｀ε´)\",\"(｀Д´)\",\"(ಠ⌣ಠ)\",\"(◣_◢)\",\"(¬▂¬)\",\"(┳◇┳)\",\"(눈_눈)\",\"(¬､¬)\",\"(`A´)\",\"（▽д▽）\",\"-`д´-\",\"(’益’)\",\"(⋋▂⋌)\",\"〴⋋_⋌〵\",\"(◔ д◔)\",\"☜(`o´)\",\"(ʘдʘ╬)\",\"（♯▼皿▼）\",\"(#｀皿´)\",\"(╬ಠ益ಠ)\",\"(ಠ ∩ಠ)\",\"ლಠ益ಠ)ლ\"],\"Bear\":[\"・㉨・\",\"తꀧత\",\"ᵔᴥᵔ\",\"ʕ•ᴥ•ʔ\",\"ʕ·ᴥ·ʔ\",\"ˁ˙˟˙ˀ\",\"❃ႣᄎႣ❃\",\"ʕ　·ᴥʔ\",\"ʕᴥ·　ʔ\",\"ʕథ౪థʔ\",\"ʕ￫ᴥ￩ʔ\",\"(๏㉨๏)\",\"(ó㉨ò)\",\"ʢᵕᴗᵕʡ\",\"ʕ◉ᴥ◉ʔ\",\"ʕᴥ• ʔ\",\"ʕ≧ᴥ≦ʔ\",\"ʕ•㉨•ʔ\",\"ʕ≧㉨≦ʔ\",\"(✪㉨✪)\",\"ʕ∙ჲ∙ʔ\",\"ʕʽɞʼʔ\",\"[｡◉㉨◉]\",\"ʕº̫͡ºʔ\",\"ʕ·ᴥ·　ʔ\",\"ʕ*̫͡*ʔ\",\"ʕ•̮͡•ʔ\",\"ᶘ ᵒᴥᵒᶅ\",\"ʕ•̠͡•ʔ\",\"|ｴ)･)⊃\"],\"Beg\":[\"○几\",\"＿|￣|○\",\"人´∀｀)\",\"(￣十￣)\",\"(-m-)\",\"(；人；)\",\"Ω＼ζ゜）\",\"(mm*)\",\"(￣人￣)\",\"(uωu人)\",\"(-人-)\",\"（＾人＾）\",\"(^人^)\",\"(/∇≦*)\",\"（×÷×）人\",\"(人･∀･)\",\"(ﾟ∀ﾟ人)\",\"(」ﾟДﾟ」\",\"((_　_*\",\"（人･ω･)\",\"|･ω･)ﾉ\",\"(人ゝд∩)\",\"(人・ェ・)\",\"（－||－）\",\"(人εﾟ●)\",\"(人ФｴФ)\",\"人´･皿･)\",\"ヽ(-Д-◎\",\"(人ゝω・）\",\"(人ﾟ∀ﾟ)\"],\"Blush\":[\"＠＾▽＾＠\",\"(´ω｀*)\",\"(‘-’*)\",\"(´∀｀•)\",\"(ﾉ∀`♥)\",\"(/ε＼*)\",\"(*^^*)\",\"(*^_^*)\",\"(*^.^*)\",\"(•ﾟдﾟ•)\",\"(*ﾟ∀ﾟ*)\",\"(^-^*)ノ\",\"(・´ｪ｀・)\",\"(*´ω｀*)\",\"(*´_ゝ｀)\",\"(*´ｪ｀*)\",\"(*´∀`*)\",\"(*ﾟｪﾟ*)\",\"(*ﾉ∀`*)\",\"(*´∀｀*)\",\"( *∵* )\",\"(〃￣ω￣〃ゞ\",\"(*ﾟｰﾟ)ゞ\",\"(●´艸｀)ヾ\",\"v(・∀・*)\",\"v(^∀^*)\",\"(*´-｀*)\",\"(*´台｀*)\",\"(*´I`*)\",\"(*≧∀≦*)\"],\"Bow\":[\"OTL\",\"orz\",\"_/＼○_\",\"●|￣|＿\",\"＿○／|＿\",\"＿|￣|●\",\"_l⌒l０\",\"_/＼●_\",\"○|￣|＿\",\"＿|￣|○\",\"m(＿＿)m\",\"＜(。_。)＞\",\"<(￢0￢)>\",\"<(．＿．)>\",\"m(_ _)m\",\"mＵTｪTＵm\",\"m(￢0￢)m\",\"へ(´д｀へ)\",\"o(_ _)o\",\"(シ_ _)シ\",\"(o_ _)o\",\"<(＿ ＿)>\",\"<(_ _)>\",\"m(._.)m\",\"(o。_。)o\",\"ヾ(_ _。）\",\"m(；∇；)m\",\"ｍ（＿　＿）ｍ\",\"≦(._.)≧\",\"ｍ（．＿．）ｍ\"],\"Bunny/Rabbit\":[\"˚ᆺ˚\",\"(′⅄‵)\",\"U・x・U\",\"(•ㅅ•)\",\"(ㅇㅅㅇ❀)\",\"( ･×･)\",\"（ ÒㅅÓ)\",\"(⁎˃ᆺ˂)\",\"(๏ᆺ๏υ)\",\"(๑╹ᆺ╹)\",\"／(・x・)＼\",\"⌒(・x・)⌒\",\"U｡･.･｡U\",\"U╹ x ╹U\",\"／(=∵=)＼\",\"U(•ㅅ•)U\",\"(´・×・｀)\",\"○(･x･)○\",\"(=‘ｘ‘=)\",\"⁽˙̄˟˙̄⁾\",\"(๑òᆺó๑)\",\"⁽⁽˙˟˙⁾⁾\",\"(´･×･`)\",\"⌒(•ㅅ•)⌒\",\"(乂☉ｪ☉=)\",\"(╹ૅ×╹ૅ)\",\"￣(•ㅅ•)￣\",\"⌒(=∵=)⌒\",\"/(•ㅅ•)\\\\\",\"U(ㅇㅅㅇ❀)U\"],\"Bye/Hi/Hello\":[\"ヾ(＾∇＾)\",\"＼(￣O￣)\",\"(¬_¬)ﾉ\",\"(ノ^∇^)\",\"ヾ(☆▽☆)\",\"(/・0・)\",\"(^o^)/\",\"(￣▽￣)ノ\",\"(≧∇≦)/\",\"＼(-o- )\",\"(。･∀･)ﾉ\",\"＼(°o°；）\",\"川o･-･)ﾉ\",\"( ・_・)ノ\",\"( ･ω･)ﾉ\",\"( ^_^)／\",\"（ ゜ρ゜)ノ\",\"( ﾟ▽ﾟ)/\",\"(;-_-)ノ\",\"(。-ω-)ﾉ\",\"(。^_・)ノ\",\"(｡´∀｀)ﾉ\",\"(*＾▽＾)／\",\"(*￣Ｏ￣)ノ\",\"ヾ(＾-＾)ノ\",\"(^-^*)/\",\"＼(-_- )\",\"ヾ(´￢｀)ﾉ\",\"ヾ(・ω・ｏ)\",\"(=ﾟωﾟ)ﾉ\"],\"Cat\":[\"ὃ⍜ὅ\",\"ㅇㅅㅇ\",\"චᆽච\",\"ऴिाी\",\"(ꀄꀾꀄ)\",\"ฅ•ω•ฅ\",\"(ꅈꇅꅈ)\",\"(ꀂǒꀂ)\",\"(ꃪꄳꃪ)\",\"=ටᆼට=\",\"ʘ̥ꀾʘ̥\",\"=ộ⍛ộ=\",\"^ↀᴥↀ^\",\"โ๏∀๏ใ\",\"(ΦωΦ)\",\"ミ๏ｖ๏彡\",\"ि०॰०ॢी\",\"(ฅ'ω'ฅ)\",\"(=ↀωↀ=)\",\"=^∇^*=\",\"(⁎˃ᆺ˂)\",\"(ㅇㅅㅇ❀)\",\"ฅ(≚ᄌ≚)\",\"(^･ｪ･^)\",\"§ꊘ⃑٥ꊘ⃐§\",\"(=‘ｘ‘=)\",\"(^-人-^)\",\"(=①ω①=)\",\"(=ＴェＴ=)\",\"(=ｘェｘ=)\"],\"Confused\":[\"ఠ_ఠ\",\"◔_◔\",\"●.◉\",\"(^^ゞ\",\"ಠ_ರೃ\",\"℃ↂ_ↂ\",\"عربى\",\"ɾ◉⊆◉ɹ\",\"(。ヘ°)\",\"(⊙_☉)\",\"(＾＾；)\",\"(☉_☉)\",\"(♠_♦)\",\"(ﾟｰﾟ;\",\"(C_C)\",\"(⊙_◎)\",\"(゜-゜)\",\"(◑○◑)\",\"(・・；)\",\"⁀⊙﹏☉⁀\",\"(゜。゜)\",\"(・・)\",\"(´エ｀；)\",\"(‘◇’)\",\"（・∩・）\",\"(・∧‐)ゞ\",\"(⊙＿⊙)\",\"(◎_◎;)\",\"(●__●)\",\"(ﾟヘﾟ)\"],\"Crying\":[\"أ‿أ\",\"╥﹏╥\",\"(;﹏;)\",\"(ToT)\",\"(┳Д┳)\",\"(ಥ﹏ಥ)\",\"（；へ：）\",\"(T＿T)\",\"（πーπ）\",\"(Ｔ▽Ｔ)\",\"(⋟﹏⋞)\",\"（ｉДｉ）\",\"(´Д⊂ヽ\",\"(;Д;)\",\"（>﹏<）\",\"(TдT)\",\"(つ﹏⊂)\",\"༼☯﹏☯༽\",\"(ノ﹏ヽ)\",\"(ノAヽ)\",\"(╥_╥)\",\"(T⌓T)\",\"(༎ຶ⌑༎ຶ)\",\"(☍﹏⁰)｡\",\"(ಥ_ʖಥ)\",\"(つд⊂)\",\"(≖͞_≖̥)\",\"(இ﹏இ`｡)\",\"༼ಢ_ಢ༽\",\"༼ ༎ຶ ෴ ༎ຶ༽\"],\"Cute/Kawaii\":[\"ʕ￫ᴥ￩ʔ\",\"٩◔̯◔۶\",\"U^ｴ^U\",\"ʕ·ᴥ·ʔ\",\"ʕ•ᴥ•ʔ\",\"(ˇ⊖ˇ)\",\"༼☯﹏☯༽\",\"^ↀᴥↀ^\",\"(◕ᴥ◕)\",\"ʕ⊙ᴥ⊙ʔ\",\"(´﹃｀)\",\"༼ꉺɷꉺ༽\",\"(✿ヘᴥヘ)\",\"ʕ￫ᴥ￩　ʔ\",\"(✿╹◡╹)\",\"(▰∀◕)ﾉ\",\"(人◕ω◕)\",\"(ㆁᴗㆁ✿)\",\"(ﾉ≧ڡ≦)\",\"ʕ　·ᴥ·ʔ\",\"(≖ᴗ≖✿)\",\"(◕‿◕✿)\",\"（๑♜д♜）\",\"(✾♛‿♛)\",\"(*бωб)\",\"(ᇴ‿ฺᇴ)\",\"(๑￫ܫ￩)\",\"(❍ᴥ❍ʋ)\",\"ʕ·ᴥ·　ʔ\",\"(✪‿✪)ノ\"],\"Dancing\":[\"└|∵┌|\",\"|┐∵|┘\",\"(ノ‥)ノ\",\"|o∵|o\",\"ح˚௰˚づ\",\"o|∵o|\",\"(/・・)ノ\",\"ヾ(^ ^ゞ\",\"(o^^)o\",\"o(^^o)\",\"ヾ(^^ゞ)\",\"(ノ・・)ノ\",\"(ノ^o^)ノ\",\"(ノ￣ー￣)ノ\",\"(ノ￣ω￣)ノ\",\"⌎⌈╹우╹⌉⌍\",\"(ﾉ･o･)ﾉ\",\"(ﾉ･ｪ･)ﾉ\",\"┌(☆o★)┘\",\"└|ﾟεﾟ|┐\",\"(ﾉ≧∀≦)ﾉ\",\"(ﾉﾟ▽ﾟ)ﾉ\",\"┌|ﾟзﾟ|┘\",\"┌(メ▼▼)┘\",\"（〜^∇^)〜\",\"⌌⌈╹므╹⌉⌏\",\"＼(^ω^＼)\",\"१|˚–˚|५\",\"(〜￣△￣)〜\",\"〜(꒪꒳꒪)〜\"],\"Depressed\":[\"（◞‸◟）\",\"(´∵｀)\",\"|ω・｀)\",\"|ω･`)\",\"(-д-；)\",\"从´_υ｀从\",\"（ノд｀＠）\",\"(ﾉε｀◎)\",\"(ﾉω･｀o)\",\"（ー○ー）＝３\",\"(・´з`・)\",\"(´･ω･｀)\",\"(´・ω・｀)\",\"(∥￣■￣∥)\",\"(´-ω-`)\",\"(ｏ´_｀ｏ)\",\"(´･仝･｀)\",\"(*ノз`*)\",\"(っ´ω｀c)\",\"(￣σ･･￣)\",\"…φ(。。*)\",\"(´・＿・`)\",\"(´ﾟωﾟ｀)\",\"(lll-ω-)\",\"(_　_|||)\",\"(*´Д｀)=з\",\"(´‐ω‐）=з\",\"( ◢д◣)\",\"(* _ω_)…\",\"…ρ(･ω`･､)\"],\"Determined\":[\"(・∀・)\",\"(`ω´)\",\"(´ｰ+｀)\",\"(￣･ω･￣)\",\"(*＾∀ﾟ)ъ\",\"(ฅ`ω´ฅ)\",\"(`･ω･´)\",\"ヾ(ﾟｪﾟゞ)\",\"(｀･ω･´)\",\"(๑ÒωÓ๑)\",\"(`・ω・´)\",\"|｀･ω･)9\",\"o(｀*ω*´)\",\"( ｰ`дｰ´)\",\"(+･｀⊇･)b\",\"(　･`ω･´)\",\"(｀･ω･´)+\",\"(｀・ω・´)b\",\"( +･｀ω･)b\",\"ヾ(｀・ω・´)ノ\",\"(｡+･｀ω･´)\",\"(｀･ω･´) ｂ\",\"(・`ω´・ ●)\",\"d( ･ω´･+)\",\"(｡+･`ω･´)\",\"（σ｀・∀・´）σ\",\"m9っ`･ω･´)\",\"（　･`ー･´） +\",\"o.(+･`ω･+).o\",\".*:ﾟ（｀・ω・´）ゝﾟ:*.\"],\"Devil\":[\"ಠﭛಠ\",\"(｀∀´)Ψ\",\"(◣∀◢)ψ\",\"ψ(｀∇´)ψ\",\"Ψ(☆ｗ☆)Ψ\",\"(｀㊥益㊥)Ψ\",\"｀(^▼^)´↑\",\"Ψ(｀∀´#)ﾉ\",\"↑_(ΦwΦ;)Ψ\",\"ψ(^Ф∀Ф^)ψ\",\"^（｀ω´ ）^ψ\",\"^(#｀∀´)_Ψ\",\"◥(ฅº￦ºฅ)◤\",\"Ψ( ｀▽´ )Ψ\",\"ƪ(`▿▿▿▿´ƪ)\",\"⁞⁝•ֱ̀␣̍•́⁝⁞\",\"←~∋(｡Ψ▼ｰ▼)∈\",\"Ψ(`_´ #  )↝\",\"↜(╰ •ω•)╯ψ\",\"Ψ(Φ皿Φ)))～††\",\"←～（o ｀▽´ )oΨ\",\"Ψ (‘益’#    )↝\",\"∋━━o(｀∀´oメ）～→\",\"↜(͛ ꒪͒৫͏̈́꒪͒)͛⌰\",\"∋━━o(｀∀´oメ）～→━━\",\"((( ←～（o ｀▽´ )oΨ\",\"(◞≼◉ื≽◟ ;益;◞≼◉ื≽◟)Ψ\",\"━━╋⊂（　´ー｀）彡Ψ(ΦД| |Φ;)Ψ\",\"^(#｀∀´)_Ψ････・･†_(ﾟｰﾟ*)β\",\"†_(･”･*)β（（　　)β ^(#｀∀´)_Ψ\"],\"Disappointed\":[\"orz\",\"(´Д⊂\",\"（πーπ）\",\"('A`)\",\"(ન_੦)\",\"(´д｀)\",\"（；＿；）\",\"(´ω｀)\",\"(´ж｀;)\",\"つ´Д`)つ\",\"（ノд｀＠）\",\"从´_υ｀从\",\"ヽ(冫、)ﾉ\",\"(i々i)］\",\"(;´д｀)\",\"(ノ_<。)\",\"( p_q)\",\"(´･ω･`)\",\"o(；△；)o\",\"( ｉдｉ )\",\"(´・ω・｀)\",\"(*ノ_<*)\",\"(´；ω；｀)\",\"ヽ(´Д`;)ﾉ\",\"(；一ω一||)\",\"(_　_|||)\",\"Σ(￣ロ￣lll)\",\"＿ﾉ乙(､ﾝ､)＿\",\"///orz///\",\"（（（(T-T*)）））\"],\"Eating/Drinking\":[\"―●○◎-\",\"―⊂ZZZ⊃\",\"（￣ｗ￣）Ψ\",\"◥█̆̈◤࿉∥\",\"(＾-＾)＿日\",\"(。・・)_且\",\"(＃´ー´)旦\",\"且_(・_・ )\",\"(　ﾟДﾟ)⊃旦\",\"( -_-)旦~\",\"(*^◇^)_旦\",\"(*･∀･)_Ω~\",\"~旦_(^O^ )\",\"(　 ゜Д゜)⊃旦\",\"~~旦⊂(･∀･ )\",\"ｰ( ￣▽)_皿~~\",\"(*｀▽´)_旦~~\",\"~~旦_(･o･;)\",\"~(=^‥^)_旦~\",\"且_(ﾟ◇ﾟ；)ノﾞ\",\"(*´ｪ｀*)っ旦~\",\"( ・・)つ-●●●\",\"( ^-^)_旦””\",\"((((´∀｀)＿旦～\",\"( ´･ω･`)_且~\",\"(*´-ω)o旦~┏┓\",\"(*´・ω)o旦~┏┓\",\"~~匸Pヽ(･ω･｀)\",\"(○^ω^)_旦~~♪\",\"~~旦_(-ω-｀｡)\"],\"Evil\":[\"ಠﭛಠ\",\"(｀ε´)\",\"（｀ー´）\",\"` ͜ʖ´\",\"(☼Д☼)\",\"(｀▽´)\",\"(｀∀´)Ψ\",\"（　｀ハ´）\",\"(｀Д´*)\",\"| ｀Д´|\",\"ψ`ー´)ﾉ\",\"ﾍ(｀▽´*)\",\"p(｀ε´q）\",\"ψ(｀∇´)ψ\",\"(ʃƪ¬‿¬)\",\"ლ(｀∀´ლ)\",\"Ψ(｀▽´)Ψ\",\"（=｀〜´=）\",\"(=｀ω´=)\",\"ρ(｀.´)ρ\",\"ψ（｀Д´）ψ\",\"(ﾒ｀ﾛ´)/\",\"()`艸´()\",\"Ψ(￣∀￣)Ψ\",\"(・｀ω´・)\",\"(=｀ェ´=)\",\"(屮｀∀´)屮\",\"Ψ(｀◇´)Ψ\",\"o(｀ω´*)o\",\"(ц｀ω´ц*)\"],\"Excited\":[\"≧ω≦\",\"୧⍢⃝୨\",\"(⊙ᗜ⊙)\",\"โ๏∀๏ใ\",\"(≧∀≦)\",\"۹⌤_⌤۹\",\"୧☉□☉୨\",\"(⊙ꇴ⊙)\",\"(´∀`)\",\"（・ｗ・）\",\"(ᗒᗨᗕ)\",\"ʘ ͜ʖ ʘ\",\"(≧∇≦*)\",\"(*≧▽≦)\",\"۹(ÒہÓ)۶\",\"(ﾉ･ｪ･)ﾉ\",\"٩(^ᴗ^)۶\",\"б（＞ε＜）∂\",\"(⌬̀⌄⌬́)\",\"٩(θ‿θ)۶\",\"ヽ(＾Д＾)ﾉ\",\"(★^O^★)\",\"（๑✧∀✧๑）\",\"(*≧∀≦*)\",\"٩(●ᴗ●)۶\",\"⸍⚙̥ꇴ⚙̥⸌\",\"(๑>ᴗ<๑)\",\"۹(˒௰˓)۶\",\"(* >ω<)\",\"＼（Ｔ∇Ｔ）／\"],\"Fall\":[\"_(:3」∠)_\",\"（＿□＿：）\",\"（＿Å＿）\",\"(o;＿ω＿)o\",\"(o_□_)o\",\"(o ><)o\",\"ヘ(＿　＿ヘ)\",\"o(>< o)\",\"(ヘ＿　＿)ヘ\",\"(o_0_)o))\",\"(ｏ＿　＿)ｏ\",\"(o_ _)o\",\"_(。_°/\",\"o(_ _o)\",\"ヽ(_ _ヽ)彡\",\"_(･＿．)/\",\"_:(´ཀ`」 ∠):_\",\"o(_ _o)ノ☆\",\"☆ヽ(o_ _)o\",\"ミ(ノ_ _)ノ\",\"ｏ(＿　＿ｏ)\",\"ε＝(。＿　＿)。\",\"ヽ(＿　＿ヽ)\",\"。。。(ノ＿　＿)ノ\",\"｡(＿　＿｡)＝3\",\"εミ(ο_ _)ο\",\"ο(_ _ο)彡3\",\"* ・・(o_ _)o\",\"o(_ _o)・・ *\",\"ε=ε=┏( >_<)┛　(ノ_ _)ノ\"],\"Feminine\":[\"ಠ_ಠ\",\"ʕ•ᴥ•ʔ\",\"ʕ￫ᴥ￩ʔ\",\"(•ө•)♡\",\"( ′～‵)\",\"(ꐦ°д°)\",\"(☝◞‸◟)☞\",\"(○´―`)ゞ\",\"(⌍་д་⌌)\",\"(๑´ㅂ`๑)\",\"(ฅΦωΦ)ฅ\",\"(๑°⌓°๑)\",\"( ･ὢ･ )\",\"(･◡ु‹ )\",\"(ง `ω´)۶\",\"ԅ( ˘ω˘ԅ)\",\"(๑•̆૩•̆)\",\"(๑•́ω•̀)\",\"꒰✩’ω`ૢ✩꒱\",\"ヽ( ε∀ε )ノ\",\"(๑˃̵ᴗ˂̵)و\",\"(๑˃́ꇴ˂̀๑)\",\"(∩`ω´)⊃))\",\"(* >ω<)=3\",\"((⊂(`ω´∩)\",\"ω･)و ̑̑༉⑩\",\"(´･ε･̥ˋ๑)\",\"٩(๑`н´๑)۶\",\"(♡ >ω< ♡)\",\"_(┐「ε:)_❤\"],\"Flower\":[\"≧❀‿❀≦\",\"(◕︿◕✿)\",\"(ʘ‿ʘ✿)\",\"(◕ㅁ◕✿)\",\"(◕д◕✿)\",\"(〃‿〃✿)\",\"(≖︿≖✿)\",\"(◕▿◕✿)\",\"(◕ㅅ◕✿)\",\"(◡‿◡✿)\",\"(◕ω◕✿)\",\"(◕ᴗ◕✿)\",\"(/‿＼✿)\",\"(✿◠‿◠)\",\"（❁▿❁＊）\",\"(◠‿◠✿)\",\"(◕‿◕✿)\",\"(✿ヘᴥヘ)\",\"❁◕ ‿ ◕❁\",\"✿◕ ‿ ◕✿\",\"(◕__◕✿)\",\"(◕‸ ◕✿)\",\"(◕⍸ ◕✿)\",\"❀◕ ‿ ◕❀\",\"✾◕ ‿ ◕✾\",\"(✿☯‿☯✿)\",\"(ʘ‿ʘ)ノ✿\",\"(˶◕‿◕˶✿)\",\"(◕◞౪◟◕✿)\",\"乁༼☯‿☯✿༽ㄏ\"],\"Funny\":[\"〓D\",\"❐‿❑\",\"ರ_ರ\",\"ಥ◡ಥ\",\"ಥ_ಥ\",\"ತಎತ\",\"ಠ益ಠ\",\"ಠoಠ\",\"ಠ◡ಠ\",\"ಠ▃ಠ\",\"☉_☉\",\"ಠ~ಠ\",\"ಠ.ಠ\",\"◮_◮\",\"ಠ_ಠ\",\"ಠ_๏\",\"◪_◪\",\"ఠ_ఠ\",\"ↁ_ↁ\",\"◜㍕◝\",\"◙‿◙\",\"◘_◘\",\"இ_இ\",\"ਉ_ਉ\",\"◔̯◔\",\"◔_◔\",\"●_●\",\"◉︵◉\",\"أ‿أ\",\"◉_◉\"],\"Glasses/Sunglasses\":[\"▼ω▼\",\"ಠ_ರೃ\",\"(▼▼)\",\"(▼∀▼)\",\"凸（◆◆メ\",\"(⌐■_■)\",\"(ﾒ▼_▼)\",\"(▼O▼ﾒ)\",\"(‡▼益▼)\",\"|*▼皿▼)\",\"(▼-▼*)\",\"(╭ರ_⊙)\",\"（♯▼皿▼）\",\"(⌐▨_▨)\",\"(▼皿▼#)\",\"（■Д■*）\",\"Σ(▼□▼ﾒ)\",\"(ｷ▼O▼)/\",\"(｡▼皿▼)σ\",\"ヽ(▼皿▼ヽ)\",\"(ﾉ▼皿▼)ﾉ\",\"ヾ(●ε●)ノ\",\"ヾ(▼ﾍ▼；)\",\"щ(▼ﾛ▼щ)\",\"ヽ(▼ｰ▼ｷ)\",\"(つ▀¯▀)つ\",\"┌(メ▼▼)┘\",\"┌(▼▼メ)┘\",\"༼⌐■ل͟■༽\",\"(ｷ▼⊿▼)ﾉ\"],\"Grin\":[\"（´υ｀）\",\"(￣▼￣)\",\"(ﾟｰﾟ)\",\"(´ｖ｀)\",\"(･∀･)\",\"（☆∀☆）\",\"(￣ー￣)\",\"(・∀・)\",\"(｀ω´)\",\"(　￣ー)\",\"┫￣旦￣┣\",\"Ｕ^皿^Ｕ\",\"（＿ー＿）\",\"(▼∀▼)\",\"（■皿■）\",\"（￣ー＋￣）\",\"(☆>⊇<)\",\"｜*￣∇￣｜\",\"(￣▼￣*)\",\"(｡-∀-)\",\"（*ﾟーﾟ）\",\"v(￣∇￣)\",\"（＿ー+＿）\",\"（￣+ー￣）\",\"(´、ゝ｀)\",\"（´－｀）ノ\",\"(・∀・｀；)\",\"(　´_ゝ`)\",\"(#~皿~#)\",\"（￣￣ー￣￣）\"],\"Gross\":[\"（咒）\",\"ʕథ౪థʔ\",\"༼ꉺɷꉺ༽\",\"(亝ω亝｡)\",\"( ՞ਊ ՞)\",\"(✧≖‿ゝ≖)\",\"(⊙◞౪◟⊙)\",\"(´◑ω◐`)\",\"(´༎ຶ༎ຶ)\",\"（ ´థ౪థ）\",\"( ఠൠఠ )\",\"(╬♛ 益♛ )\",\"(⑅∫°ਊ°)∫\",\"(;; @益@）\",\"(́◉◞౪◟◉)\",\"ʅ（ ‾⊖◝）ʃ\",\"(｡☉౪ ⊙｡)\",\"✌(◔౪◔ )✌\",\"(΄◞ิ౪◟ิ‵)\",\"( ≖ิ‿≖ิ )\",\"༽΄◞ิ౪◟ิ‵༼\",\"（´≝◞⊖◟≝｀)\",\"(☄ฺ♛ฺ3♛ฺ)\",\"(´ﾟ◞౪◟ﾟ｀)\",\"ʅ(◔౪◔ ) ʃ\",\"( ☞◔ ౪◔)☞\",\"༼;´༎ຶ ༎ຶ༽\",\"＼(´◓Д◔`)／\",\"( ≖ิൠ≖ิ )\",\"(´⊙◞⊱◟⊙｀)\"],\"Happy\":[\"ɷ◡ɷ\",\"꒡ꆚ꒡\",\"⊙▽⊙\",\"ʘ‿ʘ\",\"മ◡മ\",\"◉‿◉\",\"≖‿≖\",\"◙‿◙\",\"ȏ.̮ȏ\",\"(≧▽≦)\",\"（ꉺᗜꉺ）\",\"（＾ω＾）\",\"（＾ｖ＾）\",\"(￣个￣)\",\"〔´∇｀〕\",\"(´∀`)\",\"⊂◉‿◉つ\",\"(＾ω＾)\",\"ヽ(ヅ)ノ\",\"（ꉺ౪ꉺ）\",\"(¬‿¬)\",\"(-‿◦)\",\"(•‿•)\",\"(─‿─)\",\"(◑‿◐)\",\"ღවꇳවღ\",\"｡^‿^｡\",\"´･ᴗ･`\",\"(ᗒᗨᗕ)\",\"(＾▽＾)\"],\"Heart\":[\"♱♡‿♡♰\",\"♡＾▽＾♡\",\"✿♥‿♥✿\",\"♡ඩ⌔ඩ♡\",\"༼♥ل͜♥༽\",\"(♡´艸`)\",\"⊆♥_㇁♥⊇\",\"(♥ω♥*)\",\"(•ө•)♡\",\"(●♡∀♡)\",\"˅ɞ♡⃛ʚ˅\",\"⊂（♡⌂♡）⊃\",\"(✿ ♥‿♥)\",\"(‘∀’●)♡\",\"ヽ(o♡o)/\",\"(｡♥‿♥｡)\",\"(●´□`)♡\",\"ღゝ◡╹)ノ♡\",\"(♡´౪`♡)\",\"(人･㉨･)♡\",\"(๑♡⌓♡๑)\",\"ƪ(♥ﻬ♥)ʃ\",\"(๑♡3♡๑)\",\"♥(ˆ⌣ˆԅ)\",\"(灬♥ω♥灬)\",\"♡(ŐωŐ人)\",\"（´・｀ ）♡\",\"(⺣◡⺣)♡*\",\"♡´･ᴗ･`♡\",\"（♥￫ｏ￩♥）\"],\"Helpless\":[\"(ㆆᴗㆆ)\",\"-`д´-\",\"(ﾟ⊿ﾟ)\",\"(´c_`)\",\"(´_ゝ`)\",\"(　◜◡‾)\",\"(‾◡◝　)\",\"(´･_･`)\",\"╮(╯_╰)╭\",\"( º﹃º )\",\"( ˘･з･)\",\"(´ﾟдﾟ`)\",\"┐(´д`)┌\",\"(´,_ゝ`)\",\"_(┐「ε:)_\",\"Σ(｀L_｀ )\",\"＿ﾉ乙(､ﾝ､)＿\",\"(๑•́ ₃ •̀๑)\",\"(´-ι_-｀)\",\"| 　 ´ω｀|φ\",\"(・ε・`*) …\",\"凹(´･ω･｀)凹\",\"(ｏ´・ε・｀ｏ)\",\"ο（´･ω･｀o）\",\"ρ(´-＿-｀●)\",\"(o´・ω・｀)ﾉ\",\"↓↓(%;´п`Ⅲ)\",\"…_φ(･ω･` )\",\"(・ω・｀)………..\",\"(´･ω･)…｡oо○\"],\"Hide\":[\"|д･)\",\"|ω・）\",\"｜。・）\",\"｜ｏ゜）\",\"|ω`)\",\"|ｮз☆)\",\"|⁰⊖⁰)\",\"|ω･`)\",\"(⊃‿⊂)\",\"|ｮдﾟ)\",\"┃(・ω┃\",\"|_-｡)\",\"|Д´)/\",\"ﾍ(･_|\",\"|Д｀|┛\",\")ु੭ु⁾\",\")Д⊙`)\",\"|∀･)ジ\",\"｜−・;）\",\"|x･`)\",\"|ｴ)･)⊃\",\"|´∀｀●)\",\"|д꒪ͧ)…\",\"|ʘ‿ʘ)╯\",\"|･ω･｀)\",\"|ω´･;)\",\"|･x･`)\",\"|ω-o)ﾟ\",\"|ω・｀)ノ\",\"|*▼皿▼)\"],\"Hit\":[\"ｏ(≧▼≦○〃\",\"o(・_・)9\",\"σ～ (｀´メ\",\"@=(--@v)\",\"o(･Θ･)○☆\",\"o(￣ｰ￣)○☆\",\"o(￣ ◇￣)○\",\"o( -_-)9@\",\"ｏ(メ・・)=日☆\",\"|c==(-T )\",\"☆○(*σ。σ)o\",\"(　･ω･)っ≡つ\",\"(ﾟoﾟC=(__;\",\"(°o°C=(_ _;\",\"∑(ﾟoﾟC=(__;\",\"(((c=(ﾟﾛﾟ;q\",\"α～(´｀d)\",\"(;´0｀)ﾂ))□｀)\",\"(=ﾟωﾟ)つ)ﾟ∀ﾟ)\",\"(p_･q)(p･_q)\",\"Ｃ≡(・。・Ｃ≡)≡≡≡\",\"☆(゜o°(○=(-_-;\",\"(*＇Д＇)ﾉｼ)ﾟﾛﾟ)\",\"ﾍ(｡｡ﾍ)☆ヽ(^^;)\",\"(pﾟﾛﾟ)==p)`д)\",\"☆(ﾟoﾟ(○=(-_-○\",\"o(・ロ・)○()o×)/\",\"(*ﾟｰﾟ)=○)ﾟＯﾟ)\",\"( ‘д‘⊂彡☆))Д´)\",\"○（｀・ω・）＝＝○ノД）\"],\"Hug\":[\"⊂（♡⌂♡）⊃\",\"⊂(◉‿◉)つ\",\"ლ(・ヮ・ლ)\",\"(つ◉益◉)つ\",\"⊂(・﹏・⊂)\",\"⊂(・ヮ・⊂)\",\"⊂(・▽・⊂)\",\"(っಠ‿ಠ)っ\",\"ʕっ•ᴥ•ʔっ\",\"（っ・∀・）っ\",\"(っ⇀⑃↼)っ\",\"＼(^o^)／\",\"(つ´∀｀)つ\",\"(つ▀¯▀)つ\",\"(っ´▽｀)っ\",\"ლ(・﹏・ლ)\",\"⊂(･ω･*⊂)\",\"ლ(･ω･*ლ)\",\"(づ￣ ³￣)づ\",\"ლ(´ ❥ `ლ)\",\"c⌒っ╹v╹ )っ\",\"d=(´▽｀)=b\",\"⊂( ◜◒◝ )⊃\",\"(.づ◡﹏◡)づ.\",\"(っ*´∀｀*)っ\",\"(っ⇀`皿′↼)っ\",\"(.づσ▿σ)づ.\",\"⊂(´・ω・｀⊂)\",\"(*￣-(-*)ゝ\",\"⊂((・▽・))⊃\"],\"Hurry\":[\"(＾＾；)\",\"（￣ー￣；\",\"(⌒_⌒;\",\"(＞△＜Uu\",\"(;･∀･)\",\"（　´д｀）\",\"(；￣ー￣A\",\"(；´艸｀)\",\"(；゜○゜)\",\"(´∀｀；A\",\"｜￣ω￣A；\",\"（；・д・）\",\"(´Д｀ι)\",\"ヽ(´o｀；\",\"（；￣Д￣）\",\"（´ヘ｀；）\",\"(┼д┼;)\",\"（-Ⅱ-；）\",\"(x□ｘ｀;)\",\"(;′Д`)ノ\",\"(￣ー￣;)ゞ\",\"σ(￣∇￣;)\",\"(≧mm≦;)\",\"(*ﾉω<*)\",\"ε('∞'*)\",\"ε-(´・｀)\",\"ヾ(￣o￣;)\",\"ヾ(°∇°*)\",\"(●'Д'●)\",\"(；´д｀)ゞ\"],\"Kiss\":[\"ㄖꏁㄖ\",\"ᴓᴈᴓ\",\"|°з°|\",\"(ΦзΦ)\",\"˶⚈Ɛ⚈˵\",\"（＿ε＿）\",\"(‘ε’)\",\"⁽˙³˙⁾\",\"(-ε- )\",\"•́ε•̀٥\",\"(☆´3｀)\",\"(・ε・｀)\",\" Ⴀ͡კႠ͡\",\"(ΘεΘ;)\",\"(≡ε≡；)\",\"（￣ε￣＠）\",\"(´ε｀*)\",\"（*＾3＾）\",\"(*￣з￣)\",\"(○ﾟε^○)\",\"（。ˇ ⊖ˇ）\",\"（○゜ε＾○）\",\"|(￣3￣)|\",\"ヾ(´〓｀)ﾉ\",\"(~￣³￣)~\",\"(ΘεΘʃƪ)\",\"（￣ε￣ʃƪ）\",\"（＠ーεー＠）\",\"(*-(　　)\",\"(๑♡3♡๑)\"],\"Laughing\":[\"(खਉख)\",\"(ಡ艸ಡ)\",\"（⌒▽⌒）\",\"（＾ｖ＾）\",\"（＞ｙ＜）\",\"(＾艸＾)\",\"(Ŏ艸Ŏ)\",\"(亝艸亝)\",\"(♡´艸`)\",\"(●´艸`)\",\"(≧艸≦*)\",\"(*>艸<)\",\"( ਊдਊ)\",\"( ´艸｀)\",\"(｡ˇ艸ˇ)\",\"(o>艸<)\",\"(^ц^ )\",\"(☆Θ艸Θ)\",\"（○´艸｀）\",\"(*´艸｀)\",\"（≧ｙ≦＊）\",\"(*・艸・)\",\"（　´∀｀）\",\"(*≧艸≦)\",\"( ╹ਊ╹)\",\"( ՞ਊ՞)\",\"(*´∀｀）\",\"(✪ฺܫ✪ฺ)\",\"( 〃´艸｀)\",\"(❤ฺ￫艸￩)\"],\"Lenny face\":[\"( ͡ ͜ʖ ͡ )\",\"( ͡~ ͜ʖ ͡°)\",\"( ͡ʘ╭͜ʖ╮͡ʘ)\",\"( ͡☉ ͜ʖ ͡☉)\",\"( ͡⚆ ͜ʖ ͡⚆)\",\"( ͡~ ͜ʖ ͡~)\",\"( ͡ຈ ͜ʖ ͡ຈ)\",\"( ͡° ʖ̯ ͡°)\",\"( ͡ಠ ʖ̯ ͡ಠ)\",\"( ͠° ͟ʖ ͡°)\",\"( ͡° ͜ʖ ͡°)\",\"( ͡°╭͜ʖ╮͡° )\",\"( ͡^ ͜ʖ ͡^ )\",\"( ͡ຈ╭͜ʖ╮͡ຈ )\",\"( ͡ᵔ ͜ʖ ͡ᵔ )\",\"( ͝סּ ͜ʖ͡סּ)\",\"ヽ( ͝° ͜ʖ͡°)ﾉ\",\"(ง ° ͜ ʖ °)ง\",\"(つ ͡° ͜ʖ ͡°)つ\",\"(☞ ͡° ͜ʖ ͡°)☞\",\"ᕦ( ͡° ͜ʖ ͡°)ᕤ\",\"ᕕ( ͡° ͜ʖ ͡°)ᕗ\",\"( ʘ̆ ╭͜ʖ╮ ʘ̆ )\",\"( ͡° ͜ʖ ͡°)=ε✄\",\"╚═( ͡° ͜ʖ ͡°)═╝\",\"┴┬┴┤( ͡° ͜ʖ├┬┴┬\",\"(ノ͡° ͜ʖ ͡°)ノ︵┻┻\",\"¯\\\\_( ͠° ͟ʖ °͠ )_/¯\",\"╰( ͡° ͜ʖ ͡° )つ──☆*:・ﾟ\",\"(∩ ͡ ° ʖ ͡ °) ⊃-(===>\"],\"Love\":[\"♡＾▽＾♡\",\"✿♥‿♥✿\",\"♡ඩ⌔ඩ♡\",\"♱♡‿♡♰\",\"˖◛⁺⑅♡\",\"(•ө•)♡\",\"༼♥ل͜♥༽\",\"˅ɞ♡⃛ʚ˅\",\"(♥ω♥*)\",\"(´∀｀)♡\",\"(●♡∀♡)\",\"⊆♥_㇁♥⊇\",\"(♡´艸`)\",\"♥（ﾉ´∀`）\",\"(๑♡⌓♡๑)\",\"(´⌣`ʃƪ)\",\"(‘∀’●)♡\",\"(♡´౪`♡)\",\"( ˘ ³˘)\",\"(´ε｀ )♡\",\"(⺣◡⺣)♡*\",\"ღゝ◡╹)ノ♡\",\"ヽ(o♡o)/\",\"(人･㉨･)♡\",\"(๑♡3♡๑)\",\"(ღ˘⌣˘ღ)\",\"ƪ(♥ﻬ♥)ʃ\",\"(灬♥ω♥灬)\",\"⊂（♡⌂♡）⊃\",\"♡(ŐωŐ人)\"],\"Magic\":[\"(`･Д･)ノ=☆\",\"(*｀□)<炎炎炎炎\",\"★≡≡＼（`△´＼）\",\"彡ﾟ◉ω◉ )つー☆*\",\"(∩^o^)⊃━☆゜.*\",\"(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧\",\"(☆_・)・‥…━━━★\",\"(∩｀-´)⊃━炎炎炎炎炎\",\"ପ(⚈᷉ʙ⚈᷉)੭̸୫൦⃛\",\"✩°｡⋆⸜(ू｡•ω•｡)\",\"炎炎炎炎☆┣o(･ω･ )\",\"✩°｡⋆⸜(ू˙꒳​˙ )\",\"੭•̀ω•́)੭̸*✩⁺˚\",\"( °-°)シ ミ★ ミ☆\",\"(σ'∀')σ*。・゜+.*\",\"(っ・ω・）っ≡≡≡≡≡≡☆\",\"(ﾉ≧∀≦)ﾉ・‥…━━━★\",\"(੭•̀ω•́)੭̸*✩⁺˚\",\"(∩｀-´)⊃━✿✿✿✿✿✿\",\"ヽ༼ຈل͜ຈ༽⊃─☆*:・ﾟ\",\"( ◔ ౪◔)⊃━☆ﾟ.*・\",\"￡(*’ο’）/☆*。;+，\",\"(੭ˊ͈ ꒵ˋ͈)੭̸*✧⁺˚\",\"(*’▽’)ノ＾—==ΞΞΞ☆\",\"(∩｡･ｏ･｡)っ.ﾟ☆｡'`\",\"(∩^o^)⊃━☆ﾟ.*･｡ﾟ\",\"༼つಠ益ಠ༽つ ─=≡ΣO))\",\"(つ◕౪◕)つ━☆ﾟ.*･｡ﾟ\",\"(*ﾟー^)/'`*:;,．★\",\"(∩｀-´)⊃━☆ﾟ.*･｡ﾟ\"],\"Middle finger\":[\"凸ಠ益ಠ)凸\",\"t(=n=)\",\"凸(¬‿¬)\",\"凸(>皿<)凸\",\"凸(｀0´)凸\",\"凸(｀△´＋）\",\"凸(⊙▂⊙ )\",\"凸(-0-メ)\",\"༼凸 ◉_◔༽凸\",\"凸(｀⌒´メ)凸\",\"凸༼ຈل͜ຈ༽凸\",\"t(- n -)t\",\"凸(｀ι _´メ）\",\"凸(^▼ｪ▼ﾒ^)\",\"༼✿◕ᗜ◕༽┌∩┐\",\"୧༼ಠ益ಠ╭∩╮༽\",\"╭∩╮(⋋‿⋌)ᕗ\",\"୧༼◔益◔╭∩╮༽\",\"( ︶︿︶)_╭∩╮\",\"t( -_- t )\",\"┌П┐(►˛◄’!)\",\"┌∩┐(◕◡◉)┌∩┐\",\"╭∩╮(ಠ۝ಠ)╭∩╮\",\"╭∩╮༼☯۝☯༽╭∩╮\",\"╭∩╮（︶︿︶）╭∩╮\",\"╭∩╮◕ل͜◕)╭∩╮\",\"凸〳 ಥ ڡ ಥ 〵凸\",\"╭∩╮ʕ•ᴥ•ʔ╭∩╮\",\"凸( •̀_•́ )凸\",\"╭∩╮(-_-)╭∩╮\"],\"Monkey\":[\"⊆◍益◍⊇\",\"@・ꈊ・@\",\"₢ຈ▿ຈꀣ\",\"☾ठ ੁठ☽\",\"⊆（⌒◎⌒）⊇\",\"@(・●・)@\",\"Ⴚტ◕‿◕ტჂ\",\"₢⦿͡㍕⦿͡ꀣ\",\"@(･-･)@\",\"⊆ಠ ω ಠ⊇\",\"@(･o･)@\",\"@(ᵕ.ᵕ)@\",\"@(･ェ･)@\",\"└@(･ｪ･)@┐\",\"@( o･ｪ･)@\",\"@( o･ꎴ･)@\",\"⊂((・⊥・))⊃\",\"@( oóꎴò)@\",\"⊂((υ⊥υ))⊃\",\"⊂((*＞⊥σ))⊃\",\"⊂((。・o・))⊃\",\"⊂((≧⊥≦))⊃\",\"₢⦿͡ ˒̫̮ ⦿͡ꀣ\",\"Ϛ⃘๑•͡ .̫•๑꒜\",\"Ϛ⃘๑•͡ .̫•๑꒜\",\"○Ｏo。.@(-ェ-)@ノ\",\"✧.*◌·͡˔·ོ◌*·✧\",\"Ϛ⃘๑•͡ .̫•๑꒜ღ⃛\",\"Ϛ⃘๑•͡ .̫•๑꒜♬♫\",\"⸉ᘓ◎⃝ᆺ◎⃝ᘐ⸊\"],\"Music\":[\"(o・★)\",\"(☆￢o)q\",\"(^_^♪)\",\"(´△｀)♪\",\"ρ(o＜★)\",\"ρ(o＾★)\",\"(☆￣o)q\",\"(☆∩o)q\",\"(☆≧o)q\",\"(☆Θo)q\",\"(´0｀)q\",\"ρ(oμ★)\",\"（＾Ｏ＾☆♪\",\"（＾3＾）~♪\",\"（*´▽｀*）\",\"ρ（ーoー)♪\",\"（^Ｏ^）～♪\",\"ρ(o δ★)\",\"ρ(＾o^)♪\",\"ρ（^o^）♪\",\"ρ（＾o＾）♪\",\"♫꒰･◡･๑꒱\",\"(o^^o)♪\",\"♫♪˙‿˙♫♪\",\"♪(ﾉε｀●)\",\"ρ(^^ )♭\",\"♪～(￣ε￣)\",\"♪(´ε｀ )\",\"（＊＾ω＾）♪\",\"≧(´▽｀)≦\"],\"Nervous\":[\"◑.◑\",\"⚆ᗝ⚆\",\"●﹏●\",\"⊙﹏⊙\",\"⊙△⊙\",\"˚▱˚\",\"ଵ˛̼ଵ\",\"(￣□￣)\",\"(-｡-;\",\"(ーー;)\",\"（／．＼）\",\"（/｡＼)\",\"(ﾟдﾟ)\",\"(O∆O)\",\"ゞ◎Д◎ヾ\",\")Д⊙`)\",\"（ΩДΩ）\",\"(／。＼)\",\"(⊃д⊂)\",\"(☍﹏⁰)\",\"(･д･)\",\"(ⅈ▱ⅈ)\",\"(๏д๏)\",\"(¤﹏¤)\",\"《ﾟДﾟ》\",\"๑ΘдΘ๑\",\"ミ●﹏☉ミ\",\"(⊃‿⊂)\",\"(ノдヽ)\",\"(꒪⌓꒪)\"],\"Peace sign\":[\"|-^)v\",\"(^^)v\",\"(^_^)v\",\"(^_-)v\",\"(^-^)v\",\"(^ー^)ｖ\",\"（＾コ＾）V\",\"(-_☆)V\",\"(*^^)v\",\"✌('ω')\",\"(^o^)v\",\"v(￣ｰ￣)v\",\"y(^ｰ^)y\",\"(￣▽￣)V\",\"y(￣ー￣)y\",\"(=￣▽￣=)Ｖ\",\"Λ(＿Δ＿)Λ\",\"( v￣▽￣)\",\"v(｡･･｡)\",\"(*^-ﾟ)v\",\"v(´∀｀*v)\",\"(○ﾟε＾○)v\",\"v(｡･ω･｡)\",\"v(*'-^*)ｂ\",\"( =￣+∇￣=)v\",\"♪v('∇'*)⌒☆\",\"✌三✌('ω')✌三✌\",\"✌三(✌'ω')✌三✌\",\"ｖ(⌒ｏ⌒)ｖ\",\"v(≧∇≦v)三(v≧∇≦)v\"],\"Poop\":[\"ξ\\\"(￣ *)\",\"( ж)..ξ\",\"Σo(TξT)o\",\"ヽ( ・∀・)ノ●\",\"●ヽ(ﾟ∀ﾟ)ﾉ●\",\"(･･*)ﾉ ⌒ξ\",\"(・・*)ノ ⌒ξ\",\"-=≡~ξ-＿-*)\",\"(゜д゜(：＊：)=з\",\"~ξヾ( ^-x-^)\",\"●ヽ(´･д･`)ﾉ●\",\"（ﾉ･∀･）ﾉ = ●\",\"(;￣y￣)-----cξ~~\",\"( ･∀･)つ＝≡≡ξ)Д`)\",\"ヽ(･∀･)ﾉヽ(･∀･)ﾉ●●\",\"(￣y￣)o――――――∞Cξ~\",\"~ξ.．・((ヾ( ^-x-^)\",\"●_(ﾟ∀ﾟ )≡　ヽ(Ａ`)ﾉ≡\",\"●ヽ(ﾟ∀ﾟヽ)♪♪(ノﾟ∀ﾟ)ノ●\",\"( ;・_・)ﾉＸＸＸＸＸＸＸＸ=Cξ\",\"━━━━━━━ ~~~ξ-＼ξ(･_＼)\",\"ξ━‥・・・☆＼_(゜▽゜*彡*゜ー゜)_/\",\"ξ━‥･･･☆＼_(ﾟ▽ﾟ*彡*ﾟｰﾟ)_/\",\"／ー￣)/D・・・・・------ξ゜⊿゜)\",\"ξ＼(ﾟｰﾟ*)(*ﾟ▽ﾟ)ﾉ⌒ξﾟДﾟ)ﾉﾉ\",\"／ｰ￣)/D・・・・・------ξﾟ⊿ﾟ)ﾉ\",\"ξ＼(゜ー゜*)(*゜▽゜)ノ⌒ξ゜Д゜)ノノ\",\"~ξ(*--)(*･･)ﾉ v⌒v⌒v⌒v⌒ξ~\",\"ヽ(･∀･)ﾉ●ヽ(･∀･)ﾉ●ヽ(･∀･)ﾉ●\",\"(￣~￣;)ξ~ (((( ￣∇￣)_ξﾟ□ﾟ)\"],\"Roger\":[\"(≧∀≦ゞ\",\"(-ω-ゞ\",\"(≧ω≦)ゞ\",\"(｀-´)>\",\"∠(｀∪´)\",\"|`Д´)＞\",\"(≧∇≦)b\",\"(・∀-d)\",\"(`Д´)ゞ\",\"|▼皿▼)b\",\"(・∧‐)ゞ\",\"(●・ω・)b\",\"ｄ(´▽｀*)\",\"(*゜－＾)ゞ\",\"(°∀°)ゝ”\",\"(*｀Ω´)b\",\"(＞Д＜)ゝ”\",\"(=ﾟ▽ﾟ)/\",\"('∀`)ゝ”\",\"( ｀д´)b\",\"d(￣▽￣o)\",\"(*>ω<)b\",\"(｀∀´)ゝ”\",\"d(´･ω･`)\",\"(*´ω｀*)ノ\",\"(★´ω｀★)ゞ\",\"(●´･∀･)b\",\"d(*ﾟーﾟ*)\",\"☆(･ω･*)ゞ\",\"(●⌒∇⌒●)b\"],\"Roll\":[\"(o_△_)o\",\"/(_-_)ｌ\",\"(:3_ヽ)_\",\"_(:3」∠)_\",\"_(┐「ε:)_\",\"_(:3｣∠)_\",\"(:3 _ )=\",\"_(┐「ε:)_♡\",\"ヽ(:3ﾉ ヽ)ﾉ\",\"ヾ(:3ﾉｼヾ)ﾉｼ\",\"_(：3 」∠ )_\",\"_/￣|(冫、)-c\",\"(　( (((＿⊿＿)\",\"_(:D｣┌)⁼³₌₃\",\"((└(:3」┌)┘))\",\"(:3っ)っ -=三[]\",\"○)))ﾍ(^･･^=)~\",\"((o_△_)o)^▽^;)\",\"(￣∇￣;)))(　((((;＿⊿＿)\",\"（o°▽°)o(o_△_)o(o°▽°)o\",\"(((.-.)(:I )(ﾟ‐ﾟ)( I:)\",\"((((((‥)(: )(¨)( :)(*‥)\",\"(┐「ε:)_三┌(.ω.)┐三_(:3 」∠)_\",\"(..)(･.)(: )(¨)( :)(.･)(..)\",\"o_ _)o(o- -)o(o°▽°)o(o_△_)o(o_ _)o.。o○\",\"(°o°)(°o。)(。o。)(。o°)(°o°)(°o。)(。o。)(。o°)\",\"(.-.)(:I )(゜-゜)( I:) (.-.)(:I )(゜-゜)( I:)\",\"(((((;___▲___))(((((;___▲___))((￣▼￣ ;)))))\",\"三('ω')三( ε: )三(.ω.)三( :3 )三('ω')三( ε: )三(.ω.)三( :3 )\",\"('ω') 三 ( ε: ) 三 (. .) 三 ( :з ) 三 ('ω') 三 ( ε: ) 三 (. .) 三 ｡･*･:≡(    ε:)\"],\"Running\":[\"┗(＾0＾)┓\",\"ᕕ┌◕ᗜ◕┐ᕗ\",\"┏┃*･д┃┛\",\"ᕕ( ᐛ )ᕗ\",\"ᕕ(ಥʖ̯ಥ)ᕗ\",\"ᕕ( ಠ‿ಠ)ᕗ\",\"ᕕ༼✪ل͜✪༽ᕗ\",\"┌( ಠ‿ಠ)┘\",\"ღ(◔ڼ◔ღ)ミ\",\"ᕕ( ◎_◎)ᕗ\",\"ᕕ(╯°□°)ᕗ\",\"｢(◔ω◔「)三\",\"┌( ಠ_ಠ)┘\",\"٩(•౪•٩)三\",\"ᕕ༼ຈل͜ຈ༽ᕗ\",\"ᕕ(◉Д◉ )ᕗ\",\"ᕕ( ◔3◔)ᕗ\",\"┗(^o^　)┓三\",\"┌（・Σ・）┘≡З\",\"｡｡゛(ﾉ><)ﾉ\",\"ε＝（ﾉﾟдﾟ）ﾉ\",\"｢(⑅◔ω◔「)三\",\"┏( ゜)ਊ゜)┛\",\"ε＝┏(･ω･)┛\",\"ᕕ(⌐□ل͜□)ᕗ\",\"⊂(ﾟДﾟ;⊂⌒`つ\",\"ᕕ༼✿•̀︿•́༽ᕗ\",\"ε=٩(●❛ö❛)۶\",\"ε≡(ノ´＿ゝ｀）ノ\",\"ε=(｡ﾉ･ω･)ﾉ\"],\"Sad\":[\"⊙︿⊙\",\"ಠ⌣ಠ\",\"╥﹏╥\",\"ಥ_ಥ\",\"●︿●\",\"⊛ठ̯⊛\",\"ಠ╭╮ಠ\",\"(ㄒoㄒ)\",\"(Ｔ▽Ｔ)\",\"(︶︹︺)\",\"（ｉДｉ）\",\"（；へ：）\",\"(╥_╥)\",\"(T⌓T)\",\"（´＿｀）\",\"(T＿T)\",\"(;﹏;)\",\"(ToT)\",\"(┳◇┳)\",\"(T_T)\",\"(ಥ﹏ಥ)\",\"(个_个)\",\"(⋟﹏⋞)\",\"(ノ﹏ヽ)\",\"(┳Д┳)\",\"༶ඬ༝ඬ༶\",\"(‘A`)\",\"（πーπ）\",\"(◕︿◕✿)\",\"(つ﹏<。)\"],\"Saliva\":[\"＾ｐ＾\",\"(^p^）\",\"(^q^)\",\"(‘u’)\",\"(￣￢￣)\",\"（＾q＾）\",\"(º﹃º)\",\"(ﾟ￢ﾟ)\",\"(´ρ`)\",\"(゜￢゜)\",\"(^￢^)\",\"（゜ρ゜）\",\"(。・ρ・)\",\"(º﹃º )\",\"(¯﹃¯*)\",\"(･ﾟρﾟ)\",\"（｡･ρ･）\",\"(*´﹃`)\",\"(ﾟρﾟ*)\",\"（’┓`*）\",\"(￣￢￣*)\",\"(｡･ρ･)\",\"(⌒￢⌒*)\",\"(´┓`*)\",\"ԅ(♡﹃♡ԅ)\",\"(@￣ρ￣@)\",\"(*´﹃｀*)\",\"ԅ(º﹃ºԅ)\",\"ԅ(¯﹃¯ԅ)\",\"(＠￣￢￣＠)\"],\"Salute\":[\"(-ω-ゞ\",\"(｀∇´ゞ\",\"(´∀｀ゞ\",\"(≧∀≦ゞ\",\"(￣ー￣)ゞ\",\"く（＠Д＠）\",\"(‾-ƪ‾)\",\"(‘-‘*ゞ\",\"∠(´д｀)\",\"(＞Д＜)ゝ\",\"(｀д´)ゝ\",\"(￣^￣)ゞ\",\"(-ω-)ゝ\",\"（・д・ゝ）\",\"(`Д´)ゞ\",\"∠(^ー^)\",\"(￣▽￣)ゞ\",\"(゜◇゜)ゞ\",\"(・∧‐)ゞ\",\"(＞ロ＜)ゝ\",\"(≧ω≦)ゞ\",\"(^-^)ゝ\",\"(‘∀`)ゞ\",\"（─∀─）ゞ\",\"('-'*ゞ\",\"（＾∀＾）ゞ\",\"（・∀・）ゞ\",\"（’◇’）ゞ\",\"ヾ(≧∇≦)ゞ\",\"ヽ|･◇･|ゞ\"],\"Scared\":[\"（ΩДΩ）\",\"(O∆O)\",\"ゞ◎Д◎ヾ\",\"(⊃д⊂)\",\"(ノдヽ)\",\"(⊃‿⊂)\",\"(/ω＼)\",\"(／。＼)\",\"（/｡＼)\",\"（／．＼）\",\"（／_＼）\",\"(゜Д゜*)\",\"(ﾟДﾟ;)\",\"§;ﾟﾛﾟ§\",\"(꒪ȏ꒪;)\",\"(☼Д☼)\",\"( ﾉД`)\",\"(-@Д@)\",\"(ﾟДﾟ；∬\",\"⊂（゜Д゜⊂\",\"⊃゜Д゜）⊃\",\"（´皿｀；）\",\"(＠O＠;)\",\"( ⁰д⁰)\",\") ゜o゜(\",\"(ノ′Дヾ)\",\"(　〇□〇）\",\"(/;◇;)/\",\"џ(ºДºџ)\",\"ヽ(ﾟДﾟ)ﾉ\"],\"Shake\":[\"((´д｀))\",\"((；ﾟДﾟ)\",\"((;ﾟДﾟ))\",\"(llФｗФ｀)\",\"((ﾟДﾟ；))\",\"((；ﾟェﾟ；))\",\":(´◦ω◦｀):\",\"(((＾ω＾)))\",\"（（（゜Д゜；）））\",\"（（（・×・；）））\",\"(((･Α･川)))\",\"((( ；ﾟДﾟ)))\",\"((,,´Θ`,,))\",\"((o(´∀｀)o))\",\"《《(ﾟc_ﾟ；)》》\",\":;(∩´﹏`∩);:\",\"((((；ﾟДﾟ)))\",\"||lll´Д｀)))\",\"((((；ﾟДﾟ))))\",\"((ﾟﾟ((Д))ﾟﾟ))\",\"((((;´･ω･`)))\",\"(((( ˙-˙ ))))\",\"(･(･(･∀･)･)･)\",\"(((;ﾟ;Д;ﾟ;)))\",\"(((ﾟДﾟДﾟДﾟ)))\",\"（|||´□｀；）))))\",\"(((ﾉ)ﾟДﾟ(ヽ))))\",\"(((（´・ω・；`）)))\",\"((-ω-｡)(｡-ω-))\",\"(((((；＾ω＾)))))\"],\"Sheep\":[\"Ꮚ⌀ꈊ⍉Ꮚ\",\"@^ェ^@\",\"Ꮚ⁰ꈊ⁰Ꮚ\",\"（・ｴ・@\",\"Ꮚ｀ꈊ´Ꮚ\",\"§・ω・§\",\"Ꮚ’ꈊ’Ꮚ\",\"＠・＊・＠\",\"Ꮚ`ꈊ´Ꮚ\",\"ᏊˊꈊˋᏊ\",\"Ꮚ⁼ꈊ⁼Ꮚ\",\"Ꮚ˟ꈊ˟Ꮚ\",\"＠・ω・＠\",\"@・ェ・@\",\"Ꮚ^ꈊ^Ꮚ\",\"Ꮚ❛ꈊ❛Ꮚ\",\"ᏊᵋꈊᵋᏊ\",\"ᏊꈍꈊꈍᏊ\",\"Ꮚ˘ꍓ˘Ꮚ\",\"Ꮚ•ꈊ•Ꮚ\",\"{ @ˊꈊˋ@ }\",\"{ @⁼ꈊ⁼@ }\",\"{ @ᵕꈊᵕ@ }\",\"Ꮚᵒ̴̶̷ꈊ˂̤Ꮚ\",\"{ @˟ꈊ˟@ }\",\"{ @⁰ꈊ⁰@ }\",\"{ @^ꈊ^@ }\",\"{ @❛ꈊ❛@ }\",\"{ @｀ꈊ´@ }\",\"{ @’ꈊ’@ }\"],\"Shocked\":[\"(゜ロ゜)\",\"；￣ロ￣）\",\"（￣□￣；）\",\"(ﾟωﾟ;)\",\"Σ(･口･)\",\"Σ(T□T)\",\"(ﾟдﾟ；)\",\"(●Ω●;)\",\"(￣■￣;)\",\"(_□_；)\",\"(ʘᗩʘ’)\",\"（∂△∂；）\",\"(◯Δ◯∥)\",\"(ʘ言ʘ╬)\",\"Σ(ﾟÅﾟ)\",\"(゜Д゜;)\",\"Σ(ﾟДﾟ)\",\"(ー∀ー；)\",\"Σ(ＴωＴ)\",\"�(ﾟ□ﾟ*川\",\"(;Ⅲ□Ⅲ;)\",\"（￣□||||\",\"（*￣□￣*；\",\"Σ(‐△‐●)\",\"Σ(▼□▼ﾒ)\",\"(∩╹□╹∩)\",\"ΣΣ(ﾟДﾟ;)\",\"Σ(`･ω･Ⅲ)\",\"∑(ΦдΦlll\",\"＝(￣□￣;)⇒\"],\"Shrug\":[\"┐(´д｀)┌\",\"┐(´～｀)┌\",\"┐(´ー｀)┌\",\"┐(￣ヘ￣)┌\",\"╮(╯∀╰)╭\",\"╮(╯_╰)╭\",\"┐(´д`)┌\",\"┐(´∀｀)┌\",\"ʅ(́◡◝)ʃ\",\"ლ(ﾟдﾟლ)\",\"┐(ﾟ～ﾟ)┌\",\"┐('д')┌\",\"ლ｜＾Д＾ლ｜\",\"ლ（╹ε╹ლ）\",\"ლ(ಠ益ಠ)ლ\",\"┐(‘～`;)┌\",\"ヘ(´－｀;)ヘ\",\"┐( -“-)┌\",\"乁༼☯‿☯✿༽ㄏ\",\"ʅ（´◔౪◔）ʃ\",\"ლ(•ω •ლ)\",\"ヽ(゜～゜o)ノ\",\"ヽ(~～~ )ノ\",\"┐(~ー~;)┌\",\"┐(-。ー;)┌\",\"¯\\\\_(ツ)_/¯\",\"¯\\\\_(⊙_ʖ⊙)_/¯\",\"乁ʕ •̀ ۝ •́ ʔㄏ\",\"¯\\\\_༼ ಥ ‿ ಥ ༽_/¯\",\"乁( ⁰͡  Ĺ̯ ⁰͡ ) ㄏ\"],\"Shy/Embarrassed\":[\"(^^ゞ\",\"(〃▽〃)\",\"(ノ▽〃)\",\"（/｡＼)\",\"(/ω＼)\",\"(Ŏ艸Ŏ)\",\"(^^;)\",\"(〃ー〃)\",\"(〃ω〃)\",\"(〃艸〃)\",\"(´つヮ⊂)\",\"(♡´艸`)\",\"(／≧ω＼)\",\"ʕ*ﾉᴥﾉʔ\",\"(/へ＼*)\",\"(*ﾉ▽ﾉ)\",\"(*ﾉωﾉ)\",\"(*ﾉдﾉ)\",\"(´～｀ヾ)\",\"(ﾉ∇≦*)\",\"(‘-’*)\",\"(^◇^；)\",\"|▽//)ゝ\",\"(〃´∀｀)\",\"ꈍ .̮ ꈍ\",\"(〃∀〃)ゞ\",\"( 〃．．)\",\"(｡･･｡)\",\"|´∀｀●)\",\"6(\\\"ー )\"],\"Sleep\":[\"【:εω\",\"(冫༵、)\",\"(ᴗ˳ᴗ)\",\"(´～`)\",\"( ⓥωⓥ)\",\"(:˒[￣]\",\"(*-ω-)\",\"(︶｡︶✽)\",\"(:3ぅ　)\",\"(¦ꒉ[▓▓]\",\"(¦ꀦ[▓▓]\",\"⌈▓͟⌉ꆟ)ꍞ\",\"（;´_ヘ;）\",\"（´○｀）～ゝ\",\"(¦ꃎ[▓▓]\",\"(¦ꎌ[▓▓]\",\"(¦ꃆ[▓▓]\",\"(¦ꄰ[▓▓]\",\"⌈▒͟⌉ꅼ)ꍞ\",\"＼（´Ｏ｀）／\",\"（◎´〇｀◎）\",\"(´-εヾ )\",\"(｡し_し｡)\",\"(｡´-д-)\",\"(*´ο`*)\",\"川｡μ_μ)σ\",\"(｡v_v｡)\",\"(๑ᵕ⌓ᵕ̤)\",\"(¦ꃩ[▓▓]\",\"꒰◍ᐡᐤᐡ◍꒱\"],\"Smiling\":[\"＾ω＾\",\"▼ω▼\",\"(´∀｀）\",\"（＾∀＾）\",\"(^○^)\",\"(｀▽´)\",\"米＾－＾米\",\"(∩_∩)\",\"(⌒∇⌒)\",\"(☆▽☆)\",\"(￣∇￣)\",\"（￣ー+￣）\",\"σ(^○^)\",\"(^■^*)\",\"(*^-^)\",\"d(^^*)\",\"(´w｀*)\",\"|*￣ー￣|\",\"{*≧∀≦}\",\"(o^^o)\",\"(o^∀^)\",\"(*´ー`)\",\"o(^▽^)o\",\"o(^-^)o\",\"(*´∇｀*)\",\"（*´▽`*)\",\"(=^_^=)\",\"σ(ﾟｰ^*)\",\"（●＞ω＜●）\",\"y（^ヮ^）y\"],\"Smug\":[\"（咒）\",\"(⌤⌗)\",\"(￣^￣)\",\"(-、-)\",\"(꒵꜅꒵)\",\"(｀へ′)\",\"（’へ’）\",\"╭⚈¬⚈╮\",\"(￣ω￣)\",\"(｀ڼ´)\",\"⚈ ̫ ⚈\",\"（￣へ￣）\",\"（￣＾￣）\",\"(´꒳`)\",\"(꒡ꜙ꒡)\",\"(^～^)\",\"(´Å｀)\",\"§ԾᴗԾ§\",\"（￣ー￣）\",\"(｀^´)\",\"（・―・）\",\"(￣‥￣)\",\"(￣ー￣)\",\"（｀ー´）\",\"(￣⊿￣)\",\"(-∀-)\",\"( ´ｰ`)\",\"（；￣︶￣）\",\"(￣︶￣;)\",\"( ⊙‿⊙)\"],\"Sparkles/Stars\":[\"（☆ω☆*）\",\"☆=(ゝω･)/\",\"(。・艸-。)-☆\",\"(★≧▽^))★☆\",\"＼(★^∀^★)／\",\"(*○’3`)★+ﾟ\",\"(*＞ｖ＜)ゞ*゜+\",\"(艸′v'★*)。+\",\"+.(*'v`*)+\",\"(〇*>∀<)ゞ★☆\",\".+(´^ω^`)+.\",\"(☆uεu☆)ZZzz\",\"(★O∀O*)◇+｡\",\"・+(*゜∀゜*)+・\",\"ﾟ*｡(･∀･)ﾟ*｡\",\"°+(*´∀｀)ｂ°+°\",\"☆*ヾ(-∀・*)*+☆\",\"ﾟ.+(〃ﾉωﾉ)ﾟ.+°\",\"(n’∀’)ηﾟ*｡:*!\",\"＋。゜~”（゜∀゜）゜。＋\",\"ﾐ☆( *uωu人)+ﾟ.\",\"｡ﾟ+.(･∀･)ﾟ+.ﾟ\",\"ヾ(*′○`)ﾟ.+:｡ﾟ☆\",\"+｡ﾟφ(ゝω・｀○)+｡ﾟ\",\"ヾ(‘∀｀=ヽ)※．；，゜☆\",\"｡+ﾟ.。+。(´ω｀*)♪♪\",\"(●o’∪`o)ノ―♪`*.+\",\"☆*。★ﾟ*♪ヾ(☆ゝз・)ノ\",\"(人´∀｀)．☆．。．:*･°\",\"(*○゜∀。)/☆*。*.・+★\"],\"Spin\":[\"(　・ω)(　・)(　)(・　)(ω・　)(・ω・)\",\"(･∀･)( ･∀)( ･)( )(･ )(∀･ )(･∀･)\",\"(･▽･)( ･▽)(　･)(　　)(･　)(▽･ )(･▽･)\",\"(^▽^)( ^▽)(　^)(　　)(^　)(▽^ )(^▽^)\",\"(^◇^)( ^◇)(　^)(　　)(^　)(◇^ )(^◇^)\",\"(^ー^)( ^ー)(　^)(　　)(^　)(ー^ )(^ー^)\",\"(^＿^)( ^_)(　^)(　　)(^　)(_^ )(^＿^)\",\"(ﾟーﾟ)( ﾟー)(　ﾟ)(　　)(ﾟ　)(ーﾟ )(ﾟーﾟ)\",\"(^_^)( ^_)(　^)(　　)(^　)(_^ )(^_^)\",\"(･_･)( ･_)(　･)(　　)(･　)(_･ )(･_･)\",\"(^∇^)( ^∇)(　^)(　　)(^　)(∇^ )(^∇^)\",\"(･∀･)( ･∀)(　･)(　　)(･　)(∀･ )(･∀･)\",\"(ﾟ◇ﾟ)( ﾟ◇)(　ﾟ)(　　)(ﾟ　)(◇ﾟ )(ﾟ◇ﾟ)\",\"(^∀^)( ^∀)(　^)(　　)(^　)(∀^ )(^∀^)\",\"(･◇･)( ･◇)(　･)(　　)(･　)(◇･ )(･◇･)\",\"(ﾟ▽ﾟ)( ﾟ▽)(　ﾟ)(　　)(ﾟ　)(▽ﾟ )(ﾟ▽ﾟ)\",\"(ﾟ∇ﾟ)( ﾟ∇)(　ﾟ)(　　)(ﾟ　)(∇ﾟ )(ﾟ∇ﾟ)\",\"(ﾟ∀ﾟ)( ﾟ∀)(　ﾟ)(　　)(ﾟ　)(∀ﾟ )(ﾟ∀ﾟ)\",\"(ﾟ＿ﾟ)( ﾟ_)(　ﾟ)(　　)(ﾟ　)(_ﾟ )(ﾟ＿ﾟ)\",\"(ﾟ_ﾟ)( ﾟ_)(　ﾟ)(　　)(ﾟ　)(_ﾟ )(ﾟ_ﾟ) 　\",\"(･∇･)( ･∇)(　･)(　　)(･　)(∇･ )(･∇･) 　\",\"(･＿･)( ･_)(　･)(　　)(･　)(_･ )(･＿･) 　\",\"‹‹\\\\(´ω` )/››‹‹\\\\( 　´)/››‹‹\\\\( ´ω`)/››\",\"‹‹ヽ( ･ω･ )/››‹‹ヽ( ･)/›› ‹‹ヽ( ･ω･ )/››\",\"(°o°)(°o。)(。o。)(。o°)(°o°)(°o。)(。o。)(。o°)\",\"ヽ(･∀･)ﾉ━(∀･ﾉ)━(･ﾉ )━ヽ( )ﾉ━( ヽ･)━(ヽ･∀)━ヽ(･∀･)ﾉ\",\"⊂⌒~⊃｡Д｡）⊃━⊂⌒O｡Д｡）⊃━O（｡Д｡）O━⊂（｡Д｡O⌒⊃━⊂（｡Д｡⊂~⌒⊃\",\"(=ﾟωﾟ)ﾉ━( =ﾟω)━( 　=ﾟ)━(　　)━(ﾟ= ﾉ )━(ωﾟ=ﾉ)━(=ﾟωﾟ)ﾉ\",\"<丶｀∀´>━<丶｀∀>━<　丶｀>━<　　丶>━<　　　>━<´　　　>━<∀´　　>━<丶｀∀´>\",\"(´･ω･`)━( ´･ω･)━( 　´･ω)━( 　　)━( 　　)━(ω･´　)━(･ω･´)━(｀･ω･´)\"],\"Sulk\":[\"（￣s￣；\",\"（￣ε￣）\",\"( ￣＾￣)\",\"(´ﾟзﾟ)\",\"(;´д｀)\",\"（＞μ＜＃）\",\"(´･з･)\",\"('ε'*)\",\"(ｰ ｰ;)\",\"(´･･`)\",\"(ó﹏ò｡)\",\"(・ε・｀*)\",\"(´･д･｀)\",\"…φ(。。*)\",\"(。・ε・。)\",\"(´･_･｀)\",\"( *｀з´)\",\"(*･ε･*)\",\"( *ﾟзﾟ)\",\"(´-ε-｀)\",\"(´･ε･｀)\",\"(-公- ;)\",\"(・´з`・)\",\"(・ε・`*)\",\"(*・ε・*)\",\"(･ε･｀ )\",\"(=｀.´=)\",\"(￣ε(#￣)\",\"(´･ｪ･｀)\",\"(●´^｀●)\"],\"Surprised\":[\"⊙０⊙\",\"(¨!\",\"⊙▂⊙\",\"꒪ꄱ꒪\",\"◎ܫ◎\",\"（◎0◎）\",\"（○Ａ○）\",\"（´〇｀）\",\"(ﾟoﾟ)\",\"⑉ႣỏႣ⑉\",\"（゜◇゜）\",\"(இ௦இ)\",\"(・о・)\",\"(☼Д☼)\",\"（ФоФ)\",\"(☉∀☉)\",\"(○o○)\",\"（○□○）\",\"Σ(゜゜)\",\"(〇o〇；)\",\"(ʘ言ʘ╬)\",\"༼⁰o⁰；༽\",\"（・□・；）\",\"（°o°；）\",\"( ﾟoﾟ)\",\"Σ(꒪ȏ꒪)\",\"(⑉⊙ȏ⊙)\",\"(＃´Ｏ｀)\",\"Σ(T□T)\",\"(°o°:)\"],\"Sweat\":[\"(・・；)\",\"(￣ー￣；\",\"(＠Д＠；\",\"Σ(ﾟДﾟ；\",\"(；´瓜｀)\",\"(；・∀・)\",\"(；ﾟДﾟ)\",\"(￣Д￣；；\",\"(´∀｀；)\",\"(;^_^A\",\"(ﾟAﾟ;)\",\"(υ´Д｀)\",\"(ﾟДﾟ;)\",\"(-∧-；)\",\"(´ε｀；)\",\"(;´Д｀)\",\"(;ﾟдﾟ)\",\"(ﾟдﾟ；)\",\"（；^ω^）\",\"(´ж｀;)\",\"(;´д｀)\",\"(-。－；)\",\"(･Θ･;)\",\"(;￣ー￣川\",\"(；~〓~)\",\"（;￣ー￣A\",\"(^▽^;)\",\"(；´∀｀)\",\"(-”-;A\",\"(;´Д`)\"],\"Table flip\":[\"(ﾉ；；)ﾉ~┻━┻\",\"┬─┬ノ(ಠ_ಠノ)\",\"(/-o-)/ ⌒ ┤\",\"┻━┻ミ＼（≧ロ≦＼）\",\"（ノ○Д○）ノ＝＝＝┠\",\"(ﾉ｀□´)ﾉ⌒┻━┻\",\"(／‵Д′)／~ ╧╧\",\"(╯°▽°)╯ ┻━┻\",\"(╯ಠ_ಠ）╯︵ ┳━┳\",\"(ノಠ益ಠ)ノ彡┻━┻\",\"(┛◉Д◉)┛彡┻━┻\",\"(╯ಠ‿ಠ)╯︵┻━┻\",\"(ノ#--)ノ＼。゜。\",\"(╯=▃=)╯︵┻━┻\",\"༼ノ◕ヮ◕༽ノ︵┻━┻\",\"(┛ಠДಠ)┛彡┻━┻\",\"(ﾉಠдಠ)ﾉ︵┻━┻\",\"(╯°Д°)╯ ┻━┻\",\"(ノ-_-)ノ~┻━┻\",\"┳━┳ノ( OωOノ)\",\"(╯‵□′)╯︵┴─┴\",\"(ノToT)ノ ~┻┻\",\"┬───┬ ノ༼ຈل͜ຈノ༽\",\"(ノ͡° ͜ʖ ͡°)ノ︵┻┻\",\"ʕノ•ᴥ•ʔノ ︵ ┻━┻\",\"ヽ༼ ツ ༽ﾉ ︵┻━┻\",\"ヽ༼ຈل͜ຈ༽ﾉ︵┻━┻\",\"༼ﾉຈل͜ຈ༽ﾉ︵┻━┻\",\"┬━┬ノ(▀̿̿Ĺ̯̿̿▀̿ ̿ノ)\",\"┻━┻ ︵﻿ ¯\\\\_༼ᴼل͜ᴼ༽_/¯ ︵ ┻━┻\"],\"That's it\":[\"σﾟﾛﾟ)σ\",\"(´ー`)σ\",\"(☞◑ω◑)☞\",\"(σ･ω･)σ\",\"(σ≧∀≦)σ\",\"(☞^o^)☞\",\"(σﾟ∀ﾟ)σ\",\"(m9^ω')\",\"m9っ`･ω･´)\",\"( ￣ー￣)σ\",\"(´-ω-)σ\",\"☜（ﾟ∀ﾟ☜）\",\"(つ >ω●)つ\",\"(σ*'3`)σ\",\"_(┐「ε:)_\",\"( ◑ω◑☞)☞\",\"(σ`・∀・)σ\",\"( ﾐΦﻌΦ)╭☞\",\"(σ´-ω-`)σ\",\"(╭☞'ω')╭☞\",\"(╭☞•́•̀)╭☞\",\"(╭☞•́ﾛ•̀)╭☞\",\"(╭☞• ⍛• )╭☞\",\"☜╮(´ิ∀´ิ☜╮)\",\"(╭☞•́⍛•̀)╭☞\",\"（╭☞•́⍛•̀)╭☞\",\"(╭☞•̀o•́)╭☞\",\"( ━☞´◔‿ゝ◔`)━☞\",\"(☞ ͡° ͜ʖ ͡°)☞\",\"(つ ͡° ͜ʖ ͡°)つ\"],\"Thumbs up\":[\"(＾＾)ｂ\",\"(^^)ｂ\",\"d(-_^)\",\"d(⌒ー⌒)\",\"d(-_☆)\",\"(･ω･)b\",\"（´∀`）ｂ\",\"(￣ー￣)ｂ\",\"(b~_^)b\",\"(b^_^)b\",\"d(>_・ )\",\"d(>_< )\",\"(*TｰT)b\",\"b(~_^)d\",\"d(･∀･○)\",\"(*TーT)b\",\"(￣ε￣〃)ｂ\",\"d(ﾟｰﾟ@)\",\"d(>_･ )\",\"(o^-’)b\",\"( ﾟДﾟ)b\",\"ｄ(*￣o￣)\",\"d(￣◇￣)b\",\"(o^-')b\",\"(*^-ﾟ)b\",\"b(￣▽￣*)\",\"(*￣▽￣)d\",\"(　´∀｀)b\",\"(ｏ'ｖ｀ｂ)ｂ\",\"╭( ･ㅂ･)و\"],\"Tired\":[\"ＯＴＬ\",\"ｏｒｚ\",\"＿ﾉフ○\",\"(￣Д￣\",\"(´Д⊂\",\"（－－；\",\"（´。｀)\",\"（￣Ω￣）\",\"(A´Å｀\",\"A^-^)\",\"(∋д∈)\",\"(・。-;\",\"（´・｀）\",\"(*Q*)\",\"(／０￣)\",\"＿|￣|○\",\"(-。-;\",\"(´Д｀)\",\"(;´Д｀)\",\"（＾。＾；）\",\"（´＿｀;）\",\"（；￣д￣）\",\"（´ヘ｀；）\",\"(´Д｀)ヾ\",\"(　〇□〇）\",\"(´ヘ｀;)\",\"(;・・;)\",\"（○o●;）\",\"(´皿｀;)\",\"(*ﾉω-)\"],\"Try my best\":[\"(･ω･)v\",\"(*ゝ∀･)v\",\"ヽ(ﾟ∀｡)ﾉ\",\"(●≧ω≦)9\",\"o(｀^´*)\",\"(★ｕдｕ)σ\",\"(〃-ー-)ﾉ\",\"(*・`д・)\",\"(●｀･皿･)\",\"(´_¨｀)9\",\"(￣`Д´￣)9\",\"(★-皿-★)9\",\"(`･ω･´)9\",\"v(●´皿｀)o\",\"(9｀･ω･)9\",\"╭( ･ㅂ･)و\",\"(`•ω•´๑)\",\"(｡o´д｀)o\",\"┗(｀･∀･´●)\",\"(๑•̀ㅁ•́ฅ✧\",\"o(-ε´･+)b\",\"(๑˃̵ᴗ˂̵)و\",\"(○｀･Д･´)9\",\"┗(｀・ω・´)┛\",\"【★´┏Д┓｀】ﾉ\",\"(ง •̀ω•́)ง✧\",\"( •̀ᄇ• ́)ﻭ✧\",\"( • ̀ω•́  )✧\",\"୧(๑❛ั⌔❛ั๑)୨ ॢ\",\"＼\\\\٩( 'ω' )و //／\"],\"Unicode\":[\"గ౬గ\",\"♥‿♥\",\"ಠ_ಠ\",\"ʘ‿ʘ\",\"^̮^\",\"◕‿◕\",\"இ௰இ\",\"ઊઠઊ\",\"ꉨڡꉨ\",\"ꈿ۝ꈿ\",\"ஞ౩ஞ\",\"ب_ب\",\"ꆨ❥ꆨ\",\"ꆧεꆧ\",\"ꆤॄꆤ\",\"°Д°\",\"ઊહઊ\",\"ஞଲஞ\",\"⊙﹏⊙\",\"ʚ(•\",\"꒰⍨꒱\",\"(ت)\",\"(ق)\",\"༼⍨༽\",\"ఠ౬ఠ\",\"తꀧత\",\"චᆽච\",\"ಥ_ಥ\",\"◔̯◔\",\"◕‿↼\"],\"Vomit\":[\"(хдх)\",\"（´＊｀）\",\"（≧ｍ≦）\",\"（＾～＾）\",\"(´π`)\",\"('A`)\",\"（＊Л＊）\",\"（●≧艸≦\",\"（>３<）三\",\"(;´Д`)\",\"( -.-)\",\"(￣x￣;)\",\"( ×m×)\",\"（･□･）川\",\"（´艸｀＊）\",\"＿|￣|○､;\",\"（。－<>ー。）\",\"(　´З｀)＝３\",\"（～Д～）＊＊＊\",\"σ(　'　┰￣)\",\"( ﾟ ３ﾟ)≡@\",\"（（（○∀○）））\",\"(；－з-)＝゜。\",\"((〇<*`_、′\",\"ΣΣΣΣΣ（０＜）\",\"（;ﾟ;艸;ﾟ;）\",\"｀．゜∵(゜∀゜)\",\"_(´ཀ`」 ∠)_\",\"(*●艸ЗU$)◆◇\",\"(o'ｪﾟ):;*.\"],\"Weird\":[\"〠_〠\",\"༎ຶ‿༎ຶ\",\"(ΘLΘ)\",\"•✞_✞•\",\"ᕦ⊙෴⊙ᕤ\",\"ლↂ‿‿ↂლ\",\"(☉౪ ⊙)\",\"(╬⓪益⓪)\",\"( ఠൠఠ )\",\"☜Ҩↂ⼼ↂҨ☞\",\"(*☻-☻*)\",\"☁ ☝ˆ~ˆ☂\",\"༽つ۞﹏۞༼つ\",\"(´༎ຶ༎ຶ)\",\"（ ´థ౪థ）\",\"(╬ಠิ益ಠิ)\",\"( ◉◞౪◟◉)\",\"༼▃ Ĺ̯ ▃༽\",\"(༎ຶꈊ༎ຶ╬)\",\"(╬ﾟ◥益◤ﾟ)\",\"(☄ฺ♛ฺ3♛ฺ\",\"（☝ ՞ਊ ՞）☝\",\"( ༎ຶŎ༎ຶ )\",\"（´≝◞⊖◟≝｀)\",\"✌.ʕʘ‿ʘʔ.✌\",\"☾ ♛ ◡ ♛ ☽\",\"(╯⊙ ⊱ ⊙╰ )\",\"（ლ ^ิ౪^ิ）ლ\",\"( ´థ,_‥థ｀)\",\";´༎ຶਊ ༎ຶ`;\"],\"Wink\":[\"^.~\",\"ಠ‿↼\",\"(･ｪ-)\",\"(・_＋)\",\"(・ω<)\",\"(^_-)\",\"｛・ω-*}\",\"(v^ー°)\",\"(*＾∀゜)\",\"(^_−)☆\",\"(･ω<)☆\",\"(๑◕ㅂ▰)\",\"d(-_^)\",\"(◕ฺー≦)ノ\",\"(*^-°)v\",\"(ﾉ･_-)☆\",\"く(^ｰﾟ)ﾉ\",\"(*＾∀ﾟ)ъ\",\"(⌒.−)＝★\",\"(^_-)-☆\",\"(^_<)～☆\",\"(๑ゝڡ◕๑)\",\"(・ωｰ)～☆\",\"(*^-ﾟ)v\",\"(*・∀-)☆\",\"(⌒.－)＝★\",\"(○ﾟε^○)\",\"(o'ｕ≦o)\",\"(*ゝω・)ﾉ\",\"(ﾟﾛ^o)o\"]}");

/***/ }),

/***/ "./node_modules/kaomojilib/index.js":
/*!******************************************!*\
  !*** ./node_modules/kaomojilib/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
	library : __webpack_require__(/*! ./kaomoji.json */ "./node_modules/kaomojilib/kaomoji.json")
}




/***/ }),

/***/ "./node_modules/kaomojilib/kaomoji.json":
/*!**********************************************!*\
  !*** ./node_modules/kaomojilib/kaomoji.json ***!
  \**********************************************/
/*! exports provided: exciting, exciting_right, love_eyes, love_left, delicious, sad, crying, tears, cat_star, cat_shock, smile_with_heart, happy_love, kiss_love, kiss_star, shy_blush, sympathy, square_mouth_afraid, hands_up_indifference, confusion_@eyes, surprise_round_eyes, hands_up_greeting, winking_star, apologize, nosebleeding, writing_quietly, running_fast, sleepy, nya_cat, cute_polar_bear, normal_dog_ear_down, happy_rabbit, normal_pig, big_black_eyes_bird, swimming_left_fish, friends_together, friends_hand_in_hand, fight_enemies, shot_you, magic_flower, majic_star, food, singing, let's_go, cheering, poking, punch, good_morning, rise_and_shine, good_night, sleeping, hello, thank_you, thank_kiss, thank_you_so_much, sniff, hug_for_you, simple_dog, simple_cat, flower_cat, table_flip_angry, set_table, thumbs_down, blushing_flower_girl, merry_x'mas, happy_Xmas, cute_flower_bear, love_letter, chocolate_valentine, gross_creepy, awkward_cross_eyes, jailed_smile, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"exciting\":{\"keywords\":[\"exciting\",\"circle hands\",\"happy\",\"joy\"],\"icon\":\"o(≧∇≦o)\",\"category\":\"emotion\"},\"exciting_right\":{\"keywords\":[\"exciting\",\"right\",\"hands up\",\"happy\"],\"icon\":\"(/^▽^)/\",\"category\":\"emotion\"},\"love_eyes\":{\"keywords\":[\"love\",\"like\",\"loving eyes\",\"smile\"],\"icon\":\"(✿ ♥‿♥)\",\"category\":\"emotion\"},\"love_left\":{\"keywords\":[\"love\",\"like\",\"love left\",\"smile\"],\"icon\":\"♥(ˆ⌣ˆԅ)\",\"category\":\"emotion\"},\"delicious\":{\"keywords\":[\"delicious\",\"yummy\",\"food\",\"eat\"],\"icon\":\"(*´ڡ`●)\",\"category\":\"emotion\"},\"sad\":{\"keywords\":[\"painful\",\"injuried\",\"sick\"],\"icon\":\"(っ- ‸ – ς)\",\"category\":\"emotion\"},\"crying\":{\"keywords\":[\"cry\",\"depressed\",\"unhappy\"],\"icon\":\"੨( ･᷄ ︵･᷅ )ｼ\",\"category\":\"emotion\"},\"tears\":{\"keywords\":[\"cry\",\"vertical tears\",\"failed\",\"unhappy\"],\"icon\":\"꒰๑•̥﹏•̥๑꒱\",\"category\":\"emotion\"},\"cat_star\":{\"keywords\":[\"cat\",\"cute\",\"pet\"],\"icon\":\"(=ↀωↀ=)✧\",\"category\":\"animal\"},\"cat_shock\":{\"keywords\":[\"cat\",\"cute\",\"pet\",\"angry\"],\"icon\":\"(ↀДↀ)⁼³₌₃\",\"category\":\"animal\"},\"smile_with_heart\":{\"keywords\":[\"smile\",\"joy\",\"heart\",\"love\",\"right heart\"],\"icon\":\"(*˘︶˘*).｡.:*♡\",\"category\":\"emotion\"},\"happy_love\":{\"keywords\":[\"smile\",\"happy\",\"joy\",\"right heart\"],\"icon\":\"(≧◡≦) ♡\",\"category\":\"emotion\"},\"kiss_love\":{\"keywords\":[\"kiss\",\"heart\",\"love\",\"affection\",\"chu\"],\"icon\":\"σ(≧ε≦σ) ♡\",\"category\":\"emotion\"},\"kiss_star\":{\"keywords\":[\"kiss\",\"chu\",\"love\",\"affection\",\"shy\"],\"icon\":\"☆⌒ヽ(*'､^*)chu\",\"category\":\"emotion\"},\"shy_blush\":{\"keywords\":[\"shy\",\"blush\",\"love\"],\"icon\":\"(⁄ ⁄>⁄ ▽ ⁄<⁄ ⁄)\",\"category\":\"emotion\"},\"sympathy\":{\"keywords\":[\"cry\",\"kindness\",\"affinity\",\"compassion\"],\"icon\":\"(ノ_<。)ヾ(´▽｀)\",\"category\":\"emotion\"},\"square_mouth_afraid\":{\"keywords\":[\"afraid\",\"shocked\",\"fear\",\"hands up\"],\"icon\":\"＼(º □ º l|l)/\",\"category\":\"emotion\"},\"hands_up_indifference\":{\"keywords\":[\"indifference\",\"apathy\",\"insensitivity\",\"disdain\"],\"icon\":\"┐(￣∀￣)┌\",\"category\":\"emotion\"},\"confusion_@eyes\":{\"keywords\":[\"donno\",\"confused\",\"doubt\",\"question\"],\"icon\":\"(＠_＠)\",\"category\":\"emotion\"},\"surprise_round_eyes\":{\"keywords\":[\"surprised\",\"shocked\",\"curious\"],\"icon\":\"∑(O_O;)\",\"category\":\"emotion\"},\"hands_up_greeting\":{\"keywords\":[\"greeting\",\"hello\",\"morning\",\"what's up\",\"hand up\",\"smile\",\"cat mouth\"],\"icon\":\"(⌒ω⌒)ﾉ\",\"category\":\"emotion\"},\"winking_star\":{\"keywords\":[\"winking\",\"star\",\"cute\",\"trick\",\"joke\"],\"icon\":\"(^_<)〜☆\",\"category\":\"emotion\"},\"apologize\":{\"keywords\":[\"sorry\",\"I am wrong\",\"confess\"],\"icon\":\"m(_ _;m)\",\"category\":\"emotion\"},\"nosebleeding\":{\"keywords\":[\"shocked\",\"nose\",\"blood\",\"sexy\",\"beautiful\"],\"icon\":\"(＾་།＾)\",\"category\":\"emotion\"},\"writing_quietly\":{\"keywords\":[\"writing\",\"study\",\"essay\",\"working hard\"],\"icon\":\"__φ(．．)\",\"category\":\"behavior\"},\"running_fast\":{\"keywords\":[\"run\",\"escape\",\"right\"],\"icon\":\"C= C= C= C=┌(｀ー´)┘\",\"category\":\"behavior\"},\"sleepy\":{\"keywords\":[\"sleeping\",\"tired\",\"exhausted\",\"slobber\"],\"icon\":\"(￣ρ￣)..zzZZ\",\"category\":\"animal\"},\"nya_cat\":{\"keywords\":[\"nya\",\"cat\",\"pet\"],\"icon\":\"( =ω=)..nyaa\",\"category\":\"animal\"},\"cute_polar_bear\":{\"keywords\":[\"bear\",\"polar bear\",\"smile bear\"],\"icon\":\"ʕ •ᴥ• ʔ\",\"category\":\"animal\"},\"normal_dog_ear_down\":{\"keywords\":[\"dog\",\"dog ear down\"],\"icon\":\"∪･ω･∪\",\"category\":\"animal\"},\"happy_rabbit\":{\"keywords\":[\"rabbit\",\"exciting\",\"joy\"],\"icon\":\"／(≧ x ≦)＼\",\"category\":\"animal\"},\"normal_pig\":{\"keywords\":[\"pig\",\"cute\",\"pork\"],\"icon\":\"｡ﾟ(ﾟ´(00)`ﾟ)ﾟ｡\",\"category\":\"animal\"},\"big_black_eyes_bird\":{\"keywords\":[\"bird\",\"black round eyes\",\"fly\"],\"icon\":\"(◉Θ◉)\",\"category\":\"animal\"},\"swimming_left_fish\":{\"keywords\":[\"fish\",\"swim\",\"water\"],\"icon\":\"(°)#))<<\",\"category\":\"animal\"},\"friends_together\":{\"keywords\":[\"friends\",\"hangout\",\"play\",\"party\"],\"icon\":\"٩(๑･ิᴗ･ิ)۶٩(･ิᴗ･ิ๑)۶\",\"category\":\"people\"},\"friends_hand_in_hand\":{\"keywords\":[\"friends\",\"hangout\",\"cheer\",\"together\",\"happy\",\"smile\"],\"icon\":\"ヽ(≧◡≦)八(o^ ^o)ノ\",\"category\":\"people\"},\"fight_enemies\":{\"keywords\":[\"quarrel\",\"punch_in_face\",\"angry\",\"beat\",\"unhappy\"],\"icon\":\"(｀⌒*)O-(｀⌒´Q)\",\"category\":\"people\"},\"shot_you\":{\"keywords\":[\"shooting\",\"weapon\",\"fight\",\"war\",\"gun\"],\"icon\":\"(ﾒ￣▽￣)︻┳═一\",\"category\":\"behavior\"},\"magic_flower\":{\"keywords\":[\"majic\",\"give_you\",\"beautiful\"],\"icon\":\"(⊃｡•́‿•̀｡)⊃━✿✿✿✿✿✿\",\"category\":\"behavior\"},\"majic_star\":{\"keywords\":[\"majic\",\"star\",\"shooting\",\"biu-biu\"],\"icon\":\"(ﾉ≧∀≦)ﾉ ‥…━━━★\",\"category\":\"behavior\"},\"food\":{\"keywords\":[\"delicious\",\"hungry\",\"yum\",\"salivate\"],\"icon\":\"Fooooood…ԅ(¯﹃¯ԅ)\",\"category\":\"behavior\"},\"singing\":{\"keywords\":[\"music\",\"sing\",\"party\",\"relax\"],\"icon\":\"((ヽ(๑╹◡╹๑)ﾉ))♬\",\"category\":\"behavior\"},\"let's_go\":{\"keywords\":[\"go\",\"hangout\",\"exciting\"],\"icon\":\"─=≡Σ((( つ•̀ω•́)つLET’SGO!\",\"category\":\"behavior\"},\"cheering\":{\"keywords\":[\"happy\",\"cheer\",\"joy\",\"hands up\"],\"icon\":\"\\\\\\\\\\\\(۶•̀ᴗ•́)۶//／／\",\"category\":\"behavior\"},\"poking\":{\"keywords\":[\"poke\",\"heyhey\"],\"icon\":\"（￢з￢）σ\",\"category\":\"behavior\"},\"punch\":{\"keywords\":[\"punch in face\",\"punch you\"],\"icon\":\"(o￣∇￣)=◯)`ν゜)\",\"category\":\"behavior\"},\"good_morning\":{\"keywords\":[\"yawn\",\"morning\",\"greeting\"],\"icon\":\"(*´0)ゞ*yawn* morning~\",\"category\":\"behavior\"},\"rise_and_shine\":{\"keywords\":[\"morning\",\"get up\",\"rise\",\"shine\"],\"icon\":\"(*^｡^*)Rise (*^o^*)And ＼(*^0^*)／Shineｰ!!\",\"category\":\"behavior\"},\"good_night\":{\"keywords\":[\"good night\",\"night\",\"dream\"],\"icon\":\"Good(*´ -`)(´- `*)Night\",\"category\":\"behavior\"},\"sleeping\":{\"keywords\":[\"good night\",\"night\",\"sleepy\"],\"icon\":\"(´-ω-)´_ _)´-ω-)´_ _)zZZ\",\"category\":\"behavior\"},\"hello\":{\"keywords\":[\"hi\",\"what's up\",\"hey\"],\"icon\":\"(●っゝω・)っ～☆HELLO☆\",\"category\":\"behavior\"},\"thank_you\":{\"keywords\":[\"thanks\",\"thx\",\"gratitude\"],\"icon\":\"*:;,｡･★Thanks(◎≧v≦)人(≧v≦●)Thanks☆･:.,;*\",\"category\":\"behavior\"},\"thank_kiss\":{\"keywords\":[\"kiss\",\"chu\",\"thanks\",\"thank you\",\"gratitude\"],\"icon\":\"Thank CHU♪(‘εﾟ人)*.+゜\",\"category\":\"behavior\"},\"thank_you_so_much\":{\"keywords\":[\"thanks\",\"thank you\",\"thanks a lot\"],\"icon\":\"Thank you…(´人｀●)SOOOOO━━＼(´∀｀●)／━━MUCH!!\",\"category\":\"behavior\"},\"sniff\":{\"keywords\":[\"sad\",\"unhappy\",\"sniff\",\"cry\",\"depressed\",\"feeling down\"],\"icon\":\"(´＿｀。) *sniff*\",\"category\":\"emotion\"},\"hug_for_you\":{\"keywords\":[\"hug\",\"hug you\",\"sweet\",\"comfort\",\"love\"],\"icon\":\"HUG FOR YOU~╰(*´︶`*)╯(´・ω・｀)\",\"category\":\"behavior\"},\"simple_dog\":{\"keywords\":[\"dog\",\"animal\",\"bark\",\"pet\"],\"icon\":\"▼・ᴥ・▼\",\"category\":\"animal\"},\"simple_cat\":{\"keywords\":[\"cat\",\"animal\",\"nya\",\"meow\",\"simple\",\"pet\"],\"icon\":\"=^._.^= ∫\",\"category\":\"animal\"},\"flower_cat\":{\"keywords\":[\"cat\",\"flower\",\"nya\",\"meow\",\"pet\",\"cute\"],\"icon\":\" /ᐠ｡ꞈ｡ᐟ✿\\\\ \",\"category\":\"animal\"},\"table_flip_angry\":{\"keywords\":[\"table flip\",\"angry\",\"what?!\",\"shocked\"],\"icon\":\"(┛✧Д✧))┛彡┻━┻\",\"category\":\"behavior\"},\"set_table\":{\"keywords\":[\"table\",\"there we go\",\"happy\",\"party\",\"prepare\"],\"icon\":\"┣ﾍ(^▽^ﾍ)Ξ(ﾟ▽ﾟ*)ﾉ┳━┳ There we go~♪\",\"category\":\"behavior\"},\"thumbs_down\":{\"keywords\":[\"thumb_down\",\"angry\",\"unhappy\"],\"icon\":\"p(●｀□´●)q\",\"category\":\"behavior\"},\"blushing_flower_girl\":{\"keywords\":[\"blushing\",\"girl\",\"flower\",\"shy\",\"cute\"],\"icon\":\"(///∇///✿)\",\"category\":\"behavior\"},\"merry_x'mas\":{\"keywords\":[\"merry christmas\",\"christmas time\",\"christmas\"],\"icon\":\"†+☆;:*:;☆。:.†Merry X’mas゜†.:。☆;:*:;☆+†\",\"category\":\"holiday\"},\"happy_Xmas\":{\"keywords\":[\"merry christmas\",\"christmas time\",\"christmas\",\"Xmas\"],\"icon\":\"o＜(*’v`p)p☆+*:;;;:*+☆ Happy Xmas ☆+*:;;;:*+☆q(q’v`*)＞o\",\"category\":\"holiday\"},\"cute_flower_bear\":{\"keywords\":[\"bear\",\"animal\",\"cute\",\"pet\",\"flower\"],\"icon\":\"(✿◕㉨◕)\",\"category\":\"animal\"},\"love_letter\":{\"keywords\":[\"love\",\"writing\",\"valentine\",\"I love you\"],\"icon\":\"I Love You..〆(・∀・＊)\",\"category\":\"holiday\"},\"chocolate_valentine\":{\"keywords\":[\"love\",\"chocolate\",\"valentine\",\"I love you\"],\"icon\":\"Chocolate!( ・∀・)っ■\",\"category\":\"food\"},\"gross_creepy\":{\"keywords\":[\"gross\",\"creepy\",\"wtf\"],\"icon\":\"༼;´༎ຶ ۝ ༎ຶ༽\",\"category\":\"emotion\"},\"awkward_cross_eyes\":{\"keywords\":[\"awkward\",\"funny\",\"weird\",\"idiot\"],\"icon\":\"(´◑ω◐`)\",\"category\":\"behavior\"},\"jailed_smile\":{\"keywords\":[\"jailed\",\"shut in\"],\"icon\":\"||Φ|(|ﾟ|∀|ﾟ|)|Φ||\",\"category\":\"behavior\"}}");

/***/ }),

/***/ "./node_modules/milligram/dist/milligram.min.css":
/*!*******************************************************!*\
  !*** ./node_modules/milligram/dist/milligram.min.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../css-loader/dist/cjs.js??ref--6-1!./milligram.min.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/milligram/dist/milligram.min.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_milligram_dist_milligram_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/milligram/dist/milligram.min.css */ "./node_modules/milligram/dist/milligram.min.css");
/* harmony import */ var _node_modules_milligram_dist_milligram_min_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_milligram_dist_milligram_min_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var kaomojilib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! kaomojilib */ "./node_modules/kaomojilib/index.js");
/* harmony import */ var kaomojilib__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(kaomojilib__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_kao_moji_data_kaomoji_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/kao.moji/data/kaomoji.json */ "./node_modules/kao.moji/data/kaomoji.json");
var _node_modules_kao_moji_data_kaomoji_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../node_modules/kao.moji/data/kaomoji.json */ "./node_modules/kao.moji/data/kaomoji.json", 1);
/* harmony import */ var _kaomoji__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./kaomoji */ "./src/kaomoji.js");
/* harmony import */ var _kaomoji__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_kaomoji__WEBPACK_IMPORTED_MODULE_4__);


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }






var HISTORY_SIZE = 50;

var onClick = function onClick(e) {
  copy(e.currentTarget.value);
  history = addHistory(history, e.currentTarget.value);
  drawHistory(history);
  saveHistory(history);
};

var addHistory = function addHistory(history, icon) {
  var newHistory = history.filter(function (v) {
    return v != icon;
  });
  newHistory.unshift(icon);
  newHistory = newHistory.slice(0, HISTORY_SIZE);
  return newHistory;
};

var copy = function copy(str) {
  if (!str || typeof str != "string") {
    return;
  }

  var textarea = document.createElement('textarea');
  textarea.style = 'position:fixed;right:100vw;font-size:16px;';
  textarea.readOnly = true;
  textarea.value = str;
  document.body.appendChild(textarea);
  textarea.select();
  var range = document.createRange();
  range.selectNodeContents(textarea);
  var sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
  textarea.setSelectionRange(0, 999999);
  document.execCommand("copy");
  textarea.parentNode.removeChild(textarea);
};

var button = function button(icon, onClickFunction, classList) {
  var _button$classList;

  var button = document.createElement('button');
  button.textContent = icon;
  button.value = icon;

  (_button$classList = button.classList).add.apply(_button$classList, _toConsumableArray(classList));

  button.addEventListener('click', onClickFunction, false);
  return button;
};

var normalButtonClass = ['button', 'button-outline'];
var utilityButtonClass = ['button', 'button-utility'];
var history = localStorage.getItem('history');

if (history != null) {
  history = JSON.parse(history);
} else {
  history = [];
}

var userIcon = localStorage.getItem('userIcon');

if (userIcon != null) {
  userIcon = JSON.parse(userIcon);
} else {
  userIcon = [];
}

var saveHistory = function saveHistory(history) {
  localStorage.setItem('history', JSON.stringify(history));
};

var historyElm = document.querySelector('#history');

var drawHistory = function drawHistory() {
  while (historyElm.firstChild) {
    historyElm.removeChild(historyElm.firstChild);
  }

  history.forEach(function (h) {
    historyElm.appendChild(button(h, onClick, normalButtonClass));
  });
};

drawHistory(history);
var main = document.querySelector('#main');

var addIcon = function addIcon(e) {
  var kaomoji = prompt('input kaomoji.');
  var newUserIcon = userIcon.filter(function (v) {
    return v != kaomoji;
  });
  newUserIcon.unshift(kaomoji);
  userIcon = newUserIcon;
  localStorage.setItem('userIcon', JSON.stringify(userIcon));
  location.reload();
};

main.appendChild(button('⊞ ADD', addIcon, utilityButtonClass));
userIcon.forEach(function (i) {
  main.appendChild(button(i, onClick, normalButtonClass));
});
_kaomoji__WEBPACK_IMPORTED_MODULE_4___default.a.forEach(function (k) {
  main.appendChild(button(k, onClick, normalButtonClass));
});
Object.values(_node_modules_kao_moji_data_kaomoji_json__WEBPACK_IMPORTED_MODULE_3__).forEach(function (k) {
  k.forEach(function (i) {
    main.appendChild(button(i, onClick, normalButtonClass));
  });
});
Object.entries(kaomojilib__WEBPACK_IMPORTED_MODULE_2___default.a.library).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      text = _ref2[0],
      content = _ref2[1];

  main.appendChild(button(content.icon, onClick, normalButtonClass));
});

/***/ }),

/***/ "./src/kaomoji.js":
/*!************************!*\
  !*** ./src/kaomoji.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ["༓٩(❛ัᴗ❛ั ๑)༊༅̥̇⁺೨*˚·", "₍˄·͈༝·͈˄₎◞ෆ⃛̑̑ෆ⃛", "( *´罒`* )", "(๑ ˊ͈ ᐞ ˋ͈ )ƅ̋ｸﾞｯ！", "ｬ˞♡ฅ(ᐤˊ꒳ฅˋᐤ♪)", "ฅ^•ﻌ•^ฅ", "꒰๑•́ധ•̀๑꒱", "(❁°͈▵°͈)", "(๑°⌓°๑)", "( ･ㅂ･ )", "٩(•̤̀ᵕ•̤́๑)ᵒᵏ", "(*✧×✧*)", "❆(੭ु ◜◡‾)੭ु⁾☃❆", "( •ω•ฅ）.｡.:*♡", "ﾆｬｰﾝ₍˄ุ.͡˳̫.˄ุ₎ฅ˒˒", "｡ﾟ( ﾟஇ‸இﾟ)ﾟ｡", ".°(ಗдಗ。)°.", "ﾊﾟﾀﾘृ(·́௰·̀ू[▓▒▓]˒˒˚º꒰꒱", "(ृ°͈꒳​°͈ ृ)ु", "(๑ᵉ̷͈◡ॢᵉ̷͈๑)Üfu♡", "⊚⃝(ू｡∵｡) ⋆｡°✩", "=͟͟͞͞( ∩ 'ヮ'=͟͟͞͞) ੭ु⁾⁾", "₍˄·͈༝·͈˄*₎◞ ̑̑", "(๑˃̥̩̥̥̥̥̆ಐ˂̩̩̥̥̩̥̆৭)", "(❛ัॢᵕ❛ั ॢ)✩*ೃ.⋆", "୧(˃◡ु˂)୨", "(o☍д⁰)o", "╭(๑•̀ㅂ•́)و", "╭( ・ㅂ・)و ̑̑ ｸﾞｯ !", "(✿◖◡​◗)", "_(┐「﹃ﾟ｡)_", "(´ . .̫ . `) ༘ؓ ँั๊ྃ", "(╹౪╹*๑)", "ლ(╹ε╹ლ)　", "(❀ฺ´∀`❀ฺ)ﾉ", "✧ʕ̢̣̣̣̣̩̩̩̩·͡˔·ོ̡̣̣̣̣̩̩̩̩", "(੭ु╹▿╹)੭ु⁾⁾", "٩(๑`н´๑)۶おこ", "(๑و•̀ω•́)و", "⁄(⁄ ⁄•⁄ω⁄•⁄ ⁄)⁄", "(ू′o‵ ू)*✲ﾟ", "ପ(⑅ ॣ•͈૦•͈ ॣ)ଓ", "꒰ •͈́ ̫ •͈̀ ꒱ˉ̞̭", "ヾ(დ☣‿☣)ﾉ", "ヾ(✿❛◡❛ฺฺ)ノぉはよぉ～❤", "٩(*❛⊰❛)ʓਡ～❤", "ヽ(❀・♉ฺ･｀)ﾉ ♡", "٩(๑ ^ ́๑)۶", "∑(◕ฺˇ∀ˇ◕ฺ)", "(人･㉨･)♡", "ჰ❛‿❛ჴHello❤", "（๑・౩・๑）", "( ･ิω･ิ）", "ლ(◖◡◗ლ)", "✿◔‿◔✿", "ξ╹▿ˋξ✴✴✴❤", "⁂(✺‿✺)⁂", "（╹ө╹）", "ლ( ❛ ◡ ❛ ლ) ", "（♥￫ｏ￩♥）", "✌（✿❜◡❜❁）", "ઈಥᆸఠ）ノ", "✌(▮◡▮)❤", "（❃ӦωӦ）", "ლ( סּڼסּ )ლ", "♪感✿・⋄・✿謝♪", "❤∭❛ʚ❛∭", "｡ﾟ(ﾟ∩´﹏`∩ﾟ)ﾟ｡", "ლ(⁰⊖⁰ლ)　", "ლ(◉◞౪◟◉ )ლ　", "(　◔ิω◔ิ) ", "ヾ(დ☣‿☣)ﾉ", "(〃･ิ‿･ิ)ゞ", "(⊙◞౪◟⊙)", "(亝ω亝｡)​", "φ(≖ω≖｡)", "(･ิω･ิ)", "(ﾟДﾟ≡ﾟДﾟ)", "☆〜（ゝ。∂）", "(*☻-☻*)", "(ヾﾉ'д'o)", "(´⊙◞⊱​◟⊙｀)​", "(☼Д☼)", "(╬◣益◢)", "（╬ಠ益ಠ) ", "(╬☉д⊙) ", "(´◑ω◐`) ", "(´◕ω◕`)", "(╬♛ 益♛ ) ", "( ☞ ・Д・)☞", "( :; ´^;ิ益;^ิ;.) ", "(◞≼۩۞۩≽◟◞౪◟◞≼۩۞۩≽◟)　", "( ´థ,_‥థ｀)　　　", "ʕ￫ᴥ￩ʔ ʕ　·ᴥ·ʔ", "(*｀益´*)", "(◉ืൠ◉ื)", "(　 ՞ਊ ՞)", "(　˘ਊ˘)", "(☝ ՞ਊ ՞)☝ｳｨｰ", "(΄・◞౪◟・)΄◉◞౪◟◉)´◔◞౪◟◔’)", "☝(☣౪☣)☝", "(☝°﹆°)☝", "( ◠‿◠ )"];

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-1!./style.css */ "./node_modules/css-loader/dist/cjs.js?!./src/style.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21pbGxpZ3JhbS9kaXN0L21pbGxpZ3JhbS5taW4uY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMva2FvbW9qaWxpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWlsbGlncmFtL2Rpc3QvbWlsbGlncmFtLm1pbi5jc3M/M2NkMyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9rYW9tb2ppLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5jc3M/ZTdjYSJdLCJuYW1lcyI6WyJISVNUT1JZX1NJWkUiLCJvbkNsaWNrIiwiZSIsImNvcHkiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJoaXN0b3J5IiwiYWRkSGlzdG9yeSIsImRyYXdIaXN0b3J5Iiwic2F2ZUhpc3RvcnkiLCJpY29uIiwibmV3SGlzdG9yeSIsImZpbHRlciIsInYiLCJ1bnNoaWZ0Iiwic2xpY2UiLCJzdHIiLCJ0ZXh0YXJlYSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwicmVhZE9ubHkiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJzZWxlY3QiLCJyYW5nZSIsImNyZWF0ZVJhbmdlIiwic2VsZWN0Tm9kZUNvbnRlbnRzIiwic2VsIiwid2luZG93IiwiZ2V0U2VsZWN0aW9uIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJzZXRTZWxlY3Rpb25SYW5nZSIsImV4ZWNDb21tYW5kIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiYnV0dG9uIiwib25DbGlja0Z1bmN0aW9uIiwiY2xhc3NMaXN0IiwidGV4dENvbnRlbnQiLCJhZGQiLCJhZGRFdmVudExpc3RlbmVyIiwibm9ybWFsQnV0dG9uQ2xhc3MiLCJ1dGlsaXR5QnV0dG9uQ2xhc3MiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwidXNlckljb24iLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiaGlzdG9yeUVsbSIsInF1ZXJ5U2VsZWN0b3IiLCJmaXJzdENoaWxkIiwiZm9yRWFjaCIsImgiLCJtYWluIiwiYWRkSWNvbiIsImthb21vamkiLCJwcm9tcHQiLCJuZXdVc2VySWNvbiIsImxvY2F0aW9uIiwicmVsb2FkIiwiaSIsImthb2RhdGEiLCJrIiwiT2JqZWN0IiwidmFsdWVzIiwia2FvY3N2IiwiZW50cmllcyIsImthbyIsImxpYnJhcnkiLCJ0ZXh0IiwiY29udGVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNE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LFdBbEVpQixFQW1FakIsUUFuRWlCLEVBb0VqQixlQXBFaUIsRUFxRWpCLFVBckVpQixFQXNFakIsYUF0RWlCLEVBdUVqQixXQXZFaUIsRUF3RWpCLFVBeEVpQixFQXlFakIsV0F6RWlCLEVBMEVqQixTQTFFaUIsRUEyRWpCLFNBM0VpQixFQTRFakIsU0E1RWlCLEVBNkVqQixTQTdFaUIsRUE4RWpCLFdBOUVpQixFQStFakIsU0EvRWlCLEVBZ0ZqQixTQWhGaUIsRUFpRmpCLFVBakZpQixFQWtGakIsYUFsRmlCLEVBbUZqQixPQW5GaUIsRUFvRmpCLFFBcEZpQixFQXFGakIsU0FyRmlCLEVBc0ZqQixTQXRGaUIsRUF1RmpCLFVBdkZpQixFQXdGakIsU0F4RmlCLEVBeUZqQixXQXpGaUIsRUEwRmpCLFdBMUZpQixFQTJGakIsbUJBM0ZpQixFQTRGakIsc0JBNUZpQixFQTZGakIsZUE3RmlCLEVBOEZqQixjQTlGaUIsRUErRmpCLFNBL0ZpQixFQWdHakIsU0FoR2lCLEVBaUdqQixVQWpHaUIsRUFrR2pCLFFBbEdpQixFQW1HakIsY0FuR2lCLEVBb0dqQix5QkFwR2lCLEVBcUdqQixTQXJHaUIsRUFzR2pCLFNBdEdpQixFQXVHakIsU0F2R2lCLENBQWpCLEM7Ozs7Ozs7Ozs7O0FDQUEsVUFBVSxtQkFBTyxDQUFDLG1KQUF3RTtBQUMxRiwwQkFBMEIsbUJBQU8sQ0FBQyw2SEFBZ0U7O0FBRWxHOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyohXFxuICogTWlsbGlncmFtIHYxLjMuMFxcbiAqIGh0dHBzOi8vbWlsbGlncmFtLmdpdGh1Yi5pb1xcbiAqXFxuICogQ29weXJpZ2h0IChjKSAyMDE3IENKIFBhdG9pbG9cXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcXG4gKi9cXG5cXG4qLCo6YWZ0ZXIsKjpiZWZvcmV7Ym94LXNpemluZzppbmhlcml0fWh0bWx7Ym94LXNpemluZzpib3JkZXItYm94O2ZvbnQtc2l6ZTo2Mi41JX1ib2R5e2NvbG9yOiM2MDZjNzY7Zm9udC1mYW1pbHk6J1JvYm90bycsICdIZWx2ZXRpY2EgTmV1ZScsICdIZWx2ZXRpY2EnLCAnQXJpYWwnLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxLjZlbTtmb250LXdlaWdodDozMDA7bGV0dGVyLXNwYWNpbmc6LjAxZW07bGluZS1oZWlnaHQ6MS42fWJsb2NrcXVvdGV7Ym9yZGVyLWxlZnQ6MC4zcmVtIHNvbGlkICNkMWQxZDE7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDtwYWRkaW5nOjFyZW0gMS41cmVtfWJsb2NrcXVvdGUgKjpsYXN0LWNoaWxke21hcmdpbi1ib3R0b206MH0uYnV0dG9uLGJ1dHRvbixpbnB1dFt0eXBlPSdidXR0b24nXSxpbnB1dFt0eXBlPSdyZXNldCddLGlucHV0W3R5cGU9J3N1Ym1pdCdde2JhY2tncm91bmQtY29sb3I6IzliNGRjYTtib3JkZXI6MC4xcmVtIHNvbGlkICM5YjRkY2E7Ym9yZGVyLXJhZGl1czouNHJlbTtjb2xvcjojZmZmO2N1cnNvcjpwb2ludGVyO2Rpc3BsYXk6aW5saW5lLWJsb2NrO2ZvbnQtc2l6ZToxLjFyZW07Zm9udC13ZWlnaHQ6NzAwO2hlaWdodDozLjhyZW07bGV0dGVyLXNwYWNpbmc6LjFyZW07bGluZS1oZWlnaHQ6My44cmVtO3BhZGRpbmc6MCAzLjByZW07dGV4dC1hbGlnbjpjZW50ZXI7dGV4dC1kZWNvcmF0aW9uOm5vbmU7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO3doaXRlLXNwYWNlOm5vd3JhcH0uYnV0dG9uOmZvY3VzLC5idXR0b246aG92ZXIsYnV0dG9uOmZvY3VzLGJ1dHRvbjpob3ZlcixpbnB1dFt0eXBlPSdidXR0b24nXTpmb2N1cyxpbnB1dFt0eXBlPSdidXR0b24nXTpob3ZlcixpbnB1dFt0eXBlPSdyZXNldCddOmZvY3VzLGlucHV0W3R5cGU9J3Jlc2V0J106aG92ZXIsaW5wdXRbdHlwZT0nc3VibWl0J106Zm9jdXMsaW5wdXRbdHlwZT0nc3VibWl0J106aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojNjA2Yzc2O2JvcmRlci1jb2xvcjojNjA2Yzc2O2NvbG9yOiNmZmY7b3V0bGluZTowfS5idXR0b25bZGlzYWJsZWRdLGJ1dHRvbltkaXNhYmxlZF0saW5wdXRbdHlwZT0nYnV0dG9uJ11bZGlzYWJsZWRdLGlucHV0W3R5cGU9J3Jlc2V0J11bZGlzYWJsZWRdLGlucHV0W3R5cGU9J3N1Ym1pdCddW2Rpc2FibGVkXXtjdXJzb3I6ZGVmYXVsdDtvcGFjaXR5Oi41fS5idXR0b25bZGlzYWJsZWRdOmZvY3VzLC5idXR0b25bZGlzYWJsZWRdOmhvdmVyLGJ1dHRvbltkaXNhYmxlZF06Zm9jdXMsYnV0dG9uW2Rpc2FibGVkXTpob3ZlcixpbnB1dFt0eXBlPSdidXR0b24nXVtkaXNhYmxlZF06Zm9jdXMsaW5wdXRbdHlwZT0nYnV0dG9uJ11bZGlzYWJsZWRdOmhvdmVyLGlucHV0W3R5cGU9J3Jlc2V0J11bZGlzYWJsZWRdOmZvY3VzLGlucHV0W3R5cGU9J3Jlc2V0J11bZGlzYWJsZWRdOmhvdmVyLGlucHV0W3R5cGU9J3N1Ym1pdCddW2Rpc2FibGVkXTpmb2N1cyxpbnB1dFt0eXBlPSdzdWJtaXQnXVtkaXNhYmxlZF06aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojOWI0ZGNhO2JvcmRlci1jb2xvcjojOWI0ZGNhfS5idXR0b24uYnV0dG9uLW91dGxpbmUsYnV0dG9uLmJ1dHRvbi1vdXRsaW5lLGlucHV0W3R5cGU9J2J1dHRvbiddLmJ1dHRvbi1vdXRsaW5lLGlucHV0W3R5cGU9J3Jlc2V0J10uYnV0dG9uLW91dGxpbmUsaW5wdXRbdHlwZT0nc3VibWl0J10uYnV0dG9uLW91dGxpbmV7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojOWI0ZGNhfS5idXR0b24uYnV0dG9uLW91dGxpbmU6Zm9jdXMsLmJ1dHRvbi5idXR0b24tb3V0bGluZTpob3ZlcixidXR0b24uYnV0dG9uLW91dGxpbmU6Zm9jdXMsYnV0dG9uLmJ1dHRvbi1vdXRsaW5lOmhvdmVyLGlucHV0W3R5cGU9J2J1dHRvbiddLmJ1dHRvbi1vdXRsaW5lOmZvY3VzLGlucHV0W3R5cGU9J2J1dHRvbiddLmJ1dHRvbi1vdXRsaW5lOmhvdmVyLGlucHV0W3R5cGU9J3Jlc2V0J10uYnV0dG9uLW91dGxpbmU6Zm9jdXMsaW5wdXRbdHlwZT0ncmVzZXQnXS5idXR0b24tb3V0bGluZTpob3ZlcixpbnB1dFt0eXBlPSdzdWJtaXQnXS5idXR0b24tb3V0bGluZTpmb2N1cyxpbnB1dFt0eXBlPSdzdWJtaXQnXS5idXR0b24tb3V0bGluZTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1jb2xvcjojNjA2Yzc2O2NvbG9yOiM2MDZjNzZ9LmJ1dHRvbi5idXR0b24tb3V0bGluZVtkaXNhYmxlZF06Zm9jdXMsLmJ1dHRvbi5idXR0b24tb3V0bGluZVtkaXNhYmxlZF06aG92ZXIsYnV0dG9uLmJ1dHRvbi1vdXRsaW5lW2Rpc2FibGVkXTpmb2N1cyxidXR0b24uYnV0dG9uLW91dGxpbmVbZGlzYWJsZWRdOmhvdmVyLGlucHV0W3R5cGU9J2J1dHRvbiddLmJ1dHRvbi1vdXRsaW5lW2Rpc2FibGVkXTpmb2N1cyxpbnB1dFt0eXBlPSdidXR0b24nXS5idXR0b24tb3V0bGluZVtkaXNhYmxlZF06aG92ZXIsaW5wdXRbdHlwZT0ncmVzZXQnXS5idXR0b24tb3V0bGluZVtkaXNhYmxlZF06Zm9jdXMsaW5wdXRbdHlwZT0ncmVzZXQnXS5idXR0b24tb3V0bGluZVtkaXNhYmxlZF06aG92ZXIsaW5wdXRbdHlwZT0nc3VibWl0J10uYnV0dG9uLW91dGxpbmVbZGlzYWJsZWRdOmZvY3VzLGlucHV0W3R5cGU9J3N1Ym1pdCddLmJ1dHRvbi1vdXRsaW5lW2Rpc2FibGVkXTpob3Zlcntib3JkZXItY29sb3I6aW5oZXJpdDtjb2xvcjojOWI0ZGNhfS5idXR0b24uYnV0dG9uLWNsZWFyLGJ1dHRvbi5idXR0b24tY2xlYXIsaW5wdXRbdHlwZT0nYnV0dG9uJ10uYnV0dG9uLWNsZWFyLGlucHV0W3R5cGU9J3Jlc2V0J10uYnV0dG9uLWNsZWFyLGlucHV0W3R5cGU9J3N1Ym1pdCddLmJ1dHRvbi1jbGVhcntiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojOWI0ZGNhfS5idXR0b24uYnV0dG9uLWNsZWFyOmZvY3VzLC5idXR0b24uYnV0dG9uLWNsZWFyOmhvdmVyLGJ1dHRvbi5idXR0b24tY2xlYXI6Zm9jdXMsYnV0dG9uLmJ1dHRvbi1jbGVhcjpob3ZlcixpbnB1dFt0eXBlPSdidXR0b24nXS5idXR0b24tY2xlYXI6Zm9jdXMsaW5wdXRbdHlwZT0nYnV0dG9uJ10uYnV0dG9uLWNsZWFyOmhvdmVyLGlucHV0W3R5cGU9J3Jlc2V0J10uYnV0dG9uLWNsZWFyOmZvY3VzLGlucHV0W3R5cGU9J3Jlc2V0J10uYnV0dG9uLWNsZWFyOmhvdmVyLGlucHV0W3R5cGU9J3N1Ym1pdCddLmJ1dHRvbi1jbGVhcjpmb2N1cyxpbnB1dFt0eXBlPSdzdWJtaXQnXS5idXR0b24tY2xlYXI6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6IzYwNmM3Nn0uYnV0dG9uLmJ1dHRvbi1jbGVhcltkaXNhYmxlZF06Zm9jdXMsLmJ1dHRvbi5idXR0b24tY2xlYXJbZGlzYWJsZWRdOmhvdmVyLGJ1dHRvbi5idXR0b24tY2xlYXJbZGlzYWJsZWRdOmZvY3VzLGJ1dHRvbi5idXR0b24tY2xlYXJbZGlzYWJsZWRdOmhvdmVyLGlucHV0W3R5cGU9J2J1dHRvbiddLmJ1dHRvbi1jbGVhcltkaXNhYmxlZF06Zm9jdXMsaW5wdXRbdHlwZT0nYnV0dG9uJ10uYnV0dG9uLWNsZWFyW2Rpc2FibGVkXTpob3ZlcixpbnB1dFt0eXBlPSdyZXNldCddLmJ1dHRvbi1jbGVhcltkaXNhYmxlZF06Zm9jdXMsaW5wdXRbdHlwZT0ncmVzZXQnXS5idXR0b24tY2xlYXJbZGlzYWJsZWRdOmhvdmVyLGlucHV0W3R5cGU9J3N1Ym1pdCddLmJ1dHRvbi1jbGVhcltkaXNhYmxlZF06Zm9jdXMsaW5wdXRbdHlwZT0nc3VibWl0J10uYnV0dG9uLWNsZWFyW2Rpc2FibGVkXTpob3Zlcntjb2xvcjojOWI0ZGNhfWNvZGV7YmFja2dyb3VuZDojZjRmNWY2O2JvcmRlci1yYWRpdXM6LjRyZW07Zm9udC1zaXplOjg2JTttYXJnaW46MCAuMnJlbTtwYWRkaW5nOi4ycmVtIC41cmVtO3doaXRlLXNwYWNlOm5vd3JhcH1wcmV7YmFja2dyb3VuZDojZjRmNWY2O2JvcmRlci1sZWZ0OjAuM3JlbSBzb2xpZCAjOWI0ZGNhO292ZXJmbG93LXk6aGlkZGVufXByZT5jb2Rle2JvcmRlci1yYWRpdXM6MDtkaXNwbGF5OmJsb2NrO3BhZGRpbmc6MXJlbSAxLjVyZW07d2hpdGUtc3BhY2U6cHJlfWhye2JvcmRlcjowO2JvcmRlci10b3A6MC4xcmVtIHNvbGlkICNmNGY1ZjY7bWFyZ2luOjMuMHJlbSAwfWlucHV0W3R5cGU9J2VtYWlsJ10saW5wdXRbdHlwZT0nbnVtYmVyJ10saW5wdXRbdHlwZT0ncGFzc3dvcmQnXSxpbnB1dFt0eXBlPSdzZWFyY2gnXSxpbnB1dFt0eXBlPSd0ZWwnXSxpbnB1dFt0eXBlPSd0ZXh0J10saW5wdXRbdHlwZT0ndXJsJ10sdGV4dGFyZWEsc2VsZWN0ey13ZWJraXQtYXBwZWFyYW5jZTpub25lOy1tb3otYXBwZWFyYW5jZTpub25lO2FwcGVhcmFuY2U6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlcjowLjFyZW0gc29saWQgI2QxZDFkMTtib3JkZXItcmFkaXVzOi40cmVtO2JveC1zaGFkb3c6bm9uZTtib3gtc2l6aW5nOmluaGVyaXQ7aGVpZ2h0OjMuOHJlbTtwYWRkaW5nOi42cmVtIDEuMHJlbTt3aWR0aDoxMDAlfWlucHV0W3R5cGU9J2VtYWlsJ106Zm9jdXMsaW5wdXRbdHlwZT0nbnVtYmVyJ106Zm9jdXMsaW5wdXRbdHlwZT0ncGFzc3dvcmQnXTpmb2N1cyxpbnB1dFt0eXBlPSdzZWFyY2gnXTpmb2N1cyxpbnB1dFt0eXBlPSd0ZWwnXTpmb2N1cyxpbnB1dFt0eXBlPSd0ZXh0J106Zm9jdXMsaW5wdXRbdHlwZT0ndXJsJ106Zm9jdXMsdGV4dGFyZWE6Zm9jdXMsc2VsZWN0OmZvY3Vze2JvcmRlci1jb2xvcjojOWI0ZGNhO291dGxpbmU6MH1zZWxlY3R7YmFja2dyb3VuZDp1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiBoZWlnaHQ9XFxcIjE0XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjkgMTRcXFwiIHdpZHRoPVxcXCIyOVxcXCI+PHBhdGggZmlsbD1cXFwiI2QxZDFkMVxcXCIgZD1cXFwiTTkuMzc3MjcgMy42MjVsNS4wODE1NCA2LjkzNTIzTDE5LjU0MDM2IDMuNjI1XFxcIi8+PC9zdmc+JykgY2VudGVyIHJpZ2h0IG5vLXJlcGVhdDtwYWRkaW5nLXJpZ2h0OjMuMHJlbX1zZWxlY3Q6Zm9jdXN7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiBoZWlnaHQ9XFxcIjE0XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjkgMTRcXFwiIHdpZHRoPVxcXCIyOVxcXCI+PHBhdGggZmlsbD1cXFwiIzliNGRjYVxcXCIgZD1cXFwiTTkuMzc3MjcgMy42MjVsNS4wODE1NCA2LjkzNTIzTDE5LjU0MDM2IDMuNjI1XFxcIi8+PC9zdmc+Jyl9dGV4dGFyZWF7bWluLWhlaWdodDo2LjVyZW19bGFiZWwsbGVnZW5ke2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOjEuNnJlbTtmb250LXdlaWdodDo3MDA7bWFyZ2luLWJvdHRvbTouNXJlbX1maWVsZHNldHtib3JkZXItd2lkdGg6MDtwYWRkaW5nOjB9aW5wdXRbdHlwZT0nY2hlY2tib3gnXSxpbnB1dFt0eXBlPSdyYWRpbydde2Rpc3BsYXk6aW5saW5lfS5sYWJlbC1pbmxpbmV7ZGlzcGxheTppbmxpbmUtYmxvY2s7Zm9udC13ZWlnaHQ6bm9ybWFsO21hcmdpbi1sZWZ0Oi41cmVtfS5jb250YWluZXJ7bWFyZ2luOjAgYXV0bzttYXgtd2lkdGg6MTEyLjByZW07cGFkZGluZzowIDIuMHJlbTtwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlfS5yb3d7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtwYWRkaW5nOjA7d2lkdGg6MTAwJX0ucm93LnJvdy1uby1wYWRkaW5ne3BhZGRpbmc6MH0ucm93LnJvdy1uby1wYWRkaW5nPi5jb2x1bW57cGFkZGluZzowfS5yb3cucm93LXdyYXB7ZmxleC13cmFwOndyYXB9LnJvdy5yb3ctdG9we2FsaWduLWl0ZW1zOmZsZXgtc3RhcnR9LnJvdy5yb3ctYm90dG9te2FsaWduLWl0ZW1zOmZsZXgtZW5kfS5yb3cucm93LWNlbnRlcnthbGlnbi1pdGVtczpjZW50ZXJ9LnJvdy5yb3ctc3RyZXRjaHthbGlnbi1pdGVtczpzdHJldGNofS5yb3cucm93LWJhc2VsaW5le2FsaWduLWl0ZW1zOmJhc2VsaW5lfS5yb3cgLmNvbHVtbntkaXNwbGF5OmJsb2NrO2ZsZXg6MSAxIGF1dG87bWFyZ2luLWxlZnQ6MDttYXgtd2lkdGg6MTAwJTt3aWR0aDoxMDAlfS5yb3cgLmNvbHVtbi5jb2x1bW4tb2Zmc2V0LTEwe21hcmdpbi1sZWZ0OjEwJX0ucm93IC5jb2x1bW4uY29sdW1uLW9mZnNldC0yMHttYXJnaW4tbGVmdDoyMCV9LnJvdyAuY29sdW1uLmNvbHVtbi1vZmZzZXQtMjV7bWFyZ2luLWxlZnQ6MjUlfS5yb3cgLmNvbHVtbi5jb2x1bW4tb2Zmc2V0LTMzLC5yb3cgLmNvbHVtbi5jb2x1bW4tb2Zmc2V0LTM0e21hcmdpbi1sZWZ0OjMzLjMzMzMlfS5yb3cgLmNvbHVtbi5jb2x1bW4tb2Zmc2V0LTUwe21hcmdpbi1sZWZ0OjUwJX0ucm93IC5jb2x1bW4uY29sdW1uLW9mZnNldC02Niwucm93IC5jb2x1bW4uY29sdW1uLW9mZnNldC02N3ttYXJnaW4tbGVmdDo2Ni42NjY2JX0ucm93IC5jb2x1bW4uY29sdW1uLW9mZnNldC03NXttYXJnaW4tbGVmdDo3NSV9LnJvdyAuY29sdW1uLmNvbHVtbi1vZmZzZXQtODB7bWFyZ2luLWxlZnQ6ODAlfS5yb3cgLmNvbHVtbi5jb2x1bW4tb2Zmc2V0LTkwe21hcmdpbi1sZWZ0OjkwJX0ucm93IC5jb2x1bW4uY29sdW1uLTEwe2ZsZXg6MCAwIDEwJTttYXgtd2lkdGg6MTAlfS5yb3cgLmNvbHVtbi5jb2x1bW4tMjB7ZmxleDowIDAgMjAlO21heC13aWR0aDoyMCV9LnJvdyAuY29sdW1uLmNvbHVtbi0yNXtmbGV4OjAgMCAyNSU7bWF4LXdpZHRoOjI1JX0ucm93IC5jb2x1bW4uY29sdW1uLTMzLC5yb3cgLmNvbHVtbi5jb2x1bW4tMzR7ZmxleDowIDAgMzMuMzMzMyU7bWF4LXdpZHRoOjMzLjMzMzMlfS5yb3cgLmNvbHVtbi5jb2x1bW4tNDB7ZmxleDowIDAgNDAlO21heC13aWR0aDo0MCV9LnJvdyAuY29sdW1uLmNvbHVtbi01MHtmbGV4OjAgMCA1MCU7bWF4LXdpZHRoOjUwJX0ucm93IC5jb2x1bW4uY29sdW1uLTYwe2ZsZXg6MCAwIDYwJTttYXgtd2lkdGg6NjAlfS5yb3cgLmNvbHVtbi5jb2x1bW4tNjYsLnJvdyAuY29sdW1uLmNvbHVtbi02N3tmbGV4OjAgMCA2Ni42NjY2JTttYXgtd2lkdGg6NjYuNjY2NiV9LnJvdyAuY29sdW1uLmNvbHVtbi03NXtmbGV4OjAgMCA3NSU7bWF4LXdpZHRoOjc1JX0ucm93IC5jb2x1bW4uY29sdW1uLTgwe2ZsZXg6MCAwIDgwJTttYXgtd2lkdGg6ODAlfS5yb3cgLmNvbHVtbi5jb2x1bW4tOTB7ZmxleDowIDAgOTAlO21heC13aWR0aDo5MCV9LnJvdyAuY29sdW1uIC5jb2x1bW4tdG9we2FsaWduLXNlbGY6ZmxleC1zdGFydH0ucm93IC5jb2x1bW4gLmNvbHVtbi1ib3R0b217YWxpZ24tc2VsZjpmbGV4LWVuZH0ucm93IC5jb2x1bW4gLmNvbHVtbi1jZW50ZXJ7LW1zLWdyaWQtcm93LWFsaWduOmNlbnRlcjthbGlnbi1zZWxmOmNlbnRlcn1AbWVkaWEgKG1pbi13aWR0aDogNDByZW0pey5yb3d7ZmxleC1kaXJlY3Rpb246cm93O21hcmdpbi1sZWZ0Oi0xLjByZW07d2lkdGg6Y2FsYygxMDAlICsgMi4wcmVtKX0ucm93IC5jb2x1bW57bWFyZ2luLWJvdHRvbTppbmhlcml0O3BhZGRpbmc6MCAxLjByZW19fWF7Y29sb3I6IzliNGRjYTt0ZXh0LWRlY29yYXRpb246bm9uZX1hOmZvY3VzLGE6aG92ZXJ7Y29sb3I6IzYwNmM3Nn1kbCxvbCx1bHtsaXN0LXN0eWxlOm5vbmU7bWFyZ2luLXRvcDowO3BhZGRpbmctbGVmdDowfWRsIGRsLGRsIG9sLGRsIHVsLG9sIGRsLG9sIG9sLG9sIHVsLHVsIGRsLHVsIG9sLHVsIHVse2ZvbnQtc2l6ZTo5MCU7bWFyZ2luOjEuNXJlbSAwIDEuNXJlbSAzLjByZW19b2x7bGlzdC1zdHlsZTpkZWNpbWFsIGluc2lkZX11bHtsaXN0LXN0eWxlOmNpcmNsZSBpbnNpZGV9LmJ1dHRvbixidXR0b24sZGQsZHQsbGl7bWFyZ2luLWJvdHRvbToxLjByZW19ZmllbGRzZXQsaW5wdXQsc2VsZWN0LHRleHRhcmVhe21hcmdpbi1ib3R0b206MS41cmVtfWJsb2NrcXVvdGUsZGwsZmlndXJlLGZvcm0sb2wscCxwcmUsdGFibGUsdWx7bWFyZ2luLWJvdHRvbToyLjVyZW19dGFibGV7Ym9yZGVyLXNwYWNpbmc6MDt3aWR0aDoxMDAlfXRkLHRoe2JvcmRlci1ib3R0b206MC4xcmVtIHNvbGlkICNlMWUxZTE7cGFkZGluZzoxLjJyZW0gMS41cmVtO3RleHQtYWxpZ246bGVmdH10ZDpmaXJzdC1jaGlsZCx0aDpmaXJzdC1jaGlsZHtwYWRkaW5nLWxlZnQ6MH10ZDpsYXN0LWNoaWxkLHRoOmxhc3QtY2hpbGR7cGFkZGluZy1yaWdodDowfWIsc3Ryb25ne2ZvbnQtd2VpZ2h0OmJvbGR9cHttYXJnaW4tdG9wOjB9aDEsaDIsaDMsaDQsaDUsaDZ7Zm9udC13ZWlnaHQ6MzAwO2xldHRlci1zcGFjaW5nOi0uMXJlbTttYXJnaW4tYm90dG9tOjIuMHJlbTttYXJnaW4tdG9wOjB9aDF7Zm9udC1zaXplOjQuNnJlbTtsaW5lLWhlaWdodDoxLjJ9aDJ7Zm9udC1zaXplOjMuNnJlbTtsaW5lLWhlaWdodDoxLjI1fWgze2ZvbnQtc2l6ZToyLjhyZW07bGluZS1oZWlnaHQ6MS4zfWg0e2ZvbnQtc2l6ZToyLjJyZW07bGV0dGVyLXNwYWNpbmc6LS4wOHJlbTtsaW5lLWhlaWdodDoxLjM1fWg1e2ZvbnQtc2l6ZToxLjhyZW07bGV0dGVyLXNwYWNpbmc6LS4wNXJlbTtsaW5lLWhlaWdodDoxLjV9aDZ7Zm9udC1zaXplOjEuNnJlbTtsZXR0ZXItc3BhY2luZzowO2xpbmUtaGVpZ2h0OjEuNH1pbWd7bWF4LXdpZHRoOjEwMCV9LmNsZWFyZml4OmFmdGVye2NsZWFyOmJvdGg7Y29udGVudDonICc7ZGlzcGxheTp0YWJsZX0uZmxvYXQtbGVmdHtmbG9hdDpsZWZ0fS5mbG9hdC1yaWdodHtmbG9hdDpyaWdodH1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHl7YmFja2dyb3VuZC1jb2xvcjogIzQzM2QzYztcXHJcXG4gICAgfVxcclxcbi5idXR0b24ge1xcclxcbiAgICBmb250LWZhbWlseTogJ05vdG8gU2FucyBKUCcsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhOTllOTM7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogI2E5OWU5MztcXHJcXG4gICAgY29sb3I6I2U4ZDNjNyAhaW1wb3J0YW50O1xcclxcbiAgICBtYXJnaW46LjVlbTtcXHJcXG59XFxyXFxuLmJ1dHRvbi11dGlsaXR5IHtcXHJcXG4gICAgY29sb3I6IzQzM2QzYyAhaW1wb3J0YW50O1xcclxcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdGxpYnJhcnkgOiByZXF1aXJlKCcuL2thb21vamkuanNvbicpXG59XG5cblxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0xIS4vbWlsbGlncmFtLm1pbi5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIid1c2Ugc3RyaWN0JztcclxuaW1wb3J0ICcuLi9ub2RlX21vZHVsZXMvbWlsbGlncmFtL2Rpc3QvbWlsbGlncmFtLm1pbi5jc3MnO1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IGthbyBmcm9tICdrYW9tb2ppbGliJztcclxuaW1wb3J0IGthb2NzdiBmcm9tICcuLi9ub2RlX21vZHVsZXMva2FvLm1vamkvZGF0YS9rYW9tb2ppLmpzb24nO1xyXG5pbXBvcnQga2FvZGF0YSBmcm9tIFwiLi9rYW9tb2ppXCI7XHJcblxyXG5jb25zdCBISVNUT1JZX1NJWkUgPSA1MDtcclxuXHJcbmNvbnN0IG9uQ2xpY2sgPSBlID0+IHtcclxuICBjb3B5KGUuY3VycmVudFRhcmdldC52YWx1ZSk7XHJcbiAgaGlzdG9yeSA9IGFkZEhpc3RvcnkoaGlzdG9yeSwgZS5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcclxuICBkcmF3SGlzdG9yeShoaXN0b3J5KTtcclxuICBzYXZlSGlzdG9yeShoaXN0b3J5KTtcclxufVxyXG5cclxuY29uc3QgYWRkSGlzdG9yeSA9IChoaXN0b3J5LCBpY29uKSA9PiB7XHJcbiAgbGV0IG5ld0hpc3RvcnkgPSBoaXN0b3J5LmZpbHRlcih2ID0+IHYgIT0gaWNvbik7XHJcbiAgbmV3SGlzdG9yeS51bnNoaWZ0KGljb24pO1xyXG4gIG5ld0hpc3RvcnkgPSBuZXdIaXN0b3J5LnNsaWNlKDAsIEhJU1RPUllfU0laRSk7XHJcbiAgcmV0dXJuIG5ld0hpc3Rvcnk7XHJcbn07XHJcblxyXG5jb25zdCBjb3B5ID0gKHN0cikgPT4ge1xyXG4gIGlmICghc3RyIHx8IHR5cGVvZiAoc3RyKSAhPSBcInN0cmluZ1wiKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGNvbnN0IHRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuICB0ZXh0YXJlYS5zdHlsZSA9ICdwb3NpdGlvbjpmaXhlZDtyaWdodDoxMDB2dztmb250LXNpemU6MTZweDsnO1xyXG4gIHRleHRhcmVhLnJlYWRPbmx5ID0gdHJ1ZTtcclxuICB0ZXh0YXJlYS52YWx1ZSA9IHN0cjtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRleHRhcmVhKTtcclxuICB0ZXh0YXJlYS5zZWxlY3QoKTtcclxuICB2YXIgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xyXG4gIHJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyh0ZXh0YXJlYSk7XHJcbiAgdmFyIHNlbCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuICBzZWwucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgc2VsLmFkZFJhbmdlKHJhbmdlKTtcclxuICB0ZXh0YXJlYS5zZXRTZWxlY3Rpb25SYW5nZSgwLCA5OTk5OTkpO1xyXG4gIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcclxuICB0ZXh0YXJlYS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRleHRhcmVhKTtcclxufVxyXG5cclxuY29uc3QgYnV0dG9uID0gKGljb24sIG9uQ2xpY2tGdW5jdGlvbiAsY2xhc3NMaXN0KSA9PiB7XHJcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgYnV0dG9uLnRleHRDb250ZW50ID0gaWNvbjtcclxuICBidXR0b24udmFsdWUgPSBpY29uO1xyXG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzTGlzdCk7XHJcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25DbGlja0Z1bmN0aW9uLCBmYWxzZSk7XHJcbiAgcmV0dXJuIGJ1dHRvbjtcclxufTtcclxuXHJcbmNvbnN0IG5vcm1hbEJ1dHRvbkNsYXNzID0gWydidXR0b24nLCAnYnV0dG9uLW91dGxpbmUnXTtcclxuY29uc3QgdXRpbGl0eUJ1dHRvbkNsYXNzID0gWydidXR0b24nLCdidXR0b24tdXRpbGl0eSddO1xyXG5cclxubGV0IGhpc3RvcnkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaGlzdG9yeScpO1xyXG5pZiAoaGlzdG9yeSAhPSBudWxsKSB7XHJcbiAgaGlzdG9yeSA9IEpTT04ucGFyc2UoaGlzdG9yeSk7XHJcbn0gZWxzZSB7XHJcbiAgaGlzdG9yeSA9IFtdO1xyXG59XHJcblxyXG5sZXQgdXNlckljb24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlckljb24nKTtcclxuaWYgKHVzZXJJY29uICE9IG51bGwpIHtcclxuICB1c2VySWNvbiA9IEpTT04ucGFyc2UodXNlckljb24pO1xyXG59IGVsc2Uge1xyXG4gIHVzZXJJY29uID0gW107XHJcbn1cclxuXHJcbmNvbnN0IHNhdmVIaXN0b3J5ID0gKGhpc3RvcnkpID0+IHtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaGlzdG9yeScsIEpTT04uc3RyaW5naWZ5KGhpc3RvcnkpKTtcclxufTtcclxuXHJcbmNvbnN0IGhpc3RvcnlFbG0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGlzdG9yeScpO1xyXG5jb25zdCBkcmF3SGlzdG9yeSA9ICgpID0+IHtcclxuICB3aGlsZSAoaGlzdG9yeUVsbS5maXJzdENoaWxkKSB7XHJcbiAgICBoaXN0b3J5RWxtLnJlbW92ZUNoaWxkKGhpc3RvcnlFbG0uZmlyc3RDaGlsZCk7XHJcbiAgfVxyXG4gIGhpc3RvcnkuZm9yRWFjaChoID0+IHtcclxuICAgIGhpc3RvcnlFbG0uYXBwZW5kQ2hpbGQoYnV0dG9uKGgsIG9uQ2xpY2ssIG5vcm1hbEJ1dHRvbkNsYXNzKSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5kcmF3SGlzdG9yeShoaXN0b3J5KTtcclxuXHJcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbicpO1xyXG5cclxuY29uc3QgYWRkSWNvbiA9IChlKSA9PiB7XHJcbiAgY29uc3Qga2FvbW9qaSA9IHByb21wdCgnaW5wdXQga2FvbW9qaS4nKTsgXHJcbiAgbGV0IG5ld1VzZXJJY29uID0gdXNlckljb24uZmlsdGVyKHYgPT4gdiAhPSBrYW9tb2ppKTtcclxuICBuZXdVc2VySWNvbi51bnNoaWZ0KGthb21vamkpO1xyXG4gIHVzZXJJY29uID0gbmV3VXNlckljb247XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJJY29uJywgSlNPTi5zdHJpbmdpZnkodXNlckljb24pKTtcclxuICBsb2NhdGlvbi5yZWxvYWQoKTtcclxufTtcclxuXHJcbm1haW4uYXBwZW5kQ2hpbGQoYnV0dG9uKCfiip4gQUREJywgYWRkSWNvbiwgdXRpbGl0eUJ1dHRvbkNsYXNzKSk7XHJcblxyXG51c2VySWNvbi5mb3JFYWNoKGkgPT4ge1xyXG4gIG1haW4uYXBwZW5kQ2hpbGQoYnV0dG9uKGksIG9uQ2xpY2ssIG5vcm1hbEJ1dHRvbkNsYXNzKSk7XHJcbn0pO1xyXG5cclxua2FvZGF0YS5mb3JFYWNoKGsgPT4ge1xyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChidXR0b24oaywgb25DbGljaywgbm9ybWFsQnV0dG9uQ2xhc3MpKTtcclxufSk7XHJcblxyXG5PYmplY3QudmFsdWVzKGthb2NzdikuZm9yRWFjaChrID0+IHtcclxuICBrLmZvckVhY2goaSA9PiB7XHJcbiAgICBtYWluLmFwcGVuZENoaWxkKGJ1dHRvbihpLCBvbkNsaWNrLCBub3JtYWxCdXR0b25DbGFzcykpO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcbk9iamVjdC5lbnRyaWVzKGthby5saWJyYXJ5KS5mb3JFYWNoKChbdGV4dCwgY29udGVudF0pID0+IHtcclxuICBtYWluLmFwcGVuZENoaWxkKGJ1dHRvbihjb250ZW50Lmljb24sIG9uQ2xpY2ssIG5vcm1hbEJ1dHRvbkNsYXNzKSk7XHJcbn0pO1xyXG5cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBbXHJcblwi4LyT2ako4p2b4Lix4bSX4p2b4LixIOC5kSngvIrgvIXMpcyH4oG64LOoKsuawrdcIixcclxuXCLigo3LhMK3zYjgvJ3Ct82Iy4Tigo7il57gt4big5vMkcyR4LeG4oObXCIsXHJcblwiKCAqwrTnvZJgKiApXCIsXHJcblwiKOC5kSDLis2IIOGQniDLi82IICnGhcyL7724776e772v77yBXCIsXHJcblwi772sy57imaHguIUo4ZCky4rqkrPguIXLi+GQpOKZqilcIixcclxuXCLguIVe4oCi77uM4oCiXuC4hVwiLFxyXG5cIuqSsOC5keKAosyB4LSn4oCizIDguZHqkrFcIixcclxuXCIo4p2BwrDNiOKWtcKwzYgpXCIsXHJcblwiKOC5kcKw4oyTwrDguZEpXCIsXHJcblwiKCDvvaXjhYLvvaUgKVwiLFxyXG5cItmpKOKAosykzIDhtZXigKLMpMyB4LmRKeG1kuG1j1wiLFxyXG5cIigq4pynw5finKcqKVwiLFxyXG5cIuKdhijgqa3gpYEg4pec4peh4oC+KeCpreClgeKBvuKYg+KdhlwiLFxyXG5cIigg4oCiz4nigKLguIXvvIku772hLjoq4pmhXCIsXHJcblwi776G772s772w776d4oKNy4TguLguzaHLs8yrLsuE4Li44oKO4LiFy5LLklwiLFxyXG5cIu+9oe++nygg776f4K6H4oC44K6H776fKe++n++9oVwiLFxyXG5cIi7CsCjgspfQtOCyl+OAginCsC5cIixcclxuXCLvvorvvp/vvoDvvpjgpYMowrfMgeCvsMK3zIDgpYJb4paT4paS4paTXcuSy5LLmsK66pKw6pKxXCIsXHJcblwiKOClg8KwzYjqkrPigIvCsM2IIOClgyngpYFcIixcclxuXCIo4LmR4bWJzLfNiOKXoeClouG1icy3zYjguZEpw5xmdeKZoVwiLFxyXG5cIuKKmuKDnSjgpYLvvaHiiLXvvaEpIOKLhu+9ocKw4pypXCIsXHJcblwiPc2fzZ/Nns2eKCDiiKkgJ+ODric9zZ/Nn82ezZ4pIOCpreClgeKBvuKBvlwiLFxyXG5cIuKCjcuEwrfNiOC8ncK3zYjLhCrigo7il54gzJHMkVwiLFxyXG5cIijguZHLg8ylzKnMpcylzKXMpcyG4LKQy4LMqcypzKXMpcypzKXMhuCnrSlcIixcclxuXCIo4p2b4Lix4KWi4bWV4p2b4LixIOCloininKkq4LODLuKLhlwiLFxyXG5cIuCtpyjLg+KXoeClgcuCKeCtqFwiLFxyXG5cIihv4piN0LTigbApb1wiLFxyXG5cIuKVrSjguZHigKLMgOOFguKAosyBKdmIXCIsXHJcblwi4pWtKCDjg7vjhYLjg7sp2YggzJHMkSDvvbjvvp7vva8gIVwiLFxyXG5cIijinL/il5bil6HigIvil5cpXCIsXHJcblwiXyjilJDjgIzvuYPvvp/vvaEpX1wiLFxyXG5cIijCtCAuIC7MqyAuIGApIOC8mNiTIOCkgeC4seC5iuC+g1wiLFxyXG5cIijilbngsarilbkq4LmRKVwiLFxyXG5cIuGDmijilbnOteKVueGDminjgIBcIixcclxuXCIo4p2A4Li6wrTiiIBg4p2A4Li6Ke++iVwiLFxyXG5cIuKcp8qVzKLMo8yjzKPMo8ypzKnMqcypwrfNocuUwrfgvbzMocyjzKPMo8yjzKnMqcypzKlcIixcclxuXCIo4Kmt4KWB4pW54pa/4pW5KeCpreClgeKBvuKBvlwiLFxyXG5cItmpKOC5kWDQvcK04LmRKdu244GK44GTXCIsXHJcblwiKOC5kdmI4oCizIDPieKAosyBKdmIXCIsXHJcblwi4oGEKOKBhCDigYTigKLigYTPieKBhOKAouKBhCDigYQp4oGEXCIsXHJcblwiKOClguKAsm/igLUg4KWCKSrinLLvvp9cIixcclxuXCLgrKoo4pGFIOClo+KAos2I4Kum4oCizYgg4KWjKeCsk1wiLFxyXG5cIuqSsCDigKLNiMyBIMyrIOKAos2IzIAg6pKxy4nMnsytXCIsXHJcblwi44O+KOGDk+KYo+KAv+KYoynvvolcIixcclxuXCLjg74o4py/4p2b4peh4p2b4Li64Li6KeODjuOBieOBr+OCiOOBie+9nuKdpFwiLFxyXG5cItmpKCrinZviirDinZspypPgqKHvvZ7inaRcIixcclxuXCLjg70o4p2A44O74pmJ4Li6772l772AKe++iSDimaFcIixcclxuXCLZqSjguZEgXiDMgeC5kSnbtlwiLFxyXG5cIuKIkSjil5XguLrLh+KIgMuH4peV4Li6KVwiLFxyXG5cIijkurrvvaXjiajvvaUp4pmhXCIsXHJcblwi4YOw4p2b4oC/4p2b4YO0SGVsbG/inaRcIixcclxuXCLvvIjguZHjg7vgsanjg7vguZHvvIlcIixcclxuXCIoIO+9peC4tM+J772l4Li077yJXCIsXHJcblwi4YOaKOKXluKXoeKXl+GDmilcIixcclxuXCLinL/il5TigL/il5TinL9cIixcclxuXCLOvuKVueKWv8uLzr7inLTinLTinLTinaRcIixcclxuXCLigYIo4py64oC/4py6KeKBglwiLFxyXG5cIu+8iOKVudOp4pW577yJXCIsXHJcblwi4YOaKCDinZsg4pehIOKdmyDhg5opIFwiLFxyXG5cIu+8iOKZpe+/q++9j++/qeKZpe+8iVwiLFxyXG5cIuKcjO+8iOKcv+KdnOKXoeKdnOKdge+8iVwiLFxyXG5cIuCqiOCypeGGuOCwoO+8ieODjlwiLFxyXG5cIuKcjCjilq7il6Hilq4p4p2kXCIsXHJcblwi77yI4p2D06bPidOm77yJXCIsXHJcblwi4YOaKCDXoda82rzXoda8ICnhg5pcIixcclxuXCLimarmhJ/inL/jg7vii4Tjg7vinL/orJ3imapcIixcclxuXCLinaTiiK3inZvKmuKdm+KIrVwiLFxyXG5cIu+9oe++nyjvvp/iiKnCtO+5j2DiiKnvvp8p776f772hXCIsXHJcblwi4YOaKOKBsOKKluKBsOGDminjgIBcIixcclxuXCLhg5oo4peJ4pee4LGq4pef4peJICnhg5rjgIBcIixcclxuXCIo44CA4peU4Li0z4nil5TguLQpIFwiLFxyXG5cIuODvijhg5PimKPigL/imKMp776JXCIsXHJcblwiKOOAg++9peC4tOKAv++9peC4tCnjgp5cIixcclxuXCIo4oqZ4pee4LGq4pef4oqZKVwiLFxyXG5cIijkup3PieS6ne+9oSnigItcIixcclxuXCLPhijiiZbPieKJlu+9oSlcIixcclxuXCIo772l4Li0z4nvvaXguLQpXCIsXHJcblwiKO++n9CU776f4omh776f0JTvvp8pXCIsXHJcblwi4piG44Cc77yI44Kd44CC4oiC77yJXCIsXHJcblwiKCrimLst4pi7KilcIixcclxuXCIo44O+776JJ9C0J28pXCIsXHJcblwiKMK04oqZ4pee4oqx4oCL4pef4oqZ772AKeKAi1wiLFxyXG5cIijimLzQlOKYvClcIixcclxuXCIo4pWs4pej55uK4peiKVwiLFxyXG5cIu+8iOKVrOCyoOebiuCyoCkgXCIsXHJcblwiKOKVrOKYidC04oqZKSBcIixcclxuXCIowrTil5HPieKXkGApIFwiLFxyXG5cIijCtOKXlc+J4peVYClcIixcclxuXCIo4pWs4pmbIOebiuKZmyApIFwiLFxyXG5cIigg4pieIOODu9CU44O7KeKYnlwiLFxyXG5cIiggOjsgwrReO+C4tOebijte4Li0Oy4pIFwiLFxyXG5cIijil57iibzbqdue26niib3il5/il57gsaril5/il57iibzbqdue26niib3il58p44CAXCIsXHJcblwiKCDCtOCwpSxf4oCl4LCl772AKeOAgOOAgOOAgFwiLFxyXG5cIsqV77+r4bSl77+pypQgypXjgIDCt+G0pcK3ypRcIixcclxuXCIoKu+9gOebisK0KilcIixcclxuXCIo4peJ4Li34LWg4peJ4Li3KVwiLFxyXG5cIijjgIAg1Z7gqIog1Z4pXCIsXHJcblwiKOOAgMuY4KiKy5gpXCIsXHJcblwiKOKYnSDVnuCoiiDVninimJ3vvbPvvajvvbBcIixcclxuXCIozoTjg7vil57gsaril5/jg7spzoTil4nil57gsaril5/il4kpwrTil5Til57gsaril5/il5TigJkpXCIsXHJcblwi4pidKOKYo+CxquKYoynimJ1cIixcclxuXCIo4pidwrDvuYbCsCnimJ1cIixcclxuXCIoIOKXoOKAv+KXoCApXCJcclxuXSIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0xIS4vc3R5bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwic291cmNlUm9vdCI6IiJ9