const express = require('express');
const router = express.Router();


//Item model

const Item =  require('../../models/Item');


//@route GET api/items
//@desc GET ALL Items
//@access public
router.get('/', async (req, res) => {

	/*Item.find()
	.sort({ date :-1})
	.then(items => res.json(items))
	.catch(err => res.status(404).json({success: false}));*/

	try {
    const items = await Item.find().sort({ date :-1});

    if (!items) throw Error('No items');

	    res.status(200).json(items);

	  } catch (e) {

	    res.status(400).json({ msg: e.message });

  }


});

//@route POST api/items
//@desc Create a post
//@access public
router.post('/', (req, res) => {

	const newItem = new Item({
		name: req.body.name
	});

	newItem
	.save()
	.then(item => res.json(item));


});

//@route DELETE api/items/:id
//@desc DEELET ITEM
//@access public
router.delete('/:id', (req, res) => {

	Item.findById(req.params.id)
	.then(item => item.remove().then(() => res.json({success: true})))
	.catch(err => res.status(404).json({success: false}));
});



module.exports = router;