const express = require('express');
const Resource = require('../models/resourceModel.js');
const router = express.Router();

router.get('/', (req, res) => {
	const resource = Resource.getResources();
	resource
		? res.status(200).json(resource)
		: res
				.status(400)
				.json({ UHH: 'no resources here' })
				.catch(() => {
					res.status(500).json({ NOPE: 'not sure' });
				});
});

module.exports = router;
