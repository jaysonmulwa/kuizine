const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');

//User model

const User =  require('../../models/User');


//@route POST api/auth
//@desc Auth User
//@access public
router.post('/', (req, res) => {

	//res.send('register');
	const { email, password} = req.body;

	//Simple Validation
	if( !email || !password ){

		return res.status(400).json({ msg: 'Please Enter All Fields'});

	}

	//Check existing User
	
		User.findOne({email}).then(user => {

		if(!user) return res.status(400).json({ msg: 'User Does Not Exists'});

		

		bcrypt.compare(password, user.password)
		.then(isMatch => {
				if(!isMatch) return res.status(400).json({ msg: 'Doesnt Match, Invalid credentials'});
				jwt.sign(
							{ id: user.id },
							config.get('jwtSecret'),
							{ expiresIn: 3600 },
							(err, token) =>{
									if (err) throw err;
									res.json({
										token,
										user: {
											id: user.id,
											name: user.name,
											email: user.email


										}
									});

							}
						)

		})
		
	})




});

//@route GET api/auth/user
//@desc GET User Data
//@access private

router.get('/user', auth, (req, res) => {

	User.findById(req.user.id)
	.select('-password')
	.then(user => res.json(user));
});

module.exports = router;