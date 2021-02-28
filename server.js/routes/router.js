const express = require('express');
const router = express.Router();

module.exports = router;

const {
    checkAdmin,
    asyncDatabaseProcess,
    asyncAdminProcess,
} = require('../services');

let isAdmin = false;

// checks for admin
router.all('/*', async (req, res, next) => {
    isAdmin = await checkAdmin(req);
    next();
});

// handles /data_1
router.get('/data_1', async function (req, res, next) {
    if (isAdmin) {
        // ...
    } else {
        // ...
    }
    res.send({});
});

// handles /data_2
router.get('/data_2', async function (req, res, next) {
    if (isAdmin) {
        // ...
    } else {
        // ...
    }
    res.send({});
});

// handles data
router.get('/data', async function (req, res, next) {
    const query = req.query;

    const data = await asyncDatabaseProcess(query);

    if (isAdmin) {
        const adminData = await asyncAdminProcess();
        data['adminData'] = adminData;
    }

    res.send(data);
});
