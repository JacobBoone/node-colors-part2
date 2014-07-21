var colorutil = require('./colorutil.js')

		var r = process.argv[2];
		var g = process.argv[3];
		var b = process.argv[4];



console.log(colorutil.darken(r,g,b))
console.log(colorutil.darken(5,10,3))