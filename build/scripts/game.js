(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _GameStateA = require('states/GameStateA');

var _GameStateA2 = _interopRequireDefault(_GameStateA);

var _GameStateB = require('states/GameStateB');

var _GameStateB2 = _interopRequireDefault(_GameStateB);

var _GameStateC = require('states/GameStateC');

var _GameStateC2 = _interopRequireDefault(_GameStateC);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} // Import game states
// -- Form upload image
// -- Load and pick cordinates


// -- Animate


var Game = function (_Phaser$Game) {
  _inherits(Game, _Phaser$Game);

  function Game() {
    _classCallCheck(this, Game);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Game).call(this, '100%', document.body.offsetHeight, Phaser.AUTO, 'content', null, true));

    _this.state.add('GameStateA', _GameStateA2.default, false);
    _this.state.add('GameStateB', _GameStateB2.default, false);
    _this.state.add('GameStateC', _GameStateC2.default, false);
    _this.state.start('GameStateA', true, false);
    return _this;
  }

  return Game;
}(Phaser.Game);

var curGame = new Game();
//Previews image file localy 
function previewFile() {
  var preview = document.querySelector('img'); //selects the query named img
  var file = document.querySelector('input[type=file]').files[0]; //sames as here
  var reader = new FileReader();

  reader.onloadend = function () {
    preview.src = reader.result;
    curGame.uploadedImage = reader.result;
    console.log('uploaded image do something');
  };

  if (file) {
    reader.readAsDataURL(file); //reads the data as a URL
  } else {
    preview.src = "";
  }
}

// Used for a login page
var uploadedImageTriggered = document.getElementById('uploadedImage');
// console.log(document.getElementById('uploadedImage').src);
if (uploadedImageTriggered) {
  uploadedImageTriggered.addEventListener('click', function () {
    curGame.uploadedImage = uploadedImageTriggered.src;
    console.log('uploaded image do something');
    curGame.state.start('GameStateA', true, false);
    hideToggle();
  });
}

// Hide class weeklyfixtures
function hideToggle() {
  $(".uploadForm").hide();
}

// used for check password input box
function checkPasswordMatch() {
  var confirmPassword = $("#txtConfirmPassword").val();
  console.log(confirmPassword.length);
  //Check if chracter length is 8 and has not been triggered
  if (confirmPassword.length == 8 && hasTriggered == false) {
    hasTriggered = true;
    // Play the game start animation 
    curGame.state.start('GameStateB', true, false, false, true, true);
  } else if (confirmPassword.length == 7 && hasTriggered == true) {
    hasTriggered = false;
    curGame.state.start('GameStateB', true, false, false, true, false);
  } else {
    // hasTriggered = false;
    $("#message").removeClass("message");
    $("#errorMessage").empty();
    $("#txtConfirmPassword").removeClass("error");
  }
}

},{"states/GameStateA":2,"states/GameStateB":3,"states/GameStateC":4}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

var _helpers = require('./helpers');

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var prizesVar = void 0;
var curUrl = 'http://192.168.0.4:3000/';

