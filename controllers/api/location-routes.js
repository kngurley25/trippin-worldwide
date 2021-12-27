const router = require('express').Router();
const { Location } = require('../../models');

router.get('/', (req, res) => {
    Location.findAll({
        include: [
            'posts'
        ],
        order: [['country', 'ASC']],
    })
    .then(dbLocationData => res.json(dbLocationData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Location.findOne({
        where: {
            id: req.params.id
        },
        include: [
            'posts'
        ]
    })
    .then(dbLocationData => res.json(dbLocationData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;