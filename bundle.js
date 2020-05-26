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
exports.push([module.i, "body{background-color: #433d3c;\r\n    }\r\n.button {\r\n    background-color: #a99e93;\r\n    border-color: #a99e93;\r\n    color:#e8d3c7 !important;\r\n    margin:.5em;\r\n  }", ""]);
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


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





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

var button = function button(icon) {
  var button = document.createElement('button');
  button.textContent = icon;
  button.value = icon;
  button.classList.add('button', 'button-outline');
  button.addEventListener('click', onClick, false);
  return button;
};

var history = localStorage.getItem('history');

if (history != null) {
  history = JSON.parse(history);
} else {
  history = [];
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
    historyElm.appendChild(button(h));
  });
};

drawHistory(history);
var main = document.querySelector('#main');
Object.values(_node_modules_kao_moji_data_kaomoji_json__WEBPACK_IMPORTED_MODULE_3__).forEach(function (k) {
  k.forEach(function (i) {
    main.appendChild(button(i));
  });
});
Object.entries(kaomojilib__WEBPACK_IMPORTED_MODULE_2___default.a.library).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      text = _ref2[0],
      content = _ref2[1];

  main.appendChild(button(content.icon));
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21pbGxpZ3JhbS9kaXN0L21pbGxpZ3JhbS5taW4uY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMva2FvbW9qaWxpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWlsbGlncmFtL2Rpc3QvbWlsbGlncmFtLm1pbi5jc3M/M2NkMyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5jc3M/ZTdjYSJdLCJuYW1lcyI6WyJISVNUT1JZX1NJWkUiLCJvbkNsaWNrIiwiZSIsImNvcHkiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJoaXN0b3J5IiwiYWRkSGlzdG9yeSIsImRyYXdIaXN0b3J5Iiwic2F2ZUhpc3RvcnkiLCJpY29uIiwibmV3SGlzdG9yeSIsImZpbHRlciIsInYiLCJ1bnNoaWZ0Iiwic2xpY2UiLCJzdHIiLCJ0ZXh0YXJlYSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwicmVhZE9ubHkiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJzZWxlY3QiLCJyYW5nZSIsImNyZWF0ZVJhbmdlIiwic2VsZWN0Tm9kZUNvbnRlbnRzIiwic2VsIiwid2luZG93IiwiZ2V0U2VsZWN0aW9uIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJzZXRTZWxlY3Rpb25SYW5nZSIsImV4ZWNDb21tYW5kIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiYnV0dG9uIiwidGV4dENvbnRlbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhZGRFdmVudExpc3RlbmVyIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJoaXN0b3J5RWxtIiwicXVlcnlTZWxlY3RvciIsImZpcnN0Q2hpbGQiLCJmb3JFYWNoIiwiaCIsIm1haW4iLCJPYmplY3QiLCJ2YWx1ZXMiLCJrYW9jc3YiLCJrIiwiaSIsImVudHJpZXMiLCJrYW8iLCJsaWJyYXJ5IiwidGV4dCIsImNvbnRlbnQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLDJGQUFzQztBQUNoRjtBQUNBO0FBQ0EsY0FBYyxRQUFTLGdLQUFnSyxtQkFBbUIsS0FBSyxzQkFBc0IsZ0JBQWdCLEtBQUssY0FBYyx5RUFBeUUsZ0JBQWdCLGdCQUFnQixxQkFBcUIsZ0JBQWdCLFdBQVcs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bkMsUUFBUSxDQUFDK0IsYUFBVCxDQUF1QixPQUF2QixDQUFiO0FBQ0FLLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxxRUFBZCxFQUFzQkwsT0FBdEIsQ0FBOEIsVUFBQU0sQ0FBQyxFQUFJO0FBQ2pDQSxHQUFDLENBQUNOLE9BQUYsQ0FBVSxVQUFBTyxDQUFDLEVBQUk7QUFDYkwsUUFBSSxDQUFDOUIsV0FBTCxDQUFpQmMsTUFBTSxDQUFDcUIsQ0FBRCxDQUF2QjtBQUNELEdBRkQ7QUFHRCxDQUpEO0FBTUFKLE1BQU0sQ0FBQ0ssT0FBUCxDQUFlQyxpREFBRyxDQUFDQyxPQUFuQixFQUE0QlYsT0FBNUIsQ0FBb0MsZ0JBQXFCO0FBQUE7QUFBQSxNQUFuQlcsSUFBbUI7QUFBQSxNQUFiQyxPQUFhOztBQUN2RFYsTUFBSSxDQUFDOUIsV0FBTCxDQUFpQmMsTUFBTSxDQUFDMEIsT0FBTyxDQUFDckQsSUFBVCxDQUF2QjtBQUNELENBRkQsRTs7Ozs7Ozs7Ozs7QUNoRkEsVUFBVSxtQkFBTyxDQUFDLG1KQUF3RTtBQUMxRiwwQkFBMEIsbUJBQU8sQ0FBQyw2SEFBZ0U7O0FBRWxHOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyohXFxuICogTWlsbGlncmFtIHYxLjMuMFxcbiAqIGh0dHBzOi8vbWlsbGlncmFtLmdpdGh1Yi5pb1xcbiAqXFxuICogQ29weXJpZ2h0IChjKSAyMDE3IENKIFBhdG9pbG9cXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcXG4gKi9cXG5cXG4qLCo6YWZ0ZXIsKjpiZWZvcmV7Ym94LXNpemluZzppbmhlcml0fWh0bWx7Ym94LXNpemluZzpib3JkZXItYm94O2ZvbnQtc2l6ZTo2Mi41JX1ib2R5e2NvbG9yOiM2MDZjNzY7Zm9udC1mYW1pbHk6J1JvYm90bycsICdIZWx2ZXRpY2EgTmV1ZScsICdIZWx2ZXRpY2EnLCAnQXJpYWwnLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxLjZlbTtmb250LXdlaWdodDozMDA7bGV0dGVyLXNwYWNpbmc6LjAxZW07bGluZS1oZWlnaHQ6MS42fWJsb2NrcXVvdGV7Ym9yZGVyLWxlZnQ6MC4zcmVtIHNvbGlkICNkMWQxZDE7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDtwYWRkaW5nOjFyZW0gMS41cmVtfWJsb2NrcXVvdGUgKjpsYXN0LWNoaWxke21hcmdpbi1ib3R0b206MH0uYnV0dG9uLGJ1dHRvbixpbnB1dFt0eXBlPSdidXR0b24nXSxpbnB1dFt0eXBlPSdyZXNldCddLGlucHV0W3R5cGU9J3N1Ym1pdCdde2JhY2tncm91bmQtY29sb3I6IzliNGRjYTtib3JkZXI6MC4xcmVtIHNvbGlkICM5YjRkY2E7Ym9yZGVyLXJhZGl1czouNHJlbTtjb2xvcjojZmZmO2N1cnNvcjpwb2ludGVyO2Rpc3BsYXk6aW5saW5lLWJsb2NrO2ZvbnQtc2l6ZToxLjFyZW07Zm9udC13ZWlnaHQ6NzAwO2hlaWdodDozLjhyZW07bGV0dGVyLXNwYWNpbmc6LjFyZW07bGluZS1oZWlnaHQ6My44cmVtO3BhZGRpbmc6MCAzLjByZW07dGV4dC1hbGlnbjpjZW50ZXI7dGV4dC1kZWNvcmF0aW9uOm5vbmU7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO3doaXRlLXNwYWNlOm5vd3JhcH0uYnV0dG9uOmZvY3VzLC5idXR0b246aG92ZXIsYnV0dG9uOmZvY3VzLGJ1dHRvbjpob3ZlcixpbnB1dFt0eXBlPSdidXR0b24nXTpmb2N1cyxpbnB1dFt0eXBlPSdidXR0b24nXTpob3ZlcixpbnB1dFt0eXBlPSdyZXNldCddOmZvY3VzLGlucHV0W3R5cGU9J3Jlc2V0J106aG92ZXIsaW5wdXRbdHlwZT0nc3VibWl0J106Zm9jdXMsaW5wdXRbdHlwZT0nc3VibWl0J106aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojNjA2Yzc2O2JvcmRlci1jb2xvcjojNjA2Yzc2O2NvbG9yOiNmZmY7b3V0bGluZTowfS5idXR0b25bZGlzYWJsZWRdLGJ1dHRvbltkaXNhYmxlZF0saW5wdXRbdHlwZT0nYnV0dG9uJ11bZGlzYWJsZWRdLGlucHV0W3R5cGU9J3Jlc2V0J11bZGlzYWJsZWRdLGlucHV0W3R5cGU9J3N1Ym1pdCddW2Rpc2FibGVkXXtjdXJzb3I6ZGVmYXVsdDtvcGFjaXR5Oi41fS5idXR0b25bZGlzYWJsZWRdOmZvY3VzLC5idXR0b25bZGlzYWJsZWRdOmhvdmVyLGJ1dHRvbltkaXNhYmxlZF06Zm9jdXMsYnV0dG9uW2Rpc2FibGVkXTpob3ZlcixpbnB1dFt0eXBlPSdidXR0b24nXVtkaXNhYmxlZF06Zm9jdXMsaW5wdXRbdHlwZT0nYnV0dG9uJ11bZGlzYWJsZWRdOmhvdmVyLGlucHV0W3R5cGU9J3Jlc2V0J11bZGlzYWJsZWRdOmZvY3VzLGlucHV0W3R5cGU9J3Jlc2V0J11bZGlzYWJsZWRdOmhvdmVyLGlucHV0W3R5cGU9J3N1Ym1pdCddW2Rpc2FibGVkXTpmb2N1cyxpbnB1dFt0eXBlPSdzdWJtaXQnXVtkaXNhYmxlZF06aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojOWI0ZGNhO2JvcmRlci1jb2xvcjojOWI0ZGNhfS5idXR0b24uYnV0dG9uLW91dGxpbmUsYnV0dG9uLmJ1dHRvbi1vdXRsaW5lLGlucHV0W3R5cGU9J2J1dHRvbiddLmJ1dHRvbi1vdXRsaW5lLGlucHV0W3R5cGU9J3Jlc2V0J10uYnV0dG9uLW91dGxpbmUsaW5wdXRbdHlwZT0nc3VibWl0J10uYnV0dG9uLW91dGxpbmV7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojOWI0ZGNhfS5idXR0b24uYnV0dG9uLW91dGxpbmU6Zm9jdXMsLmJ1dHRvbi5idXR0b24tb3V0bGluZTpob3ZlcixidXR0b24uYnV0dG9uLW91dGxpbmU6Zm9jdXMsYnV0dG9uLmJ1dHRvbi1vdXRsaW5lOmhvdmVyLGlucHV0W3R5cGU9J2J1dHRvbiddLmJ1dHRvbi1vdXRsaW5lOmZvY3VzLGlucHV0W3R5cGU9J2J1dHRvbiddLmJ1dHRvbi1vdXRsaW5lOmhvdmVyLGlucHV0W3R5cGU9J3Jlc2V0J10uYnV0dG9uLW91dGxpbmU6Zm9jdXMsaW5wdXRbdHlwZT0ncmVzZXQnXS5idXR0b24tb3V0bGluZTpob3ZlcixpbnB1dFt0eXBlPSdzdWJtaXQnXS5idXR0b24tb3V0bGluZTpmb2N1cyxpbnB1dFt0eXBlPSdzdWJtaXQnXS5idXR0b24tb3V0bGluZTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1jb2xvcjojNjA2Yzc2O2NvbG9yOiM2MDZjNzZ9LmJ1dHRvbi5idXR0b24tb3V0bGluZVtkaXNhYmxlZF06Zm9jdXMsLmJ1dHRvbi5idXR0b24tb3V0bGluZVtkaXNhYmxlZF06aG92ZXIsYnV0dG9uLmJ1dHRvbi1vdXRsaW5lW2Rpc2FibGVkXTpmb2N1cyxidXR0b24uYnV0dG9uLW91dGxpbmVbZGlzYWJsZWRdOmhvdmVyLGlucHV0W3R5cGU9J2J1dHRvbiddLmJ1dHRvbi1vdXRsaW5lW2Rpc2FibGVkXTpmb2N1cyxpbnB1dFt0eXBlPSdidXR0b24nXS5idXR0b24tb3V0bGluZVtkaXNhYmxlZF06aG92ZXIsaW5wdXRbdHlwZT0ncmVzZXQnXS5idXR0b24tb3V0bGluZVtkaXNhYmxlZF06Zm9jdXMsaW5wdXRbdHlwZT0ncmVzZXQnXS5idXR0b24tb3V0bGluZVtkaXNhYmxlZF06aG92ZXIsaW5wdXRbdHlwZT0nc3VibWl0J10uYnV0dG9uLW91dGxpbmVbZGlzYWJsZWRdOmZvY3VzLGlucHV0W3R5cGU9J3N1Ym1pdCddLmJ1dHRvbi1vdXRsaW5lW2Rpc2FibGVkXTpob3Zlcntib3JkZXItY29sb3I6aW5oZXJpdDtjb2xvcjojOWI0ZGNhfS5idXR0b24uYnV0dG9uLWNsZWFyLGJ1dHRvbi5idXR0b24tY2xlYXIsaW5wdXRbdHlwZT0nYnV0dG9uJ10uYnV0dG9uLWNsZWFyLGlucHV0W3R5cGU9J3Jlc2V0J10uYnV0dG9uLWNsZWFyLGlucHV0W3R5cGU9J3N1Ym1pdCddLmJ1dHRvbi1jbGVhcntiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojOWI0ZGNhfS5idXR0b24uYnV0dG9uLWNsZWFyOmZvY3VzLC5idXR0b24uYnV0dG9uLWNsZWFyOmhvdmVyLGJ1dHRvbi5idXR0b24tY2xlYXI6Zm9jdXMsYnV0dG9uLmJ1dHRvbi1jbGVhcjpob3ZlcixpbnB1dFt0eXBlPSdidXR0b24nXS5idXR0b24tY2xlYXI6Zm9jdXMsaW5wdXRbdHlwZT0nYnV0dG9uJ10uYnV0dG9uLWNsZWFyOmhvdmVyLGlucHV0W3R5cGU9J3Jlc2V0J10uYnV0dG9uLWNsZWFyOmZvY3VzLGlucHV0W3R5cGU9J3Jlc2V0J10uYnV0dG9uLWNsZWFyOmhvdmVyLGlucHV0W3R5cGU9J3N1Ym1pdCddLmJ1dHRvbi1jbGVhcjpmb2N1cyxpbnB1dFt0eXBlPSdzdWJtaXQnXS5idXR0b24tY2xlYXI6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6IzYwNmM3Nn0uYnV0dG9uLmJ1dHRvbi1jbGVhcltkaXNhYmxlZF06Zm9jdXMsLmJ1dHRvbi5idXR0b24tY2xlYXJbZGlzYWJsZWRdOmhvdmVyLGJ1dHRvbi5idXR0b24tY2xlYXJbZGlzYWJsZWRdOmZvY3VzLGJ1dHRvbi5idXR0b24tY2xlYXJbZGlzYWJsZWRdOmhvdmVyLGlucHV0W3R5cGU9J2J1dHRvbiddLmJ1dHRvbi1jbGVhcltkaXNhYmxlZF06Zm9jdXMsaW5wdXRbdHlwZT0nYnV0dG9uJ10uYnV0dG9uLWNsZWFyW2Rpc2FibGVkXTpob3ZlcixpbnB1dFt0eXBlPSdyZXNldCddLmJ1dHRvbi1jbGVhcltkaXNhYmxlZF06Zm9jdXMsaW5wdXRbdHlwZT0ncmVzZXQnXS5idXR0b24tY2xlYXJbZGlzYWJsZWRdOmhvdmVyLGlucHV0W3R5cGU9J3N1Ym1pdCddLmJ1dHRvbi1jbGVhcltkaXNhYmxlZF06Zm9jdXMsaW5wdXRbdHlwZT0nc3VibWl0J10uYnV0dG9uLWNsZWFyW2Rpc2FibGVkXTpob3Zlcntjb2xvcjojOWI0ZGNhfWNvZGV7YmFja2dyb3VuZDojZjRmNWY2O2JvcmRlci1yYWRpdXM6LjRyZW07Zm9udC1zaXplOjg2JTttYXJnaW46MCAuMnJlbTtwYWRkaW5nOi4ycmVtIC41cmVtO3doaXRlLXNwYWNlOm5vd3JhcH1wcmV7YmFja2dyb3VuZDojZjRmNWY2O2JvcmRlci1sZWZ0OjAuM3JlbSBzb2xpZCAjOWI0ZGNhO292ZXJmbG93LXk6aGlkZGVufXByZT5jb2Rle2JvcmRlci1yYWRpdXM6MDtkaXNwbGF5OmJsb2NrO3BhZGRpbmc6MXJlbSAxLjVyZW07d2hpdGUtc3BhY2U6cHJlfWhye2JvcmRlcjowO2JvcmRlci10b3A6MC4xcmVtIHNvbGlkICNmNGY1ZjY7bWFyZ2luOjMuMHJlbSAwfWlucHV0W3R5cGU9J2VtYWlsJ10saW5wdXRbdHlwZT0nbnVtYmVyJ10saW5wdXRbdHlwZT0ncGFzc3dvcmQnXSxpbnB1dFt0eXBlPSdzZWFyY2gnXSxpbnB1dFt0eXBlPSd0ZWwnXSxpbnB1dFt0eXBlPSd0ZXh0J10saW5wdXRbdHlwZT0ndXJsJ10sdGV4dGFyZWEsc2VsZWN0ey13ZWJraXQtYXBwZWFyYW5jZTpub25lOy1tb3otYXBwZWFyYW5jZTpub25lO2FwcGVhcmFuY2U6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlcjowLjFyZW0gc29saWQgI2QxZDFkMTtib3JkZXItcmFkaXVzOi40cmVtO2JveC1zaGFkb3c6bm9uZTtib3gtc2l6aW5nOmluaGVyaXQ7aGVpZ2h0OjMuOHJlbTtwYWRkaW5nOi42cmVtIDEuMHJlbTt3aWR0aDoxMDAlfWlucHV0W3R5cGU9J2VtYWlsJ106Zm9jdXMsaW5wdXRbdHlwZT0nbnVtYmVyJ106Zm9jdXMsaW5wdXRbdHlwZT0ncGFzc3dvcmQnXTpmb2N1cyxpbnB1dFt0eXBlPSdzZWFyY2gnXTpmb2N1cyxpbnB1dFt0eXBlPSd0ZWwnXTpmb2N1cyxpbnB1dFt0eXBlPSd0ZXh0J106Zm9jdXMsaW5wdXRbdHlwZT0ndXJsJ106Zm9jdXMsdGV4dGFyZWE6Zm9jdXMsc2VsZWN0OmZvY3Vze2JvcmRlci1jb2xvcjojOWI0ZGNhO291dGxpbmU6MH1zZWxlY3R7YmFja2dyb3VuZDp1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiBoZWlnaHQ9XFxcIjE0XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjkgMTRcXFwiIHdpZHRoPVxcXCIyOVxcXCI+PHBhdGggZmlsbD1cXFwiI2QxZDFkMVxcXCIgZD1cXFwiTTkuMzc3MjcgMy42MjVsNS4wODE1NCA2LjkzNTIzTDE5LjU0MDM2IDMuNjI1XFxcIi8+PC9zdmc+JykgY2VudGVyIHJpZ2h0IG5vLXJlcGVhdDtwYWRkaW5nLXJpZ2h0OjMuMHJlbX1zZWxlY3Q6Zm9jdXN7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiBoZWlnaHQ9XFxcIjE0XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjkgMTRcXFwiIHdpZHRoPVxcXCIyOVxcXCI+PHBhdGggZmlsbD1cXFwiIzliNGRjYVxcXCIgZD1cXFwiTTkuMzc3MjcgMy42MjVsNS4wODE1NCA2LjkzNTIzTDE5LjU0MDM2IDMuNjI1XFxcIi8+PC9zdmc+Jyl9dGV4dGFyZWF7bWluLWhlaWdodDo2LjVyZW19bGFiZWwsbGVnZW5ke2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOjEuNnJlbTtmb250LXdlaWdodDo3MDA7bWFyZ2luLWJvdHRvbTouNXJlbX1maWVsZHNldHtib3JkZXItd2lkdGg6MDtwYWRkaW5nOjB9aW5wdXRbdHlwZT0nY2hlY2tib3gnXSxpbnB1dFt0eXBlPSdyYWRpbydde2Rpc3BsYXk6aW5saW5lfS5sYWJlbC1pbmxpbmV7ZGlzcGxheTppbmxpbmUtYmxvY2s7Zm9udC13ZWlnaHQ6bm9ybWFsO21hcmdpbi1sZWZ0Oi41cmVtfS5jb250YWluZXJ7bWFyZ2luOjAgYXV0bzttYXgtd2lkdGg6MTEyLjByZW07cGFkZGluZzowIDIuMHJlbTtwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlfS5yb3d7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtwYWRkaW5nOjA7d2lkdGg6MTAwJX0ucm93LnJvdy1uby1wYWRkaW5ne3BhZGRpbmc6MH0ucm93LnJvdy1uby1wYWRkaW5nPi5jb2x1bW57cGFkZGluZzowfS5yb3cucm93LXdyYXB7ZmxleC13cmFwOndyYXB9LnJvdy5yb3ctdG9we2FsaWduLWl0ZW1zOmZsZXgtc3RhcnR9LnJvdy5yb3ctYm90dG9te2FsaWduLWl0ZW1zOmZsZXgtZW5kfS5yb3cucm93LWNlbnRlcnthbGlnbi1pdGVtczpjZW50ZXJ9LnJvdy5yb3ctc3RyZXRjaHthbGlnbi1pdGVtczpzdHJldGNofS5yb3cucm93LWJhc2VsaW5le2FsaWduLWl0ZW1zOmJhc2VsaW5lfS5yb3cgLmNvbHVtbntkaXNwbGF5OmJsb2NrO2ZsZXg6MSAxIGF1dG87bWFyZ2luLWxlZnQ6MDttYXgtd2lkdGg6MTAwJTt3aWR0aDoxMDAlfS5yb3cgLmNvbHVtbi5jb2x1bW4tb2Zmc2V0LTEwe21hcmdpbi1sZWZ0OjEwJX0ucm93IC5jb2x1bW4uY29sdW1uLW9mZnNldC0yMHttYXJnaW4tbGVmdDoyMCV9LnJvdyAuY29sdW1uLmNvbHVtbi1vZmZzZXQtMjV7bWFyZ2luLWxlZnQ6MjUlfS5yb3cgLmNvbHVtbi5jb2x1bW4tb2Zmc2V0LTMzLC5yb3cgLmNvbHVtbi5jb2x1bW4tb2Zmc2V0LTM0e21hcmdpbi1sZWZ0OjMzLjMzMzMlfS5yb3cgLmNvbHVtbi5jb2x1bW4tb2Zmc2V0LTUwe21hcmdpbi1sZWZ0OjUwJX0ucm93IC5jb2x1bW4uY29sdW1uLW9mZnNldC02Niwucm93IC5jb2x1bW4uY29sdW1uLW9mZnNldC02N3ttYXJnaW4tbGVmdDo2Ni42NjY2JX0ucm93IC5jb2x1bW4uY29sdW1uLW9mZnNldC03NXttYXJnaW4tbGVmdDo3NSV9LnJvdyAuY29sdW1uLmNvbHVtbi1vZmZzZXQtODB7bWFyZ2luLWxlZnQ6ODAlfS5yb3cgLmNvbHVtbi5jb2x1bW4tb2Zmc2V0LTkwe21hcmdpbi1sZWZ0OjkwJX0ucm93IC5jb2x1bW4uY29sdW1uLTEwe2ZsZXg6MCAwIDEwJTttYXgtd2lkdGg6MTAlfS5yb3cgLmNvbHVtbi5jb2x1bW4tMjB7ZmxleDowIDAgMjAlO21heC13aWR0aDoyMCV9LnJvdyAuY29sdW1uLmNvbHVtbi0yNXtmbGV4OjAgMCAyNSU7bWF4LXdpZHRoOjI1JX0ucm93IC5jb2x1bW4uY29sdW1uLTMzLC5yb3cgLmNvbHVtbi5jb2x1bW4tMzR7ZmxleDowIDAgMzMuMzMzMyU7bWF4LXdpZHRoOjMzLjMzMzMlfS5yb3cgLmNvbHVtbi5jb2x1bW4tNDB7ZmxleDowIDAgNDAlO21heC13aWR0aDo0MCV9LnJvdyAuY29sdW1uLmNvbHVtbi01MHtmbGV4OjAgMCA1MCU7bWF4LXdpZHRoOjUwJX0ucm93IC5jb2x1bW4uY29sdW1uLTYwe2ZsZXg6MCAwIDYwJTttYXgtd2lkdGg6NjAlfS5yb3cgLmNvbHVtbi5jb2x1bW4tNjYsLnJvdyAuY29sdW1uLmNvbHVtbi02N3tmbGV4OjAgMCA2Ni42NjY2JTttYXgtd2lkdGg6NjYuNjY2NiV9LnJvdyAuY29sdW1uLmNvbHVtbi03NXtmbGV4OjAgMCA3NSU7bWF4LXdpZHRoOjc1JX0ucm93IC5jb2x1bW4uY29sdW1uLTgwe2ZsZXg6MCAwIDgwJTttYXgtd2lkdGg6ODAlfS5yb3cgLmNvbHVtbi5jb2x1bW4tOTB7ZmxleDowIDAgOTAlO21heC13aWR0aDo5MCV9LnJvdyAuY29sdW1uIC5jb2x1bW4tdG9we2FsaWduLXNlbGY6ZmxleC1zdGFydH0ucm93IC5jb2x1bW4gLmNvbHVtbi1ib3R0b217YWxpZ24tc2VsZjpmbGV4LWVuZH0ucm93IC5jb2x1bW4gLmNvbHVtbi1jZW50ZXJ7LW1zLWdyaWQtcm93LWFsaWduOmNlbnRlcjthbGlnbi1zZWxmOmNlbnRlcn1AbWVkaWEgKG1pbi13aWR0aDogNDByZW0pey5yb3d7ZmxleC1kaXJlY3Rpb246cm93O21hcmdpbi1sZWZ0Oi0xLjByZW07d2lkdGg6Y2FsYygxMDAlICsgMi4wcmVtKX0ucm93IC5jb2x1bW57bWFyZ2luLWJvdHRvbTppbmhlcml0O3BhZGRpbmc6MCAxLjByZW19fWF7Y29sb3I6IzliNGRjYTt0ZXh0LWRlY29yYXRpb246bm9uZX1hOmZvY3VzLGE6aG92ZXJ7Y29sb3I6IzYwNmM3Nn1kbCxvbCx1bHtsaXN0LXN0eWxlOm5vbmU7bWFyZ2luLXRvcDowO3BhZGRpbmctbGVmdDowfWRsIGRsLGRsIG9sLGRsIHVsLG9sIGRsLG9sIG9sLG9sIHVsLHVsIGRsLHVsIG9sLHVsIHVse2ZvbnQtc2l6ZTo5MCU7bWFyZ2luOjEuNXJlbSAwIDEuNXJlbSAzLjByZW19b2x7bGlzdC1zdHlsZTpkZWNpbWFsIGluc2lkZX11bHtsaXN0LXN0eWxlOmNpcmNsZSBpbnNpZGV9LmJ1dHRvbixidXR0b24sZGQsZHQsbGl7bWFyZ2luLWJvdHRvbToxLjByZW19ZmllbGRzZXQsaW5wdXQsc2VsZWN0LHRleHRhcmVhe21hcmdpbi1ib3R0b206MS41cmVtfWJsb2NrcXVvdGUsZGwsZmlndXJlLGZvcm0sb2wscCxwcmUsdGFibGUsdWx7bWFyZ2luLWJvdHRvbToyLjVyZW19dGFibGV7Ym9yZGVyLXNwYWNpbmc6MDt3aWR0aDoxMDAlfXRkLHRoe2JvcmRlci1ib3R0b206MC4xcmVtIHNvbGlkICNlMWUxZTE7cGFkZGluZzoxLjJyZW0gMS41cmVtO3RleHQtYWxpZ246bGVmdH10ZDpmaXJzdC1jaGlsZCx0aDpmaXJzdC1jaGlsZHtwYWRkaW5nLWxlZnQ6MH10ZDpsYXN0LWNoaWxkLHRoOmxhc3QtY2hpbGR7cGFkZGluZy1yaWdodDowfWIsc3Ryb25ne2ZvbnQtd2VpZ2h0OmJvbGR9cHttYXJnaW4tdG9wOjB9aDEsaDIsaDMsaDQsaDUsaDZ7Zm9udC13ZWlnaHQ6MzAwO2xldHRlci1zcGFjaW5nOi0uMXJlbTttYXJnaW4tYm90dG9tOjIuMHJlbTttYXJnaW4tdG9wOjB9aDF7Zm9udC1zaXplOjQuNnJlbTtsaW5lLWhlaWdodDoxLjJ9aDJ7Zm9udC1zaXplOjMuNnJlbTtsaW5lLWhlaWdodDoxLjI1fWgze2ZvbnQtc2l6ZToyLjhyZW07bGluZS1oZWlnaHQ6MS4zfWg0e2ZvbnQtc2l6ZToyLjJyZW07bGV0dGVyLXNwYWNpbmc6LS4wOHJlbTtsaW5lLWhlaWdodDoxLjM1fWg1e2ZvbnQtc2l6ZToxLjhyZW07bGV0dGVyLXNwYWNpbmc6LS4wNXJlbTtsaW5lLWhlaWdodDoxLjV9aDZ7Zm9udC1zaXplOjEuNnJlbTtsZXR0ZXItc3BhY2luZzowO2xpbmUtaGVpZ2h0OjEuNH1pbWd7bWF4LXdpZHRoOjEwMCV9LmNsZWFyZml4OmFmdGVye2NsZWFyOmJvdGg7Y29udGVudDonICc7ZGlzcGxheTp0YWJsZX0uZmxvYXQtbGVmdHtmbG9hdDpsZWZ0fS5mbG9hdC1yaWdodHtmbG9hdDpyaWdodH1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHl7YmFja2dyb3VuZC1jb2xvcjogIzQzM2QzYztcXHJcXG4gICAgfVxcclxcbi5idXR0b24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTk5ZTkzO1xcclxcbiAgICBib3JkZXItY29sb3I6ICNhOTllOTM7XFxyXFxuICAgIGNvbG9yOiNlOGQzYzcgIWltcG9ydGFudDtcXHJcXG4gICAgbWFyZ2luOi41ZW07XFxyXFxuICB9XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRsaWJyYXJ5IDogcmVxdWlyZSgnLi9rYW9tb2ppLmpzb24nKVxufVxuXG5cbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMSEuL21pbGxpZ3JhbS5taW4uY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCIndXNlIHN0cmljdCc7XHJcbmltcG9ydCAnLi4vbm9kZV9tb2R1bGVzL21pbGxpZ3JhbS9kaXN0L21pbGxpZ3JhbS5taW4uY3NzJztcclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBrYW8gZnJvbSAna2FvbW9qaWxpYic7XHJcbmltcG9ydCBrYW9jc3YgZnJvbSAnLi4vbm9kZV9tb2R1bGVzL2thby5tb2ppL2RhdGEva2FvbW9qaS5qc29uJztcclxuXHJcbmNvbnN0IEhJU1RPUllfU0laRSA9IDUwO1xyXG5cclxuY29uc3Qgb25DbGljayA9IGUgPT4ge1xyXG4gIGNvcHkoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcclxuICBoaXN0b3J5ID0gYWRkSGlzdG9yeShoaXN0b3J5LCBlLmN1cnJlbnRUYXJnZXQudmFsdWUpO1xyXG4gIGRyYXdIaXN0b3J5KGhpc3RvcnkpO1xyXG4gIHNhdmVIaXN0b3J5KGhpc3RvcnkpO1xyXG59XHJcblxyXG5jb25zdCBhZGRIaXN0b3J5ID0gKGhpc3RvcnksIGljb24pID0+IHtcclxuICBsZXQgbmV3SGlzdG9yeSA9IGhpc3RvcnkuZmlsdGVyKHYgPT4gdiAhPSBpY29uKTtcclxuICBuZXdIaXN0b3J5LnVuc2hpZnQoaWNvbik7XHJcbiAgbmV3SGlzdG9yeSA9IG5ld0hpc3Rvcnkuc2xpY2UoMCwgSElTVE9SWV9TSVpFKTtcclxuICByZXR1cm4gbmV3SGlzdG9yeTtcclxufTtcclxuXHJcbmNvbnN0IGNvcHkgPSAoc3RyKSA9PiB7XHJcbiAgaWYgKCFzdHIgfHwgdHlwZW9mIChzdHIpICE9IFwic3RyaW5nXCIpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgY29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gIHRleHRhcmVhLnN0eWxlID0gJ3Bvc2l0aW9uOmZpeGVkO3JpZ2h0OjEwMHZ3O2ZvbnQtc2l6ZToxNnB4Oyc7XHJcbiAgdGV4dGFyZWEucmVhZE9ubHkgPSB0cnVlO1xyXG4gIHRleHRhcmVhLnZhbHVlID0gc3RyO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGV4dGFyZWEpO1xyXG4gIHRleHRhcmVhLnNlbGVjdCgpO1xyXG4gIHZhciByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XHJcbiAgcmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKHRleHRhcmVhKTtcclxuICB2YXIgc2VsID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gIHNlbC5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICBzZWwuYWRkUmFuZ2UocmFuZ2UpO1xyXG4gIHRleHRhcmVhLnNldFNlbGVjdGlvblJhbmdlKDAsIDk5OTk5OSk7XHJcbiAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpO1xyXG4gIHRleHRhcmVhLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGV4dGFyZWEpO1xyXG59XHJcblxyXG5jb25zdCBidXR0b24gPSAoaWNvbikgPT4ge1xyXG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9IGljb247XHJcbiAgYnV0dG9uLnZhbHVlID0gaWNvbjtcclxuICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJywgJ2J1dHRvbi1vdXRsaW5lJyk7XHJcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25DbGljaywgZmFsc2UpO1xyXG4gIHJldHVybiBidXR0b247XHJcbn07XHJcblxyXG5sZXQgaGlzdG9yeSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdoaXN0b3J5Jyk7XHJcbmlmIChoaXN0b3J5ICE9IG51bGwpIHtcclxuICBoaXN0b3J5ID0gSlNPTi5wYXJzZShoaXN0b3J5KTtcclxufSBlbHNlIHtcclxuICBoaXN0b3J5ID0gW107XHJcbn1cclxuY29uc3Qgc2F2ZUhpc3RvcnkgPSAoaGlzdG9yeSkgPT4ge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdoaXN0b3J5JywgSlNPTi5zdHJpbmdpZnkoaGlzdG9yeSkpO1xyXG59O1xyXG5cclxuY29uc3QgaGlzdG9yeUVsbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoaXN0b3J5Jyk7XHJcbmNvbnN0IGRyYXdIaXN0b3J5ID0gKCkgPT4ge1xyXG4gIHdoaWxlIChoaXN0b3J5RWxtLmZpcnN0Q2hpbGQpIHtcclxuICAgIGhpc3RvcnlFbG0ucmVtb3ZlQ2hpbGQoaGlzdG9yeUVsbS5maXJzdENoaWxkKTtcclxuICB9XHJcbiAgaGlzdG9yeS5mb3JFYWNoKGggPT4ge1xyXG4gICAgaGlzdG9yeUVsbS5hcHBlbmRDaGlsZChidXR0b24oaCkpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZHJhd0hpc3RvcnkoaGlzdG9yeSk7XHJcblxyXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4nKTtcclxuT2JqZWN0LnZhbHVlcyhrYW9jc3YpLmZvckVhY2goayA9PiB7XHJcbiAgay5mb3JFYWNoKGkgPT4ge1xyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChidXR0b24oaSkpO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcbk9iamVjdC5lbnRyaWVzKGthby5saWJyYXJ5KS5mb3JFYWNoKChbdGV4dCwgY29udGVudF0pID0+IHtcclxuICBtYWluLmFwcGVuZENoaWxkKGJ1dHRvbihjb250ZW50Lmljb24pKTtcclxufSk7XHJcblxyXG5cclxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTEhLi9zdHlsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=