var GameStateA = function (_Phaser$State) {
	_inherits(GameStateA, _Phaser$State);

	function GameStateA() {
		_classCallCheck(this, GameStateA);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(GameStateA).apply(this, arguments));
	}

	_createClass(GameStateA, [{
		key: 'init',

		// initation and pass in boelans to set game states
		value: function init() {
			this.game.add.plugin(Fabrique.Plugins.Spine);
		}

		// preload assets

	}, {
		key: 'preload',
		value: function preload() {
			// Load sprite sheet here
			this.game.load.atlas('spriteSheet', './assets/spriteSheet.png', './assets/spriteSheet.json');

			// this.game.cache.addImage('uploadedImage', null, imageData);
			this.game.load.image('uploadedImage', 'assets/donald-trump.jpg');

			this.game.load.spine('spineboy', '../assets/trump.json');
		}
	}, {
		key: 'create',

		// create
		value: function create() {
			// Hide input box
			//hideToggle();
			//hideEntryButtons();
			console.log("MONKEY!");

			// Set Phaser scaling here
			// this.game.stage.fullScreenScaleMode = Phaser.StageScaleMode.EXACT_FIT;
			// this.game.stage.scale.startFullScreen();
			// this.game.stage.scale.setShowAll();
			// this.game.stage.scale.refresh();
			// this.game.scale.pageAlignHorizontally = true;
			// this.game.scale.pageAlignVertically = true;
			var temploadIamgeBol = false;
			if (uploadedImage.src != curUrl) {
				var loader = new Phaser.Loader(this.game);
				loader.image('myImage', uploadedImage.src);
				temploadIamgeBol = true;
				loader.onLoadComplete.addOnce(function () {
					this.loadImageComplete(temploadIamgeBol);
				}, this);
				loader.start();
			}

			this.spineboySprite = this.add.spine(400, 300, 'spineboy');
			this.spineboySprite.position.set(600, 600);
			this.spineboySprite.scale.set(0.25, 0.25);
			this.spineboy = this.spineboySprite.setAnimationByName(0, "animation", true);
		}
	}, {
		key: 'loadImageComplete',
		value: function loadImageComplete(imageLoadedIn) {
			this.uploadedImageSprite = this.game.add.sprite(0, 0, 'myImage');
			this.uploadedImageSprite.inputEnabled = true;
			this.uploadedImageSprite.events.onInputDown.add(this.getInputArea, this);
			console.log('Complete', uploadedImage.src);
			if (uploadedImage.src != curUrl) {
				var tileTextStyle = { font: "28px PT Sans", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle", align: 'center' };
				this.enterYourCode = this.add.text(this.game.world.centerX - 120, this.game.world.centerY - 135, 'CLICK TO POINT TO THE KITTY!', tileTextStyle);
			}
		}
	}, {
		key: 'getInputArea',
		value: function getInputArea() {
			this.targetCordinates = {};
			this.targetCordinates.x = this.input.activePointer.x;
			this.targetCordinates.y = this.input.activePointer.y;

			console.log('Target pos x', this.targetCordinates.x);
			console.log('Target pos y', this.targetCordinates.y);
			console.log('X:' + this.input.activePointer.x);
			console.log('Y:' + this.input.activePointer.y);

			this.enterYourCode.alpha = 0;
			//play animation
			// this.playAnimation(this.targetCordinates.x,this.targetCordinates.y);
			this.spineboySprite.position.set(this.targetCordinates.x + 185, this.targetCordinates.y + 65);
		}
	}, {
		key: 'playAnimation',
		value: function playAnimation(targetCordinatesX, targetCordinatesY) {
			// play spine animtion here!!!!
			console.log('Play Trump animtion here');

			// var game = new Phaser.Game(1000, 900, Phaser.AUTO, '', { preload: preload, create: create, update: update });
			// var arm ;

			// function preload() {
			//     game.load.image('trump','trump.png');
			//     game.load.image('arm','arm.png');
			//     game.load.image('woman','woman.png');
			// }

			// function create() {
			//     var trump = game.add.sprite(200,0,'trump');
			//     var woman = game.add.sprite(50,-100,'woman');

			//     arm = game.add.sprite(400,580,'arm');
			//     arm.anchor.set(0.8,1);
			//     arm.angle = -80;
			//     arm.inputEnabled = true;
			//     arm.events.onInputDown.add(grab, this);

			// }

			// function grab(){
			//     tween = game.add.tween(arm).to( {angle:-25}, 500, Phaser.Easing.Quadratic.InOut, true, 0,-1);
			//     tween.yoyo(true,1000);
			// }
		}
	}]);

	return GameStateA;
}(Phaser.State);

exports.default = GameStateA;

},{"./helpers":5}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

var _helpers = require("./helpers");

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var targetCordinates = void 0;

var GameStateB = function (_Phaser$State) {
	_inherits(GameStateB, _Phaser$State);

	function GameStateB() {
		_classCallCheck(this, GameStateB);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(GameStateB).apply(this, arguments));
	}

	_createClass(GameStateB, [{
		key: "init",

		// initation and pass in boelans to set game states
		value: function init() {}
	}, {
		key: "create",
		value: function create() {
			console.log("game state B - Pick were the pussy is!");
			//image.events.onInputDown.add(getInputArea, this);
		}
	}, {
		key: "getInputArea",
		value: function getInputArea() {
			targetCordinates.x = this.game.input.x;
			targetCordinates.y = this.game.input.y;

			targetCordinates.x = this.game.input.mousePointer.x;
			targetCordinates.y = this.game.input.mousePointer.y;
		}
	}]);

	return GameStateB;
}(Phaser.State);

