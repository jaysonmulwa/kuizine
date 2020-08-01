const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");

const config = require("config");

const jwt = require("jsonwebtoken");

//Post model

const Post = require("../../models/Post");

//@route GET api/post
//@desc GET ALL Posts
//@access public
router.get("/", async (req, res) => {
	try {
		const post_items = await Post.find();

		if (!post_items) throw Error("No items");

		res.status(200).json(post_items);
	} catch (e) {
		res.status(400).json({ msg: e.message });
	}
});

//@route POST api/publish
//@desc Publish new Post
//@access public
router.post("/", (req, res) => {
	/**

	if same image then error

	so save images with unique names

	uuid


	**/

	//Image

	const post_image = "";

	if (req.files === null) {
		//return res.status(400).json({ msg: "No file uploaded" });

		const post_image = "";
	} else {
		const file = req.files.file;

		const post_image = file.name;

		file.mv(
			`${process.cwd()}/client/public/_img_uploads/_post/${file.name}`,
			(err) => {
				if (err) {
					console.error(err);

					return res.status(500).json({
						msg: "Oops!, There was an Error Uploading Image",
					});
				}
			}
		);
	}

	//res.send('publish');
	const { post_dtl, time, origin } = req.body;

	//Simple Validation
	if (!post_dtl) {
		return res.status(400).json({ msg: "Please Type Something" });
	}

	//Check existing Post with same exact steps.
	//The post below is a noun not the verb.. Actually i havent used the verb anywhere except in the router.

	Post.findOne({ post_dtl }).then((post) => {
		//if (post)return res.status(400).json({ msg: "Post Already Exists" });

		const newPost = new Post({
			post_dtl,
			post_image,
		});

		//Create Salt & hash

		bcrypt.genSalt(10, (err, salt) => {
			//bcrypt.hash(newPost.steps, salt, (err, hash) => {

			//if (err) throw err;

			//newPost.steps = hash;

			newPost.save().then((post) => {
				jwt.sign(
					{ id: post.id },
					config.get("jwtSecret"),
					{ expiresIn: 3600 },
					(err, token) => {
						if (err) throw err;
						res.json({
							token,
							post: {
								id: post.id,
								post_dtl: post.post_dtl,
								post_image: post.post_image,
							},
						});
					}
				);
			});
			//})
		});
	});
});

module.exports = router;
