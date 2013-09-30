var kont = require('kontroller'),
	Driver = require('kontroller').BaseController.constructClass();

before(think, {only: 'brake'});

// define action
Driver.actions.accelerate = function accelerate(c) {
    c.send('accelerating!');
};

// and another one
Driver.actions.brake = function brake(req, res, next) {
    res.send('braking!');
};

Driver.actions.index = function index(c) {
	c.send('Indexing');
};

// exports.brake = function(req, res, next) {
// 	console.log('in BRAKE in BRAKE in BRAKE in BRAKE in BRAKE ');
// 	res.send('asds')
// };

// exports.think = function(req, res, next) {
// 	console.log('you are in THINK. You were THINKING');
// };

// action('brake', function () {
//     send('accelerating!');
// });
