"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r){if(Object.prototype.hasOwnProperty.call(r,n)){e[n]=r[n]}}}return e};var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}return function(t,r,n){if(r)e(t.prototype,r);if(n)e(t,n);return t}}();var _MapElementType2=require("$:/plugins/felixhayashi/tiddlymap/js/MapElementType");var _MapElementType3=_interopRequireDefault(_MapElementType2);var _utils=require("$:/plugins/felixhayashi/tiddlymap/js/utils");var _utils2=_interopRequireDefault(_utils);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function _possibleConstructorReturn(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function _inherits(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}/* @preserve TW-Guard */
/*\

title: $:/plugins/felixhayashi/tiddlymap/js/NodeType
type: application/javascript
module-type: library

@preserve

\*/
/* @preserve TW-Guard */var NodeType=function(e){_inherits(t,e);function t(e,r){_classCallCheck(this,t);e=typeof e==="string"?_utils2.default.getWithoutPrefix(e,$tm.path.nodeTypes+"/"):"tmap:unknown";var n=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,$tm.path.nodeTypes,t.fieldMeta,r));Object.freeze(n);return n}_createClass(t,[{key:"getInheritors",value:function e(t){return this.scope?_utils2.default.getMatches(this.scope,t||$tw.wiki.allTitles()):[]}}]);return t}(_MapElementType3.default);NodeType.getInstance=function(e){return e instanceof NodeType?e:new NodeType(e)};NodeType.fieldMeta=_extends({},_MapElementType3.default.fieldMeta,{view:{},priority:{parse:function e(t){return isNaN(t)?1:parseInt(t)},stringify:function e(t){return _utils2.default.isInteger(t)?t.toString():"1"}},scope:{stringify:_utils2.default.getWithoutNewLines},"fa-icon":{},"tw-icon":{}});exports.default=NodeType;