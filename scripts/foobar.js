var foobar = function() {};

foobar.prototype.print = function(){
	console.log('Foo bar!');
};

module.exports = new foobar();
