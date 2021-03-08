const express = require('express');
const router = express.Router();

module.exports = router;

const {
    checkAdmin,
    asyncDatabaseProcess,
    asyncAdminProcess,
} = require('../services');

let isAdmin = false;

router.get('*', function (req, res, next) {
    isAdmin = checkAdmin(req);
    next();
});

router.get('/data', function (req, res, next) {
    asyncDatabaseProcess(req.query)
        .then((data) => {
            if (isAdmin) {
                data['isAdmin'] = true;
            }
            return data;
        })
        .then((data) => {
            res.send(data);
        })
        .catch(() => {
            res.status(500).send();
        });
});

router.post('/data', function (req, res, next) {
    if (isAdmin) {
        // ...
    } else {
        // ...
    }
    res.send({});
});

router.delete('/data', function (req, res, next) {
    if (isAdmin) {
        // ...
    } else {
        // ...
    }
    res.send({});
});
