const express = require('express');
const Resource = require('../models/resourceModel.js');
const router = express.Router();

router.get('/', (req, res) => {
	Resource.getResources().then((resource) => {

		res.status(200).json(resource);
		res
		.status(400)
		.json({ UHH: 'no resources here' })
	})
		.catch(() => {
			res.status(500).json({ NOPE: 'not sure' });
		});
});

router.get('/:id', (req, res) => {
	const { id } = req.params;
Resource.getResourceById(id)
		.then((resource) => {
		
			res.status(200).json({
				INCOMING: `resource: ${id},`,
				SEE: resource,
			})
			res
			.status(400)
			.json({ MISSING: `resource: ${id} is not here` })
			})
				.catch(() => {
					res.status(500).json({ NOPE: 'not sure' });
				});
});

router.post('/', (req, res) => {
	const { id } = req.params;
	const body = req.body;
	const resource = Resource.addResource(body, id);
	resource
		? res.status(201).json({ RECIEVING: `new resource: ${id}`, DETAILS: body })
		: res
				.status(400)
				.json({ LOST: 'resource' })
				.catch(() => {
					res.status(500).json({ OOPS: 'resource crash' });
				});
});

router.delete('/:id', (req, res) => {
	const { id } = req.params;
	const resource = Resource.removeResource(id);
	resource
		? res.status(201).json({ POOF: `resource id: ${id} - gone` })
		: res
				.status(400)
				.json({ SORRY: 'no deleting this resource' })
				.catch(() => {
					res.status(500).json({ NOTHING: 'broken' });
				});
});

module.exports = router;
