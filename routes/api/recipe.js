const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");

const config = require("config");

const jwt = require("jsonwebtoken");

//Recipe model

const Recipe = require("../../models/Recipe");

/*const Post = require("../../models/Post");
const post_items = await Post.find();

		const recipe_items = { ...recipe_items_, ...post_items };


		  _db.collection('project1').insertOne({users : users} , function(err){
            if(err) {console.log('no insert!');}
            console.log('Data inserted!');
        });


        ;*/

//@route GET api/publish
//@desc GET ALL Recipe
//@access public
router.get("/", async (req, res) => {
	try {
		const recipe_items = await Recipe.find();

		if (!recipe_items) throw Error("No items");

		res.status(200).json(recipe_items);
	} catch (e) {
		res.status(400).json({ msg: e.message });
	}
});

//@route POST api/publish
//@desc Publish new Recipe
//@access public
router.post("/", (req, res) => {
	/**

	if same image then error

	so save images with unique names

	uuid


	**/

	//Image

	const recipe_image = "";

	if (req.files === null) {
		//return res.status(400).json({ msg: "No file uploaded" });

		const recipe_image = "";
	} else {
		const file = req.files.file;

		const recipe_image = file.name;

		file.mv(
			`${process.cwd()}/client/public/_img_uploads/_recipe/${file.name}`,
			(err) => {
				if (err) {
					//return res.status(500).send(err);
					return res.status(500).json({
						msg: "Oops!, There was an Error Uploading Image",
					});
				}
				//res.json({ fileName: file.name, filePath: `/_img_uploads/_recipe/${file.name}` });
			}
		);
	}

	//res.send('publish');
	const { recipe_name, ingredients, steps, time, origin } = req.body;

	//Simple Validation
	if (!recipe_name || !ingredients || !steps) {
		return res.status(400).json({ msg: "Please Enter All Fields" });
	}

	//Check existing Recipe with same exact steps

	Recipe.findOne({ steps }).then((recipe) => {
		if (recipe)
			return res.status(400).json({ msg: "Recipe Already Exists" });

		const newRecipe = new Recipe({
			recipe_name,
			ingredients,
			steps,
			time,
			origin,
			recipe_image,
		});

		//Create Salt & hash

		bcrypt.genSalt(10, (err, salt) => {
			//bcrypt.hash(newRecipe.steps, salt, (err, hash) => {

			//if (err) throw err;

			//newRecipe.steps = hash;

			newRecipe.save().then((recipe) => {
				jwt.sign(
					{ id: recipe.id },
					config.get("jwtSecret"),
					{ expiresIn: 3600 },
					(err, token) => {
						if (err) throw err;
						res.json({
							token,
							recipe: {
								id: recipe.id,
								recipe_name: recipe.recipe_name,
								ingredients: recipe.ingredients,
								steps: recipe.steps,
								time: recipe.time,
								origin: recipe.origin,
								recipe_image: recipe.recipe_image,
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
