const express = require('express')

const router = express.Router()

const Asset = require('../models/assetModel')

router.route('/').get(function (req, resp) {
    Asset.find({}, function (err, assets) {
        if (err) {
            return resp.send(err)
        }
        else {
            return resp.json(assets)
        }
    })
})


router.route('/').post(function (req, resp) {
    const newAsset = new Asset({
        PropertyAddress: req.body.address,
        PropertyValue: req.body.value,
        PropertyPurchaseDate: req.body.date,
        MortgageBalance: req.body.balance
    })
    newAsset.save(function (err) {
        if (err) {
            return resp.send(err)
        }
        else {
            return resp.send('Created !')
        }
    })

})


router.route('/:id').put(function (req, resp) {
    Asset.findByIdAndUpdate(req.params.id,
        {
            PropertyAddress: req.body.PropertyAddress,
            PropertyValue: req.body.PropertyValue,
            PropertyPurchaseDate: req.body.PropertyPurchaseDate,
            MortgageBalance: req.body.MortgageBalance
        }, function (err) {
            if (err) {
                return resp.send(err)
            }
            else {
                return resp.send('Record Updated !')
            }
        })


})

module.exports = router