const itemService = require('../service/item.service');
const models = require('../models');

exports.createItem = (req, res) => {
    models.Item.create({id: req.body.id, item_name: req.body.item_name, unit_cost: req.body.unit_cost})
        .then(item => {
            res.send(item);
        }).catch(err => res.send(err));
};

exports.getAllItems = (req, res) => {
    itemService.getAllItems().then(item => {
        res.send(item);
    });
};

exports.getItemById = (req, res) => {
    models.Item.findById(req.params.id)
        .then(item => {
            res.send(item)
        })
        .catch((err) => {
            res.send(err);
        })
};

exports.updateItem = (req, res) => {
    const id = req.params.id;
    models.Item.update({
        item_name: req.body.item_name, unit_cost: req.body.unit_cost
    }, {where: {id: id}})
        .then(() => {
            res.status(200).send("updated successfully a item with id = " + id)
        })
        .catch((error) => res.send(error))
};

exports.deleteItem = (req, res) => {
    const id = req.params.id;
    models.Item.destroy({where: {id: id}}).then(() => {
        res.status(200).send('deleted successfully item with id = ' + id);
    });
};
