(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ReduxSwaggerClient"] = factory();
	else
		root["ReduxSwaggerClient"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(108);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var YAMLException = __webpack_require__(29);

	var TYPE_CONSTRUCTOR_OPTIONS = [
	  'kind',
	  'resolve',
	  'construct',
	  'instanceOf',
	  'predicate',
	  'represent',
	  'defaultStyle',
	  'styleAliases'
	];

	var YAML_NODE_KINDS = [
	  'scalar',
	  'sequence',
	  'mapping'
	];

	function compileStyleAliases(map) {
	  var result = {};

	  if (map !== null) {
	    Object.keys(map).forEach(function (style) {
	      map[style].forEach(function (alias) {
	        result[String(alias)] = style;
	      });
	    });
	  }

	  return result;
	}

	function Type(tag, options) {
	  options = options || {};

	  Object.keys(options).forEach(function (name) {
	    if (TYPE_CONSTRUCTOR_OPTIONS.indexOf(name) === -1) {
	      throw new YAMLException('Unknown option "' + name + '" is met in definition of "' + tag + '" YAML type.');
	    }
	  });

	  // TODO: Add tag format check.
	  this.tag          = tag;
	  this.kind         = options['kind']         || null;
	  this.resolve      = options['resolve']      || function () { return true; };
	  this.construct    = options['construct']    || function (data) { return data; };
	  this.instanceOf   = options['instanceOf']   || null;
	  this.predicate    = options['predicate']    || null;
	  this.represent    = options['represent']    || null;
	  this.defaultStyle = options['defaultStyle'] || null;
	  this.styleAliases = compileStyleAliases(options['styleAliases'] || null);

	  if (YAML_NODE_KINDS.indexOf(this.kind) === -1) {
	    throw new YAMLException('Unknown kind "' + this.kind + '" is specified for "' + tag + '" YAML type.');
	  }
	}

	module.exports = Type;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(59)('wks')
	  , uid        = __webpack_require__(35)
	  , Symbol     = __webpack_require__(4).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(7)
	  , IE8_DOM_DEFINE = __webpack_require__(81)
	  , toPrimitive    = __webpack_require__(61)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(8) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(245);

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	module.exports = root;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(10);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(14)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(4)
	  , core      = __webpack_require__(2)
	  , ctx       = __webpack_require__(17)
	  , hide      = __webpack_require__(12)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(5)
	  , createDesc = __webpack_require__(24);
	module.exports = __webpack_require__(8) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	module.exports = isArray;


/***/ }),
/* 14 */
/***/ (function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(53)
	  , defined = __webpack_require__(49);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsNative = __webpack_require__(224),
	    getValue = __webpack_require__(248);

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	module.exports = getNative;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(45);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	module.exports = {};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(89)
	  , enumBugKeys = __webpack_require__(51);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	'use strict';


	function isNothing(subject) {
	  return (typeof subject === 'undefined') || (subject === null);
	}


	function isObject(subject) {
	  return (typeof subject === 'object') && (subject !== null);
	}


	function toArray(sequence) {
	  if (Array.isArray(sequence)) return sequence;
	  else if (isNothing(sequence)) return [];

	  return [ sequence ];
	}


	function extend(target, source) {
	  var index, length, key, sourceKeys;

	  if (source) {
	    sourceKeys = Object.keys(source);

	    for (index = 0, length = sourceKeys.length; index < length; index += 1) {
	      key = sourceKeys[index];
	      target[key] = source[key];
	    }
	  }

	  return target;
	}


	function repeat(string, count) {
	  var result = '', cycle;

	  for (cycle = 0; cycle < count; cycle += 1) {
	    result += string;
	  }

	  return result;
	}


	function isNegativeZero(number) {
	  return (number === 0) && (Number.NEGATIVE_INFINITY === 1 / number);
	}


	module.exports.isNothing      = isNothing;
	module.exports.isObject       = isObject;
	module.exports.toArray        = toArray;
	module.exports.repeat         = repeat;
	module.exports.isNegativeZero = isNegativeZero;
	module.exports.extend         = extend;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	/*eslint-disable max-len*/

	var common        = __webpack_require__(20);
	var YAMLException = __webpack_require__(29);
	var Type          = __webpack_require__(1);


	function compileList(schema, name, result) {
	  var exclude = [];

	  schema.include.forEach(function (includedSchema) {
	    result = compileList(includedSchema, name, result);
	  });

	  schema[name].forEach(function (currentType) {
	    result.forEach(function (previousType, previousIndex) {
	      if (previousType.tag === currentType.tag && previousType.kind === currentType.kind) {
	        exclude.push(previousIndex);
	      }
	    });

	    result.push(currentType);
	  });

	  return result.filter(function (type, index) {
	    return exclude.indexOf(index) === -1;
	  });
	}


	function compileMap(/* lists... */) {
	  var result = {
	        scalar: {},
	        sequence: {},
	        mapping: {},
	        fallback: {}
	      }, index, length;

	  function collectType(type) {
	    result[type.kind][type.tag] = result['fallback'][type.tag] = type;
	  }

	  for (index = 0, length = arguments.length; index < length; index += 1) {
	    arguments[index].forEach(collectType);
	  }
	  return result;
	}


	function Schema(definition) {
	  this.include  = definition.include  || [];
	  this.implicit = definition.implicit || [];
	  this.explicit = definition.explicit || [];

	  this.implicit.forEach(function (type) {
	    if (type.loadKind && type.loadKind !== 'scalar') {
	      throw new YAMLException('There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.');
	    }
	  });

	  this.compiledImplicit = compileList(this, 'implicit', []);
	  this.compiledExplicit = compileList(this, 'explicit', []);
	  this.compiledTypeMap  = compileMap(this.compiledImplicit, this.compiledExplicit);
	}


	Schema.DEFAULT = null;


	Schema.create = function createSchema() {
	  var schemas, types;

	  switch (arguments.length) {
	    case 1:
	      schemas = Schema.DEFAULT;
	      types = arguments[0];
	      break;

	    case 2:
	      schemas = arguments[0];
	      types = arguments[1];
	      break;

	    default:
	      throw new YAMLException('Wrong number of arguments for Schema.create function');
	  }

	  schemas = common.toArray(schemas);
	  types = common.toArray(types);

	  if (!schemas.every(function (schema) { return schema instanceof Schema; })) {
	    throw new YAMLException('Specified list of super schemas (or a single Schema object) contains a non-Schema object.');
	  }

	  if (!types.every(function (type) { return type instanceof Type; })) {
	    throw new YAMLException('Specified list of YAML types (or a single Type object) contains a non-Type object.');
	  }

	  return new Schema({
	    include: schemas,
	    explicit: types
	  });
	};


	module.exports = Schema;


/***/ }),
/* 22 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	module.exports = isObject;


/***/ }),
/* 23 */
/***/ (function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	var def = __webpack_require__(5).f
	  , has = __webpack_require__(11)
	  , TAG = __webpack_require__(3)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(49);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(161)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(85)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(166);
	var global        = __webpack_require__(4)
	  , hide          = __webpack_require__(12)
	  , Iterators     = __webpack_require__(18)
	  , TO_STRING_TAG = __webpack_require__(3)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	// YAML error class. http://stackoverflow.com/questions/8458984
	//
	'use strict';

	function YAMLException(reason, mark) {
	  // Super constructor
	  Error.call(this);

	  // Include stack trace in error object
	  if (Error.captureStackTrace) {
	    // Chrome and NodeJS
	    Error.captureStackTrace(this, this.constructor);
	  } else {
	    // FF, IE 10+ and Safari 6+. Fallback for others
	    this.stack = (new Error()).stack || '';
	  }

	  this.name = 'YAMLException';
	  this.reason = reason;
	  this.mark = mark;
	  this.message = (this.reason || '(unknown reason)') + (this.mark ? ' ' + this.mark.toString() : '');
	}


	// Inherit from Error
	YAMLException.prototype = Object.create(Error.prototype);
	YAMLException.prototype.constructor = YAMLException;


	YAMLException.prototype.toString = function toString(compact) {
	  var result = this.name + ': ';

	  result += this.reason || '(unknown reason)';

	  if (!compact && this.mark) {
	    result += ' ' + this.mark.toString();
	  }

	  return result;
	};


	module.exports = YAMLException;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	// JS-YAML's default schema for `safeLoad` function.
	// It is not described in the YAML specification.
	//
	// This schema is based on standard YAML's Core schema and includes most of
	// extra types described at YAML tag repository. (http://yaml.org/type/)


	'use strict';


	var Schema = __webpack_require__(21);


	module.exports = new Schema({
	  include: [
	    __webpack_require__(91)
	  ],
	  implicit: [
	    __webpack_require__(203),
	    __webpack_require__(196)
	  ],
	  explicit: [
	    __webpack_require__(188),
	    __webpack_require__(198),
	    __webpack_require__(199),
	    __webpack_require__(201)
	  ]
	});


/***/ }),
/* 31 */
/***/ (function(module, exports) {

	module.exports = true;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(35)('meta')
	  , isObject = __webpack_require__(10)
	  , has      = __webpack_require__(11)
	  , setDesc  = __webpack_require__(5).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(14)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ }),
/* 33 */
/***/ (function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(60)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	// JS-YAML's default schema for `load` function.
	// It is not described in the YAML specification.
	//
	// This schema is based on JS-YAML's default safe schema and includes
	// JavaScript-specific types: !!js/undefined, !!js/regexp and !!js/function.
	//
	// Also this schema is used as default base schema at `Schema.create` function.


	'use strict';


	var Schema = __webpack_require__(21);


	module.exports = Schema.DEFAULT = new Schema({
	  include: [
	    __webpack_require__(30)
	  ],
	  explicit: [
	    __webpack_require__(194),
	    __webpack_require__(193),
	    __webpack_require__(192)
	  ]
	});


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	var listCacheClear = __webpack_require__(262),
	    listCacheDelete = __webpack_require__(263),
	    listCacheGet = __webpack_require__(264),
	    listCacheHas = __webpack_require__(265),
	    listCacheSet = __webpack_require__(266);

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	module.exports = ListCache;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(75);

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	module.exports = assocIndexOf;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	var isKeyable = __webpack_require__(260);

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	module.exports = getMapData;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(16);

	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');

	module.exports = nativeCreate;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(105),
	    isLength = __webpack_require__(291);

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	module.exports = isArrayLike;


/***/ }),
/* 42 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(215),
	    baseKeys = __webpack_require__(225),
	    isArrayLike = __webpack_require__(41);

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}

	module.exports = keys;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	/* eslint-disable no-proto */

	'use strict'

	var base64 = __webpack_require__(127)
	var ieee754 = __webpack_require__(179)
	var isArray = __webpack_require__(180)

	exports.Buffer = Buffer
	exports.SlowBuffer = SlowBuffer
	exports.INSPECT_MAX_BYTES = 50

	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Due to various browser bugs, sometimes the Object implementation will be used even
	 * when the browser supports typed arrays.
	 *
	 * Note:
	 *
	 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *     incorrect length in some situations.

	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	 * get the Object implementation, which is slower but behaves correctly.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
	  ? global.TYPED_ARRAY_SUPPORT
	  : typedArraySupport()

	/*
	 * Export kMaxLength after typed array support is determined.
	 */
	exports.kMaxLength = kMaxLength()

	function typedArraySupport () {
	  try {
	    var arr = new Uint8Array(1)
	    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
	    return arr.foo() === 42 && // typed array instances can be augmented
	        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
	        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
	  } catch (e) {
	    return false
	  }
	}

	function kMaxLength () {
	  return Buffer.TYPED_ARRAY_SUPPORT
	    ? 0x7fffffff
	    : 0x3fffffff
	}

	function createBuffer (that, length) {
	  if (kMaxLength() < length) {
	    throw new RangeError('Invalid typed array length')
	  }
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = new Uint8Array(length)
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    if (that === null) {
	      that = new Buffer(length)
	    }
	    that.length = length
	  }

	  return that
	}

	/**
	 * The Buffer constructor returns instances of `Uint8Array` that have their
	 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
	 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
	 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
	 * returns a single octet.
	 *
	 * The `Uint8Array` prototype remains unmodified.
	 */

	function Buffer (arg, encodingOrOffset, length) {
	  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
	    return new Buffer(arg, encodingOrOffset, length)
	  }

	  // Common case.
	  if (typeof arg === 'number') {
	    if (typeof encodingOrOffset === 'string') {
	      throw new Error(
	        'If encoding is specified then the first argument must be a string'
	      )
	    }
	    return allocUnsafe(this, arg)
	  }
	  return from(this, arg, encodingOrOffset, length)
	}

	Buffer.poolSize = 8192 // not used by this implementation

	// TODO: Legacy, not needed anymore. Remove in next major version.
	Buffer._augment = function (arr) {
	  arr.__proto__ = Buffer.prototype
	  return arr
	}

	function from (that, value, encodingOrOffset, length) {
	  if (typeof value === 'number') {
	    throw new TypeError('"value" argument must not be a number')
	  }

	  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
	    return fromArrayBuffer(that, value, encodingOrOffset, length)
	  }

	  if (typeof value === 'string') {
	    return fromString(that, value, encodingOrOffset)
	  }

	  return fromObject(that, value)
	}

	/**
	 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
	 * if value is a number.
	 * Buffer.from(str[, encoding])
	 * Buffer.from(array)
	 * Buffer.from(buffer)
	 * Buffer.from(arrayBuffer[, byteOffset[, length]])
	 **/
	Buffer.from = function (value, encodingOrOffset, length) {
	  return from(null, value, encodingOrOffset, length)
	}

	if (Buffer.TYPED_ARRAY_SUPPORT) {
	  Buffer.prototype.__proto__ = Uint8Array.prototype
	  Buffer.__proto__ = Uint8Array
	  if (typeof Symbol !== 'undefined' && Symbol.species &&
	      Buffer[Symbol.species] === Buffer) {
	    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
	    Object.defineProperty(Buffer, Symbol.species, {
	      value: null,
	      configurable: true
	    })
	  }
	}

	function assertSize (size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('"size" argument must be a number')
	  } else if (size < 0) {
	    throw new RangeError('"size" argument must not be negative')
	  }
	}

	function alloc (that, size, fill, encoding) {
	  assertSize(size)
	  if (size <= 0) {
	    return createBuffer(that, size)
	  }
	  if (fill !== undefined) {
	    // Only pay attention to encoding if it's a string. This
	    // prevents accidentally sending in a number that would
	    // be interpretted as a start offset.
	    return typeof encoding === 'string'
	      ? createBuffer(that, size).fill(fill, encoding)
	      : createBuffer(that, size).fill(fill)
	  }
	  return createBuffer(that, size)
	}

	/**
	 * Creates a new filled Buffer instance.
	 * alloc(size[, fill[, encoding]])
	 **/
	Buffer.alloc = function (size, fill, encoding) {
	  return alloc(null, size, fill, encoding)
	}

	function allocUnsafe (that, size) {
	  assertSize(size)
	  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < size; ++i) {
	      that[i] = 0
	    }
	  }
	  return that
	}

	/**
	 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
	 * */
	Buffer.allocUnsafe = function (size) {
	  return allocUnsafe(null, size)
	}
	/**
	 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
	 */
	Buffer.allocUnsafeSlow = function (size) {
	  return allocUnsafe(null, size)
	}

	function fromString (that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') {
	    encoding = 'utf8'
	  }

	  if (!Buffer.isEncoding(encoding)) {
	    throw new TypeError('"encoding" must be a valid string encoding')
	  }

	  var length = byteLength(string, encoding) | 0
	  that = createBuffer(that, length)

	  var actual = that.write(string, encoding)

	  if (actual !== length) {
	    // Writing a hex string, for example, that contains invalid characters will
	    // cause everything after the first invalid character to be ignored. (e.g.
	    // 'abxxcd' will be treated as 'ab')
	    that = that.slice(0, actual)
	  }

	  return that
	}

	function fromArrayLike (that, array) {
	  var length = array.length < 0 ? 0 : checked(array.length) | 0
	  that = createBuffer(that, length)
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}

	function fromArrayBuffer (that, array, byteOffset, length) {
	  array.byteLength // this throws if `array` is not a valid ArrayBuffer

	  if (byteOffset < 0 || array.byteLength < byteOffset) {
	    throw new RangeError('\'offset\' is out of bounds')
	  }

	  if (array.byteLength < byteOffset + (length || 0)) {
	    throw new RangeError('\'length\' is out of bounds')
	  }

	  if (byteOffset === undefined && length === undefined) {
	    array = new Uint8Array(array)
	  } else if (length === undefined) {
	    array = new Uint8Array(array, byteOffset)
	  } else {
	    array = new Uint8Array(array, byteOffset, length)
	  }

	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = array
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that = fromArrayLike(that, array)
	  }
	  return that
	}

	function fromObject (that, obj) {
	  if (Buffer.isBuffer(obj)) {
	    var len = checked(obj.length) | 0
	    that = createBuffer(that, len)

	    if (that.length === 0) {
	      return that
	    }

	    obj.copy(that, 0, 0, len)
	    return that
	  }

	  if (obj) {
	    if ((typeof ArrayBuffer !== 'undefined' &&
	        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
	      if (typeof obj.length !== 'number' || isnan(obj.length)) {
	        return createBuffer(that, 0)
	      }
	      return fromArrayLike(that, obj)
	    }

	    if (obj.type === 'Buffer' && isArray(obj.data)) {
	      return fromArrayLike(that, obj.data)
	    }
	  }

	  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
	}

	function checked (length) {
	  // Note: cannot use `length < kMaxLength()` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= kMaxLength()) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
	  }
	  return length | 0
	}

	function SlowBuffer (length) {
	  if (+length != length) { // eslint-disable-line eqeqeq
	    length = 0
	  }
	  return Buffer.alloc(+length)
	}

	Buffer.isBuffer = function isBuffer (b) {
	  return !!(b != null && b._isBuffer)
	}

	Buffer.compare = function compare (a, b) {
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers')
	  }

	  if (a === b) return 0

	  var x = a.length
	  var y = b.length

	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i]
	      y = b[i]
	      break
	    }
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}

	Buffer.isEncoding = function isEncoding (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'latin1':
	    case 'binary':
	    case 'base64':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	}

	Buffer.concat = function concat (list, length) {
	  if (!isArray(list)) {
	    throw new TypeError('"list" argument must be an Array of Buffers')
	  }

	  if (list.length === 0) {
	    return Buffer.alloc(0)
	  }

	  var i
	  if (length === undefined) {
	    length = 0
	    for (i = 0; i < list.length; ++i) {
	      length += list[i].length
	    }
	  }

	  var buffer = Buffer.allocUnsafe(length)
	  var pos = 0
	  for (i = 0; i < list.length; ++i) {
	    var buf = list[i]
	    if (!Buffer.isBuffer(buf)) {
	      throw new TypeError('"list" argument must be an Array of Buffers')
	    }
	    buf.copy(buffer, pos)
	    pos += buf.length
	  }
	  return buffer
	}

	function byteLength (string, encoding) {
	  if (Buffer.isBuffer(string)) {
	    return string.length
	  }
	  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
	      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
	    return string.byteLength
	  }
	  if (typeof string !== 'string') {
	    string = '' + string
	  }

	  var len = string.length
	  if (len === 0) return 0

	  // Use a for loop to avoid recursion
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'latin1':
	      case 'binary':
	        return len
	      case 'utf8':
	      case 'utf-8':
	      case undefined:
	        return utf8ToBytes(string).length
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2
	      case 'hex':
	        return len >>> 1
	      case 'base64':
	        return base64ToBytes(string).length
	      default:
	        if (loweredCase) return utf8ToBytes(string).length // assume utf8
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	Buffer.byteLength = byteLength

	function slowToString (encoding, start, end) {
	  var loweredCase = false

	  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
	  // property of a typed array.

	  // This behaves neither like String nor Uint8Array in that we set start/end
	  // to their upper/lower bounds if the value passed is out of range.
	  // undefined is handled specially as per ECMA-262 6th Edition,
	  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
	  if (start === undefined || start < 0) {
	    start = 0
	  }
	  // Return early if start > this.length. Done here to prevent potential uint32
	  // coercion fail below.
	  if (start > this.length) {
	    return ''
	  }

	  if (end === undefined || end > this.length) {
	    end = this.length
	  }

	  if (end <= 0) {
	    return ''
	  }

	  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
	  end >>>= 0
	  start >>>= 0

	  if (end <= start) {
	    return ''
	  }

	  if (!encoding) encoding = 'utf8'

	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)

	      case 'ascii':
	        return asciiSlice(this, start, end)

	      case 'latin1':
	      case 'binary':
	        return latin1Slice(this, start, end)

	      case 'base64':
	        return base64Slice(this, start, end)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase()
	        loweredCase = true
	    }
	  }
	}

	// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
	// Buffer instances.
	Buffer.prototype._isBuffer = true

	function swap (b, n, m) {
	  var i = b[n]
	  b[n] = b[m]
	  b[m] = i
	}

	Buffer.prototype.swap16 = function swap16 () {
	  var len = this.length
	  if (len % 2 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 16-bits')
	  }
	  for (var i = 0; i < len; i += 2) {
	    swap(this, i, i + 1)
	  }
	  return this
	}

	Buffer.prototype.swap32 = function swap32 () {
	  var len = this.length
	  if (len % 4 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 32-bits')
	  }
	  for (var i = 0; i < len; i += 4) {
	    swap(this, i, i + 3)
	    swap(this, i + 1, i + 2)
	  }
	  return this
	}

	Buffer.prototype.swap64 = function swap64 () {
	  var len = this.length
	  if (len % 8 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 64-bits')
	  }
	  for (var i = 0; i < len; i += 8) {
	    swap(this, i, i + 7)
	    swap(this, i + 1, i + 6)
	    swap(this, i + 2, i + 5)
	    swap(this, i + 3, i + 4)
	  }
	  return this
	}

	Buffer.prototype.toString = function toString () {
	  var length = this.length | 0
	  if (length === 0) return ''
	  if (arguments.length === 0) return utf8Slice(this, 0, length)
	  return slowToString.apply(this, arguments)
	}

	Buffer.prototype.equals = function equals (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return true
	  return Buffer.compare(this, b) === 0
	}

	Buffer.prototype.inspect = function inspect () {
	  var str = ''
	  var max = exports.INSPECT_MAX_BYTES
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
	    if (this.length > max) str += ' ... '
	  }
	  return '<Buffer ' + str + '>'
	}

	Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
	  if (!Buffer.isBuffer(target)) {
	    throw new TypeError('Argument must be a Buffer')
	  }

	  if (start === undefined) {
	    start = 0
	  }
	  if (end === undefined) {
	    end = target ? target.length : 0
	  }
	  if (thisStart === undefined) {
	    thisStart = 0
	  }
	  if (thisEnd === undefined) {
	    thisEnd = this.length
	  }

	  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
	    throw new RangeError('out of range index')
	  }

	  if (thisStart >= thisEnd && start >= end) {
	    return 0
	  }
	  if (thisStart >= thisEnd) {
	    return -1
	  }
	  if (start >= end) {
	    return 1
	  }

	  start >>>= 0
	  end >>>= 0
	  thisStart >>>= 0
	  thisEnd >>>= 0

	  if (this === target) return 0

	  var x = thisEnd - thisStart
	  var y = end - start
	  var len = Math.min(x, y)

	  var thisCopy = this.slice(thisStart, thisEnd)
	  var targetCopy = target.slice(start, end)

	  for (var i = 0; i < len; ++i) {
	    if (thisCopy[i] !== targetCopy[i]) {
	      x = thisCopy[i]
	      y = targetCopy[i]
	      break
	    }
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}

	// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
	// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
	//
	// Arguments:
	// - buffer - a Buffer to search
	// - val - a string, Buffer, or number
	// - byteOffset - an index into `buffer`; will be clamped to an int32
	// - encoding - an optional encoding, relevant is val is a string
	// - dir - true for indexOf, false for lastIndexOf
	function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
	  // Empty buffer means no match
	  if (buffer.length === 0) return -1

	  // Normalize byteOffset
	  if (typeof byteOffset === 'string') {
	    encoding = byteOffset
	    byteOffset = 0
	  } else if (byteOffset > 0x7fffffff) {
	    byteOffset = 0x7fffffff
	  } else if (byteOffset < -0x80000000) {
	    byteOffset = -0x80000000
	  }
	  byteOffset = +byteOffset  // Coerce to Number.
	  if (isNaN(byteOffset)) {
	    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
	    byteOffset = dir ? 0 : (buffer.length - 1)
	  }

	  // Normalize byteOffset: negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
	  if (byteOffset >= buffer.length) {
	    if (dir) return -1
	    else byteOffset = buffer.length - 1
	  } else if (byteOffset < 0) {
	    if (dir) byteOffset = 0
	    else return -1
	  }

	  // Normalize val
	  if (typeof val === 'string') {
	    val = Buffer.from(val, encoding)
	  }

	  // Finally, search either indexOf (if dir is true) or lastIndexOf
	  if (Buffer.isBuffer(val)) {
	    // Special case: looking for empty string/buffer always fails
	    if (val.length === 0) {
	      return -1
	    }
	    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
	  } else if (typeof val === 'number') {
	    val = val & 0xFF // Search for a byte value [0-255]
	    if (Buffer.TYPED_ARRAY_SUPPORT &&
	        typeof Uint8Array.prototype.indexOf === 'function') {
	      if (dir) {
	        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
	      } else {
	        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
	      }
	    }
	    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
	  }

	  throw new TypeError('val must be string, number or Buffer')
	}

	function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
	  var indexSize = 1
	  var arrLength = arr.length
	  var valLength = val.length

	  if (encoding !== undefined) {
	    encoding = String(encoding).toLowerCase()
	    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
	        encoding === 'utf16le' || encoding === 'utf-16le') {
	      if (arr.length < 2 || val.length < 2) {
	        return -1
	      }
	      indexSize = 2
	      arrLength /= 2
	      valLength /= 2
	      byteOffset /= 2
	    }
	  }

	  function read (buf, i) {
	    if (indexSize === 1) {
	      return buf[i]
	    } else {
	      return buf.readUInt16BE(i * indexSize)
	    }
	  }

	  var i
	  if (dir) {
	    var foundIndex = -1
	    for (i = byteOffset; i < arrLength; i++) {
	      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
	        if (foundIndex === -1) foundIndex = i
	        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
	      } else {
	        if (foundIndex !== -1) i -= i - foundIndex
	        foundIndex = -1
	      }
	    }
	  } else {
	    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
	    for (i = byteOffset; i >= 0; i--) {
	      var found = true
	      for (var j = 0; j < valLength; j++) {
	        if (read(arr, i + j) !== read(val, j)) {
	          found = false
	          break
	        }
	      }
	      if (found) return i
	    }
	  }

	  return -1
	}

	Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
	  return this.indexOf(val, byteOffset, encoding) !== -1
	}

	Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
	}

	Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
	}

	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0
	  var remaining = buf.length - offset
	  if (!length) {
	    length = remaining
	  } else {
	    length = Number(length)
	    if (length > remaining) {
	      length = remaining
	    }
	  }

	  // must be an even number of digits
	  var strLen = string.length
	  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

	  if (length > strLen / 2) {
	    length = strLen / 2
	  }
	  for (var i = 0; i < length; ++i) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16)
	    if (isNaN(parsed)) return i
	    buf[offset + i] = parsed
	  }
	  return i
	}

	function utf8Write (buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
	}

	function asciiWrite (buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length)
	}

	function latin1Write (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}

	function base64Write (buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length)
	}

	function ucs2Write (buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
	}

	Buffer.prototype.write = function write (string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8'
	    length = this.length
	    offset = 0
	  // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset
	    length = this.length
	    offset = 0
	  // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset | 0
	    if (isFinite(length)) {
	      length = length | 0
	      if (encoding === undefined) encoding = 'utf8'
	    } else {
	      encoding = length
	      length = undefined
	    }
	  // legacy write(string, encoding, offset, length) - remove in v0.13
	  } else {
	    throw new Error(
	      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
	    )
	  }

	  var remaining = this.length - offset
	  if (length === undefined || length > remaining) length = remaining

	  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
	    throw new RangeError('Attempt to write outside buffer bounds')
	  }

	  if (!encoding) encoding = 'utf8'

	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length)

	      case 'ascii':
	        return asciiWrite(this, string, offset, length)

	      case 'latin1':
	      case 'binary':
	        return latin1Write(this, string, offset, length)

	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}

	Buffer.prototype.toJSON = function toJSON () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	}

	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return base64.fromByteArray(buf)
	  } else {
	    return base64.fromByteArray(buf.slice(start, end))
	  }
	}

	function utf8Slice (buf, start, end) {
	  end = Math.min(buf.length, end)
	  var res = []

	  var i = start
	  while (i < end) {
	    var firstByte = buf[i]
	    var codePoint = null
	    var bytesPerSequence = (firstByte > 0xEF) ? 4
	      : (firstByte > 0xDF) ? 3
	      : (firstByte > 0xBF) ? 2
	      : 1

	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint

	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte
	          }
	          break
	        case 2:
	          secondByte = buf[i + 1]
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 3:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 4:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          fourthByte = buf[i + 3]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint
	            }
	          }
	      }
	    }

	    if (codePoint === null) {
	      // we did not generate a valid codePoint so insert a
	      // replacement char (U+FFFD) and advance only 1 byte
	      codePoint = 0xFFFD
	      bytesPerSequence = 1
	    } else if (codePoint > 0xFFFF) {
	      // encode to utf16 (surrogate pair dance)
	      codePoint -= 0x10000
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
	      codePoint = 0xDC00 | codePoint & 0x3FF
	    }

	    res.push(codePoint)
	    i += bytesPerSequence
	  }

	  return decodeCodePointsArray(res)
	}

	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000

	function decodeCodePointsArray (codePoints) {
	  var len = codePoints.length
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
	  }

	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = ''
	  var i = 0
	  while (i < len) {
	    res += String.fromCharCode.apply(
	      String,
	      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
	    )
	  }
	  return res
	}

	function asciiSlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i] & 0x7F)
	  }
	  return ret
	}

	function latin1Slice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i])
	  }
	  return ret
	}

	function hexSlice (buf, start, end) {
	  var len = buf.length

	  if (!start || start < 0) start = 0
	  if (!end || end < 0 || end > len) end = len

	  var out = ''
	  for (var i = start; i < end; ++i) {
	    out += toHex(buf[i])
	  }
	  return out
	}

	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end)
	  var res = ''
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
	  }
	  return res
	}

	Buffer.prototype.slice = function slice (start, end) {
	  var len = this.length
	  start = ~~start
	  end = end === undefined ? len : ~~end

	  if (start < 0) {
	    start += len
	    if (start < 0) start = 0
	  } else if (start > len) {
	    start = len
	  }

	  if (end < 0) {
	    end += len
	    if (end < 0) end = 0
	  } else if (end > len) {
	    end = len
	  }

	  if (end < start) end = start

	  var newBuf
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    newBuf = this.subarray(start, end)
	    newBuf.__proto__ = Buffer.prototype
	  } else {
	    var sliceLen = end - start
	    newBuf = new Buffer(sliceLen, undefined)
	    for (var i = 0; i < sliceLen; ++i) {
	      newBuf[i] = this[i + start]
	    }
	  }

	  return newBuf
	}

	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
	}

	Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }

	  return val
	}

	Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length)
	  }

	  var val = this[offset + --byteLength]
	  var mul = 1
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul
	  }

	  return val
	}

	Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  return this[offset]
	}

	Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return this[offset] | (this[offset + 1] << 8)
	}

	Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return (this[offset] << 8) | this[offset + 1]
	}

	Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	}

	Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset] * 0x1000000) +
	    ((this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    this[offset + 3])
	}

	Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	  mul *= 0x80

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

	  return val
	}

	Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var i = byteLength
	  var mul = 1
	  var val = this[offset + --i]
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul
	  }
	  mul *= 0x80

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

	  return val
	}

	Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  if (!(this[offset] & 0x80)) return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	}

	Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset] | (this[offset + 1] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}

	Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset + 1] | (this[offset] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}

	Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset]) |
	    (this[offset + 1] << 8) |
	    (this[offset + 2] << 16) |
	    (this[offset + 3] << 24)
	}

	Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset] << 24) |
	    (this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    (this[offset + 3])
	}

	Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, true, 23, 4)
	}

	Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, false, 23, 4)
	}

	Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, true, 52, 8)
	}

	Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, false, 52, 8)
	}

	function checkInt (buf, value, offset, ext, max, min) {
	  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
	  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	}

	Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }

	  var mul = 1
	  var i = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }

	  var i = byteLength - 1
	  var mul = 1
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  this[offset] = (value & 0xff)
	  return offset + 1
	}

	function objectWriteUInt16 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
	    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
	      (littleEndian ? i : 1 - i) * 8
	  }
	}

	Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}

	function objectWriteUInt32 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
	    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
	  }
	}

	Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = (value >>> 24)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 1] = (value >>> 8)
	    this[offset] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)

	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }

	  var i = 0
	  var mul = 1
	  var sub = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)

	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }

	  var i = byteLength - 1
	  var mul = 1
	  var sub = 0
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  if (value < 0) value = 0xff + value + 1
	  this[offset] = (value & 0xff)
	  return offset + 1
	}

	Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 3] = (value >>> 24)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (value < 0) value = 0xffffffff + value + 1
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}

	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	  if (offset < 0) throw new RangeError('Index out of range')
	}

	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 23, 4)
	  return offset + 4
	}

	Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	}

	Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	}

	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 52, 8)
	  return offset + 8
	}

	Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	}

	Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	}

	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function copy (target, targetStart, start, end) {
	  if (!start) start = 0
	  if (!end && end !== 0) end = this.length
	  if (targetStart >= target.length) targetStart = target.length
	  if (!targetStart) targetStart = 0
	  if (end > 0 && end < start) end = start

	  // Copy 0 bytes; we're done
	  if (end === start) return 0
	  if (target.length === 0 || this.length === 0) return 0

	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds')
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
	  if (end < 0) throw new RangeError('sourceEnd out of bounds')

	  // Are we oob?
	  if (end > this.length) end = this.length
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start
	  }

	  var len = end - start
	  var i

	  if (this === target && start < targetStart && targetStart < end) {
	    // descending copy from end
	    for (i = len - 1; i >= 0; --i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
	    // ascending copy from start
	    for (i = 0; i < len; ++i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else {
	    Uint8Array.prototype.set.call(
	      target,
	      this.subarray(start, start + len),
	      targetStart
	    )
	  }

	  return len
	}

	// Usage:
	//    buffer.fill(number[, offset[, end]])
	//    buffer.fill(buffer[, offset[, end]])
	//    buffer.fill(string[, offset[, end]][, encoding])
	Buffer.prototype.fill = function fill (val, start, end, encoding) {
	  // Handle string cases:
	  if (typeof val === 'string') {
	    if (typeof start === 'string') {
	      encoding = start
	      start = 0
	      end = this.length
	    } else if (typeof end === 'string') {
	      encoding = end
	      end = this.length
	    }
	    if (val.length === 1) {
	      var code = val.charCodeAt(0)
	      if (code < 256) {
	        val = code
	      }
	    }
	    if (encoding !== undefined && typeof encoding !== 'string') {
	      throw new TypeError('encoding must be a string')
	    }
	    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
	      throw new TypeError('Unknown encoding: ' + encoding)
	    }
	  } else if (typeof val === 'number') {
	    val = val & 255
	  }

	  // Invalid ranges are not set to a default, so can range check early.
	  if (start < 0 || this.length < start || this.length < end) {
	    throw new RangeError('Out of range index')
	  }

	  if (end <= start) {
	    return this
	  }

	  start = start >>> 0
	  end = end === undefined ? this.length : end >>> 0

	  if (!val) val = 0

	  var i
	  if (typeof val === 'number') {
	    for (i = start; i < end; ++i) {
	      this[i] = val
	    }
	  } else {
	    var bytes = Buffer.isBuffer(val)
	      ? val
	      : utf8ToBytes(new Buffer(val, encoding).toString())
	    var len = bytes.length
	    for (i = 0; i < end - start; ++i) {
	      this[i + start] = bytes[i % len]
	    }
	  }

	  return this
	}

	// HELPER FUNCTIONS
	// ================

	var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

	function base64clean (str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return ''
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '='
	  }
	  return str
	}

	function stringtrim (str) {
	  if (str.trim) return str.trim()
	  return str.replace(/^\s+|\s+$/g, '')
	}

	function toHex (n) {
	  if (n < 16) return '0' + n.toString(16)
	  return n.toString(16)
	}

	function utf8ToBytes (string, units) {
	  units = units || Infinity
	  var codePoint
	  var length = string.length
	  var leadSurrogate = null
	  var bytes = []

	  for (var i = 0; i < length; ++i) {
	    codePoint = string.charCodeAt(i)

	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        }

	        // valid lead
	        leadSurrogate = codePoint

	        continue
	      }

	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	        leadSurrogate = codePoint
	        continue
	      }

	      // valid surrogate pair
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	    }

	    leadSurrogate = null

	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break
	      bytes.push(codePoint)
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break
	      bytes.push(
	        codePoint >> 0x6 | 0xC0,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break
	      bytes.push(
	        codePoint >> 0xC | 0xE0,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break
	      bytes.push(
	        codePoint >> 0x12 | 0xF0,
	        codePoint >> 0xC & 0x3F | 0x80,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else {
	      throw new Error('Invalid code point')
	    }
	  }

	  return bytes
	}

	function asciiToBytes (str) {
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF)
	  }
	  return byteArray
	}

	function utf16leToBytes (str, units) {
	  var c, hi, lo
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    if ((units -= 2) < 0) break

	    c = str.charCodeAt(i)
	    hi = c >> 8
	    lo = c % 256
	    byteArray.push(lo)
	    byteArray.push(hi)
	  }

	  return byteArray
	}

	function base64ToBytes (str) {
	  return base64.toByteArray(base64clean(str))
	}

	function blitBuffer (src, dst, offset, length) {
	  for (var i = 0; i < length; ++i) {
	    if ((i + offset >= dst.length) || (i >= src.length)) break
	    dst[i + offset] = src[i]
	  }
	  return i
	}

	function isnan (val) {
	  return val !== val // eslint-disable-line no-self-compare
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 45 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ }),
/* 46 */
/***/ (function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(17)
	  , IObject  = __webpack_require__(53)
	  , toObject = __webpack_require__(26)
	  , toLength = __webpack_require__(34)
	  , asc      = __webpack_require__(144);
	module.exports = function(TYPE, $create){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
	    , create        = $create || asc;
	  return function($this, callbackfn, that){
	    var O      = toObject($this)
	      , self   = IObject(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
	      , val, res;
	    for(;length > index; index++)if(NO_HOLES || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(TYPE){
	        if(IS_MAP)result[index] = res;            // map
	        else if(res)switch(TYPE){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(IS_EVERY)return false;          // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(23)
	  , TAG = __webpack_require__(3)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ }),
/* 49 */
/***/ (function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(10)
	  , document = __webpack_require__(4).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ }),
/* 51 */
/***/ (function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(17)
	  , call        = __webpack_require__(84)
	  , isArrayIter = __webpack_require__(82)
	  , anObject    = __webpack_require__(7)
	  , toLength    = __webpack_require__(34)
	  , getIterFn   = __webpack_require__(64)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(23);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(7)
	  , dPs         = __webpack_require__(154)
	  , enumBugKeys = __webpack_require__(51)
	  , IE_PROTO    = __webpack_require__(58)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(50)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(80).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ }),
/* 55 */
/***/ (function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	var hide = __webpack_require__(12);
	module.exports = function(target, src, safe){
	  for(var key in src){
	    if(safe && target[key])target[key] = src[key];
	    else hide(target, key, src[key]);
	  } return target;
	};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(12);

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(59)('keys')
	  , uid    = __webpack_require__(35);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ }),
/* 60 */
/***/ (function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(10);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(4)
	  , core           = __webpack_require__(2)
	  , LIBRARY        = __webpack_require__(31)
	  , wksExt         = __webpack_require__(63)
	  , defineProperty = __webpack_require__(5).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(3);

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(48)
	  , ITERATOR  = __webpack_require__(3)('iterator')
	  , Iterators = __webpack_require__(18);
	module.exports = __webpack_require__(2).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ }),
/* 65 */
/***/ (function(module, exports) {

	

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	// Standard YAML's Failsafe schema.
	// http://www.yaml.org/spec/1.2/spec.html#id2802346


	'use strict';


	var Schema = __webpack_require__(21);


	module.exports = new Schema({
	  explicit: [
	    __webpack_require__(202),
	    __webpack_require__(200),
	    __webpack_require__(195)
	  ]
	});


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(16),
	    root = __webpack_require__(6);

	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');

	module.exports = Map;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(6);

	/** Built-in value references. */
	var Symbol = root.Symbol;

	module.exports = Symbol;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	var baseAssignValue = __webpack_require__(70),
	    eq = __webpack_require__(75);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    baseAssignValue(object, key, value);
	  }
	}

	module.exports = assignValue;


/***/ }),
/* 70 */
/***/ (function(module, exports) {

	/** Built-in value references. */
	var defineProperty = Object.defineProperty;

	/**
	 * The base implementation of `assignValue` and `assignMergeValue` without
	 * value checks.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function baseAssignValue(object, key, value) {
	  if (key == '__proto__' && defineProperty) {
	    defineProperty(object, key, {
	      'configurable': true,
	      'enumerable': true,
	      'value': value,
	      'writable': true
	    });
	  } else {
	    object[key] = value;
	  }
	}

	module.exports = baseAssignValue;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	var Uint8Array = __webpack_require__(209);

	/**
	 * Creates a clone of `arrayBuffer`.
	 *
	 * @private
	 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	 * @returns {ArrayBuffer} Returns the cloned array buffer.
	 */
	function cloneArrayBuffer(arrayBuffer) {
	  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
	  return result;
	}

	module.exports = cloneArrayBuffer;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(69),
	    baseAssignValue = __webpack_require__(70);

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  var isNew = !object;
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];

	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : undefined;

	    if (newValue === undefined) {
	      newValue = source[key];
	    }
	    if (isNew) {
	      baseAssignValue(object, key, newValue);
	    } else {
	      assignValue(object, key, newValue);
	    }
	  }
	  return object;
	}

	module.exports = copyObject;


/***/ }),
/* 73 */
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

	  return value === proto;
	}

	module.exports = isPrototype;


/***/ }),
/* 74 */
/***/ (function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	module.exports = overArg;


/***/ }),
/* 75 */
/***/ (function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	module.exports = eq;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	var isObjectLike = __webpack_require__(42);

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}

	module.exports = isSymbol;


/***/ }),
/* 77 */
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(130), __esModule: true };

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(133), __esModule: true };

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(4).document && document.documentElement;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(8) && !__webpack_require__(14)(function(){
	  return Object.defineProperty(__webpack_require__(50)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(18)
	  , ITERATOR   = __webpack_require__(3)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(23);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(7);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(31)
	  , $export        = __webpack_require__(9)
	  , redefine       = __webpack_require__(57)
	  , hide           = __webpack_require__(12)
	  , has            = __webpack_require__(11)
	  , Iterators      = __webpack_require__(18)
	  , $iterCreate    = __webpack_require__(150)
	  , setToStringTag = __webpack_require__(25)
	  , getPrototypeOf = __webpack_require__(157)
	  , ITERATOR       = __webpack_require__(3)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(3)('iterator')
	  , SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }

	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(19)
	  , gOPS     = __webpack_require__(55)
	  , pIE      = __webpack_require__(33)
	  , toObject = __webpack_require__(26)
	  , IObject  = __webpack_require__(53)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(14)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(89)
	  , hiddenKeys = __webpack_require__(51).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(11)
	  , toIObject    = __webpack_require__(15)
	  , arrayIndexOf = __webpack_require__(142)(false)
	  , IE_PROTO     = __webpack_require__(58)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(17)
	  , invoke             = __webpack_require__(149)
	  , html               = __webpack_require__(80)
	  , cel                = __webpack_require__(50)
	  , global             = __webpack_require__(4)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(23)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

	// Standard YAML's Core schema.
	// http://www.yaml.org/spec/1.2/spec.html#id2804923
	//
	// NOTE: JS-YAML does not support schema-specific tag resolution restrictions.
	// So, Core schema has no distinctions from JSON schema is JS-YAML.


	'use strict';


	var Schema = __webpack_require__(21);


	module.exports = new Schema({
	  include: [
	    __webpack_require__(92)
	  ]
	});


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

	// Standard YAML's JSON schema.
	// http://www.yaml.org/spec/1.2/spec.html#id2803231
	//
	// NOTE: JS-YAML does not support schema-specific tag resolution restrictions.
	// So, this schema is not such strict as defined in the YAML specification.
	// It allows numbers in binary notaion, use `Null` and `NULL` as `null`, etc.


	'use strict';


	var Schema = __webpack_require__(21);


	module.exports = new Schema({
	  include: [
	    __webpack_require__(66)
	  ],
	  implicit: [
	    __webpack_require__(197),
	    __webpack_require__(189),
	    __webpack_require__(191),
	    __webpack_require__(190)
	  ]
	});


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

	var mapCacheClear = __webpack_require__(267),
	    mapCacheDelete = __webpack_require__(268),
	    mapCacheGet = __webpack_require__(269),
	    mapCacheHas = __webpack_require__(270),
	    mapCacheSet = __webpack_require__(271);

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	module.exports = MapCache;


/***/ }),
/* 94 */
/***/ (function(module, exports) {

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	module.exports = arrayPush;


/***/ }),
/* 95 */
/***/ (function(module, exports) {

	/**
	 * A specialized version of `_.reduce` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {*} [accumulator] The initial value.
	 * @param {boolean} [initAccum] Specify using the first element of `array` as
	 *  the initial value.
	 * @returns {*} Returns the accumulated value.
	 */
	function arrayReduce(array, iteratee, accumulator, initAccum) {
	  var index = -1,
	      length = array ? array.length : 0;

	  if (initAccum && length) {
	    accumulator = array[++index];
	  }
	  while (++index < length) {
	    accumulator = iteratee(accumulator, array[index], index, array);
	  }
	  return accumulator;
	}

	module.exports = arrayReduce;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(74);

	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);

	module.exports = getPrototype;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(74),
	    stubArray = __webpack_require__(296);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols;

	/**
	 * Creates an array of the own enumerable symbol properties of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

	module.exports = getSymbols;


/***/ }),
/* 98 */
/***/ (function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}

	module.exports = isIndex;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(213);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * A specialized version of `baseRest` which transforms the rest array.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @param {Function} transform The rest array transform.
	 * @returns {Function} Returns the new function.
	 */
	function overRest(func, start, transform) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);

	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = transform(array);
	    return apply(func, this, otherArgs);
	  };
	}

	module.exports = overRest;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

	var baseSetToString = __webpack_require__(229),
	    shortOut = __webpack_require__(277);

	/**
	 * Sets the `toString` method of `func` to return `string`.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var setToString = shortOut(baseSetToString);

	module.exports = setToString;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

	var isSymbol = __webpack_require__(76);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	module.exports = toKey;


/***/ }),
/* 102 */
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var funcProto = Function.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	module.exports = toSource;


/***/ }),
/* 103 */
/***/ (function(module, exports) {

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	module.exports = identity;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

	var isArrayLikeObject = __webpack_require__(289);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}

	module.exports = isArguments;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(22);

	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8-9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	module.exports = isFunction;


/***/ }),
/* 106 */
/***/ (function(module, exports) {

	'use strict';

	var replace = String.prototype.replace;
	var percentTwenties = /%20/g;

	module.exports = {
	    'default': 'RFC3986',
	    formatters: {
	        RFC1738: function (value) {
	            return replace.call(value, percentTwenties, '+');
	        },
	        RFC3986: function (value) {
	            return value;
	        }
	    },
	    RFC1738: 'RFC1738',
	    RFC3986: 'RFC3986'
	};


/***/ }),
/* 107 */
/***/ (function(module, exports) {

	'use strict';

	var has = Object.prototype.hasOwnProperty;

	var hexTable = (function () {
	    var array = [];
	    for (var i = 0; i < 256; ++i) {
	        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
	    }

	    return array;
	}());

	exports.arrayToObject = function (source, options) {
	    var obj = options && options.plainObjects ? Object.create(null) : {};
	    for (var i = 0; i < source.length; ++i) {
	        if (typeof source[i] !== 'undefined') {
	            obj[i] = source[i];
	        }
	    }

	    return obj;
	};

	exports.merge = function (target, source, options) {
	    if (!source) {
	        return target;
	    }

	    if (typeof source !== 'object') {
	        if (Array.isArray(target)) {
	            target.push(source);
	        } else if (typeof target === 'object') {
	            if (options.plainObjects || options.allowPrototypes || !has.call(Object.prototype, source)) {
	                target[source] = true;
	            }
	        } else {
	            return [target, source];
	        }

	        return target;
	    }

	    if (typeof target !== 'object') {
	        return [target].concat(source);
	    }

	    var mergeTarget = target;
	    if (Array.isArray(target) && !Array.isArray(source)) {
	        mergeTarget = exports.arrayToObject(target, options);
	    }

	    if (Array.isArray(target) && Array.isArray(source)) {
	        source.forEach(function (item, i) {
	            if (has.call(target, i)) {
	                if (target[i] && typeof target[i] === 'object') {
	                    target[i] = exports.merge(target[i], item, options);
	                } else {
	                    target.push(item);
	                }
	            } else {
	                target[i] = item;
	            }
	        });
	        return target;
	    }

	    return Object.keys(source).reduce(function (acc, key) {
	        var value = source[key];

	        if (Object.prototype.hasOwnProperty.call(acc, key)) {
	            acc[key] = exports.merge(acc[key], value, options);
	        } else {
	            acc[key] = value;
	        }
	        return acc;
	    }, mergeTarget);
	};

	exports.decode = function (str) {
	    try {
	        return decodeURIComponent(str.replace(/\+/g, ' '));
	    } catch (e) {
	        return str;
	    }
	};

	exports.encode = function (str) {
	    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
	    // It has been adapted here for stricter adherence to RFC 3986
	    if (str.length === 0) {
	        return str;
	    }

	    var string = typeof str === 'string' ? str : String(str);

	    var out = '';
	    for (var i = 0; i < string.length; ++i) {
	        var c = string.charCodeAt(i);

	        if (
	            c === 0x2D || // -
	            c === 0x2E || // .
	            c === 0x5F || // _
	            c === 0x7E || // ~
	            (c >= 0x30 && c <= 0x39) || // 0-9
	            (c >= 0x41 && c <= 0x5A) || // a-z
	            (c >= 0x61 && c <= 0x7A) // A-Z
	        ) {
	            out += string.charAt(i);
	            continue;
	        }

	        if (c < 0x80) {
	            out = out + hexTable[c];
	            continue;
	        }

	        if (c < 0x800) {
	            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
	            continue;
	        }

	        if (c < 0xD800 || c >= 0xE000) {
	            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
	            continue;
	        }

	        i += 1;
	        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
	        out += hexTable[0xF0 | (c >> 18)] + hexTable[0x80 | ((c >> 12) & 0x3F)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]; // eslint-disable-line max-len
	    }

	    return out;
	};

	exports.compact = function (obj, references) {
	    if (typeof obj !== 'object' || obj === null) {
	        return obj;
	    }

	    var refs = references || [];
	    var lookup = refs.indexOf(obj);
	    if (lookup !== -1) {
	        return refs[lookup];
	    }

	    refs.push(obj);

	    if (Array.isArray(obj)) {
	        var compacted = [];

	        for (var i = 0; i < obj.length; ++i) {
	            if (obj[i] && typeof obj[i] === 'object') {
	                compacted.push(exports.compact(obj[i], refs));
	            } else if (typeof obj[i] !== 'undefined') {
	                compacted.push(obj[i]);
	            }
	        }

	        return compacted;
	    }

	    var keys = Object.keys(obj);
	    keys.forEach(function (key) {
	        obj[key] = exports.compact(obj[key], refs);
	    });

	    return obj;
	};

	exports.isRegExp = function (obj) {
	    return Object.prototype.toString.call(obj) === '[object RegExp]';
	};

	exports.isBuffer = function (obj) {
	    if (obj === null || typeof obj === 'undefined') {
	        return false;
	    }

	    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
	};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = swaggerMiddleware;

	var _swaggerClient = __webpack_require__(308);

	var _swaggerClient2 = _interopRequireDefault(_swaggerClient);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function swaggerMiddleware(opts) {
	  var _this = this;

	  return function (_ref) {
	    var dispatch = _ref.dispatch,
	        getState = _ref.getState;
	    return function (next) {
	      return function (action) {
	        if (typeof action === 'function') {
	          return action(dispatch, getState);
	        }

	        if (!action.swagger) {
	          return next(action);
	        }

	        return new _swaggerClient2['default'](_extends({}, opts, {
	          requestInterceptor: function requestInterceptor(req) {
	            return !!opts.requestInterceptor ? opts.requestInterceptor(req, action) : req;
	          },
	          responseInterceptor: function responseInterceptor(resp) {
	            return !!opts.responseInterceptor ? opts.responseInterceptor(resp, action) : resp;
	          }
	        })).then(function (result) {
	          var swagger = action.swagger,
	              types = action.types,
	              rest = _objectWithoutProperties(action, ['swagger', 'types']);

	          var _types = _slicedToArray(types, 3),
	              REQUEST = _types[0],
	              SUCCESS = _types[1],
	              FAILURE = _types[2];

	          var callApi = function () {
	            var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee(apis, sw) {
	              var error, resp;
	              return regeneratorRuntime.wrap(function _callee$(_context) {
	                while (1) {
	                  switch (_context.prev = _context.next) {
	                    case 0:
	                      if (!(typeof sw !== 'function')) {
	                        _context.next = 4;
	                        break;
	                      }

	                      error = new Error('Swagger api call is not a function');

	                      opts.error && opts.error(error);
	                      throw error;

	                    case 4:
	                      next(_extends({}, rest, { type: REQUEST }));
	                      _context.t0 = !!opts.preRequest;

	                      if (!_context.t0) {
	                        _context.next = 9;
	                        break;
	                      }

	                      _context.next = 9;
	                      return opts.preRequest(action);

	                    case 9:
	                      _context.prev = 9;
	                      _context.next = 12;
	                      return sw(apis, action);

	                    case 12:
	                      resp = _context.sent;
	                      return _context.abrupt('return', next(_extends({}, rest, { result: resp, type: SUCCESS })));

	                    case 16:
	                      _context.prev = 16;
	                      _context.t1 = _context['catch'](9);
	                      return _context.abrupt('return', next(_extends({}, rest, { error: _context.t1, type: FAILURE })));

	                    case 19:
	                    case 'end':
	                      return _context.stop();
	                  }
	                }
	              }, _callee, _this, [[9, 16]]);
	            }));

	            return function callApi(_x, _x2) {
	              return _ref2.apply(this, arguments);
	            };
	          }();

	          return callApi(result.apis, swagger);
	        }, function (err) {
	          return opts.error && opts.error(err);
	        })['catch'](function (err) {
	          return opts.error && opts.error(err);
	        });
	      };
	    };
	  };
	}

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(129), __esModule: true };

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(131), __esModule: true };

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(132), __esModule: true };

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(134), __esModule: true };

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(135), __esModule: true };

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(136), __esModule: true };

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(137), __esModule: true };

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(138), __esModule: true };

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(139), __esModule: true };

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(140), __esModule: true };

/***/ }),
/* 119 */
/***/ (function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(113);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _assign = __webpack_require__(79);

	var _assign2 = _interopRequireDefault(_assign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

/***/ }),
/* 122 */
/***/ (function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (obj, keys) {
	  var target = {};

	  for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;
	    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
	    target[i] = obj[i];
	  }

	  return target;
	};

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _isIterable2 = __webpack_require__(110);

	var _isIterable3 = _interopRequireDefault(_isIterable2);

	var _getIterator2 = __webpack_require__(78);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function sliceIterator(arr, i) {
	    var _arr = [];
	    var _n = true;
	    var _d = false;
	    var _e = undefined;

	    try {
	      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
	        _arr.push(_s.value);

	        if (i && _arr.length === i) break;
	      }
	    } catch (err) {
	      _d = true;
	      _e = err;
	    } finally {
	      try {
	        if (!_n && _i["return"]) _i["return"]();
	      } finally {
	        if (_d) throw _e;
	      }
	    }

	    return _arr;
	  }

	  return function (arr, i) {
	    if (Array.isArray(arr)) {
	      return arr;
	    } else if ((0, _isIterable3.default)(Object(arr))) {
	      return sliceIterator(arr, i);
	    } else {
	      throw new TypeError("Invalid attempt to destructure non-iterable instance");
	    }
	  };
	}();

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _from = __webpack_require__(109);

	var _from2 = _interopRequireDefault(_from);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }

	    return arr2;
	  } else {
	    return (0, _from2.default)(arr);
	  }
	};

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(117);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(116);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(306);


/***/ }),
/* 127 */
/***/ (function(module, exports) {

	'use strict'

	exports.byteLength = byteLength
	exports.toByteArray = toByteArray
	exports.fromByteArray = fromByteArray

	var lookup = []
	var revLookup = []
	var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

	var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
	for (var i = 0, len = code.length; i < len; ++i) {
	  lookup[i] = code[i]
	  revLookup[code.charCodeAt(i)] = i
	}

	revLookup['-'.charCodeAt(0)] = 62
	revLookup['_'.charCodeAt(0)] = 63

	function placeHoldersCount (b64) {
	  var len = b64.length
	  if (len % 4 > 0) {
	    throw new Error('Invalid string. Length must be a multiple of 4')
	  }

	  // the number of equal signs (place holders)
	  // if there are two placeholders, than the two characters before it
	  // represent one byte
	  // if there is only one, then the three characters before it represent 2 bytes
	  // this is just a cheap hack to not do indexOf twice
	  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
	}

	function byteLength (b64) {
	  // base64 is 4/3 + up to two characters of the original data
	  return b64.length * 3 / 4 - placeHoldersCount(b64)
	}

	function toByteArray (b64) {
	  var i, j, l, tmp, placeHolders, arr
	  var len = b64.length
	  placeHolders = placeHoldersCount(b64)

	  arr = new Arr(len * 3 / 4 - placeHolders)

	  // if there are placeholders, only get up to the last complete 4 chars
	  l = placeHolders > 0 ? len - 4 : len

	  var L = 0

	  for (i = 0, j = 0; i < l; i += 4, j += 3) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
	    arr[L++] = (tmp >> 16) & 0xFF
	    arr[L++] = (tmp >> 8) & 0xFF
	    arr[L++] = tmp & 0xFF
	  }

	  if (placeHolders === 2) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
	    arr[L++] = tmp & 0xFF
	  } else if (placeHolders === 1) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
	    arr[L++] = (tmp >> 8) & 0xFF
	    arr[L++] = tmp & 0xFF
	  }

	  return arr
	}

	function tripletToBase64 (num) {
	  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
	}

	function encodeChunk (uint8, start, end) {
	  var tmp
	  var output = []
	  for (var i = start; i < end; i += 3) {
	    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
	    output.push(tripletToBase64(tmp))
	  }
	  return output.join('')
	}

	function fromByteArray (uint8) {
	  var tmp
	  var len = uint8.length
	  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
	  var output = ''
	  var parts = []
	  var maxChunkLength = 16383 // must be multiple of 3

	  // go through the array every three bytes, we'll deal with trailing stuff later
	  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
	    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
	  }

	  // pad the end with zeros, but make sure to not forget the extra bytes
	  if (extraBytes === 1) {
	    tmp = uint8[len - 1]
	    output += lookup[tmp >> 2]
	    output += lookup[(tmp << 4) & 0x3F]
	    output += '=='
	  } else if (extraBytes === 2) {
	    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
	    output += lookup[tmp >> 10]
	    output += lookup[(tmp >> 4) & 0x3F]
	    output += lookup[(tmp << 2) & 0x3F]
	    output += '='
	  }

	  parts.push(output)

	  return parts.join('')
	}


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {(function () {
	  "use strict";

	  function btoa(str) {
	    var buffer
	      ;

	    if (str instanceof Buffer) {
	      buffer = str;
	    } else {
	      buffer = new Buffer(str.toString(), 'binary');
	    }

	    return buffer.toString('base64');
	  }

	  module.exports = btoa;
	}());

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(44).Buffer))

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(27);
	__webpack_require__(165);
	module.exports = __webpack_require__(2).Array.from;

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(28);
	__webpack_require__(27);
	module.exports = __webpack_require__(163);

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(28);
	__webpack_require__(27);
	module.exports = __webpack_require__(164);

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(2)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(167);
	module.exports = __webpack_require__(2).Object.assign;

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(168);
	var $Object = __webpack_require__(2).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(169);
	var $Object = __webpack_require__(2).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(170);
	module.exports = __webpack_require__(2).Object.keys;

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(65);
	__webpack_require__(27);
	__webpack_require__(28);
	__webpack_require__(171);
	module.exports = __webpack_require__(2).Promise;

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(172);
	__webpack_require__(65);
	__webpack_require__(174);
	__webpack_require__(175);
	module.exports = __webpack_require__(2).Symbol;

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(27);
	__webpack_require__(28);
	module.exports = __webpack_require__(63).f('iterator');

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(65);
	__webpack_require__(28);
	__webpack_require__(173);
	module.exports = __webpack_require__(2).WeakMap;

/***/ }),
/* 141 */
/***/ (function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(15)
	  , toLength  = __webpack_require__(34)
	  , toIndex   = __webpack_require__(162);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(10)
	  , isArray  = __webpack_require__(83)
	  , SPECIES  = __webpack_require__(3)('species');

	module.exports = function(original){
	  var C;
	  if(isArray(original)){
	    C = original.constructor;
	    // cross-realm fallback
	    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
	    if(isObject(C)){
	      C = C[SPECIES];
	      if(C === null)C = undefined;
	    }
	  } return C === undefined ? Array : C;
	};

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(143);

	module.exports = function(original, length){
	  return new (speciesConstructor(original))(length);
	};

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var redefineAll       = __webpack_require__(56)
	  , getWeak           = __webpack_require__(32).getWeak
	  , anObject          = __webpack_require__(7)
	  , isObject          = __webpack_require__(10)
	  , anInstance        = __webpack_require__(46)
	  , forOf             = __webpack_require__(52)
	  , createArrayMethod = __webpack_require__(47)
	  , $has              = __webpack_require__(11)
	  , arrayFind         = createArrayMethod(5)
	  , arrayFindIndex    = createArrayMethod(6)
	  , id                = 0;

	// fallback for uncaught frozen keys
	var uncaughtFrozenStore = function(that){
	  return that._l || (that._l = new UncaughtFrozenStore);
	};
	var UncaughtFrozenStore = function(){
	  this.a = [];
	};
	var findUncaughtFrozen = function(store, key){
	  return arrayFind(store.a, function(it){
	    return it[0] === key;
	  });
	};
	UncaughtFrozenStore.prototype = {
	  get: function(key){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)return entry[1];
	  },
	  has: function(key){
	    return !!findUncaughtFrozen(this, key);
	  },
	  set: function(key, value){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)entry[1] = value;
	    else this.a.push([key, value]);
	  },
	  'delete': function(key){
	    var index = arrayFindIndex(this.a, function(it){
	      return it[0] === key;
	    });
	    if(~index)this.a.splice(index, 1);
	    return !!~index;
	  }
	};

	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = id++;      // collection id
	      that._l = undefined; // leak store for uncaught frozen objects
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this)['delete'](key);
	        return data && $has(data, this._i) && delete data[this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this).has(key);
	        return data && $has(data, this._i);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var data = getWeak(anObject(key), true);
	    if(data === true)uncaughtFrozenStore(that).set(key, value);
	    else data[that._i] = value;
	    return that;
	  },
	  ufstore: uncaughtFrozenStore
	};

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var global         = __webpack_require__(4)
	  , $export        = __webpack_require__(9)
	  , meta           = __webpack_require__(32)
	  , fails          = __webpack_require__(14)
	  , hide           = __webpack_require__(12)
	  , redefineAll    = __webpack_require__(56)
	  , forOf          = __webpack_require__(52)
	  , anInstance     = __webpack_require__(46)
	  , isObject       = __webpack_require__(10)
	  , setToStringTag = __webpack_require__(25)
	  , dP             = __webpack_require__(5).f
	  , each           = __webpack_require__(47)(0)
	  , DESCRIPTORS    = __webpack_require__(8);

	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  if(!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
	    new C().entries().next();
	  }))){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	    meta.NEED = true;
	  } else {
	    C = wrapper(function(target, iterable){
	      anInstance(target, C, NAME, '_c');
	      target._c = new Base;
	      if(iterable != undefined)forOf(iterable, IS_MAP, target[ADDER], target);
	    });
	    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','),function(KEY){
	      var IS_ADDER = KEY == 'add' || KEY == 'set';
	      if(KEY in proto && !(IS_WEAK && KEY == 'clear'))hide(C.prototype, KEY, function(a, b){
	        anInstance(this, C, KEY);
	        if(!IS_ADDER && IS_WEAK && !isObject(a))return KEY == 'get' ? undefined : false;
	        var result = this._c[KEY](a === 0 ? 0 : a, b);
	        return IS_ADDER ? this : result;
	      });
	    });
	    if('size' in proto)dP(C.prototype, 'size', {
	      get: function(){
	        return this._c.size;
	      }
	    });
	  }

	  setToStringTag(C, NAME);

	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F, O);

	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);

	  return C;
	};

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(5)
	  , createDesc      = __webpack_require__(24);

	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(19)
	  , gOPS    = __webpack_require__(55)
	  , pIE     = __webpack_require__(33);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ }),
/* 149 */
/***/ (function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(54)
	  , descriptor     = __webpack_require__(24)
	  , setToStringTag = __webpack_require__(25)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(12)(IteratorPrototype, __webpack_require__(3)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ }),
/* 151 */
/***/ (function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(19)
	  , toIObject = __webpack_require__(15);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(4)
	  , macrotask = __webpack_require__(90).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(23)(process) == 'process';

	module.exports = function(){
	  var head, last, notify;

	  var flush = function(){
	    var parent, fn;
	    if(isNode && (parent = process.domain))parent.exit();
	    while(head){
	      fn   = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch(e){
	        if(head)notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if(parent)parent.enter();
	  };

	  // Node.js
	  if(isNode){
	    notify = function(){
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver
	  } else if(Observer){
	    var toggle = true
	      , node   = document.createTextNode('');
	    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	    notify = function(){
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if(Promise && Promise.resolve){
	    var promise = Promise.resolve();
	    notify = function(){
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function(){
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }

	  return function(fn){
	    var task = {fn: fn, next: undefined};
	    if(last)last.next = task;
	    if(!head){
	      head = task;
	      notify();
	    } last = task;
	  };
	};

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(5)
	  , anObject = __webpack_require__(7)
	  , getKeys  = __webpack_require__(19);

	module.exports = __webpack_require__(8) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(33)
	  , createDesc     = __webpack_require__(24)
	  , toIObject      = __webpack_require__(15)
	  , toPrimitive    = __webpack_require__(61)
	  , has            = __webpack_require__(11)
	  , IE8_DOM_DEFINE = __webpack_require__(81)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(8) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(15)
	  , gOPN      = __webpack_require__(88).f
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(11)
	  , toObject    = __webpack_require__(26)
	  , IE_PROTO    = __webpack_require__(58)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(9)
	  , core    = __webpack_require__(2)
	  , fails   = __webpack_require__(14);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(4)
	  , core        = __webpack_require__(2)
	  , dP          = __webpack_require__(5)
	  , DESCRIPTORS = __webpack_require__(8)
	  , SPECIES     = __webpack_require__(3)('species');

	module.exports = function(KEY){
	  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(7)
	  , aFunction = __webpack_require__(45)
	  , SPECIES   = __webpack_require__(3)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(60)
	  , defined   = __webpack_require__(49);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(60)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(7)
	  , get      = __webpack_require__(64);
	module.exports = __webpack_require__(2).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(48)
	  , ITERATOR  = __webpack_require__(3)('iterator')
	  , Iterators = __webpack_require__(18);
	module.exports = __webpack_require__(2).isIterable = function(it){
	  var O = Object(it);
	  return O[ITERATOR] !== undefined
	    || '@@iterator' in O
	    || Iterators.hasOwnProperty(classof(O));
	};

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(17)
	  , $export        = __webpack_require__(9)
	  , toObject       = __webpack_require__(26)
	  , call           = __webpack_require__(84)
	  , isArrayIter    = __webpack_require__(82)
	  , toLength       = __webpack_require__(34)
	  , createProperty = __webpack_require__(147)
	  , getIterFn      = __webpack_require__(64);

	$export($export.S + $export.F * !__webpack_require__(86)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(141)
	  , step             = __webpack_require__(151)
	  , Iterators        = __webpack_require__(18)
	  , toIObject        = __webpack_require__(15);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(85)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(9);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(87)});

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(9)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(54)});

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(9);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(8), 'Object', {defineProperty: __webpack_require__(5).f});

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(26)
	  , $keys    = __webpack_require__(19);

	__webpack_require__(158)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY            = __webpack_require__(31)
	  , global             = __webpack_require__(4)
	  , ctx                = __webpack_require__(17)
	  , classof            = __webpack_require__(48)
	  , $export            = __webpack_require__(9)
	  , isObject           = __webpack_require__(10)
	  , aFunction          = __webpack_require__(45)
	  , anInstance         = __webpack_require__(46)
	  , forOf              = __webpack_require__(52)
	  , speciesConstructor = __webpack_require__(160)
	  , task               = __webpack_require__(90).set
	  , microtask          = __webpack_require__(153)()
	  , PROMISE            = 'Promise'
	  , TypeError          = global.TypeError
	  , process            = global.process
	  , $Promise           = global[PROMISE]
	  , process            = global.process
	  , isNode             = classof(process) == 'process'
	  , empty              = function(){ /* empty */ }
	  , Internal, GenericPromiseCapability, Wrapper;

	var USE_NATIVE = !!function(){
	  try {
	    // correct subclassing with @@species support
	    var promise     = $Promise.resolve(1)
	      , FakePromise = (promise.constructor = {})[__webpack_require__(3)('species')] = function(exec){ exec(empty, empty); };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch(e){ /* empty */ }
	}();

	// helpers
	var sameConstructor = function(a, b){
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function(C){
	  return sameConstructor($Promise, C)
	    ? new PromiseCapability(C)
	    : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject  = aFunction(reject);
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(promise, isReject){
	  if(promise._n)return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function(){
	    var value = promise._v
	      , ok    = promise._s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , domain  = reaction.domain
	        , result, then;
	      try {
	        if(handler){
	          if(!ok){
	            if(promise._h == 2)onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if(handler === true)result = value;
	          else {
	            if(domain)domain.enter();
	            result = handler(value);
	            if(domain)domain.exit();
	          }
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if(isReject && !promise._h)onUnhandled(promise);
	  });
	};
	var onUnhandled = function(promise){
	  task.call(global, function(){
	    var value = promise._v
	      , abrupt, handler, console;
	    if(isUnhandled(promise)){
	      abrupt = perform(function(){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if(abrupt)throw abrupt.error;
	  });
	};
	var isUnhandled = function(promise){
	  if(promise._h == 1)return false;
	  var chain = promise._a || promise._c
	    , i     = 0
	    , reaction;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var onHandleUnhandled = function(promise){
	  task.call(global, function(){
	    var handler;
	    if(isNode){
	      process.emit('rejectionHandled', promise);
	    } else if(handler = global.onrejectionhandled){
	      handler({promise: promise, reason: promise._v});
	    }
	  });
	};
	var $reject = function(value){
	  var promise = this;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if(!promise._a)promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function(value){
	  var promise = this
	    , then;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if(promise === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      microtask(function(){
	        var wrapper = {_w: promise, _d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch(e){
	    $reject.call({_w: promise, _d: false}, e); // wrap
	  }
	};

	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor){
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch(err){
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor){
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(56)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail   = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if(this._a)this._a.push(reaction);
	      if(this._s)notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function(){
	    var promise  = new Internal;
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject  = ctx($reject, promise, 1);
	  };
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
	__webpack_require__(25)($Promise, PROMISE);
	__webpack_require__(159)(PROMISE);
	Wrapper = __webpack_require__(2)[PROMISE];

	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = newPromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
	    var capability = newPromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(86)(function(iter){
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      var values    = []
	        , index     = 0
	        , remaining = 1;
	      forOf(iterable, false, function(promise){
	        var $index        = index++
	          , alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled  = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(4)
	  , has            = __webpack_require__(11)
	  , DESCRIPTORS    = __webpack_require__(8)
	  , $export        = __webpack_require__(9)
	  , redefine       = __webpack_require__(57)
	  , META           = __webpack_require__(32).KEY
	  , $fails         = __webpack_require__(14)
	  , shared         = __webpack_require__(59)
	  , setToStringTag = __webpack_require__(25)
	  , uid            = __webpack_require__(35)
	  , wks            = __webpack_require__(3)
	  , wksExt         = __webpack_require__(63)
	  , wksDefine      = __webpack_require__(62)
	  , keyOf          = __webpack_require__(152)
	  , enumKeys       = __webpack_require__(148)
	  , isArray        = __webpack_require__(83)
	  , anObject       = __webpack_require__(7)
	  , toIObject      = __webpack_require__(15)
	  , toPrimitive    = __webpack_require__(61)
	  , createDesc     = __webpack_require__(24)
	  , _create        = __webpack_require__(54)
	  , gOPNExt        = __webpack_require__(156)
	  , $GOPD          = __webpack_require__(155)
	  , $DP            = __webpack_require__(5)
	  , $keys          = __webpack_require__(19)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(88).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(33).f  = $propertyIsEnumerable;
	  __webpack_require__(55).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(31)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(12)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var each         = __webpack_require__(47)(0)
	  , redefine     = __webpack_require__(57)
	  , meta         = __webpack_require__(32)
	  , assign       = __webpack_require__(87)
	  , weak         = __webpack_require__(145)
	  , isObject     = __webpack_require__(10)
	  , getWeak      = meta.getWeak
	  , isExtensible = Object.isExtensible
	  , uncaughtFrozenStore = weak.ufstore
	  , tmp          = {}
	  , InternalMap;

	var wrapper = function(get){
	  return function WeakMap(){
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
	};

	var methods = {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key){
	    if(isObject(key)){
	      var data = getWeak(key);
	      if(data === true)return uncaughtFrozenStore(this).get(key);
	      return data ? data[this._i] : undefined;
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value){
	    return weak.def(this, key, value);
	  }
	};

	// 23.3 WeakMap Objects
	var $WeakMap = module.exports = __webpack_require__(146)('WeakMap', wrapper, methods, weak, true, true);

	// IE11 WeakMap frozen keys fix
	if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
	  InternalMap = weak.getConstructor(wrapper);
	  assign(InternalMap.prototype, methods);
	  meta.NEED = true;
	  each(['delete', 'has', 'get', 'set'], function(key){
	    var proto  = $WeakMap.prototype
	      , method = proto[key];
	    redefine(proto, key, function(a, b){
	      // store frozen objects on internal weakmap shim
	      if(isObject(a) && !isExtensible(a)){
	        if(!this._f)this._f = new InternalMap;
	        var result = this._f[key](a, b);
	        return key == 'set' ? this : result;
	      // store all the rest on native weakmap
	      } return method.call(this, a, b);
	    });
	  });
	}

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(62)('asyncIterator');

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(62)('observable');

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {/*!
	 * @description Recursive object extending
	 * @author Viacheslav Lotsmanov <lotsmanov89@gmail.com>
	 * @license MIT
	 *
	 * The MIT License (MIT)
	 *
	 * Copyright (c) 2013-2015 Viacheslav Lotsmanov
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining a copy of
	 * this software and associated documentation files (the "Software"), to deal in
	 * the Software without restriction, including without limitation the rights to
	 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
	 * the Software, and to permit persons to whom the Software is furnished to do so,
	 * subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included in all
	 * copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
	 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
	 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
	 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
	 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	 */

	'use strict';

	function isSpecificValue(val) {
		return (
			val instanceof Buffer
			|| val instanceof Date
			|| val instanceof RegExp
		) ? true : false;
	}

	function cloneSpecificValue(val) {
		if (val instanceof Buffer) {
			var x = new Buffer(val.length);
			val.copy(x);
			return x;
		} else if (val instanceof Date) {
			return new Date(val.getTime());
		} else if (val instanceof RegExp) {
			return new RegExp(val);
		} else {
			throw new Error('Unexpected situation');
		}
	}

	/**
	 * Recursive cloning array.
	 */
	function deepCloneArray(arr) {
		var clone = [];
		arr.forEach(function (item, index) {
			if (typeof item === 'object' && item !== null) {
				if (Array.isArray(item)) {
					clone[index] = deepCloneArray(item);
				} else if (isSpecificValue(item)) {
					clone[index] = cloneSpecificValue(item);
				} else {
					clone[index] = deepExtend({}, item);
				}
			} else {
				clone[index] = item;
			}
		});
		return clone;
	}

	/**
	 * Extening object that entered in first argument.
	 *
	 * Returns extended object or false if have no target object or incorrect type.
	 *
	 * If you wish to clone source object (without modify it), just use empty new
	 * object as first argument, like this:
	 *   deepExtend({}, yourObj_1, [yourObj_N]);
	 */
	var deepExtend = module.exports = function (/*obj_1, [obj_2], [obj_N]*/) {
		if (arguments.length < 1 || typeof arguments[0] !== 'object') {
			return false;
		}

		if (arguments.length < 2) {
			return arguments[0];
		}

		var target = arguments[0];

		// convert arguments to array and cut off target object
		var args = Array.prototype.slice.call(arguments, 1);

		var val, src, clone;

		args.forEach(function (obj) {
			// skip argument if isn't an object, is null, or is an array
			if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
				return;
			}

			Object.keys(obj).forEach(function (key) {
				src = target[key]; // source value
				val = obj[key]; // new value

				// recursion prevention
				if (val === target) {
					return;

				/**
				 * if new value isn't object then just overwrite by new value
				 * instead of extending.
				 */
				} else if (typeof val !== 'object' || val === null) {
					target[key] = val;
					return;

				// just clone arrays (and recursive clone objects inside)
				} else if (Array.isArray(val)) {
					target[key] = deepCloneArray(val);
					return;

				// custom cloning and overwrite for specific objects
				} else if (isSpecificValue(val)) {
					target[key] = cloneSpecificValue(val);
					return;

				// overwrite by new value if source isn't object or array
				} else if (typeof src !== 'object' || src === null || Array.isArray(src)) {
					target[key] = deepExtend({}, val);
					return;

				// source value and new value is objects both, extending...
				} else {
					target[key] = deepExtend(src, val);
					return;
				}
			});
		});

		return target;
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(44).Buffer))

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
	/* istanbul ignore next */
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define([], factory);
	/* istanbul ignore next */
		else if(typeof exports === 'object')
			exports["esprima"] = factory();
		else
			root["esprima"] = factory();
	})(this, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};

	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {

	/******/ 		// Check if module is in cache
	/* istanbul ignore if */
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;

	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};

	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;

	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}


	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;

	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;

	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";

	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {

		/*
		  Copyright JS Foundation and other contributors, https://js.foundation/

		  Redistribution and use in source and binary forms, with or without
		  modification, are permitted provided that the following conditions are met:

		    * Redistributions of source code must retain the above copyright
		      notice, this list of conditions and the following disclaimer.
		    * Redistributions in binary form must reproduce the above copyright
		      notice, this list of conditions and the following disclaimer in the
		      documentation and/or other materials provided with the distribution.

		  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
		  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
		  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
		  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
		  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
		  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
		  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
		  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
		  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
		  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
		*/
		"use strict";
		var comment_handler_1 = __webpack_require__(1);
		var parser_1 = __webpack_require__(3);
		var jsx_parser_1 = __webpack_require__(11);
		var tokenizer_1 = __webpack_require__(15);
		function parse(code, options, delegate) {
		    var commentHandler = null;
		    var proxyDelegate = function (node, metadata) {
		        if (delegate) {
		            delegate(node, metadata);
		        }
		        if (commentHandler) {
		            commentHandler.visit(node, metadata);
		        }
		    };
		    var parserDelegate = (typeof delegate === 'function') ? proxyDelegate : null;
		    var collectComment = false;
		    if (options) {
		        collectComment = (typeof options.comment === 'boolean' && options.comment);
		        var attachComment = (typeof options.attachComment === 'boolean' && options.attachComment);
		        if (collectComment || attachComment) {
		            commentHandler = new comment_handler_1.CommentHandler();
		            commentHandler.attach = attachComment;
		            options.comment = true;
		            parserDelegate = proxyDelegate;
		        }
		    }
		    var parser;
		    if (options && typeof options.jsx === 'boolean' && options.jsx) {
		        parser = new jsx_parser_1.JSXParser(code, options, parserDelegate);
		    }
		    else {
		        parser = new parser_1.Parser(code, options, parserDelegate);
		    }
		    var ast = (parser.parseProgram());
		    if (collectComment) {
		        ast.comments = commentHandler.comments;
		    }
		    if (parser.config.tokens) {
		        ast.tokens = parser.tokens;
		    }
		    if (parser.config.tolerant) {
		        ast.errors = parser.errorHandler.errors;
		    }
		    return ast;
		}
		exports.parse = parse;
		function tokenize(code, options, delegate) {
		    var tokenizer = new tokenizer_1.Tokenizer(code, options);
		    var tokens;
		    tokens = [];
		    try {
		        while (true) {
		            var token = tokenizer.getNextToken();
		            if (!token) {
		                break;
		            }
		            if (delegate) {
		                token = delegate(token);
		            }
		            tokens.push(token);
		        }
		    }
		    catch (e) {
		        tokenizer.errorHandler.tolerate(e);
		    }
		    if (tokenizer.errorHandler.tolerant) {
		        tokens.errors = tokenizer.errors();
		    }
		    return tokens;
		}
		exports.tokenize = tokenize;
		var syntax_1 = __webpack_require__(2);
		exports.Syntax = syntax_1.Syntax;
		// Sync with *.json manifests.
		exports.version = '3.1.3';


	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var syntax_1 = __webpack_require__(2);
		var CommentHandler = (function () {
		    function CommentHandler() {
		        this.attach = false;
		        this.comments = [];
		        this.stack = [];
		        this.leading = [];
		        this.trailing = [];
		    }
		    CommentHandler.prototype.insertInnerComments = function (node, metadata) {
		        //  innnerComments for properties empty block
		        //  `function a() {/** comments **\/}`
		        if (node.type === syntax_1.Syntax.BlockStatement && node.body.length === 0) {
		            var innerComments = [];
		            for (var i = this.leading.length - 1; i >= 0; --i) {
		                var entry = this.leading[i];
		                if (metadata.end.offset >= entry.start) {
		                    innerComments.unshift(entry.comment);
		                    this.leading.splice(i, 1);
		                    this.trailing.splice(i, 1);
		                }
		            }
		            if (innerComments.length) {
		                node.innerComments = innerComments;
		            }
		        }
		    };
		    CommentHandler.prototype.findTrailingComments = function (node, metadata) {
		        var trailingComments = [];
		        if (this.trailing.length > 0) {
		            for (var i = this.trailing.length - 1; i >= 0; --i) {
		                var entry_1 = this.trailing[i];
		                if (entry_1.start >= metadata.end.offset) {
		                    trailingComments.unshift(entry_1.comment);
		                }
		            }
		            this.trailing.length = 0;
		            return trailingComments;
		        }
		        var entry = this.stack[this.stack.length - 1];
		        if (entry && entry.node.trailingComments) {
		            var firstComment = entry.node.trailingComments[0];
		            if (firstComment && firstComment.range[0] >= metadata.end.offset) {
		                trailingComments = entry.node.trailingComments;
		                delete entry.node.trailingComments;
		            }
		        }
		        return trailingComments;
		    };
		    CommentHandler.prototype.findLeadingComments = function (node, metadata) {
		        var leadingComments = [];
		        var target;
		        while (this.stack.length > 0) {
		            var entry = this.stack[this.stack.length - 1];
		            if (entry && entry.start >= metadata.start.offset) {
		                target = this.stack.pop().node;
		            }
		            else {
		                break;
		            }
		        }
		        if (target) {
		            var count = target.leadingComments ? target.leadingComments.length : 0;
		            for (var i = count - 1; i >= 0; --i) {
		                var comment = target.leadingComments[i];
		                if (comment.range[1] <= metadata.start.offset) {
		                    leadingComments.unshift(comment);
		                    target.leadingComments.splice(i, 1);
		                }
		            }
		            if (target.leadingComments && target.leadingComments.length === 0) {
		                delete target.leadingComments;
		            }
		            return leadingComments;
		        }
		        for (var i = this.leading.length - 1; i >= 0; --i) {
		            var entry = this.leading[i];
		            if (entry.start <= metadata.start.offset) {
		                leadingComments.unshift(entry.comment);
		                this.leading.splice(i, 1);
		            }
		        }
		        return leadingComments;
		    };
		    CommentHandler.prototype.visitNode = function (node, metadata) {
		        if (node.type === syntax_1.Syntax.Program && node.body.length > 0) {
		            return;
		        }
		        this.insertInnerComments(node, metadata);
		        var trailingComments = this.findTrailingComments(node, metadata);
		        var leadingComments = this.findLeadingComments(node, metadata);
		        if (leadingComments.length > 0) {
		            node.leadingComments = leadingComments;
		        }
		        if (trailingComments.length > 0) {
		            node.trailingComments = trailingComments;
		        }
		        this.stack.push({
		            node: node,
		            start: metadata.start.offset
		        });
		    };
		    CommentHandler.prototype.visitComment = function (node, metadata) {
		        var type = (node.type[0] === 'L') ? 'Line' : 'Block';
		        var comment = {
		            type: type,
		            value: node.value
		        };
		        if (node.range) {
		            comment.range = node.range;
		        }
		        if (node.loc) {
		            comment.loc = node.loc;
		        }
		        this.comments.push(comment);
		        if (this.attach) {
		            var entry = {
		                comment: {
		                    type: type,
		                    value: node.value,
		                    range: [metadata.start.offset, metadata.end.offset]
		                },
		                start: metadata.start.offset
		            };
		            if (node.loc) {
		                entry.comment.loc = node.loc;
		            }
		            node.type = type;
		            this.leading.push(entry);
		            this.trailing.push(entry);
		        }
		    };
		    CommentHandler.prototype.visit = function (node, metadata) {
		        if (node.type === 'LineComment') {
		            this.visitComment(node, metadata);
		        }
		        else if (node.type === 'BlockComment') {
		            this.visitComment(node, metadata);
		        }
		        else if (this.attach) {
		            this.visitNode(node, metadata);
		        }
		    };
		    return CommentHandler;
		}());
		exports.CommentHandler = CommentHandler;


	/***/ },
	/* 2 */
	/***/ function(module, exports) {

		"use strict";
		exports.Syntax = {
		    AssignmentExpression: 'AssignmentExpression',
		    AssignmentPattern: 'AssignmentPattern',
		    ArrayExpression: 'ArrayExpression',
		    ArrayPattern: 'ArrayPattern',
		    ArrowFunctionExpression: 'ArrowFunctionExpression',
		    BlockStatement: 'BlockStatement',
		    BinaryExpression: 'BinaryExpression',
		    BreakStatement: 'BreakStatement',
		    CallExpression: 'CallExpression',
		    CatchClause: 'CatchClause',
		    ClassBody: 'ClassBody',
		    ClassDeclaration: 'ClassDeclaration',
		    ClassExpression: 'ClassExpression',
		    ConditionalExpression: 'ConditionalExpression',
		    ContinueStatement: 'ContinueStatement',
		    DoWhileStatement: 'DoWhileStatement',
		    DebuggerStatement: 'DebuggerStatement',
		    EmptyStatement: 'EmptyStatement',
		    ExportAllDeclaration: 'ExportAllDeclaration',
		    ExportDefaultDeclaration: 'ExportDefaultDeclaration',
		    ExportNamedDeclaration: 'ExportNamedDeclaration',
		    ExportSpecifier: 'ExportSpecifier',
		    ExpressionStatement: 'ExpressionStatement',
		    ForStatement: 'ForStatement',
		    ForOfStatement: 'ForOfStatement',
		    ForInStatement: 'ForInStatement',
		    FunctionDeclaration: 'FunctionDeclaration',
		    FunctionExpression: 'FunctionExpression',
		    Identifier: 'Identifier',
		    IfStatement: 'IfStatement',
		    ImportDeclaration: 'ImportDeclaration',
		    ImportDefaultSpecifier: 'ImportDefaultSpecifier',
		    ImportNamespaceSpecifier: 'ImportNamespaceSpecifier',
		    ImportSpecifier: 'ImportSpecifier',
		    Literal: 'Literal',
		    LabeledStatement: 'LabeledStatement',
		    LogicalExpression: 'LogicalExpression',
		    MemberExpression: 'MemberExpression',
		    MetaProperty: 'MetaProperty',
		    MethodDefinition: 'MethodDefinition',
		    NewExpression: 'NewExpression',
		    ObjectExpression: 'ObjectExpression',
		    ObjectPattern: 'ObjectPattern',
		    Program: 'Program',
		    Property: 'Property',
		    RestElement: 'RestElement',
		    ReturnStatement: 'ReturnStatement',
		    SequenceExpression: 'SequenceExpression',
		    SpreadElement: 'SpreadElement',
		    Super: 'Super',
		    SwitchCase: 'SwitchCase',
		    SwitchStatement: 'SwitchStatement',
		    TaggedTemplateExpression: 'TaggedTemplateExpression',
		    TemplateElement: 'TemplateElement',
		    TemplateLiteral: 'TemplateLiteral',
		    ThisExpression: 'ThisExpression',
		    ThrowStatement: 'ThrowStatement',
		    TryStatement: 'TryStatement',
		    UnaryExpression: 'UnaryExpression',
		    UpdateExpression: 'UpdateExpression',
		    VariableDeclaration: 'VariableDeclaration',
		    VariableDeclarator: 'VariableDeclarator',
		    WhileStatement: 'WhileStatement',
		    WithStatement: 'WithStatement',
		    YieldExpression: 'YieldExpression'
		};


	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var assert_1 = __webpack_require__(4);
		var messages_1 = __webpack_require__(5);
		var error_handler_1 = __webpack_require__(6);
		var token_1 = __webpack_require__(7);
		var scanner_1 = __webpack_require__(8);
		var syntax_1 = __webpack_require__(2);
		var Node = __webpack_require__(10);
		var ArrowParameterPlaceHolder = 'ArrowParameterPlaceHolder';
		var Parser = (function () {
		    function Parser(code, options, delegate) {
		        if (options === void 0) { options = {}; }
		        this.config = {
		            range: (typeof options.range === 'boolean') && options.range,
		            loc: (typeof options.loc === 'boolean') && options.loc,
		            source: null,
		            tokens: (typeof options.tokens === 'boolean') && options.tokens,
		            comment: (typeof options.comment === 'boolean') && options.comment,
		            tolerant: (typeof options.tolerant === 'boolean') && options.tolerant
		        };
		        if (this.config.loc && options.source && options.source !== null) {
		            this.config.source = String(options.source);
		        }
		        this.delegate = delegate;
		        this.errorHandler = new error_handler_1.ErrorHandler();
		        this.errorHandler.tolerant = this.config.tolerant;
		        this.scanner = new scanner_1.Scanner(code, this.errorHandler);
		        this.scanner.trackComment = this.config.comment;
		        this.operatorPrecedence = {
		            ')': 0,
		            ';': 0,
		            ',': 0,
		            '=': 0,
		            ']': 0,
		            '||': 1,
		            '&&': 2,
		            '|': 3,
		            '^': 4,
		            '&': 5,
		            '==': 6,
		            '!=': 6,
		            '===': 6,
		            '!==': 6,
		            '<': 7,
		            '>': 7,
		            '<=': 7,
		            '>=': 7,
		            '<<': 8,
		            '>>': 8,
		            '>>>': 8,
		            '+': 9,
		            '-': 9,
		            '*': 11,
		            '/': 11,
		            '%': 11
		        };
		        this.sourceType = (options && options.sourceType === 'module') ? 'module' : 'script';
		        this.lookahead = null;
		        this.hasLineTerminator = false;
		        this.context = {
		            allowIn: true,
		            allowYield: true,
		            firstCoverInitializedNameError: null,
		            isAssignmentTarget: false,
		            isBindingElement: false,
		            inFunctionBody: false,
		            inIteration: false,
		            inSwitch: false,
		            labelSet: {},
		            strict: (this.sourceType === 'module')
		        };
		        this.tokens = [];
		        this.startMarker = {
		            index: 0,
		            lineNumber: this.scanner.lineNumber,
		            lineStart: 0
		        };
		        this.lastMarker = {
		            index: 0,
		            lineNumber: this.scanner.lineNumber,
		            lineStart: 0
		        };
		        this.nextToken();
		        this.lastMarker = {
		            index: this.scanner.index,
		            lineNumber: this.scanner.lineNumber,
		            lineStart: this.scanner.lineStart
		        };
		    }
		    Parser.prototype.throwError = function (messageFormat) {
		        var values = [];
		        for (var _i = 1; _i < arguments.length; _i++) {
		            values[_i - 1] = arguments[_i];
		        }
		        var args = Array.prototype.slice.call(arguments, 1);
		        var msg = messageFormat.replace(/%(\d)/g, function (whole, idx) {
		            assert_1.assert(idx < args.length, 'Message reference must be in range');
		            return args[idx];
		        });
		        var index = this.lastMarker.index;
		        var line = this.lastMarker.lineNumber;
		        var column = this.lastMarker.index - this.lastMarker.lineStart + 1;
		        throw this.errorHandler.createError(index, line, column, msg);
		    };
		    Parser.prototype.tolerateError = function (messageFormat) {
		        var values = [];
		        for (var _i = 1; _i < arguments.length; _i++) {
		            values[_i - 1] = arguments[_i];
		        }
		        var args = Array.prototype.slice.call(arguments, 1);
		        var msg = messageFormat.replace(/%(\d)/g, function (whole, idx) {
		            assert_1.assert(idx < args.length, 'Message reference must be in range');
		            return args[idx];
		        });
		        var index = this.lastMarker.index;
		        var line = this.scanner.lineNumber;
		        var column = this.lastMarker.index - this.lastMarker.lineStart + 1;
		        this.errorHandler.tolerateError(index, line, column, msg);
		    };
		    // Throw an exception because of the token.
		    Parser.prototype.unexpectedTokenError = function (token, message) {
		        var msg = message || messages_1.Messages.UnexpectedToken;
		        var value;
		        if (token) {
		            if (!message) {
		                msg = (token.type === token_1.Token.EOF) ? messages_1.Messages.UnexpectedEOS :
		                    (token.type === token_1.Token.Identifier) ? messages_1.Messages.UnexpectedIdentifier :
		                        (token.type === token_1.Token.NumericLiteral) ? messages_1.Messages.UnexpectedNumber :
		                            (token.type === token_1.Token.StringLiteral) ? messages_1.Messages.UnexpectedString :
		                                (token.type === token_1.Token.Template) ? messages_1.Messages.UnexpectedTemplate :
		                                    messages_1.Messages.UnexpectedToken;
		                if (token.type === token_1.Token.Keyword) {
		                    if (this.scanner.isFutureReservedWord(token.value)) {
		                        msg = messages_1.Messages.UnexpectedReserved;
		                    }
		                    else if (this.context.strict && this.scanner.isStrictModeReservedWord(token.value)) {
		                        msg = messages_1.Messages.StrictReservedWord;
		                    }
		                }
		            }
		            value = (token.type === token_1.Token.Template) ? token.value.raw : token.value;
		        }
		        else {
		            value = 'ILLEGAL';
		        }
		        msg = msg.replace('%0', value);
		        if (token && typeof token.lineNumber === 'number') {
		            var index = token.start;
		            var line = token.lineNumber;
		            var column = token.start - this.lastMarker.lineStart + 1;
		            return this.errorHandler.createError(index, line, column, msg);
		        }
		        else {
		            var index = this.lastMarker.index;
		            var line = this.lastMarker.lineNumber;
		            var column = index - this.lastMarker.lineStart + 1;
		            return this.errorHandler.createError(index, line, column, msg);
		        }
		    };
		    Parser.prototype.throwUnexpectedToken = function (token, message) {
		        throw this.unexpectedTokenError(token, message);
		    };
		    Parser.prototype.tolerateUnexpectedToken = function (token, message) {
		        this.errorHandler.tolerate(this.unexpectedTokenError(token, message));
		    };
		    Parser.prototype.collectComments = function () {
		        if (!this.config.comment) {
		            this.scanner.scanComments();
		        }
		        else {
		            var comments = this.scanner.scanComments();
		            if (comments.length > 0 && this.delegate) {
		                for (var i = 0; i < comments.length; ++i) {
		                    var e = comments[i];
		                    var node = void 0;
		                    node = {
		                        type: e.multiLine ? 'BlockComment' : 'LineComment',
		                        value: this.scanner.source.slice(e.slice[0], e.slice[1])
		                    };
		                    if (this.config.range) {
		                        node.range = e.range;
		                    }
		                    if (this.config.loc) {
		                        node.loc = e.loc;
		                    }
		                    var metadata = {
		                        start: {
		                            line: e.loc.start.line,
		                            column: e.loc.start.column,
		                            offset: e.range[0]
		                        },
		                        end: {
		                            line: e.loc.end.line,
		                            column: e.loc.end.column,
		                            offset: e.range[1]
		                        }
		                    };
		                    this.delegate(node, metadata);
		                }
		            }
		        }
		    };
		    // From internal representation to an external structure
		    Parser.prototype.getTokenRaw = function (token) {
		        return this.scanner.source.slice(token.start, token.end);
		    };
		    Parser.prototype.convertToken = function (token) {
		        var t;
		        t = {
		            type: token_1.TokenName[token.type],
		            value: this.getTokenRaw(token)
		        };
		        if (this.config.range) {
		            t.range = [token.start, token.end];
		        }
		        if (this.config.loc) {
		            t.loc = {
		                start: {
		                    line: this.startMarker.lineNumber,
		                    column: this.startMarker.index - this.startMarker.lineStart
		                },
		                end: {
		                    line: this.scanner.lineNumber,
		                    column: this.scanner.index - this.scanner.lineStart
		                }
		            };
		        }
		        if (token.regex) {
		            t.regex = token.regex;
		        }
		        return t;
		    };
		    Parser.prototype.nextToken = function () {
		        var token = this.lookahead;
		        this.lastMarker.index = this.scanner.index;
		        this.lastMarker.lineNumber = this.scanner.lineNumber;
		        this.lastMarker.lineStart = this.scanner.lineStart;
		        this.collectComments();
		        this.startMarker.index = this.scanner.index;
		        this.startMarker.lineNumber = this.scanner.lineNumber;
		        this.startMarker.lineStart = this.scanner.lineStart;
		        var next;
		        next = this.scanner.lex();
		        this.hasLineTerminator = (token && next) ? (token.lineNumber !== next.lineNumber) : false;
		        if (next && this.context.strict && next.type === token_1.Token.Identifier) {
		            if (this.scanner.isStrictModeReservedWord(next.value)) {
		                next.type = token_1.Token.Keyword;
		            }
		        }
		        this.lookahead = next;
		        if (this.config.tokens && next.type !== token_1.Token.EOF) {
		            this.tokens.push(this.convertToken(next));
		        }
		        return token;
		    };
		    Parser.prototype.nextRegexToken = function () {
		        this.collectComments();
		        var token = this.scanner.scanRegExp();
		        if (this.config.tokens) {
		            // Pop the previous token, '/' or '/='
		            // This is added from the lookahead token.
		            this.tokens.pop();
		            this.tokens.push(this.convertToken(token));
		        }
		        // Prime the next lookahead.
		        this.lookahead = token;
		        this.nextToken();
		        return token;
		    };
		    Parser.prototype.createNode = function () {
		        return {
		            index: this.startMarker.index,
		            line: this.startMarker.lineNumber,
		            column: this.startMarker.index - this.startMarker.lineStart
		        };
		    };
		    Parser.prototype.startNode = function (token) {
		        return {
		            index: token.start,
		            line: token.lineNumber,
		            column: token.start - token.lineStart
		        };
		    };
		    Parser.prototype.finalize = function (meta, node) {
		        if (this.config.range) {
		            node.range = [meta.index, this.lastMarker.index];
		        }
		        if (this.config.loc) {
		            node.loc = {
		                start: {
		                    line: meta.line,
		                    column: meta.column
		                },
		                end: {
		                    line: this.lastMarker.lineNumber,
		                    column: this.lastMarker.index - this.lastMarker.lineStart
		                }
		            };
		            if (this.config.source) {
		                node.loc.source = this.config.source;
		            }
		        }
		        if (this.delegate) {
		            var metadata = {
		                start: {
		                    line: meta.line,
		                    column: meta.column,
		                    offset: meta.index
		                },
		                end: {
		                    line: this.lastMarker.lineNumber,
		                    column: this.lastMarker.index - this.lastMarker.lineStart,
		                    offset: this.lastMarker.index
		                }
		            };
		            this.delegate(node, metadata);
		        }
		        return node;
		    };
		    // Expect the next token to match the specified punctuator.
		    // If not, an exception will be thrown.
		    Parser.prototype.expect = function (value) {
		        var token = this.nextToken();
		        if (token.type !== token_1.Token.Punctuator || token.value !== value) {
		            this.throwUnexpectedToken(token);
		        }
		    };
		    // Quietly expect a comma when in tolerant mode, otherwise delegates to expect().
		    Parser.prototype.expectCommaSeparator = function () {
		        if (this.config.tolerant) {
		            var token = this.lookahead;
		            if (token.type === token_1.Token.Punctuator && token.value === ',') {
		                this.nextToken();
		            }
		            else if (token.type === token_1.Token.Punctuator && token.value === ';') {
		                this.nextToken();
		                this.tolerateUnexpectedToken(token);
		            }
		            else {
		                this.tolerateUnexpectedToken(token, messages_1.Messages.UnexpectedToken);
		            }
		        }
		        else {
		            this.expect(',');
		        }
		    };
		    // Expect the next token to match the specified keyword.
		    // If not, an exception will be thrown.
		    Parser.prototype.expectKeyword = function (keyword) {
		        var token = this.nextToken();
		        if (token.type !== token_1.Token.Keyword || token.value !== keyword) {
		            this.throwUnexpectedToken(token);
		        }
		    };
		    // Return true if the next token matches the specified punctuator.
		    Parser.prototype.match = function (value) {
		        return this.lookahead.type === token_1.Token.Punctuator && this.lookahead.value === value;
		    };
		    // Return true if the next token matches the specified keyword
		    Parser.prototype.matchKeyword = function (keyword) {
		        return this.lookahead.type === token_1.Token.Keyword && this.lookahead.value === keyword;
		    };
		    // Return true if the next token matches the specified contextual keyword
		    // (where an identifier is sometimes a keyword depending on the context)
		    Parser.prototype.matchContextualKeyword = function (keyword) {
		        return this.lookahead.type === token_1.Token.Identifier && this.lookahead.value === keyword;
		    };
		    // Return true if the next token is an assignment operator
		    Parser.prototype.matchAssign = function () {
		        if (this.lookahead.type !== token_1.Token.Punctuator) {
		            return false;
		        }
		        var op = this.lookahead.value;
		        return op === '=' ||
		            op === '*=' ||
		            op === '**=' ||
		            op === '/=' ||
		            op === '%=' ||
		            op === '+=' ||
		            op === '-=' ||
		            op === '<<=' ||
		            op === '>>=' ||
		            op === '>>>=' ||
		            op === '&=' ||
		            op === '^=' ||
		            op === '|=';
		    };
		    // Cover grammar support.
		    //
		    // When an assignment expression position starts with an left parenthesis, the determination of the type
		    // of the syntax is to be deferred arbitrarily long until the end of the parentheses pair (plus a lookahead)
		    // or the first comma. This situation also defers the determination of all the expressions nested in the pair.
		    //
		    // There are three productions that can be parsed in a parentheses pair that needs to be determined
		    // after the outermost pair is closed. They are:
		    //
		    //   1. AssignmentExpression
		    //   2. BindingElements
		    //   3. AssignmentTargets
		    //
		    // In order to avoid exponential backtracking, we use two flags to denote if the production can be
		    // binding element or assignment target.
		    //
		    // The three productions have the relationship:
		    //
		    //   BindingElements ⊆ AssignmentTargets ⊆ AssignmentExpression
		    //
		    // with a single exception that CoverInitializedName when used directly in an Expression, generates
		    // an early error. Therefore, we need the third state, firstCoverInitializedNameError, to track the
		    // first usage of CoverInitializedName and report it when we reached the end of the parentheses pair.
		    //
		    // isolateCoverGrammar function runs the given parser function with a new cover grammar context, and it does not
		    // effect the current flags. This means the production the parser parses is only used as an expression. Therefore
		    // the CoverInitializedName check is conducted.
		    //
		    // inheritCoverGrammar function runs the given parse function with a new cover grammar context, and it propagates
		    // the flags outside of the parser. This means the production the parser parses is used as a part of a potential
		    // pattern. The CoverInitializedName check is deferred.
		    Parser.prototype.isolateCoverGrammar = function (parseFunction) {
		        var previousIsBindingElement = this.context.isBindingElement;
		        var previousIsAssignmentTarget = this.context.isAssignmentTarget;
		        var previousFirstCoverInitializedNameError = this.context.firstCoverInitializedNameError;
		        this.context.isBindingElement = true;
		        this.context.isAssignmentTarget = true;
		        this.context.firstCoverInitializedNameError = null;
		        var result = parseFunction.call(this);
		        if (this.context.firstCoverInitializedNameError !== null) {
		            this.throwUnexpectedToken(this.context.firstCoverInitializedNameError);
		        }
		        this.context.isBindingElement = previousIsBindingElement;
		        this.context.isAssignmentTarget = previousIsAssignmentTarget;
		        this.context.firstCoverInitializedNameError = previousFirstCoverInitializedNameError;
		        return result;
		    };
		    Parser.prototype.inheritCoverGrammar = function (parseFunction) {
		        var previousIsBindingElement = this.context.isBindingElement;
		        var previousIsAssignmentTarget = this.context.isAssignmentTarget;
		        var previousFirstCoverInitializedNameError = this.context.firstCoverInitializedNameError;
		        this.context.isBindingElement = true;
		        this.context.isAssignmentTarget = true;
		        this.context.firstCoverInitializedNameError = null;
		        var result = parseFunction.call(this);
		        this.context.isBindingElement = this.context.isBindingElement && previousIsBindingElement;
		        this.context.isAssignmentTarget = this.context.isAssignmentTarget && previousIsAssignmentTarget;
		        this.context.firstCoverInitializedNameError = previousFirstCoverInitializedNameError || this.context.firstCoverInitializedNameError;
		        return result;
		    };
		    Parser.prototype.consumeSemicolon = function () {
		        if (this.match(';')) {
		            this.nextToken();
		        }
		        else if (!this.hasLineTerminator) {
		            if (this.lookahead.type !== token_1.Token.EOF && !this.match('}')) {
		                this.throwUnexpectedToken(this.lookahead);
		            }
		            this.lastMarker.index = this.startMarker.index;
		            this.lastMarker.lineNumber = this.startMarker.lineNumber;
		            this.lastMarker.lineStart = this.startMarker.lineStart;
		        }
		    };
		    // ECMA-262 12.2 Primary Expressions
		    Parser.prototype.parsePrimaryExpression = function () {
		        var node = this.createNode();
		        var expr;
		        var value, token, raw;
		        switch (this.lookahead.type) {
		            case token_1.Token.Identifier:
		                if (this.sourceType === 'module' && this.lookahead.value === 'await') {
		                    this.tolerateUnexpectedToken(this.lookahead);
		                }
		                expr = this.finalize(node, new Node.Identifier(this.nextToken().value));
		                break;
		            case token_1.Token.NumericLiteral:
		            case token_1.Token.StringLiteral:
		                if (this.context.strict && this.lookahead.octal) {
		                    this.tolerateUnexpectedToken(this.lookahead, messages_1.Messages.StrictOctalLiteral);
		                }
		                this.context.isAssignmentTarget = false;
		                this.context.isBindingElement = false;
		                token = this.nextToken();
		                raw = this.getTokenRaw(token);
		                expr = this.finalize(node, new Node.Literal(token.value, raw));
		                break;
		            case token_1.Token.BooleanLiteral:
		                this.context.isAssignmentTarget = false;
		                this.context.isBindingElement = false;
		                token = this.nextToken();
		                token.value = (token.value === 'true');
		                raw = this.getTokenRaw(token);
		                expr = this.finalize(node, new Node.Literal(token.value, raw));
		                break;
		            case token_1.Token.NullLiteral:
		                this.context.isAssignmentTarget = false;
		                this.context.isBindingElement = false;
		                token = this.nextToken();
		                token.value = null;
		                raw = this.getTokenRaw(token);
		                expr = this.finalize(node, new Node.Literal(token.value, raw));
		                break;
		            case token_1.Token.Template:
		                expr = this.parseTemplateLiteral();
		                break;
		            case token_1.Token.Punctuator:
		                value = this.lookahead.value;
		                switch (value) {
		                    case '(':
		                        this.context.isBindingElement = false;
		                        expr = this.inheritCoverGrammar(this.parseGroupExpression);
		                        break;
		                    case '[':
		                        expr = this.inheritCoverGrammar(this.parseArrayInitializer);
		                        break;
		                    case '{':
		                        expr = this.inheritCoverGrammar(this.parseObjectInitializer);
		                        break;
		                    case '/':
		                    case '/=':
		                        this.context.isAssignmentTarget = false;
		                        this.context.isBindingElement = false;
		                        this.scanner.index = this.startMarker.index;
		                        token = this.nextRegexToken();
		                        raw = this.getTokenRaw(token);
		                        expr = this.finalize(node, new Node.RegexLiteral(token.value, raw, token.regex));
		                        break;
		                    default:
		                        this.throwUnexpectedToken(this.nextToken());
		                }
		                break;
		            case token_1.Token.Keyword:
		                if (!this.context.strict && this.context.allowYield && this.matchKeyword('yield')) {
		                    expr = this.parseIdentifierName();
		                }
		                else if (!this.context.strict && this.matchKeyword('let')) {
		                    expr = this.finalize(node, new Node.Identifier(this.nextToken().value));
		                }
		                else {
		                    this.context.isAssignmentTarget = false;
		                    this.context.isBindingElement = false;
		                    if (this.matchKeyword('function')) {
		                        expr = this.parseFunctionExpression();
		                    }
		                    else if (this.matchKeyword('this')) {
		                        this.nextToken();
		                        expr = this.finalize(node, new Node.ThisExpression());
		                    }
		                    else if (this.matchKeyword('class')) {
		                        expr = this.parseClassExpression();
		                    }
		                    else {
		                        this.throwUnexpectedToken(this.nextToken());
		                    }
		                }
		                break;
		            default:
		                this.throwUnexpectedToken(this.nextToken());
		        }
		        return expr;
		    };
		    // ECMA-262 12.2.5 Array Initializer
		    Parser.prototype.parseSpreadElement = function () {
		        var node = this.createNode();
		        this.expect('...');
		        var arg = this.inheritCoverGrammar(this.parseAssignmentExpression);
		        return this.finalize(node, new Node.SpreadElement(arg));
		    };
		    Parser.prototype.parseArrayInitializer = function () {
		        var node = this.createNode();
		        var elements = [];
		        this.expect('[');
		        while (!this.match(']')) {
		            if (this.match(',')) {
		                this.nextToken();
		                elements.push(null);
		            }
		            else if (this.match('...')) {
		                var element = this.parseSpreadElement();
		                if (!this.match(']')) {
		                    this.context.isAssignmentTarget = false;
		                    this.context.isBindingElement = false;
		                    this.expect(',');
		                }
		                elements.push(element);
		            }
		            else {
		                elements.push(this.inheritCoverGrammar(this.parseAssignmentExpression));
		                if (!this.match(']')) {
		                    this.expect(',');
		                }
		            }
		        }
		        this.expect(']');
		        return this.finalize(node, new Node.ArrayExpression(elements));
		    };
		    // ECMA-262 12.2.6 Object Initializer
		    Parser.prototype.parsePropertyMethod = function (params) {
		        this.context.isAssignmentTarget = false;
		        this.context.isBindingElement = false;
		        var previousStrict = this.context.strict;
		        var body = this.isolateCoverGrammar(this.parseFunctionSourceElements);
		        if (this.context.strict && params.firstRestricted) {
		            this.tolerateUnexpectedToken(params.firstRestricted, params.message);
		        }
		        if (this.context.strict && params.stricted) {
		            this.tolerateUnexpectedToken(params.stricted, params.message);
		        }
		        this.context.strict = previousStrict;
		        return body;
		    };
		    Parser.prototype.parsePropertyMethodFunction = function () {
		        var isGenerator = false;
		        var node = this.createNode();
		        var previousAllowYield = this.context.allowYield;
		        this.context.allowYield = false;
		        var params = this.parseFormalParameters();
		        var method = this.parsePropertyMethod(params);
		        this.context.allowYield = previousAllowYield;
		        return this.finalize(node, new Node.FunctionExpression(null, params.params, method, isGenerator));
		    };
		    Parser.prototype.parseObjectPropertyKey = function () {
		        var node = this.createNode();
		        var token = this.nextToken();
		        var key = null;
		        switch (token.type) {
		            case token_1.Token.StringLiteral:
		            case token_1.Token.NumericLiteral:
		                if (this.context.strict && token.octal) {
		                    this.tolerateUnexpectedToken(token, messages_1.Messages.StrictOctalLiteral);
		                }
		                var raw = this.getTokenRaw(token);
		                key = this.finalize(node, new Node.Literal(token.value, raw));
		                break;
		            case token_1.Token.Identifier:
		            case token_1.Token.BooleanLiteral:
		            case token_1.Token.NullLiteral:
		            case token_1.Token.Keyword:
		                key = this.finalize(node, new Node.Identifier(token.value));
		                break;
		            case token_1.Token.Punctuator:
		                if (token.value === '[') {
		                    key = this.isolateCoverGrammar(this.parseAssignmentExpression);
		                    this.expect(']');
		                }
		                else {
		                    this.throwUnexpectedToken(token);
		                }
		                break;
		            default:
		                this.throwUnexpectedToken(token);
		        }
		        return key;
		    };
		    Parser.prototype.isPropertyKey = function (key, value) {
		        return (key.type === syntax_1.Syntax.Identifier && key.name === value) ||
		            (key.type === syntax_1.Syntax.Literal && key.value === value);
		    };
		    Parser.prototype.parseObjectProperty = function (hasProto) {
		        var node = this.createNode();
		        var token = this.lookahead;
		        var kind;
		        var key;
		        var value;
		        var computed = false;
		        var method = false;
		        var shorthand = false;
		        if (token.type === token_1.Token.Identifier) {
		            this.nextToken();
		            key = this.finalize(node, new Node.Identifier(token.value));
		        }
		        else if (this.match('*')) {
		            this.nextToken();
		        }
		        else {
		            computed = this.match('[');
		            key = this.parseObjectPropertyKey();
		        }
		        var lookaheadPropertyKey = this.qualifiedPropertyName(this.lookahead);
		        if (token.type === token_1.Token.Identifier && token.value === 'get' && lookaheadPropertyKey) {
		            kind = 'get';
		            computed = this.match('[');
		            key = this.parseObjectPropertyKey();
		            this.context.allowYield = false;
		            value = this.parseGetterMethod();
		        }
		        else if (token.type === token_1.Token.Identifier && token.value === 'set' && lookaheadPropertyKey) {
		            kind = 'set';
		            computed = this.match('[');
		            key = this.parseObjectPropertyKey();
		            value = this.parseSetterMethod();
		        }
		        else if (token.type === token_1.Token.Punctuator && token.value === '*' && lookaheadPropertyKey) {
		            kind = 'init';
		            computed = this.match('[');
		            key = this.parseObjectPropertyKey();
		            value = this.parseGeneratorMethod();
		            method = true;
		        }
		        else {
		            if (!key) {
		                this.throwUnexpectedToken(this.lookahead);
		            }
		            kind = 'init';
		            if (this.match(':')) {
		                if (!computed && this.isPropertyKey(key, '__proto__')) {
		                    if (hasProto.value) {
		                        this.tolerateError(messages_1.Messages.DuplicateProtoProperty);
		                    }
		                    hasProto.value = true;
		                }
		                this.nextToken();
		                value = this.inheritCoverGrammar(this.parseAssignmentExpression);
		            }
		            else if (this.match('(')) {
		                value = this.parsePropertyMethodFunction();
		                method = true;
		            }
		            else if (token.type === token_1.Token.Identifier) {
		                var id = this.finalize(node, new Node.Identifier(token.value));
		                if (this.match('=')) {
		                    this.context.firstCoverInitializedNameError = this.lookahead;
		                    this.nextToken();
		                    shorthand = true;
		                    var init = this.isolateCoverGrammar(this.parseAssignmentExpression);
		                    value = this.finalize(node, new Node.AssignmentPattern(id, init));
		                }
		                else {
		                    shorthand = true;
		                    value = id;
		                }
		            }
		            else {
		                this.throwUnexpectedToken(this.nextToken());
		            }
		        }
		        return this.finalize(node, new Node.Property(kind, key, computed, value, method, shorthand));
		    };
		    Parser.prototype.parseObjectInitializer = function () {
		        var node = this.createNode();
		        this.expect('{');
		        var properties = [];
		        var hasProto = { value: false };
		        while (!this.match('}')) {
		            properties.push(this.parseObjectProperty(hasProto));
		            if (!this.match('}')) {
		                this.expectCommaSeparator();
		            }
		        }
		        this.expect('}');
		        return this.finalize(node, new Node.ObjectExpression(properties));
		    };
		    // ECMA-262 12.2.9 Template Literals
		    Parser.prototype.parseTemplateHead = function () {
		        assert_1.assert(this.lookahead.head, 'Template literal must start with a template head');
		        var node = this.createNode();
		        var token = this.nextToken();
		        var value = {
		            raw: token.value.raw,
		            cooked: token.value.cooked
		        };
		        return this.finalize(node, new Node.TemplateElement(value, token.tail));
		    };
		    Parser.prototype.parseTemplateElement = function () {
		        if (this.lookahead.type !== token_1.Token.Template) {
		            this.throwUnexpectedToken();
		        }
		        var node = this.createNode();
		        var token = this.nextToken();
		        var value = {
		            raw: token.value.raw,
		            cooked: token.value.cooked
		        };
		        return this.finalize(node, new Node.TemplateElement(value, token.tail));
		    };
		    Parser.prototype.parseTemplateLiteral = function () {
		        var node = this.createNode();
		        var expressions = [];
		        var quasis = [];
		        var quasi = this.parseTemplateHead();
		        quasis.push(quasi);
		        while (!quasi.tail) {
		            expressions.push(this.parseExpression());
		            quasi = this.parseTemplateElement();
		            quasis.push(quasi);
		        }
		        return this.finalize(node, new Node.TemplateLiteral(quasis, expressions));
		    };
		    // ECMA-262 12.2.10 The Grouping Operator
		    Parser.prototype.reinterpretExpressionAsPattern = function (expr) {
		        switch (expr.type) {
		            case syntax_1.Syntax.Identifier:
		            case syntax_1.Syntax.MemberExpression:
		            case syntax_1.Syntax.RestElement:
		            case syntax_1.Syntax.AssignmentPattern:
		                break;
		            case syntax_1.Syntax.SpreadElement:
		                expr.type = syntax_1.Syntax.RestElement;
		                this.reinterpretExpressionAsPattern(expr.argument);
		                break;
		            case syntax_1.Syntax.ArrayExpression:
		                expr.type = syntax_1.Syntax.ArrayPattern;
		                for (var i = 0; i < expr.elements.length; i++) {
		                    if (expr.elements[i] !== null) {
		                        this.reinterpretExpressionAsPattern(expr.elements[i]);
		                    }
		                }
		                break;
		            case syntax_1.Syntax.ObjectExpression:
		                expr.type = syntax_1.Syntax.ObjectPattern;
		                for (var i = 0; i < expr.properties.length; i++) {
		                    this.reinterpretExpressionAsPattern(expr.properties[i].value);
		                }
		                break;
		            case syntax_1.Syntax.AssignmentExpression:
		                expr.type = syntax_1.Syntax.AssignmentPattern;
		                delete expr.operator;
		                this.reinterpretExpressionAsPattern(expr.left);
		                break;
		            default:
		                // Allow other node type for tolerant parsing.
		                break;
		        }
		    };
		    Parser.prototype.parseGroupExpression = function () {
		        var expr;
		        this.expect('(');
		        if (this.match(')')) {
		            this.nextToken();
		            if (!this.match('=>')) {
		                this.expect('=>');
		            }
		            expr = {
		                type: ArrowParameterPlaceHolder,
		                params: []
		            };
		        }
		        else {
		            var startToken = this.lookahead;
		            var params = [];
		            if (this.match('...')) {
		                expr = this.parseRestElement(params);
		                this.expect(')');
		                if (!this.match('=>')) {
		                    this.expect('=>');
		                }
		                expr = {
		                    type: ArrowParameterPlaceHolder,
		                    params: [expr]
		                };
		            }
		            else {
		                var arrow = false;
		                this.context.isBindingElement = true;
		                expr = this.inheritCoverGrammar(this.parseAssignmentExpression);
		                if (this.match(',')) {
		                    var expressions = [];
		                    this.context.isAssignmentTarget = false;
		                    expressions.push(expr);
		                    while (this.startMarker.index < this.scanner.length) {
		                        if (!this.match(',')) {
		                            break;
		                        }
		                        this.nextToken();
		                        if (this.match('...')) {
		                            if (!this.context.isBindingElement) {
		                                this.throwUnexpectedToken(this.lookahead);
		                            }
		                            expressions.push(this.parseRestElement(params));
		                            this.expect(')');
		                            if (!this.match('=>')) {
		                                this.expect('=>');
		                            }
		                            this.context.isBindingElement = false;
		                            for (var i = 0; i < expressions.length; i++) {
		                                this.reinterpretExpressionAsPattern(expressions[i]);
		                            }
		                            arrow = true;
		                            expr = {
		                                type: ArrowParameterPlaceHolder,
		                                params: expressions
		                            };
		                        }
		                        else {
		                            expressions.push(this.inheritCoverGrammar(this.parseAssignmentExpression));
		                        }
		                        if (arrow) {
		                            break;
		                        }
		                    }
		                    if (!arrow) {
		                        expr = this.finalize(this.startNode(startToken), new Node.SequenceExpression(expressions));
		                    }
		                }
		                if (!arrow) {
		                    this.expect(')');
		                    if (this.match('=>')) {
		                        if (expr.type === syntax_1.Syntax.Identifier && expr.name === 'yield') {
		                            arrow = true;
		                            expr = {
		                                type: ArrowParameterPlaceHolder,
		                                params: [expr]
		                            };
		                        }
		                        if (!arrow) {
		                            if (!this.context.isBindingElement) {
		                                this.throwUnexpectedToken(this.lookahead);
		                            }
		                            if (expr.type === syntax_1.Syntax.SequenceExpression) {
		                                for (var i = 0; i < expr.expressions.length; i++) {
		                                    this.reinterpretExpressionAsPattern(expr.expressions[i]);
		                                }
		                            }
		                            else {
		                                this.reinterpretExpressionAsPattern(expr);
		                            }
		                            var params_1 = (expr.type === syntax_1.Syntax.SequenceExpression ? expr.expressions : [expr]);
		                            expr = {
		                                type: ArrowParameterPlaceHolder,
		                                params: params_1
		                            };
		                        }
		                    }
		                    this.context.isBindingElement = false;
		                }
		            }
		        }
		        return expr;
		    };
		    // ECMA-262 12.3 Left-Hand-Side Expressions
		    Parser.prototype.parseArguments = function () {
		        this.expect('(');
		        var args = [];
		        if (!this.match(')')) {
		            while (true) {
		                var expr = this.match('...') ? this.parseSpreadElement() :
		                    this.isolateCoverGrammar(this.parseAssignmentExpression);
		                args.push(expr);
		                if (this.match(')')) {
		                    break;
		                }
		                this.expectCommaSeparator();
		            }
		        }
		        this.expect(')');
		        return args;
		    };
		    Parser.prototype.isIdentifierName = function (token) {
		        return token.type === token_1.Token.Identifier ||
		            token.type === token_1.Token.Keyword ||
		            token.type === token_1.Token.BooleanLiteral ||
		            token.type === token_1.Token.NullLiteral;
		    };
		    Parser.prototype.parseIdentifierName = function () {
		        var node = this.createNode();
		        var token = this.nextToken();
		        if (!this.isIdentifierName(token)) {
		            this.throwUnexpectedToken(token);
		        }
		        return this.finalize(node, new Node.Identifier(token.value));
		    };
		    Parser.prototype.parseNewExpression = function () {
		        var node = this.createNode();
		        var id = this.parseIdentifierName();
		        assert_1.assert(id.name === 'new', 'New expression must start with `new`');
		        var expr;
		        if (this.match('.')) {
		            this.nextToken();
		            if (this.lookahead.type === token_1.Token.Identifier && this.context.inFunctionBody && this.lookahead.value === 'target') {
		                var property = this.parseIdentifierName();
		                expr = new Node.MetaProperty(id, property);
		            }
		            else {
		                this.throwUnexpectedToken(this.lookahead);
		            }
		        }
		        else {
		            var callee = this.isolateCoverGrammar(this.parseLeftHandSideExpression);
		            var args = this.match('(') ? this.parseArguments() : [];
		            expr = new Node.NewExpression(callee, args);
		            this.context.isAssignmentTarget = false;
		            this.context.isBindingElement = false;
		        }
		        return this.finalize(node, expr);
		    };
		    Parser.prototype.parseLeftHandSideExpressionAllowCall = function () {
		        var startToken = this.lookahead;
		        var previousAllowIn = this.context.allowIn;
		        this.context.allowIn = true;
		        var expr;
		        if (this.matchKeyword('super') && this.context.inFunctionBody) {
		            expr = this.createNode();
		            this.nextToken();
		            expr = this.finalize(expr, new Node.Super());
		            if (!this.match('(') && !this.match('.') && !this.match('[')) {
		                this.throwUnexpectedToken(this.lookahead);
		            }
		        }
		        else {
		            expr = this.inheritCoverGrammar(this.matchKeyword('new') ? this.parseNewExpression : this.parsePrimaryExpression);
		        }
		        while (true) {
		            if (this.match('.')) {
		                this.context.isBindingElement = false;
		                this.context.isAssignmentTarget = true;
		                this.expect('.');
		                var property = this.parseIdentifierName();
		                expr = this.finalize(this.startNode(startToken), new Node.StaticMemberExpression(expr, property));
		            }
		            else if (this.match('(')) {
		                this.context.isBindingElement = false;
		                this.context.isAssignmentTarget = false;
		                var args = this.parseArguments();
		                expr = this.finalize(this.startNode(startToken), new Node.CallExpression(expr, args));
		            }
		            else if (this.match('[')) {
		                this.context.isBindingElement = false;
		                this.context.isAssignmentTarget = true;
		                this.expect('[');
		                var property = this.isolateCoverGrammar(this.parseExpression);
		                this.expect(']');
		                expr = this.finalize(this.startNode(startToken), new Node.ComputedMemberExpression(expr, property));
		            }
		            else if (this.lookahead.type === token_1.Token.Template && this.lookahead.head) {
		                var quasi = this.parseTemplateLiteral();
		                expr = this.finalize(this.startNode(startToken), new Node.TaggedTemplateExpression(expr, quasi));
		            }
		            else {
		                break;
		            }
		        }
		        this.context.allowIn = previousAllowIn;
		        return expr;
		    };
		    Parser.prototype.parseSuper = function () {
		        var node = this.createNode();
		        this.expectKeyword('super');
		        if (!this.match('[') && !this.match('.')) {
		            this.throwUnexpectedToken(this.lookahead);
		        }
		        return this.finalize(node, new Node.Super());
		    };
		    Parser.prototype.parseLeftHandSideExpression = function () {
		        assert_1.assert(this.context.allowIn, 'callee of new expression always allow in keyword.');
		        var node = this.startNode(this.lookahead);
		        var expr = (this.matchKeyword('super') && this.context.inFunctionBody) ? this.parseSuper() :
		            this.inheritCoverGrammar(this.matchKeyword('new') ? this.parseNewExpression : this.parsePrimaryExpression);
		        while (true) {
		            if (this.match('[')) {
		                this.context.isBindingElement = false;
		                this.context.isAssignmentTarget = true;
		                this.expect('[');
		                var property = this.isolateCoverGrammar(this.parseExpression);
		                this.expect(']');
		                expr = this.finalize(node, new Node.ComputedMemberExpression(expr, property));
		            }
		            else if (this.match('.')) {
		                this.context.isBindingElement = false;
		                this.context.isAssignmentTarget = true;
		                this.expect('.');
		                var property = this.parseIdentifierName();
		                expr = this.finalize(node, new Node.StaticMemberExpression(expr, property));
		            }
		            else if (this.lookahead.type === token_1.Token.Template && this.lookahead.head) {
		                var quasi = this.parseTemplateLiteral();
		                expr = this.finalize(node, new Node.TaggedTemplateExpression(expr, quasi));
		            }
		            else {
		                break;
		            }
		        }
		        return expr;
		    };
		    // ECMA-262 12.4 Update Expressions
		    Parser.prototype.parseUpdateExpression = function () {
		        var expr;
		        var startToken = this.lookahead;
		        if (this.match('++') || this.match('--')) {
		            var node = this.startNode(startToken);
		            var token = this.nextToken();
		            expr = this.inheritCoverGrammar(this.parseUnaryExpression);
		            if (this.context.strict && expr.type === syntax_1.Syntax.Identifier && this.scanner.isRestrictedWord(expr.name)) {
		                this.tolerateError(messages_1.Messages.StrictLHSPrefix);
		            }
		            if (!this.context.isAssignmentTarget) {
		                this.tolerateError(messages_1.Messages.InvalidLHSInAssignment);
		            }
		            var prefix = true;
		            expr = this.finalize(node, new Node.UpdateExpression(token.value, expr, prefix));
		            this.context.isAssignmentTarget = false;
		            this.context.isBindingElement = false;
		        }
		        else {
		            expr = this.inheritCoverGrammar(this.parseLeftHandSideExpressionAllowCall);
		            if (!this.hasLineTerminator && this.lookahead.type === token_1.Token.Punctuator) {
		                if (this.match('++') || this.match('--')) {
		                    if (this.context.strict && expr.type === syntax_1.Syntax.Identifier && this.scanner.isRestrictedWord(expr.name)) {
		                        this.tolerateError(messages_1.Messages.StrictLHSPostfix);
		                    }
		                    if (!this.context.isAssignmentTarget) {
		                        this.tolerateError(messages_1.Messages.InvalidLHSInAssignment);
		                    }
		                    this.context.isAssignmentTarget = false;
		                    this.context.isBindingElement = false;
		                    var operator = this.nextToken().value;
		                    var prefix = false;
		                    expr = this.finalize(this.startNode(startToken), new Node.UpdateExpression(operator, expr, prefix));
		                }
		            }
		        }
		        return expr;
		    };
		    // ECMA-262 12.5 Unary Operators
		    Parser.prototype.parseUnaryExpression = function () {
		        var expr;
		        if (this.match('+') || this.match('-') || this.match('~') || this.match('!') ||
		            this.matchKeyword('delete') || this.matchKeyword('void') || this.matchKeyword('typeof')) {
		            var node = this.startNode(this.lookahead);
		            var token = this.nextToken();
		            expr = this.inheritCoverGrammar(this.parseUnaryExpression);
		            expr = this.finalize(node, new Node.UnaryExpression(token.value, expr));
		            if (this.context.strict && expr.operator === 'delete' && expr.argument.type === syntax_1.Syntax.Identifier) {
		                this.tolerateError(messages_1.Messages.StrictDelete);
		            }
		            this.context.isAssignmentTarget = false;
		            this.context.isBindingElement = false;
		        }
		        else {
		            expr = this.parseUpdateExpression();
		        }
		        return expr;
		    };
		    Parser.prototype.parseExponentiationExpression = function () {
		        var startToken = this.lookahead;
		        var expr = this.inheritCoverGrammar(this.parseUnaryExpression);
		        if (expr.type !== syntax_1.Syntax.UnaryExpression && this.match('**')) {
		            this.nextToken();
		            this.context.isAssignmentTarget = false;
		            this.context.isBindingElement = false;
		            var left = expr;
		            var right = this.isolateCoverGrammar(this.parseExponentiationExpression);
		            expr = this.finalize(this.startNode(startToken), new Node.BinaryExpression('**', left, right));
		        }
		        return expr;
		    };
		    // ECMA-262 12.6 Exponentiation Operators
		    // ECMA-262 12.7 Multiplicative Operators
		    // ECMA-262 12.8 Additive Operators
		    // ECMA-262 12.9 Bitwise Shift Operators
		    // ECMA-262 12.10 Relational Operators
		    // ECMA-262 12.11 Equality Operators
		    // ECMA-262 12.12 Binary Bitwise Operators
		    // ECMA-262 12.13 Binary Logical Operators
		    Parser.prototype.binaryPrecedence = function (token) {
		        var op = token.value;
		        var precedence;
		        if (token.type === token_1.Token.Punctuator) {
		            precedence = this.operatorPrecedence[op] || 0;
		        }
		        else if (token.type === token_1.Token.Keyword) {
		            precedence = (op === 'instanceof' || (this.context.allowIn && op === 'in')) ? 7 : 0;
		        }
		        else {
		            precedence = 0;
		        }
		        return precedence;
		    };
		    Parser.prototype.parseBinaryExpression = function () {
		        var startToken = this.lookahead;
		        var expr = this.inheritCoverGrammar(this.parseExponentiationExpression);
		        var token = this.lookahead;
		        var prec = this.binaryPrecedence(token);
		        if (prec > 0) {
		            this.nextToken();
		            token.prec = prec;
		            this.context.isAssignmentTarget = false;
		            this.context.isBindingElement = false;
		            var markers = [startToken, this.lookahead];
		            var left = expr;
		            var right = this.isolateCoverGrammar(this.parseExponentiationExpression);
		            var stack = [left, token, right];
		            while (true) {
		                prec = this.binaryPrecedence(this.lookahead);
		                if (prec <= 0) {
		                    break;
		                }
		                // Reduce: make a binary expression from the three topmost entries.
		                while ((stack.length > 2) && (prec <= stack[stack.length - 2].prec)) {
		                    right = stack.pop();
		                    var operator = stack.pop().value;
		                    left = stack.pop();
		                    markers.pop();
		                    var node = this.startNode(markers[markers.length - 1]);
		                    stack.push(this.finalize(node, new Node.BinaryExpression(operator, left, right)));
		                }
		                // Shift.
		                token = this.nextToken();
		                token.prec = prec;
		                stack.push(token);
		                markers.push(this.lookahead);
		                stack.push(this.isolateCoverGrammar(this.parseExponentiationExpression));
		            }
		            // Final reduce to clean-up the stack.
		            var i = stack.length - 1;
		            expr = stack[i];
		            markers.pop();
		            while (i > 1) {
		                var node = this.startNode(markers.pop());
		                expr = this.finalize(node, new Node.BinaryExpression(stack[i - 1].value, stack[i - 2], expr));
		                i -= 2;
		            }
		        }
		        return expr;
		    };
		    // ECMA-262 12.14 Conditional Operator
		    Parser.prototype.parseConditionalExpression = function () {
		        var startToken = this.lookahead;
		        var expr = this.inheritCoverGrammar(this.parseBinaryExpression);
		        if (this.match('?')) {
		            this.nextToken();
		            var previousAllowIn = this.context.allowIn;
		            this.context.allowIn = true;
		            var consequent = this.isolateCoverGrammar(this.parseAssignmentExpression);
		            this.context.allowIn = previousAllowIn;
		            this.expect(':');
		            var alternate = this.isolateCoverGrammar(this.parseAssignmentExpression);
		            expr = this.finalize(this.startNode(startToken), new Node.ConditionalExpression(expr, consequent, alternate));
		            this.context.isAssignmentTarget = false;
		            this.context.isBindingElement = false;
		        }
		        return expr;
		    };
		    // ECMA-262 12.15 Assignment Operators
		    Parser.prototype.checkPatternParam = function (options, param) {
		        switch (param.type) {
		            case syntax_1.Syntax.Identifier:
		                this.validateParam(options, param, param.name);
		                break;
		            case syntax_1.Syntax.RestElement:
		                this.checkPatternParam(options, param.argument);
		                break;
		            case syntax_1.Syntax.AssignmentPattern:
		                this.checkPatternParam(options, param.left);
		                break;
		            case syntax_1.Syntax.ArrayPattern:
		                for (var i = 0; i < param.elements.length; i++) {
		                    if (param.elements[i] !== null) {
		                        this.checkPatternParam(options, param.elements[i]);
		                    }
		                }
		                break;
		            case syntax_1.Syntax.YieldExpression:
		                break;
		            default:
		                assert_1.assert(param.type === syntax_1.Syntax.ObjectPattern, 'Invalid type');
		                for (var i = 0; i < param.properties.length; i++) {
		                    this.checkPatternParam(options, param.properties[i].value);
		                }
		                break;
		        }
		    };
		    Parser.prototype.reinterpretAsCoverFormalsList = function (expr) {
		        var params = [expr];
		        var options;
		        switch (expr.type) {
		            case syntax_1.Syntax.Identifier:
		                break;
		            case ArrowParameterPlaceHolder:
		                params = expr.params;
		                break;
		            default:
		                return null;
		        }
		        options = {
		            paramSet: {}
		        };
		        for (var i = 0; i < params.length; ++i) {
		            var param = params[i];
		            if (param.type === syntax_1.Syntax.AssignmentPattern) {
		                if (param.right.type === syntax_1.Syntax.YieldExpression) {
		                    if (param.right.argument) {
		                        this.throwUnexpectedToken(this.lookahead);
		                    }
		                    param.right.type = syntax_1.Syntax.Identifier;
		                    param.right.name = 'yield';
		                    delete param.right.argument;
		                    delete param.right.delegate;
		                }
		            }
		            this.checkPatternParam(options, param);
		            params[i] = param;
		        }
		        if (this.context.strict || !this.context.allowYield) {
		            for (var i = 0; i < params.length; ++i) {
		                var param = params[i];
		                if (param.type === syntax_1.Syntax.YieldExpression) {
		                    this.throwUnexpectedToken(this.lookahead);
		                }
		            }
		        }
		        if (options.message === messages_1.Messages.StrictParamDupe) {
		            var token = this.context.strict ? options.stricted : options.firstRestricted;
		            this.throwUnexpectedToken(token, options.message);
		        }
		        return {
		            params: params,
		            stricted: options.stricted,
		            firstRestricted: options.firstRestricted,
		            message: options.message
		        };
		    };
		    Parser.prototype.parseAssignmentExpression = function () {
		        var expr;
		        if (!this.context.allowYield && this.matchKeyword('yield')) {
		            expr = this.parseYieldExpression();
		        }
		        else {
		            var startToken = this.lookahead;
		            var token = startToken;
		            expr = this.parseConditionalExpression();
		            if (expr.type === ArrowParameterPlaceHolder || this.match('=>')) {
		                // ECMA-262 14.2 Arrow Function Definitions
		                this.context.isAssignmentTarget = false;
		                this.context.isBindingElement = false;
		                var list = this.reinterpretAsCoverFormalsList(expr);
		                if (list) {
		                    if (this.hasLineTerminator) {
		                        this.tolerateUnexpectedToken(this.lookahead);
		                    }
		                    this.context.firstCoverInitializedNameError = null;
		                    var previousStrict = this.context.strict;
		                    var previousAllowYield = this.context.allowYield;
		                    this.context.allowYield = true;
		                    var node = this.startNode(startToken);
		                    this.expect('=>');
		                    var body = this.match('{') ? this.parseFunctionSourceElements() :
		                        this.isolateCoverGrammar(this.parseAssignmentExpression);
		                    var expression = body.type !== syntax_1.Syntax.BlockStatement;
		                    if (this.context.strict && list.firstRestricted) {
		                        this.throwUnexpectedToken(list.firstRestricted, list.message);
		                    }
		                    if (this.context.strict && list.stricted) {
		                        this.tolerateUnexpectedToken(list.stricted, list.message);
		                    }
		                    expr = this.finalize(node, new Node.ArrowFunctionExpression(list.params, body, expression));
		                    this.context.strict = previousStrict;
		                    this.context.allowYield = previousAllowYield;
		                }
		            }
		            else {
		                if (this.matchAssign()) {
		                    if (!this.context.isAssignmentTarget) {
		                        this.tolerateError(messages_1.Messages.InvalidLHSInAssignment);
		                    }
		                    if (this.context.strict && expr.type === syntax_1.Syntax.Identifier) {
		                        var id = (expr);
		                        if (this.scanner.isRestrictedWord(id.name)) {
		                            this.tolerateUnexpectedToken(token, messages_1.Messages.StrictLHSAssignment);
		                        }
		                        if (this.scanner.isStrictModeReservedWord(id.name)) {
		                            this.tolerateUnexpectedToken(token, messages_1.Messages.StrictReservedWord);
		                        }
		                    }
		                    if (!this.match('=')) {
		                        this.context.isAssignmentTarget = false;
		                        this.context.isBindingElement = false;
		                    }
		                    else {
		                        this.reinterpretExpressionAsPattern(expr);
		                    }
		                    token = this.nextToken();
		                    var right = this.isolateCoverGrammar(this.parseAssignmentExpression);
		                    expr = this.finalize(this.startNode(startToken), new Node.AssignmentExpression(token.value, expr, right));
		                    this.context.firstCoverInitializedNameError = null;
		                }
		            }
		        }
		        return expr;
		    };
		    // ECMA-262 12.16 Comma Operator
		    Parser.prototype.parseExpression = function () {
		        var startToken = this.lookahead;
		        var expr = this.isolateCoverGrammar(this.parseAssignmentExpression);
		        if (this.match(',')) {
		            var expressions = [];
		            expressions.push(expr);
		            while (this.startMarker.index < this.scanner.length) {
		                if (!this.match(',')) {
		                    break;
		                }
		                this.nextToken();
		                expressions.push(this.isolateCoverGrammar(this.parseAssignmentExpression));
		            }
		            expr = this.finalize(this.startNode(startToken), new Node.SequenceExpression(expressions));
		        }
		        return expr;
		    };
		    // ECMA-262 13.2 Block
		    Parser.prototype.parseStatementListItem = function () {
		        var statement = null;
		        this.context.isAssignmentTarget = true;
		        this.context.isBindingElement = true;
		        if (this.lookahead.type === token_1.Token.Keyword) {
		            switch (this.lookahead.value) {
		                case 'export':
		                    if (this.sourceType !== 'module') {
		                        this.tolerateUnexpectedToken(this.lookahead, messages_1.Messages.IllegalExportDeclaration);
		                    }
		                    statement = this.parseExportDeclaration();
		                    break;
		                case 'import':
		                    if (this.sourceType !== 'module') {
		                        this.tolerateUnexpectedToken(this.lookahead, messages_1.Messages.IllegalImportDeclaration);
		                    }
		                    statement = this.parseImportDeclaration();
		                    break;
		                case 'const':
		                    statement = this.parseLexicalDeclaration({ inFor: false });
		                    break;
		                case 'function':
		                    statement = this.parseFunctionDeclaration();
		                    break;
		                case 'class':
		                    statement = this.parseClassDeclaration();
		                    break;
		                case 'let':
		                    statement = this.isLexicalDeclaration() ? this.parseLexicalDeclaration({ inFor: false }) : this.parseStatement();
		                    break;
		                default:
		                    statement = this.parseStatement();
		                    break;
		            }
		        }
		        else {
		            statement = this.parseStatement();
		        }
		        return statement;
		    };
		    Parser.prototype.parseBlock = function () {
		        var node = this.createNode();
		        this.expect('{');
		        var block = [];
		        while (true) {
		            if (this.match('}')) {
		                break;
		            }
		            block.push(this.parseStatementListItem());
		        }
		        this.expect('}');
		        return this.finalize(node, new Node.BlockStatement(block));
		    };
		    // ECMA-262 13.3.1 Let and Const Declarations
		    Parser.prototype.parseLexicalBinding = function (kind, options) {
		        var node = this.createNode();
		        var params = [];
		        var id = this.parsePattern(params, kind);
		        // ECMA-262 12.2.1
		        if (this.context.strict && id.type === syntax_1.Syntax.Identifier) {
		            if (this.scanner.isRestrictedWord((id).name)) {
		                this.tolerateError(messages_1.Messages.StrictVarName);
		            }
		        }
		        var init = null;
		        if (kind === 'const') {
		            if (!this.matchKeyword('in') && !this.matchContextualKeyword('of')) {
		                this.expect('=');
		                init = this.isolateCoverGrammar(this.parseAssignmentExpression);
		            }
		        }
		        else if ((!options.inFor && id.type !== syntax_1.Syntax.Identifier) || this.match('=')) {
		            this.expect('=');
		            init = this.isolateCoverGrammar(this.parseAssignmentExpression);
		        }
		        return this.finalize(node, new Node.VariableDeclarator(id, init));
		    };
		    Parser.prototype.parseBindingList = function (kind, options) {
		        var list = [this.parseLexicalBinding(kind, options)];
		        while (this.match(',')) {
		            this.nextToken();
		            list.push(this.parseLexicalBinding(kind, options));
		        }
		        return list;
		    };
		    Parser.prototype.isLexicalDeclaration = function () {
		        var previousIndex = this.scanner.index;
		        var previousLineNumber = this.scanner.lineNumber;
		        var previousLineStart = this.scanner.lineStart;
		        this.collectComments();
		        var next = this.scanner.lex();
		        this.scanner.index = previousIndex;
		        this.scanner.lineNumber = previousLineNumber;
		        this.scanner.lineStart = previousLineStart;
		        return (next.type === token_1.Token.Identifier) ||
		            (next.type === token_1.Token.Punctuator && next.value === '[') ||
		            (next.type === token_1.Token.Punctuator && next.value === '{') ||
		            (next.type === token_1.Token.Keyword && next.value === 'let') ||
		            (next.type === token_1.Token.Keyword && next.value === 'yield');
		    };
		    Parser.prototype.parseLexicalDeclaration = function (options) {
		        var node = this.createNode();
		        var kind = this.nextToken().value;
		        assert_1.assert(kind === 'let' || kind === 'const', 'Lexical declaration must be either let or const');
		        var declarations = this.parseBindingList(kind, options);
		        this.consumeSemicolon();
		        return this.finalize(node, new Node.VariableDeclaration(declarations, kind));
		    };
		    // ECMA-262 13.3.3 Destructuring Binding Patterns
		    Parser.prototype.parseBindingRestElement = function (params, kind) {
		        var node = this.createNode();
		        this.expect('...');
		        var arg = this.parsePattern(params, kind);
		        return this.finalize(node, new Node.RestElement(arg));
		    };
		    Parser.prototype.parseArrayPattern = function (params, kind) {
		        var node = this.createNode();
		        this.expect('[');
		        var elements = [];
		        while (!this.match(']')) {
		            if (this.match(',')) {
		                this.nextToken();
		                elements.push(null);
		            }
		            else {
		                if (this.match('...')) {
		                    elements.push(this.parseBindingRestElement(params, kind));
		                    break;
		                }
		                else {
		                    elements.push(this.parsePatternWithDefault(params, kind));
		                }
		                if (!this.match(']')) {
		                    this.expect(',');
		                }
		            }
		        }
		        this.expect(']');
		        return this.finalize(node, new Node.ArrayPattern(elements));
		    };
		    Parser.prototype.parsePropertyPattern = function (params, kind) {
		        var node = this.createNode();
		        var computed = false;
		        var shorthand = false;
		        var method = false;
		        var key;
		        var value;
		        if (this.lookahead.type === token_1.Token.Identifier) {
		            var keyToken = this.lookahead;
		            key = this.parseVariableIdentifier();
		            var init = this.finalize(node, new Node.Identifier(keyToken.value));
		            if (this.match('=')) {
		                params.push(keyToken);
		                shorthand = true;
		                this.nextToken();
		                var expr = this.parseAssignmentExpression();
		                value = this.finalize(this.startNode(keyToken), new Node.AssignmentPattern(init, expr));
		            }
		            else if (!this.match(':')) {
		                params.push(keyToken);
		                shorthand = true;
		                value = init;
		            }
		            else {
		                this.expect(':');
		                value = this.parsePatternWithDefault(params, kind);
		            }
		        }
		        else {
		            computed = this.match('[');
		            key = this.parseObjectPropertyKey();
		            this.expect(':');
		            value = this.parsePatternWithDefault(params, kind);
		        }
		        return this.finalize(node, new Node.Property('init', key, computed, value, method, shorthand));
		    };
		    Parser.prototype.parseObjectPattern = function (params, kind) {
		        var node = this.createNode();
		        var properties = [];
		        this.expect('{');
		        while (!this.match('}')) {
		            properties.push(this.parsePropertyPattern(params, kind));
		            if (!this.match('}')) {
		                this.expect(',');
		            }
		        }
		        this.expect('}');
		        return this.finalize(node, new Node.ObjectPattern(properties));
		    };
		    Parser.prototype.parsePattern = function (params, kind) {
		        var pattern;
		        if (this.match('[')) {
		            pattern = this.parseArrayPattern(params, kind);
		        }
		        else if (this.match('{')) {
		            pattern = this.parseObjectPattern(params, kind);
		        }
		        else {
		            if (this.matchKeyword('let') && (kind === 'const' || kind === 'let')) {
		                this.tolerateUnexpectedToken(this.lookahead, messages_1.Messages.UnexpectedToken);
		            }
		            params.push(this.lookahead);
		            pattern = this.parseVariableIdentifier(kind);
		        }
		        return pattern;
		    };
		    Parser.prototype.parsePatternWithDefault = function (params, kind) {
		        var startToken = this.lookahead;
		        var pattern = this.parsePattern(params, kind);
		        if (this.match('=')) {
		            this.nextToken();
		            var previousAllowYield = this.context.allowYield;
		            this.context.allowYield = true;
		            var right = this.isolateCoverGrammar(this.parseAssignmentExpression);
		            this.context.allowYield = previousAllowYield;
		            pattern = this.finalize(this.startNode(startToken), new Node.AssignmentPattern(pattern, right));
		        }
		        return pattern;
		    };
		    // ECMA-262 13.3.2 Variable Statement
		    Parser.prototype.parseVariableIdentifier = function (kind) {
		        var node = this.createNode();
		        var token = this.nextToken();
		        if (token.type === token_1.Token.Keyword && token.value === 'yield') {
		            if (this.context.strict) {
		                this.tolerateUnexpectedToken(token, messages_1.Messages.StrictReservedWord);
		            }
		            if (!this.context.allowYield) {
		                this.throwUnexpectedToken(token);
		            }
		        }
		        else if (token.type !== token_1.Token.Identifier) {
		            if (this.context.strict && token.type === token_1.Token.Keyword && this.scanner.isStrictModeReservedWord(token.value)) {
		                this.tolerateUnexpectedToken(token, messages_1.Messages.StrictReservedWord);
		            }
		            else {
		                if (this.context.strict || token.value !== 'let' || kind !== 'var') {
		                    this.throwUnexpectedToken(token);
		                }
		            }
		        }
		        else if (this.sourceType === 'module' && token.type === token_1.Token.Identifier && token.value === 'await') {
		            this.tolerateUnexpectedToken(token);
		        }
		        return this.finalize(node, new Node.Identifier(token.value));
		    };
		    Parser.prototype.parseVariableDeclaration = function (options) {
		        var node = this.createNode();
		        var params = [];
		        var id = this.parsePattern(params, 'var');
		        // ECMA-262 12.2.1
		        if (this.context.strict && id.type === syntax_1.Syntax.Identifier) {
		            if (this.scanner.isRestrictedWord((id).name)) {
		                this.tolerateError(messages_1.Messages.StrictVarName);
		            }
		        }
		        var init = null;
		        if (this.match('=')) {
		            this.nextToken();
		            init = this.isolateCoverGrammar(this.parseAssignmentExpression);
		        }
		        else if (id.type !== syntax_1.Syntax.Identifier && !options.inFor) {
		            this.expect('=');
		        }
		        return this.finalize(node, new Node.VariableDeclarator(id, init));
		    };
		    Parser.prototype.parseVariableDeclarationList = function (options) {
		        var opt = { inFor: options.inFor };
		        var list = [];
		        list.push(this.parseVariableDeclaration(opt));
		        while (this.match(',')) {
		            this.nextToken();
		            list.push(this.parseVariableDeclaration(opt));
		        }
		        return list;
		    };
		    Parser.prototype.parseVariableStatement = function () {
		        var node = this.createNode();
		        this.expectKeyword('var');
		        var declarations = this.parseVariableDeclarationList({ inFor: false });
		        this.consumeSemicolon();
		        return this.finalize(node, new Node.VariableDeclaration(declarations, 'var'));
		    };
		    // ECMA-262 13.4 Empty Statement
		    Parser.prototype.parseEmptyStatement = function () {
		        var node = this.createNode();
		        this.expect(';');
		        return this.finalize(node, new Node.EmptyStatement());
		    };
		    // ECMA-262 13.5 Expression Statement
		    Parser.prototype.parseExpressionStatement = function () {
		        var node = this.createNode();
		        var expr = this.parseExpression();
		        this.consumeSemicolon();
		        return this.finalize(node, new Node.ExpressionStatement(expr));
		    };
		    // ECMA-262 13.6 If statement
		    Parser.prototype.parseIfStatement = function () {
		        var node = this.createNode();
		        var consequent;
		        var alternate = null;
		        this.expectKeyword('if');
		        this.expect('(');
		        var test = this.parseExpression();
		        if (!this.match(')') && this.config.tolerant) {
		            this.tolerateUnexpectedToken(this.nextToken());
		            consequent = this.finalize(this.createNode(), new Node.EmptyStatement());
		        }
		        else {
		            this.expect(')');
		            consequent = this.parseStatement();
		            if (this.matchKeyword('else')) {
		                this.nextToken();
		                alternate = this.parseStatement();
		            }
		        }
		        return this.finalize(node, new Node.IfStatement(test, consequent, alternate));
		    };
		    // ECMA-262 13.7.2 The do-while Statement
		    Parser.prototype.parseDoWhileStatement = function () {
		        var node = this.createNode();
		        this.expectKeyword('do');
		        var previousInIteration = this.context.inIteration;
		        this.context.inIteration = true;
		        var body = this.parseStatement();
		        this.context.inIteration = previousInIteration;
		        this.expectKeyword('while');
		        this.expect('(');
		        var test = this.parseExpression();
		        this.expect(')');
		        if (this.match(';')) {
		            this.nextToken();
		        }
		        return this.finalize(node, new Node.DoWhileStatement(body, test));
		    };
		    // ECMA-262 13.7.3 The while Statement
		    Parser.prototype.parseWhileStatement = function () {
		        var node = this.createNode();
		        var body;
		        this.expectKeyword('while');
		        this.expect('(');
		        var test = this.parseExpression();
		        if (!this.match(')') && this.config.tolerant) {
		            this.tolerateUnexpectedToken(this.nextToken());
		            body = this.finalize(this.createNode(), new Node.EmptyStatement());
		        }
		        else {
		            this.expect(')');
		            var previousInIteration = this.context.inIteration;
		            this.context.inIteration = true;
		            body = this.parseStatement();
		            this.context.inIteration = previousInIteration;
		        }
		        return this.finalize(node, new Node.WhileStatement(test, body));
		    };
		    // ECMA-262 13.7.4 The for Statement
		    // ECMA-262 13.7.5 The for-in and for-of Statements
		    Parser.prototype.parseForStatement = function () {
		        var init = null;
		        var test = null;
		        var update = null;
		        var forIn = true;
		        var left, right;
		        var node = this.createNode();
		        this.expectKeyword('for');
		        this.expect('(');
		        if (this.match(';')) {
		            this.nextToken();
		        }
		        else {
		            if (this.matchKeyword('var')) {
		                init = this.createNode();
		                this.nextToken();
		                var previousAllowIn = this.context.allowIn;
		                this.context.allowIn = false;
		                var declarations = this.parseVariableDeclarationList({ inFor: true });
		                this.context.allowIn = previousAllowIn;
		                if (declarations.length === 1 && this.matchKeyword('in')) {
		                    var decl = declarations[0];
		                    if (decl.init && (decl.id.type === syntax_1.Syntax.ArrayPattern || decl.id.type === syntax_1.Syntax.ObjectPattern || this.context.strict)) {
		                        this.tolerateError(messages_1.Messages.ForInOfLoopInitializer, 'for-in');
		                    }
		                    init = this.finalize(init, new Node.VariableDeclaration(declarations, 'var'));
		                    this.nextToken();
		                    left = init;
		                    right = this.parseExpression();
		                    init = null;
		                }
		                else if (declarations.length === 1 && declarations[0].init === null && this.matchContextualKeyword('of')) {
		                    init = this.finalize(init, new Node.VariableDeclaration(declarations, 'var'));
		                    this.nextToken();
		                    left = init;
		                    right = this.parseAssignmentExpression();
		                    init = null;
		                    forIn = false;
		                }
		                else {
		                    init = this.finalize(init, new Node.VariableDeclaration(declarations, 'var'));
		                    this.expect(';');
		                }
		            }
		            else if (this.matchKeyword('const') || this.matchKeyword('let')) {
		                init = this.createNode();
		                var kind = this.nextToken().value;
		                if (!this.context.strict && this.lookahead.value === 'in') {
		                    init = this.finalize(init, new Node.Identifier(kind));
		                    this.nextToken();
		                    left = init;
		                    right = this.parseExpression();
		                    init = null;
		                }
		                else {
		                    var previousAllowIn = this.context.allowIn;
		                    this.context.allowIn = false;
		                    var declarations = this.parseBindingList(kind, { inFor: true });
		                    this.context.allowIn = previousAllowIn;
		                    if (declarations.length === 1 && declarations[0].init === null && this.matchKeyword('in')) {
		                        init = this.finalize(init, new Node.VariableDeclaration(declarations, kind));
		                        this.nextToken();
		                        left = init;
		                        right = this.parseExpression();
		                        init = null;
		                    }
		                    else if (declarations.length === 1 && declarations[0].init === null && this.matchContextualKeyword('of')) {
		                        init = this.finalize(init, new Node.VariableDeclaration(declarations, kind));
		                        this.nextToken();
		                        left = init;
		                        right = this.parseAssignmentExpression();
		                        init = null;
		                        forIn = false;
		                    }
		                    else {
		                        this.consumeSemicolon();
		                        init = this.finalize(init, new Node.VariableDeclaration(declarations, kind));
		                    }
		                }
		            }
		            else {
		                var initStartToken = this.lookahead;
		                var previousAllowIn = this.context.allowIn;
		                this.context.allowIn = false;
		                init = this.inheritCoverGrammar(this.parseAssignmentExpression);
		                this.context.allowIn = previousAllowIn;
		                if (this.matchKeyword('in')) {
		                    if (!this.context.isAssignmentTarget || init.type === syntax_1.Syntax.AssignmentExpression) {
		                        this.tolerateError(messages_1.Messages.InvalidLHSInForIn);
		                    }
		                    this.nextToken();
		                    this.reinterpretExpressionAsPattern(init);
		                    left = init;
		                    right = this.parseExpression();
		                    init = null;
		                }
		                else if (this.matchContextualKeyword('of')) {
		                    if (!this.context.isAssignmentTarget || init.type === syntax_1.Syntax.AssignmentExpression) {
		                        this.tolerateError(messages_1.Messages.InvalidLHSInForLoop);
		                    }
		                    this.nextToken();
		                    this.reinterpretExpressionAsPattern(init);
		                    left = init;
		                    right = this.parseAssignmentExpression();
		                    init = null;
		                    forIn = false;
		                }
		                else {
		                    if (this.match(',')) {
		                        var initSeq = [init];
		                        while (this.match(',')) {
		                            this.nextToken();
		                            initSeq.push(this.isolateCoverGrammar(this.parseAssignmentExpression));
		                        }
		                        init = this.finalize(this.startNode(initStartToken), new Node.SequenceExpression(initSeq));
		                    }
		                    this.expect(';');
		                }
		            }
		        }
		        if (typeof left === 'undefined') {
		            if (!this.match(';')) {
		                test = this.parseExpression();
		            }
		            this.expect(';');
		            if (!this.match(')')) {
		                update = this.parseExpression();
		            }
		        }
		        var body;
		        if (!this.match(')') && this.config.tolerant) {
		            this.tolerateUnexpectedToken(this.nextToken());
		            body = this.finalize(this.createNode(), new Node.EmptyStatement());
		        }
		        else {
		            this.expect(')');
		            var previousInIteration = this.context.inIteration;
		            this.context.inIteration = true;
		            body = this.isolateCoverGrammar(this.parseStatement);
		            this.context.inIteration = previousInIteration;
		        }
		        return (typeof left === 'undefined') ?
		            this.finalize(node, new Node.ForStatement(init, test, update, body)) :
		            forIn ? this.finalize(node, new Node.ForInStatement(left, right, body)) :
		                this.finalize(node, new Node.ForOfStatement(left, right, body));
		    };
		    // ECMA-262 13.8 The continue statement
		    Parser.prototype.parseContinueStatement = function () {
		        var node = this.createNode();
		        this.expectKeyword('continue');
		        var label = null;
		        if (this.lookahead.type === token_1.Token.Identifier && !this.hasLineTerminator) {
		            label = this.parseVariableIdentifier();
		            var key = '$' + label.name;
		            if (!Object.prototype.hasOwnProperty.call(this.context.labelSet, key)) {
		                this.throwError(messages_1.Messages.UnknownLabel, label.name);
		            }
		        }
		        this.consumeSemicolon();
		        if (label === null && !this.context.inIteration) {
		            this.throwError(messages_1.Messages.IllegalContinue);
		        }
		        return this.finalize(node, new Node.ContinueStatement(label));
		    };
		    // ECMA-262 13.9 The break statement
		    Parser.prototype.parseBreakStatement = function () {
		        var node = this.createNode();
		        this.expectKeyword('break');
		        var label = null;
		        if (this.lookahead.type === token_1.Token.Identifier && !this.hasLineTerminator) {
		            label = this.parseVariableIdentifier();
		            var key = '$' + label.name;
		            if (!Object.prototype.hasOwnProperty.call(this.context.labelSet, key)) {
		                this.throwError(messages_1.Messages.UnknownLabel, label.name);
		            }
		        }
		        this.consumeSemicolon();
		        if (label === null && !this.context.inIteration && !this.context.inSwitch) {
		            this.throwError(messages_1.Messages.IllegalBreak);
		        }
		        return this.finalize(node, new Node.BreakStatement(label));
		    };
		    // ECMA-262 13.10 The return statement
		    Parser.prototype.parseReturnStatement = function () {
		        if (!this.context.inFunctionBody) {
		            this.tolerateError(messages_1.Messages.IllegalReturn);
		        }
		        var node = this.createNode();
		        this.expectKeyword('return');
		        var hasArgument = !this.match(';') && !this.match('}') &&
		            !this.hasLineTerminator && this.lookahead.type !== token_1.Token.EOF;
		        var argument = hasArgument ? this.parseExpression() : null;
		        this.consumeSemicolon();
		        return this.finalize(node, new Node.ReturnStatement(argument));
		    };
		    // ECMA-262 13.11 The with statement
		    Parser.prototype.parseWithStatement = function () {
		        if (this.context.strict) {
		            this.tolerateError(messages_1.Messages.StrictModeWith);
		        }
		        var node = this.createNode();
		        this.expectKeyword('with');
		        this.expect('(');
		        var object = this.parseExpression();
		        this.expect(')');
		        var body = this.parseStatement();
		        return this.finalize(node, new Node.WithStatement(object, body));
		    };
		    // ECMA-262 13.12 The switch statement
		    Parser.prototype.parseSwitchCase = function () {
		        var node = this.createNode();
		        var test;
		        if (this.matchKeyword('default')) {
		            this.nextToken();
		            test = null;
		        }
		        else {
		            this.expectKeyword('case');
		            test = this.parseExpression();
		        }
		        this.expect(':');
		        var consequent = [];
		        while (true) {
		            if (this.match('}') || this.matchKeyword('default') || this.matchKeyword('case')) {
		                break;
		            }
		            consequent.push(this.parseStatementListItem());
		        }
		        return this.finalize(node, new Node.SwitchCase(test, consequent));
		    };
		    Parser.prototype.parseSwitchStatement = function () {
		        var node = this.createNode();
		        this.expectKeyword('switch');
		        this.expect('(');
		        var discriminant = this.parseExpression();
		        this.expect(')');
		        var previousInSwitch = this.context.inSwitch;
		        this.context.inSwitch = true;
		        var cases = [];
		        var defaultFound = false;
		        this.expect('{');
		        while (true) {
		            if (this.match('}')) {
		                break;
		            }
		            var clause = this.parseSwitchCase();
		            if (clause.test === null) {
		                if (defaultFound) {
		                    this.throwError(messages_1.Messages.MultipleDefaultsInSwitch);
		                }
		                defaultFound = true;
		            }
		            cases.push(clause);
		        }
		        this.expect('}');
		        this.context.inSwitch = previousInSwitch;
		        return this.finalize(node, new Node.SwitchStatement(discriminant, cases));
		    };
		    // ECMA-262 13.13 Labelled Statements
		    Parser.prototype.parseLabelledStatement = function () {
		        var node = this.createNode();
		        var expr = this.parseExpression();
		        var statement;
		        if ((expr.type === syntax_1.Syntax.Identifier) && this.match(':')) {
		            this.nextToken();
		            var id = (expr);
		            var key = '$' + id.name;
		            if (Object.prototype.hasOwnProperty.call(this.context.labelSet, key)) {
		                this.throwError(messages_1.Messages.Redeclaration, 'Label', id.name);
		            }
		            this.context.labelSet[key] = true;
		            var labeledBody = this.parseStatement();
		            delete this.context.labelSet[key];
		            statement = new Node.LabeledStatement(id, labeledBody);
		        }
		        else {
		            this.consumeSemicolon();
		            statement = new Node.ExpressionStatement(expr);
		        }
		        return this.finalize(node, statement);
		    };
		    // ECMA-262 13.14 The throw statement
		    Parser.prototype.parseThrowStatement = function () {
		        var node = this.createNode();
		        this.expectKeyword('throw');
		        if (this.hasLineTerminator) {
		            this.throwError(messages_1.Messages.NewlineAfterThrow);
		        }
		        var argument = this.parseExpression();
		        this.consumeSemicolon();
		        return this.finalize(node, new Node.ThrowStatement(argument));
		    };
		    // ECMA-262 13.15 The try statement
		    Parser.prototype.parseCatchClause = function () {
		        var node = this.createNode();
		        this.expectKeyword('catch');
		        this.expect('(');
		        if (this.match(')')) {
		            this.throwUnexpectedToken(this.lookahead);
		        }
		        var params = [];
		        var param = this.parsePattern(params);
		        var paramMap = {};
		        for (var i = 0; i < params.length; i++) {
		            var key = '$' + params[i].value;
		            if (Object.prototype.hasOwnProperty.call(paramMap, key)) {
		                this.tolerateError(messages_1.Messages.DuplicateBinding, params[i].value);
		            }
		            paramMap[key] = true;
		        }
		        if (this.context.strict && param.type === syntax_1.Syntax.Identifier) {
		            if (this.scanner.isRestrictedWord((param).name)) {
		                this.tolerateError(messages_1.Messages.StrictCatchVariable);
		            }
		        }
		        this.expect(')');
		        var body = this.parseBlock();
		        return this.finalize(node, new Node.CatchClause(param, body));
		    };
		    Parser.prototype.parseFinallyClause = function () {
		        this.expectKeyword('finally');
		        return this.parseBlock();
		    };
		    Parser.prototype.parseTryStatement = function () {
		        var node = this.createNode();
		        this.expectKeyword('try');
		        var block = this.parseBlock();
		        var handler = this.matchKeyword('catch') ? this.parseCatchClause() : null;
		        var finalizer = this.matchKeyword('finally') ? this.parseFinallyClause() : null;
		        if (!handler && !finalizer) {
		            this.throwError(messages_1.Messages.NoCatchOrFinally);
		        }
		        return this.finalize(node, new Node.TryStatement(block, handler, finalizer));
		    };
		    // ECMA-262 13.16 The debugger statement
		    Parser.prototype.parseDebuggerStatement = function () {
		        var node = this.createNode();
		        this.expectKeyword('debugger');
		        this.consumeSemicolon();
		        return this.finalize(node, new Node.DebuggerStatement());
		    };
		    // ECMA-262 13 Statements
		    Parser.prototype.parseStatement = function () {
		        var statement = null;
		        switch (this.lookahead.type) {
		            case token_1.Token.BooleanLiteral:
		            case token_1.Token.NullLiteral:
		            case token_1.Token.NumericLiteral:
		            case token_1.Token.StringLiteral:
		            case token_1.Token.Template:
		            case token_1.Token.RegularExpression:
		                statement = this.parseExpressionStatement();
		                break;
		            case token_1.Token.Punctuator:
		                var value = this.lookahead.value;
		                if (value === '{') {
		                    statement = this.parseBlock();
		                }
		                else if (value === '(') {
		                    statement = this.parseExpressionStatement();
		                }
		                else if (value === ';') {
		                    statement = this.parseEmptyStatement();
		                }
		                else {
		                    statement = this.parseExpressionStatement();
		                }
		                break;
		            case token_1.Token.Identifier:
		                statement = this.parseLabelledStatement();
		                break;
		            case token_1.Token.Keyword:
		                switch (this.lookahead.value) {
		                    case 'break':
		                        statement = this.parseBreakStatement();
		                        break;
		                    case 'continue':
		                        statement = this.parseContinueStatement();
		                        break;
		                    case 'debugger':
		                        statement = this.parseDebuggerStatement();
		                        break;
		                    case 'do':
		                        statement = this.parseDoWhileStatement();
		                        break;
		                    case 'for':
		                        statement = this.parseForStatement();
		                        break;
		                    case 'function':
		                        statement = this.parseFunctionDeclaration();
		                        break;
		                    case 'if':
		                        statement = this.parseIfStatement();
		                        break;
		                    case 'return':
		                        statement = this.parseReturnStatement();
		                        break;
		                    case 'switch':
		                        statement = this.parseSwitchStatement();
		                        break;
		                    case 'throw':
		                        statement = this.parseThrowStatement();
		                        break;
		                    case 'try':
		                        statement = this.parseTryStatement();
		                        break;
		                    case 'var':
		                        statement = this.parseVariableStatement();
		                        break;
		                    case 'while':
		                        statement = this.parseWhileStatement();
		                        break;
		                    case 'with':
		                        statement = this.parseWithStatement();
		                        break;
		                    default:
		                        statement = this.parseExpressionStatement();
		                        break;
		                }
		                break;
		            default:
		                this.throwUnexpectedToken(this.lookahead);
		        }
		        return statement;
		    };
		    // ECMA-262 14.1 Function Definition
		    Parser.prototype.parseFunctionSourceElements = function () {
		        var node = this.createNode();
		        this.expect('{');
		        var body = this.parseDirectivePrologues();
		        var previousLabelSet = this.context.labelSet;
		        var previousInIteration = this.context.inIteration;
		        var previousInSwitch = this.context.inSwitch;
		        var previousInFunctionBody = this.context.inFunctionBody;
		        this.context.labelSet = {};
		        this.context.inIteration = false;
		        this.context.inSwitch = false;
		        this.context.inFunctionBody = true;
		        while (this.startMarker.index < this.scanner.length) {
		            if (this.match('}')) {
		                break;
		            }
		            body.push(this.parseStatementListItem());
		        }
		        this.expect('}');
		        this.context.labelSet = previousLabelSet;
		        this.context.inIteration = previousInIteration;
		        this.context.inSwitch = previousInSwitch;
		        this.context.inFunctionBody = previousInFunctionBody;
		        return this.finalize(node, new Node.BlockStatement(body));
		    };
		    Parser.prototype.validateParam = function (options, param, name) {
		        var key = '$' + name;
		        if (this.context.strict) {
		            if (this.scanner.isRestrictedWord(name)) {
		                options.stricted = param;
		                options.message = messages_1.Messages.StrictParamName;
		            }
		            if (Object.prototype.hasOwnProperty.call(options.paramSet, key)) {
		                options.stricted = param;
		                options.message = messages_1.Messages.StrictParamDupe;
		            }
		        }
		        else if (!options.firstRestricted) {
		            if (this.scanner.isRestrictedWord(name)) {
		                options.firstRestricted = param;
		                options.message = messages_1.Messages.StrictParamName;
		            }
		            else if (this.scanner.isStrictModeReservedWord(name)) {
		                options.firstRestricted = param;
		                options.message = messages_1.Messages.StrictReservedWord;
		            }
		            else if (Object.prototype.hasOwnProperty.call(options.paramSet, key)) {
		                options.stricted = param;
		                options.message = messages_1.Messages.StrictParamDupe;
		            }
		        }
		        /* istanbul ignore next */
		        if (typeof Object.defineProperty === 'function') {
		            Object.defineProperty(options.paramSet, key, { value: true, enumerable: true, writable: true, configurable: true });
		        }
		        else {
		            options.paramSet[key] = true;
		        }
		    };
		    Parser.prototype.parseRestElement = function (params) {
		        var node = this.createNode();
		        this.expect('...');
		        var arg = this.parsePattern(params);
		        if (this.match('=')) {
		            this.throwError(messages_1.Messages.DefaultRestParameter);
		        }
		        if (!this.match(')')) {
		            this.throwError(messages_1.Messages.ParameterAfterRestParameter);
		        }
		        return this.finalize(node, new Node.RestElement(arg));
		    };
		    Parser.prototype.parseFormalParameter = function (options) {
		        var params = [];
		        var param = this.match('...') ? this.parseRestElement(params) : this.parsePatternWithDefault(params);
		        for (var i = 0; i < params.length; i++) {
		            this.validateParam(options, params[i], params[i].value);
		        }
		        options.params.push(param);
		        return !this.match(')');
		    };
		    Parser.prototype.parseFormalParameters = function (firstRestricted) {
		        var options;
		        options = {
		            params: [],
		            firstRestricted: firstRestricted
		        };
		        this.expect('(');
		        if (!this.match(')')) {
		            options.paramSet = {};
		            while (this.startMarker.index < this.scanner.length) {
		                if (!this.parseFormalParameter(options)) {
		                    break;
		                }
		                this.expect(',');
		            }
		        }
		        this.expect(')');
		        return {
		            params: options.params,
		            stricted: options.stricted,
		            firstRestricted: options.firstRestricted,
		            message: options.message
		        };
		    };
		    Parser.prototype.parseFunctionDeclaration = function (identifierIsOptional) {
		        var node = this.createNode();
		        this.expectKeyword('function');
		        var isGenerator = this.match('*');
		        if (isGenerator) {
		            this.nextToken();
		        }
		        var message;
		        var id = null;
		        var firstRestricted = null;
		        if (!identifierIsOptional || !this.match('(')) {
		            var token = this.lookahead;
		            id = this.parseVariableIdentifier();
		            if (this.context.strict) {
		                if (this.scanner.isRestrictedWord(token.value)) {
		                    this.tolerateUnexpectedToken(token, messages_1.Messages.StrictFunctionName);
		                }
		            }
		            else {
		                if (this.scanner.isRestrictedWord(token.value)) {
		                    firstRestricted = token;
		                    message = messages_1.Messages.StrictFunctionName;
		                }
		                else if (this.scanner.isStrictModeReservedWord(token.value)) {
		                    firstRestricted = token;
		                    message = messages_1.Messages.StrictReservedWord;
		                }
		            }
		        }
		        var previousAllowYield = this.context.allowYield;
		        this.context.allowYield = !isGenerator;
		        var formalParameters = this.parseFormalParameters(firstRestricted);
		        var params = formalParameters.params;
		        var stricted = formalParameters.stricted;
		        firstRestricted = formalParameters.firstRestricted;
		        if (formalParameters.message) {
		            message = formalParameters.message;
		        }
		        var previousStrict = this.context.strict;
		        var body = this.parseFunctionSourceElements();
		        if (this.context.strict && firstRestricted) {
		            this.throwUnexpectedToken(firstRestricted, message);
		        }
		        if (this.context.strict && stricted) {
		            this.tolerateUnexpectedToken(stricted, message);
		        }
		        this.context.strict = previousStrict;
		        this.context.allowYield = previousAllowYield;
		        return this.finalize(node, new Node.FunctionDeclaration(id, params, body, isGenerator));
		    };
		    Parser.prototype.parseFunctionExpression = function () {
		        var node = this.createNode();
		        this.expectKeyword('function');
		        var isGenerator = this.match('*');
		        if (isGenerator) {
		            this.nextToken();
		        }
		        var message;
		        var id = null;
		        var firstRestricted;
		        var previousAllowYield = this.context.allowYield;
		        this.context.allowYield = !isGenerator;
		        if (!this.match('(')) {
		            var token = this.lookahead;
		            id = (!this.context.strict && !isGenerator && this.matchKeyword('yield')) ? this.parseIdentifierName() : this.parseVariableIdentifier();
		            if (this.context.strict) {
		                if (this.scanner.isRestrictedWord(token.value)) {
		                    this.tolerateUnexpectedToken(token, messages_1.Messages.StrictFunctionName);
		                }
		            }
		            else {
		                if (this.scanner.isRestrictedWord(token.value)) {
		                    firstRestricted = token;
		                    message = messages_1.Messages.StrictFunctionName;
		                }
		                else if (this.scanner.isStrictModeReservedWord(token.value)) {
		                    firstRestricted = token;
		                    message = messages_1.Messages.StrictReservedWord;
		                }
		            }
		        }
		        var formalParameters = this.parseFormalParameters(firstRestricted);
		        var params = formalParameters.params;
		        var stricted = formalParameters.stricted;
		        firstRestricted = formalParameters.firstRestricted;
		        if (formalParameters.message) {
		            message = formalParameters.message;
		        }
		        var previousStrict = this.context.strict;
		        var body = this.parseFunctionSourceElements();
		        if (this.context.strict && firstRestricted) {
		            this.throwUnexpectedToken(firstRestricted, message);
		        }
		        if (this.context.strict && stricted) {
		            this.tolerateUnexpectedToken(stricted, message);
		        }
		        this.context.strict = previousStrict;
		        this.context.allowYield = previousAllowYield;
		        return this.finalize(node, new Node.FunctionExpression(id, params, body, isGenerator));
		    };
		    // ECMA-262 14.1.1 Directive Prologues
		    Parser.prototype.parseDirective = function () {
		        var token = this.lookahead;
		        var directive = null;
		        var node = this.createNode();
		        var expr = this.parseExpression();
		        if (expr.type === syntax_1.Syntax.Literal) {
		            directive = this.getTokenRaw(token).slice(1, -1);
		        }
		        this.consumeSemicolon();
		        return this.finalize(node, directive ? new Node.Directive(expr, directive) :
		            new Node.ExpressionStatement(expr));
		    };
		    Parser.prototype.parseDirectivePrologues = function () {
		        var firstRestricted = null;
		        var body = [];
		        while (true) {
		            var token = this.lookahead;
		            if (token.type !== token_1.Token.StringLiteral) {
		                break;
		            }
		            var statement = this.parseDirective();
		            body.push(statement);
		            var directive = statement.directive;
		            if (typeof directive !== 'string') {
		                break;
		            }
		            if (directive === 'use strict') {
		                this.context.strict = true;
		                if (firstRestricted) {
		                    this.tolerateUnexpectedToken(firstRestricted, messages_1.Messages.StrictOctalLiteral);
		                }
		            }
		            else {
		                if (!firstRestricted && token.octal) {
		                    firstRestricted = token;
		                }
		            }
		        }
		        return body;
		    };
		    // ECMA-262 14.3 Method Definitions
		    Parser.prototype.qualifiedPropertyName = function (token) {
		        switch (token.type) {
		            case token_1.Token.Identifier:
		            case token_1.Token.StringLiteral:
		            case token_1.Token.BooleanLiteral:
		            case token_1.Token.NullLiteral:
		            case token_1.Token.NumericLiteral:
		            case token_1.Token.Keyword:
		                return true;
		            case token_1.Token.Punctuator:
		                return token.value === '[';
		        }
		        return false;
		    };
		    Parser.prototype.parseGetterMethod = function () {
		        var node = this.createNode();
		        this.expect('(');
		        this.expect(')');
		        var isGenerator = false;
		        var params = {
		            params: [],
		            stricted: null,
		            firstRestricted: null,
		            message: null
		        };
		        var previousAllowYield = this.context.allowYield;
		        this.context.allowYield = false;
		        var method = this.parsePropertyMethod(params);
		        this.context.allowYield = previousAllowYield;
		        return this.finalize(node, new Node.FunctionExpression(null, params.params, method, isGenerator));
		    };
		    Parser.prototype.parseSetterMethod = function () {
		        var node = this.createNode();
		        var options = {
		            params: [],
		            firstRestricted: null,
		            paramSet: {}
		        };
		        var isGenerator = false;
		        var previousAllowYield = this.context.allowYield;
		        this.context.allowYield = false;
		        this.expect('(');
		        if (this.match(')')) {
		            this.tolerateUnexpectedToken(this.lookahead);
		        }
		        else {
		            this.parseFormalParameter(options);
		        }
		        this.expect(')');
		        var method = this.parsePropertyMethod(options);
		        this.context.allowYield = previousAllowYield;
		        return this.finalize(node, new Node.FunctionExpression(null, options.params, method, isGenerator));
		    };
		    Parser.prototype.parseGeneratorMethod = function () {
		        var node = this.createNode();
		        var isGenerator = true;
		        var previousAllowYield = this.context.allowYield;
		        this.context.allowYield = true;
		        var params = this.parseFormalParameters();
		        this.context.allowYield = false;
		        var method = this.parsePropertyMethod(params);
		        this.context.allowYield = previousAllowYield;
		        return this.finalize(node, new Node.FunctionExpression(null, params.params, method, isGenerator));
		    };
		    // ECMA-262 14.4 Generator Function Definitions
		    Parser.prototype.isStartOfExpression = function () {
		        var start = true;
		        var value = this.lookahead.value;
		        switch (this.lookahead.type) {
		            case token_1.Token.Punctuator:
		                start = (value === '[') || (value === '(') || (value === '{') ||
		                    (value === '+') || (value === '-') ||
		                    (value === '!') || (value === '~') ||
		                    (value === '++') || (value === '--') ||
		                    (value === '/') || (value === '/='); // regular expression literal
		                break;
		            case token_1.Token.Keyword:
		                start = (value === 'class') || (value === 'delete') ||
		                    (value === 'function') || (value === 'let') || (value === 'new') ||
		                    (value === 'super') || (value === 'this') || (value === 'typeof') ||
		                    (value === 'void') || (value === 'yield');
		                break;
		            default:
		                break;
		        }
		        return start;
		    };
		    Parser.prototype.parseYieldExpression = function () {
		        var node = this.createNode();
		        this.expectKeyword('yield');
		        var argument = null;
		        var delegate = false;
		        if (!this.hasLineTerminator) {
		            var previousAllowYield = this.context.allowYield;
		            this.context.allowYield = false;
		            delegate = this.match('*');
		            if (delegate) {
		                this.nextToken();
		                argument = this.parseAssignmentExpression();
		            }
		            else if (this.isStartOfExpression()) {
		                argument = this.parseAssignmentExpression();
		            }
		            this.context.allowYield = previousAllowYield;
		        }
		        return this.finalize(node, new Node.YieldExpression(argument, delegate));
		    };
		    // ECMA-262 14.5 Class Definitions
		    Parser.prototype.parseClassElement = function (hasConstructor) {
		        var token = this.lookahead;
		        var node = this.createNode();
		        var kind;
		        var key;
		        var value;
		        var computed = false;
		        var method = false;
		        var isStatic = false;
		        if (this.match('*')) {
		            this.nextToken();
		        }
		        else {
		            computed = this.match('[');
		            key = this.parseObjectPropertyKey();
		            var id = key;
		            if (id.name === 'static' && (this.qualifiedPropertyName(this.lookahead) || this.match('*'))) {
		                token = this.lookahead;
		                isStatic = true;
		                computed = this.match('[');
		                if (this.match('*')) {
		                    this.nextToken();
		                }
		                else {
		                    key = this.parseObjectPropertyKey();
		                }
		            }
		        }
		        var lookaheadPropertyKey = this.qualifiedPropertyName(this.lookahead);
		        if (token.type === token_1.Token.Identifier) {
		            if (token.value === 'get' && lookaheadPropertyKey) {
		                kind = 'get';
		                computed = this.match('[');
		                key = this.parseObjectPropertyKey();
		                this.context.allowYield = false;
		                value = this.parseGetterMethod();
		            }
		            else if (token.value === 'set' && lookaheadPropertyKey) {
		                kind = 'set';
		                computed = this.match('[');
		                key = this.parseObjectPropertyKey();
		                value = this.parseSetterMethod();
		            }
		        }
		        else if (token.type === token_1.Token.Punctuator && token.value === '*' && lookaheadPropertyKey) {
		            kind = 'init';
		            computed = this.match('[');
		            key = this.parseObjectPropertyKey();
		            value = this.parseGeneratorMethod();
		            method = true;
		        }
		        if (!kind && key && this.match('(')) {
		            kind = 'init';
		            value = this.parsePropertyMethodFunction();
		            method = true;
		        }
		        if (!kind) {
		            this.throwUnexpectedToken(this.lookahead);
		        }
		        if (kind === 'init') {
		            kind = 'method';
		        }
		        if (!computed) {
		            if (isStatic && this.isPropertyKey(key, 'prototype')) {
		                this.throwUnexpectedToken(token, messages_1.Messages.StaticPrototype);
		            }
		            if (!isStatic && this.isPropertyKey(key, 'constructor')) {
		                if (kind !== 'method' || !method || value.generator) {
		                    this.throwUnexpectedToken(token, messages_1.Messages.ConstructorSpecialMethod);
		                }
		                if (hasConstructor.value) {
		                    this.throwUnexpectedToken(token, messages_1.Messages.DuplicateConstructor);
		                }
		                else {
		                    hasConstructor.value = true;
		                }
		                kind = 'constructor';
		            }
		        }
		        return this.finalize(node, new Node.MethodDefinition(key, computed, value, kind, isStatic));
		    };
		    Parser.prototype.parseClassElementList = function () {
		        var body = [];
		        var hasConstructor = { value: false };
		        this.expect('{');
		        while (!this.match('}')) {
		            if (this.match(';')) {
		                this.nextToken();
		            }
		            else {
		                body.push(this.parseClassElement(hasConstructor));
		            }
		        }
		        this.expect('}');
		        return body;
		    };
		    Parser.prototype.parseClassBody = function () {
		        var node = this.createNode();
		        var elementList = this.parseClassElementList();
		        return this.finalize(node, new Node.ClassBody(elementList));
		    };
		    Parser.prototype.parseClassDeclaration = function (identifierIsOptional) {
		        var node = this.createNode();
		        var previousStrict = this.context.strict;
		        this.context.strict = true;
		        this.expectKeyword('class');
		        var id = (identifierIsOptional && (this.lookahead.type !== token_1.Token.Identifier)) ? null : this.parseVariableIdentifier();
		        var superClass = null;
		        if (this.matchKeyword('extends')) {
		            this.nextToken();
		            superClass = this.isolateCoverGrammar(this.parseLeftHandSideExpressionAllowCall);
		        }
		        var classBody = this.parseClassBody();
		        this.context.strict = previousStrict;
		        return this.finalize(node, new Node.ClassDeclaration(id, superClass, classBody));
		    };
		    Parser.prototype.parseClassExpression = function () {
		        var node = this.createNode();
		        var previousStrict = this.context.strict;
		        this.context.strict = true;
		        this.expectKeyword('class');
		        var id = (this.lookahead.type === token_1.Token.Identifier) ? this.parseVariableIdentifier() : null;
		        var superClass = null;
		        if (this.matchKeyword('extends')) {
		            this.nextToken();
		            superClass = this.isolateCoverGrammar(this.parseLeftHandSideExpressionAllowCall);
		        }
		        var classBody = this.parseClassBody();
		        this.context.strict = previousStrict;
		        return this.finalize(node, new Node.ClassExpression(id, superClass, classBody));
		    };
		    // ECMA-262 15.1 Scripts
		    // ECMA-262 15.2 Modules
		    Parser.prototype.parseProgram = function () {
		        var node = this.createNode();
		        var body = this.parseDirectivePrologues();
		        while (this.startMarker.index < this.scanner.length) {
		            body.push(this.parseStatementListItem());
		        }
		        return this.finalize(node, new Node.Program(body, this.sourceType));
		    };
		    // ECMA-262 15.2.2 Imports
		    Parser.prototype.parseModuleSpecifier = function () {
		        var node = this.createNode();
		        if (this.lookahead.type !== token_1.Token.StringLiteral) {
		            this.throwError(messages_1.Messages.InvalidModuleSpecifier);
		        }
		        var token = this.nextToken();
		        var raw = this.getTokenRaw(token);
		        return this.finalize(node, new Node.Literal(token.value, raw));
		    };
		    // import {<foo as bar>} ...;
		    Parser.prototype.parseImportSpecifier = function () {
		        var node = this.createNode();
		        var imported;
		        var local;
		        if (this.lookahead.type === token_1.Token.Identifier) {
		            imported = this.parseVariableIdentifier();
		            local = imported;
		            if (this.matchContextualKeyword('as')) {
		                this.nextToken();
		                local = this.parseVariableIdentifier();
		            }
		        }
		        else {
		            imported = this.parseIdentifierName();
		            local = imported;
		            if (this.matchContextualKeyword('as')) {
		                this.nextToken();
		                local = this.parseVariableIdentifier();
		            }
		            else {
		                this.throwUnexpectedToken(this.nextToken());
		            }
		        }
		        return this.finalize(node, new Node.ImportSpecifier(local, imported));
		    };
		    // {foo, bar as bas}
		    Parser.prototype.parseNamedImports = function () {
		        this.expect('{');
		        var specifiers = [];
		        while (!this.match('}')) {
		            specifiers.push(this.parseImportSpecifier());
		            if (!this.match('}')) {
		                this.expect(',');
		            }
		        }
		        this.expect('}');
		        return specifiers;
		    };
		    // import <foo> ...;
		    Parser.prototype.parseImportDefaultSpecifier = function () {
		        var node = this.createNode();
		        var local = this.parseIdentifierName();
		        return this.finalize(node, new Node.ImportDefaultSpecifier(local));
		    };
		    // import <* as foo> ...;
		    Parser.prototype.parseImportNamespaceSpecifier = function () {
		        var node = this.createNode();
		        this.expect('*');
		        if (!this.matchContextualKeyword('as')) {
		            this.throwError(messages_1.Messages.NoAsAfterImportNamespace);
		        }
		        this.nextToken();
		        var local = this.parseIdentifierName();
		        return this.finalize(node, new Node.ImportNamespaceSpecifier(local));
		    };
		    Parser.prototype.parseImportDeclaration = function () {
		        if (this.context.inFunctionBody) {
		            this.throwError(messages_1.Messages.IllegalImportDeclaration);
		        }
		        var node = this.createNode();
		        this.expectKeyword('import');
		        var src;
		        var specifiers = [];
		        if (this.lookahead.type === token_1.Token.StringLiteral) {
		            // import 'foo';
		            src = this.parseModuleSpecifier();
		        }
		        else {
		            if (this.match('{')) {
		                // import {bar}
		                specifiers = specifiers.concat(this.parseNamedImports());
		            }
		            else if (this.match('*')) {
		                // import * as foo
		                specifiers.push(this.parseImportNamespaceSpecifier());
		            }
		            else if (this.isIdentifierName(this.lookahead) && !this.matchKeyword('default')) {
		                // import foo
		                specifiers.push(this.parseImportDefaultSpecifier());
		                if (this.match(',')) {
		                    this.nextToken();
		                    if (this.match('*')) {
		                        // import foo, * as foo
		                        specifiers.push(this.parseImportNamespaceSpecifier());
		                    }
		                    else if (this.match('{')) {
		                        // import foo, {bar}
		                        specifiers = specifiers.concat(this.parseNamedImports());
		                    }
		                    else {
		                        this.throwUnexpectedToken(this.lookahead);
		                    }
		                }
		            }
		            else {
		                this.throwUnexpectedToken(this.nextToken());
		            }
		            if (!this.matchContextualKeyword('from')) {
		                var message = this.lookahead.value ? messages_1.Messages.UnexpectedToken : messages_1.Messages.MissingFromClause;
		                this.throwError(message, this.lookahead.value);
		            }
		            this.nextToken();
		            src = this.parseModuleSpecifier();
		        }
		        this.consumeSemicolon();
		        return this.finalize(node, new Node.ImportDeclaration(specifiers, src));
		    };
		    // ECMA-262 15.2.3 Exports
		    Parser.prototype.parseExportSpecifier = function () {
		        var node = this.createNode();
		        var local = this.parseIdentifierName();
		        var exported = local;
		        if (this.matchContextualKeyword('as')) {
		            this.nextToken();
		            exported = this.parseIdentifierName();
		        }
		        return this.finalize(node, new Node.ExportSpecifier(local, exported));
		    };
		    Parser.prototype.parseExportDeclaration = function () {
		        if (this.context.inFunctionBody) {
		            this.throwError(messages_1.Messages.IllegalExportDeclaration);
		        }
		        var node = this.createNode();
		        this.expectKeyword('export');
		        var exportDeclaration;
		        if (this.matchKeyword('default')) {
		            // export default ...
		            this.nextToken();
		            if (this.matchKeyword('function')) {
		                // export default function foo () {}
		                // export default function () {}
		                var declaration = this.parseFunctionDeclaration(true);
		                exportDeclaration = this.finalize(node, new Node.ExportDefaultDeclaration(declaration));
		            }
		            else if (this.matchKeyword('class')) {
		                // export default class foo {}
		                var declaration = this.parseClassDeclaration(true);
		                exportDeclaration = this.finalize(node, new Node.ExportDefaultDeclaration(declaration));
		            }
		            else {
		                if (this.matchContextualKeyword('from')) {
		                    this.throwError(messages_1.Messages.UnexpectedToken, this.lookahead.value);
		                }
		                // export default {};
		                // export default [];
		                // export default (1 + 2);
		                var declaration = this.match('{') ? this.parseObjectInitializer() :
		                    this.match('[') ? this.parseArrayInitializer() : this.parseAssignmentExpression();
		                this.consumeSemicolon();
		                exportDeclaration = this.finalize(node, new Node.ExportDefaultDeclaration(declaration));
		            }
		        }
		        else if (this.match('*')) {
		            // export * from 'foo';
		            this.nextToken();
		            if (!this.matchContextualKeyword('from')) {
		                var message = this.lookahead.value ? messages_1.Messages.UnexpectedToken : messages_1.Messages.MissingFromClause;
		                this.throwError(message, this.lookahead.value);
		            }
		            this.nextToken();
		            var src = this.parseModuleSpecifier();
		            this.consumeSemicolon();
		            exportDeclaration = this.finalize(node, new Node.ExportAllDeclaration(src));
		        }
		        else if (this.lookahead.type === token_1.Token.Keyword) {
		            // export var f = 1;
		            var declaration = void 0;
		            switch (this.lookahead.value) {
		                case 'let':
		                case 'const':
		                    declaration = this.parseLexicalDeclaration({ inFor: false });
		                    break;
		                case 'var':
		                case 'class':
		                case 'function':
		                    declaration = this.parseStatementListItem();
		                    break;
		                default:
		                    this.throwUnexpectedToken(this.lookahead);
		            }
		            exportDeclaration = this.finalize(node, new Node.ExportNamedDeclaration(declaration, [], null));
		        }
		        else {
		            var specifiers = [];
		            var source = null;
		            var isExportFromIdentifier = false;
		            this.expect('{');
		            while (!this.match('}')) {
		                isExportFromIdentifier = isExportFromIdentifier || this.matchKeyword('default');
		                specifiers.push(this.parseExportSpecifier());
		                if (!this.match('}')) {
		                    this.expect(',');
		                }
		            }
		            this.expect('}');
		            if (this.matchContextualKeyword('from')) {
		                // export {default} from 'foo';
		                // export {foo} from 'foo';
		                this.nextToken();
		                source = this.parseModuleSpecifier();
		                this.consumeSemicolon();
		            }
		            else if (isExportFromIdentifier) {
		                // export {default}; // missing fromClause
		                var message = this.lookahead.value ? messages_1.Messages.UnexpectedToken : messages_1.Messages.MissingFromClause;
		                this.throwError(message, this.lookahead.value);
		            }
		            else {
		                // export {foo};
		                this.consumeSemicolon();
		            }
		            exportDeclaration = this.finalize(node, new Node.ExportNamedDeclaration(null, specifiers, source));
		        }
		        return exportDeclaration;
		    };
		    return Parser;
		}());
		exports.Parser = Parser;


	/***/ },
	/* 4 */
	/***/ function(module, exports) {

		// Ensure the condition is true, otherwise throw an error.
		// This is only to have a better contract semantic, i.e. another safety net
		// to catch a logic error. The condition shall be fulfilled in normal case.
		// Do NOT use this to enforce a certain condition on any user input.
		"use strict";
		function assert(condition, message) {
		    /* istanbul ignore if */
		    if (!condition) {
		        throw new Error('ASSERT: ' + message);
		    }
		}
		exports.assert = assert;


	/***/ },
	/* 5 */
	/***/ function(module, exports) {

		"use strict";
		// Error messages should be identical to V8.
		exports.Messages = {
		    UnexpectedToken: 'Unexpected token %0',
		    UnexpectedTokenIllegal: 'Unexpected token ILLEGAL',
		    UnexpectedNumber: 'Unexpected number',
		    UnexpectedString: 'Unexpected string',
		    UnexpectedIdentifier: 'Unexpected identifier',
		    UnexpectedReserved: 'Unexpected reserved word',
		    UnexpectedTemplate: 'Unexpected quasi %0',
		    UnexpectedEOS: 'Unexpected end of input',
		    NewlineAfterThrow: 'Illegal newline after throw',
		    InvalidRegExp: 'Invalid regular expression',
		    UnterminatedRegExp: 'Invalid regular expression: missing /',
		    InvalidLHSInAssignment: 'Invalid left-hand side in assignment',
		    InvalidLHSInForIn: 'Invalid left-hand side in for-in',
		    InvalidLHSInForLoop: 'Invalid left-hand side in for-loop',
		    MultipleDefaultsInSwitch: 'More than one default clause in switch statement',
		    NoCatchOrFinally: 'Missing catch or finally after try',
		    UnknownLabel: 'Undefined label \'%0\'',
		    Redeclaration: '%0 \'%1\' has already been declared',
		    IllegalContinue: 'Illegal continue statement',
		    IllegalBreak: 'Illegal break statement',
		    IllegalReturn: 'Illegal return statement',
		    StrictModeWith: 'Strict mode code may not include a with statement',
		    StrictCatchVariable: 'Catch variable may not be eval or arguments in strict mode',
		    StrictVarName: 'Variable name may not be eval or arguments in strict mode',
		    StrictParamName: 'Parameter name eval or arguments is not allowed in strict mode',
		    StrictParamDupe: 'Strict mode function may not have duplicate parameter names',
		    StrictFunctionName: 'Function name may not be eval or arguments in strict mode',
		    StrictOctalLiteral: 'Octal literals are not allowed in strict mode.',
		    StrictDelete: 'Delete of an unqualified identifier in strict mode.',
		    StrictLHSAssignment: 'Assignment to eval or arguments is not allowed in strict mode',
		    StrictLHSPostfix: 'Postfix increment/decrement may not have eval or arguments operand in strict mode',
		    StrictLHSPrefix: 'Prefix increment/decrement may not have eval or arguments operand in strict mode',
		    StrictReservedWord: 'Use of future reserved word in strict mode',
		    TemplateOctalLiteral: 'Octal literals are not allowed in template strings.',
		    ParameterAfterRestParameter: 'Rest parameter must be last formal parameter',
		    DefaultRestParameter: 'Unexpected token =',
		    DuplicateProtoProperty: 'Duplicate __proto__ fields are not allowed in object literals',
		    ConstructorSpecialMethod: 'Class constructor may not be an accessor',
		    DuplicateConstructor: 'A class may only have one constructor',
		    StaticPrototype: 'Classes may not have static property named prototype',
		    MissingFromClause: 'Unexpected token',
		    NoAsAfterImportNamespace: 'Unexpected token',
		    InvalidModuleSpecifier: 'Unexpected token',
		    IllegalImportDeclaration: 'Unexpected token',
		    IllegalExportDeclaration: 'Unexpected token',
		    DuplicateBinding: 'Duplicate binding %0',
		    ForInOfLoopInitializer: '%0 loop variable declaration may not have an initializer'
		};


	/***/ },
	/* 6 */
	/***/ function(module, exports) {

		"use strict";
		var ErrorHandler = (function () {
		    function ErrorHandler() {
		        this.errors = [];
		        this.tolerant = false;
		    }
		    ;
		    ErrorHandler.prototype.recordError = function (error) {
		        this.errors.push(error);
		    };
		    ;
		    ErrorHandler.prototype.tolerate = function (error) {
		        if (this.tolerant) {
		            this.recordError(error);
		        }
		        else {
		            throw error;
		        }
		    };
		    ;
		    ErrorHandler.prototype.constructError = function (msg, column) {
		        var error = new Error(msg);
		        try {
		            throw error;
		        }
		        catch (base) {
		            /* istanbul ignore else */
		            if (Object.create && Object.defineProperty) {
		                error = Object.create(base);
		                Object.defineProperty(error, 'column', { value: column });
		            }
		        }
		        finally {
		            return error;
		        }
		    };
		    ;
		    ErrorHandler.prototype.createError = function (index, line, col, description) {
		        var msg = 'Line ' + line + ': ' + description;
		        var error = this.constructError(msg, col);
		        error.index = index;
		        error.lineNumber = line;
		        error.description = description;
		        return error;
		    };
		    ;
		    ErrorHandler.prototype.throwError = function (index, line, col, description) {
		        throw this.createError(index, line, col, description);
		    };
		    ;
		    ErrorHandler.prototype.tolerateError = function (index, line, col, description) {
		        var error = this.createError(index, line, col, description);
		        if (this.tolerant) {
		            this.recordError(error);
		        }
		        else {
		            throw error;
		        }
		    };
		    ;
		    return ErrorHandler;
		}());
		exports.ErrorHandler = ErrorHandler;


	/***/ },
	/* 7 */
	/***/ function(module, exports) {

		"use strict";
		(function (Token) {
		    Token[Token["BooleanLiteral"] = 1] = "BooleanLiteral";
		    Token[Token["EOF"] = 2] = "EOF";
		    Token[Token["Identifier"] = 3] = "Identifier";
		    Token[Token["Keyword"] = 4] = "Keyword";
		    Token[Token["NullLiteral"] = 5] = "NullLiteral";
		    Token[Token["NumericLiteral"] = 6] = "NumericLiteral";
		    Token[Token["Punctuator"] = 7] = "Punctuator";
		    Token[Token["StringLiteral"] = 8] = "StringLiteral";
		    Token[Token["RegularExpression"] = 9] = "RegularExpression";
		    Token[Token["Template"] = 10] = "Template";
		})(exports.Token || (exports.Token = {}));
		var Token = exports.Token;
		;
		exports.TokenName = {};
		exports.TokenName[Token.BooleanLiteral] = 'Boolean';
		exports.TokenName[Token.EOF] = '<end>';
		exports.TokenName[Token.Identifier] = 'Identifier';
		exports.TokenName[Token.Keyword] = 'Keyword';
		exports.TokenName[Token.NullLiteral] = 'Null';
		exports.TokenName[Token.NumericLiteral] = 'Numeric';
		exports.TokenName[Token.Punctuator] = 'Punctuator';
		exports.TokenName[Token.StringLiteral] = 'String';
		exports.TokenName[Token.RegularExpression] = 'RegularExpression';
		exports.TokenName[Token.Template] = 'Template';


	/***/ },
	/* 8 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var assert_1 = __webpack_require__(4);
		var messages_1 = __webpack_require__(5);
		var character_1 = __webpack_require__(9);
		var token_1 = __webpack_require__(7);
		function hexValue(ch) {
		    return '0123456789abcdef'.indexOf(ch.toLowerCase());
		}
		function octalValue(ch) {
		    return '01234567'.indexOf(ch);
		}
		var Scanner = (function () {
		    function Scanner(code, handler) {
		        this.source = code;
		        this.errorHandler = handler;
		        this.trackComment = false;
		        this.length = code.length;
		        this.index = 0;
		        this.lineNumber = (code.length > 0) ? 1 : 0;
		        this.lineStart = 0;
		        this.curlyStack = [];
		    }
		    ;
		    Scanner.prototype.eof = function () {
		        return this.index >= this.length;
		    };
		    ;
		    Scanner.prototype.throwUnexpectedToken = function (message) {
		        if (message === void 0) { message = messages_1.Messages.UnexpectedTokenIllegal; }
		        this.errorHandler.throwError(this.index, this.lineNumber, this.index - this.lineStart + 1, message);
		    };
		    ;
		    Scanner.prototype.tolerateUnexpectedToken = function () {
		        this.errorHandler.tolerateError(this.index, this.lineNumber, this.index - this.lineStart + 1, messages_1.Messages.UnexpectedTokenIllegal);
		    };
		    ;
		    // ECMA-262 11.4 Comments
		    Scanner.prototype.skipSingleLineComment = function (offset) {
		        var comments;
		        var start, loc;
		        if (this.trackComment) {
		            comments = [];
		            start = this.index - offset;
		            loc = {
		                start: {
		                    line: this.lineNumber,
		                    column: this.index - this.lineStart - offset
		                },
		                end: {}
		            };
		        }
		        while (!this.eof()) {
		            var ch = this.source.charCodeAt(this.index);
		            ++this.index;
		            if (character_1.Character.isLineTerminator(ch)) {
		                if (this.trackComment) {
		                    loc.end = {
		                        line: this.lineNumber,
		                        column: this.index - this.lineStart - 1
		                    };
		                    var entry = {
		                        multiLine: false,
		                        slice: [start + offset, this.index - 1],
		                        range: [start, this.index - 1],
		                        loc: loc
		                    };
		                    comments.push(entry);
		                }
		                if (ch === 13 && this.source.charCodeAt(this.index) === 10) {
		                    ++this.index;
		                }
		                ++this.lineNumber;
		                this.lineStart = this.index;
		                return comments;
		            }
		        }
		        if (this.trackComment) {
		            loc.end = {
		                line: this.lineNumber,
		                column: this.index - this.lineStart
		            };
		            var entry = {
		                multiLine: false,
		                slice: [start + offset, this.index],
		                range: [start, this.index],
		                loc: loc
		            };
		            comments.push(entry);
		        }
		        return comments;
		    };
		    ;
		    Scanner.prototype.skipMultiLineComment = function () {
		        var comments;
		        var start, loc;
		        if (this.trackComment) {
		            comments = [];
		            start = this.index - 2;
		            loc = {
		                start: {
		                    line: this.lineNumber,
		                    column: this.index - this.lineStart - 2
		                },
		                end: {}
		            };
		        }
		        while (!this.eof()) {
		            var ch = this.source.charCodeAt(this.index);
		            if (character_1.Character.isLineTerminator(ch)) {
		                if (ch === 0x0D && this.source.charCodeAt(this.index + 1) === 0x0A) {
		                    ++this.index;
		                }
		                ++this.lineNumber;
		                ++this.index;
		                this.lineStart = this.index;
		            }
		            else if (ch === 0x2A) {
		                // Block comment ends with '*/'.
		                if (this.source.charCodeAt(this.index + 1) === 0x2F) {
		                    this.index += 2;
		                    if (this.trackComment) {
		                        loc.end = {
		                            line: this.lineNumber,
		                            column: this.index - this.lineStart
		                        };
		                        var entry = {
		                            multiLine: true,
		                            slice: [start + 2, this.index - 2],
		                            range: [start, this.index],
		                            loc: loc
		                        };
		                        comments.push(entry);
		                    }
		                    return comments;
		                }
		                ++this.index;
		            }
		            else {
		                ++this.index;
		            }
		        }
		        // Ran off the end of the file - the whole thing is a comment
		        if (this.trackComment) {
		            loc.end = {
		                line: this.lineNumber,
		                column: this.index - this.lineStart
		            };
		            var entry = {
		                multiLine: true,
		                slice: [start + 2, this.index],
		                range: [start, this.index],
		                loc: loc
		            };
		            comments.push(entry);
		        }
		        this.tolerateUnexpectedToken();
		        return comments;
		    };
		    ;
		    Scanner.prototype.scanComments = function () {
		        var comments;
		        if (this.trackComment) {
		            comments = [];
		        }
		        var start = (this.index === 0);
		        while (!this.eof()) {
		            var ch = this.source.charCodeAt(this.index);
		            if (character_1.Character.isWhiteSpace(ch)) {
		                ++this.index;
		            }
		            else if (character_1.Character.isLineTerminator(ch)) {
		                ++this.index;
		                if (ch === 0x0D && this.source.charCodeAt(this.index) === 0x0A) {
		                    ++this.index;
		                }
		                ++this.lineNumber;
		                this.lineStart = this.index;
		                start = true;
		            }
		            else if (ch === 0x2F) {
		                ch = this.source.charCodeAt(this.index + 1);
		                if (ch === 0x2F) {
		                    this.index += 2;
		                    var comment = this.skipSingleLineComment(2);
		                    if (this.trackComment) {
		                        comments = comments.concat(comment);
		                    }
		                    start = true;
		                }
		                else if (ch === 0x2A) {
		                    this.index += 2;
		                    var comment = this.skipMultiLineComment();
		                    if (this.trackComment) {
		                        comments = comments.concat(comment);
		                    }
		                }
		                else {
		                    break;
		                }
		            }
		            else if (start && ch === 0x2D) {
		                // U+003E is '>'
		                if ((this.source.charCodeAt(this.index + 1) === 0x2D) && (this.source.charCodeAt(this.index + 2) === 0x3E)) {
		                    // '-->' is a single-line comment
		                    this.index += 3;
		                    var comment = this.skipSingleLineComment(3);
		                    if (this.trackComment) {
		                        comments = comments.concat(comment);
		                    }
		                }
		                else {
		                    break;
		                }
		            }
		            else if (ch === 0x3C) {
		                if (this.source.slice(this.index + 1, this.index + 4) === '!--') {
		                    this.index += 4; // `<!--`
		                    var comment = this.skipSingleLineComment(4);
		                    if (this.trackComment) {
		                        comments = comments.concat(comment);
		                    }
		                }
		                else {
		                    break;
		                }
		            }
		            else {
		                break;
		            }
		        }
		        return comments;
		    };
		    ;
		    // ECMA-262 11.6.2.2 Future Reserved Words
		    Scanner.prototype.isFutureReservedWord = function (id) {
		        switch (id) {
		            case 'enum':
		            case 'export':
		            case 'import':
		            case 'super':
		                return true;
		            default:
		                return false;
		        }
		    };
		    ;
		    Scanner.prototype.isStrictModeReservedWord = function (id) {
		        switch (id) {
		            case 'implements':
		            case 'interface':
		            case 'package':
		            case 'private':
		            case 'protected':
		            case 'public':
		            case 'static':
		            case 'yield':
		            case 'let':
		                return true;
		            default:
		                return false;
		        }
		    };
		    ;
		    Scanner.prototype.isRestrictedWord = function (id) {
		        return id === 'eval' || id === 'arguments';
		    };
		    ;
		    // ECMA-262 11.6.2.1 Keywords
		    Scanner.prototype.isKeyword = function (id) {
		        switch (id.length) {
		            case 2:
		                return (id === 'if') || (id === 'in') || (id === 'do');
		            case 3:
		                return (id === 'var') || (id === 'for') || (id === 'new') ||
		                    (id === 'try') || (id === 'let');
		            case 4:
		                return (id === 'this') || (id === 'else') || (id === 'case') ||
		                    (id === 'void') || (id === 'with') || (id === 'enum');
		            case 5:
		                return (id === 'while') || (id === 'break') || (id === 'catch') ||
		                    (id === 'throw') || (id === 'const') || (id === 'yield') ||
		                    (id === 'class') || (id === 'super');
		            case 6:
		                return (id === 'return') || (id === 'typeof') || (id === 'delete') ||
		                    (id === 'switch') || (id === 'export') || (id === 'import');
		            case 7:
		                return (id === 'default') || (id === 'finally') || (id === 'extends');
		            case 8:
		                return (id === 'function') || (id === 'continue') || (id === 'debugger');
		            case 10:
		                return (id === 'instanceof');
		            default:
		                return false;
		        }
		    };
		    ;
		    Scanner.prototype.codePointAt = function (i) {
		        var cp = this.source.charCodeAt(i);
		        if (cp >= 0xD800 && cp <= 0xDBFF) {
		            var second = this.source.charCodeAt(i + 1);
		            if (second >= 0xDC00 && second <= 0xDFFF) {
		                var first = cp;
		                cp = (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
		            }
		        }
		        return cp;
		    };
		    ;
		    Scanner.prototype.scanHexEscape = function (prefix) {
		        var len = (prefix === 'u') ? 4 : 2;
		        var code = 0;
		        for (var i = 0; i < len; ++i) {
		            if (!this.eof() && character_1.Character.isHexDigit(this.source.charCodeAt(this.index))) {
		                code = code * 16 + hexValue(this.source[this.index++]);
		            }
		            else {
		                return '';
		            }
		        }
		        return String.fromCharCode(code);
		    };
		    ;
		    Scanner.prototype.scanUnicodeCodePointEscape = function () {
		        var ch = this.source[this.index];
		        var code = 0;
		        // At least, one hex digit is required.
		        if (ch === '}') {
		            this.throwUnexpectedToken();
		        }
		        while (!this.eof()) {
		            ch = this.source[this.index++];
		            if (!character_1.Character.isHexDigit(ch.charCodeAt(0))) {
		                break;
		            }
		            code = code * 16 + hexValue(ch);
		        }
		        if (code > 0x10FFFF || ch !== '}') {
		            this.throwUnexpectedToken();
		        }
		        return character_1.Character.fromCodePoint(code);
		    };
		    ;
		    Scanner.prototype.getIdentifier = function () {
		        var start = this.index++;
		        while (!this.eof()) {
		            var ch = this.source.charCodeAt(this.index);
		            if (ch === 0x5C) {
		                // Blackslash (U+005C) marks Unicode escape sequence.
		                this.index = start;
		                return this.getComplexIdentifier();
		            }
		            else if (ch >= 0xD800 && ch < 0xDFFF) {
		                // Need to handle surrogate pairs.
		                this.index = start;
		                return this.getComplexIdentifier();
		            }
		            if (character_1.Character.isIdentifierPart(ch)) {
		                ++this.index;
		            }
		            else {
		                break;
		            }
		        }
		        return this.source.slice(start, this.index);
		    };
		    ;
		    Scanner.prototype.getComplexIdentifier = function () {
		        var cp = this.codePointAt(this.index);
		        var id = character_1.Character.fromCodePoint(cp);
		        this.index += id.length;
		        // '\u' (U+005C, U+0075) denotes an escaped character.
		        var ch;
		        if (cp === 0x5C) {
		            if (this.source.charCodeAt(this.index) !== 0x75) {
		                this.throwUnexpectedToken();
		            }
		            ++this.index;
		            if (this.source[this.index] === '{') {
		                ++this.index;
		                ch = this.scanUnicodeCodePointEscape();
		            }
		            else {
		                ch = this.scanHexEscape('u');
		                cp = ch.charCodeAt(0);
		                if (!ch || ch === '\\' || !character_1.Character.isIdentifierStart(cp)) {
		                    this.throwUnexpectedToken();
		                }
		            }
		            id = ch;
		        }
		        while (!this.eof()) {
		            cp = this.codePointAt(this.index);
		            if (!character_1.Character.isIdentifierPart(cp)) {
		                break;
		            }
		            ch = character_1.Character.fromCodePoint(cp);
		            id += ch;
		            this.index += ch.length;
		            // '\u' (U+005C, U+0075) denotes an escaped character.
		            if (cp === 0x5C) {
		                id = id.substr(0, id.length - 1);
		                if (this.source.charCodeAt(this.index) !== 0x75) {
		                    this.throwUnexpectedToken();
		                }
		                ++this.index;
		                if (this.source[this.index] === '{') {
		                    ++this.index;
		                    ch = this.scanUnicodeCodePointEscape();
		                }
		                else {
		                    ch = this.scanHexEscape('u');
		                    cp = ch.charCodeAt(0);
		                    if (!ch || ch === '\\' || !character_1.Character.isIdentifierPart(cp)) {
		                        this.throwUnexpectedToken();
		                    }
		                }
		                id += ch;
		            }
		        }
		        return id;
		    };
		    ;
		    Scanner.prototype.octalToDecimal = function (ch) {
		        // \0 is not octal escape sequence
		        var octal = (ch !== '0');
		        var code = octalValue(ch);
		        if (!this.eof() && character_1.Character.isOctalDigit(this.source.charCodeAt(this.index))) {
		            octal = true;
		            code = code * 8 + octalValue(this.source[this.index++]);
		            // 3 digits are only allowed when string starts
		            // with 0, 1, 2, 3
		            if ('0123'.indexOf(ch) >= 0 && !this.eof() && character_1.Character.isOctalDigit(this.source.charCodeAt(this.index))) {
		                code = code * 8 + octalValue(this.source[this.index++]);
		            }
		        }
		        return {
		            code: code,
		            octal: octal
		        };
		    };
		    ;
		    // ECMA-262 11.6 Names and Keywords
		    Scanner.prototype.scanIdentifier = function () {
		        var type;
		        var start = this.index;
		        // Backslash (U+005C) starts an escaped character.
		        var id = (this.source.charCodeAt(start) === 0x5C) ? this.getComplexIdentifier() : this.getIdentifier();
		        // There is no keyword or literal with only one character.
		        // Thus, it must be an identifier.
		        if (id.length === 1) {
		            type = token_1.Token.Identifier;
		        }
		        else if (this.isKeyword(id)) {
		            type = token_1.Token.Keyword;
		        }
		        else if (id === 'null') {
		            type = token_1.Token.NullLiteral;
		        }
		        else if (id === 'true' || id === 'false') {
		            type = token_1.Token.BooleanLiteral;
		        }
		        else {
		            type = token_1.Token.Identifier;
		        }
		        return {
		            type: type,
		            value: id,
		            lineNumber: this.lineNumber,
		            lineStart: this.lineStart,
		            start: start,
		            end: this.index
		        };
		    };
		    ;
		    // ECMA-262 11.7 Punctuators
		    Scanner.prototype.scanPunctuator = function () {
		        var token = {
		            type: token_1.Token.Punctuator,
		            value: '',
		            lineNumber: this.lineNumber,
		            lineStart: this.lineStart,
		            start: this.index,
		            end: this.index
		        };
		        // Check for most common single-character punctuators.
		        var str = this.source[this.index];
		        switch (str) {
		            case '(':
		            case '{':
		                if (str === '{') {
		                    this.curlyStack.push('{');
		                }
		                ++this.index;
		                break;
		            case '.':
		                ++this.index;
		                if (this.source[this.index] === '.' && this.source[this.index + 1] === '.') {
		                    // Spread operator: ...
		                    this.index += 2;
		                    str = '...';
		                }
		                break;
		            case '}':
		                ++this.index;
		                this.curlyStack.pop();
		                break;
		            case ')':
		            case ';':
		            case ',':
		            case '[':
		            case ']':
		            case ':':
		            case '?':
		            case '~':
		                ++this.index;
		                break;
		            default:
		                // 4-character punctuator.
		                str = this.source.substr(this.index, 4);
		                if (str === '>>>=') {
		                    this.index += 4;
		                }
		                else {
		                    // 3-character punctuators.
		                    str = str.substr(0, 3);
		                    if (str === '===' || str === '!==' || str === '>>>' ||
		                        str === '<<=' || str === '>>=' || str === '**=') {
		                        this.index += 3;
		                    }
		                    else {
		                        // 2-character punctuators.
		                        str = str.substr(0, 2);
		                        if (str === '&&' || str === '||' || str === '==' || str === '!=' ||
		                            str === '+=' || str === '-=' || str === '*=' || str === '/=' ||
		                            str === '++' || str === '--' || str === '<<' || str === '>>' ||
		                            str === '&=' || str === '|=' || str === '^=' || str === '%=' ||
		                            str === '<=' || str === '>=' || str === '=>' || str === '**') {
		                            this.index += 2;
		                        }
		                        else {
		                            // 1-character punctuators.
		                            str = this.source[this.index];
		                            if ('<>=!+-*%&|^/'.indexOf(str) >= 0) {
		                                ++this.index;
		                            }
		                        }
		                    }
		                }
		        }
		        if (this.index === token.start) {
		            this.throwUnexpectedToken();
		        }
		        token.end = this.index;
		        token.value = str;
		        return token;
		    };
		    ;
		    // ECMA-262 11.8.3 Numeric Literals
		    Scanner.prototype.scanHexLiteral = function (start) {
		        var number = '';
		        while (!this.eof()) {
		            if (!character_1.Character.isHexDigit(this.source.charCodeAt(this.index))) {
		                break;
		            }
		            number += this.source[this.index++];
		        }
		        if (number.length === 0) {
		            this.throwUnexpectedToken();
		        }
		        if (character_1.Character.isIdentifierStart(this.source.charCodeAt(this.index))) {
		            this.throwUnexpectedToken();
		        }
		        return {
		            type: token_1.Token.NumericLiteral,
		            value: parseInt('0x' + number, 16),
		            lineNumber: this.lineNumber,
		            lineStart: this.lineStart,
		            start: start,
		            end: this.index
		        };
		    };
		    ;
		    Scanner.prototype.scanBinaryLiteral = function (start) {
		        var number = '';
		        var ch;
		        while (!this.eof()) {
		            ch = this.source[this.index];
		            if (ch !== '0' && ch !== '1') {
		                break;
		            }
		            number += this.source[this.index++];
		        }
		        if (number.length === 0) {
		            // only 0b or 0B
		            this.throwUnexpectedToken();
		        }
		        if (!this.eof()) {
		            ch = this.source.charCodeAt(this.index);
		            /* istanbul ignore else */
		            if (character_1.Character.isIdentifierStart(ch) || character_1.Character.isDecimalDigit(ch)) {
		                this.throwUnexpectedToken();
		            }
		        }
		        return {
		            type: token_1.Token.NumericLiteral,
		            value: parseInt(number, 2),
		            lineNumber: this.lineNumber,
		            lineStart: this.lineStart,
		            start: start,
		            end: this.index
		        };
		    };
		    ;
		    Scanner.prototype.scanOctalLiteral = function (prefix, start) {
		        var number = '';
		        var octal = false;
		        if (character_1.Character.isOctalDigit(prefix.charCodeAt(0))) {
		            octal = true;
		            number = '0' + this.source[this.index++];
		        }
		        else {
		            ++this.index;
		        }
		        while (!this.eof()) {
		            if (!character_1.Character.isOctalDigit(this.source.charCodeAt(this.index))) {
		                break;
		            }
		            number += this.source[this.index++];
		        }
		        if (!octal && number.length === 0) {
		            // only 0o or 0O
		            this.throwUnexpectedToken();
		        }
		        if (character_1.Character.isIdentifierStart(this.source.charCodeAt(this.index)) || character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
		            this.throwUnexpectedToken();
		        }
		        return {
		            type: token_1.Token.NumericLiteral,
		            value: parseInt(number, 8),
		            octal: octal,
		            lineNumber: this.lineNumber,
		            lineStart: this.lineStart,
		            start: start,
		            end: this.index
		        };
		    };
		    ;
		    Scanner.prototype.isImplicitOctalLiteral = function () {
		        // Implicit octal, unless there is a non-octal digit.
		        // (Annex B.1.1 on Numeric Literals)
		        for (var i = this.index + 1; i < this.length; ++i) {
		            var ch = this.source[i];
		            if (ch === '8' || ch === '9') {
		                return false;
		            }
		            if (!character_1.Character.isOctalDigit(ch.charCodeAt(0))) {
		                return true;
		            }
		        }
		        return true;
		    };
		    ;
		    Scanner.prototype.scanNumericLiteral = function () {
		        var start = this.index;
		        var ch = this.source[start];
		        assert_1.assert(character_1.Character.isDecimalDigit(ch.charCodeAt(0)) || (ch === '.'), 'Numeric literal must start with a decimal digit or a decimal point');
		        var number = '';
		        if (ch !== '.') {
		            number = this.source[this.index++];
		            ch = this.source[this.index];
		            // Hex number starts with '0x'.
		            // Octal number starts with '0'.
		            // Octal number in ES6 starts with '0o'.
		            // Binary number in ES6 starts with '0b'.
		            if (number === '0') {
		                if (ch === 'x' || ch === 'X') {
		                    ++this.index;
		                    return this.scanHexLiteral(start);
		                }
		                if (ch === 'b' || ch === 'B') {
		                    ++this.index;
		                    return this.scanBinaryLiteral(start);
		                }
		                if (ch === 'o' || ch === 'O') {
		                    return this.scanOctalLiteral(ch, start);
		                }
		                if (ch && character_1.Character.isOctalDigit(ch.charCodeAt(0))) {
		                    if (this.isImplicitOctalLiteral()) {
		                        return this.scanOctalLiteral(ch, start);
		                    }
		                }
		            }
		            while (character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
		                number += this.source[this.index++];
		            }
		            ch = this.source[this.index];
		        }
		        if (ch === '.') {
		            number += this.source[this.index++];
		            while (character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
		                number += this.source[this.index++];
		            }
		            ch = this.source[this.index];
		        }
		        if (ch === 'e' || ch === 'E') {
		            number += this.source[this.index++];
		            ch = this.source[this.index];
		            if (ch === '+' || ch === '-') {
		                number += this.source[this.index++];
		            }
		            if (character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
		                while (character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
		                    number += this.source[this.index++];
		                }
		            }
		            else {
		                this.throwUnexpectedToken();
		            }
		        }
		        if (character_1.Character.isIdentifierStart(this.source.charCodeAt(this.index))) {
		            this.throwUnexpectedToken();
		        }
		        return {
		            type: token_1.Token.NumericLiteral,
		            value: parseFloat(number),
		            lineNumber: this.lineNumber,
		            lineStart: this.lineStart,
		            start: start,
		            end: this.index
		        };
		    };
		    ;
		    // ECMA-262 11.8.4 String Literals
		    Scanner.prototype.scanStringLiteral = function () {
		        var start = this.index;
		        var quote = this.source[start];
		        assert_1.assert((quote === '\'' || quote === '"'), 'String literal must starts with a quote');
		        ++this.index;
		        var octal = false;
		        var str = '';
		        while (!this.eof()) {
		            var ch = this.source[this.index++];
		            if (ch === quote) {
		                quote = '';
		                break;
		            }
		            else if (ch === '\\') {
		                ch = this.source[this.index++];
		                if (!ch || !character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
		                    switch (ch) {
		                        case 'u':
		                        case 'x':
		                            if (this.source[this.index] === '{') {
		                                ++this.index;
		                                str += this.scanUnicodeCodePointEscape();
		                            }
		                            else {
		                                var unescaped = this.scanHexEscape(ch);
		                                if (!unescaped) {
		                                    this.throwUnexpectedToken();
		                                }
		                                str += unescaped;
		                            }
		                            break;
		                        case 'n':
		                            str += '\n';
		                            break;
		                        case 'r':
		                            str += '\r';
		                            break;
		                        case 't':
		                            str += '\t';
		                            break;
		                        case 'b':
		                            str += '\b';
		                            break;
		                        case 'f':
		                            str += '\f';
		                            break;
		                        case 'v':
		                            str += '\x0B';
		                            break;
		                        case '8':
		                        case '9':
		                            str += ch;
		                            this.tolerateUnexpectedToken();
		                            break;
		                        default:
		                            if (ch && character_1.Character.isOctalDigit(ch.charCodeAt(0))) {
		                                var octToDec = this.octalToDecimal(ch);
		                                octal = octToDec.octal || octal;
		                                str += String.fromCharCode(octToDec.code);
		                            }
		                            else {
		                                str += ch;
		                            }
		                            break;
		                    }
		                }
		                else {
		                    ++this.lineNumber;
		                    if (ch === '\r' && this.source[this.index] === '\n') {
		                        ++this.index;
		                    }
		                    this.lineStart = this.index;
		                }
		            }
		            else if (character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
		                break;
		            }
		            else {
		                str += ch;
		            }
		        }
		        if (quote !== '') {
		            this.index = start;
		            this.throwUnexpectedToken();
		        }
		        return {
		            type: token_1.Token.StringLiteral,
		            value: str,
		            octal: octal,
		            lineNumber: this.lineNumber,
		            lineStart: this.lineStart,
		            start: start,
		            end: this.index
		        };
		    };
		    ;
		    // ECMA-262 11.8.6 Template Literal Lexical Components
		    Scanner.prototype.scanTemplate = function () {
		        var cooked = '';
		        var terminated = false;
		        var start = this.index;
		        var head = (this.source[start] === '`');
		        var tail = false;
		        var rawOffset = 2;
		        ++this.index;
		        while (!this.eof()) {
		            var ch = this.source[this.index++];
		            if (ch === '`') {
		                rawOffset = 1;
		                tail = true;
		                terminated = true;
		                break;
		            }
		            else if (ch === '$') {
		                if (this.source[this.index] === '{') {
		                    this.curlyStack.push('${');
		                    ++this.index;
		                    terminated = true;
		                    break;
		                }
		                cooked += ch;
		            }
		            else if (ch === '\\') {
		                ch = this.source[this.index++];
		                if (!character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
		                    switch (ch) {
		                        case 'n':
		                            cooked += '\n';
		                            break;
		                        case 'r':
		                            cooked += '\r';
		                            break;
		                        case 't':
		                            cooked += '\t';
		                            break;
		                        case 'u':
		                        case 'x':
		                            if (this.source[this.index] === '{') {
		                                ++this.index;
		                                cooked += this.scanUnicodeCodePointEscape();
		                            }
		                            else {
		                                var restore = this.index;
		                                var unescaped = this.scanHexEscape(ch);
		                                if (unescaped) {
		                                    cooked += unescaped;
		                                }
		                                else {
		                                    this.index = restore;
		                                    cooked += ch;
		                                }
		                            }
		                            break;
		                        case 'b':
		                            cooked += '\b';
		                            break;
		                        case 'f':
		                            cooked += '\f';
		                            break;
		                        case 'v':
		                            cooked += '\v';
		                            break;
		                        default:
		                            if (ch === '0') {
		                                if (character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
		                                    // Illegal: \01 \02 and so on
		                                    this.throwUnexpectedToken(messages_1.Messages.TemplateOctalLiteral);
		                                }
		                                cooked += '\0';
		                            }
		                            else if (character_1.Character.isOctalDigit(ch.charCodeAt(0))) {
		                                // Illegal: \1 \2
		                                this.throwUnexpectedToken(messages_1.Messages.TemplateOctalLiteral);
		                            }
		                            else {
		                                cooked += ch;
		                            }
		                            break;
		                    }
		                }
		                else {
		                    ++this.lineNumber;
		                    if (ch === '\r' && this.source[this.index] === '\n') {
		                        ++this.index;
		                    }
		                    this.lineStart = this.index;
		                }
		            }
		            else if (character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
		                ++this.lineNumber;
		                if (ch === '\r' && this.source[this.index] === '\n') {
		                    ++this.index;
		                }
		                this.lineStart = this.index;
		                cooked += '\n';
		            }
		            else {
		                cooked += ch;
		            }
		        }
		        if (!terminated) {
		            this.throwUnexpectedToken();
		        }
		        if (!head) {
		            this.curlyStack.pop();
		        }
		        return {
		            type: token_1.Token.Template,
		            value: {
		                cooked: cooked,
		                raw: this.source.slice(start + 1, this.index - rawOffset)
		            },
		            head: head,
		            tail: tail,
		            lineNumber: this.lineNumber,
		            lineStart: this.lineStart,
		            start: start,
		            end: this.index
		        };
		    };
		    ;
		    // ECMA-262 11.8.5 Regular Expression Literals
		    Scanner.prototype.testRegExp = function (pattern, flags) {
		        // The BMP character to use as a replacement for astral symbols when
		        // translating an ES6 "u"-flagged pattern to an ES5-compatible
		        // approximation.
		        // Note: replacing with '\uFFFF' enables false positives in unlikely
		        // scenarios. For example, `[\u{1044f}-\u{10440}]` is an invalid
		        // pattern that would not be detected by this substitution.
		        var astralSubstitute = '\uFFFF';
		        var tmp = pattern;
		        var self = this;
		        if (flags.indexOf('u') >= 0) {
		            tmp = tmp
		                .replace(/\\u\{([0-9a-fA-F]+)\}|\\u([a-fA-F0-9]{4})/g, function ($0, $1, $2) {
		                var codePoint = parseInt($1 || $2, 16);
		                if (codePoint > 0x10FFFF) {
		                    self.throwUnexpectedToken(messages_1.Messages.InvalidRegExp);
		                }
		                if (codePoint <= 0xFFFF) {
		                    return String.fromCharCode(codePoint);
		                }
		                return astralSubstitute;
		            })
		                .replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, astralSubstitute);
		        }
		        // First, detect invalid regular expressions.
		        try {
		            RegExp(tmp);
		        }
		        catch (e) {
		            this.throwUnexpectedToken(messages_1.Messages.InvalidRegExp);
		        }
		        // Return a regular expression object for this pattern-flag pair, or
		        // `null` in case the current environment doesn't support the flags it
		        // uses.
		        try {
		            return new RegExp(pattern, flags);
		        }
		        catch (exception) {
		            /* istanbul ignore next */
		            return null;
		        }
		    };
		    ;
		    Scanner.prototype.scanRegExpBody = function () {
		        var ch = this.source[this.index];
		        assert_1.assert(ch === '/', 'Regular expression literal must start with a slash');
		        var str = this.source[this.index++];
		        var classMarker = false;
		        var terminated = false;
		        while (!this.eof()) {
		            ch = this.source[this.index++];
		            str += ch;
		            if (ch === '\\') {
		                ch = this.source[this.index++];
		                // ECMA-262 7.8.5
		                if (character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
		                    this.throwUnexpectedToken(messages_1.Messages.UnterminatedRegExp);
		                }
		                str += ch;
		            }
		            else if (character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
		                this.throwUnexpectedToken(messages_1.Messages.UnterminatedRegExp);
		            }
		            else if (classMarker) {
		                if (ch === ']') {
		                    classMarker = false;
		                }
		            }
		            else {
		                if (ch === '/') {
		                    terminated = true;
		                    break;
		                }
		                else if (ch === '[') {
		                    classMarker = true;
		                }
		            }
		        }
		        if (!terminated) {
		            this.throwUnexpectedToken(messages_1.Messages.UnterminatedRegExp);
		        }
		        // Exclude leading and trailing slash.
		        var body = str.substr(1, str.length - 2);
		        return {
		            value: body,
		            literal: str
		        };
		    };
		    ;
		    Scanner.prototype.scanRegExpFlags = function () {
		        var str = '';
		        var flags = '';
		        while (!this.eof()) {
		            var ch = this.source[this.index];
		            if (!character_1.Character.isIdentifierPart(ch.charCodeAt(0))) {
		                break;
		            }
		            ++this.index;
		            if (ch === '\\' && !this.eof()) {
		                ch = this.source[this.index];
		                if (ch === 'u') {
		                    ++this.index;
		                    var restore = this.index;
		                    ch = this.scanHexEscape('u');
		                    if (ch) {
		                        flags += ch;
		                        for (str += '\\u'; restore < this.index; ++restore) {
		                            str += this.source[restore];
		                        }
		                    }
		                    else {
		                        this.index = restore;
		                        flags += 'u';
		                        str += '\\u';
		                    }
		                    this.tolerateUnexpectedToken();
		                }
		                else {
		                    str += '\\';
		                    this.tolerateUnexpectedToken();
		                }
		            }
		            else {
		                flags += ch;
		                str += ch;
		            }
		        }
		        return {
		            value: flags,
		            literal: str
		        };
		    };
		    ;
		    Scanner.prototype.scanRegExp = function () {
		        var start = this.index;
		        var body = this.scanRegExpBody();
		        var flags = this.scanRegExpFlags();
		        var value = this.testRegExp(body.value, flags.value);
		        return {
		            type: token_1.Token.RegularExpression,
		            value: value,
		            literal: body.literal + flags.literal,
		            regex: {
		                pattern: body.value,
		                flags: flags.value
		            },
		            lineNumber: this.lineNumber,
		            lineStart: this.lineStart,
		            start: start,
		            end: this.index
		        };
		    };
		    ;
		    Scanner.prototype.lex = function () {
		        if (this.eof()) {
		            return {
		                type: token_1.Token.EOF,
		                lineNumber: this.lineNumber,
		                lineStart: this.lineStart,
		                start: this.index,
		                end: this.index
		            };
		        }
		        var cp = this.source.charCodeAt(this.index);
		        if (character_1.Character.isIdentifierStart(cp)) {
		            return this.scanIdentifier();
		        }
		        // Very common: ( and ) and ;
		        if (cp === 0x28 || cp === 0x29 || cp === 0x3B) {
		            return this.scanPunctuator();
		        }
		        // String literal starts with single quote (U+0027) or double quote (U+0022).
		        if (cp === 0x27 || cp === 0x22) {
		            return this.scanStringLiteral();
		        }
		        // Dot (.) U+002E can also start a floating-point number, hence the need
		        // to check the next character.
		        if (cp === 0x2E) {
		            if (character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index + 1))) {
		                return this.scanNumericLiteral();
		            }
		            return this.scanPunctuator();
		        }
		        if (character_1.Character.isDecimalDigit(cp)) {
		            return this.scanNumericLiteral();
		        }
		        // Template literals start with ` (U+0060) for template head
		        // or } (U+007D) for template middle or template tail.
		        if (cp === 0x60 || (cp === 0x7D && this.curlyStack[this.curlyStack.length - 1] === '${')) {
		            return this.scanTemplate();
		        }
		        // Possible identifier start in a surrogate pair.
		        if (cp >= 0xD800 && cp < 0xDFFF) {
		            if (character_1.Character.isIdentifierStart(this.codePointAt(this.index))) {
		                return this.scanIdentifier();
		            }
		        }
		        return this.scanPunctuator();
		    };
		    ;
		    return Scanner;
		}());
		exports.Scanner = Scanner;


	/***/ },
	/* 9 */
	/***/ function(module, exports) {

		"use strict";
		// See also tools/generate-unicode-regex.js.
		var Regex = {
		    // Unicode v8.0.0 NonAsciiIdentifierStart:
		    NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
		    // Unicode v8.0.0 NonAsciiIdentifierPart:
		    NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/
		};
		exports.Character = {
		    fromCodePoint: function (cp) {
		        return (cp < 0x10000) ? String.fromCharCode(cp) :
		            String.fromCharCode(0xD800 + ((cp - 0x10000) >> 10)) +
		                String.fromCharCode(0xDC00 + ((cp - 0x10000) & 1023));
		    },
		    // ECMA-262 11.2 White Space
		    isWhiteSpace: function (cp) {
		        return (cp === 0x20) || (cp === 0x09) || (cp === 0x0B) || (cp === 0x0C) || (cp === 0xA0) ||
		            (cp >= 0x1680 && [0x1680, 0x2000, 0x2001, 0x2002, 0x2003, 0x2004, 0x2005, 0x2006, 0x2007, 0x2008, 0x2009, 0x200A, 0x202F, 0x205F, 0x3000, 0xFEFF].indexOf(cp) >= 0);
		    },
		    // ECMA-262 11.3 Line Terminators
		    isLineTerminator: function (cp) {
		        return (cp === 0x0A) || (cp === 0x0D) || (cp === 0x2028) || (cp === 0x2029);
		    },
		    // ECMA-262 11.6 Identifier Names and Identifiers
		    isIdentifierStart: function (cp) {
		        return (cp === 0x24) || (cp === 0x5F) ||
		            (cp >= 0x41 && cp <= 0x5A) ||
		            (cp >= 0x61 && cp <= 0x7A) ||
		            (cp === 0x5C) ||
		            ((cp >= 0x80) && Regex.NonAsciiIdentifierStart.test(exports.Character.fromCodePoint(cp)));
		    },
		    isIdentifierPart: function (cp) {
		        return (cp === 0x24) || (cp === 0x5F) ||
		            (cp >= 0x41 && cp <= 0x5A) ||
		            (cp >= 0x61 && cp <= 0x7A) ||
		            (cp >= 0x30 && cp <= 0x39) ||
		            (cp === 0x5C) ||
		            ((cp >= 0x80) && Regex.NonAsciiIdentifierPart.test(exports.Character.fromCodePoint(cp)));
		    },
		    // ECMA-262 11.8.3 Numeric Literals
		    isDecimalDigit: function (cp) {
		        return (cp >= 0x30 && cp <= 0x39); // 0..9
		    },
		    isHexDigit: function (cp) {
		        return (cp >= 0x30 && cp <= 0x39) ||
		            (cp >= 0x41 && cp <= 0x46) ||
		            (cp >= 0x61 && cp <= 0x66); // a..f
		    },
		    isOctalDigit: function (cp) {
		        return (cp >= 0x30 && cp <= 0x37); // 0..7
		    }
		};


	/***/ },
	/* 10 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var syntax_1 = __webpack_require__(2);
		var ArrayExpression = (function () {
		    function ArrayExpression(elements) {
		        this.type = syntax_1.Syntax.ArrayExpression;
		        this.elements = elements;
		    }
		    return ArrayExpression;
		}());
		exports.ArrayExpression = ArrayExpression;
		var ArrayPattern = (function () {
		    function ArrayPattern(elements) {
		        this.type = syntax_1.Syntax.ArrayPattern;
		        this.elements = elements;
		    }
		    return ArrayPattern;
		}());
		exports.ArrayPattern = ArrayPattern;
		var ArrowFunctionExpression = (function () {
		    function ArrowFunctionExpression(params, body, expression) {
		        this.type = syntax_1.Syntax.ArrowFunctionExpression;
		        this.id = null;
		        this.params = params;
		        this.body = body;
		        this.generator = false;
		        this.expression = expression;
		    }
		    return ArrowFunctionExpression;
		}());
		exports.ArrowFunctionExpression = ArrowFunctionExpression;
		var AssignmentExpression = (function () {
		    function AssignmentExpression(operator, left, right) {
		        this.type = syntax_1.Syntax.AssignmentExpression;
		        this.operator = operator;
		        this.left = left;
		        this.right = right;
		    }
		    return AssignmentExpression;
		}());
		exports.AssignmentExpression = AssignmentExpression;
		var AssignmentPattern = (function () {
		    function AssignmentPattern(left, right) {
		        this.type = syntax_1.Syntax.AssignmentPattern;
		        this.left = left;
		        this.right = right;
		    }
		    return AssignmentPattern;
		}());
		exports.AssignmentPattern = AssignmentPattern;
		var BinaryExpression = (function () {
		    function BinaryExpression(operator, left, right) {
		        var logical = (operator === '||' || operator === '&&');
		        this.type = logical ? syntax_1.Syntax.LogicalExpression : syntax_1.Syntax.BinaryExpression;
		        this.operator = operator;
		        this.left = left;
		        this.right = right;
		    }
		    return BinaryExpression;
		}());
		exports.BinaryExpression = BinaryExpression;
		var BlockStatement = (function () {
		    function BlockStatement(body) {
		        this.type = syntax_1.Syntax.BlockStatement;
		        this.body = body;
		    }
		    return BlockStatement;
		}());
		exports.BlockStatement = BlockStatement;
		var BreakStatement = (function () {
		    function BreakStatement(label) {
		        this.type = syntax_1.Syntax.BreakStatement;
		        this.label = label;
		    }
		    return BreakStatement;
		}());
		exports.BreakStatement = BreakStatement;
		var CallExpression = (function () {
		    function CallExpression(callee, args) {
		        this.type = syntax_1.Syntax.CallExpression;
		        this.callee = callee;
		        this.arguments = args;
		    }
		    return CallExpression;
		}());
		exports.CallExpression = CallExpression;
		var CatchClause = (function () {
		    function CatchClause(param, body) {
		        this.type = syntax_1.Syntax.CatchClause;
		        this.param = param;
		        this.body = body;
		    }
		    return CatchClause;
		}());
		exports.CatchClause = CatchClause;
		var ClassBody = (function () {
		    function ClassBody(body) {
		        this.type = syntax_1.Syntax.ClassBody;
		        this.body = body;
		    }
		    return ClassBody;
		}());
		exports.ClassBody = ClassBody;
		var ClassDeclaration = (function () {
		    function ClassDeclaration(id, superClass, body) {
		        this.type = syntax_1.Syntax.ClassDeclaration;
		        this.id = id;
		        this.superClass = superClass;
		        this.body = body;
		    }
		    return ClassDeclaration;
		}());
		exports.ClassDeclaration = ClassDeclaration;
		var ClassExpression = (function () {
		    function ClassExpression(id, superClass, body) {
		        this.type = syntax_1.Syntax.ClassExpression;
		        this.id = id;
		        this.superClass = superClass;
		        this.body = body;
		    }
		    return ClassExpression;
		}());
		exports.ClassExpression = ClassExpression;
		var ComputedMemberExpression = (function () {
		    function ComputedMemberExpression(object, property) {
		        this.type = syntax_1.Syntax.MemberExpression;
		        this.computed = true;
		        this.object = object;
		        this.property = property;
		    }
		    return ComputedMemberExpression;
		}());
		exports.ComputedMemberExpression = ComputedMemberExpression;
		var ConditionalExpression = (function () {
		    function ConditionalExpression(test, consequent, alternate) {
		        this.type = syntax_1.Syntax.ConditionalExpression;
		        this.test = test;
		        this.consequent = consequent;
		        this.alternate = alternate;
		    }
		    return ConditionalExpression;
		}());
		exports.ConditionalExpression = ConditionalExpression;
		var ContinueStatement = (function () {
		    function ContinueStatement(label) {
		        this.type = syntax_1.Syntax.ContinueStatement;
		        this.label = label;
		    }
		    return ContinueStatement;
		}());
		exports.ContinueStatement = ContinueStatement;
		var DebuggerStatement = (function () {
		    function DebuggerStatement() {
		        this.type = syntax_1.Syntax.DebuggerStatement;
		    }
		    return DebuggerStatement;
		}());
		exports.DebuggerStatement = DebuggerStatement;
		var Directive = (function () {
		    function Directive(expression, directive) {
		        this.type = syntax_1.Syntax.ExpressionStatement;
		        this.expression = expression;
		        this.directive = directive;
		    }
		    return Directive;
		}());
		exports.Directive = Directive;
		var DoWhileStatement = (function () {
		    function DoWhileStatement(body, test) {
		        this.type = syntax_1.Syntax.DoWhileStatement;
		        this.body = body;
		        this.test = test;
		    }
		    return DoWhileStatement;
		}());
		exports.DoWhileStatement = DoWhileStatement;
		var EmptyStatement = (function () {
		    function EmptyStatement() {
		        this.type = syntax_1.Syntax.EmptyStatement;
		    }
		    return EmptyStatement;
		}());
		exports.EmptyStatement = EmptyStatement;
		var ExportAllDeclaration = (function () {
		    function ExportAllDeclaration(source) {
		        this.type = syntax_1.Syntax.ExportAllDeclaration;
		        this.source = source;
		    }
		    return ExportAllDeclaration;
		}());
		exports.ExportAllDeclaration = ExportAllDeclaration;
		var ExportDefaultDeclaration = (function () {
		    function ExportDefaultDeclaration(declaration) {
		        this.type = syntax_1.Syntax.ExportDefaultDeclaration;
		        this.declaration = declaration;
		    }
		    return ExportDefaultDeclaration;
		}());
		exports.ExportDefaultDeclaration = ExportDefaultDeclaration;
		var ExportNamedDeclaration = (function () {
		    function ExportNamedDeclaration(declaration, specifiers, source) {
		        this.type = syntax_1.Syntax.ExportNamedDeclaration;
		        this.declaration = declaration;
		        this.specifiers = specifiers;
		        this.source = source;
		    }
		    return ExportNamedDeclaration;
		}());
		exports.ExportNamedDeclaration = ExportNamedDeclaration;
		var ExportSpecifier = (function () {
		    function ExportSpecifier(local, exported) {
		        this.type = syntax_1.Syntax.ExportSpecifier;
		        this.exported = exported;
		        this.local = local;
		    }
		    return ExportSpecifier;
		}());
		exports.ExportSpecifier = ExportSpecifier;
		var ExpressionStatement = (function () {
		    function ExpressionStatement(expression) {
		        this.type = syntax_1.Syntax.ExpressionStatement;
		        this.expression = expression;
		    }
		    return ExpressionStatement;
		}());
		exports.ExpressionStatement = ExpressionStatement;
		var ForInStatement = (function () {
		    function ForInStatement(left, right, body) {
		        this.type = syntax_1.Syntax.ForInStatement;
		        this.left = left;
		        this.right = right;
		        this.body = body;
		        this.each = false;
		    }
		    return ForInStatement;
		}());
		exports.ForInStatement = ForInStatement;
		var ForOfStatement = (function () {
		    function ForOfStatement(left, right, body) {
		        this.type = syntax_1.Syntax.ForOfStatement;
		        this.left = left;
		        this.right = right;
		        this.body = body;
		    }
		    return ForOfStatement;
		}());
		exports.ForOfStatement = ForOfStatement;
		var ForStatement = (function () {
		    function ForStatement(init, test, update, body) {
		        this.type = syntax_1.Syntax.ForStatement;
		        this.init = init;
		        this.test = test;
		        this.update = update;
		        this.body = body;
		    }
		    return ForStatement;
		}());
		exports.ForStatement = ForStatement;
		var FunctionDeclaration = (function () {
		    function FunctionDeclaration(id, params, body, generator) {
		        this.type = syntax_1.Syntax.FunctionDeclaration;
		        this.id = id;
		        this.params = params;
		        this.body = body;
		        this.generator = generator;
		        this.expression = false;
		    }
		    return FunctionDeclaration;
		}());
		exports.FunctionDeclaration = FunctionDeclaration;
		var FunctionExpression = (function () {
		    function FunctionExpression(id, params, body, generator) {
		        this.type = syntax_1.Syntax.FunctionExpression;
		        this.id = id;
		        this.params = params;
		        this.body = body;
		        this.generator = generator;
		        this.expression = false;
		    }
		    return FunctionExpression;
		}());
		exports.FunctionExpression = FunctionExpression;
		var Identifier = (function () {
		    function Identifier(name) {
		        this.type = syntax_1.Syntax.Identifier;
		        this.name = name;
		    }
		    return Identifier;
		}());
		exports.Identifier = Identifier;
		var IfStatement = (function () {
		    function IfStatement(test, consequent, alternate) {
		        this.type = syntax_1.Syntax.IfStatement;
		        this.test = test;
		        this.consequent = consequent;
		        this.alternate = alternate;
		    }
		    return IfStatement;
		}());
		exports.IfStatement = IfStatement;
		var ImportDeclaration = (function () {
		    function ImportDeclaration(specifiers, source) {
		        this.type = syntax_1.Syntax.ImportDeclaration;
		        this.specifiers = specifiers;
		        this.source = source;
		    }
		    return ImportDeclaration;
		}());
		exports.ImportDeclaration = ImportDeclaration;
		var ImportDefaultSpecifier = (function () {
		    function ImportDefaultSpecifier(local) {
		        this.type = syntax_1.Syntax.ImportDefaultSpecifier;
		        this.local = local;
		    }
		    return ImportDefaultSpecifier;
		}());
		exports.ImportDefaultSpecifier = ImportDefaultSpecifier;
		var ImportNamespaceSpecifier = (function () {
		    function ImportNamespaceSpecifier(local) {
		        this.type = syntax_1.Syntax.ImportNamespaceSpecifier;
		        this.local = local;
		    }
		    return ImportNamespaceSpecifier;
		}());
		exports.ImportNamespaceSpecifier = ImportNamespaceSpecifier;
		var ImportSpecifier = (function () {
		    function ImportSpecifier(local, imported) {
		        this.type = syntax_1.Syntax.ImportSpecifier;
		        this.local = local;
		        this.imported = imported;
		    }
		    return ImportSpecifier;
		}());
		exports.ImportSpecifier = ImportSpecifier;
		var LabeledStatement = (function () {
		    function LabeledStatement(label, body) {
		        this.type = syntax_1.Syntax.LabeledStatement;
		        this.label = label;
		        this.body = body;
		    }
		    return LabeledStatement;
		}());
		exports.LabeledStatement = LabeledStatement;
		var Literal = (function () {
		    function Literal(value, raw) {
		        this.type = syntax_1.Syntax.Literal;
		        this.value = value;
		        this.raw = raw;
		    }
		    return Literal;
		}());
		exports.Literal = Literal;
		var MetaProperty = (function () {
		    function MetaProperty(meta, property) {
		        this.type = syntax_1.Syntax.MetaProperty;
		        this.meta = meta;
		        this.property = property;
		    }
		    return MetaProperty;
		}());
		exports.MetaProperty = MetaProperty;
		var MethodDefinition = (function () {
		    function MethodDefinition(key, computed, value, kind, isStatic) {
		        this.type = syntax_1.Syntax.MethodDefinition;
		        this.key = key;
		        this.computed = computed;
		        this.value = value;
		        this.kind = kind;
		        this.static = isStatic;
		    }
		    return MethodDefinition;
		}());
		exports.MethodDefinition = MethodDefinition;
		var NewExpression = (function () {
		    function NewExpression(callee, args) {
		        this.type = syntax_1.Syntax.NewExpression;
		        this.callee = callee;
		        this.arguments = args;
		    }
		    return NewExpression;
		}());
		exports.NewExpression = NewExpression;
		var ObjectExpression = (function () {
		    function ObjectExpression(properties) {
		        this.type = syntax_1.Syntax.ObjectExpression;
		        this.properties = properties;
		    }
		    return ObjectExpression;
		}());
		exports.ObjectExpression = ObjectExpression;
		var ObjectPattern = (function () {
		    function ObjectPattern(properties) {
		        this.type = syntax_1.Syntax.ObjectPattern;
		        this.properties = properties;
		    }
		    return ObjectPattern;
		}());
		exports.ObjectPattern = ObjectPattern;
		var Program = (function () {
		    function Program(body, sourceType) {
		        this.type = syntax_1.Syntax.Program;
		        this.body = body;
		        this.sourceType = sourceType;
		    }
		    return Program;
		}());
		exports.Program = Program;
		var Property = (function () {
		    function Property(kind, key, computed, value, method, shorthand) {
		        this.type = syntax_1.Syntax.Property;
		        this.key = key;
		        this.computed = computed;
		        this.value = value;
		        this.kind = kind;
		        this.method = method;
		        this.shorthand = shorthand;
		    }
		    return Property;
		}());
		exports.Property = Property;
		var RegexLiteral = (function () {
		    function RegexLiteral(value, raw, regex) {
		        this.type = syntax_1.Syntax.Literal;
		        this.value = value;
		        this.raw = raw;
		        this.regex = regex;
		    }
		    return RegexLiteral;
		}());
		exports.RegexLiteral = RegexLiteral;
		var RestElement = (function () {
		    function RestElement(argument) {
		        this.type = syntax_1.Syntax.RestElement;
		        this.argument = argument;
		    }
		    return RestElement;
		}());
		exports.RestElement = RestElement;
		var ReturnStatement = (function () {
		    function ReturnStatement(argument) {
		        this.type = syntax_1.Syntax.ReturnStatement;
		        this.argument = argument;
		    }
		    return ReturnStatement;
		}());
		exports.ReturnStatement = ReturnStatement;
		var SequenceExpression = (function () {
		    function SequenceExpression(expressions) {
		        this.type = syntax_1.Syntax.SequenceExpression;
		        this.expressions = expressions;
		    }
		    return SequenceExpression;
		}());
		exports.SequenceExpression = SequenceExpression;
		var SpreadElement = (function () {
		    function SpreadElement(argument) {
		        this.type = syntax_1.Syntax.SpreadElement;
		        this.argument = argument;
		    }
		    return SpreadElement;
		}());
		exports.SpreadElement = SpreadElement;
		var StaticMemberExpression = (function () {
		    function StaticMemberExpression(object, property) {
		        this.type = syntax_1.Syntax.MemberExpression;
		        this.computed = false;
		        this.object = object;
		        this.property = property;
		    }
		    return StaticMemberExpression;
		}());
		exports.StaticMemberExpression = StaticMemberExpression;
		var Super = (function () {
		    function Super() {
		        this.type = syntax_1.Syntax.Super;
		    }
		    return Super;
		}());
		exports.Super = Super;
		var SwitchCase = (function () {
		    function SwitchCase(test, consequent) {
		        this.type = syntax_1.Syntax.SwitchCase;
		        this.test = test;
		        this.consequent = consequent;
		    }
		    return SwitchCase;
		}());
		exports.SwitchCase = SwitchCase;
		var SwitchStatement = (function () {
		    function SwitchStatement(discriminant, cases) {
		        this.type = syntax_1.Syntax.SwitchStatement;
		        this.discriminant = discriminant;
		        this.cases = cases;
		    }
		    return SwitchStatement;
		}());
		exports.SwitchStatement = SwitchStatement;
		var TaggedTemplateExpression = (function () {
		    function TaggedTemplateExpression(tag, quasi) {
		        this.type = syntax_1.Syntax.TaggedTemplateExpression;
		        this.tag = tag;
		        this.quasi = quasi;
		    }
		    return TaggedTemplateExpression;
		}());
		exports.TaggedTemplateExpression = TaggedTemplateExpression;
		var TemplateElement = (function () {
		    function TemplateElement(value, tail) {
		        this.type = syntax_1.Syntax.TemplateElement;
		        this.value = value;
		        this.tail = tail;
		    }
		    return TemplateElement;
		}());
		exports.TemplateElement = TemplateElement;
		var TemplateLiteral = (function () {
		    function TemplateLiteral(quasis, expressions) {
		        this.type = syntax_1.Syntax.TemplateLiteral;
		        this.quasis = quasis;
		        this.expressions = expressions;
		    }
		    return TemplateLiteral;
		}());
		exports.TemplateLiteral = TemplateLiteral;
		var ThisExpression = (function () {
		    function ThisExpression() {
		        this.type = syntax_1.Syntax.ThisExpression;
		    }
		    return ThisExpression;
		}());
		exports.ThisExpression = ThisExpression;
		var ThrowStatement = (function () {
		    function ThrowStatement(argument) {
		        this.type = syntax_1.Syntax.ThrowStatement;
		        this.argument = argument;
		    }
		    return ThrowStatement;
		}());
		exports.ThrowStatement = ThrowStatement;
		var TryStatement = (function () {
		    function TryStatement(block, handler, finalizer) {
		        this.type = syntax_1.Syntax.TryStatement;
		        this.block = block;
		        this.handler = handler;
		        this.finalizer = finalizer;
		    }
		    return TryStatement;
		}());
		exports.TryStatement = TryStatement;
		var UnaryExpression = (function () {
		    function UnaryExpression(operator, argument) {
		        this.type = syntax_1.Syntax.UnaryExpression;
		        this.operator = operator;
		        this.argument = argument;
		        this.prefix = true;
		    }
		    return UnaryExpression;
		}());
		exports.UnaryExpression = UnaryExpression;
		var UpdateExpression = (function () {
		    function UpdateExpression(operator, argument, prefix) {
		        this.type = syntax_1.Syntax.UpdateExpression;
		        this.operator = operator;
		        this.argument = argument;
		        this.prefix = prefix;
		    }
		    return UpdateExpression;
		}());
		exports.UpdateExpression = UpdateExpression;
		var VariableDeclaration = (function () {
		    function VariableDeclaration(declarations, kind) {
		        this.type = syntax_1.Syntax.VariableDeclaration;
		        this.declarations = declarations;
		        this.kind = kind;
		    }
		    return VariableDeclaration;
		}());
		exports.VariableDeclaration = VariableDeclaration;
		var VariableDeclarator = (function () {
		    function VariableDeclarator(id, init) {
		        this.type = syntax_1.Syntax.VariableDeclarator;
		        this.id = id;
		        this.init = init;
		    }
		    return VariableDeclarator;
		}());
		exports.VariableDeclarator = VariableDeclarator;
		var WhileStatement = (function () {
		    function WhileStatement(test, body) {
		        this.type = syntax_1.Syntax.WhileStatement;
		        this.test = test;
		        this.body = body;
		    }
		    return WhileStatement;
		}());
		exports.WhileStatement = WhileStatement;
		var WithStatement = (function () {
		    function WithStatement(object, body) {
		        this.type = syntax_1.Syntax.WithStatement;
		        this.object = object;
		        this.body = body;
		    }
		    return WithStatement;
		}());
		exports.WithStatement = WithStatement;
		var YieldExpression = (function () {
		    function YieldExpression(argument, delegate) {
		        this.type = syntax_1.Syntax.YieldExpression;
		        this.argument = argument;
		        this.delegate = delegate;
		    }
		    return YieldExpression;
		}());
		exports.YieldExpression = YieldExpression;


	/***/ },
	/* 11 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
	/* istanbul ignore next */
		var __extends = (this && this.__extends) || function (d, b) {
		    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
		    function __() { this.constructor = d; }
		    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
		var character_1 = __webpack_require__(9);
		var token_1 = __webpack_require__(7);
		var parser_1 = __webpack_require__(3);
		var xhtml_entities_1 = __webpack_require__(12);
		var jsx_syntax_1 = __webpack_require__(13);
		var Node = __webpack_require__(10);
		var JSXNode = __webpack_require__(14);
		var JSXToken;
		(function (JSXToken) {
		    JSXToken[JSXToken["Identifier"] = 100] = "Identifier";
		    JSXToken[JSXToken["Text"] = 101] = "Text";
		})(JSXToken || (JSXToken = {}));
		token_1.TokenName[JSXToken.Identifier] = 'JSXIdentifier';
		token_1.TokenName[JSXToken.Text] = 'JSXText';
		// Fully qualified element name, e.g. <svg:path> returns "svg:path"
		function getQualifiedElementName(elementName) {
		    var qualifiedName;
		    switch (elementName.type) {
		        case jsx_syntax_1.JSXSyntax.JSXIdentifier:
		            var id = (elementName);
		            qualifiedName = id.name;
		            break;
		        case jsx_syntax_1.JSXSyntax.JSXNamespacedName:
		            var ns = (elementName);
		            qualifiedName = getQualifiedElementName(ns.namespace) + ':' +
		                getQualifiedElementName(ns.name);
		            break;
		        case jsx_syntax_1.JSXSyntax.JSXMemberExpression:
		            var expr = (elementName);
		            qualifiedName = getQualifiedElementName(expr.object) + '.' +
		                getQualifiedElementName(expr.property);
		            break;
		    }
		    return qualifiedName;
		}
		var JSXParser = (function (_super) {
		    __extends(JSXParser, _super);
		    function JSXParser(code, options, delegate) {
		        _super.call(this, code, options, delegate);
		    }
		    JSXParser.prototype.parsePrimaryExpression = function () {
		        return this.match('<') ? this.parseJSXRoot() : _super.prototype.parsePrimaryExpression.call(this);
		    };
		    JSXParser.prototype.startJSX = function () {
		        // Unwind the scanner before the lookahead token.
		        this.scanner.index = this.startMarker.index;
		        this.scanner.lineNumber = this.startMarker.lineNumber;
		        this.scanner.lineStart = this.startMarker.lineStart;
		    };
		    JSXParser.prototype.finishJSX = function () {
		        // Prime the next lookahead.
		        this.nextToken();
		    };
		    JSXParser.prototype.reenterJSX = function () {
		        this.startJSX();
		        this.expectJSX('}');
		        // Pop the closing '}' added from the lookahead.
		        if (this.config.tokens) {
		            this.tokens.pop();
		        }
		    };
		    JSXParser.prototype.createJSXNode = function () {
		        this.collectComments();
		        return {
		            index: this.scanner.index,
		            line: this.scanner.lineNumber,
		            column: this.scanner.index - this.scanner.lineStart
		        };
		    };
		    JSXParser.prototype.createJSXChildNode = function () {
		        return {
		            index: this.scanner.index,
		            line: this.scanner.lineNumber,
		            column: this.scanner.index - this.scanner.lineStart
		        };
		    };
		    JSXParser.prototype.scanXHTMLEntity = function (quote) {
		        var result = '&';
		        var valid = true;
		        var terminated = false;
		        var numeric = false;
		        var hex = false;
		        while (!this.scanner.eof() && valid && !terminated) {
		            var ch = this.scanner.source[this.scanner.index];
		            if (ch === quote) {
		                break;
		            }
		            terminated = (ch === ';');
		            result += ch;
		            ++this.scanner.index;
		            if (!terminated) {
		                switch (result.length) {
		                    case 2:
		                        // e.g. '&#123;'
		                        numeric = (ch === '#');
		                        break;
		                    case 3:
		                        if (numeric) {
		                            // e.g. '&#x41;'
		                            hex = (ch === 'x');
		                            valid = hex || character_1.Character.isDecimalDigit(ch.charCodeAt(0));
		                            numeric = numeric && !hex;
		                        }
		                        break;
		                    default:
		                        valid = valid && !(numeric && !character_1.Character.isDecimalDigit(ch.charCodeAt(0)));
		                        valid = valid && !(hex && !character_1.Character.isHexDigit(ch.charCodeAt(0)));
		                        break;
		                }
		            }
		        }
		        if (valid && terminated && result.length > 2) {
		            // e.g. '&#x41;' becomes just '#x41'
		            var str = result.substr(1, result.length - 2);
		            if (numeric && str.length > 1) {
		                result = String.fromCharCode(parseInt(str.substr(1), 10));
		            }
		            else if (hex && str.length > 2) {
		                result = String.fromCharCode(parseInt('0' + str.substr(1), 16));
		            }
		            else if (!numeric && !hex && xhtml_entities_1.XHTMLEntities[str]) {
		                result = xhtml_entities_1.XHTMLEntities[str];
		            }
		        }
		        return result;
		    };
		    // Scan the next JSX token. This replaces Scanner#lex when in JSX mode.
		    JSXParser.prototype.lexJSX = function () {
		        var cp = this.scanner.source.charCodeAt(this.scanner.index);
		        // < > / : = { }
		        if (cp === 60 || cp === 62 || cp === 47 || cp === 58 || cp === 61 || cp === 123 || cp === 125) {
		            var value = this.scanner.source[this.scanner.index++];
		            return {
		                type: token_1.Token.Punctuator,
		                value: value,
		                lineNumber: this.scanner.lineNumber,
		                lineStart: this.scanner.lineStart,
		                start: this.scanner.index - 1,
		                end: this.scanner.index
		            };
		        }
		        // " '
		        if (cp === 34 || cp === 39) {
		            var start = this.scanner.index;
		            var quote = this.scanner.source[this.scanner.index++];
		            var str = '';
		            while (!this.scanner.eof()) {
		                var ch = this.scanner.source[this.scanner.index++];
		                if (ch === quote) {
		                    break;
		                }
		                else if (ch === '&') {
		                    str += this.scanXHTMLEntity(quote);
		                }
		                else {
		                    str += ch;
		                }
		            }
		            return {
		                type: token_1.Token.StringLiteral,
		                value: str,
		                lineNumber: this.scanner.lineNumber,
		                lineStart: this.scanner.lineStart,
		                start: start,
		                end: this.scanner.index
		            };
		        }
		        // ... or .
		        if (cp === 46) {
		            var n1 = this.scanner.source.charCodeAt(this.scanner.index + 1);
		            var n2 = this.scanner.source.charCodeAt(this.scanner.index + 2);
		            var value = (n1 === 46 && n2 === 46) ? '...' : '.';
		            var start = this.scanner.index;
		            this.scanner.index += value.length;
		            return {
		                type: token_1.Token.Punctuator,
		                value: value,
		                lineNumber: this.scanner.lineNumber,
		                lineStart: this.scanner.lineStart,
		                start: start,
		                end: this.scanner.index
		            };
		        }
		        // `
		        if (cp === 96) {
		            // Only placeholder, since it will be rescanned as a real assignment expression.
		            return {
		                type: token_1.Token.Template,
		                lineNumber: this.scanner.lineNumber,
		                lineStart: this.scanner.lineStart,
		                start: this.scanner.index,
		                end: this.scanner.index
		            };
		        }
		        // Identifer can not contain backslash (char code 92).
		        if (character_1.Character.isIdentifierStart(cp) && (cp !== 92)) {
		            var start = this.scanner.index;
		            ++this.scanner.index;
		            while (!this.scanner.eof()) {
		                var ch = this.scanner.source.charCodeAt(this.scanner.index);
		                if (character_1.Character.isIdentifierPart(ch) && (ch !== 92)) {
		                    ++this.scanner.index;
		                }
		                else if (ch === 45) {
		                    // Hyphen (char code 45) can be part of an identifier.
		                    ++this.scanner.index;
		                }
		                else {
		                    break;
		                }
		            }
		            var id = this.scanner.source.slice(start, this.scanner.index);
		            return {
		                type: JSXToken.Identifier,
		                value: id,
		                lineNumber: this.scanner.lineNumber,
		                lineStart: this.scanner.lineStart,
		                start: start,
		                end: this.scanner.index
		            };
		        }
		        this.scanner.throwUnexpectedToken();
		    };
		    JSXParser.prototype.nextJSXToken = function () {
		        this.collectComments();
		        this.startMarker.index = this.scanner.index;
		        this.startMarker.lineNumber = this.scanner.lineNumber;
		        this.startMarker.lineStart = this.scanner.lineStart;
		        var token = this.lexJSX();
		        this.lastMarker.index = this.scanner.index;
		        this.lastMarker.lineNumber = this.scanner.lineNumber;
		        this.lastMarker.lineStart = this.scanner.lineStart;
		        if (this.config.tokens) {
		            this.tokens.push(this.convertToken(token));
		        }
		        return token;
		    };
		    JSXParser.prototype.nextJSXText = function () {
		        this.startMarker.index = this.scanner.index;
		        this.startMarker.lineNumber = this.scanner.lineNumber;
		        this.startMarker.lineStart = this.scanner.lineStart;
		        var start = this.scanner.index;
		        var text = '';
		        while (!this.scanner.eof()) {
		            var ch = this.scanner.source[this.scanner.index];
		            if (ch === '{' || ch === '<') {
		                break;
		            }
		            ++this.scanner.index;
		            text += ch;
		            if (character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
		                ++this.scanner.lineNumber;
		                if (ch === '\r' && this.scanner.source[this.scanner.index] === '\n') {
		                    ++this.scanner.index;
		                }
		                this.scanner.lineStart = this.scanner.index;
		            }
		        }
		        this.lastMarker.index = this.scanner.index;
		        this.lastMarker.lineNumber = this.scanner.lineNumber;
		        this.lastMarker.lineStart = this.scanner.lineStart;
		        var token = {
		            type: JSXToken.Text,
		            value: text,
		            lineNumber: this.scanner.lineNumber,
		            lineStart: this.scanner.lineStart,
		            start: start,
		            end: this.scanner.index
		        };
		        if ((text.length > 0) && this.config.tokens) {
		            this.tokens.push(this.convertToken(token));
		        }
		        return token;
		    };
		    JSXParser.prototype.peekJSXToken = function () {
		        var previousIndex = this.scanner.index;
		        var previousLineNumber = this.scanner.lineNumber;
		        var previousLineStart = this.scanner.lineStart;
		        this.scanner.scanComments();
		        var next = this.lexJSX();
		        this.scanner.index = previousIndex;
		        this.scanner.lineNumber = previousLineNumber;
		        this.scanner.lineStart = previousLineStart;
		        return next;
		    };
		    // Expect the next JSX token to match the specified punctuator.
		    // If not, an exception will be thrown.
		    JSXParser.prototype.expectJSX = function (value) {
		        var token = this.nextJSXToken();
		        if (token.type !== token_1.Token.Punctuator || token.value !== value) {
		            this.throwUnexpectedToken(token);
		        }
		    };
		    // Return true if the next JSX token matches the specified punctuator.
		    JSXParser.prototype.matchJSX = function (value) {
		        var next = this.peekJSXToken();
		        return next.type === token_1.Token.Punctuator && next.value === value;
		    };
		    JSXParser.prototype.parseJSXIdentifier = function () {
		        var node = this.createJSXNode();
		        var token = this.nextJSXToken();
		        if (token.type !== JSXToken.Identifier) {
		            this.throwUnexpectedToken(token);
		        }
		        return this.finalize(node, new JSXNode.JSXIdentifier(token.value));
		    };
		    JSXParser.prototype.parseJSXElementName = function () {
		        var node = this.createJSXNode();
		        var elementName = this.parseJSXIdentifier();
		        if (this.matchJSX(':')) {
		            var namespace = elementName;
		            this.expectJSX(':');
		            var name_1 = this.parseJSXIdentifier();
		            elementName = this.finalize(node, new JSXNode.JSXNamespacedName(namespace, name_1));
		        }
		        else if (this.matchJSX('.')) {
		            while (this.matchJSX('.')) {
		                var object = elementName;
		                this.expectJSX('.');
		                var property = this.parseJSXIdentifier();
		                elementName = this.finalize(node, new JSXNode.JSXMemberExpression(object, property));
		            }
		        }
		        return elementName;
		    };
		    JSXParser.prototype.parseJSXAttributeName = function () {
		        var node = this.createJSXNode();
		        var attributeName;
		        var identifier = this.parseJSXIdentifier();
		        if (this.matchJSX(':')) {
		            var namespace = identifier;
		            this.expectJSX(':');
		            var name_2 = this.parseJSXIdentifier();
		            attributeName = this.finalize(node, new JSXNode.JSXNamespacedName(namespace, name_2));
		        }
		        else {
		            attributeName = identifier;
		        }
		        return attributeName;
		    };
		    JSXParser.prototype.parseJSXStringLiteralAttribute = function () {
		        var node = this.createJSXNode();
		        var token = this.nextJSXToken();
		        if (token.type !== token_1.Token.StringLiteral) {
		            this.throwUnexpectedToken(token);
		        }
		        var raw = this.getTokenRaw(token);
		        return this.finalize(node, new Node.Literal(token.value, raw));
		    };
		    JSXParser.prototype.parseJSXExpressionAttribute = function () {
		        var node = this.createJSXNode();
		        this.expectJSX('{');
		        this.finishJSX();
		        if (this.match('}')) {
		            this.tolerateError('JSX attributes must only be assigned a non-empty expression');
		        }
		        var expression = this.parseAssignmentExpression();
		        this.reenterJSX();
		        return this.finalize(node, new JSXNode.JSXExpressionContainer(expression));
		    };
		    JSXParser.prototype.parseJSXAttributeValue = function () {
		        return this.matchJSX('{') ? this.parseJSXExpressionAttribute() :
		            this.matchJSX('<') ? this.parseJSXElement() : this.parseJSXStringLiteralAttribute();
		    };
		    JSXParser.prototype.parseJSXNameValueAttribute = function () {
		        var node = this.createJSXNode();
		        var name = this.parseJSXAttributeName();
		        var value = null;
		        if (this.matchJSX('=')) {
		            this.expectJSX('=');
		            value = this.parseJSXAttributeValue();
		        }
		        return this.finalize(node, new JSXNode.JSXAttribute(name, value));
		    };
		    JSXParser.prototype.parseJSXSpreadAttribute = function () {
		        var node = this.createJSXNode();
		        this.expectJSX('{');
		        this.expectJSX('...');
		        this.finishJSX();
		        var argument = this.parseAssignmentExpression();
		        this.reenterJSX();
		        return this.finalize(node, new JSXNode.JSXSpreadAttribute(argument));
		    };
		    JSXParser.prototype.parseJSXAttributes = function () {
		        var attributes = [];
		        while (!this.matchJSX('/') && !this.matchJSX('>')) {
		            var attribute = this.matchJSX('{') ? this.parseJSXSpreadAttribute() :
		                this.parseJSXNameValueAttribute();
		            attributes.push(attribute);
		        }
		        return attributes;
		    };
		    JSXParser.prototype.parseJSXOpeningElement = function () {
		        var node = this.createJSXNode();
		        this.expectJSX('<');
		        var name = this.parseJSXElementName();
		        var attributes = this.parseJSXAttributes();
		        var selfClosing = this.matchJSX('/');
		        if (selfClosing) {
		            this.expectJSX('/');
		        }
		        this.expectJSX('>');
		        return this.finalize(node, new JSXNode.JSXOpeningElement(name, selfClosing, attributes));
		    };
		    JSXParser.prototype.parseJSXBoundaryElement = function () {
		        var node = this.createJSXNode();
		        this.expectJSX('<');
		        if (this.matchJSX('/')) {
		            this.expectJSX('/');
		            var name_3 = this.parseJSXElementName();
		            this.expectJSX('>');
		            return this.finalize(node, new JSXNode.JSXClosingElement(name_3));
		        }
		        var name = this.parseJSXElementName();
		        var attributes = this.parseJSXAttributes();
		        var selfClosing = this.matchJSX('/');
		        if (selfClosing) {
		            this.expectJSX('/');
		        }
		        this.expectJSX('>');
		        return this.finalize(node, new JSXNode.JSXOpeningElement(name, selfClosing, attributes));
		    };
		    JSXParser.prototype.parseJSXEmptyExpression = function () {
		        var node = this.createJSXChildNode();
		        this.collectComments();
		        this.lastMarker.index = this.scanner.index;
		        this.lastMarker.lineNumber = this.scanner.lineNumber;
		        this.lastMarker.lineStart = this.scanner.lineStart;
		        return this.finalize(node, new JSXNode.JSXEmptyExpression());
		    };
		    JSXParser.prototype.parseJSXExpressionContainer = function () {
		        var node = this.createJSXNode();
		        this.expectJSX('{');
		        var expression;
		        if (this.matchJSX('}')) {
		            expression = this.parseJSXEmptyExpression();
		            this.expectJSX('}');
		        }
		        else {
		            this.finishJSX();
		            expression = this.parseAssignmentExpression();
		            this.reenterJSX();
		        }
		        return this.finalize(node, new JSXNode.JSXExpressionContainer(expression));
		    };
		    JSXParser.prototype.parseJSXChildren = function () {
		        var children = [];
		        while (!this.scanner.eof()) {
		            var node = this.createJSXChildNode();
		            var token = this.nextJSXText();
		            if (token.start < token.end) {
		                var raw = this.getTokenRaw(token);
		                var child = this.finalize(node, new JSXNode.JSXText(token.value, raw));
		                children.push(child);
		            }
		            if (this.scanner.source[this.scanner.index] === '{') {
		                var container = this.parseJSXExpressionContainer();
		                children.push(container);
		            }
		            else {
		                break;
		            }
		        }
		        return children;
		    };
		    JSXParser.prototype.parseComplexJSXElement = function (el) {
		        var stack = [];
		        while (!this.scanner.eof()) {
		            el.children = el.children.concat(this.parseJSXChildren());
		            var node = this.createJSXChildNode();
		            var element = this.parseJSXBoundaryElement();
		            if (element.type === jsx_syntax_1.JSXSyntax.JSXOpeningElement) {
		                var opening = (element);
		                if (opening.selfClosing) {
		                    var child = this.finalize(node, new JSXNode.JSXElement(opening, [], null));
		                    el.children.push(child);
		                }
		                else {
		                    stack.push(el);
		                    el = { node: node, opening: opening, closing: null, children: [] };
		                }
		            }
		            if (element.type === jsx_syntax_1.JSXSyntax.JSXClosingElement) {
		                el.closing = (element);
		                var open_1 = getQualifiedElementName(el.opening.name);
		                var close_1 = getQualifiedElementName(el.closing.name);
		                if (open_1 !== close_1) {
		                    this.tolerateError('Expected corresponding JSX closing tag for %0', open_1);
		                }
		                if (stack.length > 0) {
		                    var child = this.finalize(el.node, new JSXNode.JSXElement(el.opening, el.children, el.closing));
		                    el = stack.pop();
		                    el.children.push(child);
		                }
		                else {
		                    break;
		                }
		            }
		        }
		        return el;
		    };
		    JSXParser.prototype.parseJSXElement = function () {
		        var node = this.createJSXNode();
		        var opening = this.parseJSXOpeningElement();
		        var children = [];
		        var closing = null;
		        if (!opening.selfClosing) {
		            var el = this.parseComplexJSXElement({ node: node, opening: opening, closing: closing, children: children });
		            children = el.children;
		            closing = el.closing;
		        }
		        return this.finalize(node, new JSXNode.JSXElement(opening, children, closing));
		    };
		    JSXParser.prototype.parseJSXRoot = function () {
		        // Pop the opening '<' added from the lookahead.
		        if (this.config.tokens) {
		            this.tokens.pop();
		        }
		        this.startJSX();
		        var element = this.parseJSXElement();
		        this.finishJSX();
		        return element;
		    };
		    return JSXParser;
		}(parser_1.Parser));
		exports.JSXParser = JSXParser;


	/***/ },
	/* 12 */
	/***/ function(module, exports) {

		// Generated by generate-xhtml-entities.js. DO NOT MODIFY!
		"use strict";
		exports.XHTMLEntities = {
		    quot: '\u0022',
		    amp: '\u0026',
		    apos: '\u0027',
		    gt: '\u003E',
		    nbsp: '\u00A0',
		    iexcl: '\u00A1',
		    cent: '\u00A2',
		    pound: '\u00A3',
		    curren: '\u00A4',
		    yen: '\u00A5',
		    brvbar: '\u00A6',
		    sect: '\u00A7',
		    uml: '\u00A8',
		    copy: '\u00A9',
		    ordf: '\u00AA',
		    laquo: '\u00AB',
		    not: '\u00AC',
		    shy: '\u00AD',
		    reg: '\u00AE',
		    macr: '\u00AF',
		    deg: '\u00B0',
		    plusmn: '\u00B1',
		    sup2: '\u00B2',
		    sup3: '\u00B3',
		    acute: '\u00B4',
		    micro: '\u00B5',
		    para: '\u00B6',
		    middot: '\u00B7',
		    cedil: '\u00B8',
		    sup1: '\u00B9',
		    ordm: '\u00BA',
		    raquo: '\u00BB',
		    frac14: '\u00BC',
		    frac12: '\u00BD',
		    frac34: '\u00BE',
		    iquest: '\u00BF',
		    Agrave: '\u00C0',
		    Aacute: '\u00C1',
		    Acirc: '\u00C2',
		    Atilde: '\u00C3',
		    Auml: '\u00C4',
		    Aring: '\u00C5',
		    AElig: '\u00C6',
		    Ccedil: '\u00C7',
		    Egrave: '\u00C8',
		    Eacute: '\u00C9',
		    Ecirc: '\u00CA',
		    Euml: '\u00CB',
		    Igrave: '\u00CC',
		    Iacute: '\u00CD',
		    Icirc: '\u00CE',
		    Iuml: '\u00CF',
		    ETH: '\u00D0',
		    Ntilde: '\u00D1',
		    Ograve: '\u00D2',
		    Oacute: '\u00D3',
		    Ocirc: '\u00D4',
		    Otilde: '\u00D5',
		    Ouml: '\u00D6',
		    times: '\u00D7',
		    Oslash: '\u00D8',
		    Ugrave: '\u00D9',
		    Uacute: '\u00DA',
		    Ucirc: '\u00DB',
		    Uuml: '\u00DC',
		    Yacute: '\u00DD',
		    THORN: '\u00DE',
		    szlig: '\u00DF',
		    agrave: '\u00E0',
		    aacute: '\u00E1',
		    acirc: '\u00E2',
		    atilde: '\u00E3',
		    auml: '\u00E4',
		    aring: '\u00E5',
		    aelig: '\u00E6',
		    ccedil: '\u00E7',
		    egrave: '\u00E8',
		    eacute: '\u00E9',
		    ecirc: '\u00EA',
		    euml: '\u00EB',
		    igrave: '\u00EC',
		    iacute: '\u00ED',
		    icirc: '\u00EE',
		    iuml: '\u00EF',
		    eth: '\u00F0',
		    ntilde: '\u00F1',
		    ograve: '\u00F2',
		    oacute: '\u00F3',
		    ocirc: '\u00F4',
		    otilde: '\u00F5',
		    ouml: '\u00F6',
		    divide: '\u00F7',
		    oslash: '\u00F8',
		    ugrave: '\u00F9',
		    uacute: '\u00FA',
		    ucirc: '\u00FB',
		    uuml: '\u00FC',
		    yacute: '\u00FD',
		    thorn: '\u00FE',
		    yuml: '\u00FF',
		    OElig: '\u0152',
		    oelig: '\u0153',
		    Scaron: '\u0160',
		    scaron: '\u0161',
		    Yuml: '\u0178',
		    fnof: '\u0192',
		    circ: '\u02C6',
		    tilde: '\u02DC',
		    Alpha: '\u0391',
		    Beta: '\u0392',
		    Gamma: '\u0393',
		    Delta: '\u0394',
		    Epsilon: '\u0395',
		    Zeta: '\u0396',
		    Eta: '\u0397',
		    Theta: '\u0398',
		    Iota: '\u0399',
		    Kappa: '\u039A',
		    Lambda: '\u039B',
		    Mu: '\u039C',
		    Nu: '\u039D',
		    Xi: '\u039E',
		    Omicron: '\u039F',
		    Pi: '\u03A0',
		    Rho: '\u03A1',
		    Sigma: '\u03A3',
		    Tau: '\u03A4',
		    Upsilon: '\u03A5',
		    Phi: '\u03A6',
		    Chi: '\u03A7',
		    Psi: '\u03A8',
		    Omega: '\u03A9',
		    alpha: '\u03B1',
		    beta: '\u03B2',
		    gamma: '\u03B3',
		    delta: '\u03B4',
		    epsilon: '\u03B5',
		    zeta: '\u03B6',
		    eta: '\u03B7',
		    theta: '\u03B8',
		    iota: '\u03B9',
		    kappa: '\u03BA',
		    lambda: '\u03BB',
		    mu: '\u03BC',
		    nu: '\u03BD',
		    xi: '\u03BE',
		    omicron: '\u03BF',
		    pi: '\u03C0',
		    rho: '\u03C1',
		    sigmaf: '\u03C2',
		    sigma: '\u03C3',
		    tau: '\u03C4',
		    upsilon: '\u03C5',
		    phi: '\u03C6',
		    chi: '\u03C7',
		    psi: '\u03C8',
		    omega: '\u03C9',
		    thetasym: '\u03D1',
		    upsih: '\u03D2',
		    piv: '\u03D6',
		    ensp: '\u2002',
		    emsp: '\u2003',
		    thinsp: '\u2009',
		    zwnj: '\u200C',
		    zwj: '\u200D',
		    lrm: '\u200E',
		    rlm: '\u200F',
		    ndash: '\u2013',
		    mdash: '\u2014',
		    lsquo: '\u2018',
		    rsquo: '\u2019',
		    sbquo: '\u201A',
		    ldquo: '\u201C',
		    rdquo: '\u201D',
		    bdquo: '\u201E',
		    dagger: '\u2020',
		    Dagger: '\u2021',
		    bull: '\u2022',
		    hellip: '\u2026',
		    permil: '\u2030',
		    prime: '\u2032',
		    Prime: '\u2033',
		    lsaquo: '\u2039',
		    rsaquo: '\u203A',
		    oline: '\u203E',
		    frasl: '\u2044',
		    euro: '\u20AC',
		    image: '\u2111',
		    weierp: '\u2118',
		    real: '\u211C',
		    trade: '\u2122',
		    alefsym: '\u2135',
		    larr: '\u2190',
		    uarr: '\u2191',
		    rarr: '\u2192',
		    darr: '\u2193',
		    harr: '\u2194',
		    crarr: '\u21B5',
		    lArr: '\u21D0',
		    uArr: '\u21D1',
		    rArr: '\u21D2',
		    dArr: '\u21D3',
		    hArr: '\u21D4',
		    forall: '\u2200',
		    part: '\u2202',
		    exist: '\u2203',
		    empty: '\u2205',
		    nabla: '\u2207',
		    isin: '\u2208',
		    notin: '\u2209',
		    ni: '\u220B',
		    prod: '\u220F',
		    sum: '\u2211',
		    minus: '\u2212',
		    lowast: '\u2217',
		    radic: '\u221A',
		    prop: '\u221D',
		    infin: '\u221E',
		    ang: '\u2220',
		    and: '\u2227',
		    or: '\u2228',
		    cap: '\u2229',
		    cup: '\u222A',
		    int: '\u222B',
		    there4: '\u2234',
		    sim: '\u223C',
		    cong: '\u2245',
		    asymp: '\u2248',
		    ne: '\u2260',
		    equiv: '\u2261',
		    le: '\u2264',
		    ge: '\u2265',
		    sub: '\u2282',
		    sup: '\u2283',
		    nsub: '\u2284',
		    sube: '\u2286',
		    supe: '\u2287',
		    oplus: '\u2295',
		    otimes: '\u2297',
		    perp: '\u22A5',
		    sdot: '\u22C5',
		    lceil: '\u2308',
		    rceil: '\u2309',
		    lfloor: '\u230A',
		    rfloor: '\u230B',
		    loz: '\u25CA',
		    spades: '\u2660',
		    clubs: '\u2663',
		    hearts: '\u2665',
		    diams: '\u2666',
		    lang: '\u27E8',
		    rang: '\u27E9'
		};


	/***/ },
	/* 13 */
	/***/ function(module, exports) {

		"use strict";
		exports.JSXSyntax = {
		    JSXAttribute: 'JSXAttribute',
		    JSXClosingElement: 'JSXClosingElement',
		    JSXElement: 'JSXElement',
		    JSXEmptyExpression: 'JSXEmptyExpression',
		    JSXExpressionContainer: 'JSXExpressionContainer',
		    JSXIdentifier: 'JSXIdentifier',
		    JSXMemberExpression: 'JSXMemberExpression',
		    JSXNamespacedName: 'JSXNamespacedName',
		    JSXOpeningElement: 'JSXOpeningElement',
		    JSXSpreadAttribute: 'JSXSpreadAttribute',
		    JSXText: 'JSXText'
		};


	/***/ },
	/* 14 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var jsx_syntax_1 = __webpack_require__(13);
		var JSXClosingElement = (function () {
		    function JSXClosingElement(name) {
		        this.type = jsx_syntax_1.JSXSyntax.JSXClosingElement;
		        this.name = name;
		    }
		    return JSXClosingElement;
		}());
		exports.JSXClosingElement = JSXClosingElement;
		var JSXElement = (function () {
		    function JSXElement(openingElement, children, closingElement) {
		        this.type = jsx_syntax_1.JSXSyntax.JSXElement;
		        this.openingElement = openingElement;
		        this.children = children;
		        this.closingElement = closingElement;
		    }
		    return JSXElement;
		}());
		exports.JSXElement = JSXElement;
		var JSXEmptyExpression = (function () {
		    function JSXEmptyExpression() {
		        this.type = jsx_syntax_1.JSXSyntax.JSXEmptyExpression;
		    }
		    return JSXEmptyExpression;
		}());
		exports.JSXEmptyExpression = JSXEmptyExpression;
		var JSXExpressionContainer = (function () {
		    function JSXExpressionContainer(expression) {
		        this.type = jsx_syntax_1.JSXSyntax.JSXExpressionContainer;
		        this.expression = expression;
		    }
		    return JSXExpressionContainer;
		}());
		exports.JSXExpressionContainer = JSXExpressionContainer;
		var JSXIdentifier = (function () {
		    function JSXIdentifier(name) {
		        this.type = jsx_syntax_1.JSXSyntax.JSXIdentifier;
		        this.name = name;
		    }
		    return JSXIdentifier;
		}());
		exports.JSXIdentifier = JSXIdentifier;
		var JSXMemberExpression = (function () {
		    function JSXMemberExpression(object, property) {
		        this.type = jsx_syntax_1.JSXSyntax.JSXMemberExpression;
		        this.object = object;
		        this.property = property;
		    }
		    return JSXMemberExpression;
		}());
		exports.JSXMemberExpression = JSXMemberExpression;
		var JSXAttribute = (function () {
		    function JSXAttribute(name, value) {
		        this.type = jsx_syntax_1.JSXSyntax.JSXAttribute;
		        this.name = name;
		        this.value = value;
		    }
		    return JSXAttribute;
		}());
		exports.JSXAttribute = JSXAttribute;
		var JSXNamespacedName = (function () {
		    function JSXNamespacedName(namespace, name) {
		        this.type = jsx_syntax_1.JSXSyntax.JSXNamespacedName;
		        this.namespace = namespace;
		        this.name = name;
		    }
		    return JSXNamespacedName;
		}());
		exports.JSXNamespacedName = JSXNamespacedName;
		var JSXOpeningElement = (function () {
		    function JSXOpeningElement(name, selfClosing, attributes) {
		        this.type = jsx_syntax_1.JSXSyntax.JSXOpeningElement;
		        this.name = name;
		        this.selfClosing = selfClosing;
		        this.attributes = attributes;
		    }
		    return JSXOpeningElement;
		}());
		exports.JSXOpeningElement = JSXOpeningElement;
		var JSXSpreadAttribute = (function () {
		    function JSXSpreadAttribute(argument) {
		        this.type = jsx_syntax_1.JSXSyntax.JSXSpreadAttribute;
		        this.argument = argument;
		    }
		    return JSXSpreadAttribute;
		}());
		exports.JSXSpreadAttribute = JSXSpreadAttribute;
		var JSXText = (function () {
		    function JSXText(value, raw) {
		        this.type = jsx_syntax_1.JSXSyntax.JSXText;
		        this.value = value;
		        this.raw = raw;
		    }
		    return JSXText;
		}());
		exports.JSXText = JSXText;


	/***/ },
	/* 15 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var scanner_1 = __webpack_require__(8);
		var error_handler_1 = __webpack_require__(6);
		var token_1 = __webpack_require__(7);
		var Reader = (function () {
		    function Reader() {
		        this.values = [];
		        this.curly = this.paren = -1;
		    }
		    ;
		    // A function following one of those tokens is an expression.
		    Reader.prototype.beforeFunctionExpression = function (t) {
		        return ['(', '{', '[', 'in', 'typeof', 'instanceof', 'new',
		            'return', 'case', 'delete', 'throw', 'void',
		            // assignment operators
		            '=', '+=', '-=', '*=', '**=', '/=', '%=', '<<=', '>>=', '>>>=',
		            '&=', '|=', '^=', ',',
		            // binary/unary operators
		            '+', '-', '*', '**', '/', '%', '++', '--', '<<', '>>', '>>>', '&',
		            '|', '^', '!', '~', '&&', '||', '?', ':', '===', '==', '>=',
		            '<=', '<', '>', '!=', '!=='].indexOf(t) >= 0;
		    };
		    ;
		    // Determine if forward slash (/) is an operator or part of a regular expression
		    // https://github.com/mozilla/sweet.js/wiki/design
		    Reader.prototype.isRegexStart = function () {
		        var previous = this.values[this.values.length - 1];
		        var regex = (previous !== null);
		        switch (previous) {
		            case 'this':
		            case ']':
		                regex = false;
		                break;
		            case ')':
		                var check = this.values[this.paren - 1];
		                regex = (check === 'if' || check === 'while' || check === 'for' || check === 'with');
		                break;
		            case '}':
		                // Dividing a function by anything makes little sense,
		                // but we have to check for that.
		                regex = false;
		                if (this.values[this.curly - 3] === 'function') {
		                    // Anonymous function, e.g. function(){} /42
		                    var check_1 = this.values[this.curly - 4];
		                    regex = check_1 ? !this.beforeFunctionExpression(check_1) : false;
		                }
		                else if (this.values[this.curly - 4] === 'function') {
		                    // Named function, e.g. function f(){} /42/
		                    var check_2 = this.values[this.curly - 5];
		                    regex = check_2 ? !this.beforeFunctionExpression(check_2) : true;
		                }
		        }
		        return regex;
		    };
		    ;
		    Reader.prototype.push = function (token) {
		        if (token.type === token_1.Token.Punctuator || token.type === token_1.Token.Keyword) {
		            if (token.value === '{') {
		                this.curly = this.values.length;
		            }
		            else if (token.value === '(') {
		                this.paren = this.values.length;
		            }
		            this.values.push(token.value);
		        }
		        else {
		            this.values.push(null);
		        }
		    };
		    ;
		    return Reader;
		}());
		var Tokenizer = (function () {
		    function Tokenizer(code, config) {
		        this.errorHandler = new error_handler_1.ErrorHandler();
		        this.errorHandler.tolerant = config ? (typeof config.tolerant === 'boolean' && config.tolerant) : false;
		        this.scanner = new scanner_1.Scanner(code, this.errorHandler);
		        this.scanner.trackComment = config ? (typeof config.comment === 'boolean' && config.comment) : false;
		        this.trackRange = config ? (typeof config.range === 'boolean' && config.range) : false;
		        this.trackLoc = config ? (typeof config.loc === 'boolean' && config.loc) : false;
		        this.buffer = [];
		        this.reader = new Reader();
		    }
		    ;
		    Tokenizer.prototype.errors = function () {
		        return this.errorHandler.errors;
		    };
		    ;
		    Tokenizer.prototype.getNextToken = function () {
		        if (this.buffer.length === 0) {
		            var comments = this.scanner.scanComments();
		            if (this.scanner.trackComment) {
		                for (var i = 0; i < comments.length; ++i) {
		                    var e = comments[i];
		                    var comment = void 0;
		                    var value = this.scanner.source.slice(e.slice[0], e.slice[1]);
		                    comment = {
		                        type: e.multiLine ? 'BlockComment' : 'LineComment',
		                        value: value
		                    };
		                    if (this.trackRange) {
		                        comment.range = e.range;
		                    }
		                    if (this.trackLoc) {
		                        comment.loc = e.loc;
		                    }
		                    this.buffer.push(comment);
		                }
		            }
		            if (!this.scanner.eof()) {
		                var loc = void 0;
		                if (this.trackLoc) {
		                    loc = {
		                        start: {
		                            line: this.scanner.lineNumber,
		                            column: this.scanner.index - this.scanner.lineStart
		                        },
		                        end: {}
		                    };
		                }
		                var token = void 0;
		                if (this.scanner.source[this.scanner.index] === '/') {
		                    token = this.reader.isRegexStart() ? this.scanner.scanRegExp() : this.scanner.scanPunctuator();
		                }
		                else {
		                    token = this.scanner.lex();
		                }
		                this.reader.push(token);
		                var entry = void 0;
		                entry = {
		                    type: token_1.TokenName[token.type],
		                    value: this.scanner.source.slice(token.start, token.end)
		                };
		                if (this.trackRange) {
		                    entry.range = [token.start, token.end];
		                }
		                if (this.trackLoc) {
		                    loc.end = {
		                        line: this.scanner.lineNumber,
		                        column: this.scanner.index - this.scanner.lineStart
		                    };
		                    entry.loc = loc;
		                }
		                if (token.regex) {
		                    entry.regex = token.regex;
		                }
		                this.buffer.push(entry);
		            }
		        }
		        return this.buffer.shift();
		    };
		    ;
		    return Tokenizer;
		}());
		exports.Tokenizer = Tokenizer;


	/***/ }
	/******/ ])
	});
	;

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

	/*!
	 * https://github.com/Starcounter-Jack/JSON-Patch
	 * json-patch-duplex.js version: 1.1.10
	 * (c) 2013 Joachim Wester
	 * MIT license
	 */
	var jsonpatch;
	(function (jsonpatch) {
	    var _objectKeys = function (obj) {
	        if (_isArray(obj)) {
	            var keys = new Array(obj.length);
	            for (var k = 0; k < keys.length; k++) {
	                keys[k] = "" + k;
	            }
	            return keys;
	        }
	        if (Object.keys) {
	            return Object.keys(obj);
	        }
	        var keys = [];
	        for (var i in obj) {
	            if (obj.hasOwnProperty(i)) {
	                keys.push(i);
	            }
	        }
	        return keys;
	    };
	    function _equals(a, b) {
	        switch (typeof a) {
	            case 'undefined': //backward compatibility, but really I think we should return false
	            case 'boolean':
	            case 'string':
	            case 'number':
	                return a === b;
	            case 'object':
	                if (a === null)
	                    return b === null;
	                if (_isArray(a)) {
	                    if (!_isArray(b) || a.length !== b.length)
	                        return false;
	                    for (var i = 0, l = a.length; i < l; i++)
	                        if (!_equals(a[i], b[i]))
	                            return false;
	                    return true;
	                }
	                var bKeys = _objectKeys(b);
	                var bLength = bKeys.length;
	                if (_objectKeys(a).length !== bLength)
	                    return false;
	                for (var i = 0; i < bLength; i++)
	                    if (!_equals(a[i], b[i]))
	                        return false;
	                return true;
	            default:
	                return false;
	        }
	    }
	    /* We use a Javascript hash to store each
	     function. Each hash entry (property) uses
	     the operation identifiers specified in rfc6902.
	     In this way, we can map each patch operation
	     to its dedicated function in efficient way.
	     */
	    /* The operations applicable to an object */
	    var objOps = {
	        add: function (obj, key) {
	            obj[key] = this.value;
	        },
	        remove: function (obj, key) {
	            var removed = obj[key];
	            delete obj[key];
	            return removed;
	        },
	        replace: function (obj, key) {
	            var removed = obj[key];
	            obj[key] = this.value;
	            return removed;
	        },
	        move: function (obj, key, tree) {
	            var getOriginalDestination = { op: "_get", path: this.path };
	            apply(tree, [getOriginalDestination]);
	            // In case value is moved up and overwrites its ancestor
	            var original = getOriginalDestination.value === undefined ?
	                undefined : JSON.parse(JSON.stringify(getOriginalDestination.value));
	            var temp = { op: "_get", path: this.from };
	            apply(tree, [temp]);
	            apply(tree, [
	                { op: "remove", path: this.from }
	            ]);
	            apply(tree, [
	                { op: "add", path: this.path, value: temp.value }
	            ]);
	            return original;
	        },
	        copy: function (obj, key, tree) {
	            var temp = { op: "_get", path: this.from };
	            apply(tree, [temp]);
	            apply(tree, [
	                { op: "add", path: this.path, value: temp.value }
	            ]);
	        },
	        test: function (obj, key) {
	            return _equals(obj[key], this.value);
	        },
	        _get: function (obj, key) {
	            this.value = obj[key];
	        }
	    };
	    /* The operations applicable to an array. Many are the same as for the object */
	    var arrOps = {
	        add: function (arr, i) {
	            arr.splice(i, 0, this.value);
	            // this may be needed when using '-' in an array
	            return i;
	        },
	        remove: function (arr, i) {
	            var removedList = arr.splice(i, 1);
	            return removedList[0];
	        },
	        replace: function (arr, i) {
	            var removed = arr[i];
	            arr[i] = this.value;
	            return removed;
	        },
	        move: objOps.move,
	        copy: objOps.copy,
	        test: objOps.test,
	        _get: objOps._get
	    };
	    /* The operations applicable to object root. Many are the same as for the object */
	    var rootOps = {
	        add: function (obj) {
	            rootOps.remove.call(this, obj);
	            for (var key in this.value) {
	                if (this.value.hasOwnProperty(key)) {
	                    obj[key] = this.value[key];
	                }
	            }
	        },
	        remove: function (obj) {
	            var removed = {};
	            for (var key in obj) {
	                if (obj.hasOwnProperty(key)) {
	                    removed[key] = obj[key];
	                    objOps.remove.call(this, obj, key);
	                }
	            }
	            return removed;
	        },
	        replace: function (obj) {
	            var removed = apply(obj, [
	                { op: "remove", path: this.path }
	            ]);
	            apply(obj, [
	                { op: "add", path: this.path, value: this.value }
	            ]);
	            return removed[0];
	        },
	        move: objOps.move,
	        copy: objOps.copy,
	        test: function (obj) {
	            return (JSON.stringify(obj) === JSON.stringify(this.value));
	        },
	        _get: function (obj) {
	            this.value = obj;
	        }
	    };
	    function escapePathComponent(str) {
	        if (str.indexOf('/') === -1 && str.indexOf('~') === -1)
	            return str;
	        return str.replace(/~/g, '~0').replace(/\//g, '~1');
	    }
	    function _getPathRecursive(root, obj) {
	        var found;
	        for (var key in root) {
	            if (root.hasOwnProperty(key)) {
	                if (root[key] === obj) {
	                    return escapePathComponent(key) + '/';
	                }
	                else if (typeof root[key] === 'object') {
	                    found = _getPathRecursive(root[key], obj);
	                    if (found != '') {
	                        return escapePathComponent(key) + '/' + found;
	                    }
	                }
	            }
	        }
	        return '';
	    }
	    function getPath(root, obj) {
	        if (root === obj) {
	            return '/';
	        }
	        var path = _getPathRecursive(root, obj);
	        if (path === '') {
	            throw new Error("Object not found in root");
	        }
	        return '/' + path;
	    }
	    var beforeDict = [];
	    var Mirror = (function () {
	        function Mirror(obj) {
	            this.observers = [];
	            this.obj = obj;
	        }
	        return Mirror;
	    }());
	    var ObserverInfo = (function () {
	        function ObserverInfo(callback, observer) {
	            this.callback = callback;
	            this.observer = observer;
	        }
	        return ObserverInfo;
	    }());
	    function getMirror(obj) {
	        for (var i = 0, ilen = beforeDict.length; i < ilen; i++) {
	            if (beforeDict[i].obj === obj) {
	                return beforeDict[i];
	            }
	        }
	    }
	    function getObserverFromMirror(mirror, callback) {
	        for (var j = 0, jlen = mirror.observers.length; j < jlen; j++) {
	            if (mirror.observers[j].callback === callback) {
	                return mirror.observers[j].observer;
	            }
	        }
	    }
	    function removeObserverFromMirror(mirror, observer) {
	        for (var j = 0, jlen = mirror.observers.length; j < jlen; j++) {
	            if (mirror.observers[j].observer === observer) {
	                mirror.observers.splice(j, 1);
	                return;
	            }
	        }
	    }
	    /**
	     * Detach an observer from an object
	     */
	    function unobserve(root, observer) {
	        observer.unobserve();
	    }
	    jsonpatch.unobserve = unobserve;
	    function deepClone(obj) {
	        switch (typeof obj) {
	            case "object":
	                return JSON.parse(JSON.stringify(obj)); //Faster than ES5 clone - http://jsperf.com/deep-cloning-of-objects/5
	            case "undefined":
	                return null; //this is how JSON.stringify behaves for array items
	            default:
	                return obj; //no need to clone primitives
	        }
	    }
	    /**
	     * Observes changes made to an object, which can then be retieved using generate
	     */
	    function observe(obj, callback) {
	        var patches = [];
	        var root = obj;
	        var observer;
	        var mirror = getMirror(obj);
	        if (!mirror) {
	            mirror = new Mirror(obj);
	            beforeDict.push(mirror);
	        }
	        else {
	            observer = getObserverFromMirror(mirror, callback);
	        }
	        if (observer) {
	            return observer;
	        }
	        observer = {};
	        mirror.value = deepClone(obj);
	        if (callback) {
	            observer.callback = callback;
	            observer.next = null;
	            var dirtyCheck = function () {
	                generate(observer);
	            };
	            var fastCheck = function () {
	                clearTimeout(observer.next);
	                observer.next = setTimeout(dirtyCheck);
	            };
	            if (typeof window !== 'undefined') {
	                if (window.addEventListener) {
	                    window.addEventListener('mouseup', fastCheck);
	                    window.addEventListener('keyup', fastCheck);
	                    window.addEventListener('mousedown', fastCheck);
	                    window.addEventListener('keydown', fastCheck);
	                    window.addEventListener('change', fastCheck);
	                }
	                else {
	                    document.documentElement.attachEvent('onmouseup', fastCheck);
	                    document.documentElement.attachEvent('onkeyup', fastCheck);
	                    document.documentElement.attachEvent('onmousedown', fastCheck);
	                    document.documentElement.attachEvent('onkeydown', fastCheck);
	                    document.documentElement.attachEvent('onchange', fastCheck);
	                }
	            }
	        }
	        observer.patches = patches;
	        observer.object = obj;
	        observer.unobserve = function () {
	            generate(observer);
	            clearTimeout(observer.next);
	            removeObserverFromMirror(mirror, observer);
	            if (typeof window !== 'undefined') {
	                if (window.removeEventListener) {
	                    window.removeEventListener('mouseup', fastCheck);
	                    window.removeEventListener('keyup', fastCheck);
	                    window.removeEventListener('mousedown', fastCheck);
	                    window.removeEventListener('keydown', fastCheck);
	                }
	                else {
	                    document.documentElement.detachEvent('onmouseup', fastCheck);
	                    document.documentElement.detachEvent('onkeyup', fastCheck);
	                    document.documentElement.detachEvent('onmousedown', fastCheck);
	                    document.documentElement.detachEvent('onkeydown', fastCheck);
	                }
	            }
	        };
	        mirror.observers.push(new ObserverInfo(callback, observer));
	        return observer;
	    }
	    jsonpatch.observe = observe;
	    /**
	     * Generate an array of patches from an observer
	     */
	    function generate(observer) {
	        var mirror;
	        for (var i = 0, ilen = beforeDict.length; i < ilen; i++) {
	            if (beforeDict[i].obj === observer.object) {
	                mirror = beforeDict[i];
	                break;
	            }
	        }
	        _generate(mirror.value, observer.object, observer.patches, "");
	        if (observer.patches.length) {
	            apply(mirror.value, observer.patches);
	        }
	        var temp = observer.patches;
	        if (temp.length > 0) {
	            observer.patches = [];
	            if (observer.callback) {
	                observer.callback(temp);
	            }
	        }
	        return temp;
	    }
	    jsonpatch.generate = generate;
	    // Dirty check if obj is different from mirror, generate patches and update mirror
	    function _generate(mirror, obj, patches, path) {
	        if (obj === mirror) {
	            return;
	        }
	        if (typeof obj.toJSON === "function") {
	            obj = obj.toJSON();
	        }
	        var newKeys = _objectKeys(obj);
	        var oldKeys = _objectKeys(mirror);
	        var changed = false;
	        var deleted = false;
	        //if ever "move" operation is implemented here, make sure this test runs OK: "should not generate the same patch twice (move)"
	        for (var t = oldKeys.length - 1; t >= 0; t--) {
	            var key = oldKeys[t];
	            var oldVal = mirror[key];
	            if (obj.hasOwnProperty(key) && !(obj[key] === undefined && oldVal !== undefined && _isArray(obj) === false)) {
	                var newVal = obj[key];
	                if (typeof oldVal == "object" && oldVal != null && typeof newVal == "object" && newVal != null) {
	                    _generate(oldVal, newVal, patches, path + "/" + escapePathComponent(key));
	                }
	                else {
	                    if (oldVal !== newVal) {
	                        changed = true;
	                        patches.push({ op: "replace", path: path + "/" + escapePathComponent(key), value: deepClone(newVal) });
	                    }
	                }
	            }
	            else {
	                patches.push({ op: "remove", path: path + "/" + escapePathComponent(key) });
	                deleted = true; // property has been deleted
	            }
	        }
	        if (!deleted && newKeys.length == oldKeys.length) {
	            return;
	        }
	        for (var t = 0; t < newKeys.length; t++) {
	            var key = newKeys[t];
	            if (!mirror.hasOwnProperty(key) && obj[key] !== undefined) {
	                patches.push({ op: "add", path: path + "/" + escapePathComponent(key), value: deepClone(obj[key]) });
	            }
	        }
	    }
	    var _isArray;
	    if (Array.isArray) {
	        _isArray = Array.isArray;
	    }
	    else {
	        _isArray = function (obj) {
	            return obj.push && typeof obj.length === 'number';
	        };
	    }
	    //3x faster than cached /^\d+$/.test(str)
	    function isInteger(str) {
	        var i = 0;
	        var len = str.length;
	        var charCode;
	        while (i < len) {
	            charCode = str.charCodeAt(i);
	            if (charCode >= 48 && charCode <= 57) {
	                i++;
	                continue;
	            }
	            return false;
	        }
	        return true;
	    }
	    /**
	     * Apply a json-patch operation on an object tree
	     * Returns an array of results of operations.
	     * Each element can either be a boolean (if op == 'test') or
	     * the removed object (operations that remove things)
	     * or just be undefined
	     */
	    function apply(tree, patches, validate) {
	        var results = [], p = 0, plen = patches.length, patch, key;
	        while (p < plen) {
	            patch = patches[p];
	            p++;
	            // Find the object
	            var path = patch.path || "";
	            var keys = path.split('/');
	            var obj = tree;
	            var t = 1; //skip empty element - http://jsperf.com/to-shift-or-not-to-shift
	            var len = keys.length;
	            var existingPathFragment = undefined;
	            while (true) {
	                key = keys[t];
	                if (validate) {
	                    if (existingPathFragment === undefined) {
	                        if (obj[key] === undefined) {
	                            existingPathFragment = keys.slice(0, t).join('/');
	                        }
	                        else if (t == len - 1) {
	                            existingPathFragment = patch.path;
	                        }
	                        if (existingPathFragment !== undefined) {
	                            this.validator(patch, p - 1, tree, existingPathFragment);
	                        }
	                    }
	                }
	                t++;
	                if (key === undefined) {
	                    if (t >= len) {
	                        results.push(rootOps[patch.op].call(patch, obj, key, tree)); // Apply patch
	                        break;
	                    }
	                }
	                if (_isArray(obj)) {
	                    if (key === '-') {
	                        key = obj.length;
	                    }
	                    else {
	                        if (validate && !isInteger(key)) {
	                            throw new JsonPatchError("Expected an unsigned base-10 integer value, making the new referenced value the array element with the zero-based index", "OPERATION_PATH_ILLEGAL_ARRAY_INDEX", p - 1, patch.path, patch);
	                        }
	                        key = parseInt(key, 10);
	                    }
	                    if (t >= len) {
	                        if (validate && patch.op === "add" && key > obj.length) {
	                            throw new JsonPatchError("The specified index MUST NOT be greater than the number of elements in the array", "OPERATION_VALUE_OUT_OF_BOUNDS", p - 1, patch.path, patch);
	                        }
	                        results.push(arrOps[patch.op].call(patch, obj, key, tree)); // Apply patch
	                        break;
	                    }
	                }
	                else {
	                    if (key && key.indexOf('~') != -1)
	                        key = key.replace(/~1/g, '/').replace(/~0/g, '~'); // escape chars
	                    if (t >= len) {
	                        results.push(objOps[patch.op].call(patch, obj, key, tree)); // Apply patch
	                        break;
	                    }
	                }
	                obj = obj[key];
	            }
	        }
	        return results;
	    }
	    jsonpatch.apply = apply;
	    /**
	     * Create an array of patches from the differences in two objects
	     */
	    function compare(tree1, tree2) {
	        var patches = [];
	        _generate(tree1, tree2, patches, '');
	        return patches;
	    }
	    jsonpatch.compare = compare;
	    // provide scoped __extends for TypeScript's `extend` keyword so it will not provide global one during compilation
	    function __extends(d, b) {
	        for (var p in b)
	            if (b.hasOwnProperty(p))
	                d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    }
	    var JsonPatchError = (function (_super) {
	        __extends(JsonPatchError, _super);
	        function JsonPatchError(message, name, index, operation, tree) {
	            _super.call(this, message);
	            this.message = message;
	            this.name = name;
	            this.index = index;
	            this.operation = operation;
	            this.tree = tree;
	        }
	        return JsonPatchError;
	    }(Error));
	    jsonpatch.JsonPatchError = JsonPatchError;
	    /**
	     * Recursively checks whether an object has any undefined values inside.
	     */
	    function hasUndefined(obj) {
	        if (obj === undefined) {
	            return true;
	        }
	        if (obj) {
	            if (_isArray(obj)) {
	                for (var i = 0, len = obj.length; i < len; i++) {
	                    if (hasUndefined(obj[i])) {
	                        return true;
	                    }
	                }
	            }
	            else if (typeof obj === "object") {
	                var objKeys = _objectKeys(obj);
	                var objKeysLength = objKeys.length;
	                for (var i = 0; i < objKeysLength; i++) {
	                    if (hasUndefined(obj[objKeys[i]])) {
	                        return true;
	                    }
	                }
	            }
	        }
	        return false;
	    }
	    /**
	     * Validates a single operation. Called from `jsonpatch.validate`. Throws `JsonPatchError` in case of an error.
	     * @param {object} operation - operation object (patch)
	     * @param {number} index - index of operation in the sequence
	     * @param {object} [tree] - object where the operation is supposed to be applied
	     * @param {string} [existingPathFragment] - comes along with `tree`
	     */
	    function validator(operation, index, tree, existingPathFragment) {
	        if (typeof operation !== 'object' || operation === null || _isArray(operation)) {
	            throw new JsonPatchError('Operation is not an object', 'OPERATION_NOT_AN_OBJECT', index, operation, tree);
	        }
	        else if (!objOps[operation.op]) {
	            throw new JsonPatchError('Operation `op` property is not one of operations defined in RFC-6902', 'OPERATION_OP_INVALID', index, operation, tree);
	        }
	        else if (typeof operation.path !== 'string') {
	            throw new JsonPatchError('Operation `path` property is not a string', 'OPERATION_PATH_INVALID', index, operation, tree);
	        }
	        else if (operation.path.indexOf('/') !== 0 && operation.path.length > 0) {
	            // paths that aren't emptystring should start with "/"
	            throw new JsonPatchError('Operation `path` property must start with "/"', 'OPERATION_PATH_INVALID', index, operation, tree);
	        }
	        else if ((operation.op === 'move' || operation.op === 'copy') && typeof operation.from !== 'string') {
	            throw new JsonPatchError('Operation `from` property is not present (applicable in `move` and `copy` operations)', 'OPERATION_FROM_REQUIRED', index, operation, tree);
	        }
	        else if ((operation.op === 'add' || operation.op === 'replace' || operation.op === 'test') && operation.value === undefined) {
	            throw new JsonPatchError('Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)', 'OPERATION_VALUE_REQUIRED', index, operation, tree);
	        }
	        else if ((operation.op === 'add' || operation.op === 'replace' || operation.op === 'test') && hasUndefined(operation.value)) {
	            throw new JsonPatchError('Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)', 'OPERATION_VALUE_CANNOT_CONTAIN_UNDEFINED', index, operation, tree);
	        }
	        else if (tree) {
	            if (operation.op == "add") {
	                var pathLen = operation.path.split("/").length;
	                var existingPathLen = existingPathFragment.split("/").length;
	                if (pathLen !== existingPathLen + 1 && pathLen !== existingPathLen) {
	                    throw new JsonPatchError('Cannot perform an `add` operation at the desired path', 'OPERATION_PATH_CANNOT_ADD', index, operation, tree);
	                }
	            }
	            else if (operation.op === 'replace' || operation.op === 'remove' || operation.op === '_get') {
	                if (operation.path !== existingPathFragment) {
	                    throw new JsonPatchError('Cannot perform the operation at a path that does not exist', 'OPERATION_PATH_UNRESOLVABLE', index, operation, tree);
	                }
	            }
	            else if (operation.op === 'move' || operation.op === 'copy') {
	                var existingValue = { op: "_get", path: operation.from, value: undefined };
	                var error = jsonpatch.validate([existingValue], tree);
	                if (error && error.name === 'OPERATION_PATH_UNRESOLVABLE') {
	                    throw new JsonPatchError('Cannot perform the operation from a path that does not exist', 'OPERATION_FROM_UNRESOLVABLE', index, operation, tree);
	                }
	            }
	        }
	    }
	    jsonpatch.validator = validator;
	    /**
	     * Validates a sequence of operations. If `tree` parameter is provided, the sequence is additionally validated against the object tree.
	     * If error is encountered, returns a JsonPatchError object
	     * @param sequence
	     * @param tree
	     * @returns {JsonPatchError|undefined}
	     */
	    function validate(sequence, tree) {
	        try {
	            if (!_isArray(sequence)) {
	                throw new JsonPatchError('Patch sequence must be an array', 'SEQUENCE_NOT_AN_ARRAY');
	            }
	            if (tree) {
	                tree = JSON.parse(JSON.stringify(tree)); //clone tree so that we can safely try applying operations
	                apply.call(this, tree, sequence, true);
	            }
	            else {
	                for (var i = 0; i < sequence.length; i++) {
	                    this.validator(sequence[i], i);
	                }
	            }
	        }
	        catch (e) {
	            if (e instanceof JsonPatchError) {
	                return e;
	            }
	            else {
	                throw e;
	            }
	        }
	    }
	    jsonpatch.validate = validate;
	})(jsonpatch || (jsonpatch = {}));
	if (true) {
	    exports.apply = jsonpatch.apply;
	    exports.observe = jsonpatch.observe;
	    exports.unobserve = jsonpatch.unobserve;
	    exports.generate = jsonpatch.generate;
	    exports.compare = jsonpatch.compare;
	    exports.validate = jsonpatch.validate;
	    exports.validator = jsonpatch.validator;
	    exports.JsonPatchError = jsonpatch.JsonPatchError;
	}
	else {
	    var exports = {};
	    var isBrowser = true;
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = jsonpatch;
	/*
	When in browser, setting `exports = {}`
	fools other modules into thinking they're
	running in a node environment, which breaks
	some of them. Here is super light wieght fix.
	*/
	if (isBrowser) {
	    exports = undefined;
	}


/***/ }),
/* 179 */
/***/ (function(module, exports) {

	exports.read = function (buffer, offset, isLE, mLen, nBytes) {
	  var e, m
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var nBits = -7
	  var i = isLE ? (nBytes - 1) : 0
	  var d = isLE ? -1 : 1
	  var s = buffer[offset + i]

	  i += d

	  e = s & ((1 << (-nBits)) - 1)
	  s >>= (-nBits)
	  nBits += eLen
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  m = e & ((1 << (-nBits)) - 1)
	  e >>= (-nBits)
	  nBits += mLen
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  if (e === 0) {
	    e = 1 - eBias
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity)
	  } else {
	    m = m + Math.pow(2, mLen)
	    e = e - eBias
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
	}

	exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
	  var i = isLE ? 0 : (nBytes - 1)
	  var d = isLE ? 1 : -1
	  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

	  value = Math.abs(value)

	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0
	    e = eMax
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2)
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--
	      c *= 2
	    }
	    if (e + eBias >= 1) {
	      value += rt / c
	    } else {
	      value += rt * Math.pow(2, 1 - eBias)
	    }
	    if (value * c >= 2) {
	      e++
	      c /= 2
	    }

	    if (e + eBias >= eMax) {
	      m = 0
	      e = eMax
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen)
	      e = e + eBias
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
	      e = 0
	    }
	  }

	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

	  e = (e << mLen) | m
	  eLen += mLen
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

	  buffer[offset + i - d] |= s * 128
	}


/***/ }),
/* 180 */
/***/ (function(module, exports) {

	var toString = {}.toString;

	module.exports = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

	// the whatwg-fetch polyfill installs the fetch() function
	// on the global object (window or self)
	//
	// Return that as the export for use in Webpack, Browserify etc.
	__webpack_require__(311);
	module.exports = self.fetch.bind(self);


/***/ }),
/* 182 */
/***/ (function(module, exports) {

	module.exports = FormData;

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';


	var yaml = __webpack_require__(184);


	module.exports = yaml;


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';


	var loader = __webpack_require__(186);
	var dumper = __webpack_require__(185);


	function deprecated(name) {
	  return function () {
	    throw new Error('Function ' + name + ' is deprecated and cannot be used.');
	  };
	}


	module.exports.Type                = __webpack_require__(1);
	module.exports.Schema              = __webpack_require__(21);
	module.exports.FAILSAFE_SCHEMA     = __webpack_require__(66);
	module.exports.JSON_SCHEMA         = __webpack_require__(92);
	module.exports.CORE_SCHEMA         = __webpack_require__(91);
	module.exports.DEFAULT_SAFE_SCHEMA = __webpack_require__(30);
	module.exports.DEFAULT_FULL_SCHEMA = __webpack_require__(36);
	module.exports.load                = loader.load;
	module.exports.loadAll             = loader.loadAll;
	module.exports.safeLoad            = loader.safeLoad;
	module.exports.safeLoadAll         = loader.safeLoadAll;
	module.exports.dump                = dumper.dump;
	module.exports.safeDump            = dumper.safeDump;
	module.exports.YAMLException       = __webpack_require__(29);

	// Deprecated schema names from JS-YAML 2.0.x
	module.exports.MINIMAL_SCHEMA = __webpack_require__(66);
	module.exports.SAFE_SCHEMA    = __webpack_require__(30);
	module.exports.DEFAULT_SCHEMA = __webpack_require__(36);

	// Deprecated functions from JS-YAML 1.x.x
	module.exports.scan           = deprecated('scan');
	module.exports.parse          = deprecated('parse');
	module.exports.compose        = deprecated('compose');
	module.exports.addConstructor = deprecated('addConstructor');


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	/*eslint-disable no-use-before-define*/

	var common              = __webpack_require__(20);
	var YAMLException       = __webpack_require__(29);
	var DEFAULT_FULL_SCHEMA = __webpack_require__(36);
	var DEFAULT_SAFE_SCHEMA = __webpack_require__(30);

	var _toString       = Object.prototype.toString;
	var _hasOwnProperty = Object.prototype.hasOwnProperty;

	var CHAR_TAB                  = 0x09; /* Tab */
	var CHAR_LINE_FEED            = 0x0A; /* LF */
	var CHAR_SPACE                = 0x20; /* Space */
	var CHAR_EXCLAMATION          = 0x21; /* ! */
	var CHAR_DOUBLE_QUOTE         = 0x22; /* " */
	var CHAR_SHARP                = 0x23; /* # */
	var CHAR_PERCENT              = 0x25; /* % */
	var CHAR_AMPERSAND            = 0x26; /* & */
	var CHAR_SINGLE_QUOTE         = 0x27; /* ' */
	var CHAR_ASTERISK             = 0x2A; /* * */
	var CHAR_COMMA                = 0x2C; /* , */
	var CHAR_MINUS                = 0x2D; /* - */
	var CHAR_COLON                = 0x3A; /* : */
	var CHAR_GREATER_THAN         = 0x3E; /* > */
	var CHAR_QUESTION             = 0x3F; /* ? */
	var CHAR_COMMERCIAL_AT        = 0x40; /* @ */
	var CHAR_LEFT_SQUARE_BRACKET  = 0x5B; /* [ */
	var CHAR_RIGHT_SQUARE_BRACKET = 0x5D; /* ] */
	var CHAR_GRAVE_ACCENT         = 0x60; /* ` */
	var CHAR_LEFT_CURLY_BRACKET   = 0x7B; /* { */
	var CHAR_VERTICAL_LINE        = 0x7C; /* | */
	var CHAR_RIGHT_CURLY_BRACKET  = 0x7D; /* } */

	var ESCAPE_SEQUENCES = {};

	ESCAPE_SEQUENCES[0x00]   = '\\0';
	ESCAPE_SEQUENCES[0x07]   = '\\a';
	ESCAPE_SEQUENCES[0x08]   = '\\b';
	ESCAPE_SEQUENCES[0x09]   = '\\t';
	ESCAPE_SEQUENCES[0x0A]   = '\\n';
	ESCAPE_SEQUENCES[0x0B]   = '\\v';
	ESCAPE_SEQUENCES[0x0C]   = '\\f';
	ESCAPE_SEQUENCES[0x0D]   = '\\r';
	ESCAPE_SEQUENCES[0x1B]   = '\\e';
	ESCAPE_SEQUENCES[0x22]   = '\\"';
	ESCAPE_SEQUENCES[0x5C]   = '\\\\';
	ESCAPE_SEQUENCES[0x85]   = '\\N';
	ESCAPE_SEQUENCES[0xA0]   = '\\_';
	ESCAPE_SEQUENCES[0x2028] = '\\L';
	ESCAPE_SEQUENCES[0x2029] = '\\P';

	var DEPRECATED_BOOLEANS_SYNTAX = [
	  'y', 'Y', 'yes', 'Yes', 'YES', 'on', 'On', 'ON',
	  'n', 'N', 'no', 'No', 'NO', 'off', 'Off', 'OFF'
	];

	function compileStyleMap(schema, map) {
	  var result, keys, index, length, tag, style, type;

	  if (map === null) return {};

	  result = {};
	  keys = Object.keys(map);

	  for (index = 0, length = keys.length; index < length; index += 1) {
	    tag = keys[index];
	    style = String(map[tag]);

	    if (tag.slice(0, 2) === '!!') {
	      tag = 'tag:yaml.org,2002:' + tag.slice(2);
	    }
	    type = schema.compiledTypeMap['fallback'][tag];

	    if (type && _hasOwnProperty.call(type.styleAliases, style)) {
	      style = type.styleAliases[style];
	    }

	    result[tag] = style;
	  }

	  return result;
	}

	function encodeHex(character) {
	  var string, handle, length;

	  string = character.toString(16).toUpperCase();

	  if (character <= 0xFF) {
	    handle = 'x';
	    length = 2;
	  } else if (character <= 0xFFFF) {
	    handle = 'u';
	    length = 4;
	  } else if (character <= 0xFFFFFFFF) {
	    handle = 'U';
	    length = 8;
	  } else {
	    throw new YAMLException('code point within a string may not be greater than 0xFFFFFFFF');
	  }

	  return '\\' + handle + common.repeat('0', length - string.length) + string;
	}

	function State(options) {
	  this.schema       = options['schema'] || DEFAULT_FULL_SCHEMA;
	  this.indent       = Math.max(1, (options['indent'] || 2));
	  this.skipInvalid  = options['skipInvalid'] || false;
	  this.flowLevel    = (common.isNothing(options['flowLevel']) ? -1 : options['flowLevel']);
	  this.styleMap     = compileStyleMap(this.schema, options['styles'] || null);
	  this.sortKeys     = options['sortKeys'] || false;
	  this.lineWidth    = options['lineWidth'] || 80;
	  this.noRefs       = options['noRefs'] || false;
	  this.noCompatMode = options['noCompatMode'] || false;

	  this.implicitTypes = this.schema.compiledImplicit;
	  this.explicitTypes = this.schema.compiledExplicit;

	  this.tag = null;
	  this.result = '';

	  this.duplicates = [];
	  this.usedDuplicates = null;
	}

	// Indents every line in a string. Empty lines (\n only) are not indented.
	function indentString(string, spaces) {
	  var ind = common.repeat(' ', spaces),
	      position = 0,
	      next = -1,
	      result = '',
	      line,
	      length = string.length;

	  while (position < length) {
	    next = string.indexOf('\n', position);
	    if (next === -1) {
	      line = string.slice(position);
	      position = length;
	    } else {
	      line = string.slice(position, next + 1);
	      position = next + 1;
	    }

	    if (line.length && line !== '\n') result += ind;

	    result += line;
	  }

	  return result;
	}

	function generateNextLine(state, level) {
	  return '\n' + common.repeat(' ', state.indent * level);
	}

	function testImplicitResolving(state, str) {
	  var index, length, type;

	  for (index = 0, length = state.implicitTypes.length; index < length; index += 1) {
	    type = state.implicitTypes[index];

	    if (type.resolve(str)) {
	      return true;
	    }
	  }

	  return false;
	}

	// [33] s-white ::= s-space | s-tab
	function isWhitespace(c) {
	  return c === CHAR_SPACE || c === CHAR_TAB;
	}

	// Returns true if the character can be printed without escaping.
	// From YAML 1.2: "any allowed characters known to be non-printable
	// should also be escaped. [However,] This isn’t mandatory"
	// Derived from nb-char - \t - #x85 - #xA0 - #x2028 - #x2029.
	function isPrintable(c) {
	  return  (0x00020 <= c && c <= 0x00007E)
	      || ((0x000A1 <= c && c <= 0x00D7FF) && c !== 0x2028 && c !== 0x2029)
	      || ((0x0E000 <= c && c <= 0x00FFFD) && c !== 0xFEFF /* BOM */)
	      ||  (0x10000 <= c && c <= 0x10FFFF);
	}

	// Simplified test for values allowed after the first character in plain style.
	function isPlainSafe(c) {
	  // Uses a subset of nb-char - c-flow-indicator - ":" - "#"
	  // where nb-char ::= c-printable - b-char - c-byte-order-mark.
	  return isPrintable(c) && c !== 0xFEFF
	    // - c-flow-indicator
	    && c !== CHAR_COMMA
	    && c !== CHAR_LEFT_SQUARE_BRACKET
	    && c !== CHAR_RIGHT_SQUARE_BRACKET
	    && c !== CHAR_LEFT_CURLY_BRACKET
	    && c !== CHAR_RIGHT_CURLY_BRACKET
	    // - ":" - "#"
	    && c !== CHAR_COLON
	    && c !== CHAR_SHARP;
	}

	// Simplified test for values allowed as the first character in plain style.
	function isPlainSafeFirst(c) {
	  // Uses a subset of ns-char - c-indicator
	  // where ns-char = nb-char - s-white.
	  return isPrintable(c) && c !== 0xFEFF
	    && !isWhitespace(c) // - s-white
	    // - (c-indicator ::=
	    // “-” | “?” | “:” | “,” | “[” | “]” | “{” | “}”
	    && c !== CHAR_MINUS
	    && c !== CHAR_QUESTION
	    && c !== CHAR_COLON
	    && c !== CHAR_COMMA
	    && c !== CHAR_LEFT_SQUARE_BRACKET
	    && c !== CHAR_RIGHT_SQUARE_BRACKET
	    && c !== CHAR_LEFT_CURLY_BRACKET
	    && c !== CHAR_RIGHT_CURLY_BRACKET
	    // | “#” | “&” | “*” | “!” | “|” | “>” | “'” | “"”
	    && c !== CHAR_SHARP
	    && c !== CHAR_AMPERSAND
	    && c !== CHAR_ASTERISK
	    && c !== CHAR_EXCLAMATION
	    && c !== CHAR_VERTICAL_LINE
	    && c !== CHAR_GREATER_THAN
	    && c !== CHAR_SINGLE_QUOTE
	    && c !== CHAR_DOUBLE_QUOTE
	    // | “%” | “@” | “`”)
	    && c !== CHAR_PERCENT
	    && c !== CHAR_COMMERCIAL_AT
	    && c !== CHAR_GRAVE_ACCENT;
	}

	var STYLE_PLAIN   = 1,
	    STYLE_SINGLE  = 2,
	    STYLE_LITERAL = 3,
	    STYLE_FOLDED  = 4,
	    STYLE_DOUBLE  = 5;

	// Determines which scalar styles are possible and returns the preferred style.
	// lineWidth = -1 => no limit.
	// Pre-conditions: str.length > 0.
	// Post-conditions:
	//    STYLE_PLAIN or STYLE_SINGLE => no \n are in the string.
	//    STYLE_LITERAL => no lines are suitable for folding (or lineWidth is -1).
	//    STYLE_FOLDED => a line > lineWidth and can be folded (and lineWidth != -1).
	function chooseScalarStyle(string, singleLineOnly, indentPerLevel, lineWidth, testAmbiguousType) {
	  var i;
	  var char;
	  var hasLineBreak = false;
	  var hasFoldableLine = false; // only checked if shouldTrackWidth
	  var shouldTrackWidth = lineWidth !== -1;
	  var previousLineBreak = -1; // count the first line correctly
	  var plain = isPlainSafeFirst(string.charCodeAt(0))
	          && !isWhitespace(string.charCodeAt(string.length - 1));

	  if (singleLineOnly) {
	    // Case: no block styles.
	    // Check for disallowed characters to rule out plain and single.
	    for (i = 0; i < string.length; i++) {
	      char = string.charCodeAt(i);
	      if (!isPrintable(char)) {
	        return STYLE_DOUBLE;
	      }
	      plain = plain && isPlainSafe(char);
	    }
	  } else {
	    // Case: block styles permitted.
	    for (i = 0; i < string.length; i++) {
	      char = string.charCodeAt(i);
	      if (char === CHAR_LINE_FEED) {
	        hasLineBreak = true;
	        // Check if any line can be folded.
	        if (shouldTrackWidth) {
	          hasFoldableLine = hasFoldableLine ||
	            // Foldable line = too long, and not more-indented.
	            (i - previousLineBreak - 1 > lineWidth &&
	             string[previousLineBreak + 1] !== ' ');
	          previousLineBreak = i;
	        }
	      } else if (!isPrintable(char)) {
	        return STYLE_DOUBLE;
	      }
	      plain = plain && isPlainSafe(char);
	    }
	    // in case the end is missing a \n
	    hasFoldableLine = hasFoldableLine || (shouldTrackWidth &&
	      (i - previousLineBreak - 1 > lineWidth &&
	       string[previousLineBreak + 1] !== ' '));
	  }
	  // Although every style can represent \n without escaping, prefer block styles
	  // for multiline, since they're more readable and they don't add empty lines.
	  // Also prefer folding a super-long line.
	  if (!hasLineBreak && !hasFoldableLine) {
	    // Strings interpretable as another type have to be quoted;
	    // e.g. the string 'true' vs. the boolean true.
	    return plain && !testAmbiguousType(string)
	      ? STYLE_PLAIN : STYLE_SINGLE;
	  }
	  // Edge case: block indentation indicator can only have one digit.
	  if (string[0] === ' ' && indentPerLevel > 9) {
	    return STYLE_DOUBLE;
	  }
	  // At this point we know block styles are valid.
	  // Prefer literal style unless we want to fold.
	  return hasFoldableLine ? STYLE_FOLDED : STYLE_LITERAL;
	}

	// Note: line breaking/folding is implemented for only the folded style.
	// NB. We drop the last trailing newline (if any) of a returned block scalar
	//  since the dumper adds its own newline. This always works:
	//    • No ending newline => unaffected; already using strip "-" chomping.
	//    • Ending newline    => removed then restored.
	//  Importantly, this keeps the "+" chomp indicator from gaining an extra line.
	function writeScalar(state, string, level, iskey) {
	  state.dump = (function () {
	    if (string.length === 0) {
	      return "''";
	    }
	    if (!state.noCompatMode &&
	        DEPRECATED_BOOLEANS_SYNTAX.indexOf(string) !== -1) {
	      return "'" + string + "'";
	    }

	    var indent = state.indent * Math.max(1, level); // no 0-indent scalars
	    // As indentation gets deeper, let the width decrease monotonically
	    // to the lower bound min(state.lineWidth, 40).
	    // Note that this implies
	    //  state.lineWidth ≤ 40 + state.indent: width is fixed at the lower bound.
	    //  state.lineWidth > 40 + state.indent: width decreases until the lower bound.
	    // This behaves better than a constant minimum width which disallows narrower options,
	    // or an indent threshold which causes the width to suddenly increase.
	    var lineWidth = state.lineWidth === -1
	      ? -1 : Math.max(Math.min(state.lineWidth, 40), state.lineWidth - indent);

	    // Without knowing if keys are implicit/explicit, assume implicit for safety.
	    var singleLineOnly = iskey
	      // No block styles in flow mode.
	      || (state.flowLevel > -1 && level >= state.flowLevel);
	    function testAmbiguity(string) {
	      return testImplicitResolving(state, string);
	    }

	    switch (chooseScalarStyle(string, singleLineOnly, state.indent, lineWidth, testAmbiguity)) {
	      case STYLE_PLAIN:
	        return string;
	      case STYLE_SINGLE:
	        return "'" + string.replace(/'/g, "''") + "'";
	      case STYLE_LITERAL:
	        return '|' + blockHeader(string, state.indent)
	          + dropEndingNewline(indentString(string, indent));
	      case STYLE_FOLDED:
	        return '>' + blockHeader(string, state.indent)
	          + dropEndingNewline(indentString(foldString(string, lineWidth), indent));
	      case STYLE_DOUBLE:
	        return '"' + escapeString(string, lineWidth) + '"';
	      default:
	        throw new YAMLException('impossible error: invalid scalar style');
	    }
	  }());
	}

	// Pre-conditions: string is valid for a block scalar, 1 <= indentPerLevel <= 9.
	function blockHeader(string, indentPerLevel) {
	  var indentIndicator = (string[0] === ' ') ? String(indentPerLevel) : '';

	  // note the special case: the string '\n' counts as a "trailing" empty line.
	  var clip =          string[string.length - 1] === '\n';
	  var keep = clip && (string[string.length - 2] === '\n' || string === '\n');
	  var chomp = keep ? '+' : (clip ? '' : '-');

	  return indentIndicator + chomp + '\n';
	}

	// (See the note for writeScalar.)
	function dropEndingNewline(string) {
	  return string[string.length - 1] === '\n' ? string.slice(0, -1) : string;
	}

	// Note: a long line without a suitable break point will exceed the width limit.
	// Pre-conditions: every char in str isPrintable, str.length > 0, width > 0.
	function foldString(string, width) {
	  // In folded style, $k$ consecutive newlines output as $k+1$ newlines—
	  // unless they're before or after a more-indented line, or at the very
	  // beginning or end, in which case $k$ maps to $k$.
	  // Therefore, parse each chunk as newline(s) followed by a content line.
	  var lineRe = /(\n+)([^\n]*)/g;

	  // first line (possibly an empty line)
	  var result = (function () {
	    var nextLF = string.indexOf('\n');
	    nextLF = nextLF !== -1 ? nextLF : string.length;
	    lineRe.lastIndex = nextLF;
	    return foldLine(string.slice(0, nextLF), width);
	  }());
	  // If we haven't reached the first content line yet, don't add an extra \n.
	  var prevMoreIndented = string[0] === '\n' || string[0] === ' ';
	  var moreIndented;

	  // rest of the lines
	  var match;
	  while ((match = lineRe.exec(string))) {
	    var prefix = match[1], line = match[2];
	    moreIndented = (line[0] === ' ');
	    result += prefix
	      + (!prevMoreIndented && !moreIndented && line !== ''
	        ? '\n' : '')
	      + foldLine(line, width);
	    prevMoreIndented = moreIndented;
	  }

	  return result;
	}

	// Greedy line breaking.
	// Picks the longest line under the limit each time,
	// otherwise settles for the shortest line over the limit.
	// NB. More-indented lines *cannot* be folded, as that would add an extra \n.
	function foldLine(line, width) {
	  if (line === '' || line[0] === ' ') return line;

	  // Since a more-indented line adds a \n, breaks can't be followed by a space.
	  var breakRe = / [^ ]/g; // note: the match index will always be <= length-2.
	  var match;
	  // start is an inclusive index. end, curr, and next are exclusive.
	  var start = 0, end, curr = 0, next = 0;
	  var result = '';

	  // Invariants: 0 <= start <= length-1.
	  //   0 <= curr <= next <= max(0, length-2). curr - start <= width.
	  // Inside the loop:
	  //   A match implies length >= 2, so curr and next are <= length-2.
	  while ((match = breakRe.exec(line))) {
	    next = match.index;
	    // maintain invariant: curr - start <= width
	    if (next - start > width) {
	      end = (curr > start) ? curr : next; // derive end <= length-2
	      result += '\n' + line.slice(start, end);
	      // skip the space that was output as \n
	      start = end + 1;                    // derive start <= length-1
	    }
	    curr = next;
	  }

	  // By the invariants, start <= length-1, so there is something left over.
	  // It is either the whole string or a part starting from non-whitespace.
	  result += '\n';
	  // Insert a break if the remainder is too long and there is a break available.
	  if (line.length - start > width && curr > start) {
	    result += line.slice(start, curr) + '\n' + line.slice(curr + 1);
	  } else {
	    result += line.slice(start);
	  }

	  return result.slice(1); // drop extra \n joiner
	}

	// Escapes a double-quoted string.
	function escapeString(string) {
	  var result = '';
	  var char;
	  var escapeSeq;

	  for (var i = 0; i < string.length; i++) {
	    char = string.charCodeAt(i);
	    escapeSeq = ESCAPE_SEQUENCES[char];
	    result += !escapeSeq && isPrintable(char)
	      ? string[i]
	      : escapeSeq || encodeHex(char);
	  }

	  return result;
	}

	function writeFlowSequence(state, level, object) {
	  var _result = '',
	      _tag    = state.tag,
	      index,
	      length;

	  for (index = 0, length = object.length; index < length; index += 1) {
	    // Write only valid elements.
	    if (writeNode(state, level, object[index], false, false)) {
	      if (index !== 0) _result += ', ';
	      _result += state.dump;
	    }
	  }

	  state.tag = _tag;
	  state.dump = '[' + _result + ']';
	}

	function writeBlockSequence(state, level, object, compact) {
	  var _result = '',
	      _tag    = state.tag,
	      index,
	      length;

	  for (index = 0, length = object.length; index < length; index += 1) {
	    // Write only valid elements.
	    if (writeNode(state, level + 1, object[index], true, true)) {
	      if (!compact || index !== 0) {
	        _result += generateNextLine(state, level);
	      }

	      if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
	        _result += '-';
	      } else {
	        _result += '- ';
	      }

	      _result += state.dump;
	    }
	  }

	  state.tag = _tag;
	  state.dump = _result || '[]'; // Empty sequence if no valid values.
	}

	function writeFlowMapping(state, level, object) {
	  var _result       = '',
	      _tag          = state.tag,
	      objectKeyList = Object.keys(object),
	      index,
	      length,
	      objectKey,
	      objectValue,
	      pairBuffer;

	  for (index = 0, length = objectKeyList.length; index < length; index += 1) {
	    pairBuffer = '';

	    if (index !== 0) pairBuffer += ', ';

	    objectKey = objectKeyList[index];
	    objectValue = object[objectKey];

	    if (!writeNode(state, level, objectKey, false, false)) {
	      continue; // Skip this pair because of invalid key;
	    }

	    if (state.dump.length > 1024) pairBuffer += '? ';

	    pairBuffer += state.dump + ': ';

	    if (!writeNode(state, level, objectValue, false, false)) {
	      continue; // Skip this pair because of invalid value.
	    }

	    pairBuffer += state.dump;

	    // Both key and value are valid.
	    _result += pairBuffer;
	  }

	  state.tag = _tag;
	  state.dump = '{' + _result + '}';
	}

	function writeBlockMapping(state, level, object, compact) {
	  var _result       = '',
	      _tag          = state.tag,
	      objectKeyList = Object.keys(object),
	      index,
	      length,
	      objectKey,
	      objectValue,
	      explicitPair,
	      pairBuffer;

	  // Allow sorting keys so that the output file is deterministic
	  if (state.sortKeys === true) {
	    // Default sorting
	    objectKeyList.sort();
	  } else if (typeof state.sortKeys === 'function') {
	    // Custom sort function
	    objectKeyList.sort(state.sortKeys);
	  } else if (state.sortKeys) {
	    // Something is wrong
	    throw new YAMLException('sortKeys must be a boolean or a function');
	  }

	  for (index = 0, length = objectKeyList.length; index < length; index += 1) {
	    pairBuffer = '';

	    if (!compact || index !== 0) {
	      pairBuffer += generateNextLine(state, level);
	    }

	    objectKey = objectKeyList[index];
	    objectValue = object[objectKey];

	    if (!writeNode(state, level + 1, objectKey, true, true, true)) {
	      continue; // Skip this pair because of invalid key.
	    }

	    explicitPair = (state.tag !== null && state.tag !== '?') ||
	                   (state.dump && state.dump.length > 1024);

	    if (explicitPair) {
	      if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
	        pairBuffer += '?';
	      } else {
	        pairBuffer += '? ';
	      }
	    }

	    pairBuffer += state.dump;

	    if (explicitPair) {
	      pairBuffer += generateNextLine(state, level);
	    }

	    if (!writeNode(state, level + 1, objectValue, true, explicitPair)) {
	      continue; // Skip this pair because of invalid value.
	    }

	    if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
	      pairBuffer += ':';
	    } else {
	      pairBuffer += ': ';
	    }

	    pairBuffer += state.dump;

	    // Both key and value are valid.
	    _result += pairBuffer;
	  }

	  state.tag = _tag;
	  state.dump = _result || '{}'; // Empty mapping if no valid pairs.
	}

	function detectType(state, object, explicit) {
	  var _result, typeList, index, length, type, style;

	  typeList = explicit ? state.explicitTypes : state.implicitTypes;

	  for (index = 0, length = typeList.length; index < length; index += 1) {
	    type = typeList[index];

	    if ((type.instanceOf  || type.predicate) &&
	        (!type.instanceOf || ((typeof object === 'object') && (object instanceof type.instanceOf))) &&
	        (!type.predicate  || type.predicate(object))) {

	      state.tag = explicit ? type.tag : '?';

	      if (type.represent) {
	        style = state.styleMap[type.tag] || type.defaultStyle;

	        if (_toString.call(type.represent) === '[object Function]') {
	          _result = type.represent(object, style);
	        } else if (_hasOwnProperty.call(type.represent, style)) {
	          _result = type.represent[style](object, style);
	        } else {
	          throw new YAMLException('!<' + type.tag + '> tag resolver accepts not "' + style + '" style');
	        }

	        state.dump = _result;
	      }

	      return true;
	    }
	  }

	  return false;
	}

	// Serializes `object` and writes it to global `result`.
	// Returns true on success, or false on invalid object.
	//
	function writeNode(state, level, object, block, compact, iskey) {
	  state.tag = null;
	  state.dump = object;

	  if (!detectType(state, object, false)) {
	    detectType(state, object, true);
	  }

	  var type = _toString.call(state.dump);

	  if (block) {
	    block = (state.flowLevel < 0 || state.flowLevel > level);
	  }

	  var objectOrArray = type === '[object Object]' || type === '[object Array]',
	      duplicateIndex,
	      duplicate;

	  if (objectOrArray) {
	    duplicateIndex = state.duplicates.indexOf(object);
	    duplicate = duplicateIndex !== -1;
	  }

	  if ((state.tag !== null && state.tag !== '?') || duplicate || (state.indent !== 2 && level > 0)) {
	    compact = false;
	  }

	  if (duplicate && state.usedDuplicates[duplicateIndex]) {
	    state.dump = '*ref_' + duplicateIndex;
	  } else {
	    if (objectOrArray && duplicate && !state.usedDuplicates[duplicateIndex]) {
	      state.usedDuplicates[duplicateIndex] = true;
	    }
	    if (type === '[object Object]') {
	      if (block && (Object.keys(state.dump).length !== 0)) {
	        writeBlockMapping(state, level, state.dump, compact);
	        if (duplicate) {
	          state.dump = '&ref_' + duplicateIndex + state.dump;
	        }
	      } else {
	        writeFlowMapping(state, level, state.dump);
	        if (duplicate) {
	          state.dump = '&ref_' + duplicateIndex + ' ' + state.dump;
	        }
	      }
	    } else if (type === '[object Array]') {
	      if (block && (state.dump.length !== 0)) {
	        writeBlockSequence(state, level, state.dump, compact);
	        if (duplicate) {
	          state.dump = '&ref_' + duplicateIndex + state.dump;
	        }
	      } else {
	        writeFlowSequence(state, level, state.dump);
	        if (duplicate) {
	          state.dump = '&ref_' + duplicateIndex + ' ' + state.dump;
	        }
	      }
	    } else if (type === '[object String]') {
	      if (state.tag !== '?') {
	        writeScalar(state, state.dump, level, iskey);
	      }
	    } else {
	      if (state.skipInvalid) return false;
	      throw new YAMLException('unacceptable kind of an object to dump ' + type);
	    }

	    if (state.tag !== null && state.tag !== '?') {
	      state.dump = '!<' + state.tag + '> ' + state.dump;
	    }
	  }

	  return true;
	}

	function getDuplicateReferences(object, state) {
	  var objects = [],
	      duplicatesIndexes = [],
	      index,
	      length;

	  inspectNode(object, objects, duplicatesIndexes);

	  for (index = 0, length = duplicatesIndexes.length; index < length; index += 1) {
	    state.duplicates.push(objects[duplicatesIndexes[index]]);
	  }
	  state.usedDuplicates = new Array(length);
	}

	function inspectNode(object, objects, duplicatesIndexes) {
	  var objectKeyList,
	      index,
	      length;

	  if (object !== null && typeof object === 'object') {
	    index = objects.indexOf(object);
	    if (index !== -1) {
	      if (duplicatesIndexes.indexOf(index) === -1) {
	        duplicatesIndexes.push(index);
	      }
	    } else {
	      objects.push(object);

	      if (Array.isArray(object)) {
	        for (index = 0, length = object.length; index < length; index += 1) {
	          inspectNode(object[index], objects, duplicatesIndexes);
	        }
	      } else {
	        objectKeyList = Object.keys(object);

	        for (index = 0, length = objectKeyList.length; index < length; index += 1) {
	          inspectNode(object[objectKeyList[index]], objects, duplicatesIndexes);
	        }
	      }
	    }
	  }
	}

	function dump(input, options) {
	  options = options || {};

	  var state = new State(options);

	  if (!state.noRefs) getDuplicateReferences(input, state);

	  if (writeNode(state, 0, input, true, true)) return state.dump + '\n';

	  return '';
	}

	function safeDump(input, options) {
	  return dump(input, common.extend({ schema: DEFAULT_SAFE_SCHEMA }, options));
	}

	module.exports.dump     = dump;
	module.exports.safeDump = safeDump;


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	/*eslint-disable max-len,no-use-before-define*/

	var common              = __webpack_require__(20);
	var YAMLException       = __webpack_require__(29);
	var Mark                = __webpack_require__(187);
	var DEFAULT_SAFE_SCHEMA = __webpack_require__(30);
	var DEFAULT_FULL_SCHEMA = __webpack_require__(36);


	var _hasOwnProperty = Object.prototype.hasOwnProperty;


	var CONTEXT_FLOW_IN   = 1;
	var CONTEXT_FLOW_OUT  = 2;
	var CONTEXT_BLOCK_IN  = 3;
	var CONTEXT_BLOCK_OUT = 4;


	var CHOMPING_CLIP  = 1;
	var CHOMPING_STRIP = 2;
	var CHOMPING_KEEP  = 3;


	var PATTERN_NON_PRINTABLE         = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
	var PATTERN_NON_ASCII_LINE_BREAKS = /[\x85\u2028\u2029]/;
	var PATTERN_FLOW_INDICATORS       = /[,\[\]\{\}]/;
	var PATTERN_TAG_HANDLE            = /^(?:!|!!|![a-z\-]+!)$/i;
	var PATTERN_TAG_URI               = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;


	function is_EOL(c) {
	  return (c === 0x0A/* LF */) || (c === 0x0D/* CR */);
	}

	function is_WHITE_SPACE(c) {
	  return (c === 0x09/* Tab */) || (c === 0x20/* Space */);
	}

	function is_WS_OR_EOL(c) {
	  return (c === 0x09/* Tab */) ||
	         (c === 0x20/* Space */) ||
	         (c === 0x0A/* LF */) ||
	         (c === 0x0D/* CR */);
	}

	function is_FLOW_INDICATOR(c) {
	  return c === 0x2C/* , */ ||
	         c === 0x5B/* [ */ ||
	         c === 0x5D/* ] */ ||
	         c === 0x7B/* { */ ||
	         c === 0x7D/* } */;
	}

	function fromHexCode(c) {
	  var lc;

	  if ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */)) {
	    return c - 0x30;
	  }

	  /*eslint-disable no-bitwise*/
	  lc = c | 0x20;

	  if ((0x61/* a */ <= lc) && (lc <= 0x66/* f */)) {
	    return lc - 0x61 + 10;
	  }

	  return -1;
	}

	function escapedHexLen(c) {
	  if (c === 0x78/* x */) { return 2; }
	  if (c === 0x75/* u */) { return 4; }
	  if (c === 0x55/* U */) { return 8; }
	  return 0;
	}

	function fromDecimalCode(c) {
	  if ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */)) {
	    return c - 0x30;
	  }

	  return -1;
	}

	function simpleEscapeSequence(c) {
	  return (c === 0x30/* 0 */) ? '\x00' :
	        (c === 0x61/* a */) ? '\x07' :
	        (c === 0x62/* b */) ? '\x08' :
	        (c === 0x74/* t */) ? '\x09' :
	        (c === 0x09/* Tab */) ? '\x09' :
	        (c === 0x6E/* n */) ? '\x0A' :
	        (c === 0x76/* v */) ? '\x0B' :
	        (c === 0x66/* f */) ? '\x0C' :
	        (c === 0x72/* r */) ? '\x0D' :
	        (c === 0x65/* e */) ? '\x1B' :
	        (c === 0x20/* Space */) ? ' ' :
	        (c === 0x22/* " */) ? '\x22' :
	        (c === 0x2F/* / */) ? '/' :
	        (c === 0x5C/* \ */) ? '\x5C' :
	        (c === 0x4E/* N */) ? '\x85' :
	        (c === 0x5F/* _ */) ? '\xA0' :
	        (c === 0x4C/* L */) ? '\u2028' :
	        (c === 0x50/* P */) ? '\u2029' : '';
	}

	function charFromCodepoint(c) {
	  if (c <= 0xFFFF) {
	    return String.fromCharCode(c);
	  }
	  // Encode UTF-16 surrogate pair
	  // https://en.wikipedia.org/wiki/UTF-16#Code_points_U.2B010000_to_U.2B10FFFF
	  return String.fromCharCode(((c - 0x010000) >> 10) + 0xD800,
	                             ((c - 0x010000) & 0x03FF) + 0xDC00);
	}

	var simpleEscapeCheck = new Array(256); // integer, for fast access
	var simpleEscapeMap = new Array(256);
	for (var i = 0; i < 256; i++) {
	  simpleEscapeCheck[i] = simpleEscapeSequence(i) ? 1 : 0;
	  simpleEscapeMap[i] = simpleEscapeSequence(i);
	}


	function State(input, options) {
	  this.input = input;

	  this.filename  = options['filename']  || null;
	  this.schema    = options['schema']    || DEFAULT_FULL_SCHEMA;
	  this.onWarning = options['onWarning'] || null;
	  this.legacy    = options['legacy']    || false;
	  this.json      = options['json']      || false;
	  this.listener  = options['listener']  || null;

	  this.implicitTypes = this.schema.compiledImplicit;
	  this.typeMap       = this.schema.compiledTypeMap;

	  this.length     = input.length;
	  this.position   = 0;
	  this.line       = 0;
	  this.lineStart  = 0;
	  this.lineIndent = 0;

	  this.documents = [];

	  /*
	  this.version;
	  this.checkLineBreaks;
	  this.tagMap;
	  this.anchorMap;
	  this.tag;
	  this.anchor;
	  this.kind;
	  this.result;*/

	}


	function generateError(state, message) {
	  return new YAMLException(
	    message,
	    new Mark(state.filename, state.input, state.position, state.line, (state.position - state.lineStart)));
	}

	function throwError(state, message) {
	  throw generateError(state, message);
	}

	function throwWarning(state, message) {
	  if (state.onWarning) {
	    state.onWarning.call(null, generateError(state, message));
	  }
	}


	var directiveHandlers = {

	  YAML: function handleYamlDirective(state, name, args) {

	    var match, major, minor;

	    if (state.version !== null) {
	      throwError(state, 'duplication of %YAML directive');
	    }

	    if (args.length !== 1) {
	      throwError(state, 'YAML directive accepts exactly one argument');
	    }

	    match = /^([0-9]+)\.([0-9]+)$/.exec(args[0]);

	    if (match === null) {
	      throwError(state, 'ill-formed argument of the YAML directive');
	    }

	    major = parseInt(match[1], 10);
	    minor = parseInt(match[2], 10);

	    if (major !== 1) {
	      throwError(state, 'unacceptable YAML version of the document');
	    }

	    state.version = args[0];
	    state.checkLineBreaks = (minor < 2);

	    if (minor !== 1 && minor !== 2) {
	      throwWarning(state, 'unsupported YAML version of the document');
	    }
	  },

	  TAG: function handleTagDirective(state, name, args) {

	    var handle, prefix;

	    if (args.length !== 2) {
	      throwError(state, 'TAG directive accepts exactly two arguments');
	    }

	    handle = args[0];
	    prefix = args[1];

	    if (!PATTERN_TAG_HANDLE.test(handle)) {
	      throwError(state, 'ill-formed tag handle (first argument) of the TAG directive');
	    }

	    if (_hasOwnProperty.call(state.tagMap, handle)) {
	      throwError(state, 'there is a previously declared suffix for "' + handle + '" tag handle');
	    }

	    if (!PATTERN_TAG_URI.test(prefix)) {
	      throwError(state, 'ill-formed tag prefix (second argument) of the TAG directive');
	    }

	    state.tagMap[handle] = prefix;
	  }
	};


	function captureSegment(state, start, end, checkJson) {
	  var _position, _length, _character, _result;

	  if (start < end) {
	    _result = state.input.slice(start, end);

	    if (checkJson) {
	      for (_position = 0, _length = _result.length;
	           _position < _length;
	           _position += 1) {
	        _character = _result.charCodeAt(_position);
	        if (!(_character === 0x09 ||
	              (0x20 <= _character && _character <= 0x10FFFF))) {
	          throwError(state, 'expected valid JSON character');
	        }
	      }
	    } else if (PATTERN_NON_PRINTABLE.test(_result)) {
	      throwError(state, 'the stream contains non-printable characters');
	    }

	    state.result += _result;
	  }
	}

	function mergeMappings(state, destination, source, overridableKeys) {
	  var sourceKeys, key, index, quantity;

	  if (!common.isObject(source)) {
	    throwError(state, 'cannot merge mappings; the provided source object is unacceptable');
	  }

	  sourceKeys = Object.keys(source);

	  for (index = 0, quantity = sourceKeys.length; index < quantity; index += 1) {
	    key = sourceKeys[index];

	    if (!_hasOwnProperty.call(destination, key)) {
	      destination[key] = source[key];
	      overridableKeys[key] = true;
	    }
	  }
	}

	function storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, startLine, startPos) {
	  var index, quantity;

	  keyNode = String(keyNode);

	  if (_result === null) {
	    _result = {};
	  }

	  if (keyTag === 'tag:yaml.org,2002:merge') {
	    if (Array.isArray(valueNode)) {
	      for (index = 0, quantity = valueNode.length; index < quantity; index += 1) {
	        mergeMappings(state, _result, valueNode[index], overridableKeys);
	      }
	    } else {
	      mergeMappings(state, _result, valueNode, overridableKeys);
	    }
	  } else {
	    if (!state.json &&
	        !_hasOwnProperty.call(overridableKeys, keyNode) &&
	        _hasOwnProperty.call(_result, keyNode)) {
	      state.line = startLine || state.line;
	      state.position = startPos || state.position;
	      throwError(state, 'duplicated mapping key');
	    }
	    _result[keyNode] = valueNode;
	    delete overridableKeys[keyNode];
	  }

	  return _result;
	}

	function readLineBreak(state) {
	  var ch;

	  ch = state.input.charCodeAt(state.position);

	  if (ch === 0x0A/* LF */) {
	    state.position++;
	  } else if (ch === 0x0D/* CR */) {
	    state.position++;
	    if (state.input.charCodeAt(state.position) === 0x0A/* LF */) {
	      state.position++;
	    }
	  } else {
	    throwError(state, 'a line break is expected');
	  }

	  state.line += 1;
	  state.lineStart = state.position;
	}

	function skipSeparationSpace(state, allowComments, checkIndent) {
	  var lineBreaks = 0,
	      ch = state.input.charCodeAt(state.position);

	  while (ch !== 0) {
	    while (is_WHITE_SPACE(ch)) {
	      ch = state.input.charCodeAt(++state.position);
	    }

	    if (allowComments && ch === 0x23/* # */) {
	      do {
	        ch = state.input.charCodeAt(++state.position);
	      } while (ch !== 0x0A/* LF */ && ch !== 0x0D/* CR */ && ch !== 0);
	    }

	    if (is_EOL(ch)) {
	      readLineBreak(state);

	      ch = state.input.charCodeAt(state.position);
	      lineBreaks++;
	      state.lineIndent = 0;

	      while (ch === 0x20/* Space */) {
	        state.lineIndent++;
	        ch = state.input.charCodeAt(++state.position);
	      }
	    } else {
	      break;
	    }
	  }

	  if (checkIndent !== -1 && lineBreaks !== 0 && state.lineIndent < checkIndent) {
	    throwWarning(state, 'deficient indentation');
	  }

	  return lineBreaks;
	}

	function testDocumentSeparator(state) {
	  var _position = state.position,
	      ch;

	  ch = state.input.charCodeAt(_position);

	  // Condition state.position === state.lineStart is tested
	  // in parent on each call, for efficiency. No needs to test here again.
	  if ((ch === 0x2D/* - */ || ch === 0x2E/* . */) &&
	      ch === state.input.charCodeAt(_position + 1) &&
	      ch === state.input.charCodeAt(_position + 2)) {

	    _position += 3;

	    ch = state.input.charCodeAt(_position);

	    if (ch === 0 || is_WS_OR_EOL(ch)) {
	      return true;
	    }
	  }

	  return false;
	}

	function writeFoldedLines(state, count) {
	  if (count === 1) {
	    state.result += ' ';
	  } else if (count > 1) {
	    state.result += common.repeat('\n', count - 1);
	  }
	}


	function readPlainScalar(state, nodeIndent, withinFlowCollection) {
	  var preceding,
	      following,
	      captureStart,
	      captureEnd,
	      hasPendingContent,
	      _line,
	      _lineStart,
	      _lineIndent,
	      _kind = state.kind,
	      _result = state.result,
	      ch;

	  ch = state.input.charCodeAt(state.position);

	  if (is_WS_OR_EOL(ch)      ||
	      is_FLOW_INDICATOR(ch) ||
	      ch === 0x23/* # */    ||
	      ch === 0x26/* & */    ||
	      ch === 0x2A/* * */    ||
	      ch === 0x21/* ! */    ||
	      ch === 0x7C/* | */    ||
	      ch === 0x3E/* > */    ||
	      ch === 0x27/* ' */    ||
	      ch === 0x22/* " */    ||
	      ch === 0x25/* % */    ||
	      ch === 0x40/* @ */    ||
	      ch === 0x60/* ` */) {
	    return false;
	  }

	  if (ch === 0x3F/* ? */ || ch === 0x2D/* - */) {
	    following = state.input.charCodeAt(state.position + 1);

	    if (is_WS_OR_EOL(following) ||
	        withinFlowCollection && is_FLOW_INDICATOR(following)) {
	      return false;
	    }
	  }

	  state.kind = 'scalar';
	  state.result = '';
	  captureStart = captureEnd = state.position;
	  hasPendingContent = false;

	  while (ch !== 0) {
	    if (ch === 0x3A/* : */) {
	      following = state.input.charCodeAt(state.position + 1);

	      if (is_WS_OR_EOL(following) ||
	          withinFlowCollection && is_FLOW_INDICATOR(following)) {
	        break;
	      }

	    } else if (ch === 0x23/* # */) {
	      preceding = state.input.charCodeAt(state.position - 1);

	      if (is_WS_OR_EOL(preceding)) {
	        break;
	      }

	    } else if ((state.position === state.lineStart && testDocumentSeparator(state)) ||
	               withinFlowCollection && is_FLOW_INDICATOR(ch)) {
	      break;

	    } else if (is_EOL(ch)) {
	      _line = state.line;
	      _lineStart = state.lineStart;
	      _lineIndent = state.lineIndent;
	      skipSeparationSpace(state, false, -1);

	      if (state.lineIndent >= nodeIndent) {
	        hasPendingContent = true;
	        ch = state.input.charCodeAt(state.position);
	        continue;
	      } else {
	        state.position = captureEnd;
	        state.line = _line;
	        state.lineStart = _lineStart;
	        state.lineIndent = _lineIndent;
	        break;
	      }
	    }

	    if (hasPendingContent) {
	      captureSegment(state, captureStart, captureEnd, false);
	      writeFoldedLines(state, state.line - _line);
	      captureStart = captureEnd = state.position;
	      hasPendingContent = false;
	    }

	    if (!is_WHITE_SPACE(ch)) {
	      captureEnd = state.position + 1;
	    }

	    ch = state.input.charCodeAt(++state.position);
	  }

	  captureSegment(state, captureStart, captureEnd, false);

	  if (state.result) {
	    return true;
	  }

	  state.kind = _kind;
	  state.result = _result;
	  return false;
	}

	function readSingleQuotedScalar(state, nodeIndent) {
	  var ch,
	      captureStart, captureEnd;

	  ch = state.input.charCodeAt(state.position);

	  if (ch !== 0x27/* ' */) {
	    return false;
	  }

	  state.kind = 'scalar';
	  state.result = '';
	  state.position++;
	  captureStart = captureEnd = state.position;

	  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
	    if (ch === 0x27/* ' */) {
	      captureSegment(state, captureStart, state.position, true);
	      ch = state.input.charCodeAt(++state.position);

	      if (ch === 0x27/* ' */) {
	        captureStart = state.position;
	        state.position++;
	        captureEnd = state.position;
	      } else {
	        return true;
	      }

	    } else if (is_EOL(ch)) {
	      captureSegment(state, captureStart, captureEnd, true);
	      writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
	      captureStart = captureEnd = state.position;

	    } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
	      throwError(state, 'unexpected end of the document within a single quoted scalar');

	    } else {
	      state.position++;
	      captureEnd = state.position;
	    }
	  }

	  throwError(state, 'unexpected end of the stream within a single quoted scalar');
	}

	function readDoubleQuotedScalar(state, nodeIndent) {
	  var captureStart,
	      captureEnd,
	      hexLength,
	      hexResult,
	      tmp,
	      ch;

	  ch = state.input.charCodeAt(state.position);

	  if (ch !== 0x22/* " */) {
	    return false;
	  }

	  state.kind = 'scalar';
	  state.result = '';
	  state.position++;
	  captureStart = captureEnd = state.position;

	  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
	    if (ch === 0x22/* " */) {
	      captureSegment(state, captureStart, state.position, true);
	      state.position++;
	      return true;

	    } else if (ch === 0x5C/* \ */) {
	      captureSegment(state, captureStart, state.position, true);
	      ch = state.input.charCodeAt(++state.position);

	      if (is_EOL(ch)) {
	        skipSeparationSpace(state, false, nodeIndent);

	        // TODO: rework to inline fn with no type cast?
	      } else if (ch < 256 && simpleEscapeCheck[ch]) {
	        state.result += simpleEscapeMap[ch];
	        state.position++;

	      } else if ((tmp = escapedHexLen(ch)) > 0) {
	        hexLength = tmp;
	        hexResult = 0;

	        for (; hexLength > 0; hexLength--) {
	          ch = state.input.charCodeAt(++state.position);

	          if ((tmp = fromHexCode(ch)) >= 0) {
	            hexResult = (hexResult << 4) + tmp;

	          } else {
	            throwError(state, 'expected hexadecimal character');
	          }
	        }

	        state.result += charFromCodepoint(hexResult);

	        state.position++;

	      } else {
	        throwError(state, 'unknown escape sequence');
	      }

	      captureStart = captureEnd = state.position;

	    } else if (is_EOL(ch)) {
	      captureSegment(state, captureStart, captureEnd, true);
	      writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
	      captureStart = captureEnd = state.position;

	    } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
	      throwError(state, 'unexpected end of the document within a double quoted scalar');

	    } else {
	      state.position++;
	      captureEnd = state.position;
	    }
	  }

	  throwError(state, 'unexpected end of the stream within a double quoted scalar');
	}

	function readFlowCollection(state, nodeIndent) {
	  var readNext = true,
	      _line,
	      _tag     = state.tag,
	      _result,
	      _anchor  = state.anchor,
	      following,
	      terminator,
	      isPair,
	      isExplicitPair,
	      isMapping,
	      overridableKeys = {},
	      keyNode,
	      keyTag,
	      valueNode,
	      ch;

	  ch = state.input.charCodeAt(state.position);

	  if (ch === 0x5B/* [ */) {
	    terminator = 0x5D;/* ] */
	    isMapping = false;
	    _result = [];
	  } else if (ch === 0x7B/* { */) {
	    terminator = 0x7D;/* } */
	    isMapping = true;
	    _result = {};
	  } else {
	    return false;
	  }

	  if (state.anchor !== null) {
	    state.anchorMap[state.anchor] = _result;
	  }

	  ch = state.input.charCodeAt(++state.position);

	  while (ch !== 0) {
	    skipSeparationSpace(state, true, nodeIndent);

	    ch = state.input.charCodeAt(state.position);

	    if (ch === terminator) {
	      state.position++;
	      state.tag = _tag;
	      state.anchor = _anchor;
	      state.kind = isMapping ? 'mapping' : 'sequence';
	      state.result = _result;
	      return true;
	    } else if (!readNext) {
	      throwError(state, 'missed comma between flow collection entries');
	    }

	    keyTag = keyNode = valueNode = null;
	    isPair = isExplicitPair = false;

	    if (ch === 0x3F/* ? */) {
	      following = state.input.charCodeAt(state.position + 1);

	      if (is_WS_OR_EOL(following)) {
	        isPair = isExplicitPair = true;
	        state.position++;
	        skipSeparationSpace(state, true, nodeIndent);
	      }
	    }

	    _line = state.line;
	    composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
	    keyTag = state.tag;
	    keyNode = state.result;
	    skipSeparationSpace(state, true, nodeIndent);

	    ch = state.input.charCodeAt(state.position);

	    if ((isExplicitPair || state.line === _line) && ch === 0x3A/* : */) {
	      isPair = true;
	      ch = state.input.charCodeAt(++state.position);
	      skipSeparationSpace(state, true, nodeIndent);
	      composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
	      valueNode = state.result;
	    }

	    if (isMapping) {
	      storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode);
	    } else if (isPair) {
	      _result.push(storeMappingPair(state, null, overridableKeys, keyTag, keyNode, valueNode));
	    } else {
	      _result.push(keyNode);
	    }

	    skipSeparationSpace(state, true, nodeIndent);

	    ch = state.input.charCodeAt(state.position);

	    if (ch === 0x2C/* , */) {
	      readNext = true;
	      ch = state.input.charCodeAt(++state.position);
	    } else {
	      readNext = false;
	    }
	  }

	  throwError(state, 'unexpected end of the stream within a flow collection');
	}

	function readBlockScalar(state, nodeIndent) {
	  var captureStart,
	      folding,
	      chomping       = CHOMPING_CLIP,
	      didReadContent = false,
	      detectedIndent = false,
	      textIndent     = nodeIndent,
	      emptyLines     = 0,
	      atMoreIndented = false,
	      tmp,
	      ch;

	  ch = state.input.charCodeAt(state.position);

	  if (ch === 0x7C/* | */) {
	    folding = false;
	  } else if (ch === 0x3E/* > */) {
	    folding = true;
	  } else {
	    return false;
	  }

	  state.kind = 'scalar';
	  state.result = '';

	  while (ch !== 0) {
	    ch = state.input.charCodeAt(++state.position);

	    if (ch === 0x2B/* + */ || ch === 0x2D/* - */) {
	      if (CHOMPING_CLIP === chomping) {
	        chomping = (ch === 0x2B/* + */) ? CHOMPING_KEEP : CHOMPING_STRIP;
	      } else {
	        throwError(state, 'repeat of a chomping mode identifier');
	      }

	    } else if ((tmp = fromDecimalCode(ch)) >= 0) {
	      if (tmp === 0) {
	        throwError(state, 'bad explicit indentation width of a block scalar; it cannot be less than one');
	      } else if (!detectedIndent) {
	        textIndent = nodeIndent + tmp - 1;
	        detectedIndent = true;
	      } else {
	        throwError(state, 'repeat of an indentation width identifier');
	      }

	    } else {
	      break;
	    }
	  }

	  if (is_WHITE_SPACE(ch)) {
	    do { ch = state.input.charCodeAt(++state.position); }
	    while (is_WHITE_SPACE(ch));

	    if (ch === 0x23/* # */) {
	      do { ch = state.input.charCodeAt(++state.position); }
	      while (!is_EOL(ch) && (ch !== 0));
	    }
	  }

	  while (ch !== 0) {
	    readLineBreak(state);
	    state.lineIndent = 0;

	    ch = state.input.charCodeAt(state.position);

	    while ((!detectedIndent || state.lineIndent < textIndent) &&
	           (ch === 0x20/* Space */)) {
	      state.lineIndent++;
	      ch = state.input.charCodeAt(++state.position);
	    }

	    if (!detectedIndent && state.lineIndent > textIndent) {
	      textIndent = state.lineIndent;
	    }

	    if (is_EOL(ch)) {
	      emptyLines++;
	      continue;
	    }

	    // End of the scalar.
	    if (state.lineIndent < textIndent) {

	      // Perform the chomping.
	      if (chomping === CHOMPING_KEEP) {
	        state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);
	      } else if (chomping === CHOMPING_CLIP) {
	        if (didReadContent) { // i.e. only if the scalar is not empty.
	          state.result += '\n';
	        }
	      }

	      // Break this `while` cycle and go to the funciton's epilogue.
	      break;
	    }

	    // Folded style: use fancy rules to handle line breaks.
	    if (folding) {

	      // Lines starting with white space characters (more-indented lines) are not folded.
	      if (is_WHITE_SPACE(ch)) {
	        atMoreIndented = true;
	        // except for the first content line (cf. Example 8.1)
	        state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);

	      // End of more-indented block.
	      } else if (atMoreIndented) {
	        atMoreIndented = false;
	        state.result += common.repeat('\n', emptyLines + 1);

	      // Just one line break - perceive as the same line.
	      } else if (emptyLines === 0) {
	        if (didReadContent) { // i.e. only if we have already read some scalar content.
	          state.result += ' ';
	        }

	      // Several line breaks - perceive as different lines.
	      } else {
	        state.result += common.repeat('\n', emptyLines);
	      }

	    // Literal style: just add exact number of line breaks between content lines.
	    } else {
	      // Keep all line breaks except the header line break.
	      state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);
	    }

	    didReadContent = true;
	    detectedIndent = true;
	    emptyLines = 0;
	    captureStart = state.position;

	    while (!is_EOL(ch) && (ch !== 0)) {
	      ch = state.input.charCodeAt(++state.position);
	    }

	    captureSegment(state, captureStart, state.position, false);
	  }

	  return true;
	}

	function readBlockSequence(state, nodeIndent) {
	  var _line,
	      _tag      = state.tag,
	      _anchor   = state.anchor,
	      _result   = [],
	      following,
	      detected  = false,
	      ch;

	  if (state.anchor !== null) {
	    state.anchorMap[state.anchor] = _result;
	  }

	  ch = state.input.charCodeAt(state.position);

	  while (ch !== 0) {

	    if (ch !== 0x2D/* - */) {
	      break;
	    }

	    following = state.input.charCodeAt(state.position + 1);

	    if (!is_WS_OR_EOL(following)) {
	      break;
	    }

	    detected = true;
	    state.position++;

	    if (skipSeparationSpace(state, true, -1)) {
	      if (state.lineIndent <= nodeIndent) {
	        _result.push(null);
	        ch = state.input.charCodeAt(state.position);
	        continue;
	      }
	    }

	    _line = state.line;
	    composeNode(state, nodeIndent, CONTEXT_BLOCK_IN, false, true);
	    _result.push(state.result);
	    skipSeparationSpace(state, true, -1);

	    ch = state.input.charCodeAt(state.position);

	    if ((state.line === _line || state.lineIndent > nodeIndent) && (ch !== 0)) {
	      throwError(state, 'bad indentation of a sequence entry');
	    } else if (state.lineIndent < nodeIndent) {
	      break;
	    }
	  }

	  if (detected) {
	    state.tag = _tag;
	    state.anchor = _anchor;
	    state.kind = 'sequence';
	    state.result = _result;
	    return true;
	  }
	  return false;
	}

	function readBlockMapping(state, nodeIndent, flowIndent) {
	  var following,
	      allowCompact,
	      _line,
	      _pos,
	      _tag          = state.tag,
	      _anchor       = state.anchor,
	      _result       = {},
	      overridableKeys = {},
	      keyTag        = null,
	      keyNode       = null,
	      valueNode     = null,
	      atExplicitKey = false,
	      detected      = false,
	      ch;

	  if (state.anchor !== null) {
	    state.anchorMap[state.anchor] = _result;
	  }

	  ch = state.input.charCodeAt(state.position);

	  while (ch !== 0) {
	    following = state.input.charCodeAt(state.position + 1);
	    _line = state.line; // Save the current line.
	    _pos = state.position;

	    //
	    // Explicit notation case. There are two separate blocks:
	    // first for the key (denoted by "?") and second for the value (denoted by ":")
	    //
	    if ((ch === 0x3F/* ? */ || ch === 0x3A/* : */) && is_WS_OR_EOL(following)) {

	      if (ch === 0x3F/* ? */) {
	        if (atExplicitKey) {
	          storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null);
	          keyTag = keyNode = valueNode = null;
	        }

	        detected = true;
	        atExplicitKey = true;
	        allowCompact = true;

	      } else if (atExplicitKey) {
	        // i.e. 0x3A/* : */ === character after the explicit key.
	        atExplicitKey = false;
	        allowCompact = true;

	      } else {
	        throwError(state, 'incomplete explicit mapping pair; a key node is missed');
	      }

	      state.position += 1;
	      ch = following;

	    //
	    // Implicit notation case. Flow-style node as the key first, then ":", and the value.
	    //
	    } else if (composeNode(state, flowIndent, CONTEXT_FLOW_OUT, false, true)) {

	      if (state.line === _line) {
	        ch = state.input.charCodeAt(state.position);

	        while (is_WHITE_SPACE(ch)) {
	          ch = state.input.charCodeAt(++state.position);
	        }

	        if (ch === 0x3A/* : */) {
	          ch = state.input.charCodeAt(++state.position);

	          if (!is_WS_OR_EOL(ch)) {
	            throwError(state, 'a whitespace character is expected after the key-value separator within a block mapping');
	          }

	          if (atExplicitKey) {
	            storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null);
	            keyTag = keyNode = valueNode = null;
	          }

	          detected = true;
	          atExplicitKey = false;
	          allowCompact = false;
	          keyTag = state.tag;
	          keyNode = state.result;

	        } else if (detected) {
	          throwError(state, 'can not read an implicit mapping pair; a colon is missed');

	        } else {
	          state.tag = _tag;
	          state.anchor = _anchor;
	          return true; // Keep the result of `composeNode`.
	        }

	      } else if (detected) {
	        throwError(state, 'can not read a block mapping entry; a multiline key may not be an implicit key');

	      } else {
	        state.tag = _tag;
	        state.anchor = _anchor;
	        return true; // Keep the result of `composeNode`.
	      }

	    } else {
	      break; // Reading is done. Go to the epilogue.
	    }

	    //
	    // Common reading code for both explicit and implicit notations.
	    //
	    if (state.line === _line || state.lineIndent > nodeIndent) {
	      if (composeNode(state, nodeIndent, CONTEXT_BLOCK_OUT, true, allowCompact)) {
	        if (atExplicitKey) {
	          keyNode = state.result;
	        } else {
	          valueNode = state.result;
	        }
	      }

	      if (!atExplicitKey) {
	        storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _line, _pos);
	        keyTag = keyNode = valueNode = null;
	      }

	      skipSeparationSpace(state, true, -1);
	      ch = state.input.charCodeAt(state.position);
	    }

	    if (state.lineIndent > nodeIndent && (ch !== 0)) {
	      throwError(state, 'bad indentation of a mapping entry');
	    } else if (state.lineIndent < nodeIndent) {
	      break;
	    }
	  }

	  //
	  // Epilogue.
	  //

	  // Special case: last mapping's node contains only the key in explicit notation.
	  if (atExplicitKey) {
	    storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null);
	  }

	  // Expose the resulting mapping.
	  if (detected) {
	    state.tag = _tag;
	    state.anchor = _anchor;
	    state.kind = 'mapping';
	    state.result = _result;
	  }

	  return detected;
	}

	function readTagProperty(state) {
	  var _position,
	      isVerbatim = false,
	      isNamed    = false,
	      tagHandle,
	      tagName,
	      ch;

	  ch = state.input.charCodeAt(state.position);

	  if (ch !== 0x21/* ! */) return false;

	  if (state.tag !== null) {
	    throwError(state, 'duplication of a tag property');
	  }

	  ch = state.input.charCodeAt(++state.position);

	  if (ch === 0x3C/* < */) {
	    isVerbatim = true;
	    ch = state.input.charCodeAt(++state.position);

	  } else if (ch === 0x21/* ! */) {
	    isNamed = true;
	    tagHandle = '!!';
	    ch = state.input.charCodeAt(++state.position);

	  } else {
	    tagHandle = '!';
	  }

	  _position = state.position;

	  if (isVerbatim) {
	    do { ch = state.input.charCodeAt(++state.position); }
	    while (ch !== 0 && ch !== 0x3E/* > */);

	    if (state.position < state.length) {
	      tagName = state.input.slice(_position, state.position);
	      ch = state.input.charCodeAt(++state.position);
	    } else {
	      throwError(state, 'unexpected end of the stream within a verbatim tag');
	    }
	  } else {
	    while (ch !== 0 && !is_WS_OR_EOL(ch)) {

	      if (ch === 0x21/* ! */) {
	        if (!isNamed) {
	          tagHandle = state.input.slice(_position - 1, state.position + 1);

	          if (!PATTERN_TAG_HANDLE.test(tagHandle)) {
	            throwError(state, 'named tag handle cannot contain such characters');
	          }

	          isNamed = true;
	          _position = state.position + 1;
	        } else {
	          throwError(state, 'tag suffix cannot contain exclamation marks');
	        }
	      }

	      ch = state.input.charCodeAt(++state.position);
	    }

	    tagName = state.input.slice(_position, state.position);

	    if (PATTERN_FLOW_INDICATORS.test(tagName)) {
	      throwError(state, 'tag suffix cannot contain flow indicator characters');
	    }
	  }

	  if (tagName && !PATTERN_TAG_URI.test(tagName)) {
	    throwError(state, 'tag name cannot contain such characters: ' + tagName);
	  }

	  if (isVerbatim) {
	    state.tag = tagName;

	  } else if (_hasOwnProperty.call(state.tagMap, tagHandle)) {
	    state.tag = state.tagMap[tagHandle] + tagName;

	  } else if (tagHandle === '!') {
	    state.tag = '!' + tagName;

	  } else if (tagHandle === '!!') {
	    state.tag = 'tag:yaml.org,2002:' + tagName;

	  } else {
	    throwError(state, 'undeclared tag handle "' + tagHandle + '"');
	  }

	  return true;
	}

	function readAnchorProperty(state) {
	  var _position,
	      ch;

	  ch = state.input.charCodeAt(state.position);

	  if (ch !== 0x26/* & */) return false;

	  if (state.anchor !== null) {
	    throwError(state, 'duplication of an anchor property');
	  }

	  ch = state.input.charCodeAt(++state.position);
	  _position = state.position;

	  while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
	    ch = state.input.charCodeAt(++state.position);
	  }

	  if (state.position === _position) {
	    throwError(state, 'name of an anchor node must contain at least one character');
	  }

	  state.anchor = state.input.slice(_position, state.position);
	  return true;
	}

	function readAlias(state) {
	  var _position, alias,
	      ch;

	  ch = state.input.charCodeAt(state.position);

	  if (ch !== 0x2A/* * */) return false;

	  ch = state.input.charCodeAt(++state.position);
	  _position = state.position;

	  while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
	    ch = state.input.charCodeAt(++state.position);
	  }

	  if (state.position === _position) {
	    throwError(state, 'name of an alias node must contain at least one character');
	  }

	  alias = state.input.slice(_position, state.position);

	  if (!state.anchorMap.hasOwnProperty(alias)) {
	    throwError(state, 'unidentified alias "' + alias + '"');
	  }

	  state.result = state.anchorMap[alias];
	  skipSeparationSpace(state, true, -1);
	  return true;
	}

	function composeNode(state, parentIndent, nodeContext, allowToSeek, allowCompact) {
	  var allowBlockStyles,
	      allowBlockScalars,
	      allowBlockCollections,
	      indentStatus = 1, // 1: this>parent, 0: this=parent, -1: this<parent
	      atNewLine  = false,
	      hasContent = false,
	      typeIndex,
	      typeQuantity,
	      type,
	      flowIndent,
	      blockIndent;

	  if (state.listener !== null) {
	    state.listener('open', state);
	  }

	  state.tag    = null;
	  state.anchor = null;
	  state.kind   = null;
	  state.result = null;

	  allowBlockStyles = allowBlockScalars = allowBlockCollections =
	    CONTEXT_BLOCK_OUT === nodeContext ||
	    CONTEXT_BLOCK_IN  === nodeContext;

	  if (allowToSeek) {
	    if (skipSeparationSpace(state, true, -1)) {
	      atNewLine = true;

	      if (state.lineIndent > parentIndent) {
	        indentStatus = 1;
	      } else if (state.lineIndent === parentIndent) {
	        indentStatus = 0;
	      } else if (state.lineIndent < parentIndent) {
	        indentStatus = -1;
	      }
	    }
	  }

	  if (indentStatus === 1) {
	    while (readTagProperty(state) || readAnchorProperty(state)) {
	      if (skipSeparationSpace(state, true, -1)) {
	        atNewLine = true;
	        allowBlockCollections = allowBlockStyles;

	        if (state.lineIndent > parentIndent) {
	          indentStatus = 1;
	        } else if (state.lineIndent === parentIndent) {
	          indentStatus = 0;
	        } else if (state.lineIndent < parentIndent) {
	          indentStatus = -1;
	        }
	      } else {
	        allowBlockCollections = false;
	      }
	    }
	  }

	  if (allowBlockCollections) {
	    allowBlockCollections = atNewLine || allowCompact;
	  }

	  if (indentStatus === 1 || CONTEXT_BLOCK_OUT === nodeContext) {
	    if (CONTEXT_FLOW_IN === nodeContext || CONTEXT_FLOW_OUT === nodeContext) {
	      flowIndent = parentIndent;
	    } else {
	      flowIndent = parentIndent + 1;
	    }

	    blockIndent = state.position - state.lineStart;

	    if (indentStatus === 1) {
	      if (allowBlockCollections &&
	          (readBlockSequence(state, blockIndent) ||
	           readBlockMapping(state, blockIndent, flowIndent)) ||
	          readFlowCollection(state, flowIndent)) {
	        hasContent = true;
	      } else {
	        if ((allowBlockScalars && readBlockScalar(state, flowIndent)) ||
	            readSingleQuotedScalar(state, flowIndent) ||
	            readDoubleQuotedScalar(state, flowIndent)) {
	          hasContent = true;

	        } else if (readAlias(state)) {
	          hasContent = true;

	          if (state.tag !== null || state.anchor !== null) {
	            throwError(state, 'alias node should not have any properties');
	          }

	        } else if (readPlainScalar(state, flowIndent, CONTEXT_FLOW_IN === nodeContext)) {
	          hasContent = true;

	          if (state.tag === null) {
	            state.tag = '?';
	          }
	        }

	        if (state.anchor !== null) {
	          state.anchorMap[state.anchor] = state.result;
	        }
	      }
	    } else if (indentStatus === 0) {
	      // Special case: block sequences are allowed to have same indentation level as the parent.
	      // http://www.yaml.org/spec/1.2/spec.html#id2799784
	      hasContent = allowBlockCollections && readBlockSequence(state, blockIndent);
	    }
	  }

	  if (state.tag !== null && state.tag !== '!') {
	    if (state.tag === '?') {
	      for (typeIndex = 0, typeQuantity = state.implicitTypes.length;
	           typeIndex < typeQuantity;
	           typeIndex += 1) {
	        type = state.implicitTypes[typeIndex];

	        // Implicit resolving is not allowed for non-scalar types, and '?'
	        // non-specific tag is only assigned to plain scalars. So, it isn't
	        // needed to check for 'kind' conformity.

	        if (type.resolve(state.result)) { // `state.result` updated in resolver if matched
	          state.result = type.construct(state.result);
	          state.tag = type.tag;
	          if (state.anchor !== null) {
	            state.anchorMap[state.anchor] = state.result;
	          }
	          break;
	        }
	      }
	    } else if (_hasOwnProperty.call(state.typeMap[state.kind || 'fallback'], state.tag)) {
	      type = state.typeMap[state.kind || 'fallback'][state.tag];

	      if (state.result !== null && type.kind !== state.kind) {
	        throwError(state, 'unacceptable node kind for !<' + state.tag + '> tag; it should be "' + type.kind + '", not "' + state.kind + '"');
	      }

	      if (!type.resolve(state.result)) { // `state.result` updated in resolver if matched
	        throwError(state, 'cannot resolve a node with !<' + state.tag + '> explicit tag');
	      } else {
	        state.result = type.construct(state.result);
	        if (state.anchor !== null) {
	          state.anchorMap[state.anchor] = state.result;
	        }
	      }
	    } else {
	      throwError(state, 'unknown tag !<' + state.tag + '>');
	    }
	  }

	  if (state.listener !== null) {
	    state.listener('close', state);
	  }
	  return state.tag !== null ||  state.anchor !== null || hasContent;
	}

	function readDocument(state) {
	  var documentStart = state.position,
	      _position,
	      directiveName,
	      directiveArgs,
	      hasDirectives = false,
	      ch;

	  state.version = null;
	  state.checkLineBreaks = state.legacy;
	  state.tagMap = {};
	  state.anchorMap = {};

	  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
	    skipSeparationSpace(state, true, -1);

	    ch = state.input.charCodeAt(state.position);

	    if (state.lineIndent > 0 || ch !== 0x25/* % */) {
	      break;
	    }

	    hasDirectives = true;
	    ch = state.input.charCodeAt(++state.position);
	    _position = state.position;

	    while (ch !== 0 && !is_WS_OR_EOL(ch)) {
	      ch = state.input.charCodeAt(++state.position);
	    }

	    directiveName = state.input.slice(_position, state.position);
	    directiveArgs = [];

	    if (directiveName.length < 1) {
	      throwError(state, 'directive name must not be less than one character in length');
	    }

	    while (ch !== 0) {
	      while (is_WHITE_SPACE(ch)) {
	        ch = state.input.charCodeAt(++state.position);
	      }

	      if (ch === 0x23/* # */) {
	        do { ch = state.input.charCodeAt(++state.position); }
	        while (ch !== 0 && !is_EOL(ch));
	        break;
	      }

	      if (is_EOL(ch)) break;

	      _position = state.position;

	      while (ch !== 0 && !is_WS_OR_EOL(ch)) {
	        ch = state.input.charCodeAt(++state.position);
	      }

	      directiveArgs.push(state.input.slice(_position, state.position));
	    }

	    if (ch !== 0) readLineBreak(state);

	    if (_hasOwnProperty.call(directiveHandlers, directiveName)) {
	      directiveHandlers[directiveName](state, directiveName, directiveArgs);
	    } else {
	      throwWarning(state, 'unknown document directive "' + directiveName + '"');
	    }
	  }

	  skipSeparationSpace(state, true, -1);

	  if (state.lineIndent === 0 &&
	      state.input.charCodeAt(state.position)     === 0x2D/* - */ &&
	      state.input.charCodeAt(state.position + 1) === 0x2D/* - */ &&
	      state.input.charCodeAt(state.position + 2) === 0x2D/* - */) {
	    state.position += 3;
	    skipSeparationSpace(state, true, -1);

	  } else if (hasDirectives) {
	    throwError(state, 'directives end mark is expected');
	  }

	  composeNode(state, state.lineIndent - 1, CONTEXT_BLOCK_OUT, false, true);
	  skipSeparationSpace(state, true, -1);

	  if (state.checkLineBreaks &&
	      PATTERN_NON_ASCII_LINE_BREAKS.test(state.input.slice(documentStart, state.position))) {
	    throwWarning(state, 'non-ASCII line breaks are interpreted as content');
	  }

	  state.documents.push(state.result);

	  if (state.position === state.lineStart && testDocumentSeparator(state)) {

	    if (state.input.charCodeAt(state.position) === 0x2E/* . */) {
	      state.position += 3;
	      skipSeparationSpace(state, true, -1);
	    }
	    return;
	  }

	  if (state.position < (state.length - 1)) {
	    throwError(state, 'end of the stream or a document separator is expected');
	  } else {
	    return;
	  }
	}


	function loadDocuments(input, options) {
	  input = String(input);
	  options = options || {};

	  if (input.length !== 0) {

	    // Add tailing `\n` if not exists
	    if (input.charCodeAt(input.length - 1) !== 0x0A/* LF */ &&
	        input.charCodeAt(input.length - 1) !== 0x0D/* CR */) {
	      input += '\n';
	    }

	    // Strip BOM
	    if (input.charCodeAt(0) === 0xFEFF) {
	      input = input.slice(1);
	    }
	  }

	  var state = new State(input, options);

	  // Use 0 as string terminator. That significantly simplifies bounds check.
	  state.input += '\0';

	  while (state.input.charCodeAt(state.position) === 0x20/* Space */) {
	    state.lineIndent += 1;
	    state.position += 1;
	  }

	  while (state.position < (state.length - 1)) {
	    readDocument(state);
	  }

	  return state.documents;
	}


	function loadAll(input, iterator, options) {
	  var documents = loadDocuments(input, options), index, length;

	  for (index = 0, length = documents.length; index < length; index += 1) {
	    iterator(documents[index]);
	  }
	}


	function load(input, options) {
	  var documents = loadDocuments(input, options);

	  if (documents.length === 0) {
	    /*eslint-disable no-undefined*/
	    return undefined;
	  } else if (documents.length === 1) {
	    return documents[0];
	  }
	  throw new YAMLException('expected a single document in the stream, but found more');
	}


	function safeLoadAll(input, output, options) {
	  loadAll(input, output, common.extend({ schema: DEFAULT_SAFE_SCHEMA }, options));
	}


	function safeLoad(input, options) {
	  return load(input, common.extend({ schema: DEFAULT_SAFE_SCHEMA }, options));
	}


	module.exports.loadAll     = loadAll;
	module.exports.load        = load;
	module.exports.safeLoadAll = safeLoadAll;
	module.exports.safeLoad    = safeLoad;


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';


	var common = __webpack_require__(20);


	function Mark(name, buffer, position, line, column) {
	  this.name     = name;
	  this.buffer   = buffer;
	  this.position = position;
	  this.line     = line;
	  this.column   = column;
	}


	Mark.prototype.getSnippet = function getSnippet(indent, maxLength) {
	  var head, start, tail, end, snippet;

	  if (!this.buffer) return null;

	  indent = indent || 4;
	  maxLength = maxLength || 75;

	  head = '';
	  start = this.position;

	  while (start > 0 && '\x00\r\n\x85\u2028\u2029'.indexOf(this.buffer.charAt(start - 1)) === -1) {
	    start -= 1;
	    if (this.position - start > (maxLength / 2 - 1)) {
	      head = ' ... ';
	      start += 5;
	      break;
	    }
	  }

	  tail = '';
	  end = this.position;

	  while (end < this.buffer.length && '\x00\r\n\x85\u2028\u2029'.indexOf(this.buffer.charAt(end)) === -1) {
	    end += 1;
	    if (end - this.position > (maxLength / 2 - 1)) {
	      tail = ' ... ';
	      end -= 5;
	      break;
	    }
	  }

	  snippet = this.buffer.slice(start, end);

	  return common.repeat(' ', indent) + head + snippet + tail + '\n' +
	         common.repeat(' ', indent + this.position - start + head.length) + '^';
	};


	Mark.prototype.toString = function toString(compact) {
	  var snippet, where = '';

	  if (this.name) {
	    where += 'in "' + this.name + '" ';
	  }

	  where += 'at line ' + (this.line + 1) + ', column ' + (this.column + 1);

	  if (!compact) {
	    snippet = this.getSnippet();

	    if (snippet) {
	      where += ':\n' + snippet;
	    }
	  }

	  return where;
	};


	module.exports = Mark;


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

	var require;'use strict';

	/*eslint-disable no-bitwise*/

	var NodeBuffer;

	try {
	  // A trick for browserified version, to not include `Buffer` shim
	  var _require = require;
	  NodeBuffer = __webpack_require__(44).Buffer;
	} catch (__) {}

	var Type       = __webpack_require__(1);


	// [ 64, 65, 66 ] -> [ padding, CR, LF ]
	var BASE64_MAP = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r';


	function resolveYamlBinary(data) {
	  if (data === null) return false;

	  var code, idx, bitlen = 0, max = data.length, map = BASE64_MAP;

	  // Convert one by one.
	  for (idx = 0; idx < max; idx++) {
	    code = map.indexOf(data.charAt(idx));

	    // Skip CR/LF
	    if (code > 64) continue;

	    // Fail on illegal characters
	    if (code < 0) return false;

	    bitlen += 6;
	  }

	  // If there are any bits left, source was corrupted
	  return (bitlen % 8) === 0;
	}

	function constructYamlBinary(data) {
	  var idx, tailbits,
	      input = data.replace(/[\r\n=]/g, ''), // remove CR/LF & padding to simplify scan
	      max = input.length,
	      map = BASE64_MAP,
	      bits = 0,
	      result = [];

	  // Collect by 6*4 bits (3 bytes)

	  for (idx = 0; idx < max; idx++) {
	    if ((idx % 4 === 0) && idx) {
	      result.push((bits >> 16) & 0xFF);
	      result.push((bits >> 8) & 0xFF);
	      result.push(bits & 0xFF);
	    }

	    bits = (bits << 6) | map.indexOf(input.charAt(idx));
	  }

	  // Dump tail

	  tailbits = (max % 4) * 6;

	  if (tailbits === 0) {
	    result.push((bits >> 16) & 0xFF);
	    result.push((bits >> 8) & 0xFF);
	    result.push(bits & 0xFF);
	  } else if (tailbits === 18) {
	    result.push((bits >> 10) & 0xFF);
	    result.push((bits >> 2) & 0xFF);
	  } else if (tailbits === 12) {
	    result.push((bits >> 4) & 0xFF);
	  }

	  // Wrap into Buffer for NodeJS and leave Array for browser
	  if (NodeBuffer) {
	    // Support node 6.+ Buffer API when available
	    return NodeBuffer.from ? NodeBuffer.from(result) : new NodeBuffer(result);
	  }

	  return result;
	}

	function representYamlBinary(object /*, style*/) {
	  var result = '', bits = 0, idx, tail,
	      max = object.length,
	      map = BASE64_MAP;

	  // Convert every three bytes to 4 ASCII characters.

	  for (idx = 0; idx < max; idx++) {
	    if ((idx % 3 === 0) && idx) {
	      result += map[(bits >> 18) & 0x3F];
	      result += map[(bits >> 12) & 0x3F];
	      result += map[(bits >> 6) & 0x3F];
	      result += map[bits & 0x3F];
	    }

	    bits = (bits << 8) + object[idx];
	  }

	  // Dump tail

	  tail = max % 3;

	  if (tail === 0) {
	    result += map[(bits >> 18) & 0x3F];
	    result += map[(bits >> 12) & 0x3F];
	    result += map[(bits >> 6) & 0x3F];
	    result += map[bits & 0x3F];
	  } else if (tail === 2) {
	    result += map[(bits >> 10) & 0x3F];
	    result += map[(bits >> 4) & 0x3F];
	    result += map[(bits << 2) & 0x3F];
	    result += map[64];
	  } else if (tail === 1) {
	    result += map[(bits >> 2) & 0x3F];
	    result += map[(bits << 4) & 0x3F];
	    result += map[64];
	    result += map[64];
	  }

	  return result;
	}

	function isBinary(object) {
	  return NodeBuffer && NodeBuffer.isBuffer(object);
	}

	module.exports = new Type('tag:yaml.org,2002:binary', {
	  kind: 'scalar',
	  resolve: resolveYamlBinary,
	  construct: constructYamlBinary,
	  predicate: isBinary,
	  represent: representYamlBinary
	});


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Type = __webpack_require__(1);

	function resolveYamlBoolean(data) {
	  if (data === null) return false;

	  var max = data.length;

	  return (max === 4 && (data === 'true' || data === 'True' || data === 'TRUE')) ||
	         (max === 5 && (data === 'false' || data === 'False' || data === 'FALSE'));
	}

	function constructYamlBoolean(data) {
	  return data === 'true' ||
	         data === 'True' ||
	         data === 'TRUE';
	}

	function isBoolean(object) {
	  return Object.prototype.toString.call(object) === '[object Boolean]';
	}

	module.exports = new Type('tag:yaml.org,2002:bool', {
	  kind: 'scalar',
	  resolve: resolveYamlBoolean,
	  construct: constructYamlBoolean,
	  predicate: isBoolean,
	  represent: {
	    lowercase: function (object) { return object ? 'true' : 'false'; },
	    uppercase: function (object) { return object ? 'TRUE' : 'FALSE'; },
	    camelcase: function (object) { return object ? 'True' : 'False'; }
	  },
	  defaultStyle: 'lowercase'
	});


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var common = __webpack_require__(20);
	var Type   = __webpack_require__(1);

	var YAML_FLOAT_PATTERN = new RegExp(
	  // 2.5e4, 2.5 and integers
	  '^(?:[-+]?(?:0|[1-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?' +
	  // .2e4, .2
	  // special case, seems not from spec
	  '|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?' +
	  // 20:59
	  '|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*' +
	  // .inf
	  '|[-+]?\\.(?:inf|Inf|INF)' +
	  // .nan
	  '|\\.(?:nan|NaN|NAN))$');

	function resolveYamlFloat(data) {
	  if (data === null) return false;

	  if (!YAML_FLOAT_PATTERN.test(data) ||
	      // Quick hack to not allow integers end with `_`
	      // Probably should update regexp & check speed
	      data[data.length - 1] === '_') {
	    return false;
	  }

	  return true;
	}

	function constructYamlFloat(data) {
	  var value, sign, base, digits;

	  value  = data.replace(/_/g, '').toLowerCase();
	  sign   = value[0] === '-' ? -1 : 1;
	  digits = [];

	  if ('+-'.indexOf(value[0]) >= 0) {
	    value = value.slice(1);
	  }

	  if (value === '.inf') {
	    return (sign === 1) ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;

	  } else if (value === '.nan') {
	    return NaN;

	  } else if (value.indexOf(':') >= 0) {
	    value.split(':').forEach(function (v) {
	      digits.unshift(parseFloat(v, 10));
	    });

	    value = 0.0;
	    base = 1;

	    digits.forEach(function (d) {
	      value += d * base;
	      base *= 60;
	    });

	    return sign * value;

	  }
	  return sign * parseFloat(value, 10);
	}


	var SCIENTIFIC_WITHOUT_DOT = /^[-+]?[0-9]+e/;

	function representYamlFloat(object, style) {
	  var res;

	  if (isNaN(object)) {
	    switch (style) {
	      case 'lowercase': return '.nan';
	      case 'uppercase': return '.NAN';
	      case 'camelcase': return '.NaN';
	    }
	  } else if (Number.POSITIVE_INFINITY === object) {
	    switch (style) {
	      case 'lowercase': return '.inf';
	      case 'uppercase': return '.INF';
	      case 'camelcase': return '.Inf';
	    }
	  } else if (Number.NEGATIVE_INFINITY === object) {
	    switch (style) {
	      case 'lowercase': return '-.inf';
	      case 'uppercase': return '-.INF';
	      case 'camelcase': return '-.Inf';
	    }
	  } else if (common.isNegativeZero(object)) {
	    return '-0.0';
	  }

	  res = object.toString(10);

	  // JS stringifier can build scientific format without dots: 5e-100,
	  // while YAML requres dot: 5.e-100. Fix it with simple hack

	  return SCIENTIFIC_WITHOUT_DOT.test(res) ? res.replace('e', '.e') : res;
	}

	function isFloat(object) {
	  return (Object.prototype.toString.call(object) === '[object Number]') &&
	         (object % 1 !== 0 || common.isNegativeZero(object));
	}

	module.exports = new Type('tag:yaml.org,2002:float', {
	  kind: 'scalar',
	  resolve: resolveYamlFloat,
	  construct: constructYamlFloat,
	  predicate: isFloat,
	  represent: representYamlFloat,
	  defaultStyle: 'lowercase'
	});


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var common = __webpack_require__(20);
	var Type   = __webpack_require__(1);

	function isHexCode(c) {
	  return ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */)) ||
	         ((0x41/* A */ <= c) && (c <= 0x46/* F */)) ||
	         ((0x61/* a */ <= c) && (c <= 0x66/* f */));
	}

	function isOctCode(c) {
	  return ((0x30/* 0 */ <= c) && (c <= 0x37/* 7 */));
	}

	function isDecCode(c) {
	  return ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */));
	}

	function resolveYamlInteger(data) {
	  if (data === null) return false;

	  var max = data.length,
	      index = 0,
	      hasDigits = false,
	      ch;

	  if (!max) return false;

	  ch = data[index];

	  // sign
	  if (ch === '-' || ch === '+') {
	    ch = data[++index];
	  }

	  if (ch === '0') {
	    // 0
	    if (index + 1 === max) return true;
	    ch = data[++index];

	    // base 2, base 8, base 16

	    if (ch === 'b') {
	      // base 2
	      index++;

	      for (; index < max; index++) {
	        ch = data[index];
	        if (ch === '_') continue;
	        if (ch !== '0' && ch !== '1') return false;
	        hasDigits = true;
	      }
	      return hasDigits && ch !== '_';
	    }


	    if (ch === 'x') {
	      // base 16
	      index++;

	      for (; index < max; index++) {
	        ch = data[index];
	        if (ch === '_') continue;
	        if (!isHexCode(data.charCodeAt(index))) return false;
	        hasDigits = true;
	      }
	      return hasDigits && ch !== '_';
	    }

	    // base 8
	    for (; index < max; index++) {
	      ch = data[index];
	      if (ch === '_') continue;
	      if (!isOctCode(data.charCodeAt(index))) return false;
	      hasDigits = true;
	    }
	    return hasDigits && ch !== '_';
	  }

	  // base 10 (except 0) or base 60

	  // value should not start with `_`;
	  if (ch === '_') return false;

	  for (; index < max; index++) {
	    ch = data[index];
	    if (ch === '_') continue;
	    if (ch === ':') break;
	    if (!isDecCode(data.charCodeAt(index))) {
	      return false;
	    }
	    hasDigits = true;
	  }

	  // Should have digits and should not end with `_`
	  if (!hasDigits || ch === '_') return false;

	  // if !base60 - done;
	  if (ch !== ':') return true;

	  // base60 almost not used, no needs to optimize
	  return /^(:[0-5]?[0-9])+$/.test(data.slice(index));
	}

	function constructYamlInteger(data) {
	  var value = data, sign = 1, ch, base, digits = [];

	  if (value.indexOf('_') !== -1) {
	    value = value.replace(/_/g, '');
	  }

	  ch = value[0];

	  if (ch === '-' || ch === '+') {
	    if (ch === '-') sign = -1;
	    value = value.slice(1);
	    ch = value[0];
	  }

	  if (value === '0') return 0;

	  if (ch === '0') {
	    if (value[1] === 'b') return sign * parseInt(value.slice(2), 2);
	    if (value[1] === 'x') return sign * parseInt(value, 16);
	    return sign * parseInt(value, 8);
	  }

	  if (value.indexOf(':') !== -1) {
	    value.split(':').forEach(function (v) {
	      digits.unshift(parseInt(v, 10));
	    });

	    value = 0;
	    base = 1;

	    digits.forEach(function (d) {
	      value += (d * base);
	      base *= 60;
	    });

	    return sign * value;

	  }

	  return sign * parseInt(value, 10);
	}

	function isInteger(object) {
	  return (Object.prototype.toString.call(object)) === '[object Number]' &&
	         (object % 1 === 0 && !common.isNegativeZero(object));
	}

	module.exports = new Type('tag:yaml.org,2002:int', {
	  kind: 'scalar',
	  resolve: resolveYamlInteger,
	  construct: constructYamlInteger,
	  predicate: isInteger,
	  represent: {
	    binary:      function (object) { return '0b' + object.toString(2); },
	    octal:       function (object) { return '0'  + object.toString(8); },
	    decimal:     function (object) { return        object.toString(10); },
	    hexadecimal: function (object) { return '0x' + object.toString(16).toUpperCase(); }
	  },
	  defaultStyle: 'decimal',
	  styleAliases: {
	    binary:      [ 2,  'bin' ],
	    octal:       [ 8,  'oct' ],
	    decimal:     [ 10, 'dec' ],
	    hexadecimal: [ 16, 'hex' ]
	  }
	});


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

	var require;'use strict';

	var esprima;

	// Browserified version does not have esprima
	//
	// 1. For node.js just require module as deps
	// 2. For browser try to require mudule via external AMD system.
	//    If not found - try to fallback to window.esprima. If not
	//    found too - then fail to parse.
	//
	try {
	  // workaround to exclude package from browserify list.
	  var _require = require;
	  esprima = __webpack_require__(177);
	} catch (_) {
	  /*global window */
	  if (typeof window !== 'undefined') esprima = window.esprima;
	}

	var Type = __webpack_require__(1);

	function resolveJavascriptFunction(data) {
	  if (data === null) return false;

	  try {
	    var source = '(' + data + ')',
	        ast    = esprima.parse(source, { range: true });

	    if (ast.type                    !== 'Program'             ||
	        ast.body.length             !== 1                     ||
	        ast.body[0].type            !== 'ExpressionStatement' ||
	        ast.body[0].expression.type !== 'FunctionExpression') {
	      return false;
	    }

	    return true;
	  } catch (err) {
	    return false;
	  }
	}

	function constructJavascriptFunction(data) {
	  /*jslint evil:true*/

	  var source = '(' + data + ')',
	      ast    = esprima.parse(source, { range: true }),
	      params = [],
	      body;

	  if (ast.type                    !== 'Program'             ||
	      ast.body.length             !== 1                     ||
	      ast.body[0].type            !== 'ExpressionStatement' ||
	      ast.body[0].expression.type !== 'FunctionExpression') {
	    throw new Error('Failed to resolve function');
	  }

	  ast.body[0].expression.params.forEach(function (param) {
	    params.push(param.name);
	  });

	  body = ast.body[0].expression.body.range;

	  // Esprima's ranges include the first '{' and the last '}' characters on
	  // function expressions. So cut them out.
	  /*eslint-disable no-new-func*/
	  return new Function(params, source.slice(body[0] + 1, body[1] - 1));
	}

	function representJavascriptFunction(object /*, style*/) {
	  return object.toString();
	}

	function isFunction(object) {
	  return Object.prototype.toString.call(object) === '[object Function]';
	}

	module.exports = new Type('tag:yaml.org,2002:js/function', {
	  kind: 'scalar',
	  resolve: resolveJavascriptFunction,
	  construct: constructJavascriptFunction,
	  predicate: isFunction,
	  represent: representJavascriptFunction
	});


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Type = __webpack_require__(1);

	function resolveJavascriptRegExp(data) {
	  if (data === null) return false;
	  if (data.length === 0) return false;

	  var regexp = data,
	      tail   = /\/([gim]*)$/.exec(data),
	      modifiers = '';

	  // if regexp starts with '/' it can have modifiers and must be properly closed
	  // `/foo/gim` - modifiers tail can be maximum 3 chars
	  if (regexp[0] === '/') {
	    if (tail) modifiers = tail[1];

	    if (modifiers.length > 3) return false;
	    // if expression starts with /, is should be properly terminated
	    if (regexp[regexp.length - modifiers.length - 1] !== '/') return false;
	  }

	  return true;
	}

	function constructJavascriptRegExp(data) {
	  var regexp = data,
	      tail   = /\/([gim]*)$/.exec(data),
	      modifiers = '';

	  // `/foo/gim` - tail can be maximum 4 chars
	  if (regexp[0] === '/') {
	    if (tail) modifiers = tail[1];
	    regexp = regexp.slice(1, regexp.length - modifiers.length - 1);
	  }

	  return new RegExp(regexp, modifiers);
	}

	function representJavascriptRegExp(object /*, style*/) {
	  var result = '/' + object.source + '/';

	  if (object.global) result += 'g';
	  if (object.multiline) result += 'm';
	  if (object.ignoreCase) result += 'i';

	  return result;
	}

	function isRegExp(object) {
	  return Object.prototype.toString.call(object) === '[object RegExp]';
	}

	module.exports = new Type('tag:yaml.org,2002:js/regexp', {
	  kind: 'scalar',
	  resolve: resolveJavascriptRegExp,
	  construct: constructJavascriptRegExp,
	  predicate: isRegExp,
	  represent: representJavascriptRegExp
	});


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Type = __webpack_require__(1);

	function resolveJavascriptUndefined() {
	  return true;
	}

	function constructJavascriptUndefined() {
	  /*eslint-disable no-undefined*/
	  return undefined;
	}

	function representJavascriptUndefined() {
	  return '';
	}

	function isUndefined(object) {
	  return typeof object === 'undefined';
	}

	module.exports = new Type('tag:yaml.org,2002:js/undefined', {
	  kind: 'scalar',
	  resolve: resolveJavascriptUndefined,
	  construct: constructJavascriptUndefined,
	  predicate: isUndefined,
	  represent: representJavascriptUndefined
	});


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Type = __webpack_require__(1);

	module.exports = new Type('tag:yaml.org,2002:map', {
	  kind: 'mapping',
	  construct: function (data) { return data !== null ? data : {}; }
	});


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Type = __webpack_require__(1);

	function resolveYamlMerge(data) {
	  return data === '<<' || data === null;
	}

	module.exports = new Type('tag:yaml.org,2002:merge', {
	  kind: 'scalar',
	  resolve: resolveYamlMerge
	});


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Type = __webpack_require__(1);

	function resolveYamlNull(data) {
	  if (data === null) return true;

	  var max = data.length;

	  return (max === 1 && data === '~') ||
	         (max === 4 && (data === 'null' || data === 'Null' || data === 'NULL'));
	}

	function constructYamlNull() {
	  return null;
	}

	function isNull(object) {
	  return object === null;
	}

	module.exports = new Type('tag:yaml.org,2002:null', {
	  kind: 'scalar',
	  resolve: resolveYamlNull,
	  construct: constructYamlNull,
	  predicate: isNull,
	  represent: {
	    canonical: function () { return '~';    },
	    lowercase: function () { return 'null'; },
	    uppercase: function () { return 'NULL'; },
	    camelcase: function () { return 'Null'; }
	  },
	  defaultStyle: 'lowercase'
	});


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Type = __webpack_require__(1);

	var _hasOwnProperty = Object.prototype.hasOwnProperty;
	var _toString       = Object.prototype.toString;

	function resolveYamlOmap(data) {
	  if (data === null) return true;

	  var objectKeys = [], index, length, pair, pairKey, pairHasKey,
	      object = data;

	  for (index = 0, length = object.length; index < length; index += 1) {
	    pair = object[index];
	    pairHasKey = false;

	    if (_toString.call(pair) !== '[object Object]') return false;

	    for (pairKey in pair) {
	      if (_hasOwnProperty.call(pair, pairKey)) {
	        if (!pairHasKey) pairHasKey = true;
	        else return false;
	      }
	    }

	    if (!pairHasKey) return false;

	    if (objectKeys.indexOf(pairKey) === -1) objectKeys.push(pairKey);
	    else return false;
	  }

	  return true;
	}

	function constructYamlOmap(data) {
	  return data !== null ? data : [];
	}

	module.exports = new Type('tag:yaml.org,2002:omap', {
	  kind: 'sequence',
	  resolve: resolveYamlOmap,
	  construct: constructYamlOmap
	});


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Type = __webpack_require__(1);

	var _toString = Object.prototype.toString;

	function resolveYamlPairs(data) {
	  if (data === null) return true;

	  var index, length, pair, keys, result,
	      object = data;

	  result = new Array(object.length);

	  for (index = 0, length = object.length; index < length; index += 1) {
	    pair = object[index];

	    if (_toString.call(pair) !== '[object Object]') return false;

	    keys = Object.keys(pair);

	    if (keys.length !== 1) return false;

	    result[index] = [ keys[0], pair[keys[0]] ];
	  }

	  return true;
	}

	function constructYamlPairs(data) {
	  if (data === null) return [];

	  var index, length, pair, keys, result,
	      object = data;

	  result = new Array(object.length);

	  for (index = 0, length = object.length; index < length; index += 1) {
	    pair = object[index];

	    keys = Object.keys(pair);

	    result[index] = [ keys[0], pair[keys[0]] ];
	  }

	  return result;
	}

	module.exports = new Type('tag:yaml.org,2002:pairs', {
	  kind: 'sequence',
	  resolve: resolveYamlPairs,
	  construct: constructYamlPairs
	});


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Type = __webpack_require__(1);

	module.exports = new Type('tag:yaml.org,2002:seq', {
	  kind: 'sequence',
	  construct: function (data) { return data !== null ? data : []; }
	});


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Type = __webpack_require__(1);

	var _hasOwnProperty = Object.prototype.hasOwnProperty;

	function resolveYamlSet(data) {
	  if (data === null) return true;

	  var key, object = data;

	  for (key in object) {
	    if (_hasOwnProperty.call(object, key)) {
	      if (object[key] !== null) return false;
	    }
	  }

	  return true;
	}

	function constructYamlSet(data) {
	  return data !== null ? data : {};
	}

	module.exports = new Type('tag:yaml.org,2002:set', {
	  kind: 'mapping',
	  resolve: resolveYamlSet,
	  construct: constructYamlSet
	});


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Type = __webpack_require__(1);

	module.exports = new Type('tag:yaml.org,2002:str', {
	  kind: 'scalar',
	  construct: function (data) { return data !== null ? data : ''; }
	});


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Type = __webpack_require__(1);

	var YAML_DATE_REGEXP = new RegExp(
	  '^([0-9][0-9][0-9][0-9])'          + // [1] year
	  '-([0-9][0-9])'                    + // [2] month
	  '-([0-9][0-9])$');                   // [3] day

	var YAML_TIMESTAMP_REGEXP = new RegExp(
	  '^([0-9][0-9][0-9][0-9])'          + // [1] year
	  '-([0-9][0-9]?)'                   + // [2] month
	  '-([0-9][0-9]?)'                   + // [3] day
	  '(?:[Tt]|[ \\t]+)'                 + // ...
	  '([0-9][0-9]?)'                    + // [4] hour
	  ':([0-9][0-9])'                    + // [5] minute
	  ':([0-9][0-9])'                    + // [6] second
	  '(?:\\.([0-9]*))?'                 + // [7] fraction
	  '(?:[ \\t]*(Z|([-+])([0-9][0-9]?)' + // [8] tz [9] tz_sign [10] tz_hour
	  '(?::([0-9][0-9]))?))?$');           // [11] tz_minute

	function resolveYamlTimestamp(data) {
	  if (data === null) return false;
	  if (YAML_DATE_REGEXP.exec(data) !== null) return true;
	  if (YAML_TIMESTAMP_REGEXP.exec(data) !== null) return true;
	  return false;
	}

	function constructYamlTimestamp(data) {
	  var match, year, month, day, hour, minute, second, fraction = 0,
	      delta = null, tz_hour, tz_minute, date;

	  match = YAML_DATE_REGEXP.exec(data);
	  if (match === null) match = YAML_TIMESTAMP_REGEXP.exec(data);

	  if (match === null) throw new Error('Date resolve error');

	  // match: [1] year [2] month [3] day

	  year = +(match[1]);
	  month = +(match[2]) - 1; // JS month starts with 0
	  day = +(match[3]);

	  if (!match[4]) { // no hour
	    return new Date(Date.UTC(year, month, day));
	  }

	  // match: [4] hour [5] minute [6] second [7] fraction

	  hour = +(match[4]);
	  minute = +(match[5]);
	  second = +(match[6]);

	  if (match[7]) {
	    fraction = match[7].slice(0, 3);
	    while (fraction.length < 3) { // milli-seconds
	      fraction += '0';
	    }
	    fraction = +fraction;
	  }

	  // match: [8] tz [9] tz_sign [10] tz_hour [11] tz_minute

	  if (match[9]) {
	    tz_hour = +(match[10]);
	    tz_minute = +(match[11] || 0);
	    delta = (tz_hour * 60 + tz_minute) * 60000; // delta in mili-seconds
	    if (match[9] === '-') delta = -delta;
	  }

	  date = new Date(Date.UTC(year, month, day, hour, minute, second, fraction));

	  if (delta) date.setTime(date.getTime() - delta);

	  return date;
	}

	function representYamlTimestamp(object /*, style*/) {
	  return object.toISOString();
	}

	module.exports = new Type('tag:yaml.org,2002:timestamp', {
	  kind: 'scalar',
	  resolve: resolveYamlTimestamp,
	  construct: constructYamlTimestamp,
	  instanceOf: Date,
	  represent: representYamlTimestamp
	});


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(16),
	    root = __webpack_require__(6);

	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView');

	module.exports = DataView;


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

	var hashClear = __webpack_require__(249),
	    hashDelete = __webpack_require__(250),
	    hashGet = __webpack_require__(251),
	    hashHas = __webpack_require__(252),
	    hashSet = __webpack_require__(253);

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	module.exports = Hash;


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(16),
	    root = __webpack_require__(6);

	/* Built-in method references that are verified to be native. */
	var Promise = getNative(root, 'Promise');

	module.exports = Promise;


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(16),
	    root = __webpack_require__(6);

	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');

	module.exports = Set;


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(37),
	    stackClear = __webpack_require__(278),
	    stackDelete = __webpack_require__(279),
	    stackGet = __webpack_require__(280),
	    stackHas = __webpack_require__(281),
	    stackSet = __webpack_require__(282);

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  var data = this.__data__ = new ListCache(entries);
	  this.size = data.size;
	}

	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;

	module.exports = Stack;


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(6);

	/** Built-in value references. */
	var Uint8Array = root.Uint8Array;

	module.exports = Uint8Array;


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(16),
	    root = __webpack_require__(6);

	/* Built-in method references that are verified to be native. */
	var WeakMap = getNative(root, 'WeakMap');

	module.exports = WeakMap;


/***/ }),
/* 211 */
/***/ (function(module, exports) {

	/**
	 * Adds the key-value `pair` to `map`.
	 *
	 * @private
	 * @param {Object} map The map to modify.
	 * @param {Array} pair The key-value pair to add.
	 * @returns {Object} Returns `map`.
	 */
	function addMapEntry(map, pair) {
	  // Don't return `map.set` because it's not chainable in IE 11.
	  map.set(pair[0], pair[1]);
	  return map;
	}

	module.exports = addMapEntry;


/***/ }),
/* 212 */
/***/ (function(module, exports) {

	/**
	 * Adds `value` to `set`.
	 *
	 * @private
	 * @param {Object} set The set to modify.
	 * @param {*} value The value to add.
	 * @returns {Object} Returns `set`.
	 */
	function addSetEntry(set, value) {
	  // Don't return `set.add` because it's not chainable in IE 11.
	  set.add(value);
	  return set;
	}

	module.exports = addSetEntry;


/***/ }),
/* 213 */
/***/ (function(module, exports) {

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}

	module.exports = apply;


/***/ }),
/* 214 */
/***/ (function(module, exports) {

	/**
	 * A specialized version of `_.forEach` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array ? array.length : 0;

	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}

	module.exports = arrayEach;


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(230),
	    isArguments = __webpack_require__(104),
	    isArray = __webpack_require__(13),
	    isIndex = __webpack_require__(98);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  // Safari 9 makes `arguments.length` enumerable in strict mode.
	  var result = (isArray(value) || isArguments(value))
	    ? baseTimes(value.length, String)
	    : [];

	  var length = result.length,
	      skipIndexes = !!length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = arrayLikeKeys;


/***/ }),
/* 216 */
/***/ (function(module, exports) {

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array ? array.length : 0,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	module.exports = arrayMap;


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(72),
	    keys = __webpack_require__(43);

	/**
	 * The base implementation of `_.assign` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssign(object, source) {
	  return object && copyObject(source, keys(source), object);
	}

	module.exports = baseAssign;


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(208),
	    arrayEach = __webpack_require__(214),
	    assignValue = __webpack_require__(69),
	    baseAssign = __webpack_require__(217),
	    cloneBuffer = __webpack_require__(233),
	    copyArray = __webpack_require__(240),
	    copySymbols = __webpack_require__(241),
	    getAllKeys = __webpack_require__(246),
	    getTag = __webpack_require__(247),
	    initCloneArray = __webpack_require__(254),
	    initCloneByTag = __webpack_require__(255),
	    initCloneObject = __webpack_require__(256),
	    isArray = __webpack_require__(13),
	    isBuffer = __webpack_require__(290),
	    isObject = __webpack_require__(22),
	    keys = __webpack_require__(43);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values supported by `_.clone`. */
	var cloneableTags = {};
	cloneableTags[argsTag] = cloneableTags[arrayTag] =
	cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
	cloneableTags[boolTag] = cloneableTags[dateTag] =
	cloneableTags[float32Tag] = cloneableTags[float64Tag] =
	cloneableTags[int8Tag] = cloneableTags[int16Tag] =
	cloneableTags[int32Tag] = cloneableTags[mapTag] =
	cloneableTags[numberTag] = cloneableTags[objectTag] =
	cloneableTags[regexpTag] = cloneableTags[setTag] =
	cloneableTags[stringTag] = cloneableTags[symbolTag] =
	cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
	cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
	cloneableTags[errorTag] = cloneableTags[funcTag] =
	cloneableTags[weakMapTag] = false;

	/**
	 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
	 * traversed objects.
	 *
	 * @private
	 * @param {*} value The value to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @param {boolean} [isFull] Specify a clone including symbols.
	 * @param {Function} [customizer] The function to customize cloning.
	 * @param {string} [key] The key of `value`.
	 * @param {Object} [object] The parent object of `value`.
	 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
	 * @returns {*} Returns the cloned value.
	 */
	function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
	  var result;
	  if (customizer) {
	    result = object ? customizer(value, key, object, stack) : customizer(value);
	  }
	  if (result !== undefined) {
	    return result;
	  }
	  if (!isObject(value)) {
	    return value;
	  }
	  var isArr = isArray(value);
	  if (isArr) {
	    result = initCloneArray(value);
	    if (!isDeep) {
	      return copyArray(value, result);
	    }
	  } else {
	    var tag = getTag(value),
	        isFunc = tag == funcTag || tag == genTag;

	    if (isBuffer(value)) {
	      return cloneBuffer(value, isDeep);
	    }
	    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
	      result = initCloneObject(isFunc ? {} : value);
	      if (!isDeep) {
	        return copySymbols(value, baseAssign(result, value));
	      }
	    } else {
	      if (!cloneableTags[tag]) {
	        return object ? value : {};
	      }
	      result = initCloneByTag(value, tag, baseClone, isDeep);
	    }
	  }
	  // Check for circular references and return its corresponding clone.
	  stack || (stack = new Stack);
	  var stacked = stack.get(value);
	  if (stacked) {
	    return stacked;
	  }
	  stack.set(value, result);

	  if (!isArr) {
	    var props = isFull ? getAllKeys(value) : keys(value);
	  }
	  arrayEach(props || value, function(subValue, key) {
	    if (props) {
	      key = subValue;
	      subValue = value[key];
	    }
	    // Recursively populate clone (susceptible to call stack limits).
	    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
	  });
	  return result;
	}

	module.exports = baseClone;


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(22);

	/** Built-in value references. */
	var objectCreate = Object.create;

	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} proto The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	var baseCreate = (function() {
	  function object() {}
	  return function(proto) {
	    if (!isObject(proto)) {
	      return {};
	    }
	    if (objectCreate) {
	      return objectCreate(proto);
	    }
	    object.prototype = prototype;
	    var result = new object;
	    object.prototype = undefined;
	    return result;
	  };
	}());

	module.exports = baseCreate;


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(94),
	    isFlattenable = __webpack_require__(257);

	/**
	 * The base implementation of `_.flatten` with support for restricting flattening.
	 *
	 * @private
	 * @param {Array} array The array to flatten.
	 * @param {number} depth The maximum recursion depth.
	 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
	 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
	 * @param {Array} [result=[]] The initial result value.
	 * @returns {Array} Returns the new flattened array.
	 */
	function baseFlatten(array, depth, predicate, isStrict, result) {
	  var index = -1,
	      length = array.length;

	  predicate || (predicate = isFlattenable);
	  result || (result = []);

	  while (++index < length) {
	    var value = array[index];
	    if (depth > 0 && predicate(value)) {
	      if (depth > 1) {
	        // Recursively flatten arrays (susceptible to call stack limits).
	        baseFlatten(value, depth - 1, predicate, isStrict, result);
	      } else {
	        arrayPush(result, value);
	      }
	    } else if (!isStrict) {
	      result[result.length] = value;
	    }
	  }
	  return result;
	}

	module.exports = baseFlatten;


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(232),
	    isKey = __webpack_require__(259),
	    toKey = __webpack_require__(101);

	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = isKey(path, object) ? [path] : castPath(path);

	  var index = 0,
	      length = path.length;

	  while (object != null && index < length) {
	    object = object[toKey(path[index++])];
	  }
	  return (index && index == length) ? object : undefined;
	}

	module.exports = baseGet;


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(94),
	    isArray = __webpack_require__(13);

	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
	}

	module.exports = baseGetAllKeys;


/***/ }),
/* 223 */
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * The base implementation of `getTag`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  return objectToString.call(value);
	}

	module.exports = baseGetTag;


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(105),
	    isMasked = __webpack_require__(261),
	    isObject = __webpack_require__(22),
	    toSource = __webpack_require__(102);

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	module.exports = baseIsNative;


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

	var isPrototype = __webpack_require__(73),
	    nativeKeys = __webpack_require__(275);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = baseKeys;


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

	var basePickBy = __webpack_require__(227);

	/**
	 * The base implementation of `_.pick` without support for individual
	 * property identifiers.
	 *
	 * @private
	 * @param {Object} object The source object.
	 * @param {string[]} props The property identifiers to pick.
	 * @returns {Object} Returns the new object.
	 */
	function basePick(object, props) {
	  object = Object(object);
	  return basePickBy(object, props, function(value, key) {
	    return key in object;
	  });
	}

	module.exports = basePick;


/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

	var baseAssignValue = __webpack_require__(70);

	/**
	 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The source object.
	 * @param {string[]} props The property identifiers to pick from.
	 * @param {Function} predicate The function invoked per property.
	 * @returns {Object} Returns the new object.
	 */
	function basePickBy(object, props, predicate) {
	  var index = -1,
	      length = props.length,
	      result = {};

	  while (++index < length) {
	    var key = props[index],
	        value = object[key];

	    if (predicate(value, key)) {
	      baseAssignValue(result, key, value);
	    }
	  }
	  return result;
	}

	module.exports = basePickBy;


/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(103),
	    overRest = __webpack_require__(99),
	    setToString = __webpack_require__(100);

	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  return setToString(overRest(func, start, identity), func + '');
	}

	module.exports = baseRest;


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

	var constant = __webpack_require__(286),
	    identity = __webpack_require__(103),
	    nativeDefineProperty = __webpack_require__(274);

	/**
	 * The base implementation of `setToString` without support for hot loop shorting.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var baseSetToString = !nativeDefineProperty ? identity : function(func, string) {
	  return nativeDefineProperty(func, 'toString', {
	    'configurable': true,
	    'enumerable': false,
	    'value': constant(string),
	    'writable': true
	  });
	};

	module.exports = baseSetToString;


/***/ }),
/* 230 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	module.exports = baseTimes;


/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(68),
	    isSymbol = __webpack_require__(76);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;

	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	module.exports = baseToString;


/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(13),
	    stringToPath = __webpack_require__(283);

	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value) {
	  return isArray(value) ? value : stringToPath(value);
	}

	module.exports = castPath;


/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(6);

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined,
	    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

	/**
	 * Creates a clone of  `buffer`.
	 *
	 * @private
	 * @param {Buffer} buffer The buffer to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Buffer} Returns the cloned buffer.
	 */
	function cloneBuffer(buffer, isDeep) {
	  if (isDeep) {
	    return buffer.slice();
	  }
	  var length = buffer.length,
	      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

	  buffer.copy(result);
	  return result;
	}

	module.exports = cloneBuffer;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(77)(module)))

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

	var cloneArrayBuffer = __webpack_require__(71);

	/**
	 * Creates a clone of `dataView`.
	 *
	 * @private
	 * @param {Object} dataView The data view to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned data view.
	 */
	function cloneDataView(dataView, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
	  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
	}

	module.exports = cloneDataView;


/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

	var addMapEntry = __webpack_require__(211),
	    arrayReduce = __webpack_require__(95),
	    mapToArray = __webpack_require__(272);

	/**
	 * Creates a clone of `map`.
	 *
	 * @private
	 * @param {Object} map The map to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned map.
	 */
	function cloneMap(map, isDeep, cloneFunc) {
	  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
	  return arrayReduce(array, addMapEntry, new map.constructor);
	}

	module.exports = cloneMap;


/***/ }),
/* 236 */
/***/ (function(module, exports) {

	/** Used to match `RegExp` flags from their coerced string values. */
	var reFlags = /\w*$/;

	/**
	 * Creates a clone of `regexp`.
	 *
	 * @private
	 * @param {Object} regexp The regexp to clone.
	 * @returns {Object} Returns the cloned regexp.
	 */
	function cloneRegExp(regexp) {
	  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
	  result.lastIndex = regexp.lastIndex;
	  return result;
	}

	module.exports = cloneRegExp;


/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

	var addSetEntry = __webpack_require__(212),
	    arrayReduce = __webpack_require__(95),
	    setToArray = __webpack_require__(276);

	/**
	 * Creates a clone of `set`.
	 *
	 * @private
	 * @param {Object} set The set to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned set.
	 */
	function cloneSet(set, isDeep, cloneFunc) {
	  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
	  return arrayReduce(array, addSetEntry, new set.constructor);
	}

	module.exports = cloneSet;


/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(68);

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

	/**
	 * Creates a clone of the `symbol` object.
	 *
	 * @private
	 * @param {Object} symbol The symbol object to clone.
	 * @returns {Object} Returns the cloned symbol object.
	 */
	function cloneSymbol(symbol) {
	  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
	}

	module.exports = cloneSymbol;


/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

	var cloneArrayBuffer = __webpack_require__(71);

	/**
	 * Creates a clone of `typedArray`.
	 *
	 * @private
	 * @param {Object} typedArray The typed array to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned typed array.
	 */
	function cloneTypedArray(typedArray, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
	  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	}

	module.exports = cloneTypedArray;


/***/ }),
/* 240 */
/***/ (function(module, exports) {

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function copyArray(source, array) {
	  var index = -1,
	      length = source.length;

	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}

	module.exports = copyArray;


/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(72),
	    getSymbols = __webpack_require__(97);

	/**
	 * Copies own symbol properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */
	function copySymbols(source, object) {
	  return copyObject(source, getSymbols(source), object);
	}

	module.exports = copySymbols;


/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(6);

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];

	module.exports = coreJsData;


/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

	var baseRest = __webpack_require__(228),
	    isIterateeCall = __webpack_require__(258);

	/**
	 * Creates a function like `_.assign`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return baseRest(function(object, sources) {
	    var index = -1,
	        length = sources.length,
	        customizer = length > 1 ? sources[length - 1] : undefined,
	        guard = length > 2 ? sources[2] : undefined;

	    customizer = (assigner.length > 3 && typeof customizer == 'function')
	      ? (length--, customizer)
	      : undefined;

	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    object = Object(object);
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, index, customizer);
	      }
	    }
	    return object;
	  });
	}

	module.exports = createAssigner;


/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

	var flatten = __webpack_require__(287),
	    overRest = __webpack_require__(99),
	    setToString = __webpack_require__(100);

	/**
	 * A specialized version of `baseRest` which flattens the rest array.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @returns {Function} Returns the new function.
	 */
	function flatRest(func) {
	  return setToString(overRest(func, undefined, flatten), func + '');
	}

	module.exports = flatRest;


/***/ }),
/* 245 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	module.exports = freeGlobal;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetAllKeys = __webpack_require__(222),
	    getSymbols = __webpack_require__(97),
	    keys = __webpack_require__(43);

	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys(object) {
	  return baseGetAllKeys(object, keys, getSymbols);
	}

	module.exports = getAllKeys;


/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

	var DataView = __webpack_require__(204),
	    Map = __webpack_require__(67),
	    Promise = __webpack_require__(206),
	    Set = __webpack_require__(207),
	    WeakMap = __webpack_require__(210),
	    baseGetTag = __webpack_require__(223),
	    toSource = __webpack_require__(102);

	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag = '[object Set]',
	    weakMapTag = '[object WeakMap]';

	var dataViewTag = '[object DataView]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);

	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;

	// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = objectToString.call(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : undefined;

	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}

	module.exports = getTag;


/***/ }),
/* 248 */
/***/ (function(module, exports) {

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	module.exports = getValue;


/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(40);

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	  this.size = 0;
	}

	module.exports = hashClear;


/***/ }),
/* 250 */
/***/ (function(module, exports) {

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}

	module.exports = hashDelete;


/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(40);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}

	module.exports = hashGet;


/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(40);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
	}

	module.exports = hashHas;


/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(40);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}

	module.exports = hashSet;


/***/ }),
/* 254 */
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Initializes an array clone.
	 *
	 * @private
	 * @param {Array} array The array to clone.
	 * @returns {Array} Returns the initialized clone.
	 */
	function initCloneArray(array) {
	  var length = array.length,
	      result = array.constructor(length);

	  // Add properties assigned by `RegExp#exec`.
	  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
	    result.index = array.index;
	    result.input = array.input;
	  }
	  return result;
	}

	module.exports = initCloneArray;


/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

	var cloneArrayBuffer = __webpack_require__(71),
	    cloneDataView = __webpack_require__(234),
	    cloneMap = __webpack_require__(235),
	    cloneRegExp = __webpack_require__(236),
	    cloneSet = __webpack_require__(237),
	    cloneSymbol = __webpack_require__(238),
	    cloneTypedArray = __webpack_require__(239);

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/**
	 * Initializes an object clone based on its `toStringTag`.
	 *
	 * **Note:** This function only supports cloning values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @param {string} tag The `toStringTag` of the object to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneByTag(object, tag, cloneFunc, isDeep) {
	  var Ctor = object.constructor;
	  switch (tag) {
	    case arrayBufferTag:
	      return cloneArrayBuffer(object);

	    case boolTag:
	    case dateTag:
	      return new Ctor(+object);

	    case dataViewTag:
	      return cloneDataView(object, isDeep);

	    case float32Tag: case float64Tag:
	    case int8Tag: case int16Tag: case int32Tag:
	    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
	      return cloneTypedArray(object, isDeep);

	    case mapTag:
	      return cloneMap(object, isDeep, cloneFunc);

	    case numberTag:
	    case stringTag:
	      return new Ctor(object);

	    case regexpTag:
	      return cloneRegExp(object);

	    case setTag:
	      return cloneSet(object, isDeep, cloneFunc);

	    case symbolTag:
	      return cloneSymbol(object);
	  }
	}

	module.exports = initCloneByTag;


/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

	var baseCreate = __webpack_require__(219),
	    getPrototype = __webpack_require__(96),
	    isPrototype = __webpack_require__(73);

	/**
	 * Initializes an object clone.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneObject(object) {
	  return (typeof object.constructor == 'function' && !isPrototype(object))
	    ? baseCreate(getPrototype(object))
	    : {};
	}

	module.exports = initCloneObject;


/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(68),
	    isArguments = __webpack_require__(104),
	    isArray = __webpack_require__(13);

	/** Built-in value references. */
	var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

	/**
	 * Checks if `value` is a flattenable `arguments` object or array.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
	 */
	function isFlattenable(value) {
	  return isArray(value) || isArguments(value) ||
	    !!(spreadableSymbol && value && value[spreadableSymbol]);
	}

	module.exports = isFlattenable;


/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(75),
	    isArrayLike = __webpack_require__(41),
	    isIndex = __webpack_require__(98),
	    isObject = __webpack_require__(22);

	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	        ? (isArrayLike(object) && isIndex(index, object.length))
	        : (type == 'string' && index in object)
	      ) {
	    return eq(object[index], value);
	  }
	  return false;
	}

	module.exports = isIterateeCall;


/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(13),
	    isSymbol = __webpack_require__(76);

	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;

	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (isArray(value)) {
	    return false;
	  }
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
	      value == null || isSymbol(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	    (object != null && value in Object(object));
	}

	module.exports = isKey;


/***/ }),
/* 260 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	module.exports = isKeyable;


/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

	var coreJsData = __webpack_require__(242);

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	module.exports = isMasked;


/***/ }),
/* 262 */
/***/ (function(module, exports) {

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}

	module.exports = listCacheClear;


/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(38);

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}

	module.exports = listCacheDelete;


/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(38);

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	module.exports = listCacheGet;


/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(38);

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	module.exports = listCacheHas;


/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(38);

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	module.exports = listCacheSet;


/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

	var Hash = __webpack_require__(205),
	    ListCache = __webpack_require__(37),
	    Map = __webpack_require__(67);

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}

	module.exports = mapCacheClear;


/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(39);

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  var result = getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}

	module.exports = mapCacheDelete;


/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(39);

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	module.exports = mapCacheGet;


/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(39);

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	module.exports = mapCacheHas;


/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(39);

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  var data = getMapData(this, key),
	      size = data.size;

	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}

	module.exports = mapCacheSet;


/***/ }),
/* 272 */
/***/ (function(module, exports) {

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);

	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}

	module.exports = mapToArray;


/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

	var memoize = __webpack_require__(294);

	/** Used as the maximum memoize cache size. */
	var MAX_MEMOIZE_SIZE = 500;

	/**
	 * A specialized version of `_.memoize` which clears the memoized function's
	 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
	 *
	 * @private
	 * @param {Function} func The function to have its output memoized.
	 * @returns {Function} Returns the new memoized function.
	 */
	function memoizeCapped(func) {
	  var result = memoize(func, function(key) {
	    if (cache.size === MAX_MEMOIZE_SIZE) {
	      cache.clear();
	    }
	    return key;
	  });

	  var cache = result.cache;
	  return result;
	}

	module.exports = memoizeCapped;


/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(16);

	/* Built-in method references that are verified to be native. */
	var nativeDefineProperty = getNative(Object, 'defineProperty');

	module.exports = nativeDefineProperty;


/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(74);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object);

	module.exports = nativeKeys;


/***/ }),
/* 276 */
/***/ (function(module, exports) {

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}

	module.exports = setToArray;


/***/ }),
/* 277 */
/***/ (function(module, exports) {

	/** Used to detect hot functions by number of calls within a span of milliseconds. */
	var HOT_COUNT = 500,
	    HOT_SPAN = 16;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeNow = Date.now;

	/**
	 * Creates a function that'll short out and invoke `identity` instead
	 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
	 * milliseconds.
	 *
	 * @private
	 * @param {Function} func The function to restrict.
	 * @returns {Function} Returns the new shortable function.
	 */
	function shortOut(func) {
	  var count = 0,
	      lastCalled = 0;

	  return function() {
	    var stamp = nativeNow(),
	        remaining = HOT_SPAN - (stamp - lastCalled);

	    lastCalled = stamp;
	    if (remaining > 0) {
	      if (++count >= HOT_COUNT) {
	        return arguments[0];
	      }
	    } else {
	      count = 0;
	    }
	    return func.apply(undefined, arguments);
	  };
	}

	module.exports = shortOut;


/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(37);

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	  this.size = 0;
	}

	module.exports = stackClear;


/***/ }),
/* 279 */
/***/ (function(module, exports) {

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  var data = this.__data__,
	      result = data['delete'](key);

	  this.size = data.size;
	  return result;
	}

	module.exports = stackDelete;


/***/ }),
/* 280 */
/***/ (function(module, exports) {

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}

	module.exports = stackGet;


/***/ }),
/* 281 */
/***/ (function(module, exports) {

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}

	module.exports = stackHas;


/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(37),
	    Map = __webpack_require__(67),
	    MapCache = __webpack_require__(93);

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var data = this.__data__;
	  if (data instanceof ListCache) {
	    var pairs = data.__data__;
	    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }
	    data = this.__data__ = new MapCache(pairs);
	  }
	  data.set(key, value);
	  this.size = data.size;
	  return this;
	}

	module.exports = stackSet;


/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

	var memoizeCapped = __webpack_require__(273),
	    toString = __webpack_require__(298);

	/** Used to match property names within property paths. */
	var reLeadingDot = /^\./,
	    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;

	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = memoizeCapped(function(string) {
	  string = toString(string);

	  var result = [];
	  if (reLeadingDot.test(string)) {
	    result.push('');
	  }
	  string.replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});

	module.exports = stringToPath;


/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(69),
	    copyObject = __webpack_require__(72),
	    createAssigner = __webpack_require__(243),
	    isArrayLike = __webpack_require__(41),
	    isPrototype = __webpack_require__(73),
	    keys = __webpack_require__(43);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Assigns own enumerable string keyed properties of source objects to the
	 * destination object. Source objects are applied from left to right.
	 * Subsequent sources overwrite property assignments of previous sources.
	 *
	 * **Note:** This method mutates `object` and is loosely based on
	 * [`Object.assign`](https://mdn.io/Object/assign).
	 *
	 * @static
	 * @memberOf _
	 * @since 0.10.0
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @see _.assignIn
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * function Bar() {
	 *   this.c = 3;
	 * }
	 *
	 * Foo.prototype.b = 2;
	 * Bar.prototype.d = 4;
	 *
	 * _.assign({ 'a': 0 }, new Foo, new Bar);
	 * // => { 'a': 1, 'c': 3 }
	 */
	var assign = createAssigner(function(object, source) {
	  if (isPrototype(source) || isArrayLike(source)) {
	    copyObject(source, keys(source), object);
	    return;
	  }
	  for (var key in source) {
	    if (hasOwnProperty.call(source, key)) {
	      assignValue(object, key, source[key]);
	    }
	  }
	});

	module.exports = assign;


/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

	var baseClone = __webpack_require__(218);

	/**
	 * This method is like `_.clone` except that it recursively clones `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 1.0.0
	 * @category Lang
	 * @param {*} value The value to recursively clone.
	 * @returns {*} Returns the deep cloned value.
	 * @see _.clone
	 * @example
	 *
	 * var objects = [{ 'a': 1 }, { 'b': 2 }];
	 *
	 * var deep = _.cloneDeep(objects);
	 * console.log(deep[0] === objects[0]);
	 * // => false
	 */
	function cloneDeep(value) {
	  return baseClone(value, true, true);
	}

	module.exports = cloneDeep;


/***/ }),
/* 286 */
/***/ (function(module, exports) {

	/**
	 * Creates a function that returns `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {*} value The value to return from the new function.
	 * @returns {Function} Returns the new constant function.
	 * @example
	 *
	 * var objects = _.times(2, _.constant({ 'a': 1 }));
	 *
	 * console.log(objects);
	 * // => [{ 'a': 1 }, { 'a': 1 }]
	 *
	 * console.log(objects[0] === objects[1]);
	 * // => true
	 */
	function constant(value) {
	  return function() {
	    return value;
	  };
	}

	module.exports = constant;


/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

	var baseFlatten = __webpack_require__(220);

	/**
	 * Flattens `array` a single level deep.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {Array} array The array to flatten.
	 * @returns {Array} Returns the new flattened array.
	 * @example
	 *
	 * _.flatten([1, [2, [3, [4]], 5]]);
	 * // => [1, 2, [3, [4]], 5]
	 */
	function flatten(array) {
	  var length = array ? array.length : 0;
	  return length ? baseFlatten(array, 1) : [];
	}

	module.exports = flatten;


/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(221);

	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is returned in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}

	module.exports = get;


/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(41),
	    isObjectLike = __webpack_require__(42);

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	module.exports = isArrayLikeObject;


/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(6),
	    stubFalse = __webpack_require__(297);

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;

	module.exports = isBuffer;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(77)(module)))

/***/ }),
/* 291 */
/***/ (function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	module.exports = isLength;


/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

	var getPrototype = __webpack_require__(96),
	    isObjectLike = __webpack_require__(42);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || objectToString.call(value) != objectTag) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return (typeof Ctor == 'function' &&
	    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
	}

	module.exports = isPlainObject;


/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(13),
	    isObjectLike = __webpack_require__(42);

	/** `Object#toString` result references. */
	var stringTag = '[object String]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `String` primitive or object.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
	 * @example
	 *
	 * _.isString('abc');
	 * // => true
	 *
	 * _.isString(1);
	 * // => false
	 */
	function isString(value) {
	  return typeof value == 'string' ||
	    (!isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);
	}

	module.exports = isString;


/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(93);

	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;

	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result) || cache;
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache);
	  return memoized;
	}

	// Expose `MapCache`.
	memoize.Cache = MapCache;

	module.exports = memoize;


/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(216),
	    basePick = __webpack_require__(226),
	    flatRest = __webpack_require__(244),
	    toKey = __webpack_require__(101);

	/**
	 * Creates an object composed of the picked `object` properties.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The source object.
	 * @param {...(string|string[])} [props] The property identifiers to pick.
	 * @returns {Object} Returns the new object.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': '2', 'c': 3 };
	 *
	 * _.pick(object, ['a', 'c']);
	 * // => { 'a': 1, 'c': 3 }
	 */
	var pick = flatRest(function(object, props) {
	  return object == null ? {} : basePick(object, arrayMap(props, toKey));
	});

	module.exports = pick;


/***/ }),
/* 296 */
/***/ (function(module, exports) {

	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}

	module.exports = stubArray;


/***/ }),
/* 297 */
/***/ (function(module, exports) {

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}

	module.exports = stubFalse;


/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(231);

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}

	module.exports = toString;


/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/*! https://mths.be/punycode v1.3.2 by @mathias */
	;(function(root) {

		/** Detect free variables */
		var freeExports = typeof exports == 'object' && exports &&
			!exports.nodeType && exports;
		var freeModule = typeof module == 'object' && module &&
			!module.nodeType && module;
		var freeGlobal = typeof global == 'object' && global;
		if (
			freeGlobal.global === freeGlobal ||
			freeGlobal.window === freeGlobal ||
			freeGlobal.self === freeGlobal
		) {
			root = freeGlobal;
		}

		/**
		 * The `punycode` object.
		 * @name punycode
		 * @type Object
		 */
		var punycode,

		/** Highest positive signed 32-bit float value */
		maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

		/** Bootstring parameters */
		base = 36,
		tMin = 1,
		tMax = 26,
		skew = 38,
		damp = 700,
		initialBias = 72,
		initialN = 128, // 0x80
		delimiter = '-', // '\x2D'

		/** Regular expressions */
		regexPunycode = /^xn--/,
		regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
		regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

		/** Error messages */
		errors = {
			'overflow': 'Overflow: input needs wider integers to process',
			'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
			'invalid-input': 'Invalid input'
		},

		/** Convenience shortcuts */
		baseMinusTMin = base - tMin,
		floor = Math.floor,
		stringFromCharCode = String.fromCharCode,

		/** Temporary variable */
		key;

		/*--------------------------------------------------------------------------*/

		/**
		 * A generic error utility function.
		 * @private
		 * @param {String} type The error type.
		 * @returns {Error} Throws a `RangeError` with the applicable error message.
		 */
		function error(type) {
			throw RangeError(errors[type]);
		}

		/**
		 * A generic `Array#map` utility function.
		 * @private
		 * @param {Array} array The array to iterate over.
		 * @param {Function} callback The function that gets called for every array
		 * item.
		 * @returns {Array} A new array of values returned by the callback function.
		 */
		function map(array, fn) {
			var length = array.length;
			var result = [];
			while (length--) {
				result[length] = fn(array[length]);
			}
			return result;
		}

		/**
		 * A simple `Array#map`-like wrapper to work with domain name strings or email
		 * addresses.
		 * @private
		 * @param {String} domain The domain name or email address.
		 * @param {Function} callback The function that gets called for every
		 * character.
		 * @returns {Array} A new string of characters returned by the callback
		 * function.
		 */
		function mapDomain(string, fn) {
			var parts = string.split('@');
			var result = '';
			if (parts.length > 1) {
				// In email addresses, only the domain name should be punycoded. Leave
				// the local part (i.e. everything up to `@`) intact.
				result = parts[0] + '@';
				string = parts[1];
			}
			// Avoid `split(regex)` for IE8 compatibility. See #17.
			string = string.replace(regexSeparators, '\x2E');
			var labels = string.split('.');
			var encoded = map(labels, fn).join('.');
			return result + encoded;
		}

		/**
		 * Creates an array containing the numeric code points of each Unicode
		 * character in the string. While JavaScript uses UCS-2 internally,
		 * this function will convert a pair of surrogate halves (each of which
		 * UCS-2 exposes as separate characters) into a single code point,
		 * matching UTF-16.
		 * @see `punycode.ucs2.encode`
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode.ucs2
		 * @name decode
		 * @param {String} string The Unicode input string (UCS-2).
		 * @returns {Array} The new array of code points.
		 */
		function ucs2decode(string) {
			var output = [],
			    counter = 0,
			    length = string.length,
			    value,
			    extra;
			while (counter < length) {
				value = string.charCodeAt(counter++);
				if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
					// high surrogate, and there is a next character
					extra = string.charCodeAt(counter++);
					if ((extra & 0xFC00) == 0xDC00) { // low surrogate
						output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
					} else {
						// unmatched surrogate; only append this code unit, in case the next
						// code unit is the high surrogate of a surrogate pair
						output.push(value);
						counter--;
					}
				} else {
					output.push(value);
				}
			}
			return output;
		}

		/**
		 * Creates a string based on an array of numeric code points.
		 * @see `punycode.ucs2.decode`
		 * @memberOf punycode.ucs2
		 * @name encode
		 * @param {Array} codePoints The array of numeric code points.
		 * @returns {String} The new Unicode string (UCS-2).
		 */
		function ucs2encode(array) {
			return map(array, function(value) {
				var output = '';
				if (value > 0xFFFF) {
					value -= 0x10000;
					output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
					value = 0xDC00 | value & 0x3FF;
				}
				output += stringFromCharCode(value);
				return output;
			}).join('');
		}

		/**
		 * Converts a basic code point into a digit/integer.
		 * @see `digitToBasic()`
		 * @private
		 * @param {Number} codePoint The basic numeric code point value.
		 * @returns {Number} The numeric value of a basic code point (for use in
		 * representing integers) in the range `0` to `base - 1`, or `base` if
		 * the code point does not represent a value.
		 */
		function basicToDigit(codePoint) {
			if (codePoint - 48 < 10) {
				return codePoint - 22;
			}
			if (codePoint - 65 < 26) {
				return codePoint - 65;
			}
			if (codePoint - 97 < 26) {
				return codePoint - 97;
			}
			return base;
		}

		/**
		 * Converts a digit/integer into a basic code point.
		 * @see `basicToDigit()`
		 * @private
		 * @param {Number} digit The numeric value of a basic code point.
		 * @returns {Number} The basic code point whose value (when used for
		 * representing integers) is `digit`, which needs to be in the range
		 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
		 * used; else, the lowercase form is used. The behavior is undefined
		 * if `flag` is non-zero and `digit` has no uppercase form.
		 */
		function digitToBasic(digit, flag) {
			//  0..25 map to ASCII a..z or A..Z
			// 26..35 map to ASCII 0..9
			return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
		}

		/**
		 * Bias adaptation function as per section 3.4 of RFC 3492.
		 * http://tools.ietf.org/html/rfc3492#section-3.4
		 * @private
		 */
		function adapt(delta, numPoints, firstTime) {
			var k = 0;
			delta = firstTime ? floor(delta / damp) : delta >> 1;
			delta += floor(delta / numPoints);
			for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
				delta = floor(delta / baseMinusTMin);
			}
			return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
		}

		/**
		 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
		 * symbols.
		 * @memberOf punycode
		 * @param {String} input The Punycode string of ASCII-only symbols.
		 * @returns {String} The resulting string of Unicode symbols.
		 */
		function decode(input) {
			// Don't use UCS-2
			var output = [],
			    inputLength = input.length,
			    out,
			    i = 0,
			    n = initialN,
			    bias = initialBias,
			    basic,
			    j,
			    index,
			    oldi,
			    w,
			    k,
			    digit,
			    t,
			    /** Cached calculation results */
			    baseMinusT;

			// Handle the basic code points: let `basic` be the number of input code
			// points before the last delimiter, or `0` if there is none, then copy
			// the first basic code points to the output.

			basic = input.lastIndexOf(delimiter);
			if (basic < 0) {
				basic = 0;
			}

			for (j = 0; j < basic; ++j) {
				// if it's not a basic code point
				if (input.charCodeAt(j) >= 0x80) {
					error('not-basic');
				}
				output.push(input.charCodeAt(j));
			}

			// Main decoding loop: start just after the last delimiter if any basic code
			// points were copied; start at the beginning otherwise.

			for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

				// `index` is the index of the next character to be consumed.
				// Decode a generalized variable-length integer into `delta`,
				// which gets added to `i`. The overflow checking is easier
				// if we increase `i` as we go, then subtract off its starting
				// value at the end to obtain `delta`.
				for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

					if (index >= inputLength) {
						error('invalid-input');
					}

					digit = basicToDigit(input.charCodeAt(index++));

					if (digit >= base || digit > floor((maxInt - i) / w)) {
						error('overflow');
					}

					i += digit * w;
					t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

					if (digit < t) {
						break;
					}

					baseMinusT = base - t;
					if (w > floor(maxInt / baseMinusT)) {
						error('overflow');
					}

					w *= baseMinusT;

				}

				out = output.length + 1;
				bias = adapt(i - oldi, out, oldi == 0);

				// `i` was supposed to wrap around from `out` to `0`,
				// incrementing `n` each time, so we'll fix that now:
				if (floor(i / out) > maxInt - n) {
					error('overflow');
				}

				n += floor(i / out);
				i %= out;

				// Insert `n` at position `i` of the output
				output.splice(i++, 0, n);

			}

			return ucs2encode(output);
		}

		/**
		 * Converts a string of Unicode symbols (e.g. a domain name label) to a
		 * Punycode string of ASCII-only symbols.
		 * @memberOf punycode
		 * @param {String} input The string of Unicode symbols.
		 * @returns {String} The resulting Punycode string of ASCII-only symbols.
		 */
		function encode(input) {
			var n,
			    delta,
			    handledCPCount,
			    basicLength,
			    bias,
			    j,
			    m,
			    q,
			    k,
			    t,
			    currentValue,
			    output = [],
			    /** `inputLength` will hold the number of code points in `input`. */
			    inputLength,
			    /** Cached calculation results */
			    handledCPCountPlusOne,
			    baseMinusT,
			    qMinusT;

			// Convert the input in UCS-2 to Unicode
			input = ucs2decode(input);

			// Cache the length
			inputLength = input.length;

			// Initialize the state
			n = initialN;
			delta = 0;
			bias = initialBias;

			// Handle the basic code points
			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue < 0x80) {
					output.push(stringFromCharCode(currentValue));
				}
			}

			handledCPCount = basicLength = output.length;

			// `handledCPCount` is the number of code points that have been handled;
			// `basicLength` is the number of basic code points.

			// Finish the basic string - if it is not empty - with a delimiter
			if (basicLength) {
				output.push(delimiter);
			}

			// Main encoding loop:
			while (handledCPCount < inputLength) {

				// All non-basic code points < n have been handled already. Find the next
				// larger one:
				for (m = maxInt, j = 0; j < inputLength; ++j) {
					currentValue = input[j];
					if (currentValue >= n && currentValue < m) {
						m = currentValue;
					}
				}

				// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
				// but guard against overflow
				handledCPCountPlusOne = handledCPCount + 1;
				if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
					error('overflow');
				}

				delta += (m - n) * handledCPCountPlusOne;
				n = m;

				for (j = 0; j < inputLength; ++j) {
					currentValue = input[j];

					if (currentValue < n && ++delta > maxInt) {
						error('overflow');
					}

					if (currentValue == n) {
						// Represent delta as a generalized variable-length integer
						for (q = delta, k = base; /* no condition */; k += base) {
							t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
							if (q < t) {
								break;
							}
							qMinusT = q - t;
							baseMinusT = base - t;
							output.push(
								stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
							);
							q = floor(qMinusT / baseMinusT);
						}

						output.push(stringFromCharCode(digitToBasic(q, 0)));
						bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
						delta = 0;
						++handledCPCount;
					}
				}

				++delta;
				++n;

			}
			return output.join('');
		}

		/**
		 * Converts a Punycode string representing a domain name or an email address
		 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
		 * it doesn't matter if you call it on a string that has already been
		 * converted to Unicode.
		 * @memberOf punycode
		 * @param {String} input The Punycoded domain name or email address to
		 * convert to Unicode.
		 * @returns {String} The Unicode representation of the given Punycode
		 * string.
		 */
		function toUnicode(input) {
			return mapDomain(input, function(string) {
				return regexPunycode.test(string)
					? decode(string.slice(4).toLowerCase())
					: string;
			});
		}

		/**
		 * Converts a Unicode string representing a domain name or an email address to
		 * Punycode. Only the non-ASCII parts of the domain name will be converted,
		 * i.e. it doesn't matter if you call it with a domain that's already in
		 * ASCII.
		 * @memberOf punycode
		 * @param {String} input The domain name or email address to convert, as a
		 * Unicode string.
		 * @returns {String} The Punycode representation of the given domain name or
		 * email address.
		 */
		function toASCII(input) {
			return mapDomain(input, function(string) {
				return regexNonASCII.test(string)
					? 'xn--' + encode(string)
					: string;
			});
		}

		/*--------------------------------------------------------------------------*/

		/** Define the public API */
		punycode = {
			/**
			 * A string representing the current Punycode.js version number.
			 * @memberOf punycode
			 * @type String
			 */
			'version': '1.3.2',
			/**
			 * An object of methods to convert from JavaScript's internal character
			 * representation (UCS-2) to Unicode code points, and back.
			 * @see <https://mathiasbynens.be/notes/javascript-encoding>
			 * @memberOf punycode
			 * @type Object
			 */
			'ucs2': {
				'decode': ucs2decode,
				'encode': ucs2encode
			},
			'decode': decode,
			'encode': encode,
			'toASCII': toASCII,
			'toUnicode': toUnicode
		};

		/** Expose `punycode` */
		// Some AMD build optimizers, like r.js, check for specific condition patterns
		// like the following:
		if (
			true
		) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
				return punycode;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (freeExports && freeModule) {
			if (module.exports == freeExports) { // in Node.js or RingoJS v0.8.0+
				freeModule.exports = punycode;
			} else { // in Narwhal or RingoJS v0.7.0-
				for (key in punycode) {
					punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
				}
			}
		} else { // in Rhino or a web browser
			root.punycode = punycode;
		}

	}(this));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(77)(module), (function() { return this; }())))

/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var stringify = __webpack_require__(302);
	var parse = __webpack_require__(301);
	var formats = __webpack_require__(106);

	module.exports = {
	    formats: formats,
	    parse: parse,
	    stringify: stringify
	};


/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(107);

	var has = Object.prototype.hasOwnProperty;

	var defaults = {
	    allowDots: false,
	    allowPrototypes: false,
	    arrayLimit: 20,
	    decoder: utils.decode,
	    delimiter: '&',
	    depth: 5,
	    parameterLimit: 1000,
	    plainObjects: false,
	    strictNullHandling: false
	};

	var parseValues = function parseQueryStringValues(str, options) {
	    var obj = {};
	    var parts = str.split(options.delimiter, options.parameterLimit === Infinity ? undefined : options.parameterLimit);

	    for (var i = 0; i < parts.length; ++i) {
	        var part = parts[i];
	        var pos = part.indexOf(']=') === -1 ? part.indexOf('=') : part.indexOf(']=') + 1;

	        var key, val;
	        if (pos === -1) {
	            key = options.decoder(part);
	            val = options.strictNullHandling ? null : '';
	        } else {
	            key = options.decoder(part.slice(0, pos));
	            val = options.decoder(part.slice(pos + 1));
	        }
	        if (has.call(obj, key)) {
	            obj[key] = [].concat(obj[key]).concat(val);
	        } else {
	            obj[key] = val;
	        }
	    }

	    return obj;
	};

	var parseObject = function parseObjectRecursive(chain, val, options) {
	    if (!chain.length) {
	        return val;
	    }

	    var root = chain.shift();

	    var obj;
	    if (root === '[]') {
	        obj = [];
	        obj = obj.concat(parseObject(chain, val, options));
	    } else {
	        obj = options.plainObjects ? Object.create(null) : {};
	        var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
	        var index = parseInt(cleanRoot, 10);
	        if (
	            !isNaN(index) &&
	            root !== cleanRoot &&
	            String(index) === cleanRoot &&
	            index >= 0 &&
	            (options.parseArrays && index <= options.arrayLimit)
	        ) {
	            obj = [];
	            obj[index] = parseObject(chain, val, options);
	        } else {
	            obj[cleanRoot] = parseObject(chain, val, options);
	        }
	    }

	    return obj;
	};

	var parseKeys = function parseQueryStringKeys(givenKey, val, options) {
	    if (!givenKey) {
	        return;
	    }

	    // Transform dot notation to bracket notation
	    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

	    // The regex chunks

	    var brackets = /(\[[^[\]]*])/;
	    var child = /(\[[^[\]]*])/g;

	    // Get the parent

	    var segment = brackets.exec(key);
	    var parent = segment ? key.slice(0, segment.index) : key;

	    // Stash the parent if it exists

	    var keys = [];
	    if (parent) {
	        // If we aren't using plain objects, optionally prefix keys
	        // that would overwrite object prototype properties
	        if (!options.plainObjects && has.call(Object.prototype, parent)) {
	            if (!options.allowPrototypes) {
	                return;
	            }
	        }

	        keys.push(parent);
	    }

	    // Loop through children appending to the array until we hit depth

	    var i = 0;
	    while ((segment = child.exec(key)) !== null && i < options.depth) {
	        i += 1;
	        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
	            if (!options.allowPrototypes) {
	                return;
	            }
	        }
	        keys.push(segment[1]);
	    }

	    // If there's a remainder, just add whatever is left

	    if (segment) {
	        keys.push('[' + key.slice(segment.index) + ']');
	    }

	    return parseObject(keys, val, options);
	};

	module.exports = function (str, opts) {
	    var options = opts || {};

	    if (options.decoder !== null && options.decoder !== undefined && typeof options.decoder !== 'function') {
	        throw new TypeError('Decoder has to be a function.');
	    }

	    options.delimiter = typeof options.delimiter === 'string' || utils.isRegExp(options.delimiter) ? options.delimiter : defaults.delimiter;
	    options.depth = typeof options.depth === 'number' ? options.depth : defaults.depth;
	    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : defaults.arrayLimit;
	    options.parseArrays = options.parseArrays !== false;
	    options.decoder = typeof options.decoder === 'function' ? options.decoder : defaults.decoder;
	    options.allowDots = typeof options.allowDots === 'boolean' ? options.allowDots : defaults.allowDots;
	    options.plainObjects = typeof options.plainObjects === 'boolean' ? options.plainObjects : defaults.plainObjects;
	    options.allowPrototypes = typeof options.allowPrototypes === 'boolean' ? options.allowPrototypes : defaults.allowPrototypes;
	    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : defaults.parameterLimit;
	    options.strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;

	    if (str === '' || str === null || typeof str === 'undefined') {
	        return options.plainObjects ? Object.create(null) : {};
	    }

	    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
	    var obj = options.plainObjects ? Object.create(null) : {};

	    // Iterate over the keys and setup the new object

	    var keys = Object.keys(tempObj);
	    for (var i = 0; i < keys.length; ++i) {
	        var key = keys[i];
	        var newObj = parseKeys(key, tempObj[key], options);
	        obj = utils.merge(obj, newObj, options);
	    }

	    return utils.compact(obj);
	};


/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(107);
	var formats = __webpack_require__(106);

	var arrayPrefixGenerators = {
	    brackets: function brackets(prefix) { // eslint-disable-line func-name-matching
	        return prefix + '[]';
	    },
	    indices: function indices(prefix, key) { // eslint-disable-line func-name-matching
	        return prefix + '[' + key + ']';
	    },
	    repeat: function repeat(prefix) { // eslint-disable-line func-name-matching
	        return prefix;
	    }
	};

	var toISO = Date.prototype.toISOString;

	var defaults = {
	    delimiter: '&',
	    encode: true,
	    encoder: utils.encode,
	    encodeValuesOnly: false,
	    serializeDate: function serializeDate(date) { // eslint-disable-line func-name-matching
	        return toISO.call(date);
	    },
	    skipNulls: false,
	    strictNullHandling: false
	};

	var stringify = function stringify( // eslint-disable-line func-name-matching
	    object,
	    prefix,
	    generateArrayPrefix,
	    strictNullHandling,
	    skipNulls,
	    encoder,
	    filter,
	    sort,
	    allowDots,
	    serializeDate,
	    formatter,
	    encodeValuesOnly
	) {
	    var obj = object;
	    if (typeof filter === 'function') {
	        obj = filter(prefix, obj);
	    } else if (obj instanceof Date) {
	        obj = serializeDate(obj);
	    } else if (obj === null) {
	        if (strictNullHandling) {
	            return encoder && !encodeValuesOnly ? encoder(prefix) : prefix;
	        }

	        obj = '';
	    }

	    if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean' || utils.isBuffer(obj)) {
	        if (encoder) {
	            var keyValue = encodeValuesOnly ? prefix : encoder(prefix);
	            return [formatter(keyValue) + '=' + formatter(encoder(obj))];
	        }
	        return [formatter(prefix) + '=' + formatter(String(obj))];
	    }

	    var values = [];

	    if (typeof obj === 'undefined') {
	        return values;
	    }

	    var objKeys;
	    if (Array.isArray(filter)) {
	        objKeys = filter;
	    } else {
	        var keys = Object.keys(obj);
	        objKeys = sort ? keys.sort(sort) : keys;
	    }

	    for (var i = 0; i < objKeys.length; ++i) {
	        var key = objKeys[i];

	        if (skipNulls && obj[key] === null) {
	            continue;
	        }

	        if (Array.isArray(obj)) {
	            values = values.concat(stringify(
	                obj[key],
	                generateArrayPrefix(prefix, key),
	                generateArrayPrefix,
	                strictNullHandling,
	                skipNulls,
	                encoder,
	                filter,
	                sort,
	                allowDots,
	                serializeDate,
	                formatter,
	                encodeValuesOnly
	            ));
	        } else {
	            values = values.concat(stringify(
	                obj[key],
	                prefix + (allowDots ? '.' + key : '[' + key + ']'),
	                generateArrayPrefix,
	                strictNullHandling,
	                skipNulls,
	                encoder,
	                filter,
	                sort,
	                allowDots,
	                serializeDate,
	                formatter,
	                encodeValuesOnly
	            ));
	        }
	    }

	    return values;
	};

	module.exports = function (object, opts) {
	    var obj = object;
	    var options = opts || {};

	    if (options.encoder !== null && options.encoder !== undefined && typeof options.encoder !== 'function') {
	        throw new TypeError('Encoder has to be a function.');
	    }

	    var delimiter = typeof options.delimiter === 'undefined' ? defaults.delimiter : options.delimiter;
	    var strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;
	    var skipNulls = typeof options.skipNulls === 'boolean' ? options.skipNulls : defaults.skipNulls;
	    var encode = typeof options.encode === 'boolean' ? options.encode : defaults.encode;
	    var encoder = typeof options.encoder === 'function' ? options.encoder : defaults.encoder;
	    var sort = typeof options.sort === 'function' ? options.sort : null;
	    var allowDots = typeof options.allowDots === 'undefined' ? false : options.allowDots;
	    var serializeDate = typeof options.serializeDate === 'function' ? options.serializeDate : defaults.serializeDate;
	    var encodeValuesOnly = typeof options.encodeValuesOnly === 'boolean' ? options.encodeValuesOnly : defaults.encodeValuesOnly;
	    if (typeof options.format === 'undefined') {
	        options.format = formats.default;
	    } else if (!Object.prototype.hasOwnProperty.call(formats.formatters, options.format)) {
	        throw new TypeError('Unknown format option provided.');
	    }
	    var formatter = formats.formatters[options.format];
	    var objKeys;
	    var filter;

	    if (typeof options.filter === 'function') {
	        filter = options.filter;
	        obj = filter('', obj);
	    } else if (Array.isArray(options.filter)) {
	        filter = options.filter;
	        objKeys = filter;
	    }

	    var keys = [];

	    if (typeof obj !== 'object' || obj === null) {
	        return '';
	    }

	    var arrayFormat;
	    if (options.arrayFormat in arrayPrefixGenerators) {
	        arrayFormat = options.arrayFormat;
	    } else if ('indices' in options) {
	        arrayFormat = options.indices ? 'indices' : 'repeat';
	    } else {
	        arrayFormat = 'indices';
	    }

	    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

	    if (!objKeys) {
	        objKeys = Object.keys(obj);
	    }

	    if (sort) {
	        objKeys.sort(sort);
	    }

	    for (var i = 0; i < objKeys.length; ++i) {
	        var key = objKeys[i];

	        if (skipNulls && obj[key] === null) {
	            continue;
	        }

	        keys = keys.concat(stringify(
	            obj[key],
	            key,
	            generateArrayPrefix,
	            strictNullHandling,
	            skipNulls,
	            encode ? encoder : null,
	            filter,
	            sort,
	            allowDots,
	            serializeDate,
	            formatter,
	            encodeValuesOnly
	        ));
	    }

	    return keys.join(delimiter);
	};


/***/ }),
/* 303 */
/***/ (function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	'use strict';

	// If obj.hasOwnProperty has been overridden, then calling
	// obj.hasOwnProperty(prop) will break.
	// See: https://github.com/joyent/node/issues/1707
	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}

	module.exports = function(qs, sep, eq, options) {
	  sep = sep || '&';
	  eq = eq || '=';
	  var obj = {};

	  if (typeof qs !== 'string' || qs.length === 0) {
	    return obj;
	  }

	  var regexp = /\+/g;
	  qs = qs.split(sep);

	  var maxKeys = 1000;
	  if (options && typeof options.maxKeys === 'number') {
	    maxKeys = options.maxKeys;
	  }

	  var len = qs.length;
	  // maxKeys <= 0 means that we should not limit keys count
	  if (maxKeys > 0 && len > maxKeys) {
	    len = maxKeys;
	  }

	  for (var i = 0; i < len; ++i) {
	    var x = qs[i].replace(regexp, '%20'),
	        idx = x.indexOf(eq),
	        kstr, vstr, k, v;

	    if (idx >= 0) {
	      kstr = x.substr(0, idx);
	      vstr = x.substr(idx + 1);
	    } else {
	      kstr = x;
	      vstr = '';
	    }

	    k = decodeURIComponent(kstr);
	    v = decodeURIComponent(vstr);

	    if (!hasOwnProperty(obj, k)) {
	      obj[k] = v;
	    } else if (Array.isArray(obj[k])) {
	      obj[k].push(v);
	    } else {
	      obj[k] = [obj[k], v];
	    }
	  }

	  return obj;
	};


/***/ }),
/* 304 */
/***/ (function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	'use strict';

	var stringifyPrimitive = function(v) {
	  switch (typeof v) {
	    case 'string':
	      return v;

	    case 'boolean':
	      return v ? 'true' : 'false';

	    case 'number':
	      return isFinite(v) ? v : '';

	    default:
	      return '';
	  }
	};

	module.exports = function(obj, sep, eq, name) {
	  sep = sep || '&';
	  eq = eq || '=';
	  if (obj === null) {
	    obj = undefined;
	  }

	  if (typeof obj === 'object') {
	    return Object.keys(obj).map(function(k) {
	      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
	      if (Array.isArray(obj[k])) {
	        return obj[k].map(function(v) {
	          return ks + encodeURIComponent(stringifyPrimitive(v));
	        }).join(sep);
	      } else {
	        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
	      }
	    }).join(sep);

	  }

	  if (!name) return '';
	  return encodeURIComponent(stringifyPrimitive(name)) + eq +
	         encodeURIComponent(stringifyPrimitive(obj));
	};


/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.decode = exports.parse = __webpack_require__(303);
	exports.encode = exports.stringify = __webpack_require__(304);


/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {// This method of obtaining a reference to the global object needs to be
	// kept identical to the way it is obtained in runtime.js
	var g =
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this;

	// Use `getOwnPropertyNames` because not all browsers support calling
	// `hasOwnProperty` on the global `self` object in a worker. See #183.
	var hadRuntime = g.regeneratorRuntime &&
	  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

	// Save the old regeneratorRuntime in case it needs to be restored later.
	var oldRuntime = hadRuntime && g.regeneratorRuntime;

	// Force reevalutation of runtime.js.
	g.regeneratorRuntime = undefined;

	module.exports = __webpack_require__(307);

	if (hadRuntime) {
	  // Restore the original runtime.
	  g.regeneratorRuntime = oldRuntime;
	} else {
	  // Remove the global property added by runtime.js.
	  try {
	    delete g.regeneratorRuntime;
	  } catch(e) {
	    g.regeneratorRuntime = undefined;
	  }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 307 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */

	!(function(global) {
	  "use strict";

	  var Op = Object.prototype;
	  var hasOwn = Op.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }

	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
	    var generator = Object.create(protoGenerator.prototype);
	    var context = new Context(tryLocsList || []);

	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);

	    return generator;
	  }
	  runtime.wrap = wrap;

	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }

	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";

	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};

	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}

	  // This is a polyfill for %IteratorPrototype% for environments that
	  // don't natively support it.
	  var IteratorPrototype = {};
	  IteratorPrototype[iteratorSymbol] = function () {
	    return this;
	  };

	  var getProto = Object.getPrototypeOf;
	  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	  if (NativeIteratorPrototype &&
	      NativeIteratorPrototype !== Op &&
	      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
	    // This environment has a native %IteratorPrototype%; use it instead
	    // of the polyfill.
	    IteratorPrototype = NativeIteratorPrototype;
	  }

	  var Gp = GeneratorFunctionPrototype.prototype =
	    Generator.prototype = Object.create(IteratorPrototype);
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] =
	    GeneratorFunction.displayName = "GeneratorFunction";

	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }

	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };

	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };

	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `hasOwn.call(value, "__await")` to determine if the yielded value is
	  // meant to be awaited.
	  runtime.awrap = function(arg) {
	    return { __await: arg };
	  };

	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value &&
	            typeof value === "object" &&
	            hasOwn.call(value, "__await")) {
	          return Promise.resolve(value.__await).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }

	        return Promise.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }

	    if (typeof global.process === "object" && global.process.domain) {
	      invoke = global.process.domain.bind(invoke);
	    }

	    var previousPromise;

	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }

	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }

	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }

	  defineIteratorMethods(AsyncIterator.prototype);
	  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
	    return this;
	  };
	  runtime.AsyncIterator = AsyncIterator;

	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );

	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };

	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;

	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }

	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }

	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }

	      context.method = method;
	      context.arg = arg;

	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          var delegateResult = maybeInvokeDelegate(delegate, context);
	          if (delegateResult) {
	            if (delegateResult === ContinueSentinel) continue;
	            return delegateResult;
	          }
	        }

	        if (context.method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = context.arg;

	        } else if (context.method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw context.arg;
	          }

	          context.dispatchException(context.arg);

	        } else if (context.method === "return") {
	          context.abrupt("return", context.arg);
	        }

	        state = GenStateExecuting;

	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;

	          if (record.arg === ContinueSentinel) {
	            continue;
	          }

	          return {
	            value: record.arg,
	            done: context.done
	          };

	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(context.arg) call above.
	          context.method = "throw";
	          context.arg = record.arg;
	        }
	      }
	    };
	  }

	  // Call delegate.iterator[context.method](context.arg) and handle the
	  // result, either by returning a { value, done } result from the
	  // delegate iterator, or by modifying context.method and context.arg,
	  // setting context.delegate to null, and returning the ContinueSentinel.
	  function maybeInvokeDelegate(delegate, context) {
	    var method = delegate.iterator[context.method];
	    if (method === undefined) {
	      // A .throw or .return when the delegate iterator has no .throw
	      // method always terminates the yield* loop.
	      context.delegate = null;

	      if (context.method === "throw") {
	        if (delegate.iterator.return) {
	          // If the delegate iterator has a return method, give it a
	          // chance to clean up.
	          context.method = "return";
	          context.arg = undefined;
	          maybeInvokeDelegate(delegate, context);

	          if (context.method === "throw") {
	            // If maybeInvokeDelegate(context) changed context.method from
	            // "return" to "throw", let that override the TypeError below.
	            return ContinueSentinel;
	          }
	        }

	        context.method = "throw";
	        context.arg = new TypeError(
	          "The iterator does not provide a 'throw' method");
	      }

	      return ContinueSentinel;
	    }

	    var record = tryCatch(method, delegate.iterator, context.arg);

	    if (record.type === "throw") {
	      context.method = "throw";
	      context.arg = record.arg;
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    var info = record.arg;

	    if (! info) {
	      context.method = "throw";
	      context.arg = new TypeError("iterator result is not an object");
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    if (info.done) {
	      // Assign the result of the finished delegate to the temporary
	      // variable specified by delegate.resultName (see delegateYield).
	      context[delegate.resultName] = info.value;

	      // Resume execution at the desired location (see delegateYield).
	      context.next = delegate.nextLoc;

	      // If context.method was "throw" but the delegate handled the
	      // exception, let the outer generator proceed normally. If
	      // context.method was "next", forget context.arg since it has been
	      // "consumed" by the delegate iterator. If context.method was
	      // "return", allow the original .return call to continue in the
	      // outer generator.
	      if (context.method !== "return") {
	        context.method = "next";
	        context.arg = undefined;
	      }

	    } else {
	      // Re-yield the result returned by the delegate method.
	      return info;
	    }

	    // The delegate iterator is finished, so forget it and continue with
	    // the outer generator.
	    context.delegate = null;
	    return ContinueSentinel;
	  }

	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);

	  Gp[toStringTagSymbol] = "Generator";

	  // A Generator should always return itself as the iterator object when the
	  // @@iterator function is called on it. Some browsers' implementations of the
	  // iterator prototype chain incorrectly implement this, causing the Generator
	  // object to not be returned from this call. This ensures that doesn't happen.
	  // See https://github.com/facebook/regenerator/issues/274 for more details.
	  Gp[iteratorSymbol] = function() {
	    return this;
	  };

	  Gp.toString = function() {
	    return "[object Generator]";
	  };

	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };

	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }

	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }

	    this.tryEntries.push(entry);
	  }

	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }

	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }

	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();

	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }

	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };

	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }

	      if (typeof iterable.next === "function") {
	        return iterable;
	      }

	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }

	          next.value = undefined;
	          next.done = true;

	          return next;
	        };

	        return next.next = next;
	      }
	    }

	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;

	  function doneResult() {
	    return { value: undefined, done: true };
	  }

	  Context.prototype = {
	    constructor: Context,

	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;

	      this.method = "next";
	      this.arg = undefined;

	      this.tryEntries.forEach(resetTryEntry);

	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },

	    stop: function() {
	      this.done = true;

	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }

	      return this.rval;
	    },

	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }

	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;

	        if (caught) {
	          // If the dispatched exception was caught by a catch block,
	          // then let that catch block handle the exception normally.
	          context.method = "next";
	          context.arg = undefined;
	        }

	        return !! caught;
	      }

	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;

	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }

	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");

	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }

	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },

	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }

	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;

	      if (finallyEntry) {
	        this.method = "next";
	        this.next = finallyEntry.finallyLoc;
	        return ContinueSentinel;
	      }

	      return this.complete(record);
	    },

	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }

	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = this.arg = record.arg;
	        this.method = "return";
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }

	      return ContinueSentinel;
	    },

	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },

	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }

	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },

	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };

	      if (this.method === "next") {
	        // Deliberately forget the last sent value so that we don't
	        // accidentally pass it on to the delegate.
	        this.arg = undefined;
	      }

	      return ContinueSentinel;
	    }
	  };
	})(
	  // Among the various tricks for obtaining a reference to the global
	  // object, this seems to be the most reliable technique that does not
	  // use indirect eval (which violates Content Security Policy).
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this
	);

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports=function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=45)}([function(e,t){e.exports=__webpack_require__(114)},function(e,t){e.exports=__webpack_require__(79)},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return(e.operationId||"").replace(/\s/g,"").length?P(e.operationId):u(t,r)}function u(e,t){return""+b(t)+P(e)}function i(e,t){return b(t)+"-"+e}function o(e,t){return e&&e.paths?s(e,function(e){var r=e.pathName,n=e.method,u=e.operation;if(!u||"object"!==(void 0===u?"undefined":(0,m.default)(u)))return!1;var o=u.operationId;return[a(u,r,n),i(r,n),o].some(function(e){return e&&e===t})}):null}function s(e,t){return c(e,t,!0)||null}function c(e,t,r){if(!e||"object"!==(void 0===e?"undefined":(0,m.default)(e))||!e.paths||"object"!==(0,m.default)(e.paths))return null;var n=e.paths;for(var a in n)for(var u in n[a])if("PARAMETERS"!==u.toUpperCase()){var i=n[a][u];if(i&&"object"===(void 0===i?"undefined":(0,m.default)(i))){var o={spec:e,pathName:a,method:u.toUpperCase(),operation:i},s=t(o);if(r&&s)return o}}}function l(e){var t=e.spec,r=t.paths,n={};if(!r)return e;for(var u in r){var i=r[u];if((0,g.default)(i)){var o=i.parameters;for(var s in i){(function(e){var r=i[e];if(!(0,g.default)(r))return"continue";var s=a(r,u,e);if(s&&(n[s]?n[s].push(r):n[s]=[r],(0,h.default)(n).forEach(function(e){n[e].length>1?n[e].forEach(function(t,r){t.operationId=""+e+(r+1)}):void 0!==r.operationId&&(r.__originalOperationId=r.operationId,r.operationId=e)})),"parameters"!==e){var c=[],l={};for(var f in t)"produces"!==f&&"consumes"!==f&&"security"!==f||(l[f]=t[f],c.push(l));if(o&&(l.parameters=o,c.push(l)),c.length){var d=!0,v=!1,m=void 0;try{for(var y,b=(0,p.default)(c);!(d=(y=b.next()).done);d=!0){var P=y.value;for(var x in P)if(r[x]){if("parameters"===x){var k=!0,w=!1,_=void 0;try{for(var A,M=(0,p.default)(P[x]);!(k=(A=M.next()).done);k=!0)!function(){var e=A.value;r[x].some(function(t){return t.name===e.name})||r[x].push(e)}()}catch(e){w=!0,_=e}finally{try{!k&&M.return&&M.return()}finally{if(w)throw _}}}}else r[x]=P[x]}}catch(e){v=!0,m=e}finally{try{!d&&b.return&&b.return()}finally{if(v)throw m}}}}})(s)}}}return e}Object.defineProperty(t,"__esModule",{value:!0});var f=r(10),p=n(f),d=r(0),h=n(d),v=r(5),m=n(v);t.opId=a,t.idFromPathMethod=u,t.legacyIdFromPathMethod=i,t.getOperationRaw=o,t.findOperation=s,t.eachOperation=c,t.normalizeSwagger=l;var y=r(40),g=n(y),b=function(e){return String.prototype.toLowerCase.call(e)},P=function(e){return e.replace(/[^\w]/gi,"_")}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t,r){if(r=r||{},t=(0,U.default)({},t,{path:t.path&&u(t.path)}),"merge"===t.op){var n=o(t.path);L.default.apply(e,[n]),(0,U.default)(n.value,t.value)}else if("mergeDeep"===t.op){var a=o(t.path);L.default.apply(e,[a]),(0,G.default)(a.value,t.value)}else if(L.default.apply(e,[t]),r.allowMetaPatches&&t.meta&&I(t)&&(Array.isArray(t.value)||_(t.value))){var i=o(t.path);L.default.apply(e,[i]),(0,U.default)(i.value,t.meta)}return e}function u(e){return Array.isArray(e)?e.length<1?"":"/"+e.map(function(e){return(e+"").replace(/~/g,"~0").replace(/\//g,"~1")}).join("/"):e}function i(e,t){return{op:"add",path:e,value:t}}function o(e){return{op:"_get",path:e}}function s(e,t,r){return{op:"replace",path:e,value:t,meta:r}}function c(e,t){return{op:"remove",path:e}}function l(e,t){return{type:"mutation",op:"merge",path:e,value:t}}function f(e,t){return{type:"mutation",op:"mergeDeep",path:e,value:t}}function p(e,t){return{type:"context",path:e,value:t}}function d(e,t){try{return v(e,y,t)}catch(e){return e}}function h(e,t){try{return v(e,m,t)}catch(e){return e}}function v(e,t,r){return w(k(e.filter(I).map(function(e){return t(e.value,r,e.path)})||[]))}function m(e,t,r){return r=r||[],Array.isArray(e)?e.map(function(e,n){return m(e,t,r.concat(n))}):_(e)?(0,z.default)(e).map(function(n){return m(e[n],t,r.concat(n))}):t(e,r[r.length-1],r)}function y(e,t,r){r=r||[];var n=[];if(r.length>0){var a=t(e,r[r.length-1],r);a&&(n=n.concat(a))}if(Array.isArray(e)){var u=e.map(function(e,n){return y(e,t,r.concat(n))});u&&(n=n.concat(u))}else if(_(e)){var i=(0,z.default)(e).map(function(n){return y(e[n],t,r.concat(n))});i&&(n=n.concat(i))}return n=k(n)}function g(e,t){if(!Array.isArray(t))return!1;for(var r=0,n=t.length;r<n;r++)if(t[r]!==e[r])return!1;return!0}function b(e,t){return t.reduce(function(e,t){return void 0!==t&&e?e[t]:e},e)}function P(e){return w(k(x(e)))}function x(e){return Array.isArray(e)?e:[e]}function k(e){var t;return(t=[]).concat.apply(t,(0,N.default)(e.map(function(e){return Array.isArray(e)?k(e):e})))}function w(e){return e.filter(function(e){return void 0!==e})}function _(e){return e&&"object"===(void 0===e?"undefined":(0,D.default)(e))}function A(e){return _(e)&&M(e.then)}function M(e){return e&&"function"==typeof e}function q(e){return e instanceof Error}function O(e){if(T(e)){var t=e.op;return"add"===t||"remove"===t||"replace"===t}return!1}function E(e){return V.default.isGeneratorFunction(e)}function j(e){return O(e)||T(e)&&"mutation"===e.type}function I(e){return j(e)&&("add"===e.op||"replace"===e.op||"merge"===e.op||"mergeDeep"===e.op)}function C(e){return T(e)&&"context"===e.type}function T(e){return e&&"object"===(void 0===e?"undefined":(0,D.default)(e))}Object.defineProperty(t,"__esModule",{value:!0});var R=r(5),D=n(R),F=r(31),N=n(F),S=r(0),z=n(S),H=r(1),U=n(H),B=r(34),L=n(B),J=r(14),V=n(J),$=r(33),G=n($);t.default={add:i,replace:s,remove:c,merge:l,mergeDeep:f,context:p,getIn:b,applyPatch:a,parentPathMatch:g,flatten:k,fullyNormalizeArray:P,normalizeArray:x,isPromise:A,forEachNew:d,forEachNewPrimitive:h,isJsonPatch:O,isContextPatch:C,isPatch:T,isMutation:j,isAdditiveMutation:I,isGenerator:E,isFunction:M,isObject:_,isError:q}},function(e,t){e.exports=__webpack_require__(121)},function(e,t){e.exports=__webpack_require__(125)},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"object"===(void 0===e?"undefined":(0,P.default)(e))&&(t=e,e=t.url),t.headers=t.headers||{},O.mergeInQueryOrForm(t),t.requestInterceptor&&(t=t.requestInterceptor(t)||t),/multipart\/form-data/i.test(t.headers["content-type"]||t.headers["Content-Type"])&&(delete t.headers["content-type"],delete t.headers["Content-Type"]),fetch(t.url,t).then(function(r){var n=O.serializeRes(r,e,t).then(function(e){return t.responseInterceptor&&(e=t.responseInterceptor(e)||e),e});if(!r.ok){var a=new Error(r.statusText);return a.statusCode=a.status=r.status,n.then(function(e){throw a.response=e,a},function(e){throw a.responseError=e,a})}return n})}function u(e){return/json/.test(e)||/xml/.test(e)||/yaml/.test(e)||/text/.test(e)}function i(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.loadSpec,a=void 0!==n&&n,i={ok:e.ok,url:e.url||t,status:e.status,statusText:e.statusText,headers:o(e.headers)},s=a||u(i.headers["content-type"]);return(s?e.text:e.blob||e.buffer).call(e).then(function(e){if(i.text=e,i.data=e,s)try{var t=_.default.safeLoad(e);i.body=t,i.obj=t}catch(e){i.parseError=e}return i})}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={};return"function"==typeof e.forEach?(e.forEach(function(e,r){void 0!==t[r]?(t[r]=Array.isArray(t[r])?t[r]:[t[r]],t[r].push(e)):t[r]=e}),t):t}function s(e){return"undefined"!=typeof File?e instanceof File:null!==e&&"object"===(void 0===e?"undefined":(0,P.default)(e))&&"function"==typeof e.pipe}function c(e,t){var r=e.value,n=e.collectionFormat,a=e.allowEmptyValue,u={csv:",",ssv:"%20",tsv:"%09",pipes:"|"};if(void 0===r&&a)return"";if(s(r))return r;var i=encodeURIComponent;return t&&(i=(0,q.default)(r)?function(e){return e}:function(e){return(0,g.default)(e)}),r&&!Array.isArray(r)?i(r):Array.isArray(r)&&!n?r.map(i).join(","):"multi"===n?r.map(i):r.map(i).join(u[n])}function l(e){var t=(0,m.default)(e).reduce(function(t,r){var n=e[r],a=encodeURIComponent(r),u=function(e){return e&&"object"===(void 0===e?"undefined":(0,P.default)(e))}(n)&&!Array.isArray(n);return t[a]=c(u?n:{value:n}),t},{});return k.default.stringify(t,{encode:!1,indices:!1})||""}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.url,n=void 0===t?"":t,a=e.query,u=e.form;if(u){var i=(0,m.default)(u).some(function(e){return s(u[e].value)}),o=e.headers["content-type"]||e.headers["Content-Type"];if(i||/multipart\/form-data/i.test(o)){var f=r(35);e.body=new f,(0,m.default)(u).forEach(function(t){e.body.append(t,c(u[t],!0))})}else e.body=l(u);delete e.form}if(a){var p=n.split("?"),d=(0,h.default)(p,2),v=d[0],y=d[1],g="";if(y){var b=k.default.parse(y);(0,m.default)(a).forEach(function(e){return delete b[e]}),g=k.default.stringify(b,{encode:!0})}var P=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];var n=t.filter(function(e){return e}).join("&");return n?"?"+n:""}(g,l(a));e.url=v+P,delete e.query}return e}function p(e,t,r){return r=r||function(e){return e},t=t||function(e){return e},function(n){return"string"==typeof n&&(n={url:n}),O.mergeInQueryOrForm(n),n=t(n),r(e(n))}}Object.defineProperty(t,"__esModule",{value:!0}),t.self=void 0;var d=r(30),h=n(d),v=r(0),m=n(v),y=r(7),g=n(y),b=r(5),P=n(b);t.default=a,t.serializeRes=i,t.serializeHeaders=o,t.encodeFormOrQuery=l,t.mergeInQueryOrForm=f,t.makeHttp=p,r(15);var x=r(44),k=n(x),w=r(36),_=n(w),A=r(8),M=(n(A),r(42)),q=n(M),O=t.self={serializeRes:i,mergeInQueryOrForm:f}},function(e,t){e.exports=__webpack_require__(111)},function(e,t){e.exports=__webpack_require__(284)},function(e,t){e.exports=__webpack_require__(309)},function(e,t){e.exports=__webpack_require__(78)},function(e,t){e.exports=__webpack_require__(115)},function(e,t){e.exports=__webpack_require__(119)},function(e,t){e.exports=__webpack_require__(120)},function(e,t){e.exports=__webpack_require__(126)},function(e,t){e.exports=__webpack_require__(181)},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"==typeof e?r.url=e:r=e,!(this instanceof a))return new a(r);(0,c.default)(this,r);var n=this.resolve().then(function(){return t.disableInterfaces||(0,c.default)(t,a.makeApisTagOperation(t)),t});return n.client=this,n}var u=r(4),i=n(u),o=r(37),s=(n(o),r(8)),c=n(s),l=r(6),f=n(l),p=r(19),d=n(p),h=r(9),v=n(h),m=r(18),y=r(17),g=r(2);a.http=f.default,a.makeHttp=l.makeHttp.bind(null,a.http),a.resolve=d.default,a.execute=y.execute,a.serializeRes=l.serializeRes,a.serializeHeaders=l.serializeHeaders,a.clearCache=p.clearCache,a.parameterBuilders=y.PARAMETER_BUILDERS,a.makeApisTagOperation=m.makeApisTagOperation,a.buildRequest=y.buildRequest,a.helpers={opId:g.opId},e.exports=a,a.prototype={http:f.default,execute:function(e){return this.applyDefaults(),a.execute((0,i.default)({spec:this.spec,http:this.http.bind(this),securities:{authorized:this.authorizations}},e))},resolve:function(){var e=this;return a.resolve({spec:this.spec,url:this.url,allowMetaPatches:this.allowMetaPatches}).then(function(t){return e.originalSpec=e.spec,e.spec=t.spec,e.errors=t.errors,e})}},a.prototype.applyDefaults=function(){var e=this.spec,t=this.url;if(t&&t.startsWith("http")){var r=v.default.parse(t);e.host||(e.host=r.host),e.schemes||(e.schemes=[r.protocol.replace(":","")]),e.basePath||(e.basePath="/")}}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e){var t=e.http,r=e.fetch,n=e.spec,a=e.operationId,u=e.pathName,i=e.method,o=e.parameters,s=e.securities,c=(0,P.default)(e,["http","fetch","spec","operationId","pathName","method","parameters","securities"]);t=t||r||T.default,u&&i&&!a&&(a=(0,R.legacyIdFromPathMethod)(u,i));var l=F.buildRequest((0,g.default)({spec:n,operationId:a,parameters:o,securities:s},c));return l.body&&((0,A.default)(l.body)||(0,q.default)(l.body))&&(l.body=(0,m.default)(l.body)),t(l)}function u(e){var t=e.spec,r=e.operationId,n=e.parameters,a=e.securities,u=e.requestContentType,i=e.responseContentType,o=e.parameterBuilders,s=e.scheme,c=e.requestInterceptor,l=e.responseInterceptor,d=e.contextUrl;o=o||N;var h={url:f({spec:t,scheme:s,contextUrl:d}),credentials:"same-origin",headers:{}};if(c&&(h.requestInterceptor=c),l&&(h.responseInterceptor=l),!r)return h;var v=(0,R.getOperationRaw)(t,r),m=v.operation,y=void 0===m?{}:m,g=v.method,b=v.pathName;return h.url+=b,h.method=(""+g).toUpperCase(),n=n||{},i&&(h.headers.accept=i),D(y.parameters).concat(D(t.paths[b].parameters)).forEach(function(e){var r=o[e.in],a=void 0;if("body"===e.in&&e.schema&&e.schema.properties&&(a=n),a=e&&e.name&&n[e.name],void 0!==e.default&&void 0===a&&(a=e.default),void 0===a&&e.required&&!e.allowEmptyValue)throw new Error("Required parameter "+e.name+" is not provided");r&&r({req:h,parameter:e,value:a,operation:y,spec:t})}),h=p({request:h,securities:a,operation:y,spec:t}),(h.body||h.form)&&(u?h.headers["content-type"]=u:Array.isArray(y.consumes)?h.headers["content-type"]=y.consumes[0]:Array.isArray(t.consumes)?h.headers["content-type"]=t.consumes[0]:y.parameters.filter(function(e){return"file"===e.type}).length?h.headers["content-type"]="multipart/form-data":y.parameters.filter(function(e){return"formData"===e.in}).length&&(h.headers["content-type"]="application/x-www-form-urlencoded")),(0,C.mergeInQueryOrForm)(h),h}function i(e){var t=e.req,r=e.value;t.body=r}function o(e){var t=e.req,r=e.value,n=e.parameter;t.form=t.form||{},(r||n.allowEmptyValue)&&(t.form[n.name]={value:r,allowEmptyValue:n.allowEmptyValue,collectionFormat:n.collectionFormat})}function s(e){var t=e.req,r=e.parameter,n=e.value;t.headers=t.headers||{},void 0!==n&&(t.headers[r.name]=n)}function c(e){var t=e.req,r=e.value,n=e.parameter;t.url=t.url.replace("{"+n.name+"}",encodeURIComponent(r))}function l(e){var t=e.req,r=e.value,n=e.parameter;if(t.query=t.query||{},r)t.query[n.name]={collectionFormat:n.collectionFormat,value:r};else if(n.allowEmptyValue){var a=n.name;t.query[a]=t.query[a]||{},t.query[a].allowEmptyValue=!0}}function f(e){var t=e.spec,r=e.scheme,n=e.contextUrl,a=void 0===n?"":n,u=I.default.parse(a),i=Array.isArray(t.schemes)?t.schemes[0]:null,o=r||i||S(u.protocol)||"http",s=t.host||u.host||"",c=t.basePath||"";if(o&&s){var l=o+"://"+(s+c);return"/"===l[l.length-1]?l.slice(0,-1):l}return""}function p(e){var t=e.request,r=e.securities,n=void 0===r?{}:r,a=e.operation,u=void 0===a?{}:a,i=e.spec,o=(0,k.default)({},t),s=n.authorized,c=void 0===s?{}:s,l=n.specSecurity,f=void 0===l?{}:l,p=u.security||f,d=c&&!!(0,h.default)(c).length,v=i.securityDefinitions;return o.headers=o.headers||{},o.query=o.query||{},(0,h.default)(n).length&&d&&p&&(!Array.isArray(u.security)||u.security.length)?(p.forEach(function(e,t){for(var r in e){var n=c[r];if(n){var a=n.token,u=n.value||n,i=v[r],s=i.type,l=a&&a.access_token,f=a&&a.token_type;if(n)if("apiKey"===s){var p="query"===i.in?"query":"headers";o[p]=o[p]||{},o[p][i.name]=u}else"basic"===s?u.header?o.headers.authorization=u.header:(u.base64=(0,E.default)(u.username+":"+u.password),o.headers.authorization="Basic "+u.base64):"oauth2"===s&&(o.headers.authorization=(f||"Bearer")+" "+l)}}}),o):t}Object.defineProperty(t,"__esModule",{value:!0}),t.PARAMETER_BUILDERS=t.self=void 0;var d=r(0),h=n(d),v=r(7),m=n(v),y=r(4),g=n(y),b=r(29),P=n(b);t.execute=a,t.buildRequest=u,t.bodyBuilder=i,t.formDataBuilder=o,t.headerBuilder=s,t.pathBuilder=c,t.queryBuilder=l,t.baseUrl=f,t.applySecurities=p;var x=r(8),k=n(x),w=r(38),_=(n(w),r(41)),A=n(_),M=r(39),q=n(M),O=r(32),E=n(O),j=r(9),I=n(j),C=r(6),T=n(C),R=r(2),D=function(e){return Array.isArray(e)?e:[]},F=t.self={buildRequest:u},N=t.PARAMETER_BUILDERS={body:i,header:s,query:l,path:c,formData:o},S=function(e){return e?e.replace(/\W/g,""):null}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){var r=t.pathName,n=t.method,a=t.operationId;return function(t){var u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.execute((0,c.default)({spec:e.spec},(0,f.default)(e,"requestInterceptor","responseInterceptor"),{pathName:r,method:n,parameters:t,operationId:a},u))}}}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=v.makeExecute(e),r=v.mapTagOperations({spec:e.spec,cb:t}),n={};for(var a in r){n[a]={operations:{}};for(var u in r[a])n[a].operations[u]={execute:r[a][u]}}return{apis:n}}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=v.makeExecute(e);return{apis:v.mapTagOperations({spec:e.spec,cb:t})}}function o(e){var t=e.spec,r=e.cb,n=void 0===r?d:r,a=e.defaultTag,u=void 0===a?"default":a,i={},o={};return(0,p.eachOperation)(t,function(e){var r=e.pathName,a=e.method,s=e.operation;(s.tags?h(s.tags):[u]).forEach(function(e){if("string"==typeof e){var u=o[e]=o[e]||{},c=(0,p.opId)(s,r,a),l=n({spec:t,pathName:r,method:a,operation:s,operationId:c});if(i[c])i[c]=i[c]+1,u[""+c+i[c]]=l;else if(void 0!==u[c]){var f=i[c]||1;i[c]=f+1,u[""+c+i[c]]=l;var d=u[c];delete u[c],u[""+c+f]=d}else u[c]=l}})}),o}Object.defineProperty(t,"__esModule",{value:!0}),t.self=void 0;var s=r(4),c=n(s);t.makeExecute=a,t.makeApisTagOperationsOperationExecute=u,t.makeApisTagOperation=i,t.mapTagOperations=o;var l=r(43),f=n(l),p=r(2),d=function(){return null},h=function(e){return Array.isArray(e)?e:[e]},v=t.self={mapTagOperations:o,makeExecute:a}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e){return function(t){return e({url:t,loadSpec:!0,headers:{Accept:"application/json"}}).then(function(e){return e.body})}}function u(){c.plugins.refs.clearCache()}function i(e){function t(e){o&&(c.plugins.refs.docCache[o]=e),c.plugins.refs.fetchJSON=a(r);var t=[c.plugins.refs];return"function"==typeof m&&t.push(c.plugins.parameters),"function"==typeof v&&t.push(c.plugins.properties),"strict"!==p&&t.push(c.plugins.allOf),(0,l.default)({spec:e,context:{baseDoc:o},plugins:t,allowMetaPatches:h,parameterMacro:m,modelPropertyMacro:v}).then(f.normalizeSwagger)}var r=e.http,n=e.fetch,u=e.spec,i=e.url,o=e.baseDoc,p=e.mode,d=e.allowMetaPatches,h=void 0===d||d,v=e.modelPropertyMacro,m=e.parameterMacro;return o=o||i,r=n||r||s.default,u?t(u):a(r)(o).then(t)}Object.defineProperty(t,"__esModule",{value:!0}),t.makeFetchJSON=a,t.clearCache=u,t.default=i;var o=r(6),s=n(o),c=r(20),l=n(c),f=r(2)},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e){return new D(e).dispatch()}Object.defineProperty(t,"__esModule",{value:!0}),t.plugins=t.SpecMap=void 0;var u=r(7),i=n(u),o=r(11),s=n(o),c=r(14),l=n(c),f=r(0),p=n(f),d=r(10),h=n(d),v=r(27),m=n(v),y=r(1),g=n(y),b=r(12),P=n(b),x=r(13),k=n(x);t.default=a;var w=r(3),_=n(w),A=r(26),M=n(A),q=r(21),O=n(q),E=r(24),j=n(E),I=r(25),C=n(I),T=r(22),R=n(T),D=function(){function e(t){(0,P.default)(this,e),(0,g.default)(this,{spec:"",debugLevel:"info",plugins:[],pluginHistory:{},errors:[],mutations:[],promisedPatches:[],state:{},patches:[],context:{},contextTree:new R.default,showDebug:!1,allPatches:[],pluginProp:"specMap",libMethods:(0,g.default)((0,m.default)(this),_.default),allowMetaPatches:!1},t),this.get=this._get.bind(this),this.getContext=this._getContext.bind(this),this.hasRun=this._hasRun.bind(this),this.wrappedPlugins=this.plugins.map(this.wrapPlugin.bind(this)).filter(_.default.isFunction),this.patches.push(_.default.add([],this.spec)),this.patches.push(_.default.context([],this.context)),this.updatePatches(this.patches)}return(0,k.default)(e,[{key:"debug",value:function(e){if(this.debugLevel===e){for(var t,r=arguments.length,n=Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];(t=console).log.apply(t,n)}}},{key:"verbose",value:function(e){if("verbose"===this.debugLevel){for(var t,r=arguments.length,n=Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];(t=console).log.apply(t,["["+e+"]   "].concat(n))}}},{key:"wrapPlugin",value:function(e,t){var r=null,n=void 0;return e[this.pluginProp]?(r=e,n=e[this.pluginProp]):_.default.isFunction(e)?n=e:_.default.isObject(e)&&(n=function(e){return l.default.mark(function t(r,n){var a,u,i,o,s,c,f,d;return l.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:d=function t(r,u,i){var o,s,c,f,d,v,m,y,g;return l.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(_.default.isObject(r)){a.next=6;break}if(e.key!==u[u.length-1]){a.next=4;break}return a.next=4,e.plugin(r,e.key,u,n);case 4:a.next=38;break;case 6:o=u[u.length-1],s=!0,c=!1,f=void 0,a.prev=10,d=(0,h.default)((0,p.default)(r));case 12:if(s=(v=d.next()).done){a.next=24;break}if(m=v.value,y=r[m],g=u.concat(m),!_.default.isObject(y)){a.next=18;break}return a.delegateYield(t(y,g,i),"t0",18);case 18:if("properties"===o||m!==e.key){a.next=21;break}return a.next=21,e.plugin(y,m,g,n,i);case 21:s=!0,a.next=12;break;case 24:a.next=30;break;case 26:a.prev=26,a.t1=a.catch(10),c=!0,f=a.t1;case 30:a.prev=30,a.prev=31,!s&&d.return&&d.return();case 33:if(a.prev=33,!c){a.next=36;break}throw f;case 36:return a.finish(33);case 37:return a.finish(30);case 38:case"end":return a.stop()}},a[0],this,[[10,26,30,38],[31,,33,37]])},a=[d].map(l.default.mark),u=!0,i=!1,o=void 0,t.prev=5,s=(0,h.default)(r.filter(_.default.isAdditiveMutation));case 7:if(u=(c=s.next()).done){t.next=13;break}return f=c.value,t.delegateYield(d(f.value,f.path,f),"t0",10);case 10:u=!0,t.next=7;break;case 13:t.next=19;break;case 15:t.prev=15,t.t1=t.catch(5),i=!0,o=t.t1;case 19:t.prev=19,t.prev=20,!u&&s.return&&s.return();case 22:if(t.prev=22,!i){t.next=25;break}throw o;case 25:return t.finish(22);case 26:return t.finish(19);case 27:case"end":return t.stop()}},t,this,[[5,15,19,27],[20,,22,26]])})}(e)),(0,g.default)(n.bind(r),{pluginName:e.name||t,isGenerator:_.default.isGenerator(n)})}},{key:"nextPlugin",value:function(){var e=this;return this.wrappedPlugins.find(function(t){return e.getMutationsForPlugin(t).length>0})}},{key:"nextPromisedPatch",value:function(){if(this.promisedPatches.length>0)return s.default.race(this.promisedPatches.map(function(e){return e.value}))}},{key:"getPluginHistory",value:function(e){var t=this.getPluginName(e);return this.pluginHistory[t]||[]}},{key:"getPluginRunCount",value:function(e){return this.getPluginHistory(e).length}},{key:"getPluginHistoryTip",value:function(e){var t=this.getPluginHistory(e);return t&&t[t.length-1]||{}}},{key:"getPluginMutationIndex",value:function(e){var t=this.getPluginHistoryTip(e).mutationIndex;return"number"!=typeof t?-1:t}},{key:"getPluginName",value:function(e){return e.pluginName}},{key:"updatePluginHistory",value:function(e,t){var r=this.getPluginName(e);(this.pluginHistory[r]=this.pluginHistory[r]||[]).push(t)}},{key:"updatePatches",value:function(e,t){var r=this;_.default.normalizeArray(e).forEach(function(e){if(e instanceof Error)return void r.errors.push(e);try{if(!_.default.isObject(e))return void r.debug("updatePatches","Got a non-object patch",e);if(r.showDebug&&r.allPatches.push(e),_.default.isPromise(e.value))return r.promisedPatches.push(e),void r.promisedPatchThen(e);if(_.default.isContextPatch(e))return void r.setContext(e.path,e.value);if(_.default.isMutation(e))return void r.updateMutations(e)}catch(e){r.errors.push(e)}})}},{key:"updateMutations",value:function(e){_.default.applyPatch(this.state,e,{allowMetaPatches:this.allowMetaPatches})&&this.mutations.push(e)}},{key:"removePromisedPatch",value:function(e){var t=this.promisedPatches.indexOf(e);if(t<0)return void this.debug("Tried to remove a promisedPatch that isn't there!");this.promisedPatches.splice(t,1)}},{key:"promisedPatchThen",value:function(e){var t=this;return e.value=e.value.then(function(r){var n=(0,g.default)({},e,{value:r});t.removePromisedPatch(e),t.updatePatches(n)}).catch(function(r){t.removePromisedPatch(e),t.updatePatches(r)})}},{key:"getMutations",value:function(e,t){return e=e||0,"number"!=typeof t&&(t=this.mutations.length),this.mutations.slice(e,t)}},{key:"getCurrentMutations",value:function(){return this.getMutationsForPlugin(this.getCurrentPlugin())}},{key:"getMutationsForPlugin",value:function(e){var t=this.getPluginMutationIndex(e);return this.getMutations(t+1)}},{key:"getCurrentPlugin",value:function(){return this.currentPlugin}},{key:"getPatchesOfType",value:function(e,t){return e.filter(t)}},{key:"getLib",value:function(){return this.libMethods}},{key:"_get",value:function(e){return _.default.getIn(this.state,e)}},{key:"_getContext",value:function(e){return this.contextTree.get(e)}},{key:"setContext",value:function(e,t){return this.contextTree.set(e,t)}},{key:"_hasRun",value:function(e){return this.getPluginRunCount(this.getCurrentPlugin())>(e||0)}},{key:"_clone",value:function(e){return JSON.parse((0,i.default)(e))}},{key:"dispatch",value:function(){function e(e){e&&(e=_.default.fullyNormalizeArray(e),r.updatePatches(e,n))}var t=this,r=this,n=this.nextPlugin();if(!n){var a=this.nextPromisedPatch();if(a)return a.then(function(){return t.dispatch()}).catch(function(){return t.dispatch()});var u={spec:this.state,errors:this.errors};return this.showDebug&&(u.patches=this.allPatches),s.default.resolve(u)}if(r.pluginCount=r.pluginCount||{},r.pluginCount[n]=(r.pluginCount[n]||0)+1,r.pluginCount[n]>100)return s.default.resolve({spec:r.state,errors:r.errors.concat(new Error("We've reached a hard limit of 100 plugin runs"))});if(n!==this.currentPlugin&&this.promisedPatches.length){var i=this.promisedPatches.map(function(e){return e.value});return s.default.all(i.map(function(e){return e.then(Function,Function)})).then(function(){return t.dispatch()})}return function(){r.currentPlugin=n;var t=r.getCurrentMutations(),a=r.mutations.length-1;try{if(n.isGenerator){var u=!0,i=!1,o=void 0;try{for(var s,c=(0,h.default)(n(t,r.getLib()));!(u=(s=c.next()).done);u=!0){e(s.value)}}catch(e){i=!0,o=e}finally{try{!u&&c.return&&c.return()}finally{if(i)throw o}}}else{e(n(t,r.getLib()))}}catch(t){e([(0,g.default)((0,m.default)(t),{plugin:n})])}finally{r.updatePluginHistory(n,{mutationIndex:a})}return r.dispatch()}()}}]),e}(),F={refs:M.default,allOf:O.default,parameters:j.default,properties:C.default};t.SpecMap=D,t.plugins=F},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={key:"allOf",plugin:function(e,t,r,n,a){if(!a.meta||!a.meta.$$ref){if(!Array.isArray(e)){var u=new TypeError("allOf must be an array");return u.fullPath=r,u}var i=r.slice(0,-1),o=!1;return[n.replace(i,{})].concat(e.map(function(e,t){if(!n.isObject(e)){if(o)return null;o=!0;var a=new TypeError("Elements in allOf must be objects");return a.fullPath=r,a}return n.mergeDeep(i,e)}))}}}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){return u({children:{}},e,t)}function u(e,t,r){return e.value=t||{},e.protoValue=r?(0,c.default)({},r.protoValue,e.value):e.value,(0,o.default)(e.children).forEach(function(t){var r=e.children[t];e.children[t]=u(r,r.value,e)}),e}Object.defineProperty(t,"__esModule",{value:!0});var i=r(0),o=n(i),s=r(4),c=n(s),l=r(12),f=n(l),p=r(13),d=n(p),h=function(){function e(t){(0,f.default)(this,e),this.root=a(t||{})}return(0,d.default)(e,[{key:"set",value:function(e,t){var r=this.getParent(e,!0);if(!r)return void u(this.root,t,null);var n=e[e.length-1],i=r.children;if(i[n])return void u(i[n],t,r);i[n]=a(t,r)}},{key:"get",value:function(e){if(e=e||[],e.length<1)return this.root.value;for(var t=this.root,r=void 0,n=void 0,a=0;a<e.length&&(n=e[a],r=t.children,r[n]);a++)t=r[n];return t&&t.protoValue}},{key:"getParent",value:function(e,t){return!e||e.length<1?null:e.length<2?this.root:e.slice(0,-1).reduce(function(e,r){if(!e)return e;var n=e.children;return!n[r]&&t&&(n[r]=a(null,e)),n[r]},this.root)}}]),e}();t.default=h},function(e,t,r){"use strict";function n(e,t){function r(){Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack;for(var e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];this.message=r[0],t&&t.apply(this,r)}return r.prototype=new Error,r.prototype.name=e,r.prototype.constructor=r,r}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(1),u=n(a),i=r(3),o=n(i);t.default={key:"parameters",plugin:function(e,t,r,n,a){if(Array.isArray(e)&&e.length){var i=(0,u.default)([],e),s=r.slice(0,-1),c=(0,u.default)({},o.default.getIn(n.spec,s));e.forEach(function(e,t){try{i[t].default=n.parameterMacro(c,e)}catch(e){var a=new Error(e);return a.fullPath=r,a}});return o.default.replace(r,i)}return o.default.replace(r,e)}}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(1),u=n(a),i=r(3),o=n(i);t.default={key:"properties",plugin:function(e,t,r,n){var a=(0,u.default)({},e);for(var i in e)try{a[i].default=n.modelPropertyMacro(a[i])}catch(e){var s=new Error(e);return s.fullPath=r,s}return o.default.replace(r,a)}}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!N.test(e)){if(!t)throw new S("Tried to resolve a relative URL, without having a basePath. path: '"+e+"' basePath: '"+t+"'");return C.default.resolve(t,e)}return e}function u(e,t){return new S("Could not resolve reference because of: "+e.message,t,e)}function i(e){return(e+"").split("#")}function o(e,t){var r=z[e];if(r&&!R.default.isPromise(r))try{var n=f(t,r);return(0,O.default)(_.default.resolve(n),{__value:n})}catch(e){return _.default.reject(e)}return c(e).then(function(e){return f(t,e)})}function s(e){void 0!==e?delete z[e]:(0,k.default)(z).forEach(function(e){delete z[e]})}function c(e){var t=z[e];return t?R.default.isPromise(t)?t:_.default.resolve(t):(z[e]=B.fetchJSON(e).then(function(t){return z[e]=t,t}),z[e])}function l(e){return(0,j.default)(e,{headers:{Accept:"application/json"},loadSpec:!0}).then(function(e){return e.json()})}function f(e,t){var r=p(e);if(r.length<1)return t;var n=R.default.getIn(t,r);if(void 0===n)throw new S("Could not resolve pointer: "+e+" does not exist in document",{pointer:e});return n}function p(e){if("string"!=typeof e)throw new TypeError("Expected a string, got a "+(void 0===e?"undefined":(0,P.default)(e)));return"/"===e[0]&&(e=e.substr(1)),""===e?[]:e.split("/").map(d)}function d(e){return"string"!=typeof e?e:e.replace(/~1/g,"/").replace(/~0/g,"~")}function h(e){return e.replace(/~/g,"~0").replace(/\//g,"~1")}function v(e){return 0===e.length?"":"/"+e.map(h).join("/")}function m(e,t){if(L(t))return!0;var r=e.charAt(t.length);return 0===e.indexOf(t)&&(!r||"/"===r||"#"===r)}function y(e,t,r,n){var a=H.get(n);a||(a={},H.set(n,a));var u=v(r),i=(t||"<specmap-base>")+"#"+e;if(t==n.contextTree.get([]).baseDoc&&m(u,e))return!0;var o="";if(r.some(function(e){return o=o+"/"+h(e),a[o]&&a[o].some(function(e){return m(e,i)||m(i,e)})}))return!0;a[u]=(a[u]||[]).concat(i)}function g(e,t){function r(e){return R.default.isObject(e)&&(n.indexOf(e)>=0||(0,k.default)(e).some(function(t){return r(e[t])}))}var n=[e];return t.path.reduce(function(e,t){return n.push(e[t]),e[t]},e),r(t.value)}Object.defineProperty(t,"__esModule",{value:!0});var b=r(5),P=n(b),x=r(0),k=n(x),w=r(11),_=n(w),A=r(28),M=n(A),q=r(1),O=n(q),E=r(15),j=n(E),I=r(9),C=n(I),T=r(3),R=n(T),D=r(23),F=n(D),N=new RegExp("^([a-z]+://|//)","i"),S=(0,F.default)("JSONRefError",function(e,t,r){this.originalError=r,(0,O.default)(this,t||{})}),z={},H=new M.default,U={key:"$ref",plugin:function(e,t,r,n){var s=r.slice(0,-1),c=n.getContext(r).baseDoc;if("string"!=typeof e)return new S("$ref: must be a string (JSON-Ref)",{$ref:e,baseDoc:c,fullPath:r});var l=i(e),f=l[0],d=l[1]||"",h=void 0;try{h=c||f?a(f,c):null}catch(t){return u(t,{pointer:d,$ref:e,basePath:h,fullPath:r})}var v=void 0,m=void 0;if(!y(d,h,s,n)){if(null==h?(m=p(d),void 0===(v=n.get(m))&&(v=new S("Could not resolve reference: "+e,{pointer:d,$ref:e,baseDoc:c,fullPath:r}))):(v=o(h,d),v=null!=v.__value?v.__value:v.catch(function(t){throw u(t,{pointer:d,$ref:e,baseDoc:c,fullPath:r})})),v instanceof Error)return[R.default.remove(r),v];var b=R.default.replace(s,v,{$$ref:e});return h&&h!==c?[b,R.default.context(s,{baseDoc:h})]:g(n.state,b)?void 0:b}}},B=(0,O.default)(U,{docCache:z,absoluteify:a,clearCache:s,JSONRefError:S,wrapError:u,getDoc:c,split:i,extractFromDoc:o,fetchJSON:l,extract:f,jsonPointerToArray:p,unescapeJsonPointerToken:d});t.default=B;var L=function(e){return!e||"/"===e||"#"===e}},function(e,t){e.exports=__webpack_require__(112)},function(e,t){e.exports=__webpack_require__(118)},function(e,t){e.exports=__webpack_require__(122)},function(e,t){e.exports=__webpack_require__(123)},function(e,t){e.exports=__webpack_require__(124)},function(e,t){e.exports=__webpack_require__(128)},function(e,t){e.exports=__webpack_require__(176)},function(e,t){e.exports=__webpack_require__(178)},function(e,t){e.exports=__webpack_require__(182)},function(e,t){e.exports=__webpack_require__(183)},function(e,t){e.exports=__webpack_require__(285)},function(e,t){e.exports=__webpack_require__(288)},function(e,t){e.exports=__webpack_require__(13)},function(e,t){e.exports=__webpack_require__(22)},function(e,t){e.exports=__webpack_require__(292)},function(e,t){e.exports=__webpack_require__(293)},function(e,t){e.exports=__webpack_require__(295)},function(e,t){e.exports=__webpack_require__(300)},function(e,t,r){e.exports=r(16)}]);

/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	'use strict';

	var punycode = __webpack_require__(299);
	var util = __webpack_require__(310);

	exports.parse = urlParse;
	exports.resolve = urlResolve;
	exports.resolveObject = urlResolveObject;
	exports.format = urlFormat;

	exports.Url = Url;

	function Url() {
	  this.protocol = null;
	  this.slashes = null;
	  this.auth = null;
	  this.host = null;
	  this.port = null;
	  this.hostname = null;
	  this.hash = null;
	  this.search = null;
	  this.query = null;
	  this.pathname = null;
	  this.path = null;
	  this.href = null;
	}

	// Reference: RFC 3986, RFC 1808, RFC 2396

	// define these here so at least they only have to be
	// compiled once on the first module load.
	var protocolPattern = /^([a-z0-9.+-]+:)/i,
	    portPattern = /:[0-9]*$/,

	    // Special case for a simple path URL
	    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

	    // RFC 2396: characters reserved for delimiting URLs.
	    // We actually just auto-escape these.
	    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

	    // RFC 2396: characters not allowed for various reasons.
	    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

	    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
	    autoEscape = ['\''].concat(unwise),
	    // Characters that are never ever allowed in a hostname.
	    // Note that any invalid chars are also handled, but these
	    // are the ones that are *expected* to be seen, so we fast-path
	    // them.
	    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
	    hostEndingChars = ['/', '?', '#'],
	    hostnameMaxLen = 255,
	    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
	    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
	    // protocols that can allow "unsafe" and "unwise" chars.
	    unsafeProtocol = {
	      'javascript': true,
	      'javascript:': true
	    },
	    // protocols that never have a hostname.
	    hostlessProtocol = {
	      'javascript': true,
	      'javascript:': true
	    },
	    // protocols that always contain a // bit.
	    slashedProtocol = {
	      'http': true,
	      'https': true,
	      'ftp': true,
	      'gopher': true,
	      'file': true,
	      'http:': true,
	      'https:': true,
	      'ftp:': true,
	      'gopher:': true,
	      'file:': true
	    },
	    querystring = __webpack_require__(305);

	function urlParse(url, parseQueryString, slashesDenoteHost) {
	  if (url && util.isObject(url) && url instanceof Url) return url;

	  var u = new Url;
	  u.parse(url, parseQueryString, slashesDenoteHost);
	  return u;
	}

	Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
	  if (!util.isString(url)) {
	    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
	  }

	  // Copy chrome, IE, opera backslash-handling behavior.
	  // Back slashes before the query string get converted to forward slashes
	  // See: https://code.google.com/p/chromium/issues/detail?id=25916
	  var queryIndex = url.indexOf('?'),
	      splitter =
	          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
	      uSplit = url.split(splitter),
	      slashRegex = /\\/g;
	  uSplit[0] = uSplit[0].replace(slashRegex, '/');
	  url = uSplit.join(splitter);

	  var rest = url;

	  // trim before proceeding.
	  // This is to support parse stuff like "  http://foo.com  \n"
	  rest = rest.trim();

	  if (!slashesDenoteHost && url.split('#').length === 1) {
	    // Try fast path regexp
	    var simplePath = simplePathPattern.exec(rest);
	    if (simplePath) {
	      this.path = rest;
	      this.href = rest;
	      this.pathname = simplePath[1];
	      if (simplePath[2]) {
	        this.search = simplePath[2];
	        if (parseQueryString) {
	          this.query = querystring.parse(this.search.substr(1));
	        } else {
	          this.query = this.search.substr(1);
	        }
	      } else if (parseQueryString) {
	        this.search = '';
	        this.query = {};
	      }
	      return this;
	    }
	  }

	  var proto = protocolPattern.exec(rest);
	  if (proto) {
	    proto = proto[0];
	    var lowerProto = proto.toLowerCase();
	    this.protocol = lowerProto;
	    rest = rest.substr(proto.length);
	  }

	  // figure out if it's got a host
	  // user@server is *always* interpreted as a hostname, and url
	  // resolution will treat //foo/bar as host=foo,path=bar because that's
	  // how the browser resolves relative URLs.
	  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
	    var slashes = rest.substr(0, 2) === '//';
	    if (slashes && !(proto && hostlessProtocol[proto])) {
	      rest = rest.substr(2);
	      this.slashes = true;
	    }
	  }

	  if (!hostlessProtocol[proto] &&
	      (slashes || (proto && !slashedProtocol[proto]))) {

	    // there's a hostname.
	    // the first instance of /, ?, ;, or # ends the host.
	    //
	    // If there is an @ in the hostname, then non-host chars *are* allowed
	    // to the left of the last @ sign, unless some host-ending character
	    // comes *before* the @-sign.
	    // URLs are obnoxious.
	    //
	    // ex:
	    // http://a@b@c/ => user:a@b host:c
	    // http://a@b?@c => user:a host:c path:/?@c

	    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
	    // Review our test case against browsers more comprehensively.

	    // find the first instance of any hostEndingChars
	    var hostEnd = -1;
	    for (var i = 0; i < hostEndingChars.length; i++) {
	      var hec = rest.indexOf(hostEndingChars[i]);
	      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
	        hostEnd = hec;
	    }

	    // at this point, either we have an explicit point where the
	    // auth portion cannot go past, or the last @ char is the decider.
	    var auth, atSign;
	    if (hostEnd === -1) {
	      // atSign can be anywhere.
	      atSign = rest.lastIndexOf('@');
	    } else {
	      // atSign must be in auth portion.
	      // http://a@b/c@d => host:b auth:a path:/c@d
	      atSign = rest.lastIndexOf('@', hostEnd);
	    }

	    // Now we have a portion which is definitely the auth.
	    // Pull that off.
	    if (atSign !== -1) {
	      auth = rest.slice(0, atSign);
	      rest = rest.slice(atSign + 1);
	      this.auth = decodeURIComponent(auth);
	    }

	    // the host is the remaining to the left of the first non-host char
	    hostEnd = -1;
	    for (var i = 0; i < nonHostChars.length; i++) {
	      var hec = rest.indexOf(nonHostChars[i]);
	      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
	        hostEnd = hec;
	    }
	    // if we still have not hit it, then the entire thing is a host.
	    if (hostEnd === -1)
	      hostEnd = rest.length;

	    this.host = rest.slice(0, hostEnd);
	    rest = rest.slice(hostEnd);

	    // pull out port.
	    this.parseHost();

	    // we've indicated that there is a hostname,
	    // so even if it's empty, it has to be present.
	    this.hostname = this.hostname || '';

	    // if hostname begins with [ and ends with ]
	    // assume that it's an IPv6 address.
	    var ipv6Hostname = this.hostname[0] === '[' &&
	        this.hostname[this.hostname.length - 1] === ']';

	    // validate a little.
	    if (!ipv6Hostname) {
	      var hostparts = this.hostname.split(/\./);
	      for (var i = 0, l = hostparts.length; i < l; i++) {
	        var part = hostparts[i];
	        if (!part) continue;
	        if (!part.match(hostnamePartPattern)) {
	          var newpart = '';
	          for (var j = 0, k = part.length; j < k; j++) {
	            if (part.charCodeAt(j) > 127) {
	              // we replace non-ASCII char with a temporary placeholder
	              // we need this to make sure size of hostname is not
	              // broken by replacing non-ASCII by nothing
	              newpart += 'x';
	            } else {
	              newpart += part[j];
	            }
	          }
	          // we test again with ASCII char only
	          if (!newpart.match(hostnamePartPattern)) {
	            var validParts = hostparts.slice(0, i);
	            var notHost = hostparts.slice(i + 1);
	            var bit = part.match(hostnamePartStart);
	            if (bit) {
	              validParts.push(bit[1]);
	              notHost.unshift(bit[2]);
	            }
	            if (notHost.length) {
	              rest = '/' + notHost.join('.') + rest;
	            }
	            this.hostname = validParts.join('.');
	            break;
	          }
	        }
	      }
	    }

	    if (this.hostname.length > hostnameMaxLen) {
	      this.hostname = '';
	    } else {
	      // hostnames are always lower case.
	      this.hostname = this.hostname.toLowerCase();
	    }

	    if (!ipv6Hostname) {
	      // IDNA Support: Returns a punycoded representation of "domain".
	      // It only converts parts of the domain name that
	      // have non-ASCII characters, i.e. it doesn't matter if
	      // you call it with a domain that already is ASCII-only.
	      this.hostname = punycode.toASCII(this.hostname);
	    }

	    var p = this.port ? ':' + this.port : '';
	    var h = this.hostname || '';
	    this.host = h + p;
	    this.href += this.host;

	    // strip [ and ] from the hostname
	    // the host field still retains them, though
	    if (ipv6Hostname) {
	      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
	      if (rest[0] !== '/') {
	        rest = '/' + rest;
	      }
	    }
	  }

	  // now rest is set to the post-host stuff.
	  // chop off any delim chars.
	  if (!unsafeProtocol[lowerProto]) {

	    // First, make 100% sure that any "autoEscape" chars get
	    // escaped, even if encodeURIComponent doesn't think they
	    // need to be.
	    for (var i = 0, l = autoEscape.length; i < l; i++) {
	      var ae = autoEscape[i];
	      if (rest.indexOf(ae) === -1)
	        continue;
	      var esc = encodeURIComponent(ae);
	      if (esc === ae) {
	        esc = escape(ae);
	      }
	      rest = rest.split(ae).join(esc);
	    }
	  }


	  // chop off from the tail first.
	  var hash = rest.indexOf('#');
	  if (hash !== -1) {
	    // got a fragment string.
	    this.hash = rest.substr(hash);
	    rest = rest.slice(0, hash);
	  }
	  var qm = rest.indexOf('?');
	  if (qm !== -1) {
	    this.search = rest.substr(qm);
	    this.query = rest.substr(qm + 1);
	    if (parseQueryString) {
	      this.query = querystring.parse(this.query);
	    }
	    rest = rest.slice(0, qm);
	  } else if (parseQueryString) {
	    // no query string, but parseQueryString still requested
	    this.search = '';
	    this.query = {};
	  }
	  if (rest) this.pathname = rest;
	  if (slashedProtocol[lowerProto] &&
	      this.hostname && !this.pathname) {
	    this.pathname = '/';
	  }

	  //to support http.request
	  if (this.pathname || this.search) {
	    var p = this.pathname || '';
	    var s = this.search || '';
	    this.path = p + s;
	  }

	  // finally, reconstruct the href based on what has been validated.
	  this.href = this.format();
	  return this;
	};

	// format a parsed object into a url string
	function urlFormat(obj) {
	  // ensure it's an object, and not a string url.
	  // If it's an obj, this is a no-op.
	  // this way, you can call url_format() on strings
	  // to clean up potentially wonky urls.
	  if (util.isString(obj)) obj = urlParse(obj);
	  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
	  return obj.format();
	}

	Url.prototype.format = function() {
	  var auth = this.auth || '';
	  if (auth) {
	    auth = encodeURIComponent(auth);
	    auth = auth.replace(/%3A/i, ':');
	    auth += '@';
	  }

	  var protocol = this.protocol || '',
	      pathname = this.pathname || '',
	      hash = this.hash || '',
	      host = false,
	      query = '';

	  if (this.host) {
	    host = auth + this.host;
	  } else if (this.hostname) {
	    host = auth + (this.hostname.indexOf(':') === -1 ?
	        this.hostname :
	        '[' + this.hostname + ']');
	    if (this.port) {
	      host += ':' + this.port;
	    }
	  }

	  if (this.query &&
	      util.isObject(this.query) &&
	      Object.keys(this.query).length) {
	    query = querystring.stringify(this.query);
	  }

	  var search = this.search || (query && ('?' + query)) || '';

	  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

	  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
	  // unless they had them to begin with.
	  if (this.slashes ||
	      (!protocol || slashedProtocol[protocol]) && host !== false) {
	    host = '//' + (host || '');
	    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
	  } else if (!host) {
	    host = '';
	  }

	  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
	  if (search && search.charAt(0) !== '?') search = '?' + search;

	  pathname = pathname.replace(/[?#]/g, function(match) {
	    return encodeURIComponent(match);
	  });
	  search = search.replace('#', '%23');

	  return protocol + host + pathname + search + hash;
	};

	function urlResolve(source, relative) {
	  return urlParse(source, false, true).resolve(relative);
	}

	Url.prototype.resolve = function(relative) {
	  return this.resolveObject(urlParse(relative, false, true)).format();
	};

	function urlResolveObject(source, relative) {
	  if (!source) return relative;
	  return urlParse(source, false, true).resolveObject(relative);
	}

	Url.prototype.resolveObject = function(relative) {
	  if (util.isString(relative)) {
	    var rel = new Url();
	    rel.parse(relative, false, true);
	    relative = rel;
	  }

	  var result = new Url();
	  var tkeys = Object.keys(this);
	  for (var tk = 0; tk < tkeys.length; tk++) {
	    var tkey = tkeys[tk];
	    result[tkey] = this[tkey];
	  }

	  // hash is always overridden, no matter what.
	  // even href="" will remove it.
	  result.hash = relative.hash;

	  // if the relative url is empty, then there's nothing left to do here.
	  if (relative.href === '') {
	    result.href = result.format();
	    return result;
	  }

	  // hrefs like //foo/bar always cut to the protocol.
	  if (relative.slashes && !relative.protocol) {
	    // take everything except the protocol from relative
	    var rkeys = Object.keys(relative);
	    for (var rk = 0; rk < rkeys.length; rk++) {
	      var rkey = rkeys[rk];
	      if (rkey !== 'protocol')
	        result[rkey] = relative[rkey];
	    }

	    //urlParse appends trailing / to urls like http://www.example.com
	    if (slashedProtocol[result.protocol] &&
	        result.hostname && !result.pathname) {
	      result.path = result.pathname = '/';
	    }

	    result.href = result.format();
	    return result;
	  }

	  if (relative.protocol && relative.protocol !== result.protocol) {
	    // if it's a known url protocol, then changing
	    // the protocol does weird things
	    // first, if it's not file:, then we MUST have a host,
	    // and if there was a path
	    // to begin with, then we MUST have a path.
	    // if it is file:, then the host is dropped,
	    // because that's known to be hostless.
	    // anything else is assumed to be absolute.
	    if (!slashedProtocol[relative.protocol]) {
	      var keys = Object.keys(relative);
	      for (var v = 0; v < keys.length; v++) {
	        var k = keys[v];
	        result[k] = relative[k];
	      }
	      result.href = result.format();
	      return result;
	    }

	    result.protocol = relative.protocol;
	    if (!relative.host && !hostlessProtocol[relative.protocol]) {
	      var relPath = (relative.pathname || '').split('/');
	      while (relPath.length && !(relative.host = relPath.shift()));
	      if (!relative.host) relative.host = '';
	      if (!relative.hostname) relative.hostname = '';
	      if (relPath[0] !== '') relPath.unshift('');
	      if (relPath.length < 2) relPath.unshift('');
	      result.pathname = relPath.join('/');
	    } else {
	      result.pathname = relative.pathname;
	    }
	    result.search = relative.search;
	    result.query = relative.query;
	    result.host = relative.host || '';
	    result.auth = relative.auth;
	    result.hostname = relative.hostname || relative.host;
	    result.port = relative.port;
	    // to support http.request
	    if (result.pathname || result.search) {
	      var p = result.pathname || '';
	      var s = result.search || '';
	      result.path = p + s;
	    }
	    result.slashes = result.slashes || relative.slashes;
	    result.href = result.format();
	    return result;
	  }

	  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
	      isRelAbs = (
	          relative.host ||
	          relative.pathname && relative.pathname.charAt(0) === '/'
	      ),
	      mustEndAbs = (isRelAbs || isSourceAbs ||
	                    (result.host && relative.pathname)),
	      removeAllDots = mustEndAbs,
	      srcPath = result.pathname && result.pathname.split('/') || [],
	      relPath = relative.pathname && relative.pathname.split('/') || [],
	      psychotic = result.protocol && !slashedProtocol[result.protocol];

	  // if the url is a non-slashed url, then relative
	  // links like ../.. should be able
	  // to crawl up to the hostname, as well.  This is strange.
	  // result.protocol has already been set by now.
	  // Later on, put the first path part into the host field.
	  if (psychotic) {
	    result.hostname = '';
	    result.port = null;
	    if (result.host) {
	      if (srcPath[0] === '') srcPath[0] = result.host;
	      else srcPath.unshift(result.host);
	    }
	    result.host = '';
	    if (relative.protocol) {
	      relative.hostname = null;
	      relative.port = null;
	      if (relative.host) {
	        if (relPath[0] === '') relPath[0] = relative.host;
	        else relPath.unshift(relative.host);
	      }
	      relative.host = null;
	    }
	    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
	  }

	  if (isRelAbs) {
	    // it's absolute.
	    result.host = (relative.host || relative.host === '') ?
	                  relative.host : result.host;
	    result.hostname = (relative.hostname || relative.hostname === '') ?
	                      relative.hostname : result.hostname;
	    result.search = relative.search;
	    result.query = relative.query;
	    srcPath = relPath;
	    // fall through to the dot-handling below.
	  } else if (relPath.length) {
	    // it's relative
	    // throw away the existing file, and take the new path instead.
	    if (!srcPath) srcPath = [];
	    srcPath.pop();
	    srcPath = srcPath.concat(relPath);
	    result.search = relative.search;
	    result.query = relative.query;
	  } else if (!util.isNullOrUndefined(relative.search)) {
	    // just pull out the search.
	    // like href='?foo'.
	    // Put this after the other two cases because it simplifies the booleans
	    if (psychotic) {
	      result.hostname = result.host = srcPath.shift();
	      //occationaly the auth can get stuck only in host
	      //this especially happens in cases like
	      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
	      var authInHost = result.host && result.host.indexOf('@') > 0 ?
	                       result.host.split('@') : false;
	      if (authInHost) {
	        result.auth = authInHost.shift();
	        result.host = result.hostname = authInHost.shift();
	      }
	    }
	    result.search = relative.search;
	    result.query = relative.query;
	    //to support http.request
	    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
	      result.path = (result.pathname ? result.pathname : '') +
	                    (result.search ? result.search : '');
	    }
	    result.href = result.format();
	    return result;
	  }

	  if (!srcPath.length) {
	    // no path at all.  easy.
	    // we've already handled the other stuff above.
	    result.pathname = null;
	    //to support http.request
	    if (result.search) {
	      result.path = '/' + result.search;
	    } else {
	      result.path = null;
	    }
	    result.href = result.format();
	    return result;
	  }

	  // if a url ENDs in . or .., then it must get a trailing slash.
	  // however, if it ends in anything else non-slashy,
	  // then it must NOT get a trailing slash.
	  var last = srcPath.slice(-1)[0];
	  var hasTrailingSlash = (
	      (result.host || relative.host || srcPath.length > 1) &&
	      (last === '.' || last === '..') || last === '');

	  // strip single dots, resolve double dots to parent dir
	  // if the path tries to go above the root, `up` ends up > 0
	  var up = 0;
	  for (var i = srcPath.length; i >= 0; i--) {
	    last = srcPath[i];
	    if (last === '.') {
	      srcPath.splice(i, 1);
	    } else if (last === '..') {
	      srcPath.splice(i, 1);
	      up++;
	    } else if (up) {
	      srcPath.splice(i, 1);
	      up--;
	    }
	  }

	  // if the path is allowed to go above the root, restore leading ..s
	  if (!mustEndAbs && !removeAllDots) {
	    for (; up--; up) {
	      srcPath.unshift('..');
	    }
	  }

	  if (mustEndAbs && srcPath[0] !== '' &&
	      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
	    srcPath.unshift('');
	  }

	  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
	    srcPath.push('');
	  }

	  var isAbsolute = srcPath[0] === '' ||
	      (srcPath[0] && srcPath[0].charAt(0) === '/');

	  // put the host back
	  if (psychotic) {
	    result.hostname = result.host = isAbsolute ? '' :
	                                    srcPath.length ? srcPath.shift() : '';
	    //occationaly the auth can get stuck only in host
	    //this especially happens in cases like
	    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
	    var authInHost = result.host && result.host.indexOf('@') > 0 ?
	                     result.host.split('@') : false;
	    if (authInHost) {
	      result.auth = authInHost.shift();
	      result.host = result.hostname = authInHost.shift();
	    }
	  }

	  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

	  if (mustEndAbs && !isAbsolute) {
	    srcPath.unshift('');
	  }

	  if (!srcPath.length) {
	    result.pathname = null;
	    result.path = null;
	  } else {
	    result.pathname = srcPath.join('/');
	  }

	  //to support request.http
	  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
	    result.path = (result.pathname ? result.pathname : '') +
	                  (result.search ? result.search : '');
	  }
	  result.auth = relative.auth || result.auth;
	  result.slashes = result.slashes || relative.slashes;
	  result.href = result.format();
	  return result;
	};

	Url.prototype.parseHost = function() {
	  var host = this.host;
	  var port = portPattern.exec(host);
	  if (port) {
	    port = port[0];
	    if (port !== ':') {
	      this.port = port.substr(1);
	    }
	    host = host.substr(0, host.length - port.length);
	  }
	  if (host) this.hostname = host;
	};


/***/ }),
/* 310 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = {
	  isString: function(arg) {
	    return typeof(arg) === 'string';
	  },
	  isObject: function(arg) {
	    return typeof(arg) === 'object' && arg !== null;
	  },
	  isNull: function(arg) {
	    return arg === null;
	  },
	  isNullOrUndefined: function(arg) {
	    return arg == null;
	  }
	};


/***/ }),
/* 311 */
/***/ (function(module, exports) {

	(function(self) {
	  'use strict';

	  if (self.fetch) {
	    return
	  }

	  var support = {
	    searchParams: 'URLSearchParams' in self,
	    iterable: 'Symbol' in self && 'iterator' in Symbol,
	    blob: 'FileReader' in self && 'Blob' in self && (function() {
	      try {
	        new Blob()
	        return true
	      } catch(e) {
	        return false
	      }
	    })(),
	    formData: 'FormData' in self,
	    arrayBuffer: 'ArrayBuffer' in self
	  }

	  if (support.arrayBuffer) {
	    var viewClasses = [
	      '[object Int8Array]',
	      '[object Uint8Array]',
	      '[object Uint8ClampedArray]',
	      '[object Int16Array]',
	      '[object Uint16Array]',
	      '[object Int32Array]',
	      '[object Uint32Array]',
	      '[object Float32Array]',
	      '[object Float64Array]'
	    ]

	    var isDataView = function(obj) {
	      return obj && DataView.prototype.isPrototypeOf(obj)
	    }

	    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
	      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
	    }
	  }

	  function normalizeName(name) {
	    if (typeof name !== 'string') {
	      name = String(name)
	    }
	    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
	      throw new TypeError('Invalid character in header field name')
	    }
	    return name.toLowerCase()
	  }

	  function normalizeValue(value) {
	    if (typeof value !== 'string') {
	      value = String(value)
	    }
	    return value
	  }

	  // Build a destructive iterator for the value list
	  function iteratorFor(items) {
	    var iterator = {
	      next: function() {
	        var value = items.shift()
	        return {done: value === undefined, value: value}
	      }
	    }

	    if (support.iterable) {
	      iterator[Symbol.iterator] = function() {
	        return iterator
	      }
	    }

	    return iterator
	  }

	  function Headers(headers) {
	    this.map = {}

	    if (headers instanceof Headers) {
	      headers.forEach(function(value, name) {
	        this.append(name, value)
	      }, this)
	    } else if (Array.isArray(headers)) {
	      headers.forEach(function(header) {
	        this.append(header[0], header[1])
	      }, this)
	    } else if (headers) {
	      Object.getOwnPropertyNames(headers).forEach(function(name) {
	        this.append(name, headers[name])
	      }, this)
	    }
	  }

	  Headers.prototype.append = function(name, value) {
	    name = normalizeName(name)
	    value = normalizeValue(value)
	    var oldValue = this.map[name]
	    this.map[name] = oldValue ? oldValue+','+value : value
	  }

	  Headers.prototype['delete'] = function(name) {
	    delete this.map[normalizeName(name)]
	  }

	  Headers.prototype.get = function(name) {
	    name = normalizeName(name)
	    return this.has(name) ? this.map[name] : null
	  }

	  Headers.prototype.has = function(name) {
	    return this.map.hasOwnProperty(normalizeName(name))
	  }

	  Headers.prototype.set = function(name, value) {
	    this.map[normalizeName(name)] = normalizeValue(value)
	  }

	  Headers.prototype.forEach = function(callback, thisArg) {
	    for (var name in this.map) {
	      if (this.map.hasOwnProperty(name)) {
	        callback.call(thisArg, this.map[name], name, this)
	      }
	    }
	  }

	  Headers.prototype.keys = function() {
	    var items = []
	    this.forEach(function(value, name) { items.push(name) })
	    return iteratorFor(items)
	  }

	  Headers.prototype.values = function() {
	    var items = []
	    this.forEach(function(value) { items.push(value) })
	    return iteratorFor(items)
	  }

	  Headers.prototype.entries = function() {
	    var items = []
	    this.forEach(function(value, name) { items.push([name, value]) })
	    return iteratorFor(items)
	  }

	  if (support.iterable) {
	    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
	  }

	  function consumed(body) {
	    if (body.bodyUsed) {
	      return Promise.reject(new TypeError('Already read'))
	    }
	    body.bodyUsed = true
	  }

	  function fileReaderReady(reader) {
	    return new Promise(function(resolve, reject) {
	      reader.onload = function() {
	        resolve(reader.result)
	      }
	      reader.onerror = function() {
	        reject(reader.error)
	      }
	    })
	  }

	  function readBlobAsArrayBuffer(blob) {
	    var reader = new FileReader()
	    var promise = fileReaderReady(reader)
	    reader.readAsArrayBuffer(blob)
	    return promise
	  }

	  function readBlobAsText(blob) {
	    var reader = new FileReader()
	    var promise = fileReaderReady(reader)
	    reader.readAsText(blob)
	    return promise
	  }

	  function readArrayBufferAsText(buf) {
	    var view = new Uint8Array(buf)
	    var chars = new Array(view.length)

	    for (var i = 0; i < view.length; i++) {
	      chars[i] = String.fromCharCode(view[i])
	    }
	    return chars.join('')
	  }

	  function bufferClone(buf) {
	    if (buf.slice) {
	      return buf.slice(0)
	    } else {
	      var view = new Uint8Array(buf.byteLength)
	      view.set(new Uint8Array(buf))
	      return view.buffer
	    }
	  }

	  function Body() {
	    this.bodyUsed = false

	    this._initBody = function(body) {
	      this._bodyInit = body
	      if (!body) {
	        this._bodyText = ''
	      } else if (typeof body === 'string') {
	        this._bodyText = body
	      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
	        this._bodyBlob = body
	      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
	        this._bodyFormData = body
	      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	        this._bodyText = body.toString()
	      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
	        this._bodyArrayBuffer = bufferClone(body.buffer)
	        // IE 10-11 can't handle a DataView body.
	        this._bodyInit = new Blob([this._bodyArrayBuffer])
	      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
	        this._bodyArrayBuffer = bufferClone(body)
	      } else {
	        throw new Error('unsupported BodyInit type')
	      }

	      if (!this.headers.get('content-type')) {
	        if (typeof body === 'string') {
	          this.headers.set('content-type', 'text/plain;charset=UTF-8')
	        } else if (this._bodyBlob && this._bodyBlob.type) {
	          this.headers.set('content-type', this._bodyBlob.type)
	        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
	        }
	      }
	    }

	    if (support.blob) {
	      this.blob = function() {
	        var rejected = consumed(this)
	        if (rejected) {
	          return rejected
	        }

	        if (this._bodyBlob) {
	          return Promise.resolve(this._bodyBlob)
	        } else if (this._bodyArrayBuffer) {
	          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as blob')
	        } else {
	          return Promise.resolve(new Blob([this._bodyText]))
	        }
	      }

	      this.arrayBuffer = function() {
	        if (this._bodyArrayBuffer) {
	          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
	        } else {
	          return this.blob().then(readBlobAsArrayBuffer)
	        }
	      }
	    }

	    this.text = function() {
	      var rejected = consumed(this)
	      if (rejected) {
	        return rejected
	      }

	      if (this._bodyBlob) {
	        return readBlobAsText(this._bodyBlob)
	      } else if (this._bodyArrayBuffer) {
	        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
	      } else if (this._bodyFormData) {
	        throw new Error('could not read FormData body as text')
	      } else {
	        return Promise.resolve(this._bodyText)
	      }
	    }

	    if (support.formData) {
	      this.formData = function() {
	        return this.text().then(decode)
	      }
	    }

	    this.json = function() {
	      return this.text().then(JSON.parse)
	    }

	    return this
	  }

	  // HTTP methods whose capitalization should be normalized
	  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

	  function normalizeMethod(method) {
	    var upcased = method.toUpperCase()
	    return (methods.indexOf(upcased) > -1) ? upcased : method
	  }

	  function Request(input, options) {
	    options = options || {}
	    var body = options.body

	    if (input instanceof Request) {
	      if (input.bodyUsed) {
	        throw new TypeError('Already read')
	      }
	      this.url = input.url
	      this.credentials = input.credentials
	      if (!options.headers) {
	        this.headers = new Headers(input.headers)
	      }
	      this.method = input.method
	      this.mode = input.mode
	      if (!body && input._bodyInit != null) {
	        body = input._bodyInit
	        input.bodyUsed = true
	      }
	    } else {
	      this.url = String(input)
	    }

	    this.credentials = options.credentials || this.credentials || 'omit'
	    if (options.headers || !this.headers) {
	      this.headers = new Headers(options.headers)
	    }
	    this.method = normalizeMethod(options.method || this.method || 'GET')
	    this.mode = options.mode || this.mode || null
	    this.referrer = null

	    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
	      throw new TypeError('Body not allowed for GET or HEAD requests')
	    }
	    this._initBody(body)
	  }

	  Request.prototype.clone = function() {
	    return new Request(this, { body: this._bodyInit })
	  }

	  function decode(body) {
	    var form = new FormData()
	    body.trim().split('&').forEach(function(bytes) {
	      if (bytes) {
	        var split = bytes.split('=')
	        var name = split.shift().replace(/\+/g, ' ')
	        var value = split.join('=').replace(/\+/g, ' ')
	        form.append(decodeURIComponent(name), decodeURIComponent(value))
	      }
	    })
	    return form
	  }

	  function parseHeaders(rawHeaders) {
	    var headers = new Headers()
	    rawHeaders.split(/\r?\n/).forEach(function(line) {
	      var parts = line.split(':')
	      var key = parts.shift().trim()
	      if (key) {
	        var value = parts.join(':').trim()
	        headers.append(key, value)
	      }
	    })
	    return headers
	  }

	  Body.call(Request.prototype)

	  function Response(bodyInit, options) {
	    if (!options) {
	      options = {}
	    }

	    this.type = 'default'
	    this.status = 'status' in options ? options.status : 200
	    this.ok = this.status >= 200 && this.status < 300
	    this.statusText = 'statusText' in options ? options.statusText : 'OK'
	    this.headers = new Headers(options.headers)
	    this.url = options.url || ''
	    this._initBody(bodyInit)
	  }

	  Body.call(Response.prototype)

	  Response.prototype.clone = function() {
	    return new Response(this._bodyInit, {
	      status: this.status,
	      statusText: this.statusText,
	      headers: new Headers(this.headers),
	      url: this.url
	    })
	  }

	  Response.error = function() {
	    var response = new Response(null, {status: 0, statusText: ''})
	    response.type = 'error'
	    return response
	  }

	  var redirectStatuses = [301, 302, 303, 307, 308]

	  Response.redirect = function(url, status) {
	    if (redirectStatuses.indexOf(status) === -1) {
	      throw new RangeError('Invalid status code')
	    }

	    return new Response(null, {status: status, headers: {location: url}})
	  }

	  self.Headers = Headers
	  self.Request = Request
	  self.Response = Response

	  self.fetch = function(input, init) {
	    return new Promise(function(resolve, reject) {
	      var request = new Request(input, init)
	      var xhr = new XMLHttpRequest()

	      xhr.onload = function() {
	        var options = {
	          status: xhr.status,
	          statusText: xhr.statusText,
	          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
	        }
	        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
	        var body = 'response' in xhr ? xhr.response : xhr.responseText
	        resolve(new Response(body, options))
	      }

	      xhr.onerror = function() {
	        reject(new TypeError('Network request failed'))
	      }

	      xhr.ontimeout = function() {
	        reject(new TypeError('Network request failed'))
	      }

	      xhr.open(request.method, request.url, true)

	      if (request.credentials === 'include') {
	        xhr.withCredentials = true
	      }

	      if ('responseType' in xhr && support.blob) {
	        xhr.responseType = 'blob'
	      }

	      request.headers.forEach(function(value, name) {
	        xhr.setRequestHeader(name, value)
	      })

	      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
	    })
	  }
	  self.fetch.polyfill = true
	})(typeof self !== 'undefined' ? self : this);


/***/ })
/******/ ])
});
;