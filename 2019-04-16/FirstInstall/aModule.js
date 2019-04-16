const myModule = {
	sayHi: function(name){
		console.log(myGreeting + ' ' + name);
	}
}

class Module {
	constructor(hi){
		this.hi = hi
	}
	sayHi() {
		return this.hi
	}
}