exports.default = GameStateB;

},{"./helpers":5}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var GameStateC = function (_Phaser$State) {
	_inherits(GameStateC, _Phaser$State);

	function GameStateC() {
		_classCallCheck(this, GameStateC);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(GameStateC).apply(this, arguments));
	}

	_createClass(GameStateC, [{
		key: 'create',
		value: function create() {

			// Add goal sprite
			this.goal = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 170, 'spriteSheet', 'Goal');
			this.goal.anchor.setTo(0.5);

			// Add your teams text sprite
			this.yourTeams = this.add.sprite(this.game.world.centerX, this.game.world.centerY - 120, 'spriteSheet', 'yourTeams');
			this.yourTeams.anchor.setTo(0.5);

			//let tileTextStyle = { font: "28px PT Sans", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle", align:'center'};
			//this.yourTeams = this.add.text(this.game.world.centerX-80, this.game.world.centerY - 135, 'YOUR TEAMS', tileTextStyle );

			// Create 4 team logos
			this.createTeamLogo(4);
		}
	}, {
		key: 'createTeamLogo',
		value: function createTeamLogo(numb) {

			// get json for use in populating 
			var data = this.game.cache.getJSON('jsonObject');
			// set stle of text 
			var style = { font: "32px PT Sans", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle", align: 'center' };

			for (var i = 1; i < numb + 1; i++) {
				// Create group
				var dynamicGroupRef = 'teamGroup' + i;
				this[dynamicGroupRef] = this.game.add.group();
				// Logo background
				var dynamicTeamRef = 'teamLogoBg' + i;
				this[dynamicTeamRef] = this.add.sprite(30, 30, 'spriteSheet', 'teamLogo');
				this[dynamicTeamRef].anchor.setTo(0.5);
				// EDL Logo from json
				var dynamicTeamLogoRef = 'teamLogo' + i;
				this[dynamicTeamLogoRef] = this.add.sprite(30, 30, 'logos', data.teams[i - 1].logo);
				this[dynamicTeamLogoRef].anchor.setTo(0.5);
				this[dynamicTeamLogoRef].scale.setTo(0.85);
				// Text for display name
				var dynamicTextRef = 'teamtext' + i;
				var text = data.teams[i - 1].displayName;
				this[dynamicTextRef] = this.add.text(0, 0, text, style);
				this[dynamicTextRef].anchor.setTo(0.5);
				this[dynamicTextRef].position.setTo(this[dynamicTeamRef].width / 2 - this[dynamicTeamRef].width / 2 + 30, this[dynamicTeamRef].height / 2 + 50);
				// Shine effect
				var dynamicShineRef = 'teamShine' + i;
				this[dynamicShineRef] = this.add.sprite(30, 30, 'shineSpriteSheet');
				this[dynamicShineRef].anchor.setTo(0.5);
				this[dynamicShineRef].animations.add('shine');
				// Add all to group
				this[dynamicGroupRef].add(this[dynamicTeamRef]);
				this[dynamicGroupRef].add(this[dynamicTeamLogoRef]);
				this[dynamicGroupRef].add(this[dynamicTextRef]);
				this[dynamicGroupRef].add(this[dynamicShineRef]);
				// Hide group
				this[dynamicGroupRef].alpha = 0;
				this[dynamicGroupRef].position.setTo(this.game.world.centerX, this.game.world.centerY);
			}
			// Call animtion of groups
			this.animateInTeams();
		}
	}, {
		key: 'animateInTeams',
		value: function animateInTeams() {

			// Postion team 1 top left 
			var footballInTween = this.add.tween(this.teamGroup1).to({ y: this.game.world.centerY - 55, x: this.game.world.centerX - 150, alpha: 1 }, 500, "Linear", true, 0, 0);
			footballInTween.onComplete.add(function () {
				// play shine animtion
				this.teamShine1.animations.play('shine', 24, false);
			}, this);
			footballInTween.start();
			var footballInScaleTween = this.add.tween(this.teamGroup1.scale).to({ x: 1, y: 1 }, 1000, "Linear", true, 0, 0);
			footballInScaleTween.start();

			// Postion team 2 bottom left
			var footballInTween2 = this.add.tween(this.teamGroup2).to({ y: this.game.world.centerY + 145, x: this.game.world.centerX - 150, alpha: 1 }, 500, "Linear", true, 1000, 0);
			footballInTween2.onComplete.add(function () {
				// play shine animtion
				this.teamShine2.animations.play('shine', 24, false);
			}, this);
			footballInTween2.start();
			var footballInScaleTween2 = this.add.tween(this.teamGroup2.scale).to({ x: 1, y: 1 }, 1000, "Linear", true, 1000, 0);
			footballInScaleTween2.start();

			// Postion team 3 top right
			var footballInTween3 = this.add.tween(this.teamGroup3).to({ y: this.game.world.centerY - 55, x: this.game.world.centerX + 90, alpha: 1 }, 500, "Linear", true, 2000, 0);
			footballInTween3.onComplete.add(function () {
				// play shine animtion
				this.teamShine3.animations.play('shine', 24, false);
			}, this);
			footballInTween3.start();
			var footballInScaleTween3 = this.add.tween(this.teamGroup3.scale).to({ x: 1, y: 1 }, 1000, "Linear", true, 2000, 0);
			footballInScaleTween3.start();

			// Postion team 4 bottom right
			var footballInTween4 = this.add.tween(this.teamGroup4).to({ y: this.game.world.centerY + 145, x: this.game.world.centerX + 90, alpha: 1 }, 500, "Linear", true, 3000, 0);
			footballInTween4.onComplete.add(function () {
				// play shine animtion
				this.teamShine4.animations.play('shine', 24, false);
				this.teamShine4.animations.currentAnim.onComplete.add(function () {
					this.anitmePreNextState();
				}, this);
			}, this);
			footballInTween4.start();
			var footballInScaleTween4 = this.add.tween(this.teamGroup4.scale).to({ x: 1, y: 1 }, 1000, "Linear", true, 3000, 0);
			footballInScaleTween4.start();
		}
	}, {
		key: 'anitmePreNextState',
		value: function anitmePreNextState() {

			// Hide Your Teams text
			var yourTeamsTween = this.add.tween(this.yourTeams).to({ alpha: 0 }, 500, "Linear", true, 0, 0);
			yourTeamsTween.start();

			// Move each team to next stage for results page and hide text
			var footballInTween = this.add.tween(this.teamGroup1).to({ y: this.game.world.centerY - 117, x: this.game.world.centerX - 200 }, 500, "Linear", true, 0, 0);
			footballInTween.start();
			var textTween = this.add.tween(this.teamtext1).to({ alpha: 0 }, 500, "Linear", true, 0, 0);
			textTween.start();
			var footballInScaleTween = this.add.tween(this.teamGroup1.scale).to({ x: 0.45, y: 0.45 }, 500, "Linear", true, 0, 0);
			footballInScaleTween.start();

			// Move each team to next stage for results page and hide text
			var footballInTween2 = this.add.tween(this.teamGroup2).to({ y: this.game.world.centerY - 32, x: this.game.world.centerX + 170 }, 500, "Linear", true, 100, 0);
			footballInTween2.start();
			var textTween2 = this.add.tween(this.teamtext2).to({ alpha: 0 }, 500, "Linear", true, 100, 0);
			textTween2.start();
			var footballInScaleTween2 = this.add.tween(this.teamGroup2.scale).to({ x: 0.45, y: 0.45 }, 500, "Linear", true, 100, 0);
			footballInScaleTween2.start();

			// Move each team to next stage for results page and hide text
			var footballInTween3 = this.add.tween(this.teamGroup3).to({ y: this.game.world.centerY + 53, x: this.game.world.centerX - 200, alpha: 1 }, 500, "Linear", true, 200, 0);
			footballInTween3.start();
			var textTween3 = this.add.tween(this.teamtext3).to({ alpha: 0 }, 500, "Linear", true, 200, 0);
			textTween3.start();
			var footballInScaleTween3 = this.add.tween(this.teamGroup3.scale).to({ x: 0.45, y: 0.45 }, 500, "Linear", true, 200, 0);
			footballInScaleTween3.start();

			// Move each team to next stage for results page and hide text
			var footballInTween4 = this.add.tween(this.teamGroup4).to({ y: this.game.world.centerY + 138, x: this.game.world.centerX + 170, alpha: 1 }, 500, "Linear", true, 300, 0);
			footballInTween4.onComplete.add(function () {
				// Go to next game state - D Results with no score page
				this.game.state.start('GameStateD');
			}, this);
			footballInTween4.start();

			var textTween4 = this.add.tween(this.teamtext4).to({ alpha: 0 }, 500, "Linear", true, 300, 0);
			textTween4.start();
			var footballInScaleTween4 = this.add.tween(this.teamGroup4.scale).to({ x: 0.45, y: 0.45 }, 500, "Linear", true, 300, 0);
			footballInScaleTween4.start();
		}
	}]);

	return GameStateC;
}(Phaser.State);

exports.default = GameStateC;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// Hide class weeklyfixtures
var hideToggle = exports.hideToggle = function hideToggle() {
  return $(".uploadForm").hide();
};
// Show class weeklyfixtures
var showToggle = exports.showToggle = function showToggle() {
  return $(".weeklyFixtures").show();
};

// Hide front page results button and change z index 
var hideEntries = exports.hideEntries = function hideEntries() {
  console.log("hide entries");
  $("#entries").animate({ opacity: '0' }, function () {
    $("#entries").removeClass("entriesDepth");
    $("#entries").addClass("entriesDepth");
  });
};
// Show front page results button and change z index 
var showEntries = exports.showEntries = function showEntries() {
  console.log("hide entries");
  $("#entries").animate({ opacity: '1' }, function () {
    $("#entries").removeClass("entriesDepth");
  });
};

},{}]},{},[1])
//# sourceMappingURL=game.js.map
