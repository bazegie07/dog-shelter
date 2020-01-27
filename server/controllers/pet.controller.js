const Pet = require('../models/product.model');

module.exports = {
    
    create(req, res) {
        Pet.create(req.body)
        .then(pet => res.json(pet))
        .catch(err => res.status(400).json(err));
    },
    getAll(_req, res) {
        Pet.find().sort({type: 1})
        .then(pet => res.json(pet))
        .catch(err => res.json(err));
    },

    getOne(req, res) {
        Pet.findById(req.params.id)
        .then(pet => res.json(pet))
        .catch(res.json);
    },
    delete(req, res) {
        Pet.findByIdAndDelete(req.params.id)
        .then(result => {
            console.log(result);
            res.json({status: 'Success'})
        })
        .catch(err => res.json(err));
    },

    update(req, res) {
        Pet.findByIdAndUpdate(req.params.id,
            {
                name: req.body.name,
                type: req.body.type,
                description: req.body.description,
                skillone: req.body.skillone,
                skilltwo: req.body.skilltwo,
                skillthree: req.body.skillthree
            },
            {
                runValidators: true,
                new: true
            }
            )
            .then(pet => res.json(pet))
            .catch(err => res.status(400).json(err));
    }
}