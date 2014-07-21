
module.exports = {
	 myColor: function(r,g,b){

		var luminosity = 0.2126*r + 0.7152*g + 0.0722*b

		return luminosity
		// console.log(luminosity) 
	},


	darken: function(r,g,b){


		// var darkLumin = [0.8*r, 0.8*g, 0.8*b]
		var darkLumin = 0.8*r + " " + 0.8*g + " " + 0.8*b

		return darkLumin

	},

};