const itemService = require('../service/item.service');
const itemModel = require('../repository/model/item.model');

exports.createItem = (req, res) => {
    itemModel.create({ id: req.body.id, item_name:req.body.item_name, unit_cost: req.body.unit_cost})
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
    itemService.getItemById(req.params.id).then(item => {
        res.send(item);
    })
};

exports.updateItem = (req, res) => {
    const id = req.params.id;
    itemModel.updateItem({
        item_name: req.body.item_name, unit_cost: req.body.unit_cost})
            .then(() => {
                res.status(200).send("updated successfully a item with id = " + id)})
            .catch((error) => res.send(error))
};

exports.deleteItem = (req, res) => {
    const id = req.params.id;
    itemService.deleteItem(id).then(() => {
        res.status(200).send('deleted successfully a item with id = ' + id);
    });
};
