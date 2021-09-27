/******/ (function(modules) { // webpackBootstrap
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

	__webpack_require__(1);
	module.exports = __webpack_require__(9);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _dataJs = __webpack_require__(2);

	var _dataJs2 = _interopRequireDefault(_dataJs);

	var _componentsEvent = __webpack_require__(3);

	var _componentsEvent2 = _interopRequireDefault(_componentsEvent);

	var _componentsComments = __webpack_require__(5);

	var _componentsComments2 = _interopRequireDefault(_componentsComments);

	/**
	 * Fundraising App
	 */

	var App = (function () {
	  function App(el, data) {
	    _classCallCheck(this, App);

	    this.el = el;
	    this.data = data;
	    this.createFactories();
	    this.render();
	  }

	  _createClass(App, [{
	    key: 'createFactories',
	    value: function createFactories() {
	      this.event = new _componentsEvent2['default'](_dataJs2['default']);
	      this.comments = new _componentsComments2['default'](_dataJs2['default']);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      this.el.innerHTML = '\n      <div class="row">\n        <div class="column">' + this.event.render() + '</div>\n        <div class="column">' + this.comments.render() + '</div>\n      </div>\n    ';
	    }
	  }]);

	  return App;
	})();

	var app = new App(document.querySelector('.container'), _dataJs2['default']);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var data = {
	  event: {
	    title: "TBG Big Charity Event",
	    description: ["Lorem ipsum dolor sit amet, ad usu tale quando offendit.", "Ea sed ipsum noluisse partiendo sit. Ut mutat decore altera has, eam ut autem abhorreant"],
	    date: "01/07/2016",
	    location: "The Office"
	  },
	  funding: {
	    target: 100000,
	    raised: 50000
	  },
	  comments: [{
	    name: "Person A",
	    thumbnail: "/faces/128-13.jpg",
	    donation: 5000,
	    comment: "Good luck with your thing!",
	    children: [{
	      name: "Person D",
	      thumbnail: "/faces/128-10.jpg",
	      donation: 0,
	      comment: "Thank you",
	      children: [{
	        name: "Person A",
	        thumbnail: "/faces/128-13.jpg",
	        donation: 0,
	        comment: "No, Thank you!",
	        children: []
	      }]
	    }]
	  }, {
	    name: "Person B",
	    thumbnail: "/faces/128-12.jpg",
	    donation: 1000,
	    comment: "Good luck. Well done! A great achievement for a great cause.",
	    children: []
	  }, {
	    name: "Person C",
	    thumbnail: "/faces/128-11.jpg",
	    donation: 4000,
	    comment: "Hope all goes well and you successfully achieve your goal. A cause close to our hearts.",
	    children: []
	  }]
	};

	exports["default"] = data;
	module.exports = exports["default"];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	//  -- event
	//  -- -- title
	//  -- -- description
	//  -- -- funding
	//  -- -- details

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _elementsJs = __webpack_require__(4);

	var _default = (function () {
	  function _default(data) {
	    _classCallCheck(this, _default);

	    this.data = data;
	    this.createFactories();
	    this.render();
	  }

	  _createClass(_default, [{
	    key: 'createFactories',
	    value: function createFactories() {
	      this.title = new _elementsJs.Title(this.data.event.title);
	      this.description = new _elementsJs.Description(this.data.event.description);
	      this.funding = new _elementsJs.Funding(this.data.funding);
	      this.details = new _elementsJs.Details(this.data.event.date, this.data.event.location);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return '\n      <div class="event">\n        ' + this.title.render() + '\n        ' + this.description.render() + '\n        ' + this.funding.render() + '\n        ' + this.details.render() + '\n      </div>\n    ';
	    }
	  }]);

	  return _default;
	})();

	exports['default'] = _default;
	module.exports = exports['default'];

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	/**
	 * Title Component
	 */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var Title = (function () {
	  function Title(title) {
	    _classCallCheck(this, Title);

	    this.title = title;
	  }

	  /**
	   * Description Component
	   */

	  _createClass(Title, [{
	    key: 'render',
	    value: function render() {
	      return '\n      <h1 class="event__title">' + this.title + '</h1>\n    ';
	    }
	  }]);

	  return Title;
	})();

	exports.Title = Title;

	var Description = (function () {
	  function Description(data) {
	    _classCallCheck(this, Description);

	    this.data = data;
	    this.createFactories();
	  }

	  /**
	   * Funding Component
	   */

	  _createClass(Description, [{
	    key: 'createFactories',
	    value: function createFactories() {
	      this.description = this;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      this.description = this.data.map(function (paragraph) {
	        return '\n        <p>' + paragraph + '</p>\n      ';
	      }).join('');

	      return '\n      <div class="event__description">' + this.description + '</div>\n    ';
	    }
	  }]);

	  return Description;
	})();

	exports.Description = Description;

	var Funding = (function () {
	  function Funding(funding) {
	    _classCallCheck(this, Funding);

	    this.funding = funding;
	  }

	  /**
	   * Details Component
	   */

	  _createClass(Funding, [{
	    key: 'renderProgress',
	    value: function renderProgress() {
	      var percentage = this.funding.raised / this.funding.target * 100;

	      return '\n      <div class="event__progress">\n        <strong class="event__progress__meter">\n          <div class="event__progress__meter__level" style="width: ' + percentage + '%"></div>\n        </strong>\n      </div>\n    ';
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return '\n      <div class="event__funding">\n        <div class="event__funding__totals">\n          <div class="visually-hidden">£' + this.funding.raised / 100 + ' of £' + this.funding.target / 100 + ' target.</div>\n          <div class="event__funding__raised">£' + this.funding.raised / 100 + ' raised</div> \n          <div class="event__funding__target">of £' + this.funding.target / 100 + ' target.</div>\n        </div>\n        ' + this.renderProgress() + '\n      </div>\n    ';
	    }
	  }]);

	  return Funding;
	})();

	exports.Funding = Funding;

	var Details = (function () {
	  function Details(date, location) {
	    _classCallCheck(this, Details);

	    this.date = date;
	    this.location = location;
	  }

	  _createClass(Details, [{
	    key: 'render',
	    value: function render() {
	      return '\n      <div class="event__details">\n        <div class="event__detail">\n          <strong>Date:</strong><span> ' + this.date + '</span>\n        </div>\n        <div class="event__detail">\n          <strong>Location:</strong><span> ' + this.location + '</span>\n        </div>\n      </div>\n    ';
	    }
	  }]);

	  return Details;
	})();

	exports.Details = Details;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _comment = __webpack_require__(6);

	var _comment2 = _interopRequireDefault(_comment);

	var _default = (function () {
	  function _default(data) {
	    _classCallCheck(this, _default);

	    this.data = data.comments;
	    this.createFactories();
	    this.render();
	  }

	  _createClass(_default, [{
	    key: 'createFactories',
	    value: function createFactories() {
	      this.comments = this.data.map(function (item) {
	        return '\n        ' + new _comment2['default']([item]).render() + '\n      ';
	      }).join(' ');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return '\n      <div class="comments">\n        ' + this.comments + '\n      </div>\n    ';
	    }
	  }]);

	  return _default;
	})();

	exports['default'] = _default;
	module.exports = exports['default'];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _helpersCreateClassesStringJs = __webpack_require__(7);

	var _elementsJs = __webpack_require__(8);

	var Comment = (function () {
	  function Comment(data) {
	    _classCallCheck(this, Comment);

	    this.data = data;
	    this.render();
	  }

	  _createClass(Comment, [{
	    key: 'createComments',
	    value: function createComments() {
	      var _this = this;

	      var alternateCssClass = function alternateCssClass() {
	        var cssClassFlag = false;

	        var cssClassLookupTable = {
	          'true': 'even',
	          'false': 'odd'
	        };

	        // Returns another function that encloses around the cssClassFlag and
	        // allows it to be updated each time it is called.

	        return function () {
	          return cssClassLookupTable[cssClassFlag = !cssClassFlag];
	        };
	      };

	      var oddOrEvenCssClass = alternateCssClass();

	      var generateMarkup = function generateMarkup(rootNode, data) {
	        data.forEach(function (each) {
	          var _name = each.name;
	          var _thumbnail = each.thumbnail;
	          var _donation = each.donation;
	          var _message = each.comment;

	          _this.name = new _elementsJs.Name(_name);
	          _this.thumbnail = new _elementsJs.Thumbnail(_thumbnail, _name, 'comment__thumbnail');
	          _this.donation = new _elementsJs.Donation(_donation);
	          _this.message = new _elementsJs.Message(_message);

	          var content = '\n          <div class="comment comment--' + oddOrEvenCssClass() + '">\n            ' + _this.thumbnail.render() + '\n            <div class="comment__content">\n              <div class="comment__details">\n                ' + _this.name.render() + '\n                ' + _this.donation.render() + '\n              </div>\n              ' + _this.message.render() + '\n            </div>\n          </div>\n        ';
	          // Recursion felt like the most robust option here,
	          // and can handle n levels of comment nesting for free.

	          rootNode.classList.add('comments__tree');
	          var li = document.createElement('li');
	          li.innerHTML = content;
	          rootNode.appendChild(li);

	          if (each.children.length > 0) {
	            var ul = document.createElement('ul');
	            ul.classList.add('comments__subTree');
	            li.appendChild(ul);
	            generateMarkup(ul, each.children);
	          }
	        });

	        return rootNode.outerHTML;
	      };

	      return generateMarkup(document.createElement('ul'), this.data);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return this.createComments();
	    }
	  }]);

	  return Comment;
	})();

	exports['default'] = Comment;
	module.exports = exports['default'];

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var CreateClassesString = (function () {
	  function CreateClassesString(classes) {
	    _classCallCheck(this, CreateClassesString);

	    this.store = classes;
	  }

	  _createClass(CreateClassesString, [{
	    key: 'get',
	    value: function get() {
	      return typeof this.store !== 'undefined' ? this.store.constructor === Array ? ' ' + this.store.join(' ') : ' ' + this.store : '';
	    }
	  }]);

	  return CreateClassesString;
	})();

	exports.CreateClassesString = CreateClassesString;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _helpersCreateClassesStringJs = __webpack_require__(7);

	// Thumbnail can take a class. It's a contrived example to show a way of
	// passing in a cssClass (via a helper to allow taking array or string)
	// for a component for hooking into themes.

	var Thumbnail = (function () {
	  function Thumbnail(src, alt, cssClass) {
	    _classCallCheck(this, Thumbnail);

	    this.cssClass = cssClass;
	    this.src = src;
	    this.alt = alt;
	    this.createFactories();
	  }

	  _createClass(Thumbnail, [{
	    key: 'createFactories',
	    value: function createFactories() {
	      this.createClass = new _helpersCreateClassesStringJs.CreateClassesString(this.cssClass).get();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return '\n      <img class="thumbnail' + this.createClass + '" src="./images/' + this.src + '" alt="Thumbnail image of ' + this.alt + '"/>\n    ';
	    }
	  }]);

	  return Thumbnail;
	})();

	exports.Thumbnail = Thumbnail;

	var Name = (function () {
	  function Name(name) {
	    _classCallCheck(this, Name);

	    this.name = name;
	  }

	  _createClass(Name, [{
	    key: 'render',
	    value: function render() {
	      return '\n      <span class="comment__name">\n        ' + this.name + '\n      </span>\n    ';
	    }
	  }]);

	  return Name;
	})();

	exports.Name = Name;

	var Message = (function () {
	  function Message(message) {
	    _classCallCheck(this, Message);

	    this.message = message;
	  }

	  _createClass(Message, [{
	    key: 'render',
	    value: function render() {
	      return '\n      <p class="comment__message">\n        ' + this.message + '\n      </p>\n    ';
	    }
	  }]);

	  return Message;
	})();

	exports.Message = Message;

	var Donation = (function () {
	  function Donation(donation) {
	    _classCallCheck(this, Donation);

	    this.donation = donation;
	  }

	  _createClass(Donation, [{
	    key: 'render',
	    value: function render() {
	      return this.donation > 0 ? '<span class="comment__donation"> donated £' + this.donation / 100 + '</span>' : '';
	    }
	  }]);

	  return Donation;
	})();

	exports.Donation = Donation;

	var Wrapper = (function () {
	  function Wrapper(type, children) {
	    if (type === undefined) type = 'div';
	    var cssClass = arguments.length <= 2 || arguments[2] === undefined ? 'wrapper' : arguments[2];

	    _classCallCheck(this, Wrapper);

	    this.type = type;
	    this.cssClass = cssClass;
	    this.children = children;
	  }

	  _createClass(Wrapper, [{
	    key: 'createWrapper',
	    value: function createWrapper() {
	      var element = document.createElement(this.type);
	      element.innerHTML = this.children.join('');

	      this.cssClass.forEach(function (each) {
	        element.classList.add(each);
	      });

	      return element.outerHTML;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return this.createWrapper();
	    }
	  }]);

	  return Wrapper;
	})();

	exports.Wrapper = Wrapper;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);