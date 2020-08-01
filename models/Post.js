const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema

const PostSchema = new Schema({

	post_dtl:{
		
			type: String,
			required: true

	},

	
	post_image:{
			type: String,
			required: false

	},


	post_date:{

		type: Date,
		default: Date.now

	}

});

module.exports = Post = mongoose.model('post', PostSchema);