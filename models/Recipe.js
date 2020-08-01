const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema

const RecipeSchema = new Schema({

	recipe_name:{
			type: String,
			required: true

	},

	ingredients:{
			type: String,
			required: true

	},
	steps:{
			type: String,
			required: true

	},

	time:{
			type: String,
			required: true

	},

	origin:{
			type: String,
			required: true

	},

	recipe_image:{
			type: String,
			required: false

	},


	register_date:{

		type: Date,
		default: Date.now

	}

});

module.exports = Recipe = mongoose.model('recipe', RecipeSchema);