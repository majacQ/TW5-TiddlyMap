"use strict";var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||false;i.configurable=true;if("value"in i)i.writable=true;Object.defineProperty(e,i.key,i)}}return function(t,r,i){if(r)e(t.prototype,r);if(i)e(t,i);return t}}();var _widget=require("$:/core/modules/widgets/widget.js");var _utils=require("$:/plugins/felixhayashi/tiddlymap/js/utils");var _utils2=_interopRequireDefault(_utils);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function _possibleConstructorReturn(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function _inherits(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}/* @preserve TW-Guard */
/*\

title: $:/plugins/felixhayashi/tiddlymap/js/widget/EdgeListWidget
type: application/javascript
module-type: widget

@preserve

\*/
/* @preserve TW-Guard */var EdgeListWidget=function(e){_inherits(t,e);function t(e,r){_classCallCheck(this,t);return _possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r))}_createClass(t,[{key:"render",value:function e(t,r){this.parentDomNode=t;this.computeAttributes();this.execute();this.renderChildren(t,r)}},{key:"execute",value:function e(){var t=[this.getVariable("currentTiddler")];var r=this.getAttribute("filter","");var i=this.getAttribute("direction","both");var s=$tm.indeces.allETy;var n=_utils2.default.getEdgeTypeMatches(r,s);var u={typeWL:_utils2.default.getLookupTable(n),direction:i};var o=$tm.adapter.getNeighbours(t,u),a=o.nodes,l=o.edges;var f=[];for(var c in l){var h=l[c];var p=a[h.to]||a[h.from];if(!p){continue}f.push({type:"tmap-edgelistitem",edge:h,typeWL:u.typeWL,neighbour:p,children:this.parseTreeNode.children})}if(!f.length){this.wasEmpty=true;f=this.getEmptyMessage()}else if(this.wasEmpty){this.removeChildDomNodes()}this.makeChildWidgets(f)}},{key:"getEmptyMessage",value:function e(){var t=this.wiki.parseText("text/vnd.tiddlywiki",this.getAttribute("emptyMessage",""),{parseAsInline:true});return t?t.tree:[]}},{key:"refresh",value:function e(t){var r=this.computeAttributes();if(_utils2.default.hasElements(r)){this.refreshSelf();return true}for(var i in t){if(!_utils2.default.isSystemOrDraft(i)){this.refreshSelf();return true}}return this.refreshChildren(t)}}]);return t}(_widget.widget);exports["tmap-connections"]=EdgeListWidget;