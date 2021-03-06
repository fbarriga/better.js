var Bjs	= Bjs	|| require('../better.js')

Bjs.overloadFunctionAttr()

//////////////////////////////////////////////////////////////////////////////////
//		parent class								//
//////////////////////////////////////////////////////////////////////////////////

var Animal	= function(){
}

Animal.prototype.isVegetal	= function(){
	return false;
}

//////////////////////////////////////////////////////////////////////////////////
//		child class							//
//////////////////////////////////////////////////////////////////////////////////


var Cat	= function(name){
	// Animal.call( this );
	this.name	= name
	console.log('end of ctor')
}

Cat.prototype = Object.create( Animal.prototype );

Cat.prototype.salute	= function(){
	return 'miaou'
}

//////////////////////////////////////////////////////////////////////////////////
//		better.js for Cat						//
//////////////////////////////////////////////////////////////////////////////////

Cat	= Bjs.fn(Cat)
		//.typeCheck([String], [undefined])
		.after(function(){
			console.log('name', this.name)
// TODO here the ```this``` should be one of the intanciated object
//			console.assert(arguments[0] === Cat)
//			console.dir(arguments[0])
		})
		.done()

Cat.prototype.salute	= Bjs.fn(Cat.prototype.salute)
		.typeCheck([], [String])
		.done()

//////////////////////////////////////////////////////////////////////////////////
//		comment								//
//////////////////////////////////////////////////////////////////////////////////

var cat	= new Cat('kitty')
console.assert(cat instanceof Cat === true)
console.assert(cat instanceof Animal === true)

// console.dir(cat.salute)
console.log('salute=', cat.salute(), 'isVegetal', cat.isVegetal(), cat.name)

cat.name	= 